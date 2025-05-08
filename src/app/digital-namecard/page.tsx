// app/digital-namecard/page.tsx
import type { Metadata, Viewport } from "next";
import DigitalNamecardOverview from "@/components/pages/DigitalNamecardOverview";

export const metadata: Metadata = {
  title: "デジタル名刺サービス | SNSアカウントを一つにまとめて簡単共有 | Share",
  description:
    "Share（シェア）のデジタル名刺サービスで、複数のSNSアカウントを一つにまとめて簡単共有。QRコード一つで全てのアカウントにアクセスでき、ビジネスシーンでもプライベートでも活躍します。",
  openGraph: {
    title: "デジタル名刺サービス | Share（シェア）",
    description:
      "複数のSNSアカウントを一つのデジタル名刺にまとめて、QRコードでカンタン共有。ビジネスの第一印象を高める革新的なデジタル名刺サービスです。",
    type: "website",
    images: [
      {
        url: "/images/screenshots/profile-creation.webp",
        width: 1200,
        height: 630,
        alt: "Share デジタル名刺サービス",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function DigitalNamecardPage() {
  return <DigitalNamecardOverview />;
}