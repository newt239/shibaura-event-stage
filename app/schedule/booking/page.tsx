"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface TimeSlot {
  id: string;
  date: string;
  time: string;
  duration: string;
  isAvailable: boolean;
  bookedBy?: string;
}

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

export default function BookingPage() {
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

  return (
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
                    type: e.target.value as "band" | "talk" | "club" | "mail",
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
  );
}
