"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Heart, ThumbsUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatMessage {
  id: string;
  user: string;
  message: string;
  timestamp: Date;
  reactions?: string[];
}

const mockUsers = [
  "田中さん",
  "佐藤さん",
  "鈴木さん",
  "高橋さん",
  "渡辺さん",
  "伊藤さん",
  "山本さん",
  "中村さん",
  "小林さん",
  "加藤さん",
];

const mockMessages = [
  "すごい上手！",
  "感動した！",
  "次の曲も楽しみ！",
  "いい声だね",
  "素晴らしいパフォーマンス",
  "もっと聞きたい！",
  "最高！",
  "ギターうまい！",
  "歌詞が心に響く",
  "ブラボー！",
];

export default function ChatRoom() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser] = useState("あなた");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate incoming messages
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5 && messages.length < 20) {
        // 50% chance every 1 seconds and messages count is less than 20
        const randomUser =
          mockUsers[Math.floor(Math.random() * mockUsers.length)];
        const randomMessage =
          mockMessages[Math.floor(Math.random() * mockMessages.length)];

        const newMsg: ChatMessage = {
          id: Date.now().toString(),
          user: randomUser,
          message: randomMessage,
          timestamp: new Date(),
          reactions: [],
        };

        setMessages((prev) => [...prev, newMsg]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [messages.length]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        user: currentUser,
        message: newMessage,
        timestamp: new Date(),
        reactions: [],
      };

      setMessages((prev) => [...prev, message]);
      setNewMessage("");
    }
  };

  const addReaction = (messageId: string, reaction: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? { ...msg, reactions: [...(msg.reactions || []), reaction] }
          : msg
      )
    );
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ja-JP", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex flex-col h-[calc(100lvh-8rem)]">
      <div className="bg-white border-b p-4">
        <h2 className="text-xl font-bold">ライブチャット</h2>
        <p className="text-sm text-gray-600">
          現在のパフォーマンスについてコメントしよう
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <p>まだメッセージがありません</p>
            <p className="text-sm">最初のコメントを投稿してみましょう！</p>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.user === currentUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.user === currentUser
                  ? "bg-green-500 text-white"
                  : "bg-white border shadow-sm"
              }`}
            >
              {message.user !== currentUser && (
                <div className="text-xs font-semibold text-gray-600 mb-1">
                  {message.user}
                </div>
              )}
              <div className="text-sm">{message.message}</div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs opacity-70">
                  {formatTime(message.timestamp)}
                </div>
                {message.user !== currentUser && (
                  <div className="flex space-x-1">
                    <button
                      onClick={() => addReaction(message.id, "❤️")}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Heart className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => addReaction(message.id, "👍")}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <ThumbsUp className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => addReaction(message.id, "⭐")}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Star className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
              {message.reactions && message.reactions.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {message.reactions.map((reaction, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 px-1 rounded"
                    >
                      {reaction}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white border-t p-4">
        <div className="flex space-x-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="メッセージを入力..."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1"
          />
          <Button onClick={sendMessage} size="sm">
            <Send className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex space-x-2 mt-2">
          <button
            onClick={() => setNewMessage("素晴らしい！")}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
          >
            素晴らしい！
          </button>
          <button
            onClick={() => setNewMessage("最高！")}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
          >
            最高！
          </button>
          <button
            onClick={() => setNewMessage("感動した")}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
          >
            感動した
          </button>
        </div>
      </div>
    </div>
  );
}
