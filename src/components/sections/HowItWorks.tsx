// src/components/sections/HowItWorks.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function HowItWorks() {
  // 環境に応じてサインアップURLを変更
  const signupUrl =
    process.env.NODE_ENV === "production"
      ? "https://app.sns-share.com/auth/signup"
      : "http://localhost:3000/auth/signup";

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: "アカウント登録",
      description:
        "メールアドレスで簡単に登録。7日間の無料トライアルで機能をお試しいただけます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />
      ),
      bgColor: "from-blue-500 to-blue-600",
    },
    {
      number: 2,
      title: "SNSアカウントを追加",
      description:
        "各SNSのリンクを追加し、あなたのプロフィールを作成します。10種類以上のSNSに対応。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      ),
      bgColor: "from-indigo-500 to-indigo-600",
    },
    {
      number: 3,
      title: "QRコードで共有",
      description:
        "生成されたQRコードを表示するだけで、あなたのすべてのSNSを一度に共有できます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 4v1m6 11h2m-6-1h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
        />
      ),
      bgColor: "from-primary to-blue-600",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-b bg-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 rounded-full px-4 py-1 text-primary text-sm font-semibold mb-4">
            使い方
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            簡単3ステップで始められます
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Shareはすぐに使い始められるシンプルなサービスです
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div
                className={`
                  bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300
                  ${hoveredStep === index ? "transform -translate-y-2" : ""}
                  border border-gray-100
                `}
              >
                {/* カード上部のアクセントバー */}
                <div className={`h-2 w-full bg-primary`}></div>

                <div className="p-8">
                  {/* ステップ番号とアイコン */}
                  <div className="flex mb-6 items-center">
                    <div
                      className={`
                        w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold
                        bg-primary shadow-md flex-shrink-0 mr-4
                      `}
                    >
                      {step.number}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {step.icon}
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-6 text-justify">{step.description}</p>

                  {/* ステップのイラスト部分 */}
                  <div className="mt-6 py-4 px-6 bg-gray-50 rounded-lg border border-gray-100">
                    {index === 0 && (
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <svg
                            className="w-4 h-4 text-primary"
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
                        <div className="bg-white border border-gray-200 rounded px-3 py-1 text-sm">
                          メールアドレスで登録
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="flex flex-wrap justify-center gap-2">
                        {["LINE", "X", "Instagram"].map((sns, i) => (
                          <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs flex items-center"
                          >
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                            {sns}
                          </div>
                        ))}
                      </div>
                    )}

                    {index === 2 && (
                      <div className="flex justify-center">
                        <div className="w-16 h-16 border-2 border-gray-200 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M12 4v1m6 11h2m-6-1h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* モバイル表示用のステップコネクター */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-4 mb-0">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={signupUrl}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-lg shadow-lg text-base font-medium text-white bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:-translate-y-1"
          >
            今すぐ始める
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
    </section>
  );
}