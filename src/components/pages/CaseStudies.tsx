// src/components/pages/CaseStudies.tsx
"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import Link from "next/link";
import { useState } from "react";

export default function CaseStudies() {
  const breadcrumbItems = useBreadcrumb();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeCase, setActiveCase] = useState(0);

  // カテゴリー
  const categories = [
    { id: "all", name: "すべての活用シーン" },
    { id: "business", name: "ビジネス" },
    { id: "executive", name: "経営者" },
    { id: "freelance", name: "フリーランス" },
    { id: "marketing", name: "マーケティング" },
    { id: "event", name: "イベント" },
  ];

  // 業種別の活用シーンデータ
  // 実在の顧客事例ではなく、想定される利用場面の紹介として記載している。
  // 企業名・個人名・成果を示す数値や程度表現（大幅・多く 等）は掲載しないこと。
  const caseStudies = [
    {
      title: "展示会での名刺交換",
      category: "business",
      industry: "製造業",
      description:
        "産業展示会で名刺交換をした相手と、その場でSNSでつながる活用方法です。紙の名刺だけの場合と異なり、展示会が終わったあとのフォローアップの導線を、その場でつくっておくことができます。",
      tags: ["展示会", "営業", "BtoB"],
    },
    {
      title: "役員会議・投資家対応",
      category: "executive",
      industry: "金融",
      description:
        "取締役会や投資家ミーティングでデジタル名刺を活用する方法です。複数のSNSアカウントを一元管理できるため、相手や場面に応じたチャネルを選んで情報発信の窓口を案内できます。",
      tags: ["経営者", "投資家対応", "ブランディング"],
    },
    {
      title: "フリーランスのブランディング",
      category: "freelance",
      industry: "デザイン",
      description:
        "フリーランスのUIデザイナーが、クライアントミーティングでデジタル名刺を活用する方法です。ポートフォリオサイトへの直接リンクを載せておくことで、その場で作品を見てもらう導線をつくれます。",
      tags: ["フリーランス", "デザイン", "ポートフォリオ"],
    },
    {
      title: "SNSマーケティングの一元化",
      category: "marketing",
      industry: "アパレル",
      description:
        "複数のSNSチャネルを運用するマーケティングチームが、イベントやPRでデジタル名刺を活用する方法です。各プラットフォームへの誘導を一元化でき、アクセス解析で反応を確認することもできます。",
      tags: ["SNSマーケティング", "マルチチャネル", "アクセス解析"],
    },
    {
      title: "カンファレンスでの登壇",
      category: "event",
      industry: "IT",
      description:
        "技術カンファレンスの登壇者がデジタル名刺を活用する方法です。スライド内にQRコードを掲載しておくことで、参加者がその場で登壇者のプロフィールやSNSにアクセスできます。",
      tags: ["カンファレンス", "イベント", "スピーカー"],
    },
    {
      title: "不動産営業での関係づくり",
      category: "business",
      industry: "不動産",
      description:
        "不動産営業担当者が、お客様との関係づくりにデジタル名刺を活用する方法です。物件情報へのリンクや日々のSNSでの情報発信を見てもらうことで、専門性を伝える導線をつくれます。",
      tags: ["不動産", "営業", "信頼構築"],
    },
    {
      title: "採用イベントでの情報提供",
      category: "business",
      industry: "IT",
      description:
        "採用担当者が就活イベントでデジタル名刺を活用する方法です。企業のSNSアカウントへの誘導や採用情報サイトへの直接リンクにより、その場で学生へ情報を渡すことができます。",
      tags: ["採用", "学生", "企業ブランディング"],
    },
    {
      title: "医療機関どうしの連絡先共有",
      category: "business",
      industry: "医療",
      description:
        "医師や医療スタッフ間の連絡先共有にデジタル名刺を活用する方法です。複数の医療機関や診療科にまたがる連絡先を一つのプロフィールにまとめられるため、紹介の際のやり取りにも使えます。",
      tags: ["医療", "連携", "チームワーク"],
    },
  ];

  // フィルタリングされた活用シーン
  const filteredCases =
    activeCategory === "all"
      ? caseStudies
      : caseStudies.filter(
          (caseStudy) => caseStudy.category === activeCategory
        );

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
                デジタル名刺の活用シーン集
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                様々な業種・シーンでの活用方法をご紹介
              </p>
              <p className="text-blue-50 text-justify">
                このページでご紹介するのは実在の顧客事例ではなく、Share（シェア）のデジタル名刺が
                どのような場面で使えるかをまとめた想定例です。業種や目的に合わせた活用方法を参考に、
                あなたのビジネスにおけるデジタル名刺の使いどころを探してみてください。
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12 flex justify-center">
              <div className="w-full max-w-md">
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-12 bg-primary flex items-center justify-center">
                      <p className="text-white text-sm font-medium">
                        主な活用シーン
                      </p>
                    </div>
                    <div className="p-4">
                      <div className="space-y-3">
                        {[
                          "展示会・業界イベントでの名刺交換",
                          "役員会議・投資家ミーティング",
                          "クライアントとの商談・提案",
                          "採用イベント・カンファレンス",
                        ].map((scene) => (
                          <div key={scene} className="flex items-center">
                            <svg
                              className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
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
                            <span className="text-gray-700 text-sm">
                              {scene}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <div className="text-xs text-gray-500 text-center">
                          想定される利用場面の例
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* データで見る背景（公的統計） */}
      <section className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            データで見る、デジタル名刺が求められる背景
          </h2>
          <p className="text-gray-600 mb-8 text-justify">
            以下の統計は、デジタル名刺が使われる利用環境の背景を示す公的調査の数値であり、Share（シェア）の利用効果を示すものではありません。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-3">
                82.3%
              </p>
              <p className="text-gray-800 font-medium mb-2 text-justify">
                インターネット利用者のうち、SNSを利用している人の割合
              </p>
              <p className="text-gray-600 text-sm mb-4 text-justify">
                インターネットの利用目的・用途の中で最も高い割合
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  出典: 総務省「令和7年通信利用動向調査」
                </p>
                <p className="text-xs text-gray-500">
                  調査時点: 2025年8月末 / 公表日: 2026年5月29日
                </p>
                <a
                  href="https://www.soumu.go.jp/menu_news/s-news/01tsushin02_02000183.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-primary hover:underline"
                >
                  総務省の公表資料を見る
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-3">
                91.8%
              </p>
              <p className="text-gray-800 font-medium mb-4 text-justify">
                スマートフォンを保有している世帯の割合
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  出典: 総務省「令和7年通信利用動向調査」
                </p>
                <p className="text-xs text-gray-500">
                  調査時点: 2025年8月末 / 公表日: 2026年5月29日
                </p>
                <a
                  href="https://www.soumu.go.jp/menu_news/s-news/01tsushin02_02000183.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-primary hover:underline"
                >
                  総務省の公表資料を見る
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* カテゴリーフィルター */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            活用シーンのカテゴリー
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* 事例一覧 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            {activeCategory === "all"
              ? "すべての活用シーン"
              : activeCategory === "business"
              ? "ビジネスでの活用シーン"
              : activeCategory === "executive"
              ? "経営者の活用シーン"
              : activeCategory === "freelance"
              ? "フリーランスの活用シーン"
              : activeCategory === "marketing"
              ? "マーケティングの活用シーン"
              : "イベントでの活用シーン"}
          </h2>
          <p className="text-gray-600 mb-6 text-justify">
            以下は実在の顧客事例ではなく、業種ごとに想定される利用場面の紹介です。
          </p>
          <div className="space-y-8">
            {filteredCases.map((caseStudy, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all duration-300 ${
                  activeCase === index
                    ? "border-primary ring-1 ring-primary/20"
                    : ""
                }`}
                onClick={() => setActiveCase(index)}
              >
                <div className="md:flex justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {caseStudy.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {caseStudy.industry}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                      {caseStudy.category === "business"
                        ? "ビジネス"
                        : caseStudy.category === "executive"
                        ? "経営者"
                        : caseStudy.category === "freelance"
                        ? "フリーランス"
                        : caseStudy.category === "marketing"
                        ? "マーケティング"
                        : "イベント"}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 text-justify">
                  {caseStudy.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 活用のヒント */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            デジタル名刺活用のヒント
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                成功のポイント
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="ml-2 text-gray-700">
                    <strong>プロフィール最適化</strong>:
                    あなたの専門性や強みが伝わるプロフィールを作成しましょう。適切なSNSアカウントを選択し、上位に配置することも重要です。
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="ml-2 text-gray-700">
                    <strong>紙の名刺との併用</strong>:
                    QRコードを紙の名刺に印刷することで、従来の名刺交換の形式を維持しながらデジタルの利便性を提供できます。
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="ml-2 text-gray-700">
                    <strong>即時フォローアップ</strong>:
                    その場でSNSでつながり、直近の商談やイベントに関する投稿を共有できます。
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                活用アイデア
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="ml-2 text-gray-700">
                    <strong>プレゼン資料に掲載</strong>:
                    スライドの最後にQRコードを掲載することで、発表後の質問やフォローアップを促進できます。
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="ml-2 text-gray-700">
                    <strong>メール署名に追加</strong>:
                    ビジネスメールの署名にQRコードやShareプロフィールへのリンクを追加することで、メールからSNSへの導線を作れます。
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="ml-2 text-gray-700">
                    <strong>チーム全体で活用</strong>:
                    会社やチーム全体でデザインを統一し、ブランドイメージを強化することができます。
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 shadow-lg">
          <div className="md:flex items-center justify-between gap-8">
            <div className="mb-6 md:mb-0 md:max-w-2xl">
              <h2 className="text-2xl font-bold mb-2">
                あなたのビジネスでも使ってみませんか？
              </h2>
              <p className="text-blue-100 max-w-2xl text-justify">
                Share（シェア）のデジタル名刺を、あなたのビジネスシーンでお試しください。
                7日間の無料トライアルで、すべての機能をご利用いただけます。
                ご紹介した活用シーンを参考に、あなたに合った使い方を見つけてください。
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
            <Link
              href="/digital-namecard/for-executives"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                経営者向けデジタル名刺
              </h3>
              <p className="text-gray-600 text-justify">
                経営者・役員向けデジタル名刺の活用方法。先進的なイメージ構築と、場面に応じた連絡先の使い分けをご紹介します。
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}