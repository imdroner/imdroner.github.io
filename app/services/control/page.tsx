import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import {
  AlertTriangle,
  ArrowRight,
  BellRing,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  CloudCog,
  Eye,
  FileText,
  Flame,
  MapPinned,
  MonitorPlay,
  Network,
  Phone,
  Radio,
  Satellite,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
} from 'lucide-react';

const service = services.find((item) => item.id === 'control')!;

const pageDescription =
  '드론 영상·위치·센서 데이터를 실시간으로 수집하고 상황실과 현장을 연결하는 아이엠드론의 드론 관제·실시간 모니터링 서비스입니다.';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/control',
  },
  title: `${service.title} | ${SITE_NAME}`,
  description: pageDescription,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/services/control`,
    siteName: SITE_NAME,
    title: `${service.title} | ${SITE_NAME}`,
    description: pageDescription,
    images: [{ url: `${SITE_URL}${service.image}`, width: 1200, height: 630 }],
  },
};

const heroStats = [
  { label: 'Live Video', value: '실시간 영상', detail: '드론 영상을 상황실·현장·의사결정자에게 동시에 공유' },
  { label: 'Geo Tracking', value: '지도 기반 관제', detail: '위치·고도·경로·관제 구역을 지도 위에서 확인' },
  { label: 'Event Log', value: '이벤트 기록', detail: '주요 상황, 스냅샷, 영상 클립, 운영 이력을 리포트화' },
];

const painPoints = [
  {
    icon: Eye,
    title: '현장 전체를 한눈에 보기 어렵습니다',
    description: '넓은 행사장, 항만, 공사현장, 산림 구역은 지상 인력과 고정 CCTV만으로 사각지대가 생기기 쉽습니다.',
  },
  {
    icon: AlertTriangle,
    title: '상황 발생 후 판단이 늦어집니다',
    description: '위험 징후, 인파 집중, 화재·해상 사고, 장비 충돌 위험은 실시간 영상과 위치 정보가 있어야 빠르게 판단할 수 있습니다.',
  },
  {
    icon: Network,
    title: '현장과 상황실 정보가 분리됩니다',
    description: '무전·전화·사진 전달만으로는 같은 화면을 보며 의사결정하기 어렵고, 보고 내용도 사람마다 달라질 수 있습니다.',
  },
  {
    icon: FileText,
    title: '운영 후 남는 데이터가 부족합니다',
    description: '관제 이력과 주요 이벤트가 구조화되지 않으면 사후 보고, 교육, 재발 방지, 다음 운영 개선에 활용하기 어렵습니다.',
  },
];

const solutionFlow = [
  {
    step: '01',
    title: '관제 목적·운영 범위 정의',
    description: '안전관리, 감시, 순찰, 재난 대응, 시설 점검 등 목적과 운영 기간, 책임자, 보고 체계를 먼저 정리합니다.',
  },
  {
    step: '02',
    title: '관제 구역·시나리오 설계',
    description: '우선 감시 구역, 비행 경로, 비상 상황 기준, 보고 단계, 현장 요원 동선을 포함한 운영 시나리오를 만듭니다.',
  },
  {
    step: '03',
    title: '장비·통신·화면 구성',
    description: '드론, 조종·관제 장비, LTE/5G·전용망, 영상 송출 방식, 지도·대시보드 화면 구성을 현장 조건에 맞춥니다.',
  },
  {
    step: '04',
    title: '시범 비행·관제 테스트',
    description: '본 운영 전 영상 지연, 통신 안정성, 지도 위치, 화면 가독성, 현장 보고 흐름을 실제 환경에서 점검합니다.',
  },
  {
    step: '05',
    title: '실시간 관제 운영',
    description: '관제 시나리오에 따라 드론을 운용하고, 상황실·현장 요원이 같은 화면을 보며 주요 이벤트를 즉시 공유합니다.',
  },
  {
    step: '06',
    title: '운영 로그·리포트 제공',
    description: '주요 이벤트, 영상 클립, 스냅샷, 개선 포인트를 정리해 사후 보고와 다음 운영 계획에 활용할 수 있게 제공합니다.',
  },
];

const useCases = [
  {
    icon: Users,
    title: '대규모 행사·축제 안전관리',
    description: '인파 흐름, 병목 구간, 차량 동선, 위험 구역을 공중에서 확인하고 상황실·안전요원과 실시간으로 공유합니다.',
    tags: ['인파 흐름', '상황실 공유', '안전요원 연계'],
  },
  {
    icon: Waves,
    title: '항만·연안·해상 감시',
    description: '불법어선, 위험 선박, 해양 사고, 연안 안전 구역을 드론으로 순찰하며 위치와 영상을 함께 확인합니다.',
    tags: ['해상 순찰', '불법어선', '위치 공유'],
  },
  {
    icon: Building2,
    title: '산업 시설·공사현장 관제',
    description: '중장비 동선, 작업자 밀집, 위험 구역, 화재·추락 위험 후보를 상공에서 모니터링해 현장 안전관리에 활용합니다.',
    tags: ['공사현장', '중장비 동선', '위험 구역'],
  },
  {
    icon: Flame,
    title: '산불·재난 광역 감시',
    description: '연기·불꽃·피난 경로·차량 정체 등 재난 현장의 공간 정보를 빠르게 확인하고 유관기관 대응을 지원합니다.',
    tags: ['산불 감시', '재난 대응', '광역 모니터링'],
  },
  {
    icon: ShieldCheck,
    title: '공공안전·치안 순찰 지원',
    description: '도시, 관광지, 공원, 시설물 주변에서 고정 CCTV가 닿기 어려운 사각지대를 보완하는 공중 감시 수단으로 활용합니다.',
    tags: ['순찰 지원', 'CCTV 보완', '사각지대'],
  },
];

const deliverables = [
  {
    icon: MonitorPlay,
    title: '실시간 관제 화면 구성',
    description: '영상, 지도, 위치, 상태 정보를 목적에 맞게 구성해 상황실에서 바로 볼 수 있게 제공합니다.',
    items: ['드론 영상 피드', '지도 기반 위치', '운영 상태 표시'],
  },
  {
    icon: MapPinned,
    title: '관제 구역·비행 경로 설계',
    description: '감시 우선순위와 위험 구역을 반영한 비행 경로와 관제 포인트를 정리합니다.',
    items: ['관제 구역도', '우선 감시 포인트', '비상 대응 동선'],
  },
  {
    icon: BellRing,
    title: '이벤트·상황 기록',
    description: '주요 상황을 시간대별로 기록해 사후 분석과 보고에 활용할 수 있도록 만듭니다.',
    items: ['이벤트 타임라인', '스냅샷', '영상 클립'],
  },
  {
    icon: ClipboardCheck,
    title: '운영 리포트',
    description: '운영 기간의 주요 이슈, 대응 내용, 개선 포인트를 보고서 형태로 제공합니다.',
    items: ['주요 상황 요약', '구역별 이슈', '개선 제안'],
  },
  {
    icon: CloudCog,
    title: '상시 관제 확장 제안',
    description: '반복·상시 운영이 필요한 경우 드론 스테이션, 원격 관제, 자동화 연계 구성을 검토합니다.',
    items: ['드론 스테이션', '원격 운영', '자동 순찰 검토'],
  },
  {
    icon: Satellite,
    title: '통신·현장 연계 구성',
    description: 'LTE/5G, 현장 네트워크, 이동형 상황실, 외부 송출 방식까지 운영 조건에 맞춰 제안합니다.',
    items: ['통신 환경 점검', '상황실 송출', '현장 공유 방식'],
  },
];

const packages = [
  {
    name: '이벤트 관제 패키지',
    bestFor: '축제, 행사, 스포츠 경기, 대규모 집회 등 단기 집중 운영',
    includes: ['인파·차량 흐름 확인', '상황실 실시간 공유', '행사 후 리포트'],
  },
  {
    name: '공공안전 순찰 패키지',
    bestFor: '지자체, 관광지, 공원, 치안·안전 취약 구역',
    includes: ['순찰 경로 설계', '위험 구역 모니터링', '이벤트 기록'],
  },
  {
    name: '산업현장 관제 패키지',
    bestFor: '공사현장, 플랜트, 항만, 물류시설의 안전·운영 모니터링',
    includes: ['위험 구역 관제', '장비·작업자 동선 확인', '운영 개선 리포트'],
  },
  {
    name: '상시·원격 관제 구축 검토',
    bestFor: '정기 순찰, 반복 감시, 드론 스테이션·관제센터 도입을 검토하는 기관·기업',
    includes: ['시스템 구성안', '운영 시나리오', '확장 로드맵'],
  },
];

const faqs = [
  {
    question: '기존 CCTV나 상황실 시스템과 함께 사용할 수 있나요?',
    answer:
      '가능합니다. CCTV는 고정 시야를 담당하고, 드론은 넓은 구역과 사각지대를 유동적으로 확인하는 방식으로 보완할 수 있습니다. 상황실 화면 구성 시 기존 시스템과 함께 볼 수 있는 형태를 협의합니다.',
  },
  {
    question: '통신 환경이 불안정한 곳에서도 관제가 가능한가요?',
    answer:
      '실시간 관제는 안정적인 LTE/5G 또는 전용망이 중요합니다. 통신 환경이 약한 경우 이동형 중계, 로컬 녹화 후 분석, 제한적 실시간 공유 등 현장 조건에 맞는 대안을 검토합니다.',
  },
  {
    question: '드론을 별도로 구매해야 하나요?',
    answer:
      '단기·기간제 관제는 아이엠드론 장비와 운영 인력으로 서비스 형태 제공이 가능합니다. 장기 상시 운영이 필요한 경우에는 장비 도입, 관제센터 구축, 운영 교육까지 포함한 구성으로 확장할 수 있습니다.',
  },
  {
    question: '개인정보와 비행 허가는 어떻게 처리하나요?',
    answer:
      '도심, 행사장, 공공시설, 특정 시설 관제는 항공안전법, 개인정보 보호, 촬영 안내 등 사전 검토가 필요합니다. 아이엠드론은 비행 가능 여부와 필요한 협의 절차를 운영 전 함께 확인합니다.',
  },
  {
    question: '드론 스테이션이나 원격 관제도 가능한가요?',
    answer:
      '현장 조건과 운영 목적에 따라 가능합니다. 반복 순찰, 시설 감시, 재난 대응 등 상시성이 필요한 경우 드론 스테이션, 원격 관제, 자동 순찰, 이벤트 기반 알림 구성을 단계적으로 검토할 수 있습니다.',
  },
];

export default function ControlServicePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate min-h-[760px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/services/control.webp"
            alt="드론 관제와 실시간 모니터링"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/82" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(14,165,233,0.28),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(59,130,246,0.22),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.72)_45%,rgba(2,6,23,0.96))]" />
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 shadow-[0_0_40px_rgba(14,165,233,0.14)] backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              Drone Control & Real-time Monitoring
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">드론 관제로</span>
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                현장을 실시간 모니터링합니다
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              아이엠드론은 드론 영상, 위치, 센서, 운영 이력을 하나의 관제 흐름으로 묶어 행사·공공안전·산업현장·재난 대응에 필요한 실시간 모니터링을 제공합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['실시간 영상', '지도 기반 위치', '다중 드론 관제', '이벤트 기록', '원격 운영 확장'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-100 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
                <Link href="/contact">
                  관제 서비스 상담하기
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="#deliverables">
                  관제 산출물 보기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-sky-950/40 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200/80">Control Room</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Real-time Mission View</h2>
              </div>
              <Radio className="h-10 w-10 text-sky-300" />
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
              현장 영상을 보는 데서 끝나지 않고, 누가·언제·어디서·무엇을 확인했는지 운영 기록으로 남겨 다음 의사결정에 활용합니다.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Why Drone Control</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">실시간 관제가 필요한 이유</h2>
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
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">관제 시나리오에서 운영 리포트까지</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                드론 관제는 단순 실시간 영상 송출이 아니라, 현장 목적에 맞는 구역·장비·통신·보고 흐름을 설계하는 운영 서비스입니다.
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
                공공안전, 행사, 해상, 산업현장, 재난 대응처럼 빠른 상황 판단이 필요한 현장에 맞춰 관제 방식을 설계합니다.
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
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">관제 결과는 운영 데이터로 남습니다</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              현장을 실시간으로 보는 것에 더해, 운영 이후에도 활용할 수 있도록 화면 구성, 이벤트 기록, 리포트, 확장 제안까지 제공합니다.
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
              단기 이벤트 관제부터 상시 원격 관제 구축 검토까지, 운영 목적에 맞춰 구성 범위를 조정합니다.
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
              실시간 관제는 현장 목적, 비행 가능 여부, 통신 환경, 개인정보·허가 절차를 함께 검토해야 안정적으로 운영됩니다.
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Control the Situation</p>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">
            현장을 더 넓게 보고, 더 빠르게 판단할 수 있는 관제 흐름을 만듭니다.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            아이엠드론이 관제 목적과 현장 조건에 맞춰 드론 운용, 영상 공유, 상황 기록, 상시 관제 확장까지 단계적으로 제안드립니다.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
              <Link href="/contact">
                관제 서비스 상담하기
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
