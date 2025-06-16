"use client";

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
      { title: "ダンスパフォーマンス", time: "12:30", performer: "ダンス部" },
      { title: "コーラス演奏", time: "13:15", performer: "合唱部" },
    ],
  },
];

export default function WeekSchedule() {
  return (
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
                  <div className="text-sm text-gray-600">{event.performer}</div>
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
  );
}
