# GnG Platform Details – CodeWiki

## 서비스 한눈에 보기
- AI·데이터 기반 B2B/B2G 플랫폼 소개/문의 사이트. HashRouter 단일 페이지이며 주요 페이지(홈, 플랫폼 전체/제품별, 솔루션, 문의, NotFound)로 구성.
- 핵심 USP: 산업별 맞춤 AI 플랫폼 6종(Agent, DAMCP, InfoStream, ChronoPredictor, BlazeMotion, TravelMate) + 투어 서비스(GnG Tour). 각 제품 페이지는 문제 → 기능 → 시나리오/효과 → CTA 흐름.
- 홈 섹션: 히어로, 핵심 기능 카드, 플랫폼 타일, Body Logic(데이터 수집→로직→모니터링), 산업별 솔루션, 검증된 성과, CTA.
- 문의 페이지: Shadcn UI 폼으로 상담/데모 요청. 필수 동의 여부 검사 후 toast 알림 및 콘솔 로깅(백엔드 미연결). FAQ/연락처/오피스 이미지 포함.
- 공통 Layout: 상단 네비(섹션 스크롤 및 라우팅), 푸터, 모바일 메뉴, Chatbot 위젯 삽입.

## 기술 스택 / 실행
- Vite + React + TypeScript + Tailwind(shadcn UI), Framer Motion(애니메이션), React Query, HashRouter.
- 실행: `npm install` → `npm run dev`; 프로덕션 빌드 `npm run build`; 프리뷰 `npm run preview`; 린트 `npm run lint`.
- 라우트 메시징: `src/lib/react-router-dom-proxy.tsx`가 `react-router-dom`을 프록시해 라우트 목록/변경을 상위 window로 postMessage. dev 기본 ON, prod에서는 `VITE_ENABLE_ROUTE_MESSAGING=true` 필요.

## 정적 자산 / CDN
- 공개 자산은 `public/images`, `public/ai` 등에서 사용. 빌드 시 커스텀 Vite 플러그인 `cdnPrefixImages`가 `CDN_IMG_PREFIX` 환경변수 지정 시 이미지 경로를 CDN으로 치환(HTML/CSS/JSX src/srcset 모두).
- Port: 8080. HashRouter라 배포 시 서버 rewrite 부담이 적음(`/#/path`).

## UX 구성
- 컬러/토큰: `src/index.css`의 HSL 토큰 기반. Hero/CTA에 그라디언트, 카드 섹션에 라운드+보더+shadow 스타일.
- Chatbot: `src/components/Chatbot.tsx` 로컬 상태 기반 미니 챗 UI, FAQ 퀵버튼, 키워드 매칭 답변 프리셋. 실제 백엔드 연동 없음.
- 반응형: Tailwind breakpoints로 모바일/데스크톱 대응. `useIsMobile` 훅으로 뷰포트 감지(선택적 사용).

## 페이지 별 포인트
- `/` Home: 산업별 솔루션 리스트(금융/제조/교육/공공 등), 성과 KPI 카드(프로젝트 수/만족도 등), CTA 2종.
- `/platform`: 모든 플랫폼 카드 그리드 + 통합 생태계 특징(데이터 통합, 실시간 연동, AI 자동화) + CTA.
- 제품별 상세(`/platform/<product>`): 문제 정의, 기능, 활용 시나리오, 도입 효과, 기술 사양 등 정적 콘텐츠. (Agent 예시: 문서 검색/요약/Q&A, 벡터 DB/NLP, 보안/권한 연동.)
- `/solutions`: 솔루션 페이지(산업/도메인별) — 구조 유사, 정적 카피.
- `/contact`: 상담 폼, 연락처 카드, 추가 정보 카드(빠른 응답/무료 컨설팅/전담팀), FAQ 4개.

## 개발/운영 체크리스트
- 라우트 메시징이 필요한 삽입 환경(iframe 등)에서는 prod 빌드시 `VITE_ENABLE_ROUTE_MESSAGING=true`.
- CDN 사용 시 `CDN_IMG_PREFIX=https://cdn.example.com` 설정 후 `npm run build`.
- 린트/빌드로 릴리스 전 검증(`npm run lint && npm run build`). 자동 테스트는 없음(프런트). Supabase edge 함수 테스트는 `npm run test:edge-functions` 별도.
