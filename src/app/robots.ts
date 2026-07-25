// src/app/robots.ts

/**
 * robots.txt（Next.js App Router の Metadata File 方式で生成）
 *
 * 【変更前に必読 / AIクローラーは意図的に開放している】
 *
 * AI検索（ChatGPT・Perplexity・Google AI Overviews 等）での可視性を確保するため、
 * AI関連クローラーを含めて全面的に開放している。LLMO 施策の一環であり、
 * 「ブロックし忘れ」ではない。User-agent 別の Disallow を後から追加しないこと。
 *
 * 経緯・根拠:
 * - 以前は Cloudflare の robots.txt 自動生成機能が AI 学習クローラー
 *   （GPTBot / ClaudeBot / CCBot 等）を全ブロックしていたため、自動生成を無効化した。
 *   Cloudflare 側でこの機能を再有効化すると本ファイルの内容は配信されなくなる。
 * - 当サイト（sns-share.com）は宣伝用サイトであり、利用者の個人情報を掲載する
 *   ページは存在しない。プロフィールページは別ドメイン app.sns-share.com 側にあり、
 *   クローラー制限はそちらで対応済み。
 * - よって AI クローラーを個別に列挙する必要はない。`User-agent: *` の
 *   `Allow: /` がそのまま適用される。
 *
 * 参照: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /api/ 配下はクロール対象外。/api/auth/:path* は next.config.ts の
      // rewrites で app.sns-share.com へ転送される認証 API であり、
      // /api/contact も POST 専用のため、クロールさせる意味がない。
      disallow: ["/api/"],
    },
    sitemap: "https://sns-share.com/sitemap.xml",
    host: "https://sns-share.com",
  };
}
