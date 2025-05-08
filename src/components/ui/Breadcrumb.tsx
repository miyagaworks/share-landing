// src/components/ui/Breadcrumb.tsx
import Link from "next/link";
import React from "react";

export interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

// 英語から日本語へのマッピング
const pageNameMapping: { [key: string]: string } = {
  blog: "ブログ",
  "digital-namecard": "デジタル名刺",
  "what-is": "デジタル名刺とは",
  home: "ホーム",
  support: "サポート",
  about: "会社概要",
  contact: "お問い合わせ",
  faq: "よくある質問",
  // 他の翻訳も必要に応じて追加
};

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  // ベースURLを追加
  const baseUrl = "https://sns-share.com";

  // 項目名を日本語に変換
  const translatedItems = items.map((item) => ({
    ...item,
    name: pageNameMapping[item.name] || item.name, // マッピングがない場合はそのまま表示
  }));

  // 構造化データを生成
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: translatedItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.href}`,
    })),
  };

  return (
    <>
      {/* 構造化データをページに埋め込む */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <nav aria-label="パンくずリスト" className={`py-2 ${className}`}>
        <ol
          className="flex flex-wrap items-center space-x-2 text-sm"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {translatedItems.map((item, index) => (
            <li
              key={item.href}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && <span className="mx-1 text-gray-400">/</span>}
              {item.current ? (
                <span
                  className="text-gray-700"
                  aria-current="page"
                  itemProp="name"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-primary hover:text-blue-700 transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={`${index + 1}`} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}