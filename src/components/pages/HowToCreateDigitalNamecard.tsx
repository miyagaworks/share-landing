// src/components/pages/HowToCreateDigitalNamecard.tsx
"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HowToCreateDigitalNamecard() {
  const breadcrumbItems = useBreadcrumb();
  const [activeStep, setActiveStep] = useState(1);

  // 作成ステップの詳細データ
  const steps = [
    {
      number: 1,
      title: "アカウント登録",
      description: "メールアドレスで簡単に無料アカウントを作成します。",
      details: [
        "お名前を入力",
        "メールアドレスを入力",
        "パスワードを設定",
        "利用規約に同意して登録完了",
      ],
      image: "/images/howto/create-step1.webp", // 実際の画像パスに置き換え
      tip: "Googleアカウントやメールアドレスでの登録が可能です。7日間の無料トライアルですべての機能をお試しいただけます。",
    },
    {
      number: 2,
      title: "基本情報の入力",
      description: "名前、肩書き、会社名などの基本情報を入力します。",
      details: [
        "プロフィール写真をアップロード（任意）",
        "氏名（漢字とローマ字）を入力",
        "電話番号を設定",
        "会社名や会社ホームページを入力",
      ],
      image: "/images/howto/create-step2.webp", // 実際の画像パスに置き換え
      tip: "プロフィール写真は正方形の画像が最適です。ビジネス用のプロフェッショナルな写真を使用することをおすすめします。",
    },
    {
      number: 3,
      title: "自己紹介文作成",
      description: "あなたのプロフィールを引き立てる自己紹介文を作成します。",
      details: [
        "自己紹介文を自由に入力",
        "AIによる自己紹介文生成機能を利用（任意）",
        "趣味や専門分野などを追加",
      ],
      image: "/images/howto/create-step3.webp", // 実際の画像パスに置き換え
      tip: "AI自己紹介文ジェネレーターを使えば、簡単な質問に答えるだけで最適な自己紹介文を作成できます。あなたの強みや専門性をアピールする内容にしましょう。",
    },
    {
      number: 4,
      title: "SNSの追加",
      description: "連携したいSNSアカウントのURLやユーザー名を追加します。",
      details: [
        "追加したいSNSプラットフォームを選択",
        "アカウントのURLまたはユーザー名を入力",
        "表示の優先順位を設定（ドラッグ＆ドロップで並べ替え）",
        "必要に応じて追加のSNSを登録",
      ],
      image: "/images/howto/create-step4.webp", // 実際の画像パスに置き換え
      tip: "ビジネスでよく使うSNSを上位に配置すると効果的です。LINEやX、Instagramなどビジネスコミュニケーションで使用頻度の高いものを優先しましょう。",
    },
    {
      number: 5,
      title: "デザイン設定",
      description: "プロフィールのカラーテーマをカスタマイズします。",
      details: [
        "メインカラーを選択（企業のブランドカラーに合わせるのもおすすめ）",
        "アイコンのモノクロ・カラーを選択可能",
      ],
      image: "/images/howto/create-step5.webp", // 実際の画像パスに置き換え
      tip: "企業のブランドカラーに合わせたデザインにすることで、統一感のあるビジネスイメージを演出できます。所属組織がある場合は、組織のガイドラインに沿ったデザインを検討しましょう。",
    },
    {
      number: 6,
      title: "QRコード生成",
      description: "完成したプロフィールを共有するためのQRコードを生成します。",
      details: [
        "公開プロフィールのリンクURLを共有",
        "QRコードのカラーを選択",
        "ダウンロード形式を選択（PNG, SVG）",
        "高解像度QRコードをダウンロード",
      ],
      image: "/images/howto/create-step6.webp", // 実際の画像パスに置き換え
      tip: "SVG形式でダウンロードすると、サイズを変更しても品質が劣化しません。名刺に印刷する場合は特に高解像度のものをご利用ください。",
    },
  ];

  // 利用シーン別の活用ヒント
  const usageTips = [
    {
      title: "名刺へのQRコード印刷",
      description:
        "紙の名刺にQRコードを印刷することで、アナログとデジタルのメリットを両立。スキャンするだけで詳細なプロフィールにアクセスできます。",
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
      title: "メール署名への追加",
      description:
        "ビジネスメールの署名にQRコードやShareプロフィールへのリンクを追加することで、メールのやり取りからすぐにSNSでつながることができます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "展示会・イベントでの活用",
      description:
        "スマホでQRコードを表示するだけで、その場で複数人と情報交換が可能。名刺切れの心配もなく、効率的なネットワーキングができます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
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
                デジタル名刺の作り方
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                たった6ステップで完成！簡単デジタル名刺作成ガイド
              </p>
              <p className="text-blue-50 text-justify">
                Share（シェア）のデジタル名刺は、誰でも簡単に数分で作成できます。
                このページでは、アカウント登録からQRコード生成まで、デジタル名刺作成の手順を
                ステップバイステップで解説します。ビジネスシーンで差をつける、あなただけの
                デジタル名刺を今すぐ作成しましょう。
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12 flex justify-center">
              <div className="relative w-72 h-72 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* モック画面 */}
                  <div className="w-full h-full relative">
                    <div className="h-12 bg-blue-900 flex items-center justify-center">
                      <p className="text-white text-sm font-medium">
                        デジタル名刺作成
                      </p>
                    </div>
                    <div className="p-4 flex flex-col items-center">
                      <div className="flex space-x-2 mb-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div
                            key={i}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              i <= 3
                                ? "bg-green-100 text-green-600"
                                : "bg-gray-100 text-gray-400"
                            } font-medium`}
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                      <div className="w-full bg-gray-100 rounded-lg p-3 mb-3">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full mr-2 flex items-center justify-center">
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
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                              />
                            </svg>
                          </div>
                          <p className="text-sm font-medium text-gray-700">
                            SNSを追加
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          {["LINE", "X", "Instagram", "Facebook"].map(
                            (sns, i) => (
                              <div
                                key={i}
                                className="px-2 py-1 bg-white rounded-full text-xs text-gray-600"
                              >
                                {sns}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <button className="w-full py-2 bg-primary text-white rounded-md text-sm font-medium">
                        次へ進む
                      </button>
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
        {/* 作成ステップの概要 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            デジタル名刺作成の6ステップ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step) => (
              <button
                key={step.number}
                className={`p-4 rounded-lg transition-all duration-300 text-left ${
                  activeStep === step.number
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white border border-gray-200 hover:border-primary hover:shadow-md"
                }`}
                onClick={() => setActiveStep(step.number)}
              >
                <div className="flex items-start">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-3 flex-shrink-0 ${
                      activeStep === step.number
                        ? "bg-white text-primary"
                        : "bg-primary text-white"
                    }`}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p
                      className={`text-sm ${
                        activeStep === step.number
                          ? "text-blue-50"
                          : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* 選択したステップの詳細 */}
        <section className="mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="md:flex items-start">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mr-4">
                    {steps[activeStep - 1].number}
                  </div>
                  <h3 className="text-2xl font-bold">
                    {steps[activeStep - 1].title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-6 text-justify">
                  {steps[activeStep - 1].description}
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800">手順:</h4>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    {steps[activeStep - 1].details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ol>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold mb-2 text-primary">
                    ワンポイントアドバイス
                  </h4>
                  <p className="text-gray-700 text-justify">
                    {steps[activeStep - 1].tip}
                  </p>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                  <div className="bg-gray-900 p-2 rounded-lg shadow-md">
                    <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
                      <Image
                        src={steps[activeStep - 1].image}
                        alt={`ステップ${steps[activeStep - 1].number}: ${
                          steps[activeStep - 1].title
                        }`}
                        width={170} // 適切なサイズに調整
                        height={256} // h-64に合わせて
                        className="object-contain"
                      />
                    </div>
                    <p className="text-center mt-2 text-sm text-white">
                      ステップ{steps[activeStep - 1].number}:{" "}
                      {steps[activeStep - 1].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ステップナビゲーション */}
            <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
              <button
                onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                className={`flex items-center text-primary hover:text-blue-700 transition-colors ${
                  activeStep === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={activeStep === 1}
              >
                <svg
                  className="w-5 h-5 mr-1"
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
                前のステップ
              </button>
              <div className="flex space-x-1">
                {steps.map((step) => (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(step.number)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeStep === step.number
                        ? "bg-primary scale-125"
                        : "bg-gray-300"
                    }`}
                    aria-label={`ステップ ${step.number} に移動`}
                  ></button>
                ))}
              </div>
              <button
                onClick={() =>
                  setActiveStep(Math.min(steps.length, activeStep + 1))
                }
                className={`flex items-center text-primary hover:text-blue-700 transition-colors ${
                  activeStep === steps.length
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={activeStep === steps.length}
              >
                次のステップ
                <svg
                  className="w-5 h-5 ml-1"
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
        </section>

        {/* 活用ヒント */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            デジタル名刺活用のヒント
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {usageTips.map((tip, index) => (
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
                    {tip.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">{tip.title}</h3>
                <p className="text-gray-600 text-justify">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* よくある質問 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            デジタル名刺作成についてよくある質問
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-primary">
                デジタル名刺の作成に費用はかかりますか？
              </h3>
              <p className="text-gray-600 text-justify">
                Share（シェア）では7日間の無料トライアルをご用意しています。無料期間中にデジタル名刺を作成し、すべての機能をお試しいただけます。その後は、月額500円（税込）または年額5,000円（税込）の有料プランにお申し込みいただくことで、継続してご利用いただけます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-primary">
                デジタル名刺の作成にどれくらい時間がかかりますか？
              </h3>
              <p className="text-gray-600 text-justify">
                基本情報とSNSアカウントの入力だけなら約5分程度で作成できます。プロフィール写真のアップロードや自己紹介文の作成、デザインのカスタマイズなどを含めても、15分程度で完成させることができます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-primary">
                追加できるSNSアカウントに制限はありますか？
              </h3>
              <p className="text-gray-600 text-justify">
                Share（シェア）では制限なく複数のSNSアカウントを追加できます。LINE、X、Instagram、Facebook、TikTok、YouTubeなど主要なSNSに対応しています。また、カスタムリンクも追加可能ですので、その他のサービスやウェブサイトも登録できます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-primary">
                一度作成したデジタル名刺は後から編集できますか？
              </h3>
              <p className="text-gray-600 text-justify">
                はい、いつでも編集可能です。プロフィール情報の更新、SNSアカウントの追加・削除、デザインの変更など、必要に応じて自由にカスタマイズできます。情報が変わった際も、QRコード自体を変更する必要はありません。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 shadow-lg">
          <div className="md:flex items-center justify-between gap-8">
            <div className="mb-6 md:mb-0 md:max-w-2xl">
              <h2 className="text-2xl font-bold mb-2">
                今すぐデジタル名刺を作成しよう
              </h2>
              <p className="text-blue-100 max-w-2xl text-justify">
                Share（シェア）のデジタル名刺で、ビジネスシーンでの第一印象に差をつけましょう。
                7日間の無料トライアルで、すべての機能をお試しいただけます。
                複数のSNSを一つにまとめて、QRコードで瞬時に共有できる便利なツールを今すぐ体験してください。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-trial"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-primary bg-white hover:bg-gray-50 transition-all"
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
        </section>

        {/* 関連記事 */}
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
            <Link
              href="/digital-namecard/for-executives"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                経営者向けデジタル名刺
              </h3>
              <p className="text-gray-600 text-justify">
                経営者・役員向けデジタル名刺の活用方法。先進的なイメージ構築とビジネスコミュニケーションの効率化を実現します。
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}