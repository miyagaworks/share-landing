/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // APIルートは使用しないので、画面を表示するパスのみが対象
  distDir: "out",
  // 画像の最適化を無効化（静的サイトでは不要）
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;