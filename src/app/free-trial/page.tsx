// app/free-trial/page.tsx
import type { Metadata, Viewport } from "next";
import FreeTrial from "@/components/pages/FreeTrial";

export const metadata: Metadata = {
  title: "デジタル名刺を7日間無料で試す | Share（シェア）無料トライアル",
  description:
    "Share（シェア）のデジタル名刺サービスを7日間無料でお試しいただけます。クレジットカード登録不要で、すべての機能をご利用いただけます。簡単3ステップで登録完了、今すぐ始めましょう。",
  openGraph: {
    title: "デジタル名刺を7日間無料で試す | Share無料トライアル",
    description:
      "複数SNSをまとめて共有できるデジタル名刺サービスを無料体験。QRコード生成やプロフィールカスタマイズなど全機能をお試しいただけます。",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function FreeTrialPage() {
  return <FreeTrial />;
}