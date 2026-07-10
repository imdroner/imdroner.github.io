import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import {
  AlertTriangle,
  Anchor,
  ArrowRight,
  BellRing,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Flame,
  Landmark,
  MapPinned,
  MonitorPlay,
  Phone,
  Radar,
  Route,
  Satellite,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
} from 'lucide-react';

const service = services.find((item) => item.id === 'public-safety')!;

const pageDescription =
  '공공 인프라, 항만·연안, 해상 안전, 재난 대응 현장을 드론 영상·위치·점검 데이터로 확인하고 의사결정 가능한 리포트로 정리하는 아이엠드론의 공공·해상안전관제 서비스입니다.';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/public-safety',
  },
  title: `${service.title} | ${SITE_NAME}`,
  description: pageDescription,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/services/public-safety`,
    siteName: SITE_NAME,
    title: `${service.title} | ${SITE_NAME}`,
    description: pageDescription,
    images: [{ url: `${SITE_URL}${service.image}`, width: 1200, height: 630 }],
  },
};

const heroStats = [
  { label: 'Public Infra', value: '공공 인프라 점검', detail: '교량·제방·사면·문화재·항만 시설을 고해상도 이미지로 기록' },
  { label: 'Marine Safety', value: '해상·항만 관제', detail: '연안, 선박 접근, 불법 조업, 위험 구역을 드론 시야로 확인' },
  { label: 'Evidence Report', value: '증빙 리포트', detail: '위치, 일시, 사진·영상, 이상 지점을 행정 보고자료로 정리' },
];

const painPoints = [
  {
    icon: AlertTriangle,
    title: '위험 구역을 사람이 먼저 확인합니다',
    description: '교량 하부, 급경사지, 제방, 항만 구조물, 재난 현장은 접근 자체가 위험하거나 시간이 오래 걸립니다.',
  },
  {
    icon: Waves,
    title: '넓은 해상·연안 구역은 사각지대가 생깁니다',
    description: '고정 CCTV와 육상 순찰만으로는 선박 이동, 위험 접근, 불법 조업, 해양 폐기물 발생 구역을 빠르게 훑기 어렵습니다.',
  },
  {
    icon: FileText,
    title: '현장 상황이 보고자료로 남지 않습니다',
    description: '영상과 사진이 흩어져 있으면 민원 대응, 보수 요청, 사후 감사, 다음 예산 편성에 필요한 근거자료로 활용하기 어렵습니다.',
  },
  {
    icon: BellRing,
    title: '재난·사고 초동 판단이 늦어집니다',
    description: '침수, 산불, 붕괴, 해상 사고처럼 빠른 공간 판단이 필요한 상황은 상공 영상과 위치 정보가 있어야 대응이 빨라집니다.',
  },
];

const solutionFlow = [
  {
    step: '01',
    title: '대상 구역·행정 목적 정의',
    description: '시설 점검, 해상 관제, 재난 대응, 정기 순찰, 기록화 등 목적과 대상 구역, 보고 체계, 협의 기관을 먼저 정리합니다.',
  },
  {
    step: '02',
    title: '비행 가능성·안전 조건 검토',
    description: '비행 제한, 관할 기관 협의, 개인정보·보안, 항만·해상 조건, 현장 접근성, 위험 요인을 확인해 운영 계획을 세웁니다.',
  },
  {
    step: '03',
    title: '촬영·관제 시나리오 설계',
    description: '우선 확인 지점, 비행 경로, 고도, 촬영 각도, 실시간 공유 여부, 이상 지점 기록 방식을 현장 목적에 맞게 설계합니다.',
  },
  {
    step: '04',
    title: '드론 촬영·실시간 모니터링',
    description: '계획된 구역을 드론으로 촬영하고 필요 시 현장 담당자·상황실과 영상을 공유해 위험 지점과 이상 상황을 함께 확인합니다.',
  },
  {
    step: '05',
    title: '이상 지점·상황 데이터 정리',
    description: '사진, 영상, 위치, 시간, 현장 메모를 기준으로 점검 지점과 위험 후보를 분류하고 조치가 필요한 내용을 구조화합니다.',
  },
  {
    step: '06',
    title: '보고자료·정기 운영 제안',
    description: '행정 보고, 보수 요청, 민원 대응, 재난 기록에 활용할 수 있는 결과물을 제공하고 정기 점검·상시 관제 확장안을 제안합니다.',
  },
];

const useCases = [
  {
    icon: Building2,
    title: '교량·제방·사면·공공 시설 점검',
    description: '구조물 상부·측면·하부, 균열·누수·침식·변형 후보를 안전거리에서 확인하고 위치 기반 자료로 정리합니다.',
    tags: ['교량', '제방·사면', '시설물 점검'],
  },
  {
    icon: Anchor,
    title: '항만·연안·해상 안전관제',
    description: '항만 주변, 연안, 선박 이동 구역, 불법어선·위험 접근·해양 폐기물 후보를 드론 영상과 위치 정보로 확인합니다.',
    tags: ['항만', '불법어선', '연안 안전'],
  },
  {
    icon: Landmark,
    title: '문화재·국가유산 기록화',
    description: '사람이 접근하기 어려운 지붕·상부·외벽을 고해상도로 촬영해 보수·복원 계획과 디지털 아카이브 자료로 활용합니다.',
    tags: ['문화재', '국가유산', '디지털 기록'],
  },
  {
    icon: Flame,
    title: '산불·침수·재난 현장 파악',
    description: '연기, 침수 범위, 도로 단절, 고립 지점, 위험 접근로를 상공에서 확인해 초동 대응과 사후 복구 기록을 지원합니다.',
    tags: ['산불', '침수', '재난 대응'],
  },
  {
    icon: Users,
    title: '공공 행사·관광지 안전관리',
    description: '행사장, 공원, 관광지, 도심 밀집 구역의 인파 흐름과 위험 지점을 확인해 기존 CCTV와 현장 안전요원을 보완합니다.',
    tags: ['행사 안전', '인파 흐름', 'CCTV 보완'],
  },
];

const deliverables = [
  {
    icon: MonitorPlay,
    title: '현장 영상·이미지 자료',
    description: '공공·해상 현장을 이해하기 쉬운 항공 영상과 고해상도 이미지로 제공합니다.',
    items: ['항공 영상 클립', '고해상도 사진', '주요 지점 확대 이미지'],
  },
  {
    icon: MapPinned,
    title: '위치 기반 이상 지점 목록',
    description: '보수·단속·추가 확인이 필요한 위치를 지도와 목록으로 정리합니다.',
    items: ['좌표·구역 정보', '이상 지점 번호', '현장 메모'],
  },
  {
    icon: ClipboardCheck,
    title: '점검·관제 결과 리포트',
    description: '행정 보고와 내부 의사결정에 바로 활용할 수 있도록 결과를 구조화합니다.',
    items: ['점검 개요', '주요 발견 사항', '조치 우선순위'],
  },
  {
    icon: Route,
    title: '순찰 경로·관제 구역도',
    description: '정기 운영이 필요한 현장은 반복 가능한 순찰 경로와 우선 감시 구역을 제안합니다.',
    items: ['비행 경로', '우선 감시 구역', '반복 점검 포인트'],
  },
  {
    icon: Satellite,
    title: '상황실·관제 연계안',
    description: '실시간 공유가 필요한 경우 기존 상황실, 이동형 관제, 현장 모니터링 구성을 검토합니다.',
    items: ['영상 공유 방식', '관제 화면 구성', '운영 로그'],
  },
  {
    icon: Radar,
    title: '정기점검·상시운영 로드맵',
    description: '단발 촬영 이후 분기·반기·연간 점검과 드론 스테이션 확장 가능성을 함께 제안합니다.',
    items: ['정기 점검 주기', '시계열 비교', '상시 관제 검토'],
  },
];

const packages = [
  {
    name: '공공 시설 점검 패키지',
    bestFor: '교량, 제방, 사면, 공공 건축물, 문화재 등 시설 상태 확인',
    includes: ['고해상도 촬영', '이상 지점 목록', '점검 리포트'],
  },
  {
    name: '해상·항만 모니터링 패키지',
    bestFor: '항만, 연안, 어항, 해상 안전 구역의 순찰·감시',
    includes: ['해상 순찰 영상', '위험 접근 확인', '관제 구역 기록'],
  },
  {
    name: '재난 대응 긴급 촬영 패키지',
    bestFor: '산불, 침수, 태풍, 붕괴, 고립 등 빠른 현장 파악이 필요한 상황',
    includes: ['신속 출동', '상공 상황 영상', '피해 범위 기록'],
  },
  {
    name: '정기 순찰·관제 확장 검토',
    bestFor: '반복 점검, 상시 감시, 상황실 연계, 드론 스테이션 도입 검토',
    includes: ['순찰 시나리오', '운영 주기 제안', '관제 확장안'],
  },
];

const faqs = [
  {
    question: '공공기관 용역이나 시범사업 형태로 진행할 수 있나요?',
    answer:
      '가능합니다. 단발 점검, 시범사업, 정기 용역, 협약 기반 프로젝트 등 기관의 예산·사업 목적·행정 절차에 맞춰 범위를 협의합니다. 필요 시 제안요청서 작성 단계에서 필요한 산출물과 운영 범위를 함께 정리할 수 있습니다.',
  },
  {
    question: '항만·해상 구역 촬영은 어떤 사전 협의가 필요한가요?',
    answer:
      '항만, 군사·보안 시설, 선박 통항 구역, 비행 제한 구역 여부에 따라 관계 기관 협의와 사전 허가가 필요할 수 있습니다. 아이엠드론은 촬영 목적, 구역, 시간, 안전 통제 조건을 확인한 뒤 필요한 절차를 함께 검토합니다.',
  },
  {
    question: '야간 촬영이나 열화상 촬영도 가능한가요?',
    answer:
      '현장 목적과 비행 가능 조건에 따라 가능합니다. 야간·열화상 촬영은 안전관리, 재난 대응, 시설 이상 확인에 유용하지만 장비, 허가, 현장 통제, 기상 조건을 사전에 검토해야 합니다.',
  },
  {
    question: '결과물은 어떤 형식으로 받을 수 있나요?',
    answer:
      '이미지, 영상, 위치 기반 목록, PDF 보고서, 지도형 자료, 원본 데이터 등으로 제공할 수 있습니다. 공공기관 내부 보고 양식이나 보수 업체 공유 양식이 있는 경우 해당 형식에 맞춰 정리하는 것도 협의 가능합니다.',
  },
  {
    question: '정기 점검이나 상황실 연계 운영도 가능한가요?',
    answer:
      '가능합니다. 분기·반기·연간 점검처럼 반복 촬영을 통해 변화 이력을 축적하거나, 해상·시설 안전관제처럼 상황실과 실시간 영상을 공유하는 운영 방식까지 단계적으로 구성할 수 있습니다.',
  },
];

export default function PublicSafetyServicePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate min-h-[760px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/services/public-safety.webp"
            alt="공공·해상안전 드론 관제와 시설 점검"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/82" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(14,165,233,0.26),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(56,189,248,0.18),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.72)_45%,rgba(2,6,23,0.96))]" />
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 shadow-[0_0_40px_rgba(14,165,233,0.14)] backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              Public Safety & Marine Monitoring
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              공공·해상 안전 현장을
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                드론 데이터로 더 빠르게 확인합니다
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              아이엠드론은 공공 인프라, 항만·연안, 문화재, 재난 현장을 드론 영상·위치·점검 데이터로 확인하고
              공공기관과 지자체가 바로 활용할 수 있는 보고자료로 정리합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['공공 인프라 점검', '해상·항만 관제', '재난 대응 촬영', '문화재 기록화', '위치 기반 리포트'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-100 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
                <Link href="/contact">
                  공공안전 서비스 상담하기
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="#deliverables">
                  제공 산출물 보기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-sky-950/40 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200/80">Safety Data</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Public Mission Package</h2>
              </div>
              <ShieldCheck className="h-10 w-10 text-sky-300" />
            </div>
            <div className="space-y-4">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/55 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                    <CheckCircle2 className="h-5 w-5 text-sky-300" />
                  </div>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-gradient-to-r from-sky-400/20 to-cyan-300/10 p-5 text-sm leading-6 text-sky-50">
              단순 촬영으로 끝내지 않고, 누가·언제·어디서·무엇을 확인했는지 남는 행정·운영 데이터로 정리합니다.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Why Drone Safety</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">공공안전 업무의 이런 문제를 해결합니다</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-sky-400/10">
                  <Icon className="h-9 w-9 text-sky-300" />
                  <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Workflow</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">현장 범위 협의에서 증빙 리포트까지</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                공공·해상안전 드론 운영은 비행만의 문제가 아닙니다. 목적, 허가, 안전 통제, 촬영 방식, 보고 형식을 함께 설계해야 실제 행정 업무에 활용됩니다.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {solutionFlow.map((item) => (
                <div key={item.step} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-400/15 text-sm font-semibold text-sky-200">
                    {item.step}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Use Cases</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">적용 현장</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                지자체, 공공기관, 항만·해상안전, 시설관리, 재난 대응처럼 빠른 확인과 신뢰 가능한 기록이 필요한 현장에 맞춰 운영합니다.
              </p>
            </div>
            <Button variant="outline" className="w-fit border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
              <Link href="/projects">
                관련 프로젝트 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {useCases.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`rounded-3xl border border-white/10 bg-white/[0.045] p-6 ${index === 0 ? 'lg:col-span-2' : ''}`}
                >
                  <Icon className="h-10 w-10 text-sky-300" />
                  <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="deliverables" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Deliverables</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">공공안전 데이터는 보고 가능한 산출물로 남습니다</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              영상과 사진을 전달하는 데서 끝나지 않고, 위치·일시·상황·조치 우선순위를 정리해 행정 보고와 현장 조치에 활용할 수 있게 제공합니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/75 p-6">
                  <Icon className="h-10 w-10 text-sky-300" />
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                  <ul className="mt-5 space-y-2">
                    {item.items.map((text) => (
                      <li key={text} className="flex gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-300" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Package Guide</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">목적별 추천 구성</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              공공기관의 사업 목적, 현장 위험도, 반복 운영 필요성에 따라 촬영·관제·리포트 범위를 조정합니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((item) => (
              <div key={item.name} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
                <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-sky-100">{item.bestFor}</p>
                <ul className="mt-5 space-y-2">
                  {item.includes.map((include) => (
                    <li key={include} className="flex gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-300" />
                      <span>{include}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">자주 묻는 질문</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              공공·해상안전 드론 운영은 비행 가능 여부, 관계기관 협의, 개인정보, 보고 형식을 함께 검토해야 안정적으로 진행됩니다.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-3xl border border-white/10 bg-slate-900/75 p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-white marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="rounded-full bg-sky-400/10 px-3 py-1 text-sm text-sky-200 group-open:bg-sky-300 group-open:text-slate-950">
                      보기
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.22),transparent_36%)]" />
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-sky-300/20 bg-gradient-to-br from-sky-400/15 via-white/[0.06] to-slate-900 p-8 text-center shadow-2xl shadow-sky-950/40 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">From Flight to Public Insight</p>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">
            공공·해상안전 현장을 촬영 결과물이 아니라 의사결정 가능한 점검 데이터로 정리합니다.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            아이엠드론이 현장 목적과 행정 절차에 맞춰 드론 촬영, 실시간 관제, 위치 기반 리포트, 정기 운영 구성까지 단계적으로 제안드립니다.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
              <Link href="/contact">
                공공안전 서비스 상담하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
              <Link href="/services">
                전체 서비스 보기
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
