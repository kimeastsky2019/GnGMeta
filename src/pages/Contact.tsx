import { useMemo, useState } from "react";
import { Link } from "../lib/react-router-dom-proxy";
import { Check, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  message: string;
  agree: boolean;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "Agent",
  message: "",
  agree: false,
};

const CONTACT_ENDPOINT = "https://script.google.com/macros/s/AKfycbyA1uPLOeyWB0wLgPgd0AvdM97PNs_o_glaENbTnIxDBFxft2IJWCFYhjfOx7yCUcSDmw/exec";

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const faqList = useMemo(
    () => [
      { q: "도입 기간은 얼마나 걸리나요?", a: "표준 PoC는 2~4주, 확산 단계는 범위에 따라 2~8주 내외입니다." },
      { q: "온프레미스 배포가 가능한가요?", a: "네. 보안 요구사항에 맞춰 온프레미스/프라이빗 클라우드/하이브리드 모두 지원합니다." },
      { q: "데이터 보안/권한은 어떻게 관리하나요?", a: "역할 기반 권한, 데이터 계보, 감사 로그, PII 마스킹을 기본 제공합니다." },
      { q: "기존 시스템 연동이 가능한가요?", a: "ERP/CRM/DB/메시징/스토리지 등 주요 커넥터를 제공하며 커스텀 커넥터도 제작합니다." },
    ],
    [],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.company || !form.email || !form.agree) {
      setError("이름, 회사, 이메일, 개인정보 동의는 필수입니다.");
      return;
    }
    setError(null);
    setToast(null);
    setSubmitting(true);
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      setToast("상담/데모 요청이 접수되었습니다. 곧 연락드리겠습니다.");
      setForm(initialState);
      setTimeout(() => setToast(null), 4000);
    } catch (err) {
      console.error("Contact submission failed", err);
      setError("제출에 실패했습니다. 잠시 후 다시 시도하거나 이메일로 연락주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="px-6 pb-16 max-w-7xl mx-auto space-y-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-sm text-blue-300 font-semibold">Contact</div>
        <h1 className="text-3xl font-heading font-bold text-white mt-2">상담/데모를 요청하세요</h1>
        <p className="text-gray-300 mt-3">필수 동의를 포함해 양식을 작성하면 담당 컨설턴트가 24시간 내 회신합니다.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-2xl border border-white/10 bg-black/60 p-6 space-y-4">
          {error && <div className="rounded-lg border border-red-500/40 bg-red-500/10 text-red-100 px-3 py-2 text-sm">{error}</div>}
          <div className="grid md:grid-cols-2 gap-4">
            <Input label="이름 *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Input label="회사/기관명 *" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input label="이메일 *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <Input label="연락처" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-200">관심 제품</label>
              <select
                value={form.product}
                onChange={(e) => setForm({ ...form, product: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/60"
              >
                {["Agent", "DAMCP", "InfoStream", "ChronoPredictor", "BlazeMotion", "TravelMate", "상담 필요"].map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-200">요청 유형</label>
              <select
                value={form.message.startsWith("[데모]") ? "데모" : form.message.startsWith("[컨설팅]") ? "컨설팅" : "일반"}
                onChange={(e) => {
                  const prefix = e.target.value === "데모" ? "[데모] " : e.target.value === "컨설팅" ? "[컨설팅] " : "";
                  setForm((prev) => ({ ...prev, message: `${prefix}${prev.message.replace(/^\[.*?\]\s?/, "")}`.trimStart() }));
                }}
                className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/60"
              >
                <option value="데모">데모 요청</option>
                <option value="컨설팅">컨설팅/PoC 상담</option>
                <option value="일반">기타 문의</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-200">배경/요청 사항</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/60"
              placeholder="현 과제, 기대 KPI, 일정 등을 알려주세요."
            />
          </div>
          <label className="flex items-start gap-2 text-sm text-gray-200">
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-white/20 bg-black/60"
            />
            <span>개인정보 수집 및 이용에 동의합니다. *</span>
          </label>
          <button
            type="submit"
            disabled={submitting}
            className="w-full md:w-auto px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "전송 중..." : "상담 요청 보내기"}
          </button>
        </form>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-black/50 p-6 space-y-3">
            <div className="text-white font-semibold flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-400" />
              연락처
            </div>
            <p className="text-gray-300 text-sm">info@gngmeta.com</p>
            <div className="text-gray-300 text-sm flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              경기도 성남시 분당구 판교로289번길 20 2동 5층
            </div>
            <div className="text-gray-300 text-sm flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-400" />
              사업자등록번호 625-88-02407
            </div>
            <Link to="/platform" className="text-blue-300 text-sm hover:text-blue-200">
              제품 살펴보기
            </Link>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1529429617124-aee1f1650a5c?auto=format&fit=crop&w=800&q=80"
                alt="GnG Meta office"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="text-white font-semibold flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-blue-400" />
              FAQ
            </div>
            <div className="space-y-3">
              {faqList.map((item) => (
                <details key={item.q} className="rounded-xl border border-white/10 bg-black/40 p-3">
                  <summary className="cursor-pointer text-sm text-white">{item.q}</summary>
                  <p className="text-gray-300 text-sm mt-2">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-2 rounded-full bg-white text-black px-4 py-3 shadow-xl">
            <Check className="h-4 w-4" />
            <span className="text-sm font-semibold">{toast}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-200">{label}</label>
      <input
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/60"
      />
    </div>
  );
}
