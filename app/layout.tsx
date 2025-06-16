import type { Metadata } from "next";
import "./globals.css";
import BottomNavigation from "@/components/bottom-navigation";
import Header from "@/app/_components/header";

export const metadata: Metadata = {
  title: "Shibaura Event Stage",
  description: "2025 構想デザイン論 グループ6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="min-h-screen bg-gray-50 pb-16">
          <Header />
          <main className="flex-1">{children}</main>
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
