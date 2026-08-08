// src/app/blog/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "デジタル名刺活用ブログ | Share",
  description:
    "Share（シェア）のデジタル名刺活用ブログ。デジタル名刺の基本から、QRコードでの共有方法、複数SNSアカウントの一元管理まで、ビジネスシーンで差をつける実践的な情報を発信しています。",
  openGraph: {
    title: "デジタル名刺活用ブログ | Share（シェア）",
    description:
      "先進的なビジネスパーソンのためのデジタル名刺情報。基本から応用まで、ビジネスで差をつけるための実践的なノウハウをご紹介します。",
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

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
