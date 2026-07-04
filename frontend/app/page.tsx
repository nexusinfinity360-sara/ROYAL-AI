import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import AIChat from "@/components/chat/AIChat";
import CodeEditor from "@/components/editor/CodeEditor";
import LivePreview from "@/components/preview/LivePreview";
import AIAssistant from "@/components/assistant/AIAssistant";
import Terminal from "@/components/terminal/Terminal";

export default function Home() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 border-r border-gray-800">
          <Sidebar />
        </div>

        <div className="flex-1 grid grid-cols-2">
          <div className="border-r border-gray-800 p-4 overflow-auto">
            <AIChat />

            <div className="mt-4">
              <CodeEditor />
            </div>
          </div>

          <div className="p-4 overflow-auto">
            <LivePreview />

            <div className="mt-4">
              <AIAssistant />
            </div>
          </div>
        </div>
      </div>

      <div className="h-40 border-t border-gray-800">
        <Terminal />
      </div>
    </div>
  );
}