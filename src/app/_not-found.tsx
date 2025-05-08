// src/app/_not-found.tsx
import type { Metadata, Viewport } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ページが見つかりません | 404エラー | Share",
  description:
    "お探しのページが見つかりませんでした。URLが間違っているか、ページが削除された可能性があります。",
};

// viewportを独立して定義
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold mt-2 mb-6">
        ページが見つかりません
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        お探しのページは存在しないか、移動した可能性があります。URLを確認するか、以下のリンクからホームページに戻ってください。
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        ホームに戻る
      </Link>
    </div>
  );
}