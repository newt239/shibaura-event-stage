import type { Metadata } from "next";
import "./globals.css";
import BottomNavigation from "@/components/bottom-navigation";

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
          <header className="bg-white shadow-sm border-b">
            <div className="flex items-center justify-between p-4">
              <div className="text-lg font-bold text-gray-800">
                Shibaura Event Stage
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">S</span>
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
