"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ViewToggle() {
  const pathname = usePathname();

  return (
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
  );
}
