// src/app/blog/digital-namecard/what-is/page.tsx
"use client";

import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import DigitalNamecardConcept from "@/components/ui/DigitalNamecardConcept";
import { useState } from "react";

export default function WhatIsDigitalNamecard() {
  const breadcrumbItems = useBreadcrumb();
  const [activeTab, setActiveTab] = useState<number>(0);

  // デジタル名刺と紙の名刺の比較データ
  const comparisonData = [
    {
      feature: "携帯性",
      digital: "スマホに保存するだけ",
      paper: "名刺入れが必要",
    },
    {
      feature: "情報更新",
      digital: "リアルタイムで更新可能",
      paper: "新しく印刷が必要",
    },
    {
      feature: "コスト",
      digital: "月額550円から",
      paper: "印刷コストが継続的に発生",
    },
    {
      feature: "環境負荷",
      digital: "紙資源を使用しない",
      paper: "紙資源を消費",
    },
    {
      feature: "情報量",
      digital: "SNSリンクなど豊富な情報を収録",
      paper: "限られたスペースに情報を集約",
    },
    {
      feature: "検索性",
      digital: "デジタルで管理・検索可能",
      paper: "物理的な整理が必要",
    },
    {
      feature: "差別化",
      digital: "先進的なイメージを演出",
      paper: "従来型のビジネス印象",
    },
  ];

  // ビジネスシーン別のメリット
  const businessMerits = [
    {
      title: "展示会・商談",
      description:
        "その場でQRコードを表示するだけで、複数の方に同時に情報を共有できます。展示会後の名刺整理の手間も省けます。",
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
      title: "ビジネス名刺",
      description:
        "肩書きや所属が変わっても、デジタル名刺なら情報をリアルタイムで更新可能。古い名刺を廃棄する必要もありません。",
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
      title: "経営者・役員",
      description:
        "先進的なデジタルツールを使うことで、革新的なイメージを印象づけます。複数の連絡先やSNSを一元管理して効率的に共有できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      ),
    },
  ];

  // FAQデータ
  const faqData = [
    {
      question: "デジタル名刺と電子名刺の違いは何ですか？",
      answer:
        "「デジタル名刺」と「電子名刺」は基本的に同じ概念を指しており、どちらもスマートフォンやタブレットなどのデジタルデバイスで表示・共有できる名刺のことを意味します。Shareでは、SNSアカウントなど複数の連絡先情報を一元管理し、QRコードで簡単に共有できる機能を提供しています。",
    },
    {
      question: "デジタル名刺は紙の名刺を完全に代替できますか？",
      answer:
        "ビジネスシーンによっては両方を併用するのが最適な場合もあります。Shareのデジタル名刺は、紙の名刺にQRコードを印刷することで、アナログとデジタルのメリットを両立させることも可能です。これにより従来の名刺交換の形式を保ちながら、デジタルならではの豊富な情報共有ができます。",
    },
    {
      question: "Shareのデジタル名刺で共有できるSNSの種類は？",
      answer:
        "LINE、YouTube、X、Instagram、TikTok、Facebook、Pinterest、Threads、note、BeRealなど、主要なSNSプラットフォームに対応しています。さらに、カスタムリンクを追加することで、その他のサービスやウェブサイトも登録できます。",
    },
    {
      question: "デジタル名刺の情報セキュリティは大丈夫ですか？",
      answer:
        "Shareでは、ユーザー情報保護を最優先事項として、業界標準の暗号化技術を採用しています。また、共有モード機能により、ビジネス用とプライベート用で共有する情報を使い分けることができるため、TPOに応じた適切な情報共有が可能です。",
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
      {/* 構造化FAQデータを埋め込み */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* パンくずリスト - ヒーローセクションの外に移動 */}
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
                デジタル名刺とは？
              </h1>
              <p className="text-xl text-blue-100 mb-6 text-justify">
                紙の名刺の限界を超える、次世代のビジネスコミュニケーションツール
              </p>
              <p className="text-blue-50 text-justify">
                デジタル名刺（電子名刺）は、従来の紙の名刺をデジタル化したもので、複数のSNSアカウントや連絡先情報を一つにまとめ、QRコードで簡単に共有できる先進的なビジネスツールです。Share（シェア）のデジタル名刺サービスは、経営者やビジネスパーソンに選ばれ、ビジネスシーンでの差別化とスマートな印象を提供します。
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12 flex justify-center">
              <div className="w-72 h-72">
                <DigitalNamecardConcept />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* デジタル名刺の定義と特徴 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            デジタル名刺（電子名刺）とは
          </h2>
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <p className="text-gray-700 text-justify mb-4">
              <strong className="text-primary">デジタル名刺</strong>
              （電子名刺）とは、従来の紙の名刺をデジタル化し、スマートフォンやタブレットなどのデジタルデバイスで表示・共有できるようにしたものです。単なる連絡先情報だけでなく、SNSアカウント、プロフィール写真、自己紹介文など、より豊富な情報を含めることができます。
            </p>
            <p className="text-gray-700 text-justify">
              Shareのデジタル名刺サービスでは、
              <strong className="text-primary">
                複数のSNSアカウントを一つのプロフィールにまとめ
              </strong>
              、QRコードを通じて簡単に共有することができます。紙の名刺とは異なり、情報の更新が容易で、常に最新の情報を相手に提供できるという大きなメリットがあります。
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            デジタル名刺の主な特徴
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
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
              <h4 className="font-semibold mb-2">即時共有</h4>
              <p className="text-gray-600 text-justify">
                QRコードを表示するだけで、その場で複数人と同時に情報共有ができます。名刺の持ち合わせがなくても困りません。
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
                    d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 11.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 19l-5-5m-7 3l3-3m-3-1l1-5m5-1l-1-5"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">情報の豊富さ</h4>
              <p className="text-gray-600 text-justify">
                複数のSNSアカウント、メールアドレス、電話番号など、紙の名刺には収まらない豊富な情報を一度に共有できます。
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">差別化要素</h4>
              <p className="text-gray-600 text-justify">
                先進的なデジタル名刺を使用することで、革新性やデジタルリテラシーの高さをアピールし、ビジネスパーソンとしての印象を差別化できます。
              </p>
            </div>
          </div>
        </section>

        {/* デジタル名刺と紙の名刺の比較 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            デジタル名刺と紙の名刺の比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left border border-gray-200">
                    機能・特徴
                  </th>
                  <th className="p-4 text-left border border-gray-200 bg-blue-50">
                    デジタル名刺
                  </th>
                  <th className="p-4 text-left border border-gray-200">
                    紙の名刺
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="p-4 border border-gray-200 font-medium">
                      {item.feature}
                    </td>
                    <td className="p-4 border border-gray-200 text-primary">
                      {item.digital}
                    </td>
                    <td className="p-4 border border-gray-200 text-gray-600">
                      {item.paper}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ビジネスシーン別のメリット */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            ビジネスシーン別のデジタル名刺メリット
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {businessMerits.map((merit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {merit.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">{merit.title}</h3>
                <p className="text-gray-600 text-justify">
                  {merit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* タブパネル: Shareのデジタル名刺機能 */}
        <section className="mb-16 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Share（シェア）のデジタル名刺機能
          </h2>

          {/* タブボタン */}
          <div className="flex flex-wrap border-b border-gray-200 mb-6">
            {["SNS一元管理", "QRコード共有", "プロフィールカスタマイズ"].map(
              (tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-2 px-4 font-medium text-sm focus:outline-none ${
                    activeTab === index
                      ? "border-b-2 border-primary text-primary"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* タブコンテンツ */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            {activeTab === 0 && (
              <div className="md:flex items-start">
                <div className="md:w-2/3 pr-8">
                  <h3 className="text-lg font-semibold mb-3">
                    複数SNSを一つのプロフィールに
                  </h3>
                  <p className="text-gray-600 mb-4 text-justify">
                    Shareのデジタル名刺では、LINE、X、Instagram、Facebookなど、複数のSNSアカウントを一つのプロフィールにまとめることができます。相手に共有するアカウントを選択でき、ビジネス用とプライベート用で使い分けることも可能です。
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>10種類以上のSNSプラットフォームに対応</li>
                    <li>表示順序も自由にカスタマイズ可能</li>
                    <li>新しいSNSも随時追加対応</li>
                  </ul>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0 flex justify-center">
                  <div className="w-40 h-40 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-20 h-20 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="md:flex items-start">
                <div className="md:w-2/3 pr-8">
                  <h3 className="text-lg font-semibold mb-3">
                    QRコードで瞬時に共有
                  </h3>
                  <p className="text-gray-600 mb-4 text-justify">
                    ワンクリックで生成されるQRコードを相手に見せるだけで、すべての連絡先情報やSNSアカウントを共有できます。紙の名刺にQRコードを印刷することで、従来の名刺交換の形式も維持できます。
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>高解像度QRコードをダウンロード可能</li>
                    <li>その場でスマホに表示して即座に共有</li>
                    <li>名刺や印刷物に掲載して活用</li>
                  </ul>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0 flex justify-center">
                  <div className="w-40 h-40 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-20 h-20 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 4v1m6 11h2m-6-1h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="md:flex items-start">
                <div className="md:w-2/3 pr-8">
                  <h3 className="text-lg font-semibold mb-3">
                    自分らしいプロフィールを作成
                  </h3>
                  <p className="text-gray-600 mb-4 text-justify">
                    プロフィール写真、職種、自己紹介文などを自由にカスタマイズ。あなたのブランドやイメージに合ったデジタル名刺を作成できます。AIが最適な自己紹介文を提案する機能も搭載しています。
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>カラーテーマのカスタマイズ</li>
                    <li>職種・経歴の詳細な記載</li>
                    <li>AI自己紹介文ジェネレーター</li>
                  </ul>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0 flex justify-center">
                  <div className="w-40 h-40 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-20 h-20 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* よくある質問（FAQ） */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            デジタル名刺についてよくある質問
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
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
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 shadow-lg">
          <div className="md:flex items-center justify-between gap-8">
            <div className="mb-6 md:mb-0 md:max-w-lg">
              <h2 className="text-2xl font-bold mb-2">
                あなたのビジネスに差をつける
              </h2>
              <p className="text-blue-100 max-w-xl mx-auto mb-8 text-justify">
                デジタル名刺で先進的なビジネスパーソンとしての印象を強め、より効率的な人脈構築を始めましょう。Share（シェア）なら7日間の無料トライアルで、すべての機能をお試しいただけます。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link
                href="/free-trial"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-primary bg-white hover:bg-gray-50 transition-all"
              >
                <span>7日間無料で試す</span>
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
                <span>デジタル名刺の作り方</span>
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

        {/* 関連記事 */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/digital-namecard/how-to-create"
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold mb-2 text-primary">
                デジタル名刺の作り方
              </h3>
              <p className="text-gray-600 text-justify">
                ステップバイステップで解説する、Share（シェア）でのデジタル名刺作成方法をご紹介します。
              </p>
            </Link>
            <Link
              href="/digital-namecard/business-benefits"
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold mb-2 text-primary">
                ビジネスで差をつける方法
              </h3>
              <p className="text-gray-600 text-justify">
                デジタル名刺がビジネスシーンで周囲との差別化にどのように貢献するかをご紹介します。
              </p>
            </Link>
            <Link
              href="/digital-namecard/for-executives"
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold mb-2 text-primary">
                経営者向けデジタル名刺
              </h3>
              <p className="text-gray-600 text-justify">
                経営者や役員向けの特別なデジタル名刺機能と活用方法について詳しく解説します。
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}