// src/app/blog/category/[slug]/page.tsx
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";

// BreadcrumbItemの型定義を取得（既存のものと一致させる）
interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function BlogCategory() {
  const params = useParams();
  const { slug } = params;
  const breadcrumbItems = useBreadcrumb();

  // カテゴリー名のマッピング
  const categoryNames = {
    all: "すべて",
    basic: "基礎知識",
    guide: "活用ガイド",
    technique: "活用テクニック",
  };

  // 現在のカテゴリー名を取得
  const currentCategory =
    slug && typeof slug === "string"
      ? categoryNames[slug as keyof typeof categoryNames] || slug
      : "カテゴリー";

  // ブログ記事データ（メインページと同じデータ）
  const allBlogPosts = [
    {
      slug: "digital-namecard/what-is",
      title: "デジタル名刺とは？紙の名刺との違いとビジネスでのメリット",
      excerpt:
        "デジタル名刺（電子名刺）の基本概念から、従来の紙の名刺との違い、ビジネスシーンでの具体的なメリットまで詳しく解説します。複数のSNSアカウントを一つにまとめて効率的に共有する方法をご紹介。",
      category: "基礎知識",
      categorySlug: "basic",
      date: "2025-04-15",
      readTime: "7分",
      thumbnail: "/images/screenshots/profile-creation.webp",
    },
    {
      slug: "digital-namecard/qr-code-guide",
      title: "QRコード名刺の作り方と注意点 - デザインから共有まで",
      excerpt:
        "QRコードを活用したデジタル名刺の作成方法を解説。最適なQRコードのサイズ、配置、デザイン例から、スキャン時の注意点まで、ビジネスで差をつけるQRコード名刺の完全ガイド。",
      category: "活用ガイド",
      categorySlug: "guide",
      date: "2025-04-10",
      readTime: "6分",
      thumbnail: "/images/screenshots/qr-code.webp",
    },
    {
      slug: "digital-namecard/sns-integration",
      title: "SNSアカウントを一元管理できるデジタル名刺の活用法",
      excerpt:
        "複数のSNSアカウントを一つのデジタル名刺にまとめる方法と、ビジネスシーンでの効果的な活用方法をご紹介。LINE、X、Instagram、Facebookなど、SNS別の最適な設定方法も解説。",
      category: "活用テクニック",
      categorySlug: "technique",
      date: "2025-04-05",
      readTime: "5分",
      thumbnail: "/images/screenshots/social-links.webp",
    },
  ];

  // フィルタリングされたブログ記事
  const filteredPosts =
    slug === "all"
      ? allBlogPosts
      : allBlogPosts.filter((post) => post.categorySlug === slug);

  // カテゴリーデータ（メインページと同じデータ）
  const categories = [
    { name: "すべて", slug: "all", count: allBlogPosts.length },
    {
      name: "基礎知識",
      slug: "basic",
      count: allBlogPosts.filter((post) => post.categorySlug === "basic")
        .length,
    },
    {
      name: "活用ガイド",
      slug: "guide",
      count: allBlogPosts.filter((post) => post.categorySlug === "guide")
        .length,
    },
    {
      name: "活用テクニック",
      slug: "technique",
      count: allBlogPosts.filter((post) => post.categorySlug === "technique")
        .length,
    },
  ];

  // 修正: BreadcrumbItemのhrefプロパティを追加
  const categoryBreadcrumb: BreadcrumbItem = {
    name: currentCategory,
    href: `/blog/category/${slug}`,
  };

  return (
    <div className="bg-white">
      {/* パンくずリスト */}
      <div className="bg-white py-2 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <Breadcrumb items={[...breadcrumbItems, categoryBreadcrumb]} />
        </div>
      </div>

      {/* ヘッダーセクション */}
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {currentCategory} の記事
            </h1>
            <p className="text-xl text-blue-100 mb-2">
              デジタル名刺に関する「{currentCategory}」カテゴリーの記事一覧
            </p>
            <p className="text-blue-50 text-justify">
              Share（シェア）のデジタル名刺活用ブログでは、複数のSNSアカウントを一元管理するデジタル名刺の基本から応用まで、ビジネスシーンで差をつけるための実践的な情報を発信しています。
            </p>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* カテゴリーフィルター */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4 text-gray-800">カテゴリー</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  category.slug === slug
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
                } transition-colors`}
              >
                {category.name} ({category.count})
              </Link>
            ))}
          </div>
        </div>

        {/* 記事リスト */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="h-48 bg-gray-200 relative">
                  <div
                    className="w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${post.thumbnail})` }}
                  />
                  {/* 白い半透明オーバーレイを追加 */}
                  <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-50"></div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded shadow-md shadow-black/20">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>読了時間: {post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              このカテゴリーには記事がありません。
            </p>
            <Link
              href="/blog"
              className="mt-4 inline-block text-primary hover:underline"
            >
              すべての記事を見る
            </Link>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 shadow-lg">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-lg">
              <h2 className="text-2xl font-bold mb-2">
                デジタル名刺を無料で試す
              </h2>
              <p className="text-blue-100">
                複数のSNSアカウントを一つにまとめ、QRコードで簡単に共有できるShare（シェア）のデジタル名刺サービスを7日間無料でお試しいただけます。
              </p>
            </div>
            <Link
              href="/free-trial"
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-primary bg-white hover:bg-gray-50 transition-all"
            >
              <span>無料トライアルを始める</span>
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
      </div>
    </div>
  );
}