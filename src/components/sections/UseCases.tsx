// src/components/sections/UseCases.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// 各シーンの情報を定義
const useCases = [
  {
    title: "ビジネスシーン",
    description:
      "名刺の裏面にQRコードを印刷することで、名刺交換がデジタルとアナログを融合した体験へと進化します。相手はあなたのSNSや詳細なプロフィールにアクセスでき、より深い関係構築のきっかけとなります。",
    imagePath: "/images/usecase/business-scene.png",
    bgColor: "bg-primary",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "交流会・イベント",
    description:
      "新しい出会いの場で、素早く自分のSNSアカウントを共有。その場でフォローしあうことができ、つながりを即座に形成できます。後からいちいち連絡先を交換する手間が省けます。",
    imagePath: "/images/usecase/event-scene.png",
    bgColor: "bg-white",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  {
    title: "クリエイター活動",
    description:
      "YouTubeやInstagram、Xなど作品を発表しているSNSアカウントを一元的に共有でき、ファン獲得やフォロワー増加につながります。プロフィールURLをコンテンツに記載するだけで効果的な宣伝になります。",
    imagePath: "/images/usecase/creator-scene.png",
    bgColor: "bg-primary",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "日常のSNS共有",
    description:
      "友人や知人に「SNSのアカウント教えて」と言われたとき、一つ一つ教える手間が省けます。Shareプロフィールを共有するだけで完了です。あなたの時間を節約しながら、相手にも便利な体験を提供できます。",
    imagePath: "/images/usecase/daily-scene.png",
    bgColor: "bg-white",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
      />
    ),
  },
];

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 自動スライド設定のuseEffectを修正
  useEffect(() => {
    // activeIndexが変更された場合や、isHoveredがtrueの場合は自動スライドを停止
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % useCases.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [isHovered]);

  // 前のスライドへ
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? useCases.length - 1 : prevIndex - 1
    );
  };

  // 次のスライドへ
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % useCases.length);
  };

  return (
    <section
      id="benefits"
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* 装飾要素 */}
      <div className="absolute left-0 bottom-20 w-64 h-64 bg-blue-50 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 rounded-full px-4 py-1 text-primary text-sm font-semibold mb-4">
            活用シーン
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            様々なシーンで活用できます
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            ビジネスからプライベートまで、あらゆる場面でShareが活躍します
          </p>
        </div>

        {/* PC表示用カルーセル */}
        <div
          className="relative overflow-hidden rounded-xl shadow-lg mb-8 hidden md:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* スライド */}
          <div className="transition-all duration-500 ease-in-out bg-gray-50">
            <div className="grid grid-cols-12 items-center">
              {/* イラストエリア */}
              <div
                className={`col-span-6 flex items-center justify-center ${
                  useCases[activeIndex].bgColor === "bg-primary"
                    ? "bg-gradient-to-r from-primary to-blue-600"
                    : "bg-white"
                } rounded-xl ml-16 mr-4 my-8 p-4 pb-0 shadow-inner`}
              >
                {useCases[activeIndex].imagePath && (
                  <div className="flex justify-center items-end h-64">
                    <Image
                      src={useCases[activeIndex].imagePath}
                      alt={useCases[activeIndex].title}
                      width={860}
                      height={500}
                      style={{
                        objectFit: "contain",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        marginBottom: 0,
                        filter:
                          useCases[activeIndex].bgColor === "bg-primary"
                            ? "drop-shadow(0 4px 3px rgba(0, 0, 0, 0.2))"
                            : "none",
                      }}
                      priority
                      className="transition-all duration-500 ease-in-out transform hover:scale-105"
                    />
                  </div>
                )}
              </div>

              {/* テキストエリア */}
              <div className="col-span-6 py-8 px-8">
                <div className="mb-6 flex items-center">
                  <div
                    className={`w-14 h-14 rounded-xl ${
                      useCases[activeIndex].bgColor === "bg-primary"
                        ? "bg-blue-100"
                        : "bg-blue-100"
                    } flex items-center justify-center mr-4 shadow-md`}
                  >
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {useCases[activeIndex].iconPath}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">
                    {useCases[activeIndex].title}
                  </h3>
                </div>
                <div className="pl-2 border-l-4 border-blue-100">
                  <p className="text-gray-600 text-lg mr-16 text-justify">
                    {useCases[activeIndex].description}
                  </p>
                </div>
                <div className="mt-6 flex">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-primary">
                    シーン {activeIndex + 1}/{useCases.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ナビゲーションボタン */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-primary hover:text-white rounded-full p-3 shadow-lg focus:outline-none z-10 transition-all duration-300"
            aria-label="前のスライド"
          >
            <svg
              className="w-6 h-6"
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
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white hover:bg-primary hover:text-white rounded-full p-3 shadow-lg focus:outline-none z-10 transition-all duration-300"
            aria-label="次のスライド"
          >
            <svg
              className="w-6 h-6"
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

        {/* モバイル表示用カード - コンパクトな表示に修正 */}
        <div className="md:hidden">
          <div className="relative shadow-xl rounded-xl overflow-hidden mb-6">
            <div
              className={`transition-all duration-500 ease-in-out ${
                useCases[activeIndex].bgColor === "bg-primary"
                  ? "bg-gradient-to-r from-primary to-blue-600 text-white"
                  : "bg-white text-gray-800"
              } pt-4 rounded-xl`}
            >
              {/* シーン番号表示 */}
              <div className="absolute top-3 right-3 z-10">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white text-primary shadow-md">
                  {activeIndex + 1}/{useCases.length}
                </span>
              </div>

              {/* イラスト部分 */}
              <div className="relative w-full h-36 mx-auto mb-6">
                {useCases[activeIndex].imagePath && (
                  <Image
                    src={useCases[activeIndex].imagePath}
                    alt={useCases[activeIndex].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: "contain",
                      filter:
                        useCases[activeIndex].bgColor === "bg-primary"
                          ? "drop-shadow(0 4px 3px rgba(0, 0, 0, 0.2))"
                          : "none",
                    }}
                    priority
                  />
                )}
              </div>

              {/* テキスト部分 - 簡潔にして縦スペースを削減 */}
              <div className="p-4 pb-6">
                <div className="flex items-center mb-2">
                  <div
                    className={`w-10 h-10 rounded-lg ${
                      useCases[activeIndex].bgColor === "bg-primary"
                        ? "bg-white bg-opacity-20"
                        : "bg-blue-100"
                    } flex items-center justify-center mr-3 shadow-md`}
                  >
                    <svg
                      className={`w-5 h-5 ${
                        useCases[activeIndex].bgColor === "bg-primary"
                          ? "text-white"
                          : "text-primary"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {useCases[activeIndex].iconPath}
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold">
                    {useCases[activeIndex].title}
                  </h3>
                </div>
                <div
                  className={`${
                    useCases[activeIndex].bgColor === "bg-primary"
                      ? "border-white border-opacity-30"
                      : "border-blue-100"
                  } pl-3 border-l-2 mb-2`}
                >
                  <p
                    className={`${
                      useCases[activeIndex].bgColor === "bg-primary"
                        ? "text-blue-50"
                        : "text-gray-600"
                    } text-sm text-justify`}
                  >
                    {useCases[activeIndex].description.length > 100
                      ? `${useCases[activeIndex].description.substring(
                          0,
                          100
                        )}...`
                      : useCases[activeIndex].description}
                  </p>
                </div>
              </div>

              {/* ナビゲーションボタン */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-md focus:outline-none z-10 transition-all duration-300"
                aria-label="前のスライド"
              >
                <svg
                  className="w-5 h-5 text-primary"
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
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-md focus:outline-none z-10 transition-all duration-300"
                aria-label="次のスライド"
              >
                <svg
                  className="w-5 h-5 text-primary"
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

          {/* ナビゲーションドット（モバイル用） */}
          <div className="flex justify-center space-x-2 mb-4">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsHovered(true);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 transform ${
                  activeIndex === index
                    ? "bg-primary scale-125 shadow-md"
                    : "bg-gray-300"
                }`}
                aria-label={`スライド ${index + 1}を表示`}
              ></button>
            ))}
          </div>

          {/* シーンセレクター - 横スクロール可能なタブ形式に変更 */}
          <div className="mb-4">
            <h3 className="text-base font-medium text-center mb-3">
              シーンを選択
            </h3>
            <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-2">
              {useCases.map((useCase, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsHovered(true);
                  }}
                  className={`flex-shrink-0 flex items-center px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-200"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full ${
                      activeIndex === index
                        ? "bg-white bg-opacity-20"
                        : "bg-blue-100"
                    } flex items-center justify-center mr-2 flex-shrink-0`}
                  >
                    <svg
                      className={`w-3 h-3 ${
                        activeIndex === index ? "text-white" : "text-primary"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {useCase.iconPath}
                    </svg>
                  </div>
                  <span className="whitespace-nowrap text-sm">
                    {useCase.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* スタイル: スクロールバーを非表示にするCSS */}
          <style jsx global>{`
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* PC表示用シーン選択リスト */}
        <div className="hidden md:flex justify-center mt-8 space-x-4">
          {useCases.map((useCase, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsHovered(true);
              }}
              className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center ${
                activeIndex === index
                  ? "bg-primary text-white shadow-md"
                  : "bg-white hover:bg-gray-50 text-gray-700 shadow-sm border border-gray-100"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full ${
                  activeIndex === index
                    ? "bg-white bg-opacity-20"
                    : "bg-blue-100"
                } flex items-center justify-center mr-2`}
              >
                <span
                  className={`text-xs font-medium ${
                    activeIndex === index ? "text-white" : "text-primary"
                  }`}
                >
                  {index + 1}
                </span>
              </div>
              <span className="font-medium">{useCase.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}