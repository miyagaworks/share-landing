// app/page.tsx
import type { Metadata, Viewport } from "next";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import UseCases from "@/components/sections/UseCases";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import AppScreenshots from "@/components/sections/AppScreenshots";
import Testimonials from "@/components/sections/Testimonials";
import WebApp from "@/components/sections/WebApp";


export const metadata: Metadata = {
  title: "Share | デジタル名刺サービス | SNSアカウントを一つにまとめて簡単共有",
  description:
    "複数のSNSアカウントを一つのデジタル名刺にまとめて、QRコードで簡単に共有できるサービス。ビジネスでもプライベートでも活用できます。",
  openGraph: {
    title: "Share | デジタル名刺サービス",
    description:
      "複数のSNSアカウントを一つのデジタル名刺にまとめて、QRコードで簡単に共有。ビジネスシーンで差をつけるデジタルツール。",
    type: "website",
    images: [
      {
        url: "/images/icons/ogp.png",
        width: 1200,
        height: 630,
        alt: "Share - デジタル名刺サービス",
      },
    ],
  },
};

// viewportを独立して定義
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/**
 * 運営会社の構造化データ（Organization）
 *
 * 値の取得元: src/app/company/about/page.tsx の「会社概要」テーブルの表示内容。
 * 構造化データの内容は画面に実際に表示されている情報と一致していなければならず、
 * 食い違うと検索エンジンのガイドライン違反になる。
 * company/about ページの表示を変更した場合は、必ずここも合わせて更新すること。
 *
 * 意図的に記載していない項目（表示はあるが schema.org に適切な対応先が無い／情報が古い）:
 * - 資本金（1,000万円）        … 対応するプロパティが無い
 * - 従業員数（15名・2024年4月現在）… 時点付きの値のため numberOfEmployees では正確に表現できない
 * - 事業内容                    … 表示文言を要約・加工せずに載せられないため省略
 */
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sns-share.com/#organization",
  name: "株式会社Senrigan",
  url: "https://sns-share.com",
  logo: "https://sns-share.com/logo.svg",
  // 会社概要テーブルの「社名」からリンクしている法人サイト
  sameAs: ["https://senrigan.systems"],
  foundingDate: "2000-08-10",
  email: "info@sns-share.com",
  telephone: "082-209-0181",
  address: {
    "@type": "PostalAddress",
    postalCode: "731-0137",
    addressRegion: "広島県",
    addressLocality: "広島市安佐南区",
    streetAddress: "山本2-3-35",
    addressCountry: "JP",
  },
  employee: {
    "@type": "Person",
    name: "宮川 清実",
    jobTitle: "代表取締役",
  },
};

/**
 * 料金プラン一覧
 *
 * 取得元: src/components/sections/Pricing.tsx の personalPlans / businessPlans。
 * 「個人向け／法人向け」タブと「月払い／年払い」トグルの操作で、
 * このトップページ上に実際に表示される全プラン・全価格を列挙している。
 *
 * Pricing.tsx の価格・プラン構成を変更した場合は、必ずここも合わせて更新すること。
 * （更新漏れは表示と構造化データの不一致＝ガイドライン違反に直結する）
 */
const pricingOffers = [
  // 個人向け
  { name: "7日間無料体験", price: "0", quantity: 7, unitCode: "DAY" },
  { name: "スタンダード（月額）", price: "550", quantity: 1, unitCode: "MON" },
  { name: "スタンダード（年額）", price: "5500", quantity: 1, unitCode: "ANN" },
  // 法人向け
  {
    name: "法人スタータープラン（月額）",
    price: "3300",
    quantity: 1,
    unitCode: "MON",
  },
  {
    name: "法人スタータープラン（年額）",
    price: "33000",
    quantity: 1,
    unitCode: "ANN",
  },
  {
    name: "法人ビジネスプラン（月額）",
    price: "6600",
    quantity: 1,
    unitCode: "MON",
  },
  {
    name: "法人ビジネスプラン（年額）",
    price: "66000",
    quantity: 1,
    unitCode: "ANN",
  },
  {
    name: "法人エンタープライズプラン（月額）",
    price: "9900",
    quantity: 1,
    unitCode: "MON",
  },
  {
    name: "法人エンタープライズプラン（年額）",
    price: "99000",
    quantity: 1,
    unitCode: "ANN",
  },
];

/**
 * サービスの構造化データ（SoftwareApplication）
 *
 * description は Hero セクション（src/components/sections/Hero.tsx）に表示している本文をそのまま使用。
 * operatingSystem の "Web" は WebApp セクションの
 * 「Shareはブラウザから簡単にアクセスできるWebアプリです」という表示に基づく。
 *
 * 意図的に記載していない項目:
 * - aggregateRating … 画面上に評価値の集計を表示していないため（未表示の値は記載できない）
 */
const softwareApplicationStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Share",
  url: "https://sns-share.com",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Share（シェア）は、複数のSNSアカウントを一つにまとめた次世代の電子名刺サービスです。QRコードで瞬時に共有でき、紙の名刺と併用することもできます。",
  provider: {
    "@type": "Organization",
    "@id": "https://sns-share.com/#organization",
    name: "株式会社Senrigan",
  },
  // 月額／年額のどちらの価格かを取り違えられないよう、
  // 課金単位を referenceQuantity（MON=月 / ANN=年 / DAY=日）で明示する。
  offers: pricingOffers.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    price: plan.price,
    priceCurrency: "JPY",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: plan.price,
      priceCurrency: "JPY",
      referenceQuantity: {
        "@type": "QuantitativeValue",
        value: plan.quantity,
        unitCode: plan.unitCode,
      },
    },
  })),
};

export default function Home() {
  return (
    <main>
      {/* 構造化データを埋め込み */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationStructuredData),
        }}
      />

      <Header />
      <div>
        <Hero />
        <Features />
        <AppScreenshots />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <Pricing />
        <WebApp />
        <FAQ />
        <CTA />
      </div>
    </main>
  );
}