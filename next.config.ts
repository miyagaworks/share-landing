/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的出力設定を削除
  // output: "export",
  // distDir: "out",

  // 画像の最適化を有効にする（SSR/ISRモードでは必要）
  images: {
    // unoptimized: true,  // この行を削除または false に設定
  },
};

module.exports = nextConfig;