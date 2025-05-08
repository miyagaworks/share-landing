import type { NextConfig } from "next";
import type { Configuration as WebpackConfiguration } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify: true, // この行を削除または無効化
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [],
  },
  // i18n: { // App Routerではこのセクションをまるごとコメントアウトまたは削除
  //   locales: ["ja"],
  //   defaultLocale: "ja",
  // },
  async rewrites() {
    return [];
  },
  // 環境変数の公開設定
  env: {
    NEXT_PUBLIC_SITE_URL: "https://sns-share.com",
  },
  // TypeScriptの設定
  typescript: {
    ignoreBuildErrors: false,
  },
  // Webpackの設定
  webpack: (config: WebpackConfiguration) => {
    // SVGをReactコンポーネントとしてインポートできるようにする
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    }

    return config;
  },
  // ページのビルド時静的生成の設定
  staticPageGenerationTimeout: 120,
  // 実験的機能
  experimental: {
    // serverActionsの型を修正
    serverActions: {
      // 空のオブジェクトを指定することで型エラーを解消
      bodySizeLimit: "2mb",
      allowedOrigins: ["localhost:3000", "sns-share.com"],
    },
  },
};

export default nextConfig;