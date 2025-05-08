// src/app/digital-namecard/ultimate-guide/page.tsx
"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import Link from "next/link";
import { useState } from "react";

export default function DigitalNamecardCompleteGuide() {
  const breadcrumbItems = useBreadcrumb();
  // activeSection の型を明示的に指定し、isActiveSection 関数を実装
  const [activeSection, setActiveSection] = useState("what-is");

  // 追加する関数 - activeSection が使われていることを示すため
  const isActiveSection = (sectionId: string): boolean => {
    return activeSection === sectionId;
  };
  // 目次セクション
  const tableOfContents = [
    { id: "what-is", title: "デジタル名刺とは", href: "#what-is" },
    { id: "benefits", title: "メリットと活用シーン", href: "#benefits" },
    { id: "vs-paper", title: "紙の名刺との比較", href: "#vs-paper" },
    { id: "features", title: "Shareの主な機能", href: "#features" },
    { id: "how-to-create", title: "作成方法", href: "#how-to-create" },
    { id: "usage-tips", title: "活用テクニック", href: "#usage-tips" },
    { id: "success-cases", title: "活用事例", href: "#success-cases" },
    { id: "faq", title: "よくある質問", href: "#faq" },
  ];

  // メリットデータ
  const benefitsData = [
    {
      title: "先進的なイメージの獲得",
      description:
        "デジタル名刺を利用することで、デジタルリテラシーの高さと革新性をアピールできます。特に初対面のビジネスシーンでは、紙の名刺と差別化された印象を与えることができます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      title: "複数SNSの一元管理",
      description:
        "LINE、X、Instagram、Facebookなど複数のSNSアカウントを一つのプロフィールにまとめ、QRコード一つで簡単に共有できます。相手に合わせた最適なコミュニケーションチャネルを提供できます。",
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
      title: "情報の即時更新",
      description:
        "役職や所属が変わった際も、デジタル名刺なら情報をリアルタイムで更新できます。常に最新の情報を提供でき、古い名刺を廃棄する必要もありません。",
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
      title: "豊富な情報量",
      description:
        "紙の名刺では収まらない詳細なプロフィールや自己紹介、SNSアカウント、ポートフォリオリンクなど、豊富な情報を一度に共有できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    },
    {
      title: "環境への配慮",
      description:
        "紙資源を使わないエコフレンドリーな選択。SDGsなど環境問題に取り組む企業姿勢のアピールにもつながります。デジタル化による環境負荷低減を実践できます。",
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
      title: "コスト削減",
      description:
        "紙の名刺の印刷コストや管理コストを削減できます。肩書きや所属が変わるたびに新しい名刺を印刷する必要がなく、長期的に見て経済的です。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
  ];

  // 活用シーンデータ
  const usageScenesData = [
    {
      title: "ビジネス名刺",
      description:
        "従来の名刺交換をよりスマートにします。QRコードを印刷した紙の名刺を渡しながら、スマホで詳細なプロフィールを共有できます。",
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
      title: "展示会・イベント",
      description:
        "多くの人と短時間で効率的に情報交換ができます。紙の名刺が切れる心配もなく、その場でSNSでつながることができます。",
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
      title: "講演・プレゼン",
      description:
        "スライドにQRコードを掲載するだけで、聴衆があなたのプロフィールやSNSに簡単にアクセスできます。フォローアップもスムーズに行えます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      ),
    },
    {
      title: "メール署名",
      description:
        "ビジネスメールの署名にQRコードやプロフィールリンクを追加することで、メールからSNSへの導線を作ることができます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
  ];

  // 紙の名刺との比較データ
  const comparisonData = [
    {
      feature: "情報量",
      digital: "SNSリンク、詳細プロフィールなど豊富な情報を収録可能",
      paper: "限られたスペースに基本情報のみ掲載",
    },
    {
      feature: "更新性",
      digital: "リアルタイムで情報を更新可能",
      paper: "情報変更時は再印刷が必要",
    },
    {
      feature: "共有方法",
      digital: "QRコードを通じて瞬時に共有",
      paper: "物理的な受け渡しが必要",
    },
    {
      feature: "コスト",
      digital: "初期投資後のランニングコストは低い",
      paper: "継続的な印刷コストが発生",
    },
    {
      feature: "環境負荷",
      digital: "紙資源を使用しないエコフレンドリー",
      paper: "紙資源を消費",
    },
    {
      feature: "検索・管理",
      digital: "デジタルで検索・管理が容易",
      paper: "物理的な整理・検索が必要",
    },
    {
      feature: "ビジネス印象",
      digital: "先進的でデジタルに精通したイメージ",
      paper: "伝統的で堅実なイメージ",
    },
  ];

  // 主な機能データ
  const featuresData = [
    {
      title: "SNS一元管理",
      description:
        "LINE、X、Instagram、Facebookなど複数のSNSアカウントを一つのプロフィールにまとめて管理できます。表示順序も自由に設定可能です。",
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
      title: "QRコード生成",
      description:
        "ワンクリックでQRコードを生成し、スマホで表示または名刺などに印刷して共有できます。高解像度のダウンロードにも対応しています。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v1m6 11h2m-6-1h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
        />
      ),
    },
    {
      title: "プロフィールカスタマイズ",
      description:
        "プロフィール写真、自己紹介文、カラーテーマなどを自由にカスタマイズできます。AI自己紹介文生成機能も搭載しています。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      ),
    },
    {
      title: "共有モード切替",
      description:
        "ビジネス用とプライベート用で表示するSNSや情報を切り替えられます。TPOに合わせて最適な情報を共有できます。",
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
      title: "アクセス解析",
      description:
        "プロフィールの閲覧数やQRコードのスキャン回数などの統計情報を確認できます。ビジネスネットワーキングの効果測定に役立ちます。",
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

  // 作成ステップデータ
  const creationStepsData = [
    {
      number: 1,
      title: "アカウント登録",
      description:
        "メールアドレスとパスワードで簡単に登録できます。7日間の無料トライアルでまずは試すことができます。",
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
      number: 2,
      title: "基本情報の入力",
      description:
        "名前、肩書き、会社名、連絡先情報などの基本情報を入力します。プロフィール写真も設定できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      ),
    },
    {
      number: 3,
      title: "SNSの追加",
      description:
        "連携したいSNSアカウントのURLやユーザー名を追加します。複数のSNSを追加し、表示順も自由に設定できます。",
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
      number: 4,
      title: "デザインカスタマイズ",
      description:
        "カラーテーマやレイアウトをカスタマイズし、あなたらしいプロフィールに仕上げます。企業のブランドカラーに合わせることもできます。",
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
      number: 5,
      title: "QRコード生成",
      description:
        "完成したプロフィールを共有するためのQRコードを生成します。高解像度でダウンロードし、名刺やプレゼン資料に活用できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v1m6 11h2m-6-1h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
        />
      ),
    },
  ];

  // 活用テクニックデータ
  const usageTipsData = [
    {
      title: "紙の名刺とQRコードの併用",
      description:
        "紙の名刺にQRコードを印刷することで、アナログとデジタルのメリットを両立できます。従来の礼儀作法を守りながら、デジタルの利便性も提供できます。",
    },
    {
      title: "プレゼン資料への掲載",
      description:
        "プレゼンテーションの最終スライドにQRコードを掲載することで、聴衆があなたの連絡先やSNSに簡単にアクセスできるようになります。",
    },
    {
      title: "メール署名への追加",
      description:
        "ビジネスメールの署名にQRコードやデジタル名刺へのリンクを追加することで、メールのやり取りからSNSへの導線を作ることができます。",
    },
    {
      title: "TPO別プロフィールの使い分け",
      description:
        "ビジネス用、カジュアル用など、シーンに合わせて表示するSNSや情報を切り替えることで、最適なプロフィールを共有できます。",
    },
    {
      title: "アナリティクスの活用",
      description:
        "プロフィールの閲覧数やQRコードのスキャン回数などの統計情報を分析することで、ビジネスネットワーキングの効果測定ができます。",
    },
  ];

  // 成功事例データ
  const successCasesData = [
    {
      title: "展示会での営業効率化",
      company: "製造業企業",
      description:
        "産業展示会で300名以上の参加者と名刺交換を行い、その場でSNSでつながることで、展示会後の商談につながりました。紙の名刺だけの場合と比較して、フォローアップの効率が大幅に向上しました。",
      results: [
        "営業リード数が前年比+45%増加",
        "展示会後のフォロー率が78%に向上",
        "商談成約率が23%アップ",
      ],
    },
    {
      title: "経営者のブランディング強化",
      company: "IT企業CEO",
      description:
        "取締役会や投資家ミーティングでデジタル名刺を活用。革新的な企業イメージの醸成に貢献し、投資家からの評価も向上しました。複数のSNSアカウントを一元管理し、適切なチャネルで情報発信できるようになりました。",
      results: [
        "ビジネスSNSのフォロワーが3ヶ月で150%増加",
        "投資家からの問い合わせが月平均5件増加",
        "メディア露出機会が増加（年間20件以上のインタビュー）",
      ],
    },
    {
      title: "フリーランスの案件獲得",
      company: "デザイナー",
      description:
        "フリーランスデザイナーとして、クライアントミーティングでデジタル名刺を活用。ポートフォリオサイトへの直接リンクにより、その場で作品を見てもらえるようになりました。先進的なデザイナーとしてのイメージも強化されています。",
      results: [
        "新規クライアント獲得率が35%向上",
        "ポートフォリオサイトへの訪問者が月平均60%増加",
        "リピート案件が25%増加",
      ],
    },
  ];

  // FAQデータ
  const faqData = [
    {
      question: "デジタル名刺と電子名刺の違いは何ですか？",
      answer:
        "「デジタル名刺」と「電子名刺」は基本的に同じ概念を指しており、どちらもスマートフォンやタブレットなどのデジタルデバイスで表示・共有できる名刺のことを意味します。Share（シェア）では、SNSアカウントなど複数の連絡先情報を一元管理し、QRコードで簡単に共有できる機能を提供しています。",
    },
    {
      question: "デジタル名刺は紙の名刺を完全に代替できますか？",
      answer:
        "ビジネスシーンによっては両方を併用するのが最適な場合もあります。Share（シェア）のデジタル名刺は、紙の名刺にQRコードを印刷することで、アナログとデジタルのメリットを両立させることも可能です。これにより従来の名刺交換の形式を保ちながら、デジタルならではの豊富な情報共有ができます。",
    },
    {
      question: "Share（シェア）のデジタル名刺で共有できるSNSの種類は？",
      answer:
        "LINE、YouTube、X、Instagram、TikTok、Facebook、Pinterest、Threads、note、BeRealなど、主要なSNSプラットフォームに対応しています。さらに、カスタムリンクを追加することで、その他のサービスやウェブサイトも登録できます。",
    },
    {
      question: "デジタル名刺の作成に費用はかかりますか？",
      answer:
        "Share（シェア）では7日間の無料トライアルをご用意しています。無料期間中にデジタル名刺を作成し、すべての機能をお試しいただけます。その後は、月額500円（税込）または年額5,000円（税込）の有料プランにお申し込みいただくことで、継続してご利用いただけます。",
    },
    {
      question: "デジタル名刺の情報セキュリティは大丈夫ですか？",
      answer:
        "Share（シェア）では、ユーザー情報保護を最優先事項として、業界標準の暗号化技術を採用しています。また、共有モード機能により、ビジネス用とプライベート用で共有する情報を使い分けることができるため、TPOに応じた適切な情報共有が可能です。",
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
                デジタル名刺完全ガイド
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                基礎から応用まで、一冊でわかるデジタル名刺のすべて
              </p>
              <p className="text-blue-50 text-justify">
                このガイドでは、デジタル名刺（電子名刺）の基本概念から具体的な活用方法、作成手順、成功事例まで、ビジネスシーンで差をつけるためのノウハウを総合的に解説します。Share（シェア）のデジタル名刺サービスを最大限に活用し、先進的なビジネスパーソンとしての印象を強化しましょう。
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              {/* 目次カード */}
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
                            <span className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full text-xs text-primary font-medium mr-3">
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
                        className="block w-full py-2 bg-primary text-white rounded-md text-sm font-medium text-center hover:bg-blue-700 transition-colors"
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
        {/* デジタル名刺とは */}
        <section id="what-is" className="mb-16 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            1. デジタル名刺とは
          </h2>
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <p className="text-gray-700 text-justify mb-4">
              <strong className="text-primary">デジタル名刺</strong>
              （電子名刺）とは、従来の紙の名刺をデジタル化し、スマートフォンやタブレットなどのデジタルデバイスで表示・共有できるようにしたものです。基本的な連絡先情報に加え、SNSアカウント、プロフィール写真、詳細な自己紹介など、より豊富な情報を含めることができます。
            </p>
            <p className="text-gray-700 text-justify mb-4">
              Share（シェア）のデジタル名刺サービスでは、複数のSNSアカウントを一つのプロフィールにまとめ、QRコードを通じて簡単に共有することができます。紙の名刺とは異なり、情報の更新が容易で、常に最新の情報を相手に提供できるという大きなメリットがあります。
            </p>
            <p className="text-gray-700 text-justify">
              ビジネスシーンでは、単なる連絡先交換の手段を超えて、先進的なイメージを演出し、効率的な人脈構築を促進するツールとして急速に普及しています。特にSNSを活用したマーケティングや人脈形成が重要視される現代のビジネス環境において、デジタル名刺は欠かせないコミュニケーションツールとなっています。
            </p>
          </div>

          <div className="md:flex items-center gap-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                デジタル名刺の基本要素
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
                    <strong>プロフィール情報</strong>
                    ：氏名、肩書き、会社名、連絡先など
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
                    <strong>SNSリンク</strong>：LINE、X、Instagram、Facebookなど
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
                    ：スキャンして簡単にプロフィールにアクセス
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
                    <strong>自己紹介</strong>
                    ：詳細なプロフィールや強み、専門分野の紹介
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
                    <strong>カスタムリンク</strong>
                    ：ポートフォリオ、ブログ、企業サイトなど
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                {/* モックアップ */}
                <div className="h-12 bg-blue-900 flex items-center justify-center">
                  <p className="text-white text-sm font-medium">
                    デジタル名刺サンプル
                  </p>
                </div>
                <div className="p-4 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-400"
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
                  <p className="font-bold text-gray-800">山田 太郎</p>
                  <p className="text-xs text-gray-500 mb-3">
                    株式会社テクノフューチャー CEO
                  </p>
                  <div className="w-full bg-gray-50 rounded-lg p-2 mb-3">
                    <div className="flex justify-center space-x-2">
                      {["L", "X", "I", "F"].map((letter, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-800"
                        >
                          {letter}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-20 h-20 bg-gray-100 p-1 rounded">
                    <div className="w-full h-full border border-gray-300 grid grid-cols-4 grid-rows-4">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div
                          key={i}
                          className={i % 3 === 0 ? "bg-gray-300" : "bg-white"}
                        ></div>
                      ))}
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
            2. メリットと活用シーン
          </h2>

          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            デジタル名刺の6つのメリット
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {benefitsData.map((benefit, index) => (
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
                    {benefit.icon}
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-3">{benefit.title}</h4>
                <p className="text-gray-600 text-justify">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            デジタル名刺の活用シーン
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {usageScenesData.map((scene, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {scene.icon}
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{scene.title}</h4>
                  <p className="text-gray-600 text-justify">
                    {scene.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 紙の名刺との比較 */}
        <section id="vs-paper" className="mb-16 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            3. 紙の名刺との比較
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
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
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              最適な活用法：併用のすすめ
            </h3>
            <p className="text-gray-700 text-justify mb-4">
              デジタル名刺と紙の名刺はそれぞれ異なる特徴と利点があるため、ビジネスシーンに応じて両方を併用することで最大の効果を発揮します。紙の名刺にQRコードを印刷することで、伝統的な名刺交換の形式を守りながら、デジタル名刺の便利さも提供できます。
            </p>
            <div className="md:flex items-start gap-6">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h4 className="font-medium text-gray-800 mb-2">
                  紙の名刺が適している場面
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>初対面の公式な場での挨拶</li>
                  <li>伝統や礼儀を重んじるビジネス環境</li>
                  <li>年配の方や保守的な業界との交流</li>
                  <li>ネットワーク環境が不安定な場所</li>
                  <li>高級感や質感を重視したいシチュエーション</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <h4 className="font-medium text-gray-800 mb-2">
                  デジタル名刺が適している場面
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>展示会や交流会での大量の名刺交換</li>
                  <li>IT・デジタル関連業界でのネットワーキング</li>
                  <li>SNSでの継続的なつながりを重視する場合</li>
                  <li>環境への配慮を示したい場合</li>
                  <li>詳細なプロフィールや作品を共有したい場合</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Shareの主な機能 */}
        <section id="features" className="mb-16 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            4. Share（シェア）の主な機能
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {featuresData.map((feature, index) => (
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

          <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              経営者向け特別機能
            </h3>
            <p className="text-gray-700 text-justify mb-4">
              Share（シェア）では、経営者・役員向けに特別なプレミアム機能をご用意しています。先進的なビジネスリーダーとしてのイメージを強化し、より効果的なネットワーキングを実現します。
            </p>
            <div className="md:flex gap-6">
              <div className="md:w-1/2 mb-4 md:mb-0">
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
                    <span className="ml-2 text-gray-700">
                      <strong>プレミアムデザイン</strong>
                      ：高級感あるテンプレート
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
                      <strong>高度なアナリティクス</strong>
                      ：詳細な閲覧データ分析
                    </span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
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
                    <span className="ml-2 text-gray-700">
                      <strong>複数プロフィール管理</strong>：役割別の使い分け
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
                      <strong>優先サポート</strong>：専任チームのサポート
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/digital-namecard/for-executives"
                className="inline-flex items-center text-primary font-medium hover:text-blue-700"
              >
                経営者向けプランの詳細を見る
                <svg
                  className="w-4 h-4 ml-1"
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
        </section>

        {/* 作成方法 */}
        <section id="how-to-create" className="mb-16 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            5. 作成方法
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {creationStepsData.map((step, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 relative"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                <div className="pt-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {step.icon}
                    </svg>
                  </div>
                  <h3 className="text-center font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              デジタル名刺作成のポイント
            </h3>
            <div className="md:flex gap-8">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h4 className="font-medium text-gray-800 mb-2">
                  プロフィール情報
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    <strong>簡潔で明確な情報</strong>
                    ：基本情報は簡潔に、わかりやすく記載しましょう。
                  </li>
                  <li>
                    <strong>適切な写真</strong>
                    ：プロフェッショナルな印象を与える写真を選びましょう。
                  </li>
                  <li>
                    <strong>自己紹介の最適化</strong>
                    ：AI自己紹介文生成機能を活用し、魅力的な紹介文を作成しましょう。
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <h4 className="font-medium text-gray-800 mb-2">
                  SNSアカウント設定
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    <strong>優先順位の設定</strong>
                    ：最もアクティブなSNSを上位に表示させましょう。
                  </li>
                  <li>
                    <strong>ビジネス用とプライベート用の区別</strong>
                    ：TPOに合わせて共有モードを切り替えましょう。
                  </li>
                  <li>
                    <strong>定期的な更新</strong>
                    ：SNSアカウントや情報は定期的に更新しましょう。
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/digital-namecard/how-to-create"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-primary hover:bg-blue-700 transition-all"
            >
              詳細な作成手順を見る
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
        </section>

        {/* 活用テクニック */}
        <section id="usage-tips" className="mb-16 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            6. 活用テクニック
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {usageTipsData.map((tip, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-justify">{tip.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              業種別活用のポイント
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-800 mb-2">
                  営業・ビジネス開発
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>展示会でのリード獲得に活用</li>
                  <li>その場でSNSでつながり、関係構築を加速</li>
                  <li>商品・サービス情報へのリンクを追加</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-800 mb-2">経営者・役員</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>ステータス性の高いデザインを選択</li>
                  <li>複数の役割に応じたプロフィール管理</li>
                  <li>メディア対応用のプロフィールを準備</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-800 mb-2">
                  フリーランス・クリエイター
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>ポートフォリオサイトへの誘導を重視</li>
                  <li>複数の専門分野やスキルを明示</li>
                  <li>作品サンプルへの直接リンクを追加</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 活用事例 */}
        <section id="success-cases" className="mb-16 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            7. 活用事例
          </h2>
          <div className="space-y-6">
            {successCasesData.map((caseItem, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {caseItem.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{caseItem.company}</p>
                <p className="text-gray-600 text-justify mb-4">
                  {caseItem.description}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">成果：</h4>
                  <ul className="space-y-1">
                    {caseItem.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
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
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-primary font-medium hover:text-blue-700"
            >
              より多くの活用事例を見る
              <svg
                className="w-4 h-4 ml-1"
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
        </section>

        {/* よくある質問 */}
        <section id="faq" className="mb-16 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            8. よくある質問
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
                今すぐデジタル名刺を作成しよう
              </h2>
              <p className="text-blue-100 text-justify">
                Share（シェア）のデジタル名刺サービスを7日間無料でお試しいただけます。複数のSNSアカウントを一つにまとめて、QRコードで瞬時に共有できる便利なツールを今すぐ体験してください。
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
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            関連コンテンツ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
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