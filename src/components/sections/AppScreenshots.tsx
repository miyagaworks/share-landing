// src/components/sections/AppScreenshots.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function AppScreenshots() {
  const [activeScreen, setActiveScreen] = useState(0);

  // スクリーンショットのリスト
  const screenshots = [
    {
      title: "プロフィール編集",
      description:
        "必要な情報を入力するだけで、あなただけのプロフィールページが完成します。",
      imagePath: "/images/screenshots/profile-creation.png",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      ),
    },
    {
      title: "SNSアカウントの接続",
      description:
        "主要SNSへのリンクを簡単に追加。あなたのオンラインプレゼンスを一箇所に集約できます。",
      imagePath: "/images/screenshots/social-links.png",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      ),
    },
    {
      title: "QRコード生成",
      description:
        "ワンクリックでQRコードを生成。名刺やSNSに掲載して、簡単に共有できます。",
      imagePath: "/images/screenshots/qr-code.png",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v1m6 11h2m-6-1h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
        />
      ),
    },
    {
      title: "自己紹介文ジェネレーター",
      description:
        "AIが趣味や特性から最適な自己紹介文を自動生成。様々なシーンに合わせた文章が完成します。",
      imagePath: "/images/screenshots/intro-generator.png",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      ),
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block bg-blue-100 rounded-full px-4 py-1 text-primary text-sm font-semibold mb-3 md:mb-4">
            操作デモ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-6">
            直感的な操作性
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600">
            Shareはシンプルで使いやすいインターフェースを提供します
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* モバイル用機能リスト（md未満で表示） */}
          <div className="w-full block md:hidden mb-0">
            <div className="flex justify-between items-center px-1 mb-3">
              {screenshots.map((screen, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScreen(index)}
                  className={`relative flex-1 py-2 px-1 text-center transition-all duration-300 ${
                    activeScreen === index
                      ? "text-primary font-medium"
                      : "text-gray-500"
                  }`}
                >
                  <div
                    className={`w-10 h-10 mx-auto rounded-full ${
                      activeScreen === index
                        ? "bg-blue-100 shadow-md"
                        : "bg-gray-100"
                    } flex items-center justify-center mb-1 border ${
                      activeScreen === index
                        ? "border-primary"
                        : "border-gray-200"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 ${
                        activeScreen === index
                          ? "text-primary"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {screen.icon}
                    </svg>
                  </div>
                  <span className="text-xs font-medium">{index + 1}</span>
                  {activeScreen === index && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-10 bg-primary rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* スクリーンショット表示エリア */}
          <div className="w-full md:w-3/5 relative">
            <div className="bg-gray-900 rounded-3xl p-3 md:p-6 shadow-md mx-auto max-w-md relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex-1 flex justify-start space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-gray-700 rounded-full px-3 py-1 text-xs text-gray-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Share App
                  </div>
                </div>
                <div className="flex-1"></div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden aspect-[9/16] relative shadow-inner">
                {/* 実際のスクリーンショット表示 */}
                <div className="relative w-full h-full">
                  <Image
                    src={screenshots[activeScreen].imagePath}
                    alt={screenshots[activeScreen].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={activeScreen === 0}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 機能リスト (デスクトップ表示) */}
          <div className="hidden md:block w-full md:w-2/5 mt-10 md:mt-0">
            <div className="space-y-4 mx-auto">
              {screenshots.map((screen, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScreen(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeScreen === index
                      ? "bg-primary text-white shadow-lg transform -translate-x-1"
                      : "bg-white hover:bg-gray-50 shadow-md border border-gray-100"
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`w-12 h-12 rounded-lg ${
                        activeScreen === index
                          ? "bg-white bg-opacity-20"
                          : "bg-blue-100"
                      } flex items-center justify-center mr-4 flex-shrink-0`}
                    >
                      <svg
                        className={`w-6 h-6 ${
                          activeScreen === index ? "text-white" : "text-primary"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {screen.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{screen.title}</h3>
                      <p
                        className={`text-sm ${
                          activeScreen === index
                            ? "text-blue-100"
                            : "text-gray-600"
                        }`}
                      >
                        {screen.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ナビゲーションドット (モバイル表示時は非表示) */}
        <div className="hidden md:flex justify-center space-x-2 mt-12">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveScreen(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeScreen === index ? "bg-primary scale-125" : "bg-gray-300"
              }`}
              aria-label={`スクリーンショット ${index + 1}を表示`}
            ></button>
          ))}
        </div>

        {/* モバイル用説明テキスト (md未満で表示) */}
        <div className="block md:hidden mt-8 mb-6 mx-auto max-w-md px-4 py-3 bg-blue-50 rounded-xl border border-blue-100">
          <h3 className="font-bold text-gray-800 mb-1">
            {screenshots[activeScreen].title}
          </h3>
          <p className="text-gray-600 text-sm">
            {screenshots[activeScreen].description}
          </p>
        </div>
      </div>
    </section>
  );
}