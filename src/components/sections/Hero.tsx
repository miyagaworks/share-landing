// src/components/sections/Hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  // 環境に応じてサインアップURLを変更
  const signupUrl =
    process.env.NODE_ENV === "production"
      ? "https://app.sns-share.com/auth/signup"
      : "http://localhost:3000/auth/signup";

  return (
    <section className="gradient-bg text-white relative h-[770px] mt-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-12 pb-24 md:pt-20 md:pb-28 relative">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 左側コンテンツ - テキスト、ボタン、イラストが縦に並ぶ */}
          <div className="w-full md:w-1/2 z-10 relative">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                <span className="block">先進的なデジタル名刺で</span>
                <span className="block mt-2">ビジネスに差をつける</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 text-justify">
                Share（シェア）は、複数のSNSアカウントを一つにまとめた次世代の電子名刺サービスです。QRコードで瞬時に共有でき、経営者や第一線のビジネスパーソンに選ばれています。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href={signupUrl}
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-blue-800"
                >
                  <span>7日間無料で試す</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex justify-center items-center px-6 py-3 border border-white rounded-md text-base font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-blue-800"
                >
                  <span>電子名刺のメリットを見る</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 会議イラスト - ボタンの下に表示（PC・モバイル共通） */}
            <div className="mt-4">
              <Image
                src="/images/hero/illust_meet.webp"
                alt="デジタル名刺でスマートなビジネスミーティング"
                width={320}
                height={377}
                style={{ width: "auto", height: "auto" }}
                priority
                className="z-10 mx-auto md:mx-0 scale-[0.85]"
              />
            </div>
          </div>

          {/* 右側 - スマホイラスト */}
          <div className="hidden md:block w-1/2 relative">
            {/* 以下のdivを修正 */}
            <div className="absolute transform -translate-y-24 -bottom-12 right-0 floating">
              <Image
                src="/images/hero/illust_phone.webp"
                alt="経営者向け電子名刺アプリのスマートフォン画面"
                width={557}
                height={720}
                style={{ height: "auto", transform: "translateY(-150px)" }}
                priority
                className="z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}