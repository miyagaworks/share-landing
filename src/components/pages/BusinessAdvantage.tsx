// src/components/pages/BusinessAdvantage.tsx
"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function BusinessAdvantage() {
  const breadcrumbItems = useBreadcrumb();
  const [activeTab, setActiveTab] = useState(0);

  // 業種別の差別化ポイント
  const industryAdvantages = [
    {
      name: "経営者・役員",
      advantages: [
        "先進的でデジタルに精通しているイメージの獲得",
        "複数のSNSや連絡先を効率的に共有",
        "人脈構築の効率化とステータス性の両立",
        "紙の名刺切れの心配がない",
      ],
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
      name: "営業・ビジネス開発",
      advantages: [
        "その場でSNSでつながり、関係構築を加速",
        "多くの名刺交換においても情報管理が容易",
        "展示会やイベントでの効率的な情報収集",
        "常に最新の連絡先情報を提供可能",
      ],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
    {
      name: "マーケティング・PR",
      advantages: [
        "イベント参加者とのデジタル接点の確立",
        "複数のSNSチャネルへの誘導を一元化",
        "ブランドイメージと一致したプロフィールデザイン",
        "キャンペーンやイベント専用のプロフィール作成",
      ],
      icon: (
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
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
    },
    {
      name: "フリーランス・個人事業主",
      advantages: [
        "複数の仕事や役割を一つのプロフィールで表現",
        "低コストで常に最新のプロフィールを維持",
        "ポートフォリオサイトやSNSへの誘導",
        "専門性やスキルの効果的なアピール",
      ],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
    {
      name: "クリエイター・アーティスト",
      advantages: [
        "作品サンプルへの直接リンク",
        "複数のSNSプラットフォームへの誘導",
        "独自の世界観を反映したプロフィールデザイン",
        "ファンやクライアントとの関係構築を促進",
      ],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      ),
    },
  ];

  // ビジネスシーン別の活用メリット
  const businessScenarios = [
    {
      title: "展示会・業界イベント",
      description:
        "多くの参加者と効率的にネットワーキングができます。紙の名刺と異なり、名刺切れの心配なく何百人とも情報交換が可能。QRコードを表示するだけで、相手はすぐにあなたのSNSやプロフィールにアクセスできます。",
      image: "/images/business/exhibition.webp", // 実際の画像パスに置き換え
    },
    {
      title: "ビジネスミーティング",
      description:
        "初対面の相手に革新的な印象を与えます。紙の名刺とQRコードを併用することで、従来の礼儀正しさと先進性を両立。会議後すぐにSNSでつながることができ、関係構築のスピードが格段に向上します。",
      image: "/images/business/meeting.webp", // 実際の画像パスに置き換え
    },
    {
      title: "採用・人材獲得",
      description:
        "優秀な人材に対して企業の革新性をアピールできます。就活イベントで学生に共有すれば、その場で企業SNSのフォロワーに。候補者の情報もデジタルで一元管理でき、採用プロセスの効率化につながります。",
      image: "/images/business/recruitment.webp", // 実際の画像パスに置き換え
    },
    {
      title: "カンファレンス・講演",
      description:
        "登壇者としての専門性を補強できます。スライドやプレゼン資料にQRコードを掲載すれば、聴衆が簡単にあなたをフォローできる環境を作れます。講演後の問い合わせやネットワーキングも円滑に。",
      image: "/images/business/conference.webp", // 実際の画像パスに置き換え
    },
  ];

  // 競合との差別化ポイント
  const differentiators = [
    {
      title: "先進的なイメージ",
      description:
        "従来の紙の名刺では伝えられない、デジタルリテラシーの高さと革新性をアピール。特に経営者や意思決定者としての先見性を示すことができます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      ),
    },
    {
      title: "情報の豊富さと更新性",
      description:
        "紙の名刺に収まらない豊富な情報を提供できます。役職や所属が変わっても、プロフィールを更新するだけで常に最新の情報を共有できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      ),
    },
    {
      title: "マルチチャネルの一元化",
      description:
        "Line、X、Instagram、Facebookなど、複数のSNSアカウントを一度に共有。相手に合わせたコミュニケーションチャネルを提供できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      ),
    },
    {
      title: "時間とコストの節約",
      description:
        "紙の名刺の印刷コストと管理の手間を削減。情報が変わるたびに新しい名刺を印刷する必要がなく、デジタルで効率的に管理できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "環境への配慮",
      description:
        "紙資源を使わないエコフレンドリーな選択。SDGsなど環境問題に取り組む企業姿勢のアピールにもつながります。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "データの分析活用",
      description:
        "デジタル名刺のスキャン回数や閲覧統計から、ビジネスネットワークの効果測定が可能。名刺交換の効果を数値で把握できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
    },
  ];

  // 成功事例
  const successStories = [
    {
      name: "佐藤 誠一",
      title: "ITコンサルティング会社CEO",
      quote:
        "展示会で300人以上と名刺交換しましたが、デジタル名刺のおかげでその場でXでつながり、会話を続けることができました。紙の名刺だけでは絶対に実現できなかった関係構築のスピードです。",
      results: ["商談数が前年比30%増加", "SNSフォロワーが1ヶ月で500人増加"],
    },
    {
      name: "田中 美香",
      title: "フリーランスデザイナー",
      quote:
        "クライアントミーティングでデジタル名刺を使うと「さすが先進的なデザイナーだ」という印象を与えることができます。ポートフォリオサイトへの直接リンクもあり、その場で作品を見てもらえるのが大きな強みです。",
      results: ["契約成約率が25%向上", "ポートフォリオサイトへの訪問が60%増加"],
    },
    {
      name: "山本 健太郎",
      title: "不動産営業部長",
      quote:
        "お客様との信頼関係構築にShareのデジタル名刺が役立っています。物件情報へのリンクやSNSでの日々の情報発信を見てもらうことで、単なる営業マンではなく「不動産のプロフェッショナル」として認識してもらえるようになりました。",
      results: ["顧客との長期的な関係構築率が40%向上", "SNS経由の問い合わせが月20件増加"],
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
            <div className="md:w-3/5 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                ビジネスで差をつけるデジタル名刺
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                先進的なイメージで、ビジネスの第一印象を変革する
              </p>
              <p className="text-blue-50 text-justify">
                デジタル名刺は単なる連絡先の交換ツールではなく、ビジネスでの差別化を生み出す戦略的なツールです。
                Share（シェア）のデジタル名刺サービスを活用することで、先進的なイメージの獲得から効率的な人脈構築まで、
                ビジネスシーンにおける様々なメリットを享受できます。このページでは、業種別・シーン別にデジタル名刺がもたらす
                具体的な差別化ポイントを解説します。
              </p>
            </div>
            <div className="md:w-2/5 md:pl-12 flex justify-center">
              <div className="max-w-xs">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-12 bg-blue-900 flex items-center justify-center">
                    <p className="text-white text-sm font-medium">
                      ビジネスの差別化
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <svg
                          className="w-5 h-5 text-primary mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <p className="text-primary font-medium">
                          差別化ポイント
                        </p>
                      </div>
                      <ul className="text-gray-700 text-sm space-y-2">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>先進的なイメージの獲得</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>複数SNSの一元管理と共有</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>効率的な人脈構築</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>環境に配慮した取り組み</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <Link
                        href="/free-trial"
                        className="inline-block w-full py-2 px-4 bg-primary text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        無料で試す
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 競合との差別化ポイント */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            デジタル名刺がもたらす6つの差別化ポイント
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-justify">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 業種別の差別化ポイント */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            業種別の差別化ポイント
          </h2>

          {/* タブナビゲーション */}
          <div className="flex flex-wrap border-b border-gray-200 mb-6">
            {industryAdvantages.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-2 px-4 font-medium text-sm focus:outline-none ${
                  activeTab === index
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>

          {/* タブコンテンツ */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="md:flex items-start">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {industryAdvantages[activeTab].icon}
                  </svg>
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="text-xl font-bold mb-4">
                  {industryAdvantages[activeTab].name}のための差別化ポイント
                </h3>
                <ul className="space-y-3">
                  {industryAdvantages[activeTab].advantages.map(
                    (advantage, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
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
                        <span className="ml-2 text-gray-700">{advantage}</span>
                      </li>
                    )
                  )}
                </ul>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">
                    {industryAdvantages[activeTab].name}向けのアドバイス
                  </h4>
                  <p className="text-gray-700 text-justify">
                    {activeTab === 0 &&
                      "経営者・役員の方は、デジタル名刺を革新的なリーダーシップの象徴として活用しましょう。会社のブランドカラーを取り入れたデザインで統一感を出し、FacebookなどのビジネスSNSを上位に配置することで専門性をアピールできます。"}
                    {activeTab === 1 &&
                      "営業・ビジネス開発担当者は、名刺交換後すぐにフォローアップできる環境を作ることが重要です。QRコードをスキャンしたその場でSNSでつながり、商談の継続性を高めましょう。また、製品情報へのリンクを含めることで、その場で詳細情報を提供できます。"}
                    {activeTab === 2 &&
                      "マーケティング・PR担当者は、キャンペーンやイベントごとに特化したデジタル名刺を作成すると効果的です。ブランドの世界観を反映したデザインを使用し、各種SNSへの誘導を一元化することで、マルチチャネルでのフォロワー獲得につなげられます。"}
                    {activeTab === 3 &&
                      "フリーランスや個人事業主の方は、複数の専門分野やスキルを一つのプロフィールで表現できるメリットを活かしましょう。ポートフォリオサイトへの直接リンクや実績の紹介など、仕事獲得につながる情報を優先的に配置することをおすすめします。"}
                    {activeTab === 4 &&
                      "クリエイターやアーティストは、自分の作品世界観を反映したユニークなデザインのデジタル名刺を作成しましょう。作品サンプルへの直接リンクや、各種SNSプラットフォームへのリンクを含めることで、ファンやクライアントとの関係構築が促進されます。"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ビジネスシーン別の活用メリット */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            ビジネスシーン別の活用メリット
          </h2>
          <div className="space-y-8">
            {businessScenarios.map((scenario, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 md:flex items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`md:w-1/3 mb-6 md:mb-0 ${
                    index % 2 === 1 ? "md:pl-8" : "md:pr-8"
                  }`}
                >
                  <div className="bg-gray-100 rounded-lg p-2 flex items-center justify-center h-48 overflow-hidden">
                    <Image
                      src={scenario.image}
                      alt={scenario.title}
                      width={400}
                      height={300}
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {scenario.title}
                  </h3>
                  <p className="text-gray-700 text-justify">
                    {scenario.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 成功事例 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            デジタル名刺活用の成功事例
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
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
                  <h3 className="text-lg font-semibold">{story.name}</h3>
                  <p className="text-primary text-sm">{story.title}</p>
                </div>
                <p className="text-gray-700 italic mb-4 text-justify">
                  「{story.quote}」
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">実績:</h4>
                  <ul className="space-y-1">
                    {story.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-4 h-4 text-green-500 mt-1 flex-shrink-0"
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
                        <span className="ml-2 text-gray-700 text-sm">
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                デジタル名刺はどのようにビジネスの差別化につながりますか？
              </h3>
              <p className="text-gray-600 text-justify">
                デジタル名刺は、先進的でデジタルリテラシーの高いイメージを演出します。紙の名刺では伝えられない豊富な情報を提供でき、複数のSNSアカウントを一元管理して共有できる利便性があります。また、情報の即時更新が可能なため、常に最新の情報を提供できることも差別化ポイントとなります。これらの特徴が、ビジネスの第一印象を大きく変え、競合との差別化につながります。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-primary">
                紙の名刺と併用することはできますか？
              </h3>
              <p className="text-gray-600 text-justify">
                はい、むしろ併用がおすすめです。紙の名刺にQRコードを印刷することで、従来の名刺交換の形式を維持しながら、デジタル名刺の利便性を活かすことができます。QRコードをスキャンするとデジタルプロフィールにアクセスでき、複数のSNSや詳細情報を共有できるようになります。これにより、アナログとデジタルのメリットを両立させることができます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-primary">
                どのような業種でデジタル名刺が効果的ですか？
              </h3>
              <p className="text-gray-600 text-justify">
                基本的にはあらゆる業種で効果的ですが、特に人との接点が多い営業職、IT/テクノロジー関連、クリエイティブ業界、コンサルタント、経営者/役員などで高い効果を発揮します。また、展示会や商談、カンファレンスなど多くの人と接する機会の多いビジネスシーンでは、その効率性と差別化効果がより一層際立ちます。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 shadow-lg">
          <div className="md:flex items-center justify-between gap-8">
            <div className="mb-6 md:mb-0 md:max-w-2xl">
              <h2 className="text-2xl font-bold mb-2">
                今すぐビジネスに差をつけよう
              </h2>
              <p className="text-blue-100 max-w-2xl text-justify">
                Share（シェア）のデジタル名刺で、ビジネスシーンでの第一印象に差をつけましょう。
                7日間の無料トライアルで、すべての機能をお試しいただけます。
                複数のSNSを一つにまとめて、QRコードで瞬時に共有できる便利なツールを今すぐ体験してください。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
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
                <span>作り方を見る</span>
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
              href="/digital-namecard/for-executives"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                経営者向けデジタル名刺
              </h3>
              <p className="text-gray-600 text-justify">
                経営者・役員向けデジタル名刺の活用方法。先進的なイメージ構築とビジネスコミュニケーションの効率化を実現します。
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}