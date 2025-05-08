// src/components/pages/DigitalNamecardOverview.tsx
"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DigitalNamecardOverview() {
  const breadcrumbItems = useBreadcrumb();
  const [activeFeature, setActiveFeature] = useState(0);

  // 主な特徴データ
  const features = [
    {
      title: "複数SNSの一元管理",
      description:
        "LINE、X、Instagram、FacebookなどあなたのSNSアカウントを一つにまとめて管理・共有できます。",
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
      title: "QRコードで瞬時に共有",
      description:
        "生成されたQRコードを名刺に印刷したり、スマホ画面に表示するだけで、あなたのすべての連絡先情報を一度に共有できます。",
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
      title: "プロフィールカスタマイズ",
      description:
        "あなたのブランドに合わせたカラーテーマ設定や自己紹介文のカスタマイズが可能。ビジネス用とプライベート用で表示を切り替えることもできます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      ),
    },
  ];

  // 特徴の自動切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [features.length]);

  // 活用シーンデータ
  const useCases = [
    {
      title: "ビジネスシーン",
      description:
        "名刺の裏面にQRコードを印刷することで、名刺交換がデジタルとアナログを融合した体験へと進化します。相手はあなたのSNSや詳細なプロフィールにアクセスでき、より深い関係構築のきっかけとなります。",
      icon: (
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
      title: "経営者活動",
      description:
        "先進的なデジタルツールを使いこなす革新的な経営者というイメージを構築。取引先や投資家とのミーティングで差別化を図り、あなたのビジネスの先進性をアピールできます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      ),
    },
  ];

  return (
    <div className="bg-white">
      {/* パンくずリスト - ヒーローセクションの外に移動 */}
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
                Share（シェア）のデジタル名刺
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                複数のSNSアカウントを一つに集約、QRコードで瞬時に共有
              </p>
              <p className="text-blue-50 text-justify mb-8">
                Share（シェア）の電子名刺サービスは、あなたのSNSアカウントと連絡先情報を一つのデジタルプロフィールにまとめ、QRコードを通じて簡単に共有できるプラットフォームです。従来の紙の名刺の限界を超え、ビジネスシーンでの第一印象を変革する先進的なツールです。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/free-trial"
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-primary bg-white hover:bg-gray-50 transition-all"
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
                  href="/digital-namecard/about"
                  className="inline-flex justify-center items-center px-6 py-3 border border-white rounded-md text-base font-medium text-white hover:bg-white/10 transition-all"
                >
                  <span>詳しく見る</span>
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
            <div className="md:w-1/2 md:pl-12 flex justify-center">
              <div className="relative w-72 h-72 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* モック画面 */}
                  <div className="w-full h-full relative">
                    <div className="h-12 bg-primary flex items-center justify-center">
                      <p className="text-white text-sm font-medium">
                        デジタル名刺プレビュー
                      </p>
                    </div>
                    <div className="p-4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full mb-2 flex items-center justify-center">
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
                      <p className="font-bold text-gray-800">山田 太郎</p>
                      <p className="text-xs text-gray-500 mb-3">
                        株式会社サンプル CEO
                      </p>
                      <div className="flex space-x-2 mb-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"
                          >
                            <div className="w-3 h-3 bg-primary rounded-sm"></div>
                          </div>
                        ))}
                      </div>
                      <div className="w-20 h-20 bg-gray-100 p-1 rounded">
                        <div className="w-full h-full border-2 border-primary grid grid-cols-4 grid-rows-4">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div
                              key={i}
                              className={
                                i % 2 === 0 ? "bg-primary" : "bg-white"
                              }
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* デジタル名刺の基本情報 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            デジタル名刺（電子名刺）とは
          </h2>
          <div className="bg-gray-50 p-6 rounded-xl">
            <p className="text-gray-700 text-justify mb-4">
              <span className="font-semibold text-primary">
                デジタル名刺（電子名刺）
              </span>
              とは、従来の紙の名刺をデジタル化し、スマートフォンやタブレットなどのデジタルデバイスで表示・共有できるビジネスツールです。単なる連絡先情報だけでなく、SNSアカウント、プロフィール写真、自己紹介文など、より豊富な情報を含めることができます。
            </p>
            <p className="text-gray-700 text-justify">
              Share（シェア）のデジタル名刺サービスは、
              <span className="font-semibold text-primary">
                複数のSNSアカウントを一つのプロフィールにまとめ
              </span>
              、QRコードを通じて簡単に共有することで、ビジネスコミュニケーションをよりスマートにします。紙の名刺に比べて情報の更新も容易で、常に最新の情報を相手に提供できるという大きなメリットがあります。
            </p>
            <div className="mt-6 text-center">
              <Link
                href="/digital-namecard/about"
                className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors"
              >
                デジタル名刺について詳しく見る
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
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

        {/* 主な特徴 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Shareデジタル名刺の主な特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 border ${
                  activeFeature === index
                    ? "border-primary ring-2 ring-primary/20 transform scale-105"
                    : "border-gray-200"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-justify">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 活用シーン */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            デジタル名刺の活用シーン
          </h2>
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 md:flex items-start"
              >
                <div className="md:w-16 w-12 h-12 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {useCase.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-justify">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors"
            >
              活用事例をもっと見る
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
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
        </section>

        {/* 始め方 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            デジタル名刺を始める方法
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3 mt-2">
                無料アカウント登録
              </h3>
              <p className="text-gray-600 text-justify">
                メールアドレスで簡単に登録。7日間の無料トライアルですべての機能をお試しいただけます。
              </p>
            </div>
            <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3 mt-2">
                プロフィール作成
              </h3>
              <p className="text-gray-600 text-justify">
                基本情報とSNSアカウントを入力して、あなた専用のデジタルプロフィールを完成させます。
              </p>
            </div>
            <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3 mt-2">
                QRコードで共有
              </h3>
              <p className="text-gray-600 text-justify">
                生成されたQRコードをスマホで表示するか名刺に印刷して、ビジネスシーンで活用できます。
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/digital-namecard/how-to-create"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow text-base font-medium text-white bg-primary hover:bg-blue-700 transition-colors"
            >
              デジタル名刺の作り方を詳しく見る
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
        </section>

        {/* 関連ページ */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            デジタル名刺に関する情報
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/digital-namecard/about"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">
                デジタル名刺とは？
              </h3>
              <p className="text-gray-600 text-justify">
                デジタル名刺（電子名刺）の基本概念から活用方法まで。紙の名刺との違いやビジネスでのメリットを詳しく解説します。
              </p>
            </Link>
            <Link
              href="/digital-namecard/business-benefits"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">
                ビジネスで差をつける
              </h3>
              <p className="text-gray-600 text-justify">
                デジタル名刺がビジネスシーンで差別化を生み出す方法。先進的なイメージの獲得から効率的な人脈構築まで解説します。
              </p>
            </Link>
            <Link
              href="/digital-namecard/for-executives"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">
                経営者向けデジタル名刺
              </h3>
              <p className="text-gray-600 text-justify">
                経営者・役員向けデジタル名刺の活用方法。先進的なイメージ構築とビジネスコミュニケーションの効率化を実現します。
              </p>
            </Link>
            <Link
              href="/case-studies"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">
                活用事例集
              </h3>
              <p className="text-gray-600 text-justify">
                Share（シェア）のデジタル名刺を活用した成功事例。様々なビジネスシーンでの活用法や導入効果を紹介します。
              </p>
            </Link>
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <section className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 shadow-lg">
            <div className="md:flex items-center justify-between gap-8">
              <div className="mb-6 md:mb-0 md:max-w-3xl">
                <h2 className="text-2xl font-bold mb-2">
                  デジタル名刺を無料で試す
                </h2>
                <p className="text-blue-100 text-justify">
                  Share（シェア）のデジタル名刺サービスを7日間無料でお試しいただけます。クレジットカード登録不要で、すべての機能を体験できます。
                  あなたならではの活用方法で、ビジネスに新たな可能性を広げましょう。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link
                  href="/free-trial"
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-primary bg-white hover:bg-gray-50 transition-all whitespace-nowrap"
                >
                  <span>無料トライアルを始める</span>
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
        </div>
      </div>
    </div>
  );
}