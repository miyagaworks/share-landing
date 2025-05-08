// src/components/sections/WebApp.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";

export default function WebApp() {
  // 環境に応じてサインアップURLを変更
  const signupUrl =
    process.env.NODE_ENV === "production"
      ? "https://app.sns-share.com/auth/signup"
      : "http://localhost:3000/auth/signup";

  // 特徴データ
  const features = [
    {
      id: "quick-start",
      title: "すぐに始められる",
      description:
        "アプリのインストール不要。ブラウザからアクセスするだけで、すぐにプロフィール作成ができます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      id: "multi-device",
      title: "どのデバイスでも利用可能",
      description:
        "スマートフォン、タブレット、PCなど、どのデバイスからでもアクセスできます。デバイスを切り替えても同じプロフィールをシームレスに管理できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
    {
      id: "one-profile",
      title: "すべてのSNSを一つに",
      description:
        "複数のSNSアカウントを一つのプロフィールにまとめて管理。共有も一度の操作でスムーズに行えます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      ),
    },
  ];

  // アニメーション用state
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // スクロール検出とアニメーション
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("webapp-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期表示時にも実行

    // 機能の自動切り替え
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [features.length]);

  return (
    <section
      id="webapp-section"
      className="py-16 bg-white relative overflow-hidden"
    >
      {/* 装飾要素 */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100 transform skew-x-12 translate-x-1/2 md:translate-x-1/4 z-0 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* テキストコンテンツ */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <div className="inline-block bg-blue-100 rounded-full px-4 py-1 text-primary text-sm font-semibold mb-4">
                現代のビジネスツール
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="block mb-2">ビジネスパーソンの</span>
                <span className="block">必携デジタルツール</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 text-justify">
                Shareはブラウザから簡単にアクセスできるWebアプリです。インストール不要で、どのデバイスからでもすぐに利用開始できます。あなたのデジタルプロフィールは、現代のビジネスシーンにおける「身だしなみ」です。
              </p>
            </div>

            {/* 価格情報 */}
            <div className="bg-gradient-to-r bg-blue-50 rounded-xl p-6 mb-8 shadow-sm border border-blue-100">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    一日たったの16円
                  </h3>
                  <p className="text-gray-600 text-sm text-justify">
                    月額たった500円で、いつでもどこでもプロフェッショナルな印象を与えられるツールを手に入れられます。
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <div className="text-gray-700">
                    <span className="font-medium">月額プラン</span>
                    <span className="text-sm ml-2">¥500/月（税込）</span>
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium">年間プラン</span>
                    <span className="text-sm ml-2">¥5,000/年（税込）</span>
                    <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      2ヶ月分お得
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 機能リスト */}
            <div className="space-y-5 mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`flex items-start transition-all duration-500 transform ${
                    activeFeature === index
                      ? "scale-105 bg-white shadow-md rounded-lg p-4"
                      : "scale-100 bg-transparent p-4"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div
                    className={`flex-shrink-0 mt-1 ${
                      activeFeature === index
                        ? "bg-primary text-white"
                        : "bg-blue-100 text-primary"
                    } w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm text-justify">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-lg font-medium text-center mb-2">
                  年間プランでお得に
                </h3>
                <p className="text-center text-gray-600 mb-2">
                  年間一括払いで5,000円
                </p>
                <p className="text-center text-primary font-medium">
                  2ヶ月分無料！支払いを意識せず1年間ご利用いただけます
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  href={signupUrl}
                  className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 border border-transparent rounded-lg shadow-lg text-base font-medium text-white bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:-translate-y-1"
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
              </div>
            </div>
          </div>

          {/* イラスト部分を新しいデザインに変更 */}
          <div
            className={`hidden md:block transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* 新しいプロフィールデザイン */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto rounded-xl bg-gray-100 shadow-2xl overflow-hidden">
                {/* ヘッダー部分 */}
                <div className="bg-primary p-6 text-white text-center">
                  <p className="text-lg font-medium">
                    シンプルにつながる、スマートにシェア。
                  </p>
                </div>

                {/* プロフィール */}
                <div className="p-6 bg-gray-100">
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold mb-1">田中 健治</h2>
                    <p className="text-gray-600 mb-4">Kenji Tanaka</p>
                  </div>

                  {/* SNSアイコン */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    {/* LINE */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-lg p-3 shadow-md mb-2">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 100 100"
                          fill="#06C755"
                        >
                          <path d="M98.54,43.41c0-21.81-21.86-39.55-48.74-39.55S1.06,21.6,1.06,43.41c0,19.55,17.34,35.93,40.76,39.02,1.59.34,3.75,1.05,4.29,2.4.49,1.23.32,3.16.16,4.41,0,0-.57,3.44-.7,4.17-.21,1.23-.98,4.82,4.22,2.63s28.07-16.53,38.3-28.3h0c7.06-7.75,10.45-15.61,10.45-24.34h0ZM32.61,55.07c0,.51-.42.93-.93.93h-13.69c-.51,0-.93-.42-.93-.93h0v-21.27c0-.51.42-.93.93-.93h3.46c.51,0,.93.42.93.93v16.88h9.31c.51,0,.93.42.93.93v3.46h-.01ZM40.85,55.07c0,.51-.42.93-.93.93h-3.46c-.51,0-.93-.42-.93-.93v-21.27c0-.51.42-.93.93-.93h3.46c.51,0,.93.42.93.93v21.27ZM64.38,55.07c0,.51-.42.93-.93.93h-3.44c-.08,0-.17,0-.24-.03h0s-.04,0-.06-.02c0,0-.02,0-.03,0-.02,0-.03,0-.05-.02-.02,0-.03,0-.04-.02,0,0-.02,0-.03,0-.02,0-.04-.02-.06-.04h0c-.09-.06-.17-.14-.24-.23l-9.74-13.16v12.63c0,.51-.42.93-.93.93h-3.46c-.51,0-.93-.42-.93-.93v-21.27c0-.51.42-.93.93-.93h3.61s.04,0,.06,0h.03s.04,0,.06.02c0,0,.02,0,.03,0c.02,0,.04.02.05.02s.02,0,.03,0c.02,0,.03.02.05.03,0,0,.02,0,.03.02.02,0,.03.02.05.03,0,0,.02,0,.03.02.02,0,.03.03.05.04l.02.02.06.06h0s.05.06.07.1l9.73,13.14v-12.63c0-.51.42-.93.93-.93h3.46c.51,0,.93.42.93.93v21.27h0ZM83.26,37.26c0,.51-.42.93-.93.93h-9.31v3.59h9.31c.51,0,.93.42.93.93v3.46c0,.51-.42.93-.93.93h-9.31v3.59h9.31c.51,0,.93.42.93.93v3.46c0,.51-.42.93-.93.93h-13.69c-.51,0-.93-.42-.93-.93h0v-21.25h0v-.02c0-.51.42-.93.93-.93h13.69c.51,0,.93.42.93.93v3.46h0Z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">LINE</span>
                    </div>

                    {/* YouTube */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-lg p-3 shadow-md mb-2">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-full h-full"
                          fill="#FF0000"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">YouTube</span>
                    </div>

                    {/* X */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-lg p-3 shadow-md mb-2">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-full h-full"
                          fill="#000000"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">X</span>
                    </div>

                    {/* Instagram */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-lg p-3 shadow-md mb-2">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-full h-full"
                          fill="none"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                            fill="#E4405F"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="4"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                          />
                          <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Instagram</span>
                    </div>
                  </div>

                  {/* 下部のアイコン */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gray-800 rounded-full p-4 shadow-md mb-2">
                        <svg
                          className="w-full h-full text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">自己紹介</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gray-800 rounded-full p-4 shadow-md mb-2">
                        <svg
                          className="w-full h-full text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">会社HP</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gray-800 rounded-full p-4 shadow-md mb-2">
                        <svg
                          className="w-full h-full text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">メール</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gray-800 rounded-full p-4 shadow-md mb-2">
                        <svg
                          className="w-full h-full text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">電話</span>
                    </div>
                  </div>

                  {/* アクションボタン */}
                  <div className="space-y-4">
                    <button className="w-full py-3 bg-primary text-white rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      電話をかける
                    </button>

                    <button className="w-full py-3 border-2 border-primary text-gray-700 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                      </svg>
                      連絡先に追加
                    </button>
                  </div>

                  {/* フッター */}
                  <div className="mt-6 text-center">
                    <a href="#" className="text-primary text-sm">
                      このサービスを使ってみる
                    </a>
                    <p className="text-gray-500 text-xs mt-4">
                      Powered by Share
                    </p>
                  </div>
                </div>
              </div>

              {/* 装飾要素 */}
              <div className="absolute -left-8 -bottom-8 w-16 h-16 bg-blue-100 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>

        {/* モバイル用イメージ */}
        <div className="block md:hidden mt-10">
          <div className="bg-gray-100 rounded-xl p-4 mx-auto max-w-xs">
            {/* シンプルなモバイルビュー */}
            <div className="bg-primary p-4 text-white text-center rounded-t-lg">
              <p className="text-sm">シンプルにつながる、スマートにシェア。</p>
            </div>

            <div className="bg-gray-100 p-4 text-center">
              <h3 className="text-xl font-bold mb-1">田中 健治</h3>
              <p className="text-sm text-gray-600 mb-4">Kenji Tanaka</p>

              <div className="grid grid-cols-4 gap-2 mb-4">
                {/* LINE - モバイル版 */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-white rounded-lg p-2 shadow-sm mb-1">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      fill="#06C755"
                    >
                      <path d="M98.54,43.41c0-21.81-21.86-39.55-48.74-39.55S1.06,21.6,1.06,43.41c0,19.55,17.34,35.93,40.76,39.02,1.59.34,3.75,1.05,4.29,2.4.49,1.23.32,3.16.16,4.41,0,0-.57,3.44-.7,4.17-.21,1.23-.98,4.82,4.22,2.63s28.07-16.53,38.3-28.3h0c7.06-7.75,10.45-15.61,10.45-24.34h0ZM32.61,55.07c0,.51-.42.93-.93.93h-13.69c-.51,0-.93-.42-.93-.93h0v-21.27c0-.51.42-.93.93-.93h3.46c.51,0,.93.42.93.93v16.88h9.31c.51,0,.93.42.93.93v3.46h-.01ZM40.85,55.07c0,.51-.42.93-.93.93h-3.46c-.51,0-.93-.42-.93-.93v-21.27c0-.51.42-.93.93-.93h3.46c.51,0,.93.42.93.93v21.27ZM64.38,55.07c0,.51-.42.93-.93.93h-3.44c-.08,0-.17,0-.24-.03h0s-.04,0-.06-.02c0,0-.02,0-.03,0-.02,0-.03,0-.05-.02-.02,0-.03,0-.04-.02,0,0-.02,0-.03,0-.02,0-.04-.02-.06-.04h0c-.09-.06-.17-.14-.24-.23l-9.74-13.16v12.63c0,.51-.42.93-.93.93h-3.46c-.51,0-.93-.42-.93-.93v-21.27c0-.51.42-.93.93-.93h3.61s.04,0,.06,0h.03s.04,0,.06.02c0,0,.02,0,.03,0c.02,0,.04.02.05.02s.02,0,.03,0c.02,0,.03.02.05.03,0,0,.02,0,.03.02.02,0,.03.02.05.03,0,0,.02,0,.03.02.02,0,.03.03.05.04l.02.02.06.06h0s.05.06.07.1l9.73,13.14v-12.63c0-.51.42-.93.93-.93h3.46c.51,0,.93.42.93.93v21.27h0ZM83.26,37.26c0,.51-.42.93-.93.93h-9.31v3.59h9.31c.51,0,.93.42.93.93v3.46c0,.51-.42.93-.93.93h-9.31v3.59h9.31c.51,0,.93.42.93.93v3.46c0,.51-.42.93-.93.93h-13.69c-.51,0-.93-.42-.93-.93h0v-21.25h0v-.02c0-.51.42-.93.93-.93h13.69c.51,0,.93.42.93.93v3.46h0Z" />
                    </svg>
                  </div>
                  <span className="text-xs">LINE</span>
                </div>

                {/* YouTube - モバイル版 */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-white rounded-lg p-2 shadow-sm mb-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                      fill="#FF0000"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <span className="text-xs">YouTube</span>
                </div>

                {/* X - モバイル版 */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-white rounded-lg p-2 shadow-sm mb-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                      fill="#000000"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <span className="text-xs">X</span>
                </div>

                {/* Instagram - モバイル版 */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-white rounded-lg p-2 shadow-sm mb-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                      fill="none"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                        fill="#E4405F"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                    </svg>
                  </div>
                  <span className="text-xs">Instagram</span>
                </div>
              </div>

              <button className="w-full py-2 bg-primary text-white rounded-lg text-sm mb-2">
                電話をかける
              </button>
              <button className="w-full py-2 border-2 border-primary text-gray-700 rounded-lg text-sm">
                連絡先に追加
              </button>
            </div>
          </div>
        </div>

        {/* テスティモニアル */}
        <div className="mt-16 max-w-3xl mx-auto text-center px-4">
          <svg
            className="w-10 h-10 mx-auto text-gray-300 mb-3"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-xl text-gray-600 italic mb-6 text-justify">
            「会社のメンバー全員がShareを使うようになってから、連絡先交換がスムーズになり、社内外のコミュニケーションが格段に向上しました。もはや必須のビジネスツールですね。」
          </p>
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <div className="text-left">
              <p className="font-medium">古里 健太</p>
              <p className="text-sm text-gray-500">
                代表取締役 / タイムメイク株式会社
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}