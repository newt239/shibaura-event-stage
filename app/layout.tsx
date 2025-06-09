import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
