import { motion } from "framer-motion";
import { Activity, ArrowRight, BarChart3, Cpu, Globe, Layers, Shield, Zap } from "lucide-react";
import { Link, useLocation } from "../lib/react-router-dom-proxy";
import { useEffect } from "react";
import { products, solutions } from "../data/products";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = (location.state as { scrollTo?: string } | null)?.scrollTo;
    const hash = location.hash?.replace("#", "");
    const targetId = scrollTarget || hash;
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="space-y-24">
      <section id="hero" className="relative overflow-hidden px-6 pt-10 lg:pt-20 pb-16">
        <div className="absolute -left-10 -top-10 w-72 h-72 bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-10 w-96 h-96 bg-purple-600/10 blur-3xl" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs mb-4">
              AI·데이터 기반 B2B/B2G 플랫폼
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-heading leading-tight text-white">
              산업별 맞춤{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                AI 플랫폼 6종
              </span>
              으로 전환 속도를 높이세요
            </h1>
            <p className="text-lg text-gray-300 mt-6 max-w-2xl">
              GnG Meta는 데이터 통합부터 AI 에이전트, 예측·모니터링까지 단일 스택으로 제공하여 공공/금융/제조/교육/관광 산업의 디지털 전환을 가속화합니다.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/platform"
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg shadow-blue-500/30 flex items-center gap-2"
              >
                플랫폼 살펴보기 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition border border-white/15"
              >
                데모 요청
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-300">
              {[
                { label: "데이터 포인트", value: "10B+" },
                { label: "평균 응답 지연", value: "<10ms" },
                { label: "고객 만족도", value: "98%" },
                { label: "서비스 가용성", value: "99.9%" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
              <img src="/images/hero-platform.png" alt="GnG Platform dashboard" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                {[
                  { icon: <Activity className="h-5 w-5 text-green-400" />, label: "실시간 모니터링" },
                  { icon: <Cpu className="h-5 w-5 text-blue-400" />, label: "AI Processing" },
                  { icon: <Shield className="h-5 w-5 text-purple-400" />, label: "Governance" },
                ].map((chip) => (
                  <div key={chip.label} className="px-4 py-2 rounded-lg bg-black/60 backdrop-blur border border-white/10 text-sm text-white flex items-center gap-2">
                    {chip.icon}
                    {chip.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="platforms" className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-heading font-bold text-white">플랫폼 전체</h2>
              <p className="text-gray-400 mt-2">AI 에이전트, 데이터 파이프라인, 실시간 모니터링, 예측, 비전, 투어 서비스를 하나로.</p>
            </div>
            <Link to="/platform" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
              전체 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                to={`/platform/${product.id}`}
                key={product.id}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-400/50 transition relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-600/10 transition" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-blue-300">{product.category}</div>
                    <h3 className="text-xl font-semibold text-white mt-1">{product.name}</h3>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/60 group-hover:translate-x-1 transition" />
                </div>
                <p className="relative text-gray-300 text-sm mt-3 leading-relaxed">{product.tagline}</p>
                <div className="relative mt-4 flex flex-wrap gap-2 text-[11px] text-white/70">
                  {product.capabilities.slice(0, 2).map((cap) => (
                    <span key={cap} className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                      {cap}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="body-logic" className="px-6">
        <div className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold text-white">Body Logic</h3>
              <p className="text-gray-300 mt-3 mb-8">
                데이터 수집 → 로직/AI → 모니터링/액션을 단일 체인으로 구성하여 분석, 자동화, 피드백 루프를 빠르게 배포합니다.
              </p>
              <div className="space-y-4">
                {[
                  { title: "수집/정합", desc: "커넥터·CDC·품질 규칙·메타데이터 카탈로그", icon: <Layers className="h-5 w-5" /> },
                  { title: "로직/AI", desc: "LLM 에이전트, 예측/추천, 규칙·시뮬레이션", icon: <Cpu className="h-5 w-5" /> },
                  { title: "모니터링/액션", desc: "실시간 알림, 워크플로 자동화, KPI 보드", icon: <Globe className="h-5 w-5" /> },
                ].map((step) => (
                  <div key={step.title} className="rounded-2xl border border-white/10 bg-black/40 p-5 hover:bg-black/60 transition">
                    <div className="flex items-center gap-2 text-blue-300">
                      {step.icon}
                      <div className="text-sm font-semibold">{step.title}</div>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full min-h-[300px] lg:min-h-full">
              <img
                src="/images/feature-ai.png"
                alt="AI Logic Visualization"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent lg:bg-gradient-to-r lg:from-[#1a1a1a] lg:to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-heading font-bold text-white">산업별 솔루션</h3>
              <p className="text-gray-400 mt-2">금융 · 제조 · 공공/지자체 · 교육 도메인 맞춤 패키지</p>
            </div>
            <Link to="/solutions" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
              더 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((sol) => (
              <div key={sol.industry} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/30 transition">
                <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold">
                  <Globe className="h-5 w-5" />
                  {sol.industry}
                </div>
                <p className="text-white font-semibold mt-2">주요 Pain</p>
                <ul className="text-gray-300 text-sm mt-2 space-y-1 list-disc list-inside">
                  {sol.pains.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="text-white font-semibold mt-3">제공 가치</p>
                <ul className="text-gray-300 text-sm mt-2 space-y-1 list-disc list-inside">
                  {sol.offerings.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-heading font-bold text-white">검증된 성과</h3>
              <p className="text-gray-300 mt-2">데이터 온보딩 리드타임 단축, 예측 정확도 향상, 운영 자동화로 실제 KPI를 개선합니다.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "데이터 온보딩", value: "70% ↓", icon: <Layers className="h-5 w-5 text-blue-400" /> },
                { label: "예측 정확도", value: "15~30% ↑", icon: <BarChart3 className="h-5 w-5 text-cyan-400" /> },
                { label: "알림 대응 속도", value: "40% ↑", icon: <Zap className="h-5 w-5 text-yellow-400" /> },
                { label: "지원 티켓 감소", value: "30~50% ↓", icon: <Activity className="h-5 w-5 text-green-400" /> },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-gray-200">
                    {item.icon}
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden border border-white/10 relative h-64">
              <img
                src="/images/feature-twin.png"
                alt="Digital Twin Impact"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur border border-white/10 text-xs text-white">
                  <Shield className="h-3 w-3 text-green-400" />
                  실시간 리스크 모니터링
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-sm text-blue-300 font-semibold">CTA</div>
              <h4 className="text-2xl font-heading font-bold text-white mt-2">GnG Meta로 전환 속도를 높이세요</h4>
              <p className="text-gray-300 mt-3">상담을 요청하시면 도입 타임라인과 예상 KPI를 제시드립니다.</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link to="/contact" className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100">
                  상담/데모 요청
                </Link>
                <Link to="/platform" className="px-5 py-3 rounded-full border border-white/15 text-white hover:bg-white/10">
                  제품 상세 보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
