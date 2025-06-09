"use client";

import { useState } from "react";
import { Calendar, MessageCircle, MapPin, Users, Clock } from "lucide-react";
import SeatReservation from "@/components/seat-reservation";
import ChatRoom from "@/components/chat-room";
import Schedule from "@/components/schedule";
import BottomNavigation from "@/components/bottom-navigation";

export default function ShibauraFesApp() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "seats":
        return <SeatReservation />;
      case "chat":
        return <ChatRoom />;
      case "schedule":
        return <Schedule />;
      default:
        return <HomePage />;
    }
  };

  return (
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

      <main className="flex-1">{renderContent()}</main>

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

function HomePage() {
  return (
    <div className="p-4 space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Shibaura Event Stage</h1>
        <p className="text-green-100">昼休みステージイベント開催中！</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center mb-2">
            <MapPin className="w-5 h-5 text-green-500 mr-2" />
            <span className="font-semibold">座席予約</span>
          </div>
          <p className="text-sm text-gray-600">
            レジャーシートの予約状況を確認
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center mb-2">
            <MessageCircle className="w-5 h-5 text-green-500 mr-2" />
            <span className="font-semibold">ライブチャット</span>
          </div>
          <p className="text-sm text-gray-600">
            パフォーマンスにリアルタイムで反応
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center mb-2">
            <Calendar className="w-5 h-5 text-purple-500 mr-2" />
            <span className="font-semibold">スケジュール</span>
          </div>
          <p className="text-sm text-gray-600">今日と今週の予定を確認</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center mb-2">
            <Users className="w-5 h-5 text-orange-500 mr-2" />
            <span className="font-semibold">出演者情報</span>
          </div>
          <p className="text-sm text-gray-600">バンドやクラブ活動の詳細</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm border">
        <h3 className="font-semibold mb-3 flex items-center">
          <Clock className="w-5 h-5 text-red-500 mr-2" />
          現在のパフォーマンス
        </h3>
        <div className="bg-red-50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">ソロパフォーマンス</span>
            <span className="text-sm text-gray-600">12:45 - 13:15</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-red-500 h-2 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            軽音楽部による弾き語りライブ
          </p>
        </div>
      </div>
    </div>
  );
}
