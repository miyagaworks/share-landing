// app/digital-namecard/for-executives/page.tsx
import type { Metadata, Viewport } from "next";
import ForExecutives from "@/components/pages/ForExecutives";

export const metadata: Metadata = {
  title: "経営者向けデジタル名刺 | ステータスと革新性を両立 | Share",
  description:
    "経営者・役員向けデジタル名刺の活用方法を解説。先進的なイメージ構築とビジネスコミュニケーションの効率化を実現する、Share（シェア）の経営者向けデジタル名刺機能をご紹介します。",
  openGraph: {
    title: "経営者向けデジタル名刺 | ステータスと革新性を両立",
    description:
      "経営者としてのブランディングを強化するデジタル名刺活用法。先進的なデジタルツールを使いこなす革新的な経営者像を演出し、ビジネスチャンスを広げます。",
    type: "article",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function ForExecutivesPage() {
  return <ForExecutives />;
}