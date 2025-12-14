export type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  problem: string;
  capabilities: string[];
  scenarios: string[];
  impact: string[];
  techStack: string[];
};

export const products: Product[] = [
  {
    id: "agent",
    name: "Agent",
    category: "LLM Agent",
    tagline: "문서 검색·요약·질답을 보안 권한까지 연동한 맞춤형 AI 에이전트",
    problem: "사내 자료는 많지만 검색 품질이 낮고 권한 통제가 어려워 업무 속도가 느려집니다.",
    capabilities: [
      "문서 기반 검색 + 요약 + 인용 근거 제공",
      "역할·조직 기반 권한 연동 및 민감정보 마스킹",
      "Slack/Teams/웹 위젯으로 손쉬운 배포",
      "FAQ/정책/메뉴얼 자동 업데이트 파이프라인",
    ],
    scenarios: [
      "CS 팀: 정책·약관 변경 시 즉시 반영된 답변으로 응대 리드타임 단축",
      "영업팀: 제안서 소재를 신속히 검색하고 요약본으로 회의 준비",
      "경영지원: 사규/프로세스 질답 자동화로 반복 문의 70% 감소",
    ],
    impact: [
      "지식 탐색 시간 60% 절감",
      "민감정보 오남용 사고 0건 유지",
      "CS/내부지원 티켓 30~50% 감소",
    ],
    techStack: [
      "Vector DB + Hybrid Search",
      "Retrieval-augmented Generation",
      "Role-based Access Control",
      "PII Detection & Masking",
    ],
  },
  {
    id: "damcp",
    name: "DAMCP",
    category: "Data Activation",
    tagline: "데이터 수집·정합·거버넌스를 자동화하는 통합 데이터 파이프라인",
    problem: "산재한 데이터를 모으고 품질을 맞추는 데 시간이 소요되어 분석/AI 적용이 지연됩니다.",
    capabilities: [
      "다양한 소스(ERP/CRM/IoT/SaaS) 커넥터와 배치/스트리밍 동시 지원",
      "데이터 품질 규칙, 표준 스키마, 마스터 데이터 관리",
      "데이터 카탈로그 + 계보 추적, 권한/감사 로그 자동화",
      "ML 피처 스토어와 실시간 서빙 파이프라인",
    ],
    scenarios: [
      "제조: 설비/공정/재고 데이터 통합으로 실시간 생산 현황 가시화",
      "금융: 거래/고객/리스크 데이터를 정합해 AML·신용모델 입력 개선",
      "공공: 분산된 DB를 메타데이터 기반으로 표준화하고 민원 포털 연계",
    ],
    impact: [
      "데이터 온보딩 리드타임 70% 단축",
      "품질 검증 자동화로 클렌징 비용 절감",
      "데이터 거버넌스 준수율 향상",
    ],
    techStack: [
      "Change Data Capture & Stream Processing",
      "Schema Registry & Data Quality Rules",
      "Feature Store with Online/Offline Sync",
      "Access Audit & Lineage Tracking",
    ],
  },
  {
    id: "infostream",
    name: "InfoStream",
    category: "Real-time Insight",
    tagline: "초실시간 이벤트 스트림으로 이상 탐지와 알림을 자동화",
    problem: "모니터링 알림이 늦거나 오탐이 많아 장애 대응이 지연됩니다.",
    capabilities: [
      "이벤트 스트림 수집/필터링/집계 파이프라인",
      "시계열 이상탐지, 임계치 및 패턴 기반 규칙",
      "Slack/Email/SMS/대시보드 알림 라우팅",
      "재현·시뮬레이션용 리플레이 기능",
    ],
    scenarios: [
      "IT 운영: 서비스 지연·오류 패턴을 조기 감지하고 담당자에게 라우팅",
      "물류: 배송 지연/온도 이상을 실시간 감지해 고객 통보 및 대체 경로 안내",
      "금융: 이상 결제 패턴 탐지 후 자동 한도 제한 및 인증 요청",
    ],
    impact: ["장애 감지→조치 리드타임 40% 단축", "오탐/미탐 감소로 알림 피로도 감소", "서비스 가용성 향상"],
    techStack: ["Streaming ETL", "Anomaly Detection Models", "Rule Engine", "Alert Routing & Escalation"],
  },
  {
    id: "chronopredictor",
    name: "ChronoPredictor",
    category: "Forecasting",
    tagline: "멀티호라이즌 시계열 예측으로 수요·재고·리스크를 선제 대응",
    problem: "불안정한 수요와 외부 변수로 예측 정확도가 낮아 재고/비용이 증가합니다.",
    capabilities: [
      "멀티변수 시계열 모델과 AutoML 피쳐링",
      "캘린더/날씨/프로모션 등 외부 특성 자동 반영",
      "시나리오 기반 예측(보수/기준/공격적)",
      "대시보드와 API 서빙으로 의사결정 연결",
    ],
    scenarios: [
      "리테일: 점포별 수요 예측으로 발주 최적화",
      "제조: 자재/설비 부하 예측으로 계획정비 스케줄링",
      "금융: 리스크 지표 예측으로 한도/담보 정책 조정",
    ],
    impact: ["예측 정확도 상승으로 재고 15~30% 절감", "계획 오차 감소로 납기 준수율 향상", "수요 급증 시 대응 속도 향상"],
    techStack: ["Temporal Fusion/Prophet/LightGBM", "Feature Store", "Scenario Simulation", "API & BI Connectors"],
  },
  {
    id: "blazemotion",
    name: "BlazeMotion",
    category: "Vision Intelligence",
    tagline: "영상 인식 기반 품질검사·안전 모니터링을 실시간으로 수행",
    problem: "수작업 검사와 CCTV 모니터링은 누락이 많고 비용이 큽니다.",
    capabilities: [
      "객체/행동 감지 모델과 영역별 정책 설정",
      "멀티카메라 스트림 실시간 분석",
      "이벤트 기반 알림과 리포트 자동 생성",
      "온프레미스/엣지 배포 지원",
    ],
    scenarios: [
      "제조: 불량/이상 동작 감지로 검사 자동화",
      "건설/산업안전: 위험구역 접근·보호구 미착용 탐지",
      "리테일: 매장 동선 분석과 이상 행동 감지",
    ],
    impact: ["검사 누락/오탐 감소", "안전사고 선제 예방", "모니터링 인력 비용 절감"],
    techStack: ["Real-time Video Inference", "Edge Deployment", "Geo-fencing & Policy Engine", "Alerting & Reporting"],
  },
  {
    id: "travelmate",
    name: "TravelMate",
    category: "AI Tour Service",
    tagline: "여정 기획부터 현장 케어까지 AI 기반 맞춤형 투어 서비스",
    problem: "여행객 성향과 현장 상황에 맞춘 실시간 케어가 어렵습니다.",
    capabilities: [
      "여행 성향/예산/동선 기반 일정 자동 생성",
      "현지 이벤트·날씨·혼잡도 실시간 반영",
      "AI 컨시어지 챗/콜 케어, 번역·안전 알림 제공",
      "파트너 제휴 상품 추천 및 결제 연동",
    ],
    scenarios: [
      "단체 관광: 가이드가 AI 케어봇으로 Q&A와 일정 관리",
      "프리미엄 개별여행: 취향 기반 추천과 긴급 지원",
      "지자체/DMO: 지역 축제·관광지 혼잡도 기반 안내",
    ],
    impact: ["여행 중 만족도·재구매율 상승", "가이드/컨설턴트 업무 부담 감소", "파트너 매출 증대"],
    techStack: ["Recommender System", "Real-time Context Fusion", "Multilingual LLM Concierge", "Booking/Payment APIs"],
  },
];

export const solutions = [
  {
    industry: "금융",
    pains: ["AML·이상거래 탐지 품질 낮음", "모델 입력 데이터 정합성 문제", "고객 상담 처리 지연"],
    offerings: ["거래/리스크 데이터 통합 + 실시간 모니터링", "Agent 기반 상담/심사 Q&A 자동화", "ChronoPredictor로 리스크/수요 예측"],
  },
  {
    industry: "제조",
    pains: ["설비/공정 데이터 단절", "불량 검출 누락", "예방정비 계획 부정확"],
    offerings: ["DAMCP로 공정/설비 데이터 표준화", "BlazeMotion으로 품질 검사/안전 모니터링", "ChronoPredictor로 부하/수요 예측"],
  },
  {
    industry: "공공/지자체",
    pains: ["분산 DB 표준화 어려움", "민원/FAQ 대응 지연", "관광/행사 수요 예측 부재"],
    offerings: ["데이터 카탈로그·거버넌스 정비", "Agent로 민원·정책 Q&A 자동화", "TravelMate로 관광/행사 안내 및 케어"],
  },
  {
    industry: "교육",
    pains: ["학습자료 검색 품질 낮음", "모니터링 리소스 부족", "개인화 학습 경로 미흡"],
    offerings: ["Agent로 자료 질답/요약", "InfoStream으로 학습 서비스 모니터링", "개인화 추천/케어봇으로 학습 경험 개선"],
  },
];

export const routeList = [
  "/",
  "/platform",
  "/platform/:productId",
  "/solutions",
  "/contact",
  "*",
];
