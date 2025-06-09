"use client"

import { Home, Calendar, MessageCircle, MapPin } from "lucide-react"

interface BottomNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: "home", label: "ホーム", icon: Home },
    { id: "schedule", label: "スケジュール", icon: Calendar },
    { id: "chat", label: "チャット", icon: MessageCircle },
    { id: "seats", label: "座席予約", icon: MapPin },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? "text-blue-600" : "text-gray-600"}`} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
