import { useState } from "react";
import type { ReactNode } from "react";
import { Link, NavLink, useLocation } from "../lib/react-router-dom-proxy";
import { Menu, X } from "lucide-react";
import { Chatbot } from "./Chatbot";

type LayoutProps = {
  children: ReactNode;
};

const navItems = [
  { label: "홈", to: "/" },
  { label: "플랫폼", to: "/platform" },
  { label: "솔루션", to: "/solutions" },
  { label: "문의", to: "/contact" },
];

export function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b1021] to-black text-foreground">
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg border-b border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold font-heading bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            GnG Meta
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-200">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={`transition hover:text-white ${isActive(item.to) ? "text-white" : "text-gray-300"}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition shadow-md shadow-white/20"
            >
              데모 요청
            </Link>
          </nav>
          <button
            className="md:hidden p-2 rounded-lg border border-white/10 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/5 bg-black/70 backdrop-blur-md">
            <div className="px-6 py-4 space-y-3 text-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block py-2"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                데모 요청
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">{children}</main>

      <footer className="border-t border-white/10 bg-black/60 py-10 px-6 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6 text-sm text-gray-300">
          <div>
            <div className="text-lg font-bold font-heading bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              GnG Meta
            </div>
            <p className="text-gray-400 mt-2 max-w-md">AI·데이터 기반 플랫폼으로 운영 자동화, 예측, 실시간 모니터링, 고객 경험 혁신을 제공합니다.</p>
          </div>
          <div className="space-y-2">
            <div className="text-white font-semibold">Contact</div>
            <p>info@gngmeta.com</p>
            <p>경기도 성남시 분당구 판교로289번길 20 2동 5층</p>
            <p>사업자등록번호: 625-88-02407</p>
          </div>
          <div className="space-y-2">
            <div className="text-white font-semibold">Links</div>
            <Link to="/platform" className="block hover:text-white">플랫폼</Link>
            <Link to="/solutions" className="block hover:text-white">솔루션</Link>
            <Link to="/contact" className="block hover:text-white">문의</Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-0 text-xs text-gray-500 mt-6">© 2025 GnG Meta. All rights reserved.</div>
      </footer>

      <Chatbot />
    </div>
  );
}
