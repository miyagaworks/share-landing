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

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <Hero />
        {/* <Partners /> */}
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