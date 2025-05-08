// src/components/layout/PageLayout.tsx
import React from "react";
import Header from "./Header";
import Link from "next/link";

interface Breadcrumb {
  name: string;
  href: string;
}

interface PageLayoutProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  children: React.ReactNode;
}

export function PageLayout({ title, breadcrumbs, children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className="bg-gray-50 pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* パンくずリスト */}
          <nav className="py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-primary">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={breadcrumb.href} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  <Link
                    href={breadcrumb.href}
                    className={
                      index === breadcrumbs.length - 1
                        ? "font-medium text-gray-900"
                        : "hover:text-blue-800"
                    }
                  >
                    {breadcrumb.name}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          {/* ページタイトル */}
          <div className="mb-8 border-b border-gray-400 pb-4">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          </div>

          {/* メインコンテンツ */}
          <div className="bg-white p-10 rounded-lg shadow-sm">{children}</div>
        </div>
      </main>
    </>
  );
}