// src/app/support/help/page.tsx
import { PageLayout } from "@/components/layout/PageLayout";
import Link from "next/link";
import React from "react";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "ヘルプセンター | Share（シェア）デジタル名刺サービス",
  description:
    "Share（シェア）デジタル名刺サービスのヘルプセンター。使い方ガイド、トラブルシューティング、よくある質問などをご案内します。",
  openGraph: {
    title: "ヘルプセンター | Share（シェア）",
    description:
      "Share（シェア）デジタル名刺サービスの詳しい使い方ガイド。初めての方から上級者まで、サービスを最大限に活用するためのヒントが見つかります。",
    type: "website",
  },
};

// viewportを独立して定義
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

interface HelpCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  articles: {
    id: string;
    title: string;
    excerpt: string;
  }[];
}

export default function HelpPage() {
  // ヘルプカテゴリー
  const helpCategories: HelpCategory[] = [
    {
      id: "getting-started",
      title: "はじめに",
      description: "Shareの基本的な使い方をご紹介します。",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      articles: [
        {
          id: "what-is-share",
          title: "Shareとは何ですか？",
          excerpt: "Shareの基本概念と主な特徴についての解説です。",
        },
        {
          id: "create-account",
          title: "アカウントの作成方法",
          excerpt: "新規アカウントの登録手順をご紹介します。",
        },
        {
          id: "setup-profile",
          title: "プロフィールの設定方法",
          excerpt: "SNSアカウントの追加やプロフィール情報の編集方法について。",
        },
      ],
    },
    {
      id: "features",
      title: "機能・使い方",
      description: "Shareの主要機能の使い方をご紹介します。",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
      articles: [
        {
          id: "add-sns-accounts",
          title: "SNSアカウントの追加方法",
          excerpt: "各種SNSアカウントを追加する手順です。",
        },
        {
          id: "generate-qr-code",
          title: "QRコードの生成方法",
          excerpt: "自分専用のQRコードを生成し、活用する方法をご紹介します。",
        },
        {
          id: "share-profile",
          title: "プロフィールの共有方法",
          excerpt:
            "QRコードやリンクを使ってプロフィールを共有する方法をご紹介します。",
        },
      ],
    },
    {
      id: "account-billing",
      title: "アカウント・料金",
      description: "アカウント設定や料金プランに関する情報です。",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      articles: [
        {
          id: "subscription-plans",
          title: "料金プランについて",
          excerpt: "各プランの料金と機能の違いについてご説明します。",
        },
        {
          id: "payment-methods",
          title: "お支払い方法",
          excerpt: "利用可能なお支払い方法と設定手順をご紹介します。",
        },
        {
          id: "cancel-subscription",
          title: "サブスクリプションの解約方法",
          excerpt: "プランの解約手順と注意点についての説明です。",
        },
      ],
    },
    {
      id: "troubleshooting",
      title: "トラブルシューティング",
      description: "よくある問題と解決方法をご紹介します。",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      articles: [
        {
          id: "login-issues",
          title: "ログインできない場合",
          excerpt: "ログイン時の問題と解決方法についての説明です。",
        },
        {
          id: "qr-code-not-working",
          title: "QRコードが読み取れない",
          excerpt: "QRコードのスキャンに問題がある場合の対処法です。",
        },
        {
          id: "sns-connection-issues",
          title: "SNSアカウントの接続エラー",
          excerpt: "SNSアカウント連携時のエラーと解決方法をご紹介します。",
        },
      ],
    },
  ];

  return (
    <PageLayout
      title="ヘルプセンター"
      breadcrumbs={[
        { name: "ホーム", href: "/" },
        { name: "ヘルプセンター", href: "/support/help" },
      ]}
    >
      <div className="space-y-8">
        {/* 検索バー */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-center">
            お探しのことはありますか？
          </h2>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="キーワードを入力してヘルプ記事を検索..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary hover:text-blue-700">
              検索
            </button>
          </div>
        </div>

        {/* カテゴリー別ヘルプ */}
        <div className="grid md:grid-cols-2 gap-6">
          {helpCategories.map((category) => (
            <div
              key={category.id}
              className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3 text-primary">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {category.articles.map((article) => (
                  <li key={article.id}>
                    <Link
                      href={`/support/help/${category.id}/${article.id}`}
                      className="group block hover:bg-gray-50 p-2 rounded-md transition-colors"
                    >
                      <div className="font-medium text-primary group-hover:text-blue-700">
                        {article.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {article.excerpt}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4 text-right">
                <Link
                  href={`/support/help/${category.id}`}
                  className="text-sm text-primary hover:text-blue-700 inline-flex items-center"
                >
                  すべての記事を見る
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* お問い合わせリンク */}
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">
            解決しない問題がありますか？
          </h3>
          <p className="text-gray-600 mb-4">
            ヘルプセンターで解決しない問題がございましたら、お気軽にお問い合わせください。
            サポートチームが丁寧に対応いたします。
          </p>
          <Link
            href="/support/contact"
            className="inline-flex items-center justify-center px-5 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            お問い合わせはこちら
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

        {/* よく検索されるトピック */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6 text-center">
            よく検索されるトピック
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "QRコードの作成方法",
              "料金プランについて",
              "アカウント削除方法",
              "支払い方法の変更",
              "プロフィールの編集",
              "SNS連携の解除",
              "パスワードの変更",
              "プライバシー設定",
            ].map((topic, index) => (
              <Link
                key={index}
                href={`/support/help/search?q=${encodeURIComponent(topic)}`}
                className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:bg-gray-50 hover:border-gray-300 transition-colors"
              >
                <span className="text-sm text-gray-700">{topic}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}