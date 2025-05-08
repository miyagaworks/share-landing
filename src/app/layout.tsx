// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "デジタル名刺サービス「Share」| 複数SNSを一つに、QRコードで簡単共有",
  description:
    "【無料トライアル実施中】経営者・ビジネスパーソン向けデジタル名刺。複数SNSを一つに集約、QRコード一つでスマートに共有。先進的なビジネスツールで周囲と差をつけ、第一印象を変革します。",
  metadataBase: new URL("https://sns-share.com"),
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://sns-share.com",
  },
  keywords:
    "デジタル名刺, 電子名刺, QRコード名刺, SNS連携, 複数SNS一元管理, ビジネス名刺",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://sns-share.com",
    title:
      "デジタル名刺サービス「Share」| 複数SNSを一つに、ビジネスの第一印象を変える",
    description:
      "経営者・ビジネスパーソン向けデジタル名刺。複数SNSを一つに集約、QRコードで瞬時に共有。先進的なツールで差をつけ、ビジネスチャンスを広げます。",
    siteName: "Share",
    images: [
      {
        url: "https://sns-share.com/images/icons/ogp.png",
        width: 1200,
        height: 630,
        alt: "Share - デジタル名刺サービス",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "デジタル名刺サービス「Share」| 複数SNSを一つに、QRコードで瞬時に共有",
    description:
      "経営者・ビジネスパーソン向けデジタル名刺。SNSを一元管理、ビジネスに差をつける先進的ツール。7日間無料トライアル実施中。",
    images: ["https://sns-share.com/images/icons/ogp.png"],
    site: "@shareapp",
    creator: "@shareapp",
  },
  other: {
    "line:image": "https://sns-share.com/images/icons/ogp_line.png",
    "line:title": "Share - デジタル名刺サービス",
    "line:description": "複数SNSを一つに集約、QRコードで瞬時に共有",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}