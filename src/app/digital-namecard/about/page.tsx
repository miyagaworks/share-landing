// app/digital-namecard/about/page.tsx
import type { Metadata, Viewport } from "next";
import DigitalNamecardContent from "@/components/pages/DigitalNamecardContent";

export const metadata: Metadata = {
  title: "デジタル名刺とは？複数SNSを一つにまとめQRコードで共有 | Share",
  description:
    "デジタル名刺（電子名刺）でビジネスに差をつける。複数のSNSアカウントを一元管理し、QRコードで瞬時に共有。紙の名刺の限界を超える機能とビジネスメリットをわかりやすく解説します。",
  openGraph: {
    title: "デジタル名刺とは？複数SNSを一つにまとめQRコードで共有",
    description:
      "デジタル名刺（電子名刺）の基本から活用法まで徹底解説。複数SNSの一元管理、QRコードでの簡単共有など、先進的なビジネスパーソンに選ばれる理由とメリットがわかります。",
    type: "article",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function WhatIsDigitalNamecardPage() {
  return <DigitalNamecardContent />;
}