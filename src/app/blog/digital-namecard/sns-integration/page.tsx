// src/app/blog/digital-namecard/sns-integration/page.tsx
"use client";

import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import { useState } from "react";

export default function SNSIntegrationBusinessCard() {
  const breadcrumbItems = useBreadcrumb();
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");

  // SNSプラットフォームのデータ
  const snsPlatforms = [
    {
      id: "line",
      name: "LINE",
      description:
        "日本で最も利用されているメッセージングアプリ。ビジネスシーンでの連絡手段として定着。",
      businessUse:
        "顧客とのコミュニケーション、グループでの情報共有、LINE公式アカウントの運用",
      tips: "友だち追加用のQRコードやURLを活用。ビジネス専用のLINE@アカウントも検討する。",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.6 14.8c-.8.8-4.8 2.8-5.6 3.2-.8.4-1.2.4-1.6 0-.4-.4-1.6-2-2-2.4-.4-.4-.8-.4-1.2 0-.4.4-1.2 1.2-1.6 1.6s-.8.4-1.2 0c-.4-.4-.8-1.2-.8-1.6s.4-.8.8-1.2c.4-.4 1.2-.8 1.6-.8s.8.4 1.2.8c.4.4 1.6 2 2 2.4.4.4.8.4 1.2 0 .4-.4 3.6-3.6 4-4 .4-.4.4-.8 0-1.2-.4-.4-4-2.4-4.4-2.8-.4-.4-.4-.8 0-1.2s.8-.4 1.2 0c.4.4 3.6 2.4 4 2.8.4.4.8 1.2.8 1.6s-.4 1.2-.8 1.6z" />
        </svg>
      ),
    },
    {
      id: "instagram",
      name: "Instagram",
      description:
        "ビジュアルコンテンツを中心としたSNS。企業やブランドのイメージ構築に効果的。",
      businessUse:
        "ブランディング、商品・サービスの視覚的PR、若年層へのアプローチ",
      tips: "プロフィールのURLを有効活用。ハイライト機能で重要情報をまとめて表示。",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      id: "x",
      name: "X",
      description:
        "リアルタイムの情報共有プラットフォーム。ビジネスニュースや業界情報の発信に最適。",
      businessUse: "最新情報の発信、顧客サポート、業界内でのネットワーキング",
      tips: "プロフィールにビジネス情報を明記。固定ツイートで重要情報を目立たせる。",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      id: "facebook",
      name: "Facebook",
      description:
        "世界最大のSNS。ビジネスページを通じて企業情報やイベントを発信。",
      businessUse: "企業ページの運営、イベント告知、ターゲティング広告",
      tips: "ビジネスページを作成し、会社情報を充実させる。Messengerを活用した顧客対応も検討。",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  // 構造化データ（schema.org形式）
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "SNSアカウントを一元管理するデジタル名刺の作成方法",
    description:
      "複数のSNSアカウントを一つのデジタル名刺にまとめる方法と、ビジネスシーンでの効果的な活用方法を解説します。",
    step: [
      {
        "@type": "HowToStep",
        name: "アカウント登録",
        text: "Share（シェア）のアカウントを作成します。",
      },
      {
        "@type": "HowToStep",
        name: "SNSアカウントの追加",
        text: "管理画面からSNSアカウントのURLを追加します。",
      },
      {
        "@type": "HowToStep",
        name: "プライオリティ設定",
        text: "重要なSNSアカウントの表示順序を設定します。",
      },
      {
        "@type": "HowToStep",
        name: "共有モードの設定",
        text: "ビジネス用とプライベート用で表示するSNSを切り替えます。",
      },
      {
        "@type": "HowToStep",
        name: "QRコード生成",
        text: "作成したデジタル名刺のQRコードを生成します。",
      },
    ],
  };

  // よくある質問データ
  const faqData = [
    {
      question: "SNSアカウントを一元管理するメリットは何ですか？",
      answer:
        "複数のSNSアカウントを一つのデジタル名刺にまとめることで、相手の好みや用途に合わせたコミュニケーションチャネルを一度に提供できます。名刺交換の際に、すべてのSNSアカウントを効率的に共有でき、相手は自分に合ったプラットフォームを選んでつながることができます。",
    },
    {
      question: "Share（シェア）で登録できるSNSの種類は？",
      answer:
        "LINE、YouTube、X、Instagram、TikTok、Facebook、Pinterest、Threads、note、BeRealなど、主要なSNSプラットフォームに対応しています。さらに、カスタムリンクを追加することで、その他のサービスやウェブサイトも登録できます。",
    },
    {
      question: "ビジネス用とプライベート用でSNSを使い分けられますか？",
      answer:
        "はい、Share（シェア）では共有モード機能により、ビジネス用とプライベート用でSNSアカウントの表示を切り替えることができます。これにより、TPOに合わせて適切な情報共有が可能になります。",
    },
    {
      question: "SNSアカウントの追加や変更は簡単にできますか？",
      answer:
        "とても簡単です。管理画面から新しいSNSアカウントのURLを追加するだけで、リアルタイムでデジタル名刺に反映されます。変更や削除も同様に簡単に行えます。",
    },
  ];

  // 構造化FAQデータを生成（schema.org形式）
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-white">
      {/* 構造化データを埋め込み */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* パンくずリスト */}
      <div className="bg-white py-2 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* ヒーローセクション */}
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-medium mb-4">
                活用テクニック
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                SNSアカウントを一元管理できるデジタル名刺の活用法
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                複数のSNSを一つのプロフィールにまとめてスマートな人脈構築
              </p>
              <p className="text-blue-50 text-justify">
                LINE、X、Instagram、Facebookなど、複数のSNSアカウントを運用している方が増えています。
                Share（シェア）のデジタル名刺なら、これらのSNSアカウントを一つにまとめて簡単に共有できます。
                本記事では、効果的なSNS一元管理の方法と、ビジネスシーンでの活用テクニックを詳しく解説します。
              </p>
            </div>
            <div className="md:w-1/3 md:pl-12">
              {/* モックアップイラスト */}
              <div className="bg-white/10 rounded-xl p-5">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4 text-center border-b border-gray-100">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2"></div>
                    <h3 className="font-bold text-gray-800">山田 太郎</h3>
                    <p className="text-sm text-gray-600">デジタルマーケター</p>
                  </div>
                  <div className="p-4 space-y-3">
                    {["LINE", "X", "Instagram", "Facebook"].map(
                      (sns, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xs text-primary font-bold">
                              {sns[0]}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div
                              className="h-2 bg-gray-200 rounded-full"
                              style={{ width: `${80 - index * 10}%` }}
                            ></div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* SNSアカウント一元管理のメリット */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            SNSアカウントを一元管理するメリット
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">効率的な共有</h3>
              <p className="text-gray-600 text-justify">
                名刺交換の際に、複数のSNSアカウントを一度に共有。相手は自分が使いやすいプラットフォームを選んでつながることができます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">情報管理の最適化</h3>
              <p className="text-gray-600 text-justify">
                SNSアカウント情報を一箇所で管理できるため、更新や変更が容易。新しいSNSを追加する際も簡単に対応できます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">
                フォローアップの向上
              </h3>
              <p className="text-gray-600 text-justify">
                複数のチャネルでつながることで、相手との継続的なコミュニケーションが容易に。適切なSNSで適切なコンテンツを共有できます。
              </p>
            </div>
          </div>
        </section>

        {/* 主要SNSプラットフォームの解説 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            ビジネスで活用すべき主要SNSプラットフォーム
          </h2>

          {/* フィルター */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setSelectedPlatform("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedPlatform === "all"
                  ? "bg-primary text-white"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
              }`}
            >
              すべて
            </button>
            {snsPlatforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setSelectedPlatform(platform.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedPlatform === platform.id
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                {platform.name}
              </button>
            ))}
          </div>

          {/* プラットフォームカード */}
          <div className="grid md:grid-cols-2 gap-6">
            {snsPlatforms
              .filter(
                (platform) =>
                  selectedPlatform === "all" || selectedPlatform === platform.id
              )
              .map((platform) => (
                <div
                  key={platform.id}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary mr-4">
                      {platform.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {platform.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        ソーシャルメディア
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-justify mb-4">
                    {platform.description}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      ビジネスでの活用方法
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {platform.businessUse}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
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
                    <p className="ml-2 text-sm text-gray-700">
                      <strong>活用のポイント：</strong>
                      {platform.tips}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* SNSアカウント一元管理の手順 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Share（シェア）でSNSアカウントを一元管理する手順
          </h2>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-8 md:left-11 w-1 bg-gray-200"></div>
            {[
              {
                title: "アカウント登録",
                description:
                  "Share（シェア）にアクセスし、無料アカウントを作成します。",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                ),
              },
              {
                title: "SNSアカウントの追加",
                description:
                  "管理画面から「SNSリンクを追加」をクリックし、各SNSのURLやユーザー名を入力します。",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                ),
              },
              {
                title: "表示順序の設定",
                description:
                  "重要なSNSや優先的に共有したいプラットフォームの順序を調整します。",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                ),
              },
              {
                title: "共有モードの設定",
                description:
                  "ビジネス用とプライベート用で、表示するSNSを切り替えられるよう設定します。",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                ),
              },
              {
                title: "QRコード生成",
                description:
                  "完成したデジタル名刺のQRコードを生成し、名刺やプレゼン資料に活用します。",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v1m6 11h2m-6-1h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                ),
              },
            ].map((step, index) => (
              <div key={index} className="relative pl-20 pb-8">
                <div className="absolute left-0 top-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold z-10">
                  {index + 1}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <svg
                      className="w-6 h-6 text-primary mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {step.icon}
                    </svg>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ビジネスシーン別の活用テクニック */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            ビジネスシーン別のSNS活用テクニック
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-primary">
                展示会・商談
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0"
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
                  <div className="ml-3">
                    <strong className="text-gray-800">
                      ビジネス向けSNSを優先表示
                    </strong>
                    <p className="text-gray-600 text-sm">
                      Xなどを上位に設定し、プロフェッショナルな印象を与える
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0"
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
                  <div className="ml-3">
                    <strong className="text-gray-800">
                      製品・サービス情報へのリンク
                    </strong>
                    <p className="text-gray-600 text-sm">
                      Instagram、Facebookでビジュアルコンテンツを共有
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-primary">
                社内コミュニケーション
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0"
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
                  <div className="ml-3">
                    <strong className="text-gray-800">
                      コミュニケーションアプリを優先
                    </strong>
                    <p className="text-gray-600 text-sm">
                      LINE、Slack、Teamsなどの業務連絡用ツールを上位に
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0"
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
                  <div className="ml-3">
                    <strong className="text-gray-800">
                      社内コラボレーションツール
                    </strong>
                    <p className="text-gray-600 text-sm">
                      Microsoft Teams、Google Workspaceなどへのリンクも追加
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 効果測定と改善 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            SNS一元管理の効果測定と改善
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <p className="text-gray-700 text-justify mb-6">
              Share（シェア）のアナリティクス機能を活用して、デジタル名刺の効果を測定し、SNSアカウントの管理を最適化しましょう。
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3 text-center">
                  アクセス分析
                </h3>
                <div className="flex justify-center mb-3">
                  <svg
                    className="w-12 h-12 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  どのSNSリンクが最もクリックされているかを分析し、プライオリティを調整
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3 text-center">
                  コンバージョン追跡
                </h3>
                <div className="flex justify-center mb-3">
                  <svg
                    className="w-12 h-12 text-primary"
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
                <p className="text-sm text-gray-600 text-center">
                  プロフィール閲覧後にどのSNSでフォローされたかを追跡し、ROIを評価
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3 text-center">
                  A/Bテスト
                </h3>
                <div className="flex justify-center mb-3">
                  <svg
                    className="w-12 h-12 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  SNSの配置やプロフィールの内容を変更して、効果的なパターンを発見
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* よくある質問 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-justify">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 shadow-lg mb-16">
          <div className="md:flex items-center justify-between gap-8">
            <div className="mb-6 md:mb-0 md:max-w-2xl">
              <h2 className="text-2xl font-bold mb-2">
                SNSアカウントを一元管理したデジタル名刺を作成しよう
              </h2>
              <p className="text-blue-100 text-justify">
                Share（シェア）なら、複数のSNSアカウントを簡単に一つのデジタル名刺にまとめられます。
                7日間の無料トライアルでその効果を体験してください。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                href="/free-trial"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-primary bg-white hover:bg-gray-50 transition-all"
              >
                <span>無料で試す</span>
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
              <Link
                href="/digital-namecard/how-to-create"
                className="inline-flex justify-center items-center px-6 py-3 border border-white rounded-md text-base font-medium text-white hover:bg-white/10 transition-all"
              >
                <span>作成方法を見る</span>
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
        </section>

        {/* 関連コンテンツ */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            関連コンテンツ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/blog/digital-namecard/what-is"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                デジタル名刺とは？
              </h3>
              <p className="text-gray-600 text-justify">
                デジタル名刺（電子名刺）の基本概念から、従来の紙の名刺との違い、ビジネスシーンでの具体的なメリットまで詳しく解説します。
              </p>
            </Link>
            <Link
              href="/blog/qr-code-namecard-guide"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                QRコード名刺の作り方
              </h3>
              <p className="text-gray-600 text-justify">
                QRコードを活用したデジタル名刺の作成方法を解説。最適なQRコードのサイズ、配置、デザイン例から、スキャン時の注意点まで、完全ガイド。
              </p>
            </Link>
            <Link
              href="/digital-namecard/how-to-create"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                デジタル名刺の作り方
              </h3>
              <p className="text-gray-600 text-justify">
                ステップバイステップで解説する、Share（シェア）でのデジタル名刺作成方法をご紹介します。初めての方でも簡単に作成できます。
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}