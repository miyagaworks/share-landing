/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的出力設定を削除
  // output: "export",
  // distDir: "out",

  // 画像の最適化を有効にする（SSR/ISRモードでは必要）
  images: {
    // unoptimized: true,  // この行を削除または false に設定
  },

  async rewrites() {
    return [
      {
        source: '/partner',
        destination: 'https://app.sns-share.com/partner',
      },
      {
        source: '/partner/:path*',
        destination: 'https://app.sns-share.com/partner/:path*',
      },
    ];
  },
};

module.exports = nextConfig;