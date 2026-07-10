import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  FileText,
  FlaskConical,
  Leaf,
  LineChart,
  MapPinned,
  Microscope,
  Phone,
  Radar,
  Satellite,
  ScanLine,
  Sparkles,
  Sprout,
  Target,
  TreeDeciduous,
} from 'lucide-react';

const service = services.find((item) => item.id === 'smart-agri')!;

const pageDescription =
  '농경지, 과수원, 골프장, 시험포의 작물 생육과 잔디 상태를 드론·위성·NDVI 식생지수 데이터로 분석하고 관리 우선순위와 반복 관측 리포트로 제공하는 아이엠드론의 스마트 농업 서비스입니다.';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/smart-agri',
  },
  title: `${service.title} | ${SITE_NAME}`,
  description: pageDescription,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/services/smart-agri`,
    siteName: SITE_NAME,
    title: `${service.title} | ${SITE_NAME}`,
    description: pageDescription,
    images: [{ url: `${SITE_URL}${service.image}`, width: 1200, height: 630 }],
  },
};

const heroStats = [
  { label: 'Vegetation Index', value: 'NDVI·식생지수 분석', detail: '생육 편차, 스트레스 의심 구역, 관리 우선순위를 지도 위에 시각화' },
  { label: 'Field Intelligence', value: '필드별 관리 판단', detail: '논·밭·과수원·골프장·시험포의 구역별 상태를 비교 분석' },
  { label: 'Repeat Monitoring', value: '반복 관측 리포트', detail: '시기별 변화를 누적해 시비·관수·방제·보수 의사결정에 활용' },
];

const painPoints = [
  {
    icon: Leaf,
    title: '문제 구역을 눈으로만 찾기 어렵습니다',
    description: '넓은 농경지와 잔디 필드는 생육 불량, 수분 스트레스, 병해충 의심 구역이 겉으로 드러나기 전부터 편차가 생깁니다.',
  },
  {
    icon: Droplets,
    title: '관수·시비·방제가 균일하게 투입됩니다',
    description: '필드 안에서도 상태가 다른데 전체에 같은 자원을 투입하면 비용이 늘고, 일부 구역은 과다·부족 관리가 발생합니다.',
  },
  {
    icon: CalendarDays,
    title: '시기별 변화를 비교하기 어렵습니다',
    description: '한 번의 사진보다 생육 단계별 반복 관측이 있어야 조치 효과와 계절·기상 영향을 구분할 수 있습니다.',
  },
  {
    icon: FileText,
    title: '분석 결과가 현장 조치로 이어지지 않습니다',
    description: '수치만 전달되면 현장 관리자가 바로 움직이기 어렵습니다. 위치, 구역, 원인 후보, 권장 확인 항목이 함께 정리되어야 합니다.',
  },
];

const solutionFlow = [
  {
    step: '01',
    title: '필드·작물·관리 목표 정의',
    description: '작물 종류, 면적, 생육 단계, 관리 이슈, 기존 관수·시비·방제 방식, 원하는 의사결정 항목을 먼저 정리합니다.',
  },
  {
    step: '02',
    title: '드론·위성 데이터 소스 설계',
    description: '해상도와 예산, 촬영 주기, 날씨 리스크를 고려해 드론 촬영, 위성 데이터, 반복 관측 구성을 선택합니다.',
  },
  {
    step: '03',
    title: '촬영 조건·분석 지수 결정',
    description: 'NDVI, GNDVI, NDRE 등 목적에 맞는 식생지수와 촬영 시간, 고도, 중첩률, 기준 구역을 설정합니다.',
  },
  {
    step: '04',
    title: '필드 촬영·데이터 수집',
    description: '멀티스펙트럼·RGB 촬영과 위치 데이터를 수집하고, 필요 시 생육 단계별로 여러 차례 반복 관측합니다.',
  },
  {
    step: '05',
    title: '생육 편차·문제 후보 분석',
    description: '필드 전체의 지수 분포를 계산하고 생육 저하, 과습·건조, 병해충 의심, 배수·토양 문제 후보 구역을 선별합니다.',
  },
  {
    step: '06',
    title: '처방·관리 리포트 제공',
    description: '구역별 우선순위, 현장 확인 포인트, 관리 제안, 시계열 비교 자료를 리포트와 지도 데이터로 제공합니다.',
  },
];

const useCases = [
  {
    icon: Sprout,
    title: '논·밭·대규모 농경지 생육 진단',
    description: '작물 생육 편차와 스트레스 후보 구역을 지도에서 확인해 시비, 관수, 방제, 현장 확인 순서를 정할 수 있습니다.',
    tags: ['생육 편차', '관리 우선순위', '정밀농업'],
  },
  {
    icon: TreeDeciduous,
    title: '과수원·특용작물 구역별 관리',
    description: '나무·열·구역 단위로 수관 활력과 생육 불균형을 확인해 품질 관리와 수확량 안정화에 필요한 근거를 만듭니다.',
    tags: ['과수원', '수관 활력', '고부가 작물'],
  },
  {
    icon: Target,
    title: '골프장 페어웨이·그린 상태 진단',
    description: '잔디 스트레스, 배수 불량, 과습·건조, 보수 필요 구역을 식생지수와 항공 이미지로 확인합니다.',
    tags: ['골프장', '잔디 스트레스', '보수 계획'],
  },
  {
    icon: FlaskConical,
    title: '시험포·연구용 반복 관측',
    description: '품종, 시비, 관수, 재배 방식 비교 실험을 드론 데이터로 정량화하고 보고서·교육자료에 활용할 수 있게 정리합니다.',
    tags: ['시험포', '품종 비교', '연구 데이터'],
  },
  {
    icon: Satellite,
    title: '환경·유역·녹지 모니터링',
    description: '농경지 주변 환경, 녹지, 하천변 식생, 훼손·회복 구역을 반복 관측해 공공·환경 사업 자료로 활용합니다.',
    tags: ['환경 모니터링', '녹지 변화', '반복 관측'],
  },
];

const deliverables = [
  {
    icon: MapPinned,
    title: 'NDVI·식생지수 지도',
    description: '필드 전체의 생육 상태를 색상과 구역 단위로 시각화합니다.',
    items: ['NDVI/GNDVI/NDRE 지도', '구역별 평균·분포', 'GeoTIFF·지도 데이터 옵션'],
  },
  {
    icon: ScanLine,
    title: '문제 후보 구역 목록',
    description: '현장 확인이 필요한 지점을 번호, 위치, 상태 설명과 함께 정리합니다.',
    items: ['생육 저하 구역', '편차 큰 구역', '현장 확인 포인트'],
  },
  {
    icon: LineChart,
    title: '시계열 비교 리포트',
    description: '반복 촬영 결과를 비교해 조치 효과와 계절 변화를 확인합니다.',
    items: ['촬영일별 비교', '변화량 차트', '전후 비교 이미지'],
  },
  {
    icon: ClipboardCheck,
    title: '관리 우선순위 제안',
    description: '시비·관수·방제·보수 작업이 필요한 구역을 실행 관점으로 정리합니다.',
    items: ['우선 확인 구역', '조치 후보', '관리 메모'],
  },
  {
    icon: Microscope,
    title: '연구·시험포 분석 자료',
    description: '품종·처리구·재배 방식 비교가 필요한 현장은 표와 그래프로 정리합니다.',
    items: ['처리구별 수치', '분석 표', '보고서용 시각자료'],
  },
  {
    icon: Radar,
    title: '정기 모니터링 운영안',
    description: '월별·생육 단계별 관측 주기와 데이터 누적 방식을 제안합니다.',
    items: ['촬영 주기', '운영 캘린더', '누적 리포트 구성'],
  },
];

const packages = [
  {
    name: '단일 필드 진단 패키지',
    bestFor: '특정 농지·과수원·잔디 구역의 현재 상태를 빠르게 확인',
    includes: ['1회 드론 촬영', '식생지수 지도', '문제 후보 구역'],
  },
  {
    name: '생육 단계별 모니터링',
    bestFor: '파종·생장·수확 전후 등 시기별 변화와 조치 효과 확인',
    includes: ['2~4회 반복 관측', '시계열 비교', '관리 우선순위'],
  },
  {
    name: '골프장 필드 관리 패키지',
    bestFor: '페어웨이, 그린, 러프, 티박스의 잔디 품질 관리',
    includes: ['잔디 스트레스 지도', '보수 구역 표시', '월·분기 리포트'],
  },
  {
    name: '시험포·연구 분석 패키지',
    bestFor: '농업기술센터, 연구소, 학교, 기업 시험포의 정량 비교',
    includes: ['처리구별 분석', '그래프·표', '보고서용 자료'],
  },
];

const faqs = [
  {
    question: 'NDVI 분석만으로 병해충이나 원인을 확정할 수 있나요?',
    answer:
      'NDVI와 식생지수는 문제가 의심되는 위치를 빠르게 좁히는 데 강점이 있습니다. 정확한 원인은 현장 조사, 토양·수분 상태, 병해충 확인과 함께 판단해야 하며, 아이엠드론은 현장 확인이 필요한 구역과 우선순위를 리포트로 정리합니다.',
  },
  {
    question: '드론과 위성 데이터 중 어떤 방식을 선택해야 하나요?',
    answer:
      '넓은 면적의 전반적 경향은 위성 데이터가 효율적이고, 세밀한 구역 분석과 고해상도 결과가 필요하면 드론 촬영이 유리합니다. 예산, 면적, 촬영 주기, 필요한 해상도를 기준으로 단독 또는 병행 방식을 제안드립니다.',
  },
  {
    question: '촬영 시기와 날씨가 결과에 영향을 주나요?',
    answer:
      '영향을 줍니다. 작물 생육 단계, 구름, 비, 바람, 촬영 시간, 토양 수분 조건에 따라 지수 값이 달라질 수 있습니다. 그래서 동일 조건에서 반복 관측하거나 촬영 조건을 기록해 비교 가능성을 높이는 방식으로 진행합니다.',
  },
  {
    question: '농장주나 현장 관리자가 이해하기 쉬운 형태로 받을 수 있나요?',
    answer:
      '네. 전문 수치만 전달하지 않고 색상 지도, 구역 번호, 우선 확인 위치, 관리 메모를 함께 제공합니다. 필요 시 현장 미팅에서 지도를 보며 어떤 구역을 먼저 확인해야 하는지 설명드립니다.',
  },
  {
    question: '정기 모니터링이나 장비 도입 컨설팅도 가능한가요?',
    answer:
      '가능합니다. 월별·생육 단계별 정기 촬영, 골프장 정기 관리, 시험포 반복 관측은 물론 자체 드론·센서 도입, 운용 교육, 분석 워크플로우 구축까지 단계적으로 상담할 수 있습니다.',
  },
];

export default function SmartAgriServicePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate min-h-[760px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/services/smart-agri.webp"
            alt="드론과 NDVI 데이터로 분석하는 스마트 농업 필드"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/82" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(14,165,233,0.24),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(34,197,94,0.18),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.72)_45%,rgba(2,6,23,0.96))]" />
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 shadow-[0_0_40px_rgba(14,165,233,0.14)] backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              Smart Agriculture & NDVI Intelligence
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              필드의 생육 상태를
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                드론 데이터로 더 선명하게 봅니다
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              아이엠드론은 농경지, 과수원, 골프장, 시험포의 작물·잔디 상태를 드론과 식생지수 데이터로 분석해
              어디를 먼저 확인하고 어떻게 관리할지 판단할 수 있는 리포트로 제공합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['NDVI 식생지수', '생육 편차 분석', '처방맵·관리 우선순위', '골프장 잔디 진단', '반복 관측 리포트'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-100 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
                <Link href="/contact">
                  스마트 농업 분석 상담하기
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="#deliverables">
                  분석 산출물 보기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-sky-950/40 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200/80">Field Intelligence</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Agri Data Package</h2>
              </div>
              <Sprout className="h-10 w-10 text-sky-300" />
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
            <div className="mt-5 rounded-2xl bg-gradient-to-r from-sky-400/20 to-emerald-300/10 p-5 text-sm leading-6 text-sky-50">
              단순 항공사진이 아니라, 어느 구역을 먼저 확인하고 어떤 관리 결정을 내려야 하는지 볼 수 있는 필드 운영 데이터로 정리합니다.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Why Field Data</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">스마트 농업 관리의 이런 문제를 해결합니다</h2>
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
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">촬영부터 관리 리포트까지</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                정밀농업 데이터는 촬영 자체보다 목적과 해석이 중요합니다. 아이엠드론은 필드 조건, 작물 단계, 분석 지수,
                반복 관측 주기를 함께 설계해 현장에서 실행 가능한 결과물로 제공합니다.
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
                농업 생산 현장부터 골프장, 시험포, 환경 모니터링까지 반복 관측과 구역별 판단이 필요한 곳에 맞춰 구성합니다.
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
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">필드 데이터는 관리 가능한 산출물로 납품됩니다</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              항공 이미지를 넘어서 지수 지도, 문제 후보, 시계열 변화, 관리 우선순위를 정리해 농장·골프장·연구 현장에서 바로 활용할 수 있게 제공합니다.
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
              필드 규모, 작물 종류, 반복 관측 필요성, 현장 관리 방식에 따라 촬영·분석·리포트 범위를 조정합니다.
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
              NDVI 분석은 촬영 조건, 생육 단계, 현장 조사와 함께 해석할 때 가장 정확하게 활용됩니다.
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">From Flight to Field Insight</p>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">
            작물과 잔디의 상태를 감이 아니라 데이터로 관리할 수 있게 만듭니다.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            아이엠드론이 필드 목적에 맞춰 드론 촬영, 식생지수 분석, 반복 관측, 관리 우선순위 리포트 구성을 제안드립니다.
            단발 진단부터 정기 모니터링까지 필요한 범위를 함께 설계해보세요.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
              <Link href="/contact">
                스마트 농업 분석 상담하기
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
