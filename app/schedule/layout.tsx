"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="p-4 space-y-4">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">スケジュール</h2>
        <p className="text-gray-600">芝浦フェスの予定表</p>
      </div>

      {/* View Toggle */}
      <div className="flex bg-gray-100 rounded-lg p-1">
        <Link href="/schedule" className="flex-1">
          <Button
            variant={pathname === "/schedule" ? "default" : "ghost"}
            className="w-full"
          >
            今日の予定
          </Button>
        </Link>
        <Link href="/schedule/week" className="flex-1">
          <Button
            variant={pathname === "/schedule/week" ? "default" : "ghost"}
            className="w-full"
          >
            今週の予定
          </Button>
        </Link>
        <Link href="/schedule/booking" className="flex-1">
          <Button
            variant={pathname === "/schedule/booking" ? "default" : "ghost"}
            className="w-full"
          >
            予約する
          </Button>
        </Link>
      </div>

      {children}

      {/* Quick Info */}
      <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
        <h4 className="font-semibold text-yellow-800 mb-2">お知らせ</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• 雨天の場合は学生ホールで開催します</li>
          <li>• 座席の事前予約をおすすめします</li>
          <li>• 飲食物の持ち込みは可能です</li>
        </ul>
      </div>
    </div>
  );
}
