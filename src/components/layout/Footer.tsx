// src/components/layout/Footer.tsx
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl ml-auto mr-20">
          {/* サービス情報 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">サービス情報</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal/terms"
                  className="text-gray-700 hover:text-blue-600"
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-gray-700 hover:text-blue-600"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/transactions"
                  className="text-gray-700 hover:text-blue-600"
                >
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>

          {/* サポート */}
          <div>
            <h2 className="text-lg font-semibold mb-4">サポート</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/support/help"
                  className="text-gray-700 hover:text-blue-600"
                >
                  ヘルプセンター
                </Link>
              </li>
              <li>
                <Link
                  href="/support/faq"
                  className="text-gray-700 hover:text-blue-600"
                >
                  よくあるご質問
                </Link>
              </li>
              <li>
                <Link
                  href="/support/contact"
                  className="text-gray-700 hover:text-blue-600"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* 会社情報 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">会社情報</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/company/about"
                  className="text-gray-700 hover:text-blue-600"
                >
                  運営会社
                </Link>
              </li>
              <li>
                <Link
                  href="/company/service"
                  className="text-gray-700 hover:text-blue-600"
                >
                  サービスについて
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 border-t border-gray-400 pt-4">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Bialpha Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}