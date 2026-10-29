// src/app/legal/transactions/page.tsx
import { PageLayout } from "@/components/layout/PageLayout";
import type { Metadata, Viewport } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Share（シェア）",
  description:
    "Share（シェア）デジタル名刺サービスの特定商取引法に基づく表記です。販売事業者情報、支払方法、返品・キャンセルポリシーなどをご案内します。",
  openGraph: {
    title: "特定商取引法に基づく表記 | Share（シェア）",
    description:
      "Share（シェア）デジタル名刺サービスの特定商取引法に基づく表記。サービス提供者情報や取引条件を明示しています。",
    type: "website",
    images: [
      {
        url: "https://sns-share.com/images/icons/ogp.png",
        width: 1200,
        height: 630,
        alt: "Share - デジタル名刺サービス",
      },
    ],
  },
};

// viewportを独立して定義
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function TransactionsPage() {
  return (
    <PageLayout
      title="特定商取引法に基づく表記"
      breadcrumbs={[
        { name: "ホーム", href: "/" },
        { name: "特定商取引法に基づく表記", href: "/legal/transactions" },
      ]}
    >
      <div className="space-y-6">
        <section>
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold bg-gray-50 w-1/3">
                  販売事業者
                </th>
                <td className="py-4 px-4">株式会社Senrigan</td>
              </tr>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold bg-gray-50">
                  代表者名
                </th>
                <td className="py-4 px-4">宮川 清実</td>
              </tr>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold bg-gray-50">
                  所在地
                </th>
                <td className="py-4 px-4">
                  〒731-0137
                  <br />
                  広島県広島市安佐南区山本2-3-35
                </td>
              </tr>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold bg-gray-50">
                  電話番号
                </th>
                <td className="py-4 px-4">
                  082-209-0181
                  <br />
                  （平日10:00〜18:00 土日祝日休業）
                </td>
              </tr>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold bg-gray-50">
                  メールアドレス
                </th>
                <td className="py-4 px-4">info@sns-share.com</td>
              </tr>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold bg-gray-50">
                  サービス名
                </th>
                <td className="py-4 px-4">Share</td>
              </tr>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold bg-gray-50">
                  サービス価格
                </th>
                <td className="py-4 px-4">
                  <ul className="list-disc pl-5 space-y-1 text-justify">
                    <li>個人プラン: 月額110円（税込）</li>
                    <li>個人プラン（年間）: 年額1,100円（税込）</li>
                    <li>法人スタータープラン: 月額1,100円（税込）〜</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold bg-gray-50">
                  ワンタップシールの価格
                </th>
                <td className="py-4 px-4 text-justify">
                  1枚550円（税込）。送料は、1回のご注文につき240円（税込）です。
                </td>
              </tr>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold bg-gray-50">
                  支払方法
                </th>
                <td className="py-4 px-4 text-justify">
                  クレジットカード決済（VISA、MasterCard、JCB、American
                  Express、Diners Club）
                </td>
              </tr>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold bg-gray-50">
                  支払時期
                </th>
                <td className="py-4 px-4 text-justify">
                  月額プラン:
                  申込時および契約更新時に1か月分の利用料をお支払いいただきます。
                  <br />
                  年間プラン:
                  申込時および契約更新時に1年分の利用料をお支払いいただきます。
                  <br />
                  ワンタップシール:
                  ご注文の時にお支払いいただきます。
                </td>
              </tr>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold bg-gray-50">
                  サービス提供時期
                </th>
                <td className="py-4 px-4 text-justify">
                  お申込み完了後、すぐにサービスをご利用いただけます。
                </td>
              </tr>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold bg-gray-50">
                  ワンタップシールの発送時期
                </th>
                <td className="py-4 px-4 text-justify">
                  お支払いの確認後、1〜3営業日以内に発送します。
                </td>
              </tr>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold bg-gray-50">
                  返品・キャンセル
                </th>
                <td className="py-4 px-4 text-justify space-y-2">
                  <p>
                    ご利用プラン:
                    解約はいつでも申請できます。月額プランは返金いたしません。年額プランは、ご利用の月数分を差し引いて返金いたします。解約の方法は、下の「解約方法」のとおりです。
                  </p>
                  <p>
                    ワンタップシール:
                    お客様ごとにプロフィールを書き込んでお作りするため、お客様のご都合による返品・交換はお受けしていません。不良品やご注文と違う品が届いた場合は、上記のメールアドレスか電話番号へご連絡ください。当社の負担で交換いたします。
                  </p>
                </td>
              </tr>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold bg-gray-50">
                  解約方法
                </th>
                <td className="py-4 px-4 text-justify">
                  解約は、ダッシュボードの「ご利用プラン」画面から、いつでも申請できます。解約後は、月額プランは契約期間の満了日をもって、年額プランはお選びいただいた解約日をもって、サービスの提供が終了します。解約と返金の条件と、解約後のデータの扱いは、
                  <Link
                    href="https://app.sns-share.com/legal/terms"
                    className="text-primary hover:underline"
                  >
                    利用規約
                  </Link>
                  の「7. 解約および返金」のとおりです。
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </PageLayout>
  );
}