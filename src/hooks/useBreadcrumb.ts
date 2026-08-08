// src/hooks/useBreadcrumb.ts
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import type { BreadcrumbItem } from "@/components/ui/Breadcrumb";

// パスに基づいて自動的にパンくずリストを生成するフック
export function useBreadcrumb() {
  const pathname = usePathname();

  // パスとページ名のマッピングをメモ化
  const breadcrumbMap = useMemo<Record<string, string>>(
    () => ({
      // ルート
      "/": "ホーム",

      // ブログ関連のマッピングを追加
      // 注: /blog/digital-namecard は空ページのため削除し /blog へ恒久転送済み。
      // パンくずからも除外しているのでマッピングは持たない（復活させないこと）。
      "/blog": "ブログ",
      "/blog/digital-namecard/qr-code-guide": "QRコード名刺ガイド",
      "/blog/digital-namecard/what-is": "デジタル名刺とは",
      "/blog/digital-namecard/sns-integration": "SNSアカウント一元管理",

      // デジタル名刺関連
      "/digital-namecard": "デジタル名刺",
      "/digital-namecard/about": "デジタル名刺とは",
      "/digital-namecard/how-to-create": "デジタル名刺の作り方",
      "/digital-namecard/business-benefits": "ビジネスで差をつける",
      "/digital-namecard/for-executives": "経営者向けデジタル名刺",
      "/digital-namecard/ultimate-guide": "デジタル名刺完全ガイド",

      // 無料トライアル
      "/free-trial": "無料トライアル",

      // 事例集
      "/case-studies": "活用シーン集",

      // その他のページ
      "/support": "サポート",
      "/support/contact": "お問い合わせ",
      "/support/faq": "よくある質問",

      "/legal/privacy": "プライバシーポリシー",
      "/legal/terms": "利用規約",
      "/legal/transactions": "特定商取引法に基づく表記",

      "/company/about": "運営会社",
      "company/service": "サービスについて",
    }),
    []
  );

  const breadcrumbItems = useMemo(() => {
    // トップページは特別扱い
    if (pathname === "/") {
      return [{ name: "ホーム", href: "/", current: true }];
    }

    // パスを分割してパンくずリストを生成
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbItems: BreadcrumbItem[] = [{ name: "ホーム", href: "/" }];

    let currentPath = "";

    // 各パスセグメントに対してパンくずアイテムを生成
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;

      // /blog/digital-namecard は /blog へ恒久転送される中間パス。
      // クラムとして出すとリンクと BreadcrumbList JSON-LD が転送 URL を指すため除外する。
      if (!isLast && currentPath === "/blog/digital-namecard") {
        return;
      }

      // マッピングされた名前があればそれを使用、なければセグメント名をキャピタライズして使用
      // デジタル名刺のパスを特別扱い
      let name = breadcrumbMap[currentPath];

      if (!name) {
        if (currentPath === "/digital-namecard") {
          name = "デジタル名刺";
        } else if (segment === "digital-namecard") {
          name = "デジタル名刺";
        } else {
          name =
            segment.charAt(0).toUpperCase() +
            segment.slice(1).replace(/-/g, " ");
        }
      }

      breadcrumbItems.push({
        name,
        href: currentPath,
        current: isLast,
      });
    });

    return breadcrumbItems;
  }, [pathname, breadcrumbMap]);

  return breadcrumbItems;
}