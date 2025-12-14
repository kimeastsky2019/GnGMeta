import { Link } from "../lib/react-router-dom-proxy";

export function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center space-y-4">
      <div className="text-sm text-blue-300 font-semibold">404</div>
      <h1 className="text-3xl font-heading font-bold text-white">페이지를 찾을 수 없습니다.</h1>
      <p className="text-gray-300">주소가 잘못되었거나 이동된 페이지입니다. 홈 또는 플랫폼에서 다시 시작하세요.</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/" className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100">
          홈으로 이동
        </Link>
        <Link to="/platform" className="px-5 py-3 rounded-full border border-white/15 text-white hover:bg-white/10">
          플랫폼 보기
        </Link>
      </div>
    </div>
  );
}
