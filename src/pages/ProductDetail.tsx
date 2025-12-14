import { ArrowLeft, ArrowRight, CheckCircle, ClipboardList, Sparkles } from "lucide-react";
import { Link, useNavigate, useParams } from "../lib/react-router-dom-proxy";
import { products } from "../data/products";

export function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-heading font-bold text-white">제품을 찾을 수 없습니다.</h1>
        <p className="text-gray-300 mt-3">URL을 확인하시거나 플랫폼 목록에서 다시 선택하세요.</p>
        <Link to="/platform" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-semibold mt-6">
          <ArrowLeft className="h-4 w-4" />
          플랫폼 목록으로
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-14 space-y-10">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
        aria-label="뒤로 가기"
      >
        <ArrowLeft className="h-4 w-4" />
        뒤로
      </button>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-72 h-72 bg-blue-500/15 blur-3xl" />
        <div className="relative">
          <div className="text-xs uppercase tracking-wide text-blue-300">{product.category}</div>
          <h1 className="text-3xl font-heading font-bold text-white mt-1">{product.name}</h1>
          <p className="text-gray-300 mt-3 max-w-3xl">{product.tagline}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
            <ClipboardList className="h-4 w-4" />
            {product.problem}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="주요 기능" items={product.capabilities} />
        <Card title="주요 시나리오" items={product.scenarios} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="도입 효과" items={product.impact} badge="KPI" />
        <Card title="기술 사양" items={product.techStack} badge="Tech" />
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div>
          <div className="text-sm text-blue-200 font-semibold flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            도입 준비
          </div>
          <h3 className="text-2xl font-heading font-bold text-white mt-2">{product.name} 도입 플랜을 받아보세요</h3>
          <p className="text-gray-100 mt-2">현재 환경 점검 → PoC → 확산 계획을 2주 이내에 제안드립니다.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100">
            상담/데모 요청
          </Link>
          <Link to="/platform" className="px-5 py-3 rounded-full border border-white/15 text-white hover:bg-white/10 flex items-center gap-2">
            다른 제품 보기 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function Card({ title, items, badge }: { title: string; items: string[]; badge?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {badge ? <span className="text-[11px] px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">{badge}</span> : null}
      </div>
      <ul className="text-gray-200 text-sm mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
