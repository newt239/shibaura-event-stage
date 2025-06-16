import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-10">
      <div className="flex items-center justify-between p-4">
        <div className="text-lg font-bold text-gray-800">
          Shibaura Event Stage
        </div>
        <Link
          href="/settings"
          className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
        >
          <span className="text-white text-sm font-bold">S</span>
        </Link>
      </div>
    </header>
  );
}
