"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessageCircle, Calendar, Users } from "lucide-react";

export default function BottomNavigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path) && pathname !== "/";
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-around items-center h-16">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/") ? "text-green-500" : "text-gray-500"
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">ホーム</span>
        </Link>

        <Link
          href="/seats"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/seats") ? "text-green-500" : "text-gray-500"
          }`}
        >
          <Users className="w-6 h-6" />
          <span className="text-xs mt-1">座席</span>
        </Link>

        <Link
          href="/chat"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/chat") ? "text-green-500" : "text-gray-500"
          }`}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs mt-1">チャット</span>
        </Link>

        <Link
          href="/schedule"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/schedule") ? "text-green-500" : "text-gray-500"
          }`}
        >
          <Calendar className="w-6 h-6" />
          <span className="text-xs mt-1">スケジュール</span>
        </Link>
      </div>
    </nav>
  );
}
