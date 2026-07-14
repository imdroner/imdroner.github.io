import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarClock,
  Camera,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  CloudSun,
  Database,
  FileText,
  HelpCircle,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Radar,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';

const pageDescription =
  '드론 촬영, 산업 점검, 비행 승인, 산출물, 비용과 일정까지 아이엠드론 서비스 의뢰 전 자주 묻는 질문을 고객 관점으로 정리했습니다.';

export const metadata: Metadata = {
  alternates: {
    canonical: '/faq',
  },
  title: `자주 묻는 질문 | ${SITE_NAME}`,
  description: pageDescription,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/faq`,
    siteName: SITE_NAME,
    title: `자주 묻는 질문 | ${SITE_NAME}`,
    description: pageDescription,
  },
};

const quickStats = [
  { label: '상담 전 확인', value: '6개 영역', detail: '서비스·비용·안전·산출물까지' },
  { label: '검토 기준', value: '현장 조건', detail: '위치·공역·목적·일정 기준' },
  { label: '연결 CTA', value: '즉시 문의', detail: '전화·메일·상담 페이지로 이동' },
];

const categoryHighlights = [
  {
    id: 'before',
    icon: HelpCircle,
    title: '의뢰 전 확인사항',
    description: '처음 문의할 때 필요한 정보와 상담 흐름을 먼저 확인합니다.',
    points: ['현장 위치', '서비스 목적', '희망 일정'],
  },
  {
    id: 'safety',
    icon: ShieldCheck,
    title: '비행 승인·안전',
    description: '공역, 날씨, 현장 안전, 보험과 조종 자격 기준을 안내합니다.',
    points: ['비행 가능성', '허가 검토', '안전 계획'],
  },
  {
    id: 'service',
    icon: Camera,
    title: '촬영·점검 범위',
    description: '건설, 시설, 농업, 콘텐츠 현장에서 가능한 업무를 정리합니다.',
    points: ['항공촬영', '열화상 점검', 'NDVI 분석'],
  },
  {
    id: 'deliverable',
    icon: Database,
    title: '산출물·데이터',
    description: '사진, 영상, 리포트, 정사영상, 3D 모델 등 납품 형태를 확인합니다.',
    points: ['PDF 리포트', '원본 데이터', '지도·모델'],
  },
  {
    id: 'budget',
    icon: CalendarClock,
    title: '비용·일정',
    description: '견적 기준, 반복 촬영, 긴급 일정, 추가 비용 발생 조건을 설명합니다.',
    points: ['무료 상담', '맞춤 견적', '정기 운영'],
  },
  {
    id: 'after',
    icon: Wrench,
    title: '후속 활용·운영',
    description: '납품 이후 활용, 반복 모니터링, 장비 도입 상담까지 연결합니다.',
    points: ['후속 분석', '운영 컨설팅', '장비 도입'],
  },
];

const faqSections = [
  {
    id: 'before',
    eyebrow: 'Start Here',
    title: '서비스 의뢰 전 확인사항',
    description: '처음 문의하시는 고객이 가장 먼저 궁금해하는 내용을 정리했습니다.',
    icon: HelpCircle,
    faqs: [
      {
        question: '드론 서비스가 처음인데 무엇부터 준비하면 되나요?',
        answer:
          '현장 주소, 원하는 목적, 희망 일정, 필요한 결과물만 알려주셔도 상담을 시작할 수 있습니다. 목적이 명확하지 않아도 “현장을 기록하고 싶다”, “점검 리포트가 필요하다”, “홍보 영상이 필요하다”처럼 상황을 말씀해주시면 아이엠드론이 적합한 촬영·점검·분석 방식을 함께 정리합니다.',
        links: [{ label: '문의하기', href: '/contact' }],
      },
      {
        question: '아이엠드론은 어떤 서비스를 제공하나요?',
        answer:
          '항공촬영, 건설·건축 모니터링, 에너지 설비 점검, 드론 관제, 공공·해상안전관제, 스마트 농업·NDVI 분석, 수소 연료전지 관련 컨설팅, 홈페이지·미디어 콘텐츠 제작까지 드론 기반 데이터 서비스를 제공합니다.',
        links: [{ label: '서비스 전체 보기', href: '/services' }],
      },
      {
        question: '개인도 의뢰할 수 있나요?',
        answer:
          '가능합니다. 다만 아이엠드론은 기업, 공공기관, 건설·시설·농업·콘텐츠 현장처럼 산출물 활용 목적이 명확한 프로젝트를 중심으로 상담합니다. 개인 고객의 부동산, 행사, 관광 홍보 촬영도 현장 조건과 일정에 따라 검토할 수 있습니다.',
      },
      {
        question: '비슷한 사례를 먼저 볼 수 있나요?',
        answer:
          '가능합니다. 프로젝트 페이지에서 항공촬영, 3D 매핑, 시설 점검, 홍보 콘텐츠 등 주요 사례를 확인하실 수 있습니다. 상담 시 업종과 목적을 알려주시면 참고할 만한 사례 중심으로 설명드리겠습니다.',
        links: [{ label: '프로젝트 보기', href: '/projects' }],
      },
    ],
  },
  {
    id: 'safety',
    eyebrow: 'Flight & Safety',
    title: '비행 승인·안전·날씨',
    description: '드론 비행은 촬영 품질보다 먼저 안전과 허가 가능성을 검토해야 합니다.',
    icon: ShieldCheck,
    faqs: [
      {
        question: '드론 비행 승인은 누가 진행하나요?',
        answer:
          '비행 승인이 필요한 지역은 현장 위치, 고도, 촬영 목적, 일정에 따라 사전 검토가 필요합니다. 아이엠드론은 비행 가능 여부를 확인하고 필요한 승인 절차와 준비사항을 안내합니다. 공항 주변, 군사시설 인근, 통제구역 등은 일정 여유를 두고 문의해주시는 것이 좋습니다.',
      },
      {
        question: '날씨가 좋지 않으면 촬영은 어떻게 되나요?',
        answer:
          '비, 강풍, 짙은 안개, 시야 확보가 어려운 날씨에는 안전을 위해 일정을 조정합니다. 특히 점검·측량·정사영상 작업은 데이터 품질에도 영향을 받기 때문에 대체 일정을 협의해 안정적인 조건에서 진행합니다.',
      },
      {
        question: '현장 안전 관리는 어떻게 하나요?',
        answer:
          '비행 전 장애물, 작업자 동선, 차량 이동, 전선, 구조물, 이착륙 지점을 확인합니다. 필요 시 현장 담당자와 작업 구역을 분리하고, 비행 중에는 안전 거리와 비상 대응 절차를 유지합니다.',
      },
      {
        question: '보험과 조종 자격은 준비되어 있나요?',
        answer:
          '아이엠드론은 사업용 드론 운용에 필요한 조종 자격과 안전 기준을 기반으로 현장을 운영합니다. 프로젝트 성격에 따라 보험, 승인, 안전 계획 등 필요한 항목을 상담 단계에서 확인해드립니다.',
      },
    ],
  },
  {
    id: 'service',
    eyebrow: 'Service Scope',
    title: '촬영·점검 가능 대상',
    description: '현장 목적에 따라 항공촬영, 열화상, 3D, 관제, 농업 데이터를 조합합니다.',
    icon: Camera,
    faqs: [
      {
        question: '건설 현장 모니터링은 어떤 방식으로 진행되나요?',
        answer:
          '공사 구역을 주기적으로 촬영해 공정 변화, 자재 배치, 토공 범위, 위험 구간을 기록합니다. 목적에 따라 정사영상, 3D 모델, 포인트클라우드, 공정 리포트 형태로 납품할 수 있습니다.',
        links: [{ label: '건설 모니터링 보기', href: '/services/construction' }],
      },
      {
        question: '태양광·플랜트·고소 구조물 점검도 가능한가요?',
        answer:
          '가능합니다. 고해상도 RGB 이미지와 열화상 데이터를 활용해 태양광 패널 이상, 설비 발열, 접근이 어려운 구조물의 이상 후보를 확인합니다. 점검 목적과 설비 종류에 따라 촬영 방식과 리포트 항목을 설계합니다.',
        links: [{ label: '에너지 점검 보기', href: '/services/energy' }],
      },
      {
        question: '농업·골프장·필드 관리는 어떤 데이터를 받을 수 있나요?',
        answer:
          'NDVI 등 식생지수 기반으로 작물·잔디 상태를 구역별로 확인할 수 있습니다. 생육 불균일, 스트레스 후보, 관리 우선순위 등을 지도와 표 형태로 정리해 의사결정에 활용할 수 있습니다.',
        links: [{ label: '스마트 농업 보기', href: '/services/smart-agri' }],
      },
      {
        question: '홍보 영상과 홈페이지 콘텐츠 제작도 함께 가능한가요?',
        answer:
          '가능합니다. 드론 촬영 결과물을 단순 납품으로 끝내지 않고 홈페이지, 회사소개 영상, SNS 콘텐츠, 프로젝트 소개자료로 연결할 수 있습니다. 촬영 기획부터 문구·이미지 구성까지 목적에 맞게 제안합니다.',
        links: [{ label: '콘텐츠 제작 보기', href: '/services/contents' }],
      },
    ],
  },
  {
    id: 'deliverable',
    eyebrow: 'Data & Reports',
    title: '산출물·리포트·데이터 형식',
    description: '촬영 파일보다 중요한 것은 고객 업무에 바로 쓸 수 있는 결과물입니다.',
    icon: FileText,
    faqs: [
      {
        question: '어떤 형태로 결과물을 받을 수 있나요?',
        answer:
          '프로젝트 목적에 따라 고해상도 사진, 편집 영상, 숏폼 클립, 열화상 이미지, PDF 점검 리포트, 정사영상, 3D 모델, 포인트클라우드, 원본 데이터 등을 납품할 수 있습니다. 상담 단계에서 활용 목적에 맞는 포맷을 먼저 정합니다.',
      },
      {
        question: '원본 파일도 제공되나요?',
        answer:
          '원본 제공 여부는 계약 범위에 따라 조정할 수 있습니다. 일반 홍보 촬영은 편집본 중심, 점검·분석 프로젝트는 원본 이미지와 분석 파일이 필요한 경우가 많으므로 납품 범위를 사전에 명확히 안내합니다.',
      },
      {
        question: '정사영상과 3D 모델은 일반 사진과 무엇이 다른가요?',
        answer:
          '일반 사진은 시각 확인에 적합하고, 정사영상은 지도처럼 왜곡을 보정해 면적·거리 확인에 활용합니다. 3D 모델과 포인트클라우드는 구조물, 지형, 토공량, 공간 변화를 입체적으로 검토할 때 유용합니다.',
      },
      {
        question: '보고서에는 어떤 내용이 포함되나요?',
        answer:
          '점검 대상, 촬영 조건, 주요 이미지, 이상 후보, 위치 정보, 권고 조치, 후속 확인 항목 등을 목적에 맞게 구성합니다. 건설 현장은 공정 비교, 시설 점검은 이상 후보와 위치, 농업은 구역별 상태와 관리 우선순위를 중심으로 정리합니다.',
      },
    ],
  },
  {
    id: 'budget',
    eyebrow: 'Budget & Schedule',
    title: '비용·일정·반복 촬영',
    description: '드론 프로젝트 비용은 촬영 시간보다 현장 조건과 산출물 범위에 더 크게 영향을 받습니다.',
    icon: CalendarClock,
    faqs: [
      {
        question: '견적은 어떤 기준으로 산정되나요?',
        answer:
          '현장 위치, 작업 범위, 비행 횟수, 장비 구성, 인력, 승인 필요 여부, 후처리 난이도, 납품 산출물에 따라 달라집니다. 초기 상담은 무료이며, 필요한 정보를 확인한 뒤 실행 가능한 범위와 비용을 안내합니다.',
      },
      {
        question: '상담과 견적 요청은 무료인가요?',
        answer:
          '네. 기본 상담과 견적 검토는 무료입니다. 다만 상세 현장 답사, 전문 분석 설계, 장기 운영 컨설팅 등 별도 업무가 필요한 경우에는 사전에 비용 여부를 안내합니다.',
      },
      {
        question: '촬영부터 납품까지 기간은 얼마나 걸리나요?',
        answer:
          '단순 사진 촬영은 비교적 빠르게 납품할 수 있지만, 편집 영상, 정사영상, 3D 모델, 열화상 분석 리포트는 후처리 시간이 필요합니다. 긴급 일정은 가능 여부를 먼저 확인하고, 품질과 안전을 해치지 않는 범위에서 조정합니다.',
      },
      {
        question: '정기 모니터링이나 장기 계약도 가능한가요?',
        answer:
          '가능합니다. 건설 현장, 시설 점검, 농업·골프장 관리처럼 변화 추적이 중요한 프로젝트는 월간·분기·시즌 단위로 반복 촬영을 설계할 수 있습니다. 반복 촬영은 동일 기준으로 비교 가능한 데이터를 축적하는 장점이 있습니다.',
      },
    ],
  },
  {
    id: 'after',
    eyebrow: 'Next Step',
    title: '후속 활용·장비 도입·운영 상담',
    description: '한 번의 촬영 이후에도 데이터 활용과 운영 체계까지 이어질 수 있습니다.',
    icon: Wrench,
    faqs: [
      {
        question: '촬영 후 결과물을 어떻게 활용하면 좋을지 상담할 수 있나요?',
        answer:
          '가능합니다. 결과물을 발주처 보고, 내부 의사결정, 홍보 콘텐츠, 유지관리 기록, 다음 촬영 기준으로 활용할 수 있도록 후속 활용 방향을 함께 제안합니다.',
      },
      {
        question: '드론 장비 구매나 운용 체계 도입도 상담할 수 있나요?',
        answer:
          '가능합니다. 장비 자체보다 현장 목적, 운용 인력, 센서, 소프트웨어, 교육, 유지관리 조건을 함께 봐야 합니다. 아이엠드론은 필요한 경우 서비스 수행과 장비 도입 검토를 함께 연결해드립니다.',
        links: [{ label: '장비·솔루션 보기', href: '/products' }],
      },
      {
        question: '드론 관제나 자동화 운영은 어떤 현장에 적합한가요?',
        answer:
          '항만, 공공시설, 넓은 산업단지, 반복 순찰이 필요한 시설, 위험 구역 모니터링처럼 정기적인 확인이 필요한 현장에 적합합니다. 통신 환경, 비행 가능 구역, 운영 시간, 보안 조건을 먼저 검토합니다.',
        links: [{ label: '드론 관제 보기', href: '/services/control' }],
      },
      {
        question: 'FAQ에 없는 질문은 어디로 문의하면 되나요?',
        answer:
          '전화 또는 이메일로 현장 정보를 보내주시면 빠르게 확인하겠습니다. 아직 서비스 범위가 정해지지 않은 경우에도 목적과 장소만 알려주시면 적합한 진행 방향을 안내합니다.',
        links: [{ label: '상담 문의하기', href: '/contact' }],
      },
    ],
  },
];

const serviceLinks = [
  { label: '항공촬영', href: '/services/aerial', icon: Camera },
  { label: '건설 모니터링', href: '/services/construction', icon: Layers3 },
  { label: '에너지 점검', href: '/services/energy', icon: BarChart3 },
  { label: '드론 관제', href: '/services/control', icon: Radar },
  { label: '프로젝트 사례', href: '/projects', icon: ClipboardCheck },
  { label: '문의하기', href: '/contact', icon: Phone },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_12%,rgba(14,165,233,0.26),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(56,189,248,0.14),transparent_28%),linear-gradient(135deg,#020617,#0f172a_55%,#020617)]" />
        <div className="absolute inset-0 -z-10 bg-[url('/images/services/aerial-hero.jpg')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/40 via-slate-950/75 to-slate-950" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              IMDRONE FAQ Desk
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">드론 서비스 문의 전</span>
              <span className="mt-2 block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                꼭 확인할 질문들
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              촬영 가능 여부, 비행 승인, 비용, 일정, 산출물까지 고객이 가장 자주 묻는 내용을 현장 의사결정 기준으로 정리했습니다.
              답변을 확인한 뒤 바로 상담으로 이어질 수 있도록 관련 서비스와 문의 경로를 함께 안내합니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-sky-400 px-6 text-slate-950 hover:bg-sky-300">
                <Link href="/contact">
                  질문 남기기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
                <Link href="/services">
                  서비스 먼저 보기
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-sky-950/30 backdrop-blur">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Quick Guide</p>
                <h2 className="mt-2 text-2xl font-bold text-white">상담 전 빠른 체크</h2>
              </div>
              <BadgeCheck className="h-10 w-10 text-sky-300" />
            </div>
            <div className="space-y-4">
              {quickStats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/55 p-5">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="mt-1 text-2xl font-bold text-white">{item.value}</p>
                    </div>
                    <CheckCircle2 className="mt-1 h-5 w-5 text-sky-300" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Question Map"
            title="궁금한 내용을 목적별로 먼저 찾으세요"
            description="드론 프로젝트는 분야보다 목적이 먼저입니다. 문의 전 가장 가까운 상황을 선택하면 필요한 답변과 관련 서비스로 바로 이동할 수 있습니다."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categoryHighlights.map((category) => {
              const Icon = category.icon;
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="group rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-sky-400/10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/12 text-sky-300 ring-1 ring-sky-300/20 transition group-hover:bg-sky-300 group-hover:text-slate-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="mt-3 min-h-14 text-sm leading-6 text-slate-300">{category.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.points.map((point) => (
                      <span key={point} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200">
                        {point}
                      </span>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.16),transparent_36%)]" />
        <div className="mx-auto max-w-5xl space-y-10">
          {faqSections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-slate-950/30 backdrop-blur sm:p-8">
                <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">{section.eyebrow}</p>
                    <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{section.title}</h2>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">{section.description}</p>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-400/12 text-sky-300 ring-1 ring-sky-300/20">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {section.faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`${section.id}-${index}`}
                      className="rounded-2xl border border-white/10 bg-slate-950/50 px-5 data-[state=open]:border-sky-300/40 data-[state=open]:bg-slate-900/85"
                    >
                      <AccordionTrigger className="gap-4 py-5 text-left text-base font-semibold text-white hover:no-underline sm:text-lg">
                        <span className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-400/15 text-xs font-bold text-sky-200 ring-1 ring-sky-300/20">
                            Q
                          </span>
                          <span>{faq.question}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 pl-0 text-base leading-7 text-slate-300 sm:pl-9">
                        <p>{faq.answer}</p>
                        {faq.links ? (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {faq.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="inline-flex items-center rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1.5 text-sm font-medium text-sky-100 transition hover:border-sky-300/50 hover:bg-sky-400/20"
                              >
                                {link.label}
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Related Pages</p>
              <h2 className="mt-3 text-3xl font-bold text-white">답변을 확인했다면 다음 단계로 이동하세요</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                FAQ는 상담 전 불확실성을 줄이기 위한 안내입니다. 구체적인 현장 조건은 서비스 페이지와 사례를 확인한 뒤 문의해주시면 더 빠르게 검토할 수 있습니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {serviceLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-sky-300/40 hover:bg-sky-400/10"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300 ring-1 ring-sky-300/20">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-semibold text-white">{item.label}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-500 transition group-hover:translate-x-1 group-hover:text-sky-300" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-sky-950/25 to-transparent" />
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-sky-300/20 bg-gradient-to-br from-sky-500/16 via-slate-900 to-slate-950 p-8 text-center shadow-2xl shadow-sky-950/40 sm:p-12">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-300 text-slate-950">
            <CloudSun className="h-7 w-7" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">현장 조건은 상담에서 바로 확인해드리겠습니다</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
            주소, 목적, 일정, 필요한 산출물을 알려주시면 비행 가능성, 장비 구성, 예상 일정과 견적 범위를 빠르게 정리해드립니다.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-sky-300 px-7 text-slate-950 hover:bg-sky-200">
              <Link href="/contact">
                상담 문의하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white">
              <a href="tel:061-920-9297">
                <Phone className="mr-2 h-5 w-5" />
                061-920-9297
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white">
              <a href="mailto:imdrone.site@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                이메일 문의
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <MapPin className="h-4 w-4 text-sky-300" />
              현장 위치 확인
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <ShieldCheck className="h-4 w-4 text-sky-300" />
              비행 가능성 검토
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <FileText className="h-4 w-4 text-sky-300" />
              산출물 범위 제안
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
