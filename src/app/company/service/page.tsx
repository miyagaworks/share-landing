// src/app/company/service/page.tsx
import { PageLayout } from "@/components/layout/PageLayout";
import Link from "next/link";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "サービス概要 | Share（シェア）デジタル名刺",
  description:
    "Share（シェア）デジタル名刺サービスの特徴や機能、活用方法についてご紹介します。複数のSNSアカウントを一つにまとめ、QRコードで簡単に共有できるサービスです。",
  openGraph: {
    title: "サービス概要 | Share（シェア）デジタル名刺",
    description:
      "複数のSNSアカウントを一つにまとめ、QRコードで簡単に共有できるデジタル名刺サービス「Share（シェア）」の特徴や機能を詳しく解説します。",
    type: "website",
  },
};

// viewportを独立して定義
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// 環境に応じてサインアップURLを変更
const signupUrl =
  process.env.NODE_ENV === "production"
    ? "https://app.sns-share.com/auth/signup"
    : "http://localhost:3000/auth/signup";

export default function CompanyServicePage() {
  return (
    <PageLayout
      title="サービスについて"
      breadcrumbs={[
        { name: "ホーム", href: "/" },
        { name: "サービスについて", href: "/company/service" },
      ]}
    >
      <div className="space-y-8 text-justify">
        <section>
          <h2 className="text-xl font-semibold mb-4">Shareとは</h2>
          <p className="mb-4">
            Shareは、複数のSNSアカウントと連絡先情報を一つのデジタルプロフィールにまとめ、QRコードやNFCを通じて簡単に共有できるプラットフォームです。
          </p>
          <p className="mb-4">
            現代社会では、人々は複数のSNSを活用してコミュニケーションを取っています。ビジネスシーンでの名刺交換、イベントでの交流、友人との連絡先交換など、様々な場面で複数のアカウント情報を共有する機会があります。
          </p>
          <p>
            Shareを使えば、「このSNSも教えて」「あのアカウントも教えて」といった手間が省け、あなたの全てのオンラインプレゼンスを一度に共有することができます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">サービスの特徴</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-primary group-hover:text-white transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium">複数SNSの一元管理</h3>
              </div>
              <p className="text-gray-600">
                LINE、Instagram、X、Facebook、YouTubeなど、10種類以上のSNSアカウントを一つのプロフィールにまとめることができます。
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v1m6 11h2m-6-1h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium">QRコード共有</h3>
              </div>
              <p className="text-gray-600">
                自分だけのQRコードを生成して、相手に読み取ってもらうだけで全ての連絡先情報を共有できます。名刺にQRコードを印刷することも可能です。
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-primary group-hover:text-white transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium">カスタムリンク設定</h3>
              </div>
              <p className="text-gray-600">
                SNSアカウント以外にも、自分のブログやポートフォリオサイト、ECサイトなど任意のURLを追加することができます。あなたのオンラインプレゼンスを包括的に共有できます。
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium">マルチデバイス対応</h3>
              </div>
              <p className="text-gray-600">
                スマートフォン、タブレット、PCなど、どのデバイスからでもアクセスでき、常に最新の情報を管理できます。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">サービスの提供価値</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p>
                <span className="font-medium">時間の節約：</span>
                複数のSNSアカウントを個別に教える手間が省け、一度の操作で完結します。
              </p>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p>
                <span className="font-medium">プロフェッショナルな印象：</span>
                デジタル時代に適した洗練された連絡先共有方法により、先進的なイメージを与えます。
              </p>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p>
                <span className="font-medium">コネクション強化：</span>
                より多くのコミュニケーションチャネルを共有することで、相手とのつながりを深めることができます。
              </p>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p>
                <span className="font-medium">環境への配慮：</span>
                紙の名刺を減らすことで、環境負荷の低減に貢献します。
              </p>
            </li>
          </ul>
        </section>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            サービスを試してみませんか？
          </h2>
          <p className="mb-4">
            Shareは7日間の無料トライアル期間を提供しています。実際に使ってみて、その便利さをお確かめください。
          </p>
          <div className="flex justify-center">
            <Link
              href={signupUrl}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              無料トライアルを開始する
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}