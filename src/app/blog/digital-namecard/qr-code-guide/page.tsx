// src/app/blog/digital-namecard/qr-code-guide/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import { useState } from "react";

export default function QRCodeNamecardGuide() {
  const breadcrumbItems = useBreadcrumb();
  const [activeSection, setActiveSection] = useState("intro");

  // パラメータに型を明示的に指定
  const isActiveSection = (sectionId: string) => {
    return activeSection === sectionId;
  };

  // 目次セクション
  const tableOfContents = [
    { id: "intro", title: "QRコード名刺とは", href: "#intro" },
    { id: "benefits", title: "メリットと活用シーン", href: "#benefits" },
    { id: "design", title: "デザインのポイント", href: "#design" },
    { id: "create", title: "作成方法", href: "#create" },
    { id: "share", title: "効果的な共有方法", href: "#share" },
    { id: "tips", title: "活用テクニック", href: "#tips" },
    { id: "trends", title: "2025年の最新トレンド", href: "#trends" },
  ];

  // QRコード名刺のデザインパターン
  const designPatterns = [
    {
      title: "シンプル統合型",
      description:
        "名刺デザインの一部としてQRコードを自然に配置するパターン。コードが目立ちすぎず、全体のデザインに溶け込みます。",
      pros: ["洗練された印象を与える", "プロフェッショナルな雰囲気を保てる"],
      cons: ["QRコードが見つけにくい場合がある", "小さすぎると読み取りづらい"],
      image: "/images/screenshots/qr-code.webp",
    },
    {
      title: "アクセント型",
      description:
        "QRコードを名刺の目立つ位置に配置し、アクセントとして活用するパターン。スキャンを促しやすくなります。",
      pros: ["QRコードの存在をアピールできる", "スキャンされる可能性が高まる"],
      cons: ["デザインのバランスが難しい", "派手になりすぎる可能性がある"],
      image: "/images/screenshots/qr-code.webp",
    },
    {
      title: "両面活用型",
      description:
        "表面は従来の名刺デザイン、裏面にQRコードを大きく配置するパターン。両方のメリットを活かせます。",
      pros: ["従来の名刺としての役割も果たせる", "QRコードを大きく配置できる"],
      cons: ["印刷コストが若干上がる", "裏面を見てもらう必要がある"],
      image: "/images/screenshots/qr-code.webp",
    },
    {
      title: "クリエイティブ統合型",
      description:
        "QRコードをデザインの一部として創造的に組み込むパターン。ロゴやイラストとQRコードを融合させます。",
      pros: ["強い印象を残せる", "ブランドイメージを強化できる"],
      cons: ["読み取りエラーのリスクが高まる", "デザイン技術が必要"],
      image: "/images/screenshots/qr-code.webp",
    },
  ];

  // QRコード名刺の作成ステップ
  const creationSteps = [
    {
      title: "情報の整理",
      description:
        "デジタルプロフィールに含める情報（SNSアカウント、連絡先など）を整理します。",
      tips: "ビジネス用途に最適なSNSを優先的に選びましょう。全てのSNSを含める必要はありません。",
    },
    {
      title: "デジタルプロフィールの作成",
      description:
        "Share（シェア）などのデジタル名刺サービスでプロフィールを作成します。",
      tips: "自己紹介文は簡潔かつ魅力的に。専門性や強みを明確に伝えましょう。",
    },
    {
      title: "QRコードの生成",
      description: "デジタルプロフィールのURLからQRコードを生成します。",
      tips: "高解像度のQRコードをダウンロードしましょう。SVG形式だとサイズを変更しても品質が劣化しません。",
    },
    {
      title: "名刺デザインの作成",
      description: "QRコードを組み込んだ名刺デザインを作成します。",
      tips: "QRコードの周囲に余白（クワイエットゾーン）を設けると読み取りやすくなります。",
    },
    {
      title: "テスト・印刷",
      description:
        "実際に印刷する前にQRコードが正しく読み取れるかテストします。",
      tips: "複数のデバイスでスキャンテストを行い、様々な環境で読み取れることを確認しましょう。",
    },
  ];

  // QRコード名刺の活用シーン
  const usageScenarios = [
    {
      title: "展示会・イベント",
      description:
        "多くの参加者と短時間で効率的に情報交換ができます。紙の名刺が切れる心配もなく、その場でSNSでつながることができます。",
      icon: (
        <svg
          className="w-10 h-10 text-primary"
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
      ),
    },
    {
      title: "ビジネスミーティング",
      description:
        "従来の名刺交換の形式を守りながら、より詳細な情報をデジタルで提供できます。第一印象と情報量の両方を重視できます。",
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "プレゼンテーション",
      description:
        "プレゼン資料の最後にQRコードを表示することで、聴衆が簡単にあなたの連絡先や詳細情報にアクセスできます。",
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
    },
    {
      title: "ポスター・フライヤー",
      description:
        "店舗やオフィスに掲示するポスターにQRコードを入れることで、来訪者がその場で情報を得られます。",
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  // QRコード名刺の活用テクニック
  const advancedTips = [
    {
      title: "カラーカスタマイズ",
      description:
        "QRコードは白黒だけでなく、企業のブランドカラーに合わせたカスタマイズも可能です。ただし、コントラストが十分あることを確認しましょう。",
    },
    {
      title: "ロゴ埋め込み",
      description:
        "QRコードの中央にロゴを配置することで、ブランドの認知度を高められます。ただし、読み取りエラーを防ぐためにテストは必須です。",
    },
    {
      title: "季節限定デザイン",
      description:
        "季節やキャンペーンに合わせてQRコードデザインを変更することで、話題性を創出できます。",
    },
    {
      title: "統計データの活用",
      description:
        "QRコードのスキャン回数や時間帯などの統計を分析することで、マーケティング施策に活かせます。",
    },
    {
      title: "多言語対応",
      description:
        "国際的なビジネスシーンでは、多言語に対応したデジタルプロフィールを準備しておくと便利です。",
    },
  ];

  // 2025年の最新トレンド
  const trends2025 = [
    {
      title: "動的QRコードの普及",
      description:
        "リンク先を変更できる動的QRコードがスタンダードになりつつあります。名刺を刷り直すことなく、最新情報にアップデートできます。",
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "デジタル名刺アプリとの連携",
      description:
        "QRコードを通じてデジタル名刺アプリに直接つながる仕組みが進化。Eight（エイト）などのアプリと連携し、紙とデジタルの両方のメリットを活かす名刺交換が一般的になっています。",
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "AR対応QRコード",
      description:
        "拡張現実（AR）技術と組み合わせたQRコードが登場。スキャンすると3Dのプロフィールや製品デモが表示されるなど、インタラクティブな体験を提供します。",
      icon: (
        <svg
          className="w-10 h-10 text-primary"
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
      ),
    },
    {
      title: "デザイン性の向上",
      description:
        "QRコードのデザイン技術が進化し、ブランドのアイデンティティを反映した芸術的なQRコードが増加。単なる四角形のコードから脱却し、円形やカスタム形状のQRコードも登場しています。",
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
  ];

  // よくある質問
  const faqData = [
    {
      question: "QRコードはどのくらいの大きさが適切ですか？",
      answer:
        "一般的に、名刺上では2cm×2cm以上のサイズが推奨されます。小さすぎるとスキャンが困難になり、大きすぎるとデザインのバランスが崩れる可能性があります。最終的には実際にスキャンテストを行い、読み取りやすさを確認することが重要です。",
    },
    {
      question: "QRコードの色は自由に変更できますか？",
      answer:
        "基本的には変更可能ですが、背景色とQRコードの色のコントラスト比が30%以上あることが推奨されます。また、明るい背景に暗い色のQRコード、またはその逆が最も読み取りやすくなります。カラーカスタマイズを行う場合は、必ず複数のデバイスでスキャンテストを行ってください。",
    },
    {
      question: "QRコードにロゴを入れても大丈夫ですか？",
      answer:
        "QRコードは一定のエラー訂正機能を持っているため、中央部分などにロゴを配置することは可能です。ただし、QRコードの情報量やエラー訂正レベル、ロゴのサイズによって読み取り精度が変わるため、実装後は必ず複数環境でテストを行うことをお勧めします。",
    },
    {
      question: "動的QRコードと静的QRコードの違いは何ですか？",
      answer:
        "静的QRコードは一度生成すると内容を変更できませんが、動的QRコードはリンク先の内容を後から変更できます。Share（シェア）では動的QRコードを採用しているため、プロフィール情報を更新してもQRコード自体を変更する必要はありません。",
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

  // HowTo 構造化データ
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "QRコード名刺の作り方と活用方法",
    description:
      "QRコードを活用したデジタル名刺の作成方法、デザインのポイント、効果的な活用技術を解説します。",
    step: creationSteps.map((step, index) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.description,
      position: index + 1,
    })),
  };

  return (
    <div className="bg-white">
      {/* 構造化データを埋め込み */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
              <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-medium mb-4 shadow-md">
                活用ガイド
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                QRコード名刺の作り方と注意点
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                デザインから共有まで、ビジネスで差をつけるQRコード名刺の完全ガイド
              </p>
              <p className="text-blue-50 text-justify">
                QRコードを活用したデジタル名刺は、従来の紙の名刺の限界を超え、豊富な情報をスマートに共有できる革新的なツールです。
                このガイドでは、QRコード名刺の基本概念から、最適なデザイン方法、作成手順、効果的な活用テクニックまで、
                ビジネスシーンで差をつけるための実践的なノウハウを詳しく解説します。
              </p>
            </div>
            <div className="md:w-1/3 md:pl-12">
              <div className="bg-white/10 rounded-xl p-5">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-12 bg-primary flex items-center justify-center">
                    <p className="text-white text-sm font-medium">目次</p>
                  </div>
                  <div className="p-4">
                    <ul className="divide-y divide-gray-100">
                      {tableOfContents.map((item, index) => (
                        <li key={item.id} className="py-2">
                          <a
                            href={item.href}
                            className={`flex items-center text-gray-700 hover:text-primary transition-colors ${
                              isActiveSection(item.id)
                                ? "text-primary font-semibold"
                                : ""
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveSection(item.id);
                              document
                                .querySelector(item.href)
                                ?.scrollIntoView({
                                  behavior: "smooth",
                                });
                            }}
                          >
                            <span className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full text-xs text-primary font-medium mr-3 shadow-sm">
                              {index + 1}
                            </span>
                            <span className="font-medium">{item.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        href="/free-trial"
                        className="block w-full py-2 bg-primary text-white rounded-md text-sm font-medium text-center hover:bg-blue-700 transition-colors shadow-md"
                      >
                        無料でデジタル名刺を作成
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
        {/* QRコード名刺とは */}
        <section id="intro" className="mb-16 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            QRコード名刺とは
          </h2>
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <p className="text-gray-700 text-justify mb-4">
              <strong className="text-primary">QRコード名刺</strong>
              とは、従来の紙の名刺にQRコードを印刷し、スキャンすることでデジタルプロフィールにアクセスできるようにした名刺のことです。
              紙の名刺の利便性とデジタル名刺の情報量を両立させた、ハイブリッド型のビジネスコミュニケーションツールです。
            </p>
            <p className="text-gray-700 text-justify">
              QRコードをスキャンすると、SNSアカウント、詳細なプロフィール、ポートフォリオサイト、企業情報など、
              紙の名刺には収まりきらない豊富な情報にアクセスできます。Share（シェア）のようなデジタル名刺サービスを利用すれば、
              複数のSNSアカウントを一つのプロフィールにまとめ、QRコード一つで簡単に共有することができます。
            </p>
          </div>

          <div className="md:flex items-center gap-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                QRコード名刺の基本要素
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
                    <strong>紙の名刺</strong>
                    ：基本的な連絡先情報と企業情報を記載
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
                    <strong>QRコード</strong>
                    ：デジタルプロフィールへのリンクを含む
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
                    <strong>デジタルプロフィール</strong>
                    ：SNSリンク、詳細情報、ポートフォリオなど
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
                    <strong>アクションガイド</strong>
                    ：QRコードをスキャンするよう促す一言
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg overflow-hidden border border-gray-200 relative max-w-xs w-full">
                {/* モックアップ - QRコード名刺のサンプル */}
                <div className="flex flex-col h-48">
                  <div className="mb-4">
                    <p className="font-bold text-gray-800">山田 太郎</p>
                    <p className="text-xs text-gray-500">
                      株式会社テクノフューチャー
                    </p>
                    <p className="text-xs text-gray-600">代表取締役CEO</p>
                  </div>
                  <div className="flex justify-between items-end mt-auto">
                    <div>
                      <p className="text-xs text-gray-600">〒100-0001</p>
                      <p className="text-xs text-gray-600">東京都千代田区1-1</p>
                      <p className="text-xs text-gray-600">03-1234-5678</p>
                      <p className="text-xs text-primary">info@example.com</p>
                    </div>
                    <div className="relative">
                      <div className="w-20 h-20 bg-white p-1 rounded border border-gray-300">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-400">
                          QRコード
                        </div>
                      </div>
                      <p className="text-[10px] text-center text-gray-400 mt-1">
                        スキャンしてSNSでつながる
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* メリットと活用シーン */}
        <section id="benefits" className="mb-16 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            メリットと活用シーン
          </h2>

          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            QRコード名刺の5つのメリット
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative">
              {/* 半透明の白いオーバーレイ */}
              <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 shadow-md">
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
                <h4 className="font-semibold mb-2">伝統と革新の両立</h4>
                <p className="text-gray-600 text-justify">
                  従来の名刺交換の礼儀作法を守りながら、デジタル技術の利便性を取り入れることができます。特に初対面の公式な場面でも違和感なく使用できます。
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative">
              {/* 半透明の白いオーバーレイ */}
              <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 shadow-md">
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
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">情報量の拡大</h4>
                <p className="text-gray-600 text-justify">
                  紙の名刺には収まらない豊富な情報（SNSアカウント、ポートフォリオ、詳細なプロフィールなど）をデジタルで補完できます。
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative">
              {/* 半透明の白いオーバーレイ */}
              <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 shadow-md">
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">常に最新の情報</h4>
                <p className="text-gray-600 text-justify">
                  QRコードが指すデジタルプロフィールの情報はいつでも更新可能。役職や所属が変わっても、QRコード自体は変更せずに最新情報を提供できます。
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative">
              {/* 半透明の白いオーバーレイ */}
              <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 shadow-md">
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
                <h4 className="font-semibold mb-2">即時的なつながり</h4>
                <p className="text-gray-600 text-justify">
                  QRコードをスキャンするだけで、その場でSNSでつながることができます。後からの連絡先入力や検索の手間を省けます。
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative">
              {/* 半透明の白いオーバーレイ */}
              <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 shadow-md">
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
                <h4 className="font-semibold mb-2">アクセス解析</h4>
                <p className="text-gray-600 text-justify">
                  QRコードのスキャン回数や時間帯などのデータを分析することで、ビジネスネットワーキングの効果測定が可能になります。
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            活用シーン
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {usageScenarios.map((scenario, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative"
              >
                {/* 半透明の白いオーバーレイ */}
                <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">{scenario.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-primary">
                        {scenario.title}
                      </h4>
                      <p className="text-gray-600 text-justify">
                        {scenario.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              紙の名刺とQRコード名刺の併用ポイント
            </h3>
            <p className="text-gray-700 text-justify mb-4">
              QRコード名刺は紙の名刺とデジタル名刺の良いとこ取りをしたハイブリッドなアプローチです。
              効果的に活用するためのポイントをご紹介します。
            </p>
            <div className="md:flex gap-6">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h4 className="font-medium text-gray-800 mb-2">
                  デザイン面でのポイント
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>QRコードが読み取りやすいサイズと配置を考慮する</li>
                  <li>QRコードの周囲に余白（クワイエットゾーン）を確保する</li>
                  <li>「QRコードをスキャン」などの行動を促す一言を添える</li>
                  <li>会社のブランドカラーに合わせたデザインで統一感を出す</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <h4 className="font-medium text-gray-800 mb-2">
                  運用面でのポイント
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>デジタルプロフィールの情報を定期的に更新する</li>
                  <li>相手に応じて適切なSNSや情報を表示する設定に切り替える</li>
                  <li>スキャン数や訪問者データを分析して効果測定を行う</li>
                  <li>
                    印刷前に様々なデバイスでQRコードの読み取りテストを行う
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* デザインのポイント */}
        <section id="design" className="mb-16 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            デザインのポイント
          </h2>

          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            効果的なQRコード名刺のデザインパターン
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {designPatterns.map((pattern, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative"
              >
                {/* 半透明の白いオーバーレイ */}
                <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden relative">
                      <Image
                        src={pattern.image}
                        alt={pattern.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 text-primary">
                        {pattern.title}
                      </h4>
                      <p className="text-gray-600 text-justify mb-4 text-sm">
                        {pattern.description}
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex mb-2">
                          <div className="w-1/2">
                            <h5 className="text-sm font-medium text-green-600 mb-1">
                              メリット
                            </h5>
                            <ul className="list-disc pl-5 text-xs text-gray-600">
                              {pattern.pros.map((pro, i) => (
                                <li key={i}>{pro}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="w-1/2">
                            <h5 className="text-sm font-medium text-red-600 mb-1">
                              注意点
                            </h5>
                            <ul className="list-disc pl-5 text-xs text-gray-600">
                              {pattern.cons.map((con, i) => (
                                <li key={i}>{con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              QRコードデザインの技術的ポイント
            </h3>
            <div className="md:flex gap-8">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h4 className="font-medium text-gray-800 mb-3">
                  読み取り精度を確保するためのポイント
                </h4>
                <ul className="space-y-2">
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
                    <div className="ml-2">
                      <strong className="text-gray-700">適切なサイズ</strong>
                      <p className="text-gray-600 text-sm">
                        名刺上では最低2cm×2cm以上が推奨。小さすぎるとスキャンエラーの原因に。
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
                    <div className="ml-2">
                      <strong className="text-gray-700">
                        クワイエットゾーン
                      </strong>
                      <p className="text-gray-600 text-sm">
                        QRコードの周囲に最低でもモジュール4つ分の余白を確保すること。
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
                    <div className="ml-2">
                      <strong className="text-gray-700">
                        十分なコントラスト
                      </strong>
                      <p className="text-gray-600 text-sm">
                        QRコードと背景色のコントラストは30%以上必要。高いコントラストほど読み取りやすい。
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
                    <div className="ml-2">
                      <strong className="text-gray-700">
                        エラー訂正レベル
                      </strong>
                      <p className="text-gray-600 text-sm">
                        ロゴ挿入や装飾を行う場合は、高いエラー訂正レベル（H：30%）を選択。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-3 text-center">
                    カラーリングのヒント
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-black p-2 rounded flex justify-center">
                      <div className="w-16 h-16 bg-white flex items-center justify-center text-xs">
                        黒/白
                      </div>
                    </div>
                    <div className="bg-blue-800 p-2 rounded flex justify-center">
                      <div className="w-16 h-16 bg-blue-100 flex items-center justify-center text-xs">
                        濃色/淡色
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 text-center">
                      カラーにする場合も、十分なコントラストが重要です
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 作成方法 */}
        <section id="create" className="mb-16 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            作成方法
          </h2>

          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            QRコード名刺作成の5ステップ
          </h3>

          <div className="relative mb-10">
            <div className="absolute top-0 bottom-0 left-8 md:left-11 w-1 bg-gray-200"></div>

            {creationSteps.map((step, index) => (
              <div key={index} className="relative pl-20 pb-8">
                <div className="absolute left-0 top-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 shadow-lg">
                  {index + 1}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative">
                  {/* 半透明の白いオーバーレイ */}
                  <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
                  <div className="relative z-10">
                    <h4 className="text-lg font-semibold mb-3">{step.title}</h4>
                    <p className="text-gray-600 text-justify mb-3">
                      {step.description}
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-primary">
                      <div className="flex">
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
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
                          {step.tips}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Share（シェア）でのQRコード名刺作成手順
            </h3>
            <p className="text-gray-700 text-justify mb-4">
              Share（シェア）を利用すれば、簡単にデジタルプロフィールを作成し、QRコードを生成できます。
              以下の手順で作成しましょう。
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-gray-700">
              <li>
                <strong className="text-primary">アカウント登録</strong>
                ：Share（シェア）にアクセスし、無料アカウントを作成します。
              </li>
              <li>
                <strong className="text-primary">プロフィール作成</strong>
                ：基本情報を入力し、SNSアカウントを連携します。
              </li>
              <li>
                <strong className="text-primary">カスタマイズ</strong>
                ：プロフィールのテーマカラーなどをあなたのブランドに合わせて設定します。
              </li>
              <li>
                <strong className="text-primary">QRコード生成</strong>
                ：「QRコード表示」ボタンを押して、プロフィール用のQRコードを生成します。
              </li>
              <li>
                <strong className="text-primary">ダウンロード・印刷</strong>
                ：高解像度のQRコードをダウンロードし、名刺デザインに組み込みます。
              </li>
            </ol>
            <div className="mt-6 text-center">
              <Link
                href="/free-trial"
                className="inline-flex justify-center items-center px-6 py-2 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-primary hover:bg-blue-700 transition-colors"
              >
                今すぐ無料で試す
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

        {/* 効果的な共有方法 */}
        <section id="share" className="mb-16 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            効果的な共有方法
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative">
              {/* 半透明の白いオーバーレイ */}
              <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  対面での共有
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
                    <div className="ml-2">
                      <strong className="text-gray-700">紙の名刺を渡す</strong>
                      <p className="text-gray-600 text-sm">
                        通常の名刺交換を行い、QRコードの説明を加えることで、スキャンを促します。
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
                    <div className="ml-2">
                      <strong className="text-gray-700">
                        スマホ画面で表示
                      </strong>
                      <p className="text-gray-600 text-sm">
                        紙の名刺を持っていない場合は、スマホでQRコードを表示して共有することも可能です。
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
                    <div className="ml-2">
                      <strong className="text-gray-700">その場でSNS連携</strong>
                      <p className="text-gray-600 text-sm">
                        QRコードをスキャンした後、その場でSNSでつながることを提案し、関係構築を加速させます。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative">
              {/* 半透明の白いオーバーレイ */}
              <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  デジタル環境での共有
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
                    <div className="ml-2">
                      <strong className="text-gray-700">
                        メール署名に追加
                      </strong>
                      <p className="text-gray-600 text-sm">
                        ビジネスメールの署名にQRコードを小さく配置し、デジタルプロフィールへの誘導を強化します。
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
                    <div className="ml-2">
                      <strong className="text-gray-700">
                        プレゼン資料の最後
                      </strong>
                      <p className="text-gray-600 text-sm">
                        プレゼンテーションの最終スライドにQRコードを配置し、質疑応答時の連絡先として活用します。
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
                    <div className="ml-2">
                      <strong className="text-gray-700">SNSプロフィール</strong>
                      <p className="text-gray-600 text-sm">
                        各SNSのプロフィール画像やヘッダーにQRコードを組み込み、クロスプラットフォームの連携を促進します。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8 relative">
            {/* 半透明の白いオーバーレイ */}
            <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-4 text-primary">
                QRコード名刺の効果測定
              </h3>
              <p className="text-gray-700 text-justify mb-4">
                QRコード名刺の効果を最大化するには、定期的な効果測定と改善が重要です。
                Share（シェア）のアナリティクス機能を使って以下のデータを分析しましょう。
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2 text-center">
                    アクセス数
                  </h4>
                  <div className="flex justify-center mb-2">
                    <svg
                      className="w-10 h-10 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    QRコードのスキャン回数や、プロフィールページの閲覧数を計測
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2 text-center">
                    時間・場所
                  </h4>
                  <div className="flex justify-center mb-2">
                    <svg
                      className="w-10 h-10 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    アクセスのあった時間帯や地域を分析し、効果的な場面を特定
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2 text-center">
                    SNS連携率
                  </h4>
                  <div className="flex justify-center mb-2">
                    <svg
                      className="w-10 h-10 text-primary"
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
                    プロフィール閲覧後にSNSでつながった率を測定し、効果を確認
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 活用テクニック */}
        <section id="tips" className="mb-16 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            活用テクニック
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {advancedTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative"
              >
                {/* 半透明の白いオーバーレイ */}
                <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 text-justify">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-primary">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              業種別活用テクニック
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  コンサルタント・専門職
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    <strong>専門分野の情報へのリンク</strong>
                    ：ブログや論文、専門的な資料へのリンクを追加し、専門性をアピール
                  </li>
                  <li>
                    <strong>予約システムへの誘導</strong>
                    ：オンライン相談や面談の予約ページへの直接リンクを設置
                  </li>
                  <li>
                    <strong>実績の可視化</strong>
                    ：過去の成功事例やケーススタディへのアクセスを提供
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  クリエイター・デザイナー
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    <strong>ポートフォリオへの直接リンク</strong>
                    ：作品集やポートフォリオサイトへすぐにアクセスできるようにする
                  </li>
                  <li>
                    <strong>QRコードのクリエイティブな活用</strong>
                    ：ロゴやアートワークをQRコードに組み込み、デザインスキルを示す
                  </li>
                  <li>
                    <strong>複数プロジェクトの紹介</strong>
                    ：異なるジャンルや専門領域の作品へ誘導するマルチリンクの設置
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  営業・ビジネス開発
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    <strong>製品情報へのリンク</strong>
                    ：商品カタログやサービス詳細ページへの直接アクセスを提供
                  </li>
                  <li>
                    <strong>キャンペーン連動</strong>
                    ：特別割引や期間限定オファーへの案内をQRコードから提供
                  </li>
                  <li>
                    <strong>即時商談予約</strong>
                    ：カレンダーアプリと連携して、その場で次回の商談予約を設定
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  経営者・役員
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    <strong>企業ビジョンの共有</strong>
                    ：企業理念や将来展望に関する動画や資料への誘導
                  </li>
                  <li>
                    <strong>プレミアムデザイン</strong>
                    ：高級感あるデザインとロゴ入りQRコードで会社ブランドを強化
                  </li>
                  <li>
                    <strong>複数役割の切り替え</strong>
                    ：異なる役職や場面に合わせたプロフィール表示を切り替え
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2025年の最新トレンド */}
        <section id="trends" className="mb-16 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            2025年の最新トレンド
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {trends2025.map((trend, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative"
              >
                {/* 半透明の白いオーバーレイ */}
                <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">{trend.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-primary">
                        {trend.title}
                      </h4>
                      <p className="text-gray-600 text-justify">
                        {trend.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              これからのQRコード名刺の進化
            </h3>
            <p className="text-white/90 text-justify mb-4">
              2025年に向けて、QRコード名刺はさらに進化しています。デジタル名刺アプリとの連携が強化され、一度のスキャンで相互に情報交換ができるようになりました。
              また、AR技術との組み合わせにより、QRコードをスキャンすると立体的なプロフィールが表示されるなど、単なる情報共有を超えた体験の提供が可能になっています。
            </p>
            <div className="mt-4 text-center">
              <Link
                href="/digital-namecard/ultimate-guide"
                className="inline-flex justify-center items-center px-6 py-3 border border-white rounded-md text-base font-medium text-white hover:bg-white/10 transition-all"
              >
                <span>デジタル名刺の完全ガイドを見る</span>
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

        {/* よくある質問 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative"
              >
                {/* 半透明の白いオーバーレイ */}
                <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-justify">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 shadow-lg mb-16">
          <div className="md:flex items-center justify-between gap-8">
            <div className="mb-6 md:mb-0 md:max-w-2xl">
              <h2 className="text-2xl font-bold mb-2">
                あなただけのQRコード名刺を作成しよう
              </h2>
              <p className="text-blue-100 text-justify">
                Share（シェア）のデジタル名刺サービスを利用して、あなたのビジネスに最適なQRコード名刺を簡単に作成できます。
                7日間の無料トライアルですべての機能をお試しいただけます。SNSアカウントを一つにまとめ、QRコードで簡単に共有できる便利なツールを今すぐ体験してください。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                href="/free-trial"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-primary bg-white hover:bg-gray-50 transition-all"
              >
                <span>無料トライアルを始める</span>
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

        {/* 関連コンテンツ */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            関連コンテンツ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/blog/digital-namecard/what-is"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all group relative"
            >
              {/* 半透明の白いオーバーレイ */}
              <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3 text-primary group-hover:text-blue-700">
                  デジタル名刺とは？
                </h3>
                <p className="text-gray-600 text-justify">
                  デジタル名刺（電子名刺）の基本概念から、従来の紙の名刺との違い、ビジネスシーンでの具体的なメリットまで詳しく解説します。
                </p>
              </div>
            </Link>
            <Link
              href="/blog/sns-integration-business-card"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all group relative"
            >
              {/* 半透明の白いオーバーレイ */}
              <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3 text-primary group-hover:text-blue-700">
                  SNSアカウントを一元管理
                </h3>
                <p className="text-gray-600 text-justify">
                  複数のSNSアカウントを一つのデジタル名刺にまとめる方法と、ビジネスシーンでの効果的な活用方法をご紹介します。
                </p>
              </div>
            </Link>
            <Link
              href="/digital-namecard/how-to-create"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all group relative"
            >
              {/* 半透明の白いオーバーレイ */}
              <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3 text-primary group-hover:text-blue-700">
                  デジタル名刺の作り方
                </h3>
                <p className="text-gray-600 text-justify">
                  ステップバイステップで解説する、Share（シェア）でのデジタル名刺作成方法をご紹介します。初めての方でも簡単に作成できます。
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}