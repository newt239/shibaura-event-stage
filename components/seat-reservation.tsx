"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function SeatReservation() {
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null)
  const [reservedSeats, setReservedSeats] = useState<Set<string>>(
    new Set(["A1", "A3", "B2", "B4", "C1", "C3", "D2", "D4", "E1", "E3"]),
  )

  const rows = ["A", "B", "C", "D", "E", "F"]
  const seatsPerRow = 6

  const handleSeatClick = (seatId: string) => {
    if (!reservedSeats.has(seatId)) {
      setSelectedSeat(seatId)
    }
  }

  const handleReservation = () => {
    if (selectedSeat) {
      setReservedSeats((prev) => new Set([...prev, selectedSeat]))
      setSelectedSeat(null)
      alert(`座席 ${selectedSeat} を予約しました！`)
    }
  }

  const getSeatStatus = (seatId: string) => {
    if (reservedSeats.has(seatId)) return "reserved"
    if (selectedSeat === seatId) return "selected"
    return "available"
  }

  const getSeatColor = (status: string) => {
    switch (status) {
      case "reserved":
        return "bg-gray-400"
      case "selected":
        return "bg-blue-500"
      default:
        return "bg-green-200 hover:bg-green-300"
    }
  }

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">座席予約</h2>
        <p className="text-gray-600">レジャーシートの予約状況</p>
      </div>

      {/* Stage */}
      <div className="bg-gray-800 text-white text-center py-4 rounded-lg">
        <span className="font-semibold">ステージ</span>
      </div>

      {/* Seating Chart */}
      <div className="bg-white rounded-lg p-4 shadow-sm border">
        <div className="space-y-2">
          {rows.map((row) => (
            <div key={row} className="flex justify-center space-x-2">
              <span className="w-6 text-center font-medium text-gray-600">{row}</span>
              {Array.from({ length: seatsPerRow }, (_, i) => {
                const seatId = `${row}${i + 1}`
                const status = getSeatStatus(seatId)
                return (
                  <button
                    key={seatId}
                    onClick={() => handleSeatClick(seatId)}
                    disabled={status === "reserved"}
                    className={`w-8 h-8 rounded ${getSeatColor(status)} transition-colors ${
                      status === "reserved" ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    title={`座席 ${seatId} - ${
                      status === "reserved" ? "予約済み" : status === "selected" ? "選択中" : "利用可能"
                    }`}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-4 text-sm">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-200 rounded mr-2"></div>
          <span>利用可能</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
          <span>選択中</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-400 rounded mr-2"></div>
          <span>予約済み</span>
        </div>
      </div>

      {/* Reservation Button */}
      {selectedSeat && (
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <p className="text-center mb-3">
            選択中の座席: <span className="font-bold text-blue-600">{selectedSeat}</span>
          </p>
          <Button onClick={handleReservation} className="w-full">
            座席を予約する
          </Button>
        </div>
      )}

      {/* Stats */}
      <div className="bg-white rounded-lg p-4 shadow-sm border">
        <h3 className="font-semibold mb-2">予約状況</h3>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600">{rows.length * seatsPerRow - reservedSeats.size}</div>
            <div className="text-sm text-gray-600">利用可能</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-600">{reservedSeats.size}</div>
            <div className="text-sm text-gray-600">予約済み</div>
          </div>
        </div>
      </div>
    </div>
  )
}
