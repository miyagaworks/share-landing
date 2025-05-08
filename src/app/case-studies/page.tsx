// app/case-studies/page.tsx
import type { Metadata, Viewport } from "next";
import CaseStudies from "@/components/pages/CaseStudies";

export const metadata: Metadata = {
  title: "デジタル名刺活用事例集 | 業種別・シーン別の成功例 | Share",
  description:
    "Share（シェア）のデジタル名刺を活用した成功事例をご紹介。展示会、商談、ネットワーキングなど様々なシーンでの活用法や、業種別の導入効果をわかりやすく解説します。",
  openGraph: {
    title: "デジタル名刺活用事例集 | 業種別・シーン別の成功例",
    description:
      "実際のユーザーが語るデジタル名刺活用術。経営者、営業担当者、フリーランスなど様々な立場の方々の活用事例から、デジタル名刺の可能性を探ります。",
    type: "article",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function CaseStudiesPage() {
  return <CaseStudies />;
}