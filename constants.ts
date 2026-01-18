import { 
  BrainCircuit, 
  Users, 
  Database, 
  FileInput, 
  Scale, 
  Zap, 
  RefreshCw, 
  Factory, 
  AlertTriangle, 
  BarChart3 
} from 'lucide-react';
import { ProblemCard, ProcessStep, Product, ComparisonItem } from './types';

export const PROBLEMS: ProblemCard[] = [
  {
    id: 1,
    title: "단순한 도구가 아닌 '동료'",
    description: "기존 AI는 사람이 직접 조작해야 하는 도구일 뿐입니다. 우리는 스스로 생각하고 움직이는 동료가 필요합니다.",
    icon: Users
  },
  {
    id: 2,
    title: "부분적 자동화의 한계",
    description: "업무의 파편적인 부분만 자동화되어, 결국 사람의 검토와 연결 작업이 필요한 비효율이 발생합니다.",
    icon: Zap
  },
  {
    id: 3,
    title: "자산화되지 않는 경험",
    description: "개인의 역량에 의존하여 AI 활용도가 달라지며, 업무 노하우가 조직의 자산으로 축적되지 않습니다.",
    icon: Database
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "데이터 입력",
    description: "ERP, MES, 이메일 등 다양한 소스의 비정형 데이터를 실시간으로 수집합니다.",
    icon: FileInput
  },
  {
    id: 2,
    title: "상황 판단",
    description: "수집된 정보를 바탕으로 AI가 문맥을 이해하고 최적의 대응 방안을 추론합니다.",
    icon: Scale
  },
  {
    id: 3,
    title: "업무 실행",
    description: "판단된 결과를 바탕으로 보고서 작성, 알림 발송, 시스템 제어 등을 수행합니다.",
    icon: BrainCircuit
  },
  {
    id: 4,
    title: "결과 학습",
    description: "실행 결과를 피드백 데이터로 활용하여 모델을 지속적으로 고도화합니다.",
    icon: RefreshCw
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "제조 공정 분석 에이전트",
    subtitle: "Manufacturing AI Agent",
    features: [
      "실시간 공정 데이터 모니터링",
      "병목 구간 자동 식별 및 리포팅",
      "생산 효율성 예측 시뮬레이션",
      "설비 유지보수 시점 알림"
    ],
    color: 'blue',
    icon: Factory
  },
  {
    id: 2,
    title: "품질 이상 감지 에이전트",
    subtitle: "Quality Control AI Agent",
    features: [
      "비전 AI 기반 불량 검출",
      "이상 패턴 실시간 알림",
      "불량 원인 자동 역추적",
      "품질 리포트 자동 생성"
    ],
    color: 'orange',
    icon: AlertTriangle
  },
  {
    id: 3,
    title: "경영 리포트 자동화 에이전트",
    subtitle: "Business Intelligence AI Agent",
    features: [
      "일일/주간 KPI 자동 집계",
      "자연어 기반 데이터 쿼리",
      "경쟁사 동향 뉴스 브리핑",
      "재무 리스크 조기 경보"
    ],
    color: 'purple',
    icon: BarChart3
  }
];

export const COMPARISONS: ComparisonItem[] = [
  {
    before: "사람이 일일이 데이터를 취합하고 엑셀로 정리",
    after: "AI가 실시간으로 데이터를 수집하고 대시보드 업데이트"
  },
  {
    before: "이상 발생 시 현장에서 뒤늦게 발견하고 대응",
    after: "AI가 징후를 사전 포착하고 담당자에게 즉시 알림"
  },
  {
    before: "퇴사 시 업무 노하우와 히스토리 소실",
    after: "모든 의사결정 과정이 AI 모델에 학습되어 자산화"
  }
];