// src/app/blog/digital-namecard/sns-integration/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SNSアカウントを一元管理できるデジタル名刺の活用法 | Share",
  description:
    "LINE・X・Instagram・Facebookなど複数のSNSアカウントを、Share（シェア）のデジタル名刺で一つにまとめて共有する方法を解説。効果的なSNS一元管理と、ビジネスシーンでの活用テクニックをご紹介します。",
  openGraph: {
    title: "SNSアカウントを一元管理できるデジタル名刺の活用法",
    description:
      "複数のSNSを一つのプロフィールにまとめてスマートな人脈構築。SNS一元管理の方法とビジネスでの活用テクニックを詳しく解説します。",
    type: "article",
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

export default function SnsIntegrationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
