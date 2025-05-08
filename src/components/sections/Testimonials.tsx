// src/components/sections/Testimonials.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  title: string;
  age: number;
  content: string;
  rating: number;
  avatar: string;
  company?: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // テスティモニアルデータ
  const testimonials: Testimonial[] = [
    {
      name: "中村 拓也",
      title: "IT企業マーケティング部門マネージャー",
      age: 35,
      content:
        "週に3回以上の名刺交換があるので、SNSアカウントを一つひとつ教えるのが面倒でした。Shareを使い始めてからは、QRコードを見せるだけで全てのSNSを共有できるようになり、フォロワーも増えました。マーケティングイベントでは必ず活用しています。年間プランに加入して、いつでも使える安心感があるのも良いです。",
      rating: 5,
      avatar: "/images/testimonials/user-1.webp",
    },
    {
      name: "佐藤 美咲",
      title: "フリーランスWebデザイナー",
      age: 28,
      content:
        "作品のポートフォリオをSNSに分散して公開していましたが、Shareのおかげで1つのプロフィールにまとめることができました。プロフィールカスタマイズ機能で自分のブランドに合わせたデザインを作れるのも気に入っています。クライアントへのプレゼン時に共有すると、プロ意識が伝わると好評です。",
      rating: 5,
      avatar: "/images/testimonials/user-2.webp",
    },
    {
      name: "鈴木 健一",
      title: "中堅メーカーIT統括部長",
      age: 45,
      content:
        "営業部門50名に法人プランを導入しました。社員のSNSアカウントも会社として一元管理できるようになりました。特に若手社員からの評判が良く、お客様とのコミュニケーションも活性化しています。ビジネスプランのコスト効率は非常に優れていると思います。",
      rating: 4,
      avatar: "/images/testimonials/user-3.webp",
    },
    {
      name: "山本 千尋",
      title: "インフルエンサー / コンテンツクリエイター",
      age: 26,
      content:
        "様々なSNSを運用していますが、プロフィールリンクを1つにまとめられるShareは本当に便利です。特にQRコードをイベントで表示すると、その場でフォロワーが増えるのが実感できます。見た目もおしゃれなので、自分のブランディングにもピッタリです。",
      rating: 5,
      avatar: "/images/testimonials/user-4.webp",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // 自動スライド設定
  useEffect(() => {
    if (isHovered) return; // ホバー時は自動スライドを停止

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // 5秒ごとに次のスライドへ

    return () => {
      clearInterval(interval);
    };
  }, [isHovered, testimonials.length]);

  // 評価星の生成関数
  const renderStars = (rating: number) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      {/* 装飾要素 */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 rounded-full px-4 py-1 text-primary text-sm font-semibold mb-4">
            お客様の声
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            実際の利用者からのフィードバック
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Shareをご利用いただいている方々からの声をご紹介します
          </p>
        </div>

        {/* PC表示用カルーセル */}
        <div
          className="hidden md:block relative rounded-2xl shadow-xl overflow-hidden bg-white mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-3 min-h-[400px]">
            {/* テスティモニアルコンテンツ */}
            <div className="col-span-2 p-10 transition-all duration-500 ease-in-out flex flex-col justify-center">
              <div className="flex items-center mb-6">
                <div className="mr-6">
                  <div
                    className="rounded-full overflow-hidden relative shadow-md border-2 border-white"
                    style={{
                      width: "64px",
                      height: "64px",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[activeIndex].title} /{" "}
                    {testimonials[activeIndex].age}歳
                  </p>
                  <div className="mt-2">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                </div>
              </div>

              <div className="relative">
                <svg
                  className="absolute -top-4 -left-4 w-10 h-10 text-primary opacity-20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-lg text-gray-600 italic">
                    {testimonials[activeIndex].content}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center">
                <span className="text-primary font-medium mr-2">Share</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-600">
                  利用プラン: {activeIndex === 2 ? "法人プラン" : "年間プラン"}
                </span>
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
                          ? "法人導入で効率化"
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
                aria-label="前のテスティモニアル"
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
                aria-label="次のテスティモニアル"
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
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-primary w-8" : "bg-gray-300"
                  }`}
                  aria-label={`テスティモニアル ${index + 1}を表示`}
                ></button>
              ))}
            </div>
          </div>

          {/* モバイル表示用カード */}
          <div className="md:hidden">
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div className="relative bg-gradient-to-r from-primary to-blue-600 h-3 w-full"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div
                      className="rounded-full overflow-hidden relative shadow-md border-2 border-white"
                      style={{
                        width: "64px",
                        height: "64px",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {testimonials[activeIndex].title} /{" "}
                      {testimonials[activeIndex].age}歳
                    </p>
                    <div className="mt-1.5">
                      {renderStars(testimonials[activeIndex].rating)}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <svg
                    className="absolute -top-3 -left-2 w-8 h-8 text-primary opacity-20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div className="border-l-4 border-primary pl-4 py-1">
                    <p className="text-gray-600 text-sm text-justify">
                      {testimonials[activeIndex].content}
                    </p>
                  </div>
                </div>
              </div>

              {/* モバイル用ナビゲーションボタン */}
              <div className="flex justify-between px-4 py-3 bg-gray-50 border-t border-gray-100">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 focus:outline-none"
                  aria-label="前のテスティモニアル"
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
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeIndex === index ? "bg-primary" : "bg-gray-300"
                      }`}
                      aria-label={`テスティモニアル ${index + 1}を表示`}
                    ></button>
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 focus:outline-none"
                  aria-label="次のテスティモニアル"
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

          {/* 統計情報 */}
          <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-blue-50 to-transparent opacity-70"></div>

            <div className="text-center mb-8 relative z-10">
              <h3 className="text-2xl font-bold mb-2">
                多くの方々に指示されています
              </h3>
              <p className="text-gray-600">
                実際の利用データからわかる、Shareのご利用状況
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-primary mr-2">
                    3,500+
                  </span>
                  <span className="text-gray-500">ユーザー</span>
                </div>
                <p className="text-gray-600 text-sm text-justify">
                  様々な業界のプロフェッショナルに利用されています
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-primary mr-2">
                    15,000+
                  </span>
                  <span className="text-gray-500">共有回数</span>
                </div>
                <p className="text-gray-600 text-sm text-justify">
                  月間のShareプロフィール共有回数と成長を続けています
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-primary mr-2">
                    4.8
                  </span>
                  <span className="text-gray-500">平均評価</span>
                </div>
                <div className="flex mb-2">{renderStars(5)}</div>
                <p className="text-gray-600 text-sm text-justify">
                  実際のユーザーからの高い評価を獲得しています
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}