// src/app/sitemap.ts

/**
 * sitemap.xml（Next.js App Router の Metadata File 方式で生成）
 *
 * 【ページを追加したらこのファイルにも追記すること】
 *
 * URL は自動収集されない。src/app 配下に page.tsx を新規作成しても、
 * 下記 PAGES に追記しない限りサイトマップには載らない。
 *
 * 経緯:
 * - 以前は public/sitemap.xml を手書きで配信していたが、実在しない URL の混入・
 *   末尾スラッシュによる 308 転送・更新日の陳腐化・ページの登録漏れが積み上がったため、
 *   本ファイル方式へ移行した。public 配下の静的ファイルはルートハンドラより優先されるため、
 *   public/sitemap.xml を復活させると本ファイルの内容は配信されなくなる。
 *
 * 記載ルール:
 * - path は末尾スラッシュなしで書く。next.config.ts に trailingSlash 設定がなく
 *   デフォルト false のため、末尾スラッシュ付きの URL は 308 転送になり、
 *   クローラーに無駄な転送を踏ませることになる。トップページも path: "" として
 *   "https://sns-share.com"（末尾スラッシュなし）で出力する。
 * - lastModified には実際の最終更新日を書く。取得は次のコマンド:
 *     git log -1 --format=%ad --date=short -- <page.tsx のパス>
 *   ビルド時に git から動的取得はしないこと。Vercel のビルド環境は git 履歴が浅く、
 *   取得できない可能性があるため、取得した日付をここに直接記述する。
 *   今日の日付や一律の日付で埋めないこと。検索エンジンは不正確な更新日を検出すると
 *   その情報自体を無視するため、偽装は逆効果になる。全ページが過去の日付になるのは正しい状態。
 * - priority は下記の粗い区分で足りる。検索エンジンは priority をほぼ参照しないため、
 *   細かいチューニングに意味はない。
 * - changeFrequency は priority から導出する（changeFrequencyFor を参照）。
 * - images はそのページの代表画像を site-relative パス（"/images/..." 始まり）で書く。
 *   出力時に BASE_URL を前置して絶対 URL に変換される（画像サイトマップは絶対 URL 必須）。
 *   画像を持たないページでは images ごと省略する。空配列を書かないこと。
 *   複数ページで同じ画像を指してよい（実際 profile-creation.webp 等は共用している）。
 *   なお images は Next.js の SitemapFile 型が正式にサポートしている項目であり、
 *   出力すると <image:image><image:loc> として展開される。
 *
 * 掲載対象の判断:
 * - /partner は page.tsx を持たない。next.config.ts の rewrites で app.sns-share.com から
 *   配信されているため find では検出されないが、正規 URL はこちら側を指しているので掲載する。
 * - /blog/category/[slug] は除外。記事本体と内容が重複する一覧ページであり、
 *   対象カテゴリを列挙する仕組み（generateStaticParams）も未実装で静的に列挙できないため。
 * - /blog/digital-namecard は除外。同じく記事本体と内容が重複する一覧ページで、
 *   かつ記事リストが未実装の空ページのため。実装され次第ここに追記してよい。
 *
 * 参照: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import type { MetadataRoute } from "next";

const BASE_URL = "https://sns-share.com";

type Page = {
  /** 先頭スラッシュ始まり・末尾スラッシュなしのパス。トップページは "" */
  path: string;
  /** git log -1 --format=%ad --date=short -- <page.tsx のパス> の値 */
  lastModified: string;
  /** 1.0 トップ / 0.9 主要導線 / 0.8 コンテンツ / 0.5 法的・サポート・会社情報 */
  priority: number;
  /**
   * 代表画像の site-relative パス（"/images/..." 始まり）。
   * 出力時に BASE_URL を前置する。画像が無いページでは省略する（空配列を書かない）。
   */
  images?: string[];
};

const PAGES: Page[] = [
  // トップページ
  { path: "", lastModified: "2025-05-08", priority: 1.0 },

  // 主要導線（サービス紹介・トライアル・パートナー募集）
  {
    path: "/digital-namecard",
    lastModified: "2025-05-08",
    priority: 0.9,
    images: ["/images/screenshots/profile-creation.webp"],
  },
  { path: "/free-trial", lastModified: "2025-05-08", priority: 0.9 },
  // /partner のみ page.tsx が無く git から更新日を取得できないため、
  // 移行前の public/sitemap.xml に記載されていた値をそのまま引き継いでいる。
  { path: "/partner", lastModified: "2026-06-04", priority: 0.9 },

  // デジタル名刺 配下
  {
    path: "/digital-namecard/about",
    lastModified: "2025-05-08",
    priority: 0.8,
    images: ["/images/screenshots/social-links.webp"],
  },
  {
    path: "/digital-namecard/business-benefits",
    lastModified: "2025-05-08",
    priority: 0.8,
    images: ["/images/business/meeting.webp"],
  },
  {
    path: "/digital-namecard/for-executives",
    lastModified: "2025-05-08",
    priority: 0.8,
    images: ["/images/business/meeting.webp"],
  },
  {
    path: "/digital-namecard/how-to-create",
    lastModified: "2025-05-08",
    priority: 0.8,
    images: ["/images/screenshots/profile-creation.webp"],
  },
  {
    path: "/digital-namecard/ultimate-guide",
    lastModified: "2025-08-12",
    priority: 0.8,
    images: ["/images/screenshots/qr-code.webp"],
  },

  // ブログ
  { path: "/blog", lastModified: "2025-05-11", priority: 0.8 },
  // 画像は URL 差し替え前の /blog/qr-code-namecard-guide から引き継いだもの。
  {
    path: "/blog/digital-namecard/qr-code-guide",
    lastModified: "2025-05-08",
    priority: 0.8,
    images: ["/images/screenshots/qr-code.webp"],
  },
  // 画像は URL 差し替え前の /blog/sns-integration-business-card から引き継いだもの。
  {
    path: "/blog/digital-namecard/sns-integration",
    lastModified: "2025-05-23",
    priority: 0.8,
    images: ["/images/screenshots/social-links.webp"],
  },
  {
    path: "/blog/digital-namecard/what-is",
    lastModified: "2025-08-12",
    priority: 0.8,
    images: ["/images/screenshots/intro-generator.webp"],
  },

  // 活用事例
  { path: "/case-studies", lastModified: "2025-05-08", priority: 0.8 },

  // 会社情報
  { path: "/company/about", lastModified: "2025-07-17", priority: 0.5 },
  { path: "/company/service", lastModified: "2025-05-08", priority: 0.5 },

  // 法的ページ
  { path: "/legal/privacy", lastModified: "2025-07-17", priority: 0.5 },
  { path: "/legal/terms", lastModified: "2025-07-17", priority: 0.5 },
  { path: "/legal/transactions", lastModified: "2025-08-12", priority: 0.5 },

  // サポート
  { path: "/support/contact", lastModified: "2025-07-17", priority: 0.5 },
  { path: "/support/faq", lastModified: "2025-08-12", priority: 0.5 },
  { path: "/support/help", lastModified: "2025-05-08", priority: 0.5 },
];

/**
 * priority 0.5 の区分（法的ページ・サポート・会社情報）は内容がほぼ固定なので yearly、
 * それ以外は monthly とする。
 */
function changeFrequencyFor(priority: number): "monthly" | "yearly" {
  return priority === 0.5 ? "yearly" : "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, lastModified, priority, images }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: changeFrequencyFor(priority),
    priority,
    // 画像を持たないページでは images キー自体を出力しない。
    // 空配列を渡すと <image:image> の無い余計な差分が生まれるため、
    // undefined と [] の両方をここで弾いている。
    ...(images?.length
      ? { images: images.map((image) => `${BASE_URL}${image}`) }
      : {}),
  }));
}
