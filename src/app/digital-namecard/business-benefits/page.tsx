// app/digital-namecard/business-benefits/page.tsx
import type { Metadata, Viewport } from "next";
import BusinessAdvantage from "@/components/pages/BusinessAdvantage";

export const metadata: Metadata = {
  title: "ビジネスで差をつけるデジタル名刺活用法 | Share",
  description:
    "デジタル名刺をビジネスシーンで効果的に活用する方法を解説。営業力アップ、ネットワーキング強化、ブランディング効果など、Share（シェア）のデジタル名刺がもたらすビジネスメリットをご紹介します。",
  openGraph: {
    title: "ビジネスで差をつけるデジタル名刺活用法",
    description:
      "従来の紙の名刺では実現できなかった新しいビジネスコミュニケーションの形。デジタル名刺を活用して営業効率を上げ、ビジネスチャンスを広げる方法を解説します。",
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