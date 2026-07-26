// src/components/pages/ForExecutives.tsx
"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import Link from "next/link";

export default function ForExecutives() {
  const breadcrumbItems = useBreadcrumb();

  // 活用シーン
  const usageScenarios = [
    {
      title: "取締役会・役員会",
      description:
        "取締役や役員同士で連絡先やSNSアカウントをまとめて共有。会社の意思決定者として、先進的なデジタルツールの活用姿勢を示すことができます。",
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
      title: "投資家ミーティング",
      description:
        "投資家との会合で革新的なイメージをアピール。デジタル戦略に積極的な経営姿勢を示し、信頼感を醸成します。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "業界カンファレンス",
      description:
        "業界リーダーとしての存在感を高めます。登壇者や参加者としてのプロフィールをQRコードで共有し、ネットワーキングを促進。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      title: "メディア対応",
      description:
        "メディアインタビューや取材時に、プロフィールを瞬時に共有。SNSアカウントへの誘導も簡単に行えます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      ),
    },
  ];

  // 経営者に想定される活用場面
  // 実在の顧客事例ではなく、想定される利用場面の紹介として記載している。
  // 企業名・個人名・成果を示す数値や程度表現は掲載しないこと。
  const executiveScenes = [
    {
      title: "初対面のあいさつ",
      description:
        "投資家との会合やビジネスパートナーとの初対面で、プロフィールと複数のSNSアカウントをQRコード一つで共有できます。名刺を切らしている場面でも、その場で連絡先を渡せます。",
    },
    {
      title: "役割に応じた使い分け",
      description:
        "複数の役職を兼任している場合、シーンに合わせて異なるプロフィールを使い分けられます。取締役会では公式のプロフィール、業界イベントではより砕けたプロフィール、といった切り替えができます。",
    },
    {
      title: "海外・社外との連絡先交換",
      description:
        "海外の取引先や社外の関係者と連絡先を交換する場面でも、URLとQRコードでプロフィールを渡せます。相手が使っているSNSに合わせて、連絡手段を選んでもらえます。",
    },
  ];

  return (
    <div className="bg-white">
      {/* パンくずリスト */}
      <div className="bg-white py-2 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* ヒーローセクション */}
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                経営者向けデジタル名刺
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                先見性と革新性を体現する、経営者のためのデジタル名刺
              </p>
              <p className="text-blue-50 text-justify">
                Share（シェア）の経営者向けデジタル名刺は、ビジネスリーダーとしてのあなたのステータスと革新性を両立させるデジタル名刺です。
                重要なビジネスシーンで差をつけ、先進的なリーダーとしての印象を強化します。
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12 flex justify-center">
              <div className="relative">
                <div className="bg-white/10 rounded-xl p-5">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-12 bg-gray-900 flex items-center justify-center">
                      <p className="text-white text-sm font-medium">
                        エグゼクティブプロフィール
                      </p>
                    </div>
                    <div className="p-6 flex flex-col items-center">
                      <div className="w-20 h-20 bg-gray-100 rounded-full mb-4 flex items-center justify-center border-2 border-gray-900">
                        <svg
                          className="w-10 h-10 text-gray-400"
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
                      <p className="font-bold text-gray-800 text-lg">
                        山田 太郎
                      </p>
                      <p className="text-blue-800 font-medium text-sm">
                        代表取締役社長 / CEO
                      </p>
                      <p className="text-xs text-gray-500 mt-1 mb-4">
                        株式会社テクノフューチャー
                      </p>

                      <div className="w-full bg-gray-50 rounded-lg p-3 mb-4">
                        <div className="flex justify-center space-x-3">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"
                            >
                              <div className="w-4 h-4 bg-blue-800 rounded-sm"></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between w-full mb-2">
                        <div className="bg-blue-50 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          Premium
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: EXC-2025
                        </div>
                      </div>

                      <div className="w-full pt-3 border-t border-gray-100 mt-2">
                        <button className="w-full py-2 bg-blue-800 text-white rounded-md text-sm font-medium">
                          プロフィールを見る
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 装飾要素 */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 opacity-20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-200 opacity-30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 活用シーン */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            経営者向けデジタル名刺の活用シーン
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {usageScenarios.map((scenario, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-start"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {scenario.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {scenario.title}
                  </h3>
                  <p className="text-gray-600 text-justify">
                    {scenario.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 経営者に想定される活用場面 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            経営者に想定される活用場面
          </h2>
          <p className="text-gray-600 mb-6 text-justify">
            以下は実在の顧客事例ではなく、経営者・役員の方に想定される利用場面の紹介です。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {executiveScenes.map((scene, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">{scene.title}</h3>
                <p className="text-gray-600 text-justify">
                  {scene.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 shadow-lg">
          <div className="md:flex items-center justify-between gap-8">
            <div className="mb-6 md:mb-0 md:max-w-2xl">
              <h2 className="text-2xl font-bold mb-2">
                経営者としての先進性をアピールしよう
              </h2>
              <p className="text-blue-100 text-justify">
                Share（シェア）の経営者向けデジタル名刺で、ビジネスリーダーとしての革新性とステータスを両立させましょう。
                7日間の無料トライアルで、実際の使い勝手をお試しいただけます。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                href="/free-trial"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-primary bg-white hover:bg-gray-50 transition-all whitespace-nowrap"
              >
                <span>無料で試す</span>
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
                href="/contact?inquiry=executive"
                className="inline-flex justify-center items-center px-6 py-3 border border-white rounded-md text-base font-medium text-white hover:bg-white/10 transition-all whitespace-nowrap"
              >
                <span>詳細を問い合わせる</span>
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

        {/* 関連コンテンツ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            関連コンテンツ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/digital-namecard/about"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                デジタル名刺とは？
              </h3>
              <p className="text-gray-600 text-justify">
                デジタル名刺（電子名刺）の基本概念から活用方法まで。紙の名刺との違いやビジネスでのメリットを詳しく解説します。
              </p>
            </Link>
            <Link
              href="/digital-namecard/how-to-create"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                デジタル名刺の作り方
              </h3>
              <p className="text-gray-600 text-justify">
                ステップバイステップで解説する、Share（シェア）でのデジタル名刺作成方法をご紹介します。
              </p>
            </Link>
            <Link
              href="/digital-namecard/business-benefits"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                ビジネスで差をつける
              </h3>
              <p className="text-gray-600 text-justify">
                デジタル名刺がビジネスシーンで差別化を生み出す方法。先進的なイメージの獲得から効率的な人脈構築まで解説します。
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
