import { useMemo, useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";

type ChatMessage = {
  from: "user" | "bot";
  text: string;
};

const faqPreset = [
  { question: "플랫폼 전체 개요", answer: "GnG Meta는 Agent, DAMCP, InfoStream, ChronoPredictor, BlazeMotion, TravelMate 6개 AI 플랫폼과 GnG Tour 서비스로 구성됩니다." },
  { question: "도입 효과", answer: "데이터 통합/거버넌스, 실시간 모니터링, 예측/최적화, AI Q&A 자동화로 운영 비용을 줄이고 의사결정을 빠르게 합니다." },
  { question: "보안/권한", answer: "역할 기반 접근제어, 데이터 계보/감사 로그, 민감정보 마스킹(PII) 기능을 제공합니다." },
  { question: "데모 요청", answer: "문의 페이지에서 상담/데모를 요청하거나 하단 연락처로 메일을 보내주세요." },
];

const keywordAnswers: Record<string, string> = {
  agent: "Agent는 문서 검색·요약·Q&A를 제공하며 권한 연동과 민감정보 마스킹을 지원합니다.",
  damcp: "DAMCP는 데이터 통합/정합/거버넌스 파이프라인으로 소스 커넥터, 품질 규칙, 계보 추적을 제공합니다.",
  infostream: "InfoStream은 이벤트 스트림 기반 실시간 이상탐지와 알림 라우팅을 위한 솔루션입니다.",
  chronopredictor: "ChronoPredictor는 멀티호라이즌 시계열 예측으로 수요/재고/리스크를 예측합니다.",
  blazemotion: "BlazeMotion은 영상 인식 기반 품질검사와 안전 모니터링을 실시간으로 제공합니다.",
  travelmate: "TravelMate는 AI 컨시어지와 추천으로 여행 일정, 현장 케어, 파트너 연동을 제공합니다.",
  contact: "상담/데모는 문의 페이지에서 양식을 작성하거나 contact@gngmeta.ai 로 메일을 주세요.",
};

function matchAnswer(text: string) {
  const lower = text.toLowerCase();
  const matched = Object.entries(keywordAnswers).find(([key]) => lower.includes(key));
  if (matched) return matched[1];
  return "질문을 이해했어요. 곧 담당 컨설턴트가 후속 연락을 드립니다. 문의 페이지에서 세부 정보를 남겨주세요.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: "bot", text: "안녕하세요! GnG Meta AI 상담봇입니다. 무엇을 도와드릴까요?" },
  ]);

  const lastThree = useMemo(() => messages.slice(-3), [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMessage: ChatMessage = { from: "user", text: text.trim() };
    const botMessage: ChatMessage = { from: "bot", text: matchAnswer(text) };
    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open && (
        <div className="mb-3 w-80 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-md shadow-2xl shadow-blue-500/20">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
            <div className="font-semibold text-sm text-white/90">AI 상담봇</div>
            <button aria-label="Close chatbot" className="p-1 rounded-full hover:bg-white/10" onClick={() => setOpen(false)}>
              <X className="h-4 w-4 text-white/70" />
            </button>
          </div>
          <div className="max-h-64 overflow-y-auto space-y-2 px-4 py-3">
            {messages.map((msg, idx) => (
              <div key={`${msg.from}-${idx}`} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`rounded-xl px-3 py-2 text-sm leading-relaxed ${msg.from === "user" ? "bg-blue-600 text-white" : "bg-white/10 text-white/90 border border-white/10"}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="px-3 pb-3 space-y-2">
            <div className="flex flex-wrap gap-2">
              {faqPreset.slice(0, 3).map((item) => (
                <button
                  key={item.question}
                  className="text-xs px-3 py-2 rounded-full border border-white/10 text-white/80 hover:bg-white/10"
                  onClick={() => {
                    setMessages((prev) => [...prev, { from: "user", text: item.question }, { from: "bot", text: item.answer }]);
                  }}
                >
                  {item.question}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    sendMessage(input);
                  }
                }}
                placeholder="질문을 입력하세요"
                className="flex-1 rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
              />
              <button
                className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/30"
                onClick={() => sendMessage(input)}
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="text-[11px] text-white/50 leading-snug">
              최근 대화:{' '}
              {lastThree.map((m) => m.text).join(" · ")}
            </div>
          </div>
        </div>
      )}
      <button
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 text-white shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <MessageSquare className="h-5 w-5" />
        <span className="text-sm font-semibold">{open ? "창 닫기" : "AI 상담봇"}</span>
      </button>
    </div>
  );
}
