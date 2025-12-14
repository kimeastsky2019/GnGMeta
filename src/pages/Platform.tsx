import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Link } from "../lib/react-router-dom-proxy";
import { products } from "../data/products";

export function PlatformPage() {
  return (
    <div className="px-6 pb-16 space-y-10 max-w-7xl mx-auto">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-56 h-56 bg-blue-500/10 blur-3xl" />
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative">
          <div>
            <div className="text-sm text-blue-300 font-semibold">플랫폼 포트폴리오</div>
            <h1 className="text-3xl font-heading font-bold text-white mt-2">6개 AI 플랫폼으로 End-to-End 전환</h1>
            <p className="text-gray-300 mt-3 max-w-3xl">
              데이터 통합(DAMCP) → 실시간 모니터링(InfoStream) → 예측/시뮬레이션(ChronoPredictor) → 비전 인텔리전스(BlazeMotion) → AI 에이전트/케어(Agent/TravelMate)를 하나로 제공합니다.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100">
            상담/데모 요청 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="rounded-2xl border border-white/10 bg-black/50 p-6 flex flex-col">
            <div className="text-xs uppercase tracking-wide text-blue-300">{product.category}</div>
            <h2 className="text-xl font-semibold text-white mt-1">{product.name}</h2>
            <p className="text-gray-300 text-sm mt-2 flex-1">{product.tagline}</p>
            <ul className="text-gray-200 text-sm mt-4 space-y-2">
              {product.capabilities.slice(0, 3).map((cap) => (
                <li key={cap} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-white/70">핵심 활용도</span>
              <Link to={`/platform/${product.id}`} className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm">
                상세 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <div className="text-sm text-blue-200 font-semibold flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              통합 생태계 특징
            </div>
            <ul className="text-white text-sm mt-3 space-y-2">
              <li>데이터 통합/거버넌스: 카탈로그, 계보, 권한/감사, 품질 규칙</li>
              <li>실시간 연동: 스트림/배치 동시 지원, 알림 라우팅, 워크플로 자동화</li>
              <li>AI 자동화: LLM 에이전트, 예측·시뮬레이션, 비전 인식, 추천/케어봇</li>
            </ul>
          </div>
          <Link to="/contact" className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100">
            빠른 상담 예약
          </Link>
        </div>
      </div>
    </div>
  );
}
