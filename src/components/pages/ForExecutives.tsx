// src/components/pages/ForExecutives.tsx
"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import Link from "next/link";
import { useState } from "react";

export default function ForExecutives() {
  const breadcrumbItems = useBreadcrumb();
  const [activeFeature, setActiveFeature] = useState(0);

  // 経営者向け特別機能
  const executiveFeatures = [
    {
      title: "プレミアムデザイン",
      description:
        "経営者専用のエレガントでプロフェッショナルなデザインテンプレートをご用意。高級感と品格のあるビジュアルで、第一印象から差別化できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      ),
    },
    {
      title: "高度なアナリティクス",
      description:
        "プロフィール閲覧データの詳細な分析機能を提供。スキャン回数、訪問者の地域情報、閲覧時間などの統計データを確認できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
    },
    {
      title: "複数プロフィール管理",
      description:
        "異なる役職や状況に応じて、複数のプロフィールを簡単に切り替え。TPOに合わせた最適なデジタル名刺を使用できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      title: "ワンクリックチームシェア",
      description:
        "会社のチーム全体のプロフィールを一度に共有できる機能。役員チームや部門全体を一つのQRコードで紹介できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      ),
    },
    {
      title: "優先サポート",
      description:
        "経営者プラン専用の優先サポートチームがあなたをサポート。技術的な問題や活用方法のアドバイスなど、迅速に対応します。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      ),
    },
  ];

  // 活用シーン
  const usageScenarios = [
    {
      title: "取締役会・役員会",
      description:
        "取締役や役員同士の情報共有を効率化。会社の意思決定者として、先進的なデジタルツールの活用姿勢を示すことができます。",
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
      title: "投資家ミーティング",
      description:
        "投資家との会合で革新的なイメージをアピール。デジタル戦略に積極的な経営姿勢を示し、信頼感を醸成します。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "業界カンファレンス",
      description:
        "業界リーダーとしての存在感を高めます。登壇者や参加者としてのプロフィールをQRコードで共有し、ネットワーキングを促進。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      title: "メディア対応",
      description:
        "メディアインタビューや取材時に、プロフィールを瞬時に共有。SNSアカウントへの誘導も簡単に行え、メディア露出効果を最大化できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      ),
    },
  ];

  // 経営者からの声
  const testimonials = [
    {
      name: "鈴木 英一",
      title: "株式会社テクノソリューション 代表取締役",
      quote:
        "投資家との会合やビジネスパートナーとの初対面で、Shareのデジタル名刺を使うと「さすが最先端の技術に精通している」という印象を与えることができます。特に海外の取引先からは高い評価を得ています。",
    },
    {
      name: "佐藤 真理子",
      title: "グローバルマーケティング株式会社 CEO",
      quote:
        "複数の役職を持つ私にとって、シーンに合わせて異なるデジタル名刺を使い分けられるのは非常に便利です。取締役会では公式プロフィール、カジュアルな業界イベントではより親しみやすいプロフィールを使用しています。",
    },
    {
      name: "高橋 大輔",
      title: "NextGeneration Partners 代表パートナー",
      quote:
        "ベンチャー投資の世界では、先進的なツールを自ら使いこなしているかどうかも審査の対象です。Shareのデジタル名刺は、私自身がイノベーションを体現している証明になっています。",
    },
  ];

  return (
    <div className="bg-white">
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
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                経営者向けデジタル名刺
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                先見性と革新性を体現する、経営者のためのプレミアムプラン
              </p>
              <p className="text-blue-50 text-justify">
                Share（シェア）の経営者向けデジタル名刺は、ビジネスリーダーとしてのあなたのステータスと革新性を両立させるプレミアムサービスです。
                高級感あるデザイン、詳細な分析機能、複数プロフィール管理など、経営者特有のニーズに応える特別機能を搭載。
                重要なビジネスシーンで差をつけ、先進的なリーダーとしての印象を強化します。
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12 flex justify-center">
              <div className="relative">
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-12 bg-gray-900 flex items-center justify-center">
                      <p className="text-white text-sm font-medium">
                        エグゼクティブプロフィール
                      </p>
                    </div>
                    <div className="p-6 flex flex-col items-center">
                      <div className="w-20 h-20 bg-gray-100 rounded-full mb-4 flex items-center justify-center border-2 border-gray-900">
                        <svg
                          className="w-10 h-10 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <p className="font-bold text-gray-800 text-lg">
                        山田 太郎
                      </p>
                      <p className="text-blue-800 font-medium text-sm">
                        代表取締役社長 / CEO
                      </p>
                      <p className="text-xs text-gray-500 mt-1 mb-4">
                        株式会社テクノフューチャー
                      </p>

                      <div className="w-full bg-gray-50 rounded-lg p-3 mb-4">
                        <div className="flex justify-center space-x-3">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"
                            >
                              <div className="w-4 h-4 bg-blue-800 rounded-sm"></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between w-full mb-2">
                        <div className="bg-blue-50 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          Premium
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: EXC-2025
                        </div>
                      </div>

                      <div className="w-full pt-3 border-t border-gray-100 mt-2">
                        <button className="w-full py-2 bg-blue-800 text-white rounded-md text-sm font-medium">
                          プロフィールを見る
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 装飾要素 */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 opacity-20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-200 opacity-30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 経営者向け特別機能 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            経営者向け特別機能
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all duration-300 ${
                  activeFeature === index
                    ? "border-primary ring-2 ring-primary/20"
                    : ""
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-justify">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 経営者プランの特長 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            経営者プランの特長
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">
                  ステータスを演出
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
                    <span className="ml-2 text-gray-700">
                      プレミアム限定の高級感あるデザインテンプレート
                    </span>
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
                    <span className="ml-2 text-gray-700">
                      カスタムドメインオプション（example.share.com）
                    </span>
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
                    <span className="ml-2 text-gray-700">
                      経営者・VIP向けのプレミアムバッジ表示
                    </span>
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
                    <span className="ml-2 text-gray-700">
                      洗練されたQRコードデザイン（企業ロゴ入り）
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">
                  ビジネス効率を最大化
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
                    <span className="ml-2 text-gray-700">
                      複数プロフィールの切り替え機能（役割別・シーン別）
                    </span>
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
                    <span className="ml-2 text-gray-700">
                      詳細なアクセス解析とレポート機能
                    </span>
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
                    <span className="ml-2 text-gray-700">
                      プライオリティサポート（24時間以内の返信保証）
                    </span>
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
                    <span className="ml-2 text-gray-700">
                      チーム全体のプロフィール管理機能
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-xl text-gray-800">
                    経営者プラン
                  </div>
                  <div className="text-primary">
                    月額 ¥2,000（税込）/ 年額 ¥20,000（税込）
                  </div>
                </div>
                <Link
                  href="/free-trial?plan=executive"
                  className="inline-block py-3 px-6 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  7日間無料で試す
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 活用シーン */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            経営者向けデジタル名刺の活用シーン
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {usageScenarios.map((scenario, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-start"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {scenario.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {scenario.title}
                  </h3>
                  <p className="text-gray-600 text-justify">
                    {scenario.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 経営者からの声 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            経営者からの声
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <svg
                  className="w-8 h-8 text-primary opacity-25 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-primary text-sm">{testimonial.title}</p>
                </div>
                <p className="text-gray-700 italic text-justify">
                  「{testimonial.quote}」
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* よくある質問 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            よくある質問
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-primary">
                経営者プランと標準プランの違いは何ですか？
              </h3>
              <p className="text-gray-600 text-justify">
                経営者プランでは、プレミアムデザインテンプレート、複数プロフィール管理、高度なアナリティクス、優先サポートなどの特別機能をご利用いただけます。また、経営者としての先進性やステータスを演出する専用機能も搭載しています。標準プランでは基本的な機能のみのご提供となります。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-primary">
                複数のプロフィールはどのように使い分けられますか？
              </h3>
              <p className="text-gray-600 text-justify">
                経営者プランでは、異なる役職や状況に応じた複数のプロフィールを作成・管理できます。例えば、公式な取締役会用、カジュアルなネットワーキングイベント用、業界カンファレンス用など、シーンに応じたプロフィールを簡単に切り替えることが可能です。アプリ内で数タップで切り替えられるため、TPOに合わせた最適なデジタル名刺をご利用いただけます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-primary">
                経営者プランは組織全体で利用できますか？
              </h3>
              <p className="text-gray-600 text-justify">
                経営者プランは個人向けのプレミアムプランです。組織全体での導入をご検討の場合は、法人プランがより適しています。法人プランでは、複数ユーザーの一括管理、企業ブランディングの統一、管理者ダッシュボードなどの機能をご利用いただけます。詳細はお問い合わせください。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 shadow-lg">
          <div className="md:flex items-center justify-between gap-8">
            <div className="mb-6 md:mb-0 md:max-w-2xl">
              <h2 className="text-2xl font-bold mb-2">
                経営者としての先進性をアピールしよう
              </h2>
              <p className="text-blue-100 text-justify">
                Share（シェア）の経営者向けデジタル名刺プランで、ビジネスリーダーとしての革新性とステータスを両立させましょう。
                7日間の無料トライアルで、経営者向け特別機能をすべてお試しいただけます。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                href="/free-trial?plan=executive"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-primary bg-white hover:bg-gray-50 transition-all whitespace-nowrap"
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
                href="/contact?inquiry=executive"
                className="inline-flex justify-center items-center px-6 py-3 border border-white rounded-md text-base font-medium text-white hover:bg-white/10 transition-all whitespace-nowrap"
              >
                <span>詳細を問い合わせる</span>
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
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            関連コンテンツ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/digital-namecard/about"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                デジタル名刺とは？
              </h3>
              <p className="text-gray-600 text-justify">
                デジタル名刺（電子名刺）の基本概念から活用方法まで。紙の名刺との違いやビジネスでのメリットを詳しく解説します。
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
                ステップバイステップで解説する、Share（シェア）でのデジタル名刺作成方法をご紹介します。
              </p>
            </Link>
            <Link
              href="/digital-namecard/business-benefits"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                ビジネスで差をつける
              </h3>
              <p className="text-gray-600 text-justify">
                デジタル名刺がビジネスシーンで差別化を生み出す方法。先進的なイメージの獲得から効率的な人脈構築まで解説します。
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
