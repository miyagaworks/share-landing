// src/app/support/contact/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "お問い合わせ | Share",
  description:
    "デジタル名刺サービスShare（シェア）へのお問い合わせフォーム。サービスの使い方、料金、法人プランに関するご相談を受け付けています。通常2営業日以内にご返信いたします。",
  openGraph: {
    title: "お問い合わせ | Share（シェア）",
    description:
      "デジタル名刺サービスShare（シェア）へのお問い合わせはこちら。個人・法人プランのご相談を受け付けています。",
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

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
