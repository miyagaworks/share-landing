// src/components/layout/Header.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 環境に応じてサインアップURLを変更
  const signupUrl =
    process.env.NODE_ENV === "production"
      ? "https://app.sns-share.com/auth/signup"
      : "http://localhost:3000/auth/signup";

  // メニュー項目がクリックされたときの処理
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  // メニュー外クリック検出のためのイベントリスナー
  useEffect(() => {
    // MouseEventとTouchEventを統一的に扱うための関数
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      // イベントターゲットを取得
      const target = event.target as Node;

      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    }

    // モバイルメニューが開いているときだけイベントリスナーを設定
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener(
        "touchstart",
        handleClickOutside as EventListener
      );
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener(
        "touchstart",
        handleClickOutside as EventListener
      );
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Share Logo"
                width={145}
                height={42}
                priority
              />
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/#features"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              機能
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              料金
            </Link>
            <Link
              href="/#benefits"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              メリット
            </Link>
            <Link
              href="/digital-namecard/"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              デジタル名刺
            </Link>
            <Link
              href="/blog/"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              ブログ
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              FAQ
            </Link>
            <Link
              href="/support/contact"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              お問い合わせ
            </Link>
            <Link
              href={signupUrl}
              className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              無料で試す
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              type="button"
              id="mobile-menu-button"
              ref={buttonRef}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white border-b border-gray-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/#features"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={handleMenuItemClick}
          >
            機能
          </Link>
          <Link
            href="/#pricing"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={handleMenuItemClick}
          >
            料金
          </Link>
          <Link
            href="/#benefits"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={handleMenuItemClick}
          >
            メリット
          </Link>
          <Link
            href="/digital-namecard/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={handleMenuItemClick}
          >
            デジタル名刺
          </Link>
          <Link
            href="/blog/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={handleMenuItemClick}
          >
            ブログ
          </Link>
          <Link
            href="/#faq"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={handleMenuItemClick}
          >
            FAQ
          </Link>
          <Link
            href="/support/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={handleMenuItemClick}
          >
            お問い合わせ
          </Link>
          <Link
            href="/login"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={handleMenuItemClick}
          >
            ログイン
          </Link>
          <Link
            href={signupUrl}
            className="block w-full px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-blue-700 mt-2 text-center"
            onClick={handleMenuItemClick}
          >
            無料で試す
          </Link>
        </div>
      </div>
    </header>
  );
}