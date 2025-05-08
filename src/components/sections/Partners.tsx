// src/components/sections/Partners.tsx
"use client";

import { useState, useEffect } from "react";

export default function Partners() {
  // アニメーション用state
  const [isVisible, setIsVisible] = useState(false);
  const [activePartner, setActivePartner] = useState<string | null>(null);

  // パートナー企業データ
  const partners = [
    {
      id: "partner1",
      name: "テクノコーポレーション",
      logo: (
        <svg
          className="h-8 text-gray-400 hover:text-primary transition-colors duration-300"
          viewBox="0 0 100 30"
          fill="currentColor"
        >
          <rect x="0" y="10" width="60" height="10" rx="5" />
          <circle cx="80" cy="15" r="10" />
        </svg>
      ),
    },
    {
      id: "partner2",
      name: "グローバルイノベーション",
      logo: (
        <svg
          className="h-8 text-gray-400 hover:text-primary transition-colors duration-300"
          viewBox="0 0 100 30"
          fill="currentColor"
        >
          <path d="M10,10 L50,10 L50,20 L10,20 Z" />
          <path d="M60,5 L90,5 L90,25 L60,25 Z" />
        </svg>
      ),
    },
    {
      id: "partner3",
      name: "フューチャーデザイン",
      logo: (
        <svg
          className="h-8 text-gray-400 hover:text-primary transition-colors duration-300"
          viewBox="0 0 100 30"
          fill="currentColor"
        >
          <circle cx="20" cy="15" r="10" />
          <rect x="40" y="5" width="50" height="20" rx="10" />
        </svg>
      ),
    },
    {
      id: "partner4",
      name: "スマートコネクト",
      logo: (
        <svg
          className="h-8 text-gray-400 hover:text-primary transition-colors duration-300"
          viewBox="0 0 100 30"
          fill="currentColor"
        >
          <polygon points="10,5 30,5 40,15 30,25 10,25 0,15" />
          <rect x="50" y="5" width="40" height="20" />
        </svg>
      ),
    },
    {
      id: "partner5",
      name: "クリエイティブソリューションズ",
      logo: (
        <svg
          className="h-8 text-gray-400 hover:text-primary transition-colors duration-300"
          viewBox="0 0 100 30"
          fill="currentColor"
        >
          <path d="M10,5 C5,5 5,25 10,25 L40,25 C45,25 45,5 40,5 Z" />
          <path d="M60,15 m-10,0 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0" />
          <rect x="85" y="5" width="5" height="20" />
        </svg>
      ),
    },
    {
      id: "partner6",
      name: "ネクストジェネレーション",
      logo: (
        <svg
          className="h-8 text-gray-400 hover:text-primary transition-colors duration-300"
          viewBox="0 0 100 30"
          fill="currentColor"
        >
          <path d="M0,15 L30,5 L60,15 L30,25 Z" />
          <circle cx="80" cy="15" r="10" />
        </svg>
      ),
    },
    {
      id: "partner7",
      name: "デジタルエクスペリエンス",
      logo: (
        <svg
          className="h-8 text-gray-400 hover:text-primary transition-colors duration-300"
          viewBox="0 0 100 30"
          fill="currentColor"
        >
          <rect x="10" y="5" width="30" height="20" rx="10" />
          <path d="M50,5 L90,5 L90,25 L70,25 L60,15 L70,5 Z" />
        </svg>
      ),
    },
    {
      id: "partner8",
      name: "ビジョンテクノロジー",
      logo: (
        <svg
          className="h-8 text-gray-400 hover:text-primary transition-colors duration-300"
          viewBox="0 0 100 30"
          fill="currentColor"
        >
          <circle cx="15" cy="15" r="10" />
          <circle cx="50" cy="15" r="10" />
          <circle cx="85" cy="15" r="10" />
        </svg>
      ),
    },
  ];

  // スクロール検出とアニメーション
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("partners-section");
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
      id="partners-section"
      className="py-16 bg-white relative overflow-hidden"
    >
      {/* 装飾要素 */}
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-blue-50 rounded-full opacity-50 transform translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <p
            className={`text-gray-500 mb-4 transition-all duration-700 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            多くの企業や個人に選ばれています
          </p>
          <h2
            className={`text-2xl md:text-3xl font-bold mb-6 transition-all duration-700 delay-100 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            信頼のパートナー
          </h2>
          <div
            className={`w-20 h-1 bg-primary mx-auto rounded-full mb-8 transition-all duration-700 delay-200 transform ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          ></div>
        </div>

        {/* PC表示用グリッド */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8 justify-items-center">
            {partners.slice(0, 8).map((partner, index) => (
              <div
                key={partner.id}
                className={`flex items-center justify-center p-4 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-500 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActivePartner(partner.id)}
                onMouseLeave={() => setActivePartner(null)}
              >
                {partner.logo}
                {activePartner === partner.id && (
                  <div className="absolute bottom-0 left-0 right-0 bg-blue-50 py-1 text-xs text-primary font-medium text-center rounded-b-lg">
                    {partner.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* モバイル表示用カルーセル */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-6 justify-items-center">
            {partners.slice(0, 4).map((partner, index) => (
              <div
                key={partner.id}
                className={`flex items-center justify-center p-4 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-500 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {partner.logo}
              </div>
            ))}
          </div>
        </div>

        {/* パートナー数とお問い合わせリンク */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-600 mb-4">
            <span className="text-primary font-bold text-xl">200社</span>
            <span className="mx-2">以上の企業様にご利用いただいています</span>
          </p>
          <div className="inline-flex rounded-md shadow">
            <a
              href="/company/partners"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 transition-colors duration-300"
            >
              パートナー企業一覧
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* 信頼性指標 */}
        <div
          className={`mt-16 grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">3,500+</h3>
            <p className="text-gray-600">ユーザー数</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">2020年</h3>
            <p className="text-gray-600">サービス開始</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">99.9%</h3>
            <p className="text-gray-600">信頼性</p>
          </div>
        </div>
      </div>
    </section>
  );
}