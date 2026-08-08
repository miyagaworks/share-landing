// src/app/blog/digital-namecard/qr-code-guide/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "QRコード名刺の作り方と注意点 - デザインから共有まで | Share",
  description:
    "QRコードを活用したデジタル名刺の作成方法を解説。最適なQRコードのサイズ・配置・デザイン例から、作成手順、スキャン時の注意点まで、ビジネスで差をつけるQRコード名刺の完全ガイドです。",
  openGraph: {
    title: "QRコード名刺の作り方と注意点 - デザインから共有まで",
    description:
      "QRコード名刺の基本概念から、最適なデザイン方法、作成手順、効果的な活用テクニックまで、実践的なノウハウを詳しく解説します。",
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

export default function QrCodeGuideLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
