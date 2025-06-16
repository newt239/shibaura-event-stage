import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface Event {
  id: string;
  title: string;
  time: string;
  duration: string;
  type: "band" | "talk" | "club" | "mail";
  performer: string;
  description: string;
}

const todayEvents: Event[] = [
  {
    id: "1",
    title: "ダンスパフォーマンス",
    time: "12:30",
    duration: "20分",
    type: "club",
    performer: "ダンス部",
    description: "K-POPダンスメドレー",
  },
  {
    id: "2",
    title: "コーラス演奏",
    time: "13:00",
    duration: "15分",
    type: "club",
    performer: "合唱部",
    description: "合唱部の演奏",
  },
];

export default function TodaySchedule() {
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
    <div className="space-y-4">
      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
        <div className="flex items-center mb-2">
          <Calendar className="w-5 h-5 text-green-600 mr-2" />
          <span className="font-semibold text-green-800">
            今日 - 6月2日（日）
          </span>
        </div>
        <p className="text-sm text-green-700">昼休みステージイベント開催日</p>
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
  );
}
