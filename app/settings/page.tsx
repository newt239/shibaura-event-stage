import Link from "next/link";
import { Github } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold my-2">設定</h1>

      <div className="bg-white rounded-lg p-4 shadow-sm border hover:shadow-md transition-shadow">
        <h3 className="font-semibold mb-3">アプリケーション情報</h3>
        <div className="space-y-2">
          <p>
            <span className="font-medium">アプリ名：</span>Shibaura Event Stage
          </p>
          <p>
            <span className="font-medium">バージョン：</span>1.0.0
          </p>
          <p>2025年度 構想デザイン論 グループ6</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm border hover:shadow-md transition-shadow">
        <h3 className="font-semibold mb-3">リンク</h3>
        <Link
          href="https://github.com/newt239/shibaura-event-stage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          <Github className="w-5 h-5" />
          GitHubリポジトリ
        </Link>
      </div>
    </div>
  );
}
