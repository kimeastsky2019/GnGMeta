import { ArrowLeftRight, Globe2, Layers, Sparkles } from "lucide-react";
import { Link } from "../lib/react-router-dom-proxy";
import { solutions } from "../data/products";

export function SolutionsPage() {
  return (
    <div className="px-6 pb-16 max-w-7xl mx-auto space-y-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-sm text-blue-300 font-semibold">산업별 솔루션</div>
        <h1 className="text-3xl font-heading font-bold text-white mt-2">산업 도메인 맞춤 패키지</h1>
        <p className="text-gray-300 mt-3">
          데이터 표준화, 실시간 모니터링, AI 케어봇/예측을 산업 특성에 맞춰 패키지로 제공합니다. 현업 사용 사례와 KPI 중심으로 설계되었습니다.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {solutions.map((sol) => (
          <div key={sol.industry} className="rounded-2xl border border-white/10 bg-black/50 p-6 space-y-3">
            <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold">
              <Globe2 className="h-5 w-5" />
              {sol.industry}
            </div>
            <div className="text-white font-semibold flex items-center gap-2">
              <ArrowLeftRight className="h-4 w-4 text-cyan-400" />
              Pain Points
            </div>
            <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
              {sol.pains.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="text-white font-semibold flex items-center gap-2 mt-2">
              <Layers className="h-4 w-4 text-blue-400" />
              Offerings
            </div>
            <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
              {sol.offerings.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div>
          <div className="text-sm text-blue-200 font-semibold flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            산업별 PoC
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mt-2">한 달 내 PoC 후 확산 플랜 제안</h3>
          <p className="text-gray-100 mt-2">현장 데이터 수집/정합, AI/모니터링 워크플로, KPI 정의까지 지원합니다.</p>
        </div>
        <Link to="/contact" className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100">
          상담/데모 요청
        </Link>
      </div>
    </div>
  );
}
