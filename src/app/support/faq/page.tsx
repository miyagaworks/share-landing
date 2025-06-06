// src/app/support/faq/page.tsx
"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // FAQデータの定義
  const faqItems: FAQItem[] = [
    {
      id: "what-is-share",
      question: "Shareとは何ですか？",
      answer:
        "Shareは、複数のSNSアカウントと連絡先情報を一つのデジタルプロフィールにまとめ、QRコードやNFCを通じて簡単に共有できるプラットフォームです。名刺交換のデジタル版として、ビジネスやプライベートでのコミュニケーションをスムーズにします。",
      category: "基本情報",
    },
    {
      id: "is-free",
      question: "無料で利用できますか？",
      answer:
        "Shareには7日間の無料トライアル期間があります。その後は月額500円（税込）または年額5,000円（税込）の有料プランに移行していただく必要があります。有料プランでは、すべての機能を制限なくご利用いただけます。",
      category: "料金・プラン",
    },
    {
      id: "supported-sns",
      question: "対応しているSNSは何がありますか？",
      answer:
        "LINE、YouTube、X、Instagram、TikTok、Facebook、Pinterest、Threads、BeRealなど主要なSNSに対応しています。また、カスタムリンクも追加できるため、上記以外のサービスも登録可能です。",
      category: "機能・使い方",
    },
    {
      id: "cancellation",
      question: "解約はいつでもできますか？",
      answer:
        "はい、「ご利用プラン」ページから解約手続きをいつでも行うことができます。解約手続きを行っても、契約期間の終了までサービスをご利用いただけます。なお、解約後の日割り返金はございませんので、ご了承ください。",
      category: "料金・プラン",
    },
    {
      id: "qr-code",
      question: "QRコードはどのように生成されますか？",
      answer:
        "Shareでは「共有設定」ページから簡単にQRコードを生成できます。生成されたQRコードはPNG形式（画像用）またはSVG形式（印刷用高解像度）でダウンロード可能です。QRコードを名刺に印刷したり、SNSのプロフィール画像に使用したりすることで、簡単にあなたのプロフィールを共有できます。",
      category: "機能・使い方",
    },
    {
      id: "corporate-plan",
      question: "法人プランはありますか？",
      answer:
        "はい、法人向けプランをご用意しています。最大10名まで利用できるスタータープラン（月額3,000円）と、最大30名まで利用できるビジネスプラン（月額6,000円）、そして最大50名まで利用できるエンタープライズプラン（月額9,000円）があります。チーム管理機能や企業ブランディングの統一など、法人向けの機能が含まれています。",
      category: "料金・プラン",
    },
    {
      id: "privacy",
      question: "プライバシー設定はできますか？",
      answer:
        "はい、Shareでは公開する情報やSNSアカウントを細かく設定できます。「ビジネス用」と「プライベート用」など、シーンに合わせた複数のプロフィールを作成し、状況に応じて使い分けることも可能です。",
      category: "機能・使い方",
    },
    {
      id: "data-security",
      question: "データセキュリティは大丈夫ですか？",
      answer:
        "お客様の情報セキュリティを最優先に考え、業界標準の暗号化技術を採用しています。また、定期的なセキュリティ監査を実施し、システムの安全性を常に確保しています。詳細はプライバシーポリシーをご確認ください。",
      category: "セキュリティ",
    },
  ];

  // カテゴリーの抽出（重複なし）
  const categories = Array.from(
    new Set(faqItems.map((item) => item.category).filter(Boolean))
  ) as string[];

  // FAQの開閉を切り替える関数
  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // フィルタリングされたFAQ項目
  const filteredFaqItems = faqItems.filter((item) => {
    // カテゴリーフィルター
    const matchesCategory = !activeCategory || item.category === activeCategory;

    // 検索フィルター
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout
      title="よくあるご質問"
      breadcrumbs={[
        { name: "ホーム", href: "/" },
        { name: "よくあるご質問", href: "/support/faq" },
      ]}
    >
      <div className="space-y-6">
        <p className="text-justify mb-6">
          Shareに関するよくあるご質問をまとめました。お探しの情報が見つからない場合は、お気軽に
          <Link
            href="/support/contact"
            className="text-primary hover:underline"
          >
            お問い合わせ
          </Link>
          ください。
        </p>

        {/* 検索バー */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="質問を検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
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
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* カテゴリータブ */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              activeCategory === null
                ? "bg-primary text-white shadow-md"
                : "bg-white hover:bg-gray-50 text-gray-600 border border-gray-200"
            }`}
          >
            すべて
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-white hover:bg-gray-50 text-gray-600 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 検索結果カウント - 検索時のみ表示 */}
        {searchTerm && (
          <div className="mb-4 text-sm text-gray-600">
            「{searchTerm}」の検索結果: {filteredFaqItems.length}件
          </div>
        )}

        {/* FAQ項目 */}
        <div className="space-y-4">
          {filteredFaqItems.length > 0 ? (
            filteredFaqItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-medium text-gray-900 pr-6">
                    {item.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 ml-2 transition-transform duration-300 ${
                      openItems[item.id] ? "transform rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openItems[item.id]
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="border-l-4 border-primary pl-4 py-1">
                      <p className="text-gray-600 text-justify">
                        {item.answer}
                      </p>
                    </div>
                    {item.category && (
                      <div className="mt-4 flex items-center">
                        <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            // 検索結果がない場合
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                検索結果が見つかりませんでした
              </h4>
              <p className="text-gray-600 mb-4">
                別のキーワードで検索するか、カテゴリータブで絞り込みをリセットしてください。
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory(null);
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                すべての質問を表示
              </button>
            </div>
          )}
        </div>

        {/* 問い合わせリンク */}
        <div className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            お探しの答えが見つかりませんか？
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            さらに詳しい情報が必要な場合は、サポートチームにお問い合わせください。
            24時間以内（営業日に限る）に回答いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}