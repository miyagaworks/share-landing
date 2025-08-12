// src/components/pages/FreeTrial.tsx
"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";
import Link from "next/link";
import { useState } from "react";

export default function FreeTrial() {
  const breadcrumbItems = useBreadcrumb();
  const [selectedPlan, setSelectedPlan] = useState("standard");

  // プラン情報
  const plans = [
    {
      id: "standard",
      name: "スタンダードプラン",
      price: "月額 ¥550（税込）",
      yearlyPrice: "年額 ¥5,500（税込）",
      yearlyDiscount: "2ヶ月分お得",
      features: [
        "SNSアカウント無制限追加",
        "QRコード生成（高解像度）",
        "プロフィールカスタマイズ",
        "アクセス解析（基本機能）",
        "いつでもキャンセル可能",
      ],
    },
    {
      id: "executive",
      name: "経営者プラン",
      price: "月額 ¥2,000（税込）",
      yearlyPrice: "年額 ¥20,000（税込）",
      yearlyDiscount: "2ヶ月分お得",
      features: [
        "スタンダードプランのすべての機能",
        "プレミアムデザインテンプレート",
        "複数プロフィール管理",
        "高度なアナリティクス",
        "優先サポート",
        "チーム共有機能",
      ],
    },
  ];

  // トライアルの流れ
  const trialSteps = [
    {
      number: 1,
      title: "アカウント登録",
      description:
        "メールアドレスとパスワードで簡単に登録できます。クレジットカード情報は不要です。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />
      ),
    },
    {
      number: 2,
      title: "機能を試す",
      description: "7日間の無料期間中に、すべての機能をお試しいただけます。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
    {
      number: 3,
      title: "継続or解約",
      description:
        "気に入ったら継続し、そうでなければいつでも解約できます。自動更新はありません。",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
    },
  ];

  // よくある質問
  const faqs = [
    {
      question: "7日間の無料トライアルは、どのように開始できますか？",
      answer:
        "「無料で試す」ボタンをクリックし、メールアドレスとパスワードを入力するだけで開始できます。クレジットカード情報は不要です。登録後すぐにすべての機能をお試しいただけます。",
    },
    {
      question: "無料トライアル期間後、自動で課金されますか？",
      answer:
        "いいえ、自動課金はされません。トライアル終了前にご案内メールをお送りし、継続をご希望の場合はお支払い情報をご登録いただきます。ご登録がない場合、自動的に無料トライアルは終了します。",
    },
    {
      question: "無料トライアル中に解約した場合、料金は発生しますか？",
      answer:
        "いいえ、無料トライアル期間内に解約された場合、一切の料金は発生しません。いつでも簡単に解約いただけます。",
    },
    {
      question: "プランの変更はできますか？",
      answer:
        "はい、いつでもプランの変更が可能です。スタンダードプランから経営者プランへのアップグレードは即時反映されます。ダウングレードは次回の更新時から適用されます。",
    },
    {
      question: "支払い方法にはどのようなものがありますか？",
      answer:
        "クレジットカード（Visa、Mastercard、American Express、JCB）による支払いに対応しています。",
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
            <div className="md:w-3/5 mb-8 md:mb-0">
              <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-medium mb-4">
                7日間無料トライアル
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                デジタル名刺を無料で体験
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                クレジットカード登録不要、自動更新なし
              </p>
              <p className="text-blue-50 text-justify mb-8">
                Share（シェア）のデジタル名刺サービスを7日間無料でお試しいただけます。
                SNSアカウントの一元管理、QRコード生成、プロフィールカスタマイズなど、
                すべての機能をご利用いただけます。無料期間中にサービスの価値を実感してください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`https://app.sns-share.com/auth/signup?plan=${selectedPlan}`}
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-primary bg-white hover:bg-gray-50 transition-all"
                >
                  <span>今すぐ無料で試す</span>
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
                <a
                  href="#pricing"
                  className="inline-flex justify-center items-center px-6 py-3 border border-white rounded-md text-base font-medium text-white hover:bg-white/10 transition-all"
                >
                  <span>プランを見る</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="md:w-2/5 md:pl-12">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-12 bg-primary flex items-center justify-center">
                    <p className="text-white text-sm font-medium">
                      無料トライアル特典
                    </p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-2 text-gray-700">
                          すべての機能が7日間無料
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-2 text-gray-700">
                          クレジットカード登録不要
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-2 text-gray-700">自動更新なし</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-2 text-gray-700">
                          いつでもキャンセル可能
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 text-center">
                      <span className="text-sm text-gray-500">
                        今すぐ始めて、ビジネスの可能性を広げよう
                      </span>
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
        {/* 無料トライアルの特徴 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
            無料トライアルの特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {trialSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {step.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 料金プラン */}
        <section id="pricing" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
            料金プラン
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white p-6 rounded-xl transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? "border-2 border-primary shadow-xl"
                    : "border border-gray-200 shadow-md"
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {plan.yearlyPrice}{" "}
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                      {plan.yearlyDiscount}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-gray-700">機能:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-2 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    href={`https://app.sns-share.com/auth/signup?plan=${plan.id}`}
                    className={`inline-block w-full py-3 px-6 rounded-md text-center font-medium transition-all duration-300 ${
                      selectedPlan === plan.id
                        ? "bg-primary text-white hover:bg-blue-700 shadow-md"
                        : "border border-gray-300 text-gray-700 hover:text-primary hover:border-primary hover:bg-gray-50"
                    }`}
                  >
                    7日間無料で試す
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* トライアルで試せる機能 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
            トライアルで試せる主な機能
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
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
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">SNS一元管理</h3>
              <p className="text-gray-600 text-justify">
                LINE、X、Instagram、Facebookなど、複数のSNSアカウントを一つのプロフィールにまとめて管理・共有できます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
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
                    d="M12 4v1m6 11h2m-6-1h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">QRコード生成</h3>
              <p className="text-gray-600 text-justify">
                高解像度のQRコードを生成し、名刺やSNS、プレゼン資料などに掲載できます。スマホ画面に表示するだけでも簡単に共有可能です。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
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
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">
                プロフィールカスタマイズ
              </h3>
              <p className="text-gray-600 text-justify">
                カラーテーマの設定や自己紹介文のカスタマイズなど、あなたのブランドや個性に合わせたプロフィールを作成できます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">アクセス解析</h3>
              <p className="text-gray-600 text-justify">
                プロフィールの閲覧数やQRコードのスキャン回数などの基本的な統計情報を確認できます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">表示モード切替</h3>
              <p className="text-gray-600 text-justify">
                ビジネス用とプライベート用で表示するSNSや情報を切り替えられます。TPOに合わせて最適な情報を共有できます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">自己紹介文生成AI</h3>
              <p className="text-gray-600 text-justify">
                趣味や特性を入力するだけで、AIが最適な自己紹介文を自動生成。様々なシーンに合わせた文章が作成できます。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
            よくある質問
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-lg font-semibold mb-3 text-primary">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-justify">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 shadow-lg">
          <div className="md:flex items-center justify-between gap-8">
            <div className="mb-6 md:mb-0 md:max-w-2xl">
              <h2 className="text-2xl font-bold mb-2">
              今すぐ無料でデジタル名刺を試してみませんか？
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-justify">
                Share（シェア）のデジタル名刺サービスで、ビジネスに新たな価値をもたらしましょう。
                7日間の無料トライアルでは、すべての機能を制限なくお試しいただけます。
                クレジットカード登録不要、自動更新なしなので安心してご利用いただけます。
              </p>
              <Link
                href={`https://app.sns-share.com/auth/signup?plan=${selectedPlan}`}
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent rounded-md shadow-lg text-lg font-medium text-primary bg-white hover:bg-gray-50 transition-all"
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
        </section>

        {/* 関連コンテンツ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
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
              href="/case-studies"
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                活用事例集
              </h3>
              <p className="text-gray-600 text-justify">
                Share（シェア）のデジタル名刺を活用した成功事例。様々なビジネスシーンでの活用法や導入効果を紹介します。
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}