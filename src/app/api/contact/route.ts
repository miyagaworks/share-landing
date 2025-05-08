// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, companyName, contactType, subject, message } = body;

    // バリデーション
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "すべての必須項目を入力してください" },
        { status: 400 }
      );
    }

    // 法人プランの場合は会社名必須
    if (contactType === "corporate" && !companyName) {
      return NextResponse.json(
        { error: "法人プランのお問い合わせには会社名が必須です" },
        { status: 400 }
      );
    }

    // メール送信用のトランスポーターを設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 問い合わせタイプの日本語表記を取得
    const contactTypeJapanese = getContactTypeJapanese(contactType);

    // 送信元アドレスを設定
    const from = process.env.MAIL_FROM || "noreply@sns-share.com";

    // 送信先アドレスを設定（問い合わせタイプによって変更可能）
    let to = process.env.MAIL_TO || "support@sns-share.com";
    if (contactType === "corporate") {
      to = process.env.MAIL_CORPORATE || "corporate@sns-share.com";
    }

    // 会社情報の表示（ある場合のみ）
    const companyInfo = companyName ? `\n会社名: ${companyName}` : "";

    // 管理者向けメール本文（テキスト形式）
    const adminEmailText = `
新しいお問い合わせが届きました

お名前: ${name}
メールアドレス: ${email}${companyInfo}
お問い合わせカテゴリ: ${contactTypeJapanese}
件名: ${subject}

お問い合わせ内容:
${message}
    `;

    // 管理者向けメール本文（HTML形式）
    const adminEmailHtml = `
<div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #1E40AF; margin-bottom: 20px;">新しいお問い合わせが届きました</h2>
  
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <tr>
      <th style="text-align: left; padding: 8px; background-color: #f8fafc; border: 1px solid #e2e8f0; width: 30%;">お名前</th>
      <td style="padding: 8px; border: 1px solid #e2e8f0;">${name}</td>
    </tr>
    <tr>
      <th style="text-align: left; padding: 8px; background-color: #f8fafc; border: 1px solid #e2e8f0;">メールアドレス</th>
      <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
    </tr>
    ${
      companyName
        ? `
    <tr>
      <th style="text-align: left; padding: 8px; background-color: #f8fafc; border: 1px solid #e2e8f0;">会社名</th>
      <td style="padding: 8px; border: 1px solid #e2e8f0;">${companyName}</td>
    </tr>
    `
        : ""
    }
    <tr>
      <th style="text-align: left; padding: 8px; background-color: #f8fafc; border: 1px solid #e2e8f0;">お問い合わせカテゴリ</th>
      <td style="padding: 8px; border: 1px solid #e2e8f0;">${contactTypeJapanese}</td>
    </tr>
    <tr>
      <th style="text-align: left; padding: 8px; background-color: #f8fafc; border: 1px solid #e2e8f0;">件名</th>
      <td style="padding: 8px; border: 1px solid #e2e8f0;">${subject}</td>
    </tr>
  </table>
  
  <div style="margin-bottom: 20px;">
    <h3 style="color: #1E40AF; margin-bottom: 10px;">お問い合わせ内容:</h3>
    <div style="background-color: #f8fafc; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0; white-space: pre-line; text-align: justify;">${message}</div>
  </div>
</div>
    `;

    // 自動返信用のメール本文（テキスト形式）
    const autoReplyText = `
${name} 様

お問い合わせありがとうございます。
以下の内容でお問い合わせを受け付けました。${
      contactType === "corporate"
        ? "担当者より1営業日以内にご連絡いたします。"
        : "内容を確認の上、必要に応じてご連絡いたします。"
    }

お問い合わせカテゴリ: ${contactTypeJapanese}
件名: ${subject}
お問い合わせ内容:
${message}

※このメールは自動送信されています。このメールには返信しないでください。
    `;

    // 自動返信用のメール本文（HTML形式）
    const autoReplyHtml = `
<div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <p style="font-size: 16px; margin-bottom: 20px;">${name} 様</p>
  
  <p style="margin-bottom: 20px;">
    お問い合わせありがとうございます。<br>
    以下の内容でお問い合わせを受け付けました。${
      contactType === "corporate"
        ? "担当者より1営業日以内にご連絡いたします。"
        : "内容を確認の上、必要に応じてご連絡いたします。"
    }
  </p>
  
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <tr>
      <th style="text-align: left; padding: 8px; background-color: #f8fafc; border: 1px solid #e2e8f0; width: 30%;">お問い合わせカテゴリ</th>
      <td style="padding: 8px; border: 1px solid #e2e8f0;">${contactTypeJapanese}</td>
    </tr>
    <tr>
      <th style="text-align: left; padding: 8px; background-color: #f8fafc; border: 1px solid #e2e8f0;">件名</th>
      <td style="padding: 8px; border: 1px solid #e2e8f0;">${subject}</td>
    </tr>
  </table>
  
  <div style="margin-bottom: 20px;">
    <h3 style="color: #1E40AF; margin-bottom: 10px;">お問い合わせ内容:</h3>
    <div style="background-color: #f8fafc; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0; white-space: pre-line; text-align: justify;">${message}</div>
  </div>
  
  <p style="color: #6B7280; font-size: 13px; margin-top: 30px; padding-top: 10px; border-top: 1px solid #e2e8f0;">
    ※このメールは自動送信されています。このメールには返信しないでください。
  </p>
</div>
    `;

    // HTMLメール署名
    const htmlSignature = `
<div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 550px; color: #333; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
  <div style="font-size: 16px; font-weight: bold; margin: 0; color: #1E40AF;">Share サポートチーム</div>
  <div style="font-size: 14px; margin: 2px 0 8px; color: #4B5563;">ビイアルファ株式会社 Share運営事務局</div>
  <div style="border-top: 2px solid #3B82F6; margin: 12px 0; width: 100px;"></div>
  
  <div style="font-size: 13px; margin: 4px 0;">
    メール: <a href="mailto:support@sns-share.com" style="color: #3B82F6; text-decoration: none;">support@sns-share.com</a><br>
    電話: 082-208-3976（平日10:00〜18:00 土日祝日休業）<br>
    ウェブ: <a href="https://sns-share.com" style="color: #3B82F6; text-decoration: none;">https://sns-share.com</a>
  </div>
  
  <div style="margin: 12px 0; font-style: italic; color: #4B5563; font-size: 13px; border-left: 3px solid #3B82F6; padding-left: 10px;">
    すべてのSNS、ワンタップでShare
  </div>
  
  <div style="font-size: 12px; color: #6B7280; margin-top: 8px;">
    〒730-0046 広島県広島市中区昭和町6-11<br>
    運営: <a href="https://bialpha.com" style="color: #3B82F6; text-decoration: none; font-weight: 500;" target="_blank">ビイアルファ株式会社</a>
  </div>
  
  <div style="margin-top: 10px;">
    <a href="https://sns-share.com/legal/privacy" style="display: inline-block; margin-right: 8px; color: #3B82F6; text-decoration: none;">プライバシーポリシー</a> | 
    <a href="https://sns-share.com/legal/terms" style="display: inline-block; margin-right: 8px; color: #3B82F6; text-decoration: none;">利用規約</a>
  </div>
</div>
    `;

    // テキストメール署名
    const textSignature = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Share サポートチーム
ビイアルファ株式会社 Share運営事務局

メール: support@sns-share.com
電話: 082-208-3976（平日10:00〜18:00 土日祝日休業）
ウェブ: https://sns-share.com

すべてのSNS、ワンタップでShare

〒730-0046 広島県広島市中区昭和町6-11
運営: ビイアルファ株式会社 (https://bialpha.com)

プライバシーポリシー: https://sns-share.com/legal/privacy
利用規約: https://sns-share.com/legal/terms
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;

    // 管理者向けメール送信（マルチパート形式）
    await transporter.sendMail({
      from,
      to,
      subject: `【お問い合わせ】${subject}`,
      text: adminEmailText + textSignature, // プレーンテキスト版
      html: adminEmailHtml + htmlSignature, // HTML版
    });

    // 自動返信メール送信（マルチパート形式）
    await transporter.sendMail({
      from,
      to: email,
      subject: `【Share】お問い合わせを受け付けました`,
      text: autoReplyText + textSignature, // プレーンテキスト版
      html: autoReplyHtml + htmlSignature, // HTML版
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { error: "お問い合わせの送信に失敗しました" },
      { status: 500 }
    );
  }
}

// お問い合わせタイプの日本語表記を取得する関数
function getContactTypeJapanese(type: string): string {
  const types: Record<string, string> = {
    account: "アカウントについて",
    billing: "お支払いについて",
    technical: "技術的な問題",
    feature: "機能に関する質問",
    feedback: "フィードバック",
    corporate: "法人プランについて",
    other: "その他",
  };
  return types[type] || "その他";
}