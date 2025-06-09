"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Event {
  id: string;
  title: string;
  time: string;
  duration: string;
  type: "band" | "talk" | "club" | "mail";
  performer: string;
  description: string;
}

interface TimeSlot {
  id: string;
  date: string;
  time: string;
  duration: string;
  isAvailable: boolean;
  bookedBy?: string;
}

const todayEvents: Event[] = [
  {
    id: "1",
    title: "オープニングセレモニー",
    time: "12:00",
    duration: "15分",
    type: "talk",
    performer: "学生会",
    description: "芝浦フェス2024の開会式",
  },
  {
    id: "2",
    title: "ソロパフォーマンス",
    time: "12:45",
    duration: "30分",
    type: "band",
    performer: "軽音楽部",
    description: "弾き語りライブ",
  },
  {
    id: "3",
    title: "ダンスパフォーマンス",
    time: "13:20",
    duration: "20分",
    type: "club",
    performer: "ダンス部",
    description: "K-POPダンスメドレー",
  },
  {
    id: "4",
    title: "お便りコーナー",
    time: "13:45",
    duration: "15分",
    type: "mail",
    performer: "放送部",
    description: "学生からのメッセージ紹介",
  },
];

const weekEvents = [
  {
    date: "6月3日（月）",
    events: [
      { title: "バンドコンテスト予選", time: "12:30", performer: "軽音楽部" },
      { title: "落語研究会", time: "13:15", performer: "落語研究会" },
    ],
  },
  {
    date: "6月4日（火）",
    events: [
      { title: "アカペラライブ", time: "12:45", performer: "アカペラサークル" },
      { title: "漫才コンビ", time: "13:20", performer: "お笑い研究会" },
    ],
  },
  {
    date: "6月5日（水）",
    events: [
      { title: "吹奏楽演奏", time: "12:30", performer: "吹奏楽部" },
      { title: "詩の朗読会", time: "13:10", performer: "文芸部" },
    ],
  },
  {
    date: "6月6日（木）",
    events: [
      { title: "ジャズセッション", time: "12:40", performer: "ジャズ研究会" },
      { title: "手品ショー", time: "13:25", performer: "マジック同好会" },
    ],
  },
  {
    date: "6月7日（金）",
    events: [
      { title: "フィナーレコンサート", time: "12:30", performer: "全出演者" },
      { title: "クロージングセレモニー", time: "13:30", performer: "学生会" },
    ],
  },
];

const availableTimeSlots: TimeSlot[] = [
  {
    id: "slot1",
    date: "6月3日（月）",
    time: "12:00",
    duration: "30分",
    isAvailable: true,
  },
  {
    id: "slot2",
    date: "6月3日（月）",
    time: "13:00",
    duration: "30分",
    isAvailable: true,
  },
  {
    id: "slot3",
    date: "6月4日（火）",
    time: "12:00",
    duration: "30分",
    isAvailable: true,
  },
  {
    id: "slot4",
    date: "6月4日（火）",
    time: "13:00",
    duration: "30分",
    isAvailable: true,
  },
];

export default function Schedule() {
  const [activeView, setActiveView] = useState<"today" | "week" | "booking">(
    "today"
  );
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [bookingForm, setBookingForm] = useState({
    performer: "",
    title: "",
    description: "",
    type: "band" as "band" | "talk" | "club" | "mail",
  });

  const handleBooking = (slot: TimeSlot) => {
    setSelectedSlot(slot);
  };

  const handleSubmitBooking = () => {
    if (!selectedSlot) return;

    // ここで予約処理を実装
    const updatedSlot = {
      ...selectedSlot,
      isAvailable: false,
      bookedBy: bookingForm.performer,
    };

    // 実際のアプリケーションでは、ここでAPIを呼び出して予約を保存します
    console.log("予約内容:", { slot: updatedSlot, booking: bookingForm });

    // フォームをリセット
    setBookingForm({
      performer: "",
      title: "",
      description: "",
      type: "band",
    });
    setSelectedSlot(null);
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "band":
        return "bg-red-100 text-red-800";
      case "talk":
        return "bg-green-100 text-green-800";
      case "club":
        return "bg-green-100 text-green-800";
      case "mail":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "band":
        return "バンド";
      case "talk":
        return "トーク";
      case "club":
        return "クラブ";
      case "mail":
        return "お便り";
      default:
        return "その他";
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">スケジュール</h2>
        <p className="text-gray-600">芝浦フェスの予定表</p>
      </div>

      {/* View Toggle */}
      <div className="flex bg-gray-100 rounded-lg p-1">
        <Button
          variant={activeView === "today" ? "default" : "ghost"}
          onClick={() => setActiveView("today")}
          className="flex-1"
        >
          今日の予定
        </Button>
        <Button
          variant={activeView === "week" ? "default" : "ghost"}
          onClick={() => setActiveView("week")}
          className="flex-1"
        >
          今週の予定
        </Button>
        <Button
          variant={activeView === "booking" ? "default" : "ghost"}
          onClick={() => setActiveView("booking")}
          className="flex-1"
        >
          予約する
        </Button>
      </div>

      {activeView === "booking" ? (
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">空き枠の予約</h3>
            <p className="text-sm text-blue-700">
              出演希望の時間枠を選択してください
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableTimeSlots.map((slot) => (
              <div
                key={slot.id}
                className={`p-4 rounded-lg border ${
                  slot.isAvailable
                    ? "bg-white hover:bg-gray-50 cursor-pointer"
                    : "bg-gray-100"
                }`}
                onClick={() => slot.isAvailable && handleBooking(slot)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{slot.date}</div>
                    <div className="text-sm text-gray-600">
                      {slot.time} ({slot.duration})
                    </div>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      slot.isAvailable
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {slot.isAvailable ? "予約可能" : "予約済み"}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedSlot && (
            <div className="bg-white rounded-lg p-4 border mt-4">
              <h3 className="font-semibold mb-4">予約フォーム</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    出演者名
                  </label>
                  <input
                    type="text"
                    value={bookingForm.performer}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        performer: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    タイトル
                  </label>
                  <input
                    type="text"
                    value={bookingForm.title}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, title: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    説明
                  </label>
                  <textarea
                    value={bookingForm.description}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        description: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    種別
                  </label>
                  <select
                    value={bookingForm.type}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        type: e.target.value as
                          | "band"
                          | "talk"
                          | "club"
                          | "mail",
                      })
                    }
                    className="w-full p-2 border rounded"
                  >
                    <option value="band">バンド</option>
                    <option value="talk">トーク</option>
                    <option value="club">クラブ</option>
                    <option value="mail">お便り</option>
                  </select>
                </div>
                <Button onClick={handleSubmitBooking} className="w-full">
                  予約を確定する
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : activeView === "today" ? (
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold text-green-800">
                今日 - 6月2日（日）
              </span>
            </div>
            <p className="text-sm text-green-700">
              昼休みステージイベント開催日
            </p>
          </div>

          {todayEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg p-4 shadow-sm border"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(
                    event.type
                  )}`}
                >
                  {getEventTypeLabel(event.type)}
                </span>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>
                    {event.time} ({event.duration})
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{event.performer}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>大学芝生広場</span>
                </div>
              </div>

              <p className="text-sm text-gray-700 mt-3">{event.description}</p>

              {event.time === "12:45" && (
                <div className="mt-3 p-2 bg-red-50 rounded border border-red-200">
                  <span className="text-xs font-medium text-red-600">
                    現在開催中
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {weekEvents.map((day, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border">
              <div className="bg-gray-50 px-4 py-3 rounded-t-lg border-b">
                <h3 className="font-semibold text-gray-800">{day.date}</h3>
              </div>
              <div className="p-4 space-y-3">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-gray-600">
                        {event.performer}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-800">
                      {event.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

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
