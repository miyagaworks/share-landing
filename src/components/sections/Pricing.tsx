// src/components/sections/Pricing.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface PricingFeature {
  title: string;
  included: boolean;
}

interface PricingPlan {
  title: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  price: string;
  period: string;
  discount?: string;
  features: PricingFeature[];
  cta: string;
  popular?: boolean;
  trialDays?: number;
}

export default function Pricing() {
  // 環境に応じてサインアップURLを変更
  const signupUrl =
    process.env.NODE_ENV === "production"
      ? "https://app.sns-share.com/auth/signup"
      : "http://localhost:3000/auth/signup";

  const [isYearly, setIsYearly] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  // 料金プランデータ - 個人向け
  const personalPlans: PricingPlan[] = [
    {
      title: "7日間無料体験",
      badge: "無料トライアル",
      badgeColor: "indigo",
      description: "すべての機能をお試しいただけます",
      price: "¥0",
      period: "7日間限定",
      features: [
        { title: "全ての機能を利用可能", included: true },
        { title: "SNSアカウント無制限追加", included: true },
        { title: "QRコード生成", included: true },
        { title: "プロフィールカスタマイズ", included: true },
        { title: "高解像度QRコード", included: true },
      ],
      cta: "無料で始める",
    },
    {
      title: "スタンダード",
      badge: isYearly ? "年間プラン" : "月額プラン",
      badgeColor: "blue",
      description: "個人利用に最適なプラン",
      price: isYearly ? "¥5,500" : "¥550",
      discount: isYearly ? "2ヶ月分お得" : undefined,
      period: isYearly ? "年額（税込）" : "月額（税込）",
      features: [
        { title: "全ての機能を利用可能", included: true },
        { title: "SNSアカウント無制限追加", included: true },
        { title: "QRコード生成（高解像度）", included: true },
        { title: "プロフィールカスタマイズ", included: true },
        { title: "いつでもキャンセル可能", included: true },
      ],
      cta: "プランを選択",
      popular: true,
      trialDays: 7,
    },
  ];

  // 料金プランデータ - 法人向け（エンタープライズプランを追加）
  const businessPlans: PricingPlan[] = [
    {
      title: "法人スタータープラン",
      badge: "スタータープラン",
      badgeColor: "blue",
      description: "小規模チーム向け",
      price: isYearly ? "¥33,000" : "¥3,300",
      period: isYearly ? "年額（税込）" : "月額（税込）",
      discount: isYearly ? "2ヶ月分お得" : undefined,
      features: [
        { title: "最大10名のユーザー管理", included: true },
        { title: "共通カラーテーマ設定", included: true },
        { title: "会社ロゴ表示", included: true },
        { title: "メールサポート", included: true },
        { title: "管理者ダッシュボード", included: true },
      ],
      cta: "詳細を問い合わせる",
    },
    {
      title: "法人ビジネスプラン",
      badge: "ビジネスプラン",
      badgeColor: "green",
      description: "中規模チーム向け",
      price: isYearly ? "¥66,000" : "¥6,600",
      period: isYearly ? "年額（税込）" : "月額（税込）",
      discount: isYearly ? "2ヶ月分お得" : undefined,
      features: [
        { title: "最大30名のユーザー管理", included: true },
        { title: "部署/チーム分け機能", included: true },
        { title: "高度なユーザー権限設定", included: true },
        { title: "優先サポート（営業時間内）", included: true },
        { title: "分析レポート", included: true },
      ],
      cta: "詳細を問い合わせる",
      popular: true,
    },
    {
      title: "法人エンタープライズプラン",
      badge: "エンタープライズプラン",
      badgeColor: "purple",
      description: "大規模チーム向け",
      price: isYearly ? "¥99,000" : "¥9,900",
      period: isYearly ? "年額（税込）" : "月額（税込）",
      discount: isYearly ? "2ヶ月分お得" : undefined,
      features: [
        { title: "最大50名のユーザー管理", included: true },
        { title: "高度な部署管理機能", included: true },
        { title: "詳細なアクセス権限制御", included: true },
        { title: "24時間サポート", included: true },
        { title: "カスタムブランディング", included: true },
        { title: "API アクセス", included: true },
      ],
      cta: "詳細を問い合わせる",
    },
  ];

  // スクロール位置によるアニメーション効果
  useEffect(() => {
    const handleScroll = () => {
      const pricingCards = document.querySelectorAll(".pricing-card");

      pricingCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight * 0.85 && rect.bottom > 0;

        if (isVisible) {
          (card as HTMLElement).style.opacity = "1";
          (card as HTMLElement).style.transform = "translateY(0)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期表示時にも実行

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activePlans = activeTab === "personal" ? personalPlans : businessPlans;

  // デバッグ用ログ（開発時のみ）
  if (typeof window !== "undefined") {
    console.log("activeTab:", activeTab);
    console.log("activePlans length:", activePlans.length);
    console.log(
      "activePlans:",
      activePlans.map((p) => p.title)
    );
  }

  return (
    <section
      id="pricing"
      className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* 装飾要素 */}
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-50 rounded-full opacity-80 transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <div className="inline-block bg-blue-100 rounded-full px-4 py-1 text-primary text-sm font-semibold mb-4">
            料金プラン
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            シンプルな料金体系
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            必要な機能をお手頃価格でご利用いただけます
          </p>
        </div>

        {/* 料金表示切り替えタブ */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-10 space-y-6 md:space-y-0">
          {/* プランタイプ選択 */}
          <div className="bg-primary p-1 rounded-lg inline-flex mb-6 md:mb-0 md:mr-8">
            <button
              onClick={() => setActiveTab("personal")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === "personal"
                  ? "bg-white shadow-sm text-primary"
                  : "text-white hover:text-blue-100"
              }`}
            >
              個人向け
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === "business"
                  ? "bg-white shadow-sm text-primary"
                  : "text-white hover:text-blue-100"
              }`}
            >
              法人向け
            </button>
          </div>

          {/* 請求サイクル切り替え */}
          <div className="flex items-center justify-center space-x-2">
            <span
              className={`text-sm font-medium ${
                !isYearly ? "text-primary" : "text-gray-500"
              }`}
            >
              月払い
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none"
              role="switch"
              aria-checked={isYearly}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isYearly ? "translate-x-5" : "translate-x-0"
                }`}
              ></span>
            </button>
            <span
              className={`text-sm font-medium ${
                isYearly ? "text-primary" : "text-gray-500"
              }`}
            >
              年払い
            </span>
            <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
              2ヶ月分お得
            </span>
          </div>
        </div>

        {/* プランカード */}
        <div
          className={`grid gap-8 mb-16 ${
            activeTab === "personal"
              ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto"
          }`}
        >
          {activePlans.map((plan, index) => (
            <div
              key={`${activeTab}-${index}-${plan.title}`}
              className={`pricing-card bg-white rounded-xl p-6 md:p-8 transition-all duration-500 opacity-0 transform translate-y-8 relative ${
                plan.popular
                  ? "border-2 border-primary shadow-xl"
                  : "border border-gray-200 shadow-lg"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* 人気プランバッジ */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  人気
                </div>
              )}

              {/* バッジ */}
              {plan.badge && (
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4
                  ${
                    plan.badgeColor === "blue"
                      ? "bg-blue-100 text-blue-700"
                      : ""
                  }
                  ${
                    plan.badgeColor === "indigo"
                      ? "bg-indigo-100 text-indigo-700"
                      : ""
                  }
                  ${
                    plan.badgeColor === "green"
                      ? "bg-green-100 text-green-700"
                      : ""
                  }
                  ${
                    plan.badgeColor === "purple"
                      ? "bg-purple-100 text-purple-700"
                      : ""
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              {/* プラン見出し */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <p className="text-gray-600 mt-1">{plan.description}</p>
                </div>
                {plan.popular && (
                  <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-primary">
                    <svg
                      className="h-6 w-6"
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
                  </div>
                )}
              </div>

              {/* 価格表示 */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-end">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2 pb-1">{plan.period}</span>
                </div>
                {plan.discount && (
                  <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded mt-2 inline-block">
                    {plan.discount}
                  </div>
                )}
                {plan.trialDays && (
                  <div className="text-gray-600 mt-2 text-sm">
                    {plan.trialDays}日間の無料トライアル付き
                  </div>
                )}
              </div>

              {/* 機能リスト */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div
                      className={`flex-shrink-0 h-5 w-5 ${
                        feature.included ? "text-green-500" : "text-gray-300"
                      }`}
                    >
                      {feature.included ? (
                        <svg
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
                      ) : (
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`ml-2 ${
                        feature.included ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA ボタン */}
              <Link
                href={
                  plan.cta === "詳細を問い合わせる"
                    ? "/support/contact"
                    : signupUrl
                }
                className={`inline-block w-full py-3 px-6 rounded-md text-center font-medium transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-blue-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    : "border border-gray-300 text-gray-700 hover:text-primary hover:border-primary hover:bg-gray-50"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* 追加オプション（タッチシールのみ） */}
        {activeTab === "business" && (
          <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-200 rounded-lg p-6 mt-8 mb-8 shadow-sm transform transition-all duration-500 hover:shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg
                className="w-5 h-5 text-primary mr-2"
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
              追加オプション
            </h3>
            <div className="flex items-start">
              <span className="text-blue-500 mr-2 font-bold">•</span>
              <div>
                <span className="font-medium">タッチシール:</span>
                <p className="text-sm text-gray-600">550円/枚</p>
              </div>
            </div>
          </div>
        )}

        {/* よくある質問 */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">よくある質問</h3>
            <p className="text-gray-600">料金プランについてのよくある質問</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-lg mb-2">
                支払い方法はどのようなものがありますか？
              </h4>
              <p className="text-gray-600">
                クレジットカード（Visa、Mastercard、American
                Express、JCB）に対応しています。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-lg mb-2">
                途中解約した場合の返金はありますか？
              </h4>
              <p className="text-gray-600">
                月額プランは日割り返金はございません。年間プランは契約開始から30日以内の場合、利用期間分を差し引いた金額を返金いたします。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-lg mb-2">
                無料トライアルから自動で課金されますか？
              </h4>
              <p className="text-gray-600">
                いいえ、自動課金はされません。トライアル終了前にご案内メールをお送りし、継続をご希望の場合はお支払い情報をご登録いただきます。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-lg mb-2">
                プランの変更はいつでも可能ですか？
              </h4>
              <p className="text-gray-600">
                はい、いつでもプランの変更が可能です。アップグレードの場合は即時反映され、ダウングレードは次の更新日から適用されます。
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">まだ迷っていますか？</h3>
          <p className="text-lg text-gray-600 mb-6">
            7日間の無料トライアルで、すべての機能をお試しいただけます
          </p>
          <Link
            href={signupUrl}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-md shadow-lg text-lg font-medium text-white bg-primary hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>無料で始める</span>
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