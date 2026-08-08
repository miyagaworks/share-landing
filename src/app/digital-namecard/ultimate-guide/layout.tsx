// src/app/digital-namecard/ultimate-guide/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "デジタル名刺完全ガイド - 基礎から応用まで一冊でわかる | Share",
  description:
    "デジタル名刺（電子名刺）の基本概念から、具体的な活用方法、作成手順、活用シーンまでを総合的に解説した完全ガイド。Share（シェア）のデジタル名刺で、ビジネスシーンに差をつけるノウハウをまとめました。",
  openGraph: {
    title: "デジタル名刺完全ガイド - 基礎から応用まで一冊でわかる",
    description:
      "デジタル名刺の基礎から応用まで、一冊でわかる総合ガイド。作成手順から活用シーンまで、ビジネスで差をつけるノウハウを解説します。",
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

export default function UltimateGuideLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
