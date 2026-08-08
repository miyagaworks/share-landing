// app/case-studies/page.tsx
import type { Metadata, Viewport } from "next";
import CaseStudies from "@/components/pages/CaseStudies";

export const metadata: Metadata = {
  title: "デジタル名刺の活用シーン集 | 業種別・シーン別 | Share",
  description:
    "Share（シェア）のデジタル名刺が、展示会・商談・採用イベントなどどのような場面で使えるかを業種別にご紹介します。あわせて、デジタル名刺が求められる背景を公的統計とともに掲載しています。",
  openGraph: {
    title: "デジタル名刺の活用シーン集 | 業種別・シーン別",
    description:
      "展示会、商談、採用イベントなど、デジタル名刺の活用が想定される場面を業種別にまとめました。経営者、営業担当者、フリーランスなど立場ごとの使い方もご紹介します。",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function CaseStudiesPage() {
  return <CaseStudies />;
}