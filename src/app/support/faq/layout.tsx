// src/app/support/faq/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "よくあるご質問 | Share",
  description:
    "デジタル名刺サービスShare（シェア）のよくあるご質問。料金や無料での利用範囲、対応しているSNS、QRコードの生成方法、解約手続き、法人プラン、データセキュリティについてお答えします。",
  openGraph: {
    title: "よくあるご質問 | Share（シェア）",
    description:
      "Share（シェア）デジタル名刺サービスに関するよくあるご質問をまとめました。料金・対応SNS・QRコード・セキュリティなどにお答えします。",
    type: "website",
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

export default function FaqLayout({ children }: { children: ReactNode }) {
  return children;
}
