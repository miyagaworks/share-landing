// src/app/blog/digital-namecard/page.tsx
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "デジタル名刺に関する記事一覧 | Share",
  description:
    "デジタル名刺の基本知識、活用方法、QRコード名刺の作り方、SNSアカウント連携など、デジタル名刺に関する情報を詳しく解説した記事を集めました。",
  openGraph: {
    title: "デジタル名刺に関する記事一覧 | Share（シェア）",
    description:
      "デジタル名刺に関する役立つ情報を集めたブログ記事一覧。基本から応用まで、ビジネスに役立つデジタル名刺の活用法をご紹介します。",
    type: "website",
  },
};

// viewportを独立して定義
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function DigitalNamecardBlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">デジタル名刺に関する記事</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ここに記事リストを表示 */}
      </div>
    </div>
  );
}