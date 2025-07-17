// src/app/api/contact/route.ts
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resendインスタンスを初期化
const resend = new Resend(process.env.RESEND_API_KEY);

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

export async function POST(request: Request) {
  console.log("API Route Called");
  console.log("環境変数:", {
    RESEND_API_KEY: process.env.RESEND_API_KEY ? "設定あり" : "未設定",
    MAIL_FROM: process.env.MAIL_FROM || "未設定",
    NODE_ENV: process.env.NODE_ENV || "未設定",
  });

  try {
    const body = await request.json();
    const { name, email, companyName, contactType, subject, message } = body;

    console.log("リクエストボディ:", { name, email, contactType, subject });

    // バリデーション
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "すべての必須項目を入力してください", success: false },
        { status: 400 }
      );
    }

    // 法人プランの場合は会社名必須
    if (contactType === "corporate" && !companyName) {
      return NextResponse.json(
        {
          error: "法人プランのお問い合わせには会社名が必須です",
          success: false,
        },
        { status: 400 }
      );
    }

    // 問い合わせタイプの日本語表記を取得
    const contactTypeJapanese = getContactTypeJapanese(contactType);

    // 送信元アドレスを設定
    const from = process.env.MAIL_FROM || "noreply@sns-share.com";

    // 送信先アドレスを設定（問い合わせタイプによって変更可能）
    let to = process.env.MAIL_TO || "support@sns-share.com";
    if (contactType === "corporate") {
      to = process.env.MAIL_CORPORATE || "corporate@sns-share.com";
    }

    // サイト名をブランド化
    const siteName = "Share";

    // HTMLメール署名
    const htmlSignature = `
<div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 550px; color: #333; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
  <div style="font-size: 16px; font-weight: bold; margin: 0; color: #1E40AF;">Share サポートチーム</div>
  <div style="font-size: 14px; margin: 2px 0 8px; color: #4B5563;">株式会社Senrigan Share運営事務局</div>
  <div style="border-top: 2px solid #3B82F6; margin: 12px 0; width: 100px;"></div>
  
  <div style="font-size: 13px; margin: 4px 0;">
    メール: <a href="mailto:support@sns-share.com" style="color: #3B82F6; text-decoration: none;">support@sns-share.com</a><br>
    電話: 082-208-3976（平日10:00〜18:00 土日祝日休業）<br>
    ウェブ: <a href="https://sns-share.com" style="color: #3B82F6; text-decoration: none;">sns-share.com</a>
  </div>
  
  <div style="margin: 12px 0; font-style: italic; color: #4B5563; font-size: 13px; border-left: 3px solid #3B82F6; padding-left: 10px;">
    すべてのSNS、ワンタップでShare
  </div>
  
  <div style="font-size: 12px; color: #6B7280; margin-top: 8px;">
    〒731-0137 広島県広島市安佐南区山本2-3-35<br>
    運営: <a href="https://bialpha.com" style="color: #3B82F6; text-decoration: none; font-weight: 500;" target="_blank">株式会社Senrigan</a>
  </div>
  
  <div style="margin-top: 10px;">
    <a href="https://sns-share.com/legal/privacy" style="display: inline-block; margin-right: 8px; color: #3B82F6; text-decoration: none;">プライバシーポリシー</a> | 
    <a href="https://sns-share.com/legal/terms" style="display: inline-block; margin-right: 8px; color: #3B82F6; text-decoration: none;">利用規約</a>
  </div>
</div>
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
${htmlSignature}
</div>
    `;

    // 自動返信用のメール本文（HTML形式）
    const autoReplyHtml = `
<div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
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
${htmlSignature}
  <p style="color: #6B7280; font-size: 13px; margin-top: 30px; padding-top: 10px; border-top: 1px solid #e2e8f0;">
    ※このメールは自動送信されています。このメールには返信しないでください。
  </p>
</div>
    `;

    try {
      console.log("Resendで送信を試みます:", { to, from, subject });

      // Resendを使用して管理者向けメールを送信
      const adminEmailResult = await resend.emails.send({
        from: `${siteName} <${from}>`,
        to: [to],
        subject: `【お問い合わせ】${subject}`,
        html: adminEmailHtml,
      });

      console.log("Resendのレスポンス:", adminEmailResult);

      if (adminEmailResult.error) {
        console.error("管理者向けメール送信エラー:", adminEmailResult.error);
        throw new Error(adminEmailResult.error.message);
      }

      // Resendを使用してユーザー向け自動返信メールを送信
      const autoReplyResult = await resend.emails.send({
        from: `${siteName} <${from}>`,
        to: [email],
        subject: `【${siteName}】お問い合わせを受け付けました`,
        html: autoReplyHtml,
      });

      if (autoReplyResult.error) {
        console.error("自動返信メール送信エラー:", autoReplyResult.error);
        // 自動返信のエラーはユーザーに返さない（管理者には送信できているため）
        console.warn(
          "自動返信メールの送信に失敗しましたが、お問い合わせは正常に処理されました"
        );
      }

      return NextResponse.json({
        message: "お問い合わせが送信されました",
        success: true,
      });
    } catch (emailError) {
      console.error("メール送信エラー:", emailError);

      // 開発環境では詳細なエラーを返す（本番環境ではシンプルなエラーメッセージに変更する）
      const errorMessage =
        process.env.NODE_ENV === "development"
          ? `メール送信に失敗しました: ${
              emailError instanceof Error
                ? emailError.message
                : String(emailError)
            }`
          : "お問い合わせの送信に失敗しました";

      return NextResponse.json(
        { error: errorMessage, success: false },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("お問い合わせ処理エラー:", error);
    return NextResponse.json(
      { error: "お問い合わせの送信に失敗しました", success: false },
      { status: 500 }
    );
  }
}