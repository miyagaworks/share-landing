// src/app/blog/digital-namecard/what-is/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "デジタル名刺とは？紙の名刺との違いとビジネスでのメリット | Share",
  description:
    "デジタル名刺（電子名刺）の基本概念から、従来の紙の名刺との違い、ビジネスシーンでの具体的なメリットまで詳しく解説します。複数のSNSアカウントを一つにまとめ、QRコードで簡単に共有する方法をご紹介。",
  openGraph: {
    title: "デジタル名刺とは？紙の名刺との違いとビジネスでのメリット",
    description:
      "紙の名刺の限界を超える、次世代のビジネスコミュニケーションツール。デジタル名刺の基本と、ビジネスで得られるメリットを解説します。",
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

export default function WhatIsLayout({ children }: { children: ReactNode }) {
  return children;
}
