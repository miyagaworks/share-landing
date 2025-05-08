// app/digital-namecard/how-to-create/page.tsx
import type { Metadata, Viewport } from "next";
import HowToCreateDigitalNamecard from "@/components/pages/HowToCreateDigitalNamecard";

export const metadata: Metadata = {
  title: "デジタル名刺の作り方 | 初心者でも簡単3ステップ | Share",
  description:
    "Share（シェア）でのデジタル名刺の作成方法を詳しく解説。アカウント作成から情報入力、QRコード生成まで、初めての方でも簡単に作成できるステップバイステップガイド。",
  openGraph: {
    title: "デジタル名刺の作り方 | 初心者でも簡単3ステップ",
    description:
      "Share（シェア）でのデジタル名刺作成方法を解説。わずか3ステップで、あなただけのデジタル名刺が完成します。",
    type: "article",
    images: [
      {
        url: "/images/howto/create-step1.webp",
        width: 1200,
        height: 630,
        alt: "デジタル名刺作成ステップ",
      },
    ],
  },
};

// viewportを独立して定義
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function HowToCreatePage() {
  return <HowToCreateDigitalNamecard />;
}