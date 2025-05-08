// src/components/sections/Features.tsx
"use client";

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 rounded-full px-4 py-1 text-primary text-sm font-semibold mb-4">
            特長紹介
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Shareの主な特徴
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            複数のSNSアカウントを一元管理し、簡単に共有できる機能を提供します
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden group feature-card transition-all duration-300">
            <div className="absolute top-0 left-0 h-2 w-full bg-primary transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></div>
            <div className="p-8">
              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg
                  className="w-8 h-8 text-primary group-hover:text-white transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">複数SNSの一元管理</h3>
              <p className="text-gray-600 text-justify">
                LINE、YouTube、X、Instagramなど10種類以上のSNSアカウントを一つのプロフィールページにまとめられます。必要な情報をまとめて効率的に共有できます。
              </p>
            </div>
          </div>

          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden group feature-card transition-all duration-300">
            <div className="absolute top-0 left-0 h-2 w-full bg-primary transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></div>
            <div className="p-8">
              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg
                  className="w-8 h-8 text-primary group-hover:text-white transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">QRコード共有</h3>
              <p className="text-gray-600 text-justify">
                あなたのプロフィールを表示するQRコードをワンクリックで生成。スマホで読み取るだけで、相手はあなたのSNSアカウントにすぐにアクセスできます。
              </p>
            </div>
          </div>

          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden group feature-card transition-all duration-300">
            <div className="absolute top-0 left-0 h-2 w-full bg-primary transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></div>
            <div className="p-8">
              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg
                  className="w-8 h-8 text-primary group-hover:text-white transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">カスタマイズ機能</h3>
              <p className="text-gray-600 text-justify">
                プロフィールのメインカラーを自由に設定でき、あなたの個性を表現できます。プロフィール情報も詳細にカスタマイズ可能です。
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-r from-primary to-blue-600 text-white group feature-card transition-all duration-300">
            <div className="absolute right-0 bottom-0 opacity-10">
              <svg
                className="w-48 h-48"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.5"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <div className="p-8 relative z-10">
              <div className="w-16 h-16 rounded-xl bg-white bg-opacity-20 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                自己紹介文ジェネレーター
              </h3>
              <p className="opacity-90 max-w-lg text-justify">
                簡単な情報入力だけで、AIがあなたに最適な自己紹介文を自動生成。プロフィールをより魅力的に表現できます。趣味や特性を入力するだけで、様々なシーンに合わせた文章が完成します。
              </p>
            </div>
          </div>

          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden group feature-card transition-all duration-300">
            <div className="absolute top-0 left-0 h-2 w-full bg-primary transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></div>
            <div className="p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg
                  className="w-8 h-8 text-primary group-hover:text-white transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">マルチデバイス対応</h3>
                <p className="text-gray-600 text-justify">
                  iOSとAndroid両方に最適化されたモバイルフレンドリーなデザインで、どのデバイスからでも快適に利用できます。
                </p>
                <div className="mt-4 flex space-x-3">
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                    iOS
                  </div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                    Android
                  </div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                    Windows
                  </div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                    Mac
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}