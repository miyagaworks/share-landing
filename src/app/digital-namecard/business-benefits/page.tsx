// app/digital-namecard/business-benefits/page.tsx
import type { Metadata, Viewport } from "next";
import BusinessAdvantage from "@/components/pages/BusinessAdvantage";

export const metadata: Metadata = {
  title: "ビジネスで差をつけるデジタル名刺活用法 | Share",
  description:
    "デジタル名刺をビジネスシーンで活用する方法を解説。複数のSNSアカウントの一元管理、その場でつながる名刺交換、紙の名刺との併用など、Share（シェア）のデジタル名刺でできることをご紹介します。",
  openGraph: {
    title: "ビジネスで差をつけるデジタル名刺活用法",
    description:
      "従来の紙の名刺では実現できなかった新しいビジネスコミュニケーションの形。デジタル名刺でできることと、ビジネスシーンでの使い方を解説します。",
    type: "article",
  },
};

// viewportを独立して定義
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function BusinessAdvantagePage() {
  return <BusinessAdvantage />;
}