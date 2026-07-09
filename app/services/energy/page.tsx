import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BatteryCharging,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileText,
  Flame,
  Gauge,
  MapPinned,
  Phone,
  Radar,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Thermometer,
  Wind,
  Zap,
} from 'lucide-react';

const service = services.find((item) => item.id === 'energy')!;

const pageDescription =
  '태양광·풍력·송전·변전·산업 플랜트 설비를 드론 RGB·열화상 데이터로 안전하게 점검하고 이상 후보와 우선 조치 구간을 리포트로 제공하는 아이엠드론의 에너지 설비 점검 서비스입니다.';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/energy',
  },
  title: `${service.title} | ${SITE_NAME}`,
  description: pageDescription,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/services/energy`,
    siteName: SITE_NAME,
    title: `${service.title} | ${SITE_NAME}`,
    description: pageDescription,
    images: [{ url: `${SITE_URL}${service.image}`, width: 1200, height: 630 }],
  },
};

const heroStats = [
  { label: 'Thermal Scan', value: '열화상 점검', detail: 'Hot Spot·온도 편차·과열 후보를 빠르게 선별' },
  { label: 'Asset Mapping', value: '위치 기반 리포트', detail: '패널·블레이드·설비 ID와 좌표로 보수 지점 명확화' },
  { label: 'Safety Operation', value: '비접촉 점검', detail: '고소·감전·정전 리스크를 줄이는 원격 점검 방식' },
];

const painPoints = [
  {
    icon: AlertTriangle,
    title: '이상 설비를 늦게 발견합니다',
    description: '패널 Hot Spot, 접속 불량, 블레이드 손상은 초기에 찾지 못하면 발전 효율과 유지보수 비용에 영향을 줍니다.',
  },
  {
    icon: ShieldCheck,
    title: '고소·전력 설비 접근이 위험합니다',
    description: '송전선, 터빈, 플랜트 구조물, 지붕형 태양광은 작업자 접근 전 안전한 원격 확인이 필요합니다.',
  },
  {
    icon: Gauge,
    title: '넓은 설비를 빠르게 훑기 어렵습니다',
    description: '대규모 발전소와 에너지 단지는 지상 점검만으로는 누락 없는 전수 확인과 반복 점검이 어렵습니다.',
  },
  {
    icon: FileText,
    title: '보수팀이 바로 움직일 자료가 부족합니다',
    description: '단순 사진이 아니라 이상 위치, 유형, 심각도, 우선순위가 정리된 실행 가능한 리포트가 필요합니다.',
  },
];

const solutionFlow = [
  {
    step: '01',
    title: '설비 목적·범위 확인',
    description: '태양광, 풍력, 송전·변전, 플랜트 등 설비 유형과 정기점검·고장진단·인수점검 목적을 정리합니다.',
  },
  {
    step: '02',
    title: '비행·안전 조건 검토',
    description: '전력 설비, 장애물, 주변 지형, 비행 제한, 운영 시간, 현장 통제 조건을 확인해 안전 계획을 세웁니다.',
  },
  {
    step: '03',
    title: 'RGB·열화상 촬영 설계',
    description: '열화상 촬영 시간대, 고도, 속도, 중첩률, 촬영 각도, 설비 ID 매칭 방식을 목적에 맞게 설계합니다.',
  },
  {
    step: '04',
    title: '드론 데이터 수집',
    description: '자동 경로 비행과 근접 촬영을 병행해 RGB 이미지, 열화상 이미지, 영상, 위치 데이터를 수집합니다.',
  },
  {
    step: '05',
    title: '이상 후보 분류·분석',
    description: '온도 편차, 패턴, 외관 손상, 오염, 부식, 구조물 변형 후보를 유형별로 분류하고 우선순위를 정리합니다.',
  },
  {
    step: '06',
    title: '점검 리포트 납품',
    description: '이상 후보 목록, 위치 지도, 이미지 세트, 조치 우선순위, 정기점검 제안을 리포트로 제공합니다.',
  },
];

const useCases = [
  {
    icon: SunMedium,
    title: '태양광 발전소 패널 점검',
    description: 'Hot Spot, String Failure, 접속 불량, 오염·파손 패널을 열화상과 RGB 이미지로 선별합니다.',
    tags: ['Hot Spot', 'String Failure', '패널 위치'],
  },
  {
    icon: Wind,
    title: '풍력 터빈 블레이드·타워 점검',
    description: '블레이드 크랙, 도장 박리, 침식, 오염, 타워 외관 이상을 다양한 각도에서 기록합니다.',
    tags: ['블레이드', '고해상도 줌', '정지시간 절감'],
  },
  {
    icon: Zap,
    title: '송전선·변전소·배전 설비 점검',
    description: '국부 과열, 이물질, 도체 처짐, 절연장치 손상 등 전력 설비 이상 후보를 안전거리에서 확인합니다.',
    tags: ['국부 과열', '전력 설비', '안전거리'],
  },
  {
    icon: Factory,
    title: '산업 플랜트·저장탱크·배관 시설',
    description: '저장탱크, 배관, 구조물의 누유·부식·단열재 손상 후보와 시설 전경을 항공 데이터로 정리합니다.',
    tags: ['플랜트', '저장탱크', '위험구역'],
  },
  {
    icon: BatteryCharging,
    title: 'ESS·수소·복합 에너지 단지',
    description: '복합 설비의 구역별 리스크와 우선점검 대상을 지도 기반으로 정리해 운영 의사결정을 돕습니다.',
    tags: ['복합 단지', '운영 리스크', '정기점검'],
  },
];

const deliverables = [
  {
    icon: Thermometer,
    title: 'RGB·열화상 이미지 세트',
    description: '이상 후보 지점의 실제 외관과 온도 상태를 함께 확인할 수 있습니다.',
    items: ['고해상도 RGB 사진', '열화상 이미지', '원본 데이터 옵션'],
  },
  {
    icon: MapPinned,
    title: '이상 설비 위치 정보',
    description: '보수팀이 바로 찾아갈 수 있도록 설비 ID, 구역, 좌표, 이미지 번호를 정리합니다.',
    items: ['패널·터빈·설비 ID', '좌표·구역 정보', '지도형 표시'],
  },
  {
    icon: Flame,
    title: 'Hot Spot·온도 편차 분석',
    description: '열 이상 유형과 심각도를 분류해 우선 조치 대상을 선별합니다.',
    items: ['온도 편차', '결함 유형 분류', '심각도 단계'],
  },
  {
    icon: BarChart3,
    title: '점검 요약 리포트',
    description: '의사결정자가 빠르게 판단할 수 있도록 결과를 표와 이미지로 요약합니다.',
    items: ['이상 후보 목록', '우선순위', '조치 의견'],
  },
  {
    icon: ClipboardCheck,
    title: '정기점검 이력 관리',
    description: '반복 촬영을 통해 설비 상태 변화를 누적하고 유지보수 계획에 활용합니다.',
    items: ['시계열 비교', '반복 이상 추적', '점검 주기 제안'],
  },
  {
    icon: Radar,
    title: '운영·관제 연계 제안',
    description: '필요 시 드론 관제, 드론 스테이션, 원격 모니터링 구성까지 확장 검토합니다.',
    items: ['원격 모니터링', '관제 연계', '자동화 검토'],
  },
];

const packages = [
  {
    name: '태양광 열화상 점검 패키지',
    bestFor: '중대형 태양광 발전소, 지붕형 태양광, 인수·정기 점검',
    includes: ['열화상 촬영', 'Hot Spot 목록', '패널 위치 리포트'],
  },
  {
    name: '풍력 외관 점검 패키지',
    bestFor: '블레이드·타워 외관 상태를 안전하게 기록해야 하는 현장',
    includes: ['고해상도 근접 촬영', '손상 후보 이미지', '점검 요약표'],
  },
  {
    name: '전력 인프라 점검 패키지',
    bestFor: '송전선, 변전소, 배전 설비의 국부 과열·손상 확인',
    includes: ['안전거리 촬영', '열 이상 후보', '위치 기반 결과표'],
  },
  {
    name: '플랜트 위험구역 스캔 패키지',
    bestFor: '저장탱크, 배관, 고소 구조물, 접근 제한 구역 점검',
    includes: ['항공 전경', '위험 후보 이미지', '보수 우선순위'],
  },
];

const faqs = [
  {
    question: '열화상 점검은 언제 촬영해야 효과적인가요?',
    answer:
      '태양광은 발전 중 온도 편차가 뚜렷하게 나타나는 조건에서 촬영하는 것이 좋습니다. 현장 목적에 따라 일사량, 시간대, 날씨, 설비 가동 상태를 함께 검토해 촬영 일정을 잡습니다.',
  },
  {
    question: '점검 중 설비를 멈춰야 하나요?',
    answer:
      '대부분의 항공·열화상 점검은 비접촉 방식이므로 설비를 멈추지 않고 진행할 수 있습니다. 다만 현장 안전 규정, 전력 설비 접근 조건, 점검 목적에 따라 운영팀과 사전 협의가 필요합니다.',
  },
  {
    question: '드론 점검 결과만으로 바로 수리 결정을 할 수 있나요?',
    answer:
      '드론 점검은 이상 후보를 빠르게 선별하고 보수 우선순위를 정하는 데 효과적입니다. 실제 교체·정밀 수리는 현장 확인 또는 전문 장비 진단과 함께 판단하는 것이 안전합니다.',
  },
  {
    question: '보수 업체와 공유할 수 있는 형태로 받을 수 있나요?',
    answer:
      '네. 이상 후보 목록, 위치, 이미지 번호, 설비 ID를 표 형태로 정리해 보수 업체가 바로 현장 조치에 활용할 수 있도록 제공합니다. 필요 시 고객사 양식에 맞춘 리포트도 협의할 수 있습니다.',
  },
  {
    question: '정기 점검도 가능한가요?',
    answer:
      '가능합니다. 월·분기·반기·연간 단위 정기점검을 통해 설비 상태 변화를 시계열로 비교하고, 반복 발생 구간과 우선 관리 대상을 누적 관리할 수 있습니다.',
  },
];

export default function EnergyServicePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate min-h-[760px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/services/energy.webp"
            alt="드론으로 점검하는 에너지 설비"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.25),transparent_32%),radial-gradient(circle_at_82%_14%,rgba(34,211,238,0.18),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.72)_44%,rgba(2,6,23,0.96))]" />
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 shadow-[0_0_40px_rgba(14,165,233,0.14)] backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              Energy Facility Inspection
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              에너지 설비를
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                안전하게 데이터로 점검합니다
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              태양광 패널, 풍력 터빈, 송전·변전 설비, 산업 플랜트까지. 아이엠드론은 RGB·열화상 드론 데이터로
              이상 후보를 빠르게 찾고, 보수팀이 바로 활용할 수 있는 위치 기반 점검 리포트를 제공합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['열화상 점검', 'Hot Spot 탐지', '위치 기반 리포트', '비접촉 점검', '정기점검'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-100 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
                <Link href="/contact">
                  에너지 설비 점검 상담하기
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="#deliverables">
                  점검 산출물 보기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-sky-950/40 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200/80">Inspection Data</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Energy Asset Package</h2>
              </div>
              <Thermometer className="h-10 w-10 text-sky-300" />
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
              이상 후보를 찾는 데서 끝나지 않고, 설비 ID·위치·이미지·우선순위까지 현장 조치에 필요한 형태로 정리합니다.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Why Drone Inspection</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">에너지 설비 점검의 이런 문제를 해결합니다</h2>
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
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">비행에서 이상 후보 리포트까지</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                아이엠드론은 설비 유형과 점검 목적에 맞춰 촬영 조건을 설계하고, RGB·열화상 데이터를 분석해
                유지보수 의사결정에 필요한 결과물로 정리합니다.
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
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">적용 설비</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                신재생 에너지부터 전력 인프라와 산업 플랜트까지, 위험을 줄이고 점검 효율을 높이는 구성을 제안합니다.
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
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">점검 데이터는 조치 가능한 리포트로 납품됩니다</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              단순 이미지 전달이 아니라 이상 후보, 위치, 유형, 우선순위를 정리해 현장 보수와 운영 의사결정에 활용할 수 있게 제공합니다.
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
              설비 유형과 운영 리스크에 따라 촬영 방식, 분석 범위, 리포트 깊이를 조정합니다.
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
              열화상 촬영 조건, 설비 운영 여부, 리포트 활용 방식은 현장 목적에 맞춰 사전에 정리합니다.
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">From Flight to Insight</p>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">
            설비 이상을 더 빠르게 찾고, 안전하게 조치할 수 있게 만듭니다.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            아이엠드론이 에너지 설비 목적에 맞춰 드론 촬영, 열화상 분석, 위치 기반 리포트 구성을 제안드립니다.
            정기점검부터 고장 후보 선별까지 필요한 결과물을 함께 설계해보세요.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
              <Link href="/contact">
                에너지 설비 점검 상담하기
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
