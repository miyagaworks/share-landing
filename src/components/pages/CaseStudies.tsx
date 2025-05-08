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
    { id: "all", name: "すべての事例" },
    { id: "business", name: "ビジネス" },
    { id: "executive", name: "経営者" },
    { id: "freelance", name: "フリーランス" },
    { id: "marketing", name: "マーケティング" },
    { id: "event", name: "イベント" },
  ];

  // 活用事例データ
  const caseStudies = [
    {
      title: "展示会での営業効率化",
      category: "business",
      industry: "製造業",
      company: "株式会社テクノソリューション",
      person: "営業部長 鈴木 健一",
      description:
        "産業展示会で300名以上の参加者と名刺交換を行い、その場でSNSでつながることで、展示会後の商談につながりました。紙の名刺だけの場合と比較して、フォローアップの効率が大幅に向上しました。",
      results: [
        "営業リード数が前年比+45%増加",
        "展示会後のフォロー率が78%に向上（前年は32%）",
        "商談成約率が23%アップ",
      ],
      tags: ["展示会", "営業", "BtoB"],
    },
    {
      title: "役員会議でのデジタル活用",
      category: "executive",
      industry: "金融",
      company: "グロースキャピタル株式会社",
      person: "代表取締役CEO 田中 誠一",
      description:
        "取締役会や投資家ミーティングでデジタル名刺を活用。革新的な企業イメージの醸成に貢献し、投資家からの評価も向上しました。複数のSNSアカウントを一元管理し、適切なチャネルで情報発信できるようになりました。",
      results: [
        "ビジネスSNSのフォロワーが3ヶ月で150%増加",
        "投資家からの問い合わせが月平均5件増加",
        "メディア露出機会が増加（年間20件以上のインタビュー）",
      ],
      tags: ["経営者", "投資家対応", "ブランディング"],
    },
    {
      title: "フリーランスのブランディング強化",
      category: "freelance",
      industry: "デザイン",
      company: "個人事業主",
      person: "UIデザイナー 佐藤 美咲",
      description:
        "フリーランスのUIデザイナーとして、クライアントミーティングでデジタル名刺を活用。ポートフォリオサイトへの直接リンクにより、その場で作品を見てもらえるようになりました。先進的なデザイナーとしてのイメージも強化されています。",
      results: [
        "新規クライアント獲得率が35%向上",
        "ポートフォリオサイトへの訪問者が月平均60%増加",
        "リピート案件が25%増加",
      ],
      tags: ["フリーランス", "デザイン", "ポートフォリオ"],
    },
    {
      title: "SNSマーケティングの一元化",
      category: "marketing",
      industry: "アパレル",
      company: "StyleFirst株式会社",
      person: "マーケティング部長 高橋 由美",
      description:
        "複数のSNSチャネルを運用するマーケティングチームが、イベントやPRでデジタル名刺を活用。各プラットフォームへの誘導を一元化することで、フォロワー獲得効率が大幅に向上しました。また、アクセス解析により効果測定も容易になりました。",
      results: [
        "SNS総フォロワー数が6ヶ月で40%増加",
        "クロスプラットフォームフォロー率が3倍に向上",
        "キャンペーン認知度が平均28%アップ",
      ],
      tags: ["SNSマーケティング", "マルチチャネル", "アクセス解析"],
    },
    {
      title: "カンファレンスでの登壇者活用",
      category: "event",
      industry: "IT",
      company: "テクノカンファレンス運営事務局",
      person: "事務局長 伊藤 雄太",
      description:
        "技術カンファレンスの登壇者全員がデジタル名刺を活用。スライド内にQRコードを掲載することで、参加者がその場で登壇者のプロフィールやSNSにアクセスできるようになりました。登壇者と参加者のつながりが促進され、カンファレンス全体の満足度も向上しています。",
      results: [
        "登壇者のフォローアップ数が前回比120%増加",
        "参加者満足度スコアが4.2から4.8に向上（5点満点）",
        "次回イベントの早期申込率が35%向上",
      ],
      tags: ["カンファレンス", "イベント", "スピーカー"],
    },
    {
      title: "不動産営業の信頼関係構築",
      category: "business",
      industry: "不動産",
      company: "リアルエステート株式会社",
      person: "営業課長 山本 健太郎",
      description:
        "不動産営業担当者がお客様との信頼関係構築にデジタル名刺を活用。物件情報へのリンクやSNSでの日々の情報発信を見てもらうことで、単なる営業マンではなく「不動産のプロフェッショナル」としての認識を獲得しています。",
      results: [
        "顧客との長期的な関係構築率が40%向上",
        "SNS経由の問い合わせが月20件増加",
        "成約までの時間が平均15%短縮",
      ],
      tags: ["不動産", "営業", "信頼構築"],
    },
    {
      title: "採用活動でのブランディング",
      category: "business",
      industry: "IT",
      company: "FutureTech株式会社",
      person: "人事部長 中村 由紀",
      description:
        "        採用担当者が就活イベントでデジタル名刺を活用。企業のSNSアカウントへの誘導や採用情報サイトへの直接リンクにより、その場で学生のフォローアップが可能になりました。先進的な企業イメージも学生からの人気につながっています。",
      results: [
        "新卒応募数が前年比30%増加",
        "インターンシップ申込率が45%向上",
        "SNSでの企業認知度が学生間で大幅向上",
      ],
      tags: ["採用", "学生", "企業ブランディング"],
    },
    {
      title: "医療機関の連携強化",
      category: "business",
      industry: "医療",
      company: "医療法人ライフケア",
      person: "病院長 木村 俊介",
      description:
        "医師や医療スタッフ間の連携強化にデジタル名刺を活用。複数の医療機関や診療科との連携がスムーズになり、紹介状の送付や患者の連携がよりスムーズになりました。特に若手医師からの評価が高く、先進的な医療環境の構築にも貢献しています。",
      results: [
        "医療機関間連携の処理時間が30%短縮",
        "専門医への紹介プロセスの効率化",
        "多職種チーム内のコミュニケーション改善",
      ],
      tags: ["医療", "連携", "チームワーク"],
    },
  ];

  // フィルタリングされた事例
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
                デジタル名刺活用事例集
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                様々な業種・シーンでの成功事例をご紹介
              </p>
              <p className="text-blue-50 text-justify">
                Share（シェア）のデジタル名刺サービスは、多様なビジネスシーンで活用されています。
                ここでは実際のユーザーが語る活用事例と成果をご紹介します。業種や目的に合わせた
                活用方法を参考に、あなたのビジネスにおけるデジタル名刺の可能性を探ってください。
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12 flex justify-center">
              <div className="w-full max-w-md">
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-12 bg-primary flex items-center justify-center">
                      <p className="text-white text-sm font-medium">
                        成功事例ハイライト
                      </p>
                    </div>
                    <div className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2"
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
                            営業リード数 45%増加
                          </span>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2"
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
                            SNSフォロワー 3ヶ月で150%増加
                          </span>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2"
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
                            新規クライアント獲得率 35%向上
                          </span>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2"
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
                            スピーカーフォローアップ 120%増
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <div className="text-xs text-gray-500 text-center">
                          実際のユーザーが達成した成果例
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

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* カテゴリーフィルター */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            活用事例カテゴリー
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
              ? "すべての事例"
              : activeCategory === "business"
              ? "ビジネス活用事例"
              : activeCategory === "executive"
              ? "経営者活用事例"
              : activeCategory === "freelance"
              ? "フリーランス活用事例"
              : activeCategory === "marketing"
              ? "マーケティング活用事例"
              : "イベント活用事例"}
          </h2>
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
                      <span className="text-gray-500 text-sm">
                        {caseStudy.company}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {caseStudy.person}
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

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    達成した成果:
                  </h4>
                  <ul className="space-y-1">
                    {caseStudy.results.map((result, i) => (
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
                        <span className="ml-2 text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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
                    その場でSNSでつながり、直近の商談やイベントに関する投稿を共有することで、関係構築を加速させることができます。
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
                あなたも成功事例を作りませんか？
              </h2>
              <p className="text-blue-100 max-w-2xl text-justify">
                Share（シェア）のデジタル名刺で、ビジネスに新たな価値をもたらしましょう。
                7日間の無料トライアルで、すべての機能をお試しいただけます。
                あなたならではの活用方法で、次の成功事例の主役になりませんか？
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
                経営者・役員向けデジタル名刺の活用方法。先進的なイメージ構築とビジネスコミュニケーションの効率化を実現します。
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}