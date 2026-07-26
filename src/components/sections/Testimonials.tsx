// src/components/sections/Testimonials.tsx
"use client";

import { useState, useEffect } from "react";

interface UsageScene {
  role: string;
  scene: string;
  content: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 業種別の活用シーン
  // 実在の顧客事例ではなく、想定される利用場面の紹介として記載している。
  // 効果を示す数値・評価・個人名・企業名は掲載しない。
  const usageScenes: UsageScene[] = [
    {
      role: "IT企業 マーケティング部門",
      scene: "マーケティングイベント",
      content:
        "名刺交換の機会が多い職種では、SNSアカウントを一つひとつ伝える手間がかかります。QRコードを提示するだけで複数のSNSをまとめて共有できるため、イベント会場での情報交換に活用できます。",
    },
    {
      role: "フリーランス Webデザイナー",
      scene: "クライアントへの提案",
      content:
        "複数のSNSに分散しているポートフォリオを、一つのプロフィールにまとめられます。プロフィールカスタマイズ機能で自身のブランドに合わせたデザインに整えられるため、クライアントへの提案時にそのまま共有できます。",
    },
    {
      role: "メーカー IT統括部門",
      scene: "法人プランの導入",
      content:
        "営業部門への法人プラン導入により、社員のSNSアカウントを会社として一元管理できます。デザインを統一できるため、取引先に対して組織としての表記を揃えられます。",
    },
    {
      role: "コンテンツクリエイター",
      scene: "イベント・ライブ配信",
      content:
        "複数のSNSを運用している場合でも、プロフィールリンクを一つにまとめられます。イベントの場でQRコードを表示して、その場でアカウントを案内できます。",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? usageScenes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % usageScenes.length);
  };

  // 自動スライド設定
  useEffect(() => {
    if (isHovered) return; // ホバー時は自動スライドを停止

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % usageScenes.length);
    }, 5000); // 5秒ごとに次のスライドへ

    return () => {
      clearInterval(interval);
    };
  }, [isHovered, usageScenes.length]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      {/* 装飾要素 */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 rounded-full px-4 py-1 text-primary text-sm font-semibold mb-4">
            活用シーン
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            業種別の活用シーン
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            実在の顧客事例ではなく、Shareが想定している利用場面をご紹介します。
          </p>
        </div>

        {/* PC表示用カルーセル */}
        <div
          className="hidden md:block relative rounded-2xl shadow-xl overflow-hidden bg-white mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-3 min-h-[400px]">
            {/* 活用シーンの内容 */}
            <div className="col-span-2 p-10 transition-all duration-500 ease-in-out flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-xl font-bold">
                  {usageScenes[activeIndex].role}
                </h3>
                <p className="text-gray-600">
                  想定シーン: {usageScenes[activeIndex].scene}
                </p>
              </div>

              <div className="relative">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-lg text-gray-600">
                    {usageScenes[activeIndex].content}
                  </p>
                </div>
              </div>
            </div>

            {/* ビジュアル部分 */}
            <div className="relative bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="smallGrid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#smallGrid)" />
                </svg>
              </div>

              <div className="w-64 h-64 rounded-full bg-white bg-opacity-10 flex items-center justify-center z-10">
                <div className="w-48 h-48 rounded-full bg-white shadow-inner p-8 transform transition-all duration-300 hover:scale-105">
                  <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center p-6 text-center">
                    <svg
                      className="w-16 h-16 text-primary mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d={
                          activeIndex === 0
                            ? "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            : activeIndex === 1
                            ? "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            : activeIndex === 2
                            ? "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            : "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                        }
                      />
                    </svg>
                    <p className="text-gray-700 font-medium text-sm text-justify">
                      {activeIndex === 0
                        ? "名刺交換が簡単に"
                        : activeIndex === 1
                        ? "ポートフォリオを集約"
                        : activeIndex === 2
                        ? "法人導入で一元管理"
                        : "複数SNSを一元管理"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ナビゲーションボタン */}
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300 focus:outline-none"
              aria-label="前の活用シーン"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300 focus:outline-none"
              aria-label="次の活用シーン"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* インジケーター */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {usageScenes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-primary w-8" : "bg-gray-300"
                }`}
                aria-label={`活用シーン ${index + 1}を表示`}
              ></button>
            ))}
          </div>
        </div>

        {/* モバイル表示用カード */}
        <div className="md:hidden">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="relative bg-gradient-to-r from-primary to-blue-600 h-3 w-full"></div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  {usageScenes[activeIndex].role}
                </h3>
                <p className="text-sm text-gray-500">
                  想定シーン: {usageScenes[activeIndex].scene}
                </p>
              </div>

              <div className="relative">
                <div className="border-l-4 border-primary pl-4 py-1">
                  <p className="text-gray-600 text-sm text-justify">
                    {usageScenes[activeIndex].content}
                  </p>
                </div>
              </div>
            </div>

            {/* モバイル用ナビゲーションボタン */}
            <div className="flex justify-between px-4 py-3 bg-gray-50 border-t border-gray-100">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 focus:outline-none"
                aria-label="前の活用シーン"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex items-center space-x-1.5">
                {usageScenes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "bg-primary" : "bg-gray-300"
                    }`}
                    aria-label={`活用シーン ${index + 1}を表示`}
                  ></button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 focus:outline-none"
                aria-label="次の活用シーン"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
