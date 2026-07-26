// app/digital-namecard/for-executives/page.tsx
import type { Metadata, Viewport } from "next";
import ForExecutives from "@/components/pages/ForExecutives";

export const metadata: Metadata = {
  title: "経営者向けデジタル名刺 | ステータスと革新性を両立 | Share",
  description:
    "経営者・役員向けデジタル名刺の活用方法を解説。複数のSNSアカウントの一元管理や、場面に応じた連絡先の使い分けなど、Share（シェア）の経営者向けデジタル名刺の機能をご紹介します。",
  openGraph: {
    title: "経営者向けデジタル名刺 | ステータスと革新性を両立",
    description:
      "経営者としてのブランディングを強化するデジタル名刺活用法。先進的なデジタルツールを使いこなす革新的な経営者像を演出する使い方をご紹介します。",
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