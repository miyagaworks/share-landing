// src/app/blog/category/[slug]/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";

// カテゴリー名のマッピング（page.tsx の categoryNames と一致させること）
const categoryNames: Record<string, string> = {
  all: "すべて",
  basic: "基礎知識",
  guide: "活用ガイド",
  technique: "活用テクニック",
};

// カテゴリーごとの説明文。未定義の slug では汎用の説明文にフォールバックする。
const categoryDescriptions: Record<string, string> = {
  all: "Share（シェア）のデジタル名刺活用ブログの全記事一覧。デジタル名刺の基礎知識から、QRコードでの共有方法、複数SNSアカウントの一元管理まで、ビジネスに役立つ情報をまとめています。",
  basic: "デジタル名刺の基礎知識に関する記事一覧。デジタル名刺（電子名刺）とは何か、紙の名刺との違い、ビジネスで得られるメリットなど、はじめての方向けの情報をまとめています。",
  guide: "デジタル名刺の活用ガイドに関する記事一覧。QRコード名刺の作り方や共有方法など、Share（シェア）のデジタル名刺を実際に使いこなすための手順を解説しています。",
  technique: "デジタル名刺の活用テクニックに関する記事一覧。複数SNSアカウントの一元管理をはじめ、ビジネスシーンで差をつけるための実践的な使い方をご紹介します。",
};

function resolveCategoryName(slug: string | undefined): string {
  if (!slug) return "カテゴリー";
  return categoryNames[slug] ?? decodeURIComponent(slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = resolveCategoryName(slug);
  const description =
    categoryDescriptions[slug] ??
    `デジタル名刺活用ブログの「${categoryName}」カテゴリーの記事一覧です。Share（シェア）のデジタル名刺に関する情報を、ビジネスシーンで役立つ形でまとめています。`;

  return {
    title: `デジタル名刺ブログ「${categoryName}」の記事一覧 | Share`,
    description,
    openGraph: {
      title: `デジタル名刺ブログ「${categoryName}」の記事一覧`,
      description,
      type: "website",
      images: [
        {
          url: "https://sns-share.com/images/icons/ogp.png",
          width: 1200,
          height: 630,
          alt: "Share - デジタル名刺サービス",
        },
      ],
    },
  };
}

export default function BlogCategoryLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
