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
      "/blog": "ブログ",
      "/blog/digital-namecard": "デジタル名刺",
      "/blog/digital-namecard/qr-code-guide": "QRコード名刺ガイド",
      "/blog/digital-namecard/what-is": "デジタル名刺とは",
      "/blog/digital-namecard/sns-integration": "SNSアカウント一元管理",

      // デジタル名刺関連
      "/digital-namecard": "デジタル名刺",
      "/digital-namecard/about": "デジタル名刺とは",
      "/digital-namecard/how-to-create": "デジタル名刺の作り方",
      "/digital-namecard/business-benefits": "ビジネスで差をつける",
      "/digital-namecard/for-executives": "経営者向けプラン",
      "/digital-namecard/ultimate-guide": "デジタル名刺完全ガイド",

      // 無料トライアル
      "/free-trial": "無料トライアル",

      // 事例集
      "/case-studies": "活用事例",
      "/case-studies/executive-cases": "経営者の活用事例",
      "/case-studies/business-cases": "ビジネスの活用事例",

      // その他のページ
      "/pricing": "料金プラン",
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

      // デバッグ用にマッピングの内容を確認
      console.log(
        `現在のパス: ${currentPath}, マップされた名前: ${breadcrumbMap[currentPath]}`
      );

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