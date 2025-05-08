// src/components/sections/CTA.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CTA() {
  // 環境に応じてサインアップURLを変更
  const signupUrl =
    process.env.NODE_ENV === "production"
      ? "https://app.sns-share.com/auth/signup"
      : "http://localhost:3000/auth/signup";

  // アニメーション用state
  const [isVisible, setIsVisible] = useState(false);

  // スクロール検出とアニメーション
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("cta-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期表示時にも実行

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="cta-section"
      className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      {/* 装飾要素 */}
      {/* <div className="absolute top-0 left-0 w-40 h-40 bg-primary bg-opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary bg-opacity-10 rounded-full transform -translate-y-1/2"></div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`bg-gradient-to-r from-primary to-blue-600 rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative p-8 md:p-12">
            {/* 背景パターン */}
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

            <div className="md:flex md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:max-w-2xl text-center md:text-left relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  あなたのSNS共有を、もっとシンプルに
                </h2>
                <p className="text-blue-100 text-lg md:text-xl mb-6 md:pr-10 text-justify">
                  Shareを使えば、あなたのすべてのSNSアカウントを一つのプロフィールにまとめて、QRコードで簡単に共有できます。今すぐ始めて、コミュニケーションをスムーズに。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link
                    href={signupUrl}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-md text-base font-medium text-primary bg-white hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1"
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
                    href="/support/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white border-opacity-30 rounded-lg text-base font-medium text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                  >
                    <span>お問い合わせ</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* 装飾イラスト */}
              <div className="hidden md:block relative z-10">
                <div className="bg-white bg-opacity-10 rounded-full p-6 transform rotate-6 shadow-inner">
                  <div className="bg-white rounded-2xl shadow-lg p-2 transform -rotate-6">
                    <div className="w-64 h-64 bg-gray-50 rounded-xl relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-12 bg-primary flex items-center justify-center">
                        <div className="text-white text-sm font-medium">
                          Share Profile
                        </div>
                      </div>
                      <div className="pt-16 p-4 flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full mb-3 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
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
                        <div className="text-gray-800 font-bold mb-1">
                          鈴木 一郎
                        </div>
                        <div className="text-gray-500 text-sm mb-4">
                          Webデザイナー
                        </div>
                        <div className="flex justify-center space-x-3 mb-4">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"
                            >
                              <div className="w-4 h-4 bg-primary rounded-sm"></div>
                            </div>
                          ))}
                        </div>
                        <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-16 h-16"
                            viewBox="0 0 100 100"
                            fill="none"
                          >
                            <rect width="100" height="100" fill="white" />
                            <path d="M30 30H70V70H30V30Z" fill="#155dfc" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 信頼のバッジセクション */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-300 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-gray-500 mb-6">安心してご利用いただけます</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center h-24">
              <svg
                className="w-8 h-8 text-primary mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <div className="text-sm font-medium text-gray-800">
                安全なデータ保管
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center h-24">
              <svg
                className="w-8 h-8 text-primary mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
              <div className="text-sm font-medium text-gray-800">
                クラウド同期
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center h-24">
              <svg
                className="w-8 h-8 text-primary mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <div className="text-sm font-medium text-gray-800">
                高速アクセス
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center h-24">
              <svg
                className="w-8 h-8 text-primary mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="text-sm font-medium text-gray-800">
                素早い導入
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}