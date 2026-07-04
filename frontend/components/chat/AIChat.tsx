"use client";

import { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! I am ROYAL AI 👋" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    // अभी demo reply
    const aiMessage = {
      role: "ai",
      text: `You said: ${input}`,
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setInput("");
  };

  return (
    <div className="h-[400px] flex flex-col border border-gray-800 rounded-lg">
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={
              msg.role === "user"
                ? "text-right"
                : "text-left"
            }
          >
            <div className="inline-block bg-gray-800 p-3 rounded">
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800 p-3 flex gap-2">
        <input
          className="flex-1 bg-gray-900 p-3 rounded outline-none"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />

        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-600 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}