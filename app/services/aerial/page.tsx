import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  FileArchive,
  Image as ImageIcon,
  Landmark,
  MapPinned,
  Megaphone,
  MonitorPlay,
  Mountain,
  Plane,
  PlayCircle,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  TimerReset,
  Video,
  Waves,
  Phone,
} from 'lucide-react';

const service = services.find((item) => item.id === 'aerial')!;

const pageDescription =
  '브랜드, 부동산, 관광, 행사, 산업 현장을 고품질 항공 영상·사진과 웹·SNS·제안서에 바로 활용 가능한 콘텐츠로 제작하는 아이엠드론의 항공촬영·프리미엄 영상 서비스입니다.';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/aerial',
  },
  title: `${service.title} | ${SITE_NAME}`,
  description: pageDescription,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/services/aerial`,
    siteName: SITE_NAME,
    title: `${service.title} | ${SITE_NAME}`,
    description: pageDescription,
    images: [{ url: `${SITE_URL}${service.image}`, width: 1200, height: 630 }],
  },
};

const heroStats = [
  {
    label: 'Premium Aerial',
    value: '고품질 항공 영상·사진',
    detail: '4K 이상 촬영, 안정적인 비행 동선, 현장 목적에 맞춘 컷 구성으로 브랜드 완성도 강화',
  },
  {
    label: 'Content Ready',
    value: '바로 쓰는 홍보 콘텐츠',
    detail: '홈페이지, 유튜브, SNS, 제안서, 행사 리포트에 맞는 영상·이미지 형태로 납품',
  },
  {
    label: 'Safe Operation',
    value: '안전 중심 촬영 운영',
    detail: '촬영 위치, 비행 가능 여부, 기상, 현장 동선을 검토해 안정적으로 촬영 진행',
  },
];

const painPoints = [
  {
    icon: Mountain,
    title: '현장의 규모와 입지가 지상 사진만으로 부족합니다',
    description: '부동산, 리조트, 관광지, 산업단지는 주변 환경과 동선, 전체 규모가 중요합니다. 항공 시점은 공간의 가치를 한눈에 보여줍니다.',
  },
  {
    icon: Megaphone,
    title: '홍보 영상은 첫 장면에서 신뢰를 만들어야 합니다',
    description: '고객은 몇 초 안에 브랜드의 규모와 분위기를 판단합니다. 안정적인 항공 오프닝과 주요 컷은 콘텐츠의 첫인상을 바꿉니다.',
  },
  {
    icon: MonitorPlay,
    title: '촬영 원본만으로는 활용이 어렵습니다',
    description: '원본 파일은 크고 정리하기 어렵습니다. 웹, SNS, 제안서, 보고서에 맞게 편집·보정·선별된 산출물이 필요합니다.',
  },
  {
    icon: ShieldCheck,
    title: '비행 가능성과 안전 검토가 필요합니다',
    description: '공항 주변, 도심, 행사장, 해상·산악 환경은 사전 검토와 현장 안전관리가 중요합니다. 촬영 전 조건을 먼저 확인합니다.',
  },
];

const productionFlow = [
  {
    step: '01',
    title: '촬영 목적·활용 채널 확인',
    description: '브랜드 홍보, 부동산 분양, 관광 소개, 행사 기록, 산업 현장 설명 등 목적과 납품 채널을 먼저 정리합니다.',
  },
  {
    step: '02',
    title: '촬영 콘셉트·동선 설계',
    description: '보여줘야 할 장면, 이동 동선, 고도, 시간대, 인물·시설 노출 범위를 정하고 필요한 컷 리스트를 구성합니다.',
  },
  {
    step: '03',
    title: '비행 조건·안전 검토',
    description: '촬영 위치의 비행 제한, 기상, 장애물, 인파, 차량·선박 이동, 현장 통제 범위를 확인합니다.',
  },
  {
    step: '04',
    title: '항공·지상 복합 촬영',
    description: '드론 촬영을 중심으로 필요 시 지상 카메라, 인터뷰, 현장 스케치, 타임랩스 컷을 함께 구성합니다.',
  },
  {
    step: '05',
    title: '선별·편집·색보정',
    description: '핵심 컷을 선별하고 컷 편집, 색보정, 자막, 로고, BGM, 세로형 재편집 등 목적별 후반 작업을 진행합니다.',
  },
  {
    step: '06',
    title: '채널별 파일 납품',
    description: '홈페이지, 유튜브, SNS, 제안서, 전시 화면에 맞는 해상도와 비율로 최종 영상·사진·원본 옵션을 제공합니다.',
  },
];

const useCases = [
  {
    icon: Building2,
    title: '부동산·상업시설 마케팅',
    description: '단지 배치, 조망, 접근성, 주변 인프라를 항공 시점으로 보여줘 분양 자료와 투자자 설명 자료의 설득력을 높입니다.',
    tags: ['분양 홍보', '상업시설', '입지 설명'],
  },
  {
    icon: Waves,
    title: '관광지·리조트·해양 레저',
    description: '풍광, 이동 동선, 시설 규모, 계절감을 담아 관광 홍보 영상, 리조트 소개, 마리나·요트 콘텐츠로 제작합니다.',
    tags: ['관광 홍보', '리조트', '해양 레저'],
  },
  {
    icon: Landmark,
    title: '행사·축제·지자체 홍보',
    description: '행사장 전체 규모, 인파 흐름, 퍼레이드, 야간 경관, 지역 랜드마크를 담아 하이라이트 영상과 기록 콘텐츠로 남깁니다.',
    tags: ['축제', '공공 홍보', '행사 기록'],
  },
  {
    icon: Plane,
    title: '기업·브랜드 홍보 영상',
    description: '공장, 본사, 물류센터, 제품 시연, 현장 작업 장면을 항공 컷과 지상 컷으로 엮어 기업 소개 영상의 첫인상을 만듭니다.',
    tags: ['기업 소개', '브랜드 필름', '현장 스케치'],
  },
  {
    icon: Route,
    title: '산업 현장·장기 프로젝트 기록',
    description: '건설, 플랜트, 항만, 에너지 시설처럼 규모가 큰 현장을 정기적으로 기록해 진행 상황과 변화 과정을 콘텐츠로 축적합니다.',
    tags: ['산업 현장', '정기 촬영', '프로젝트 기록'],
  },
];

const deliverables = [
  {
    icon: Video,
    title: '홍보용 편집 영상',
    description: '브랜드와 현장의 분위기를 전달하는 본편 영상을 제공합니다.',
    items: ['30초~3분 내외 편집본', '컷 편집·색보정', '자막·로고·BGM 옵션'],
  },
  {
    icon: ImageIcon,
    title: '고해상도 항공 사진',
    description: '웹, 인쇄물, 제안서에 활용할 수 있는 주요 컷을 선별해 납품합니다.',
    items: ['대표 항공 컷', '보정 이미지', '썸네일 후보'],
  },
  {
    icon: PlayCircle,
    title: '숏폼·SNS 콘텐츠',
    description: '인스타그램, 유튜브 쇼츠, 릴스, 행사 홍보에 맞는 세로형 콘텐츠를 제작합니다.',
    items: ['세로형 영상', '짧은 티저', 'SNS 업로드용 파일'],
  },
  {
    icon: FileArchive,
    title: '원본·선별 클립 옵션',
    description: '추가 편집이나 내부 보관이 필요한 경우 원본 또는 선별 클립을 제공합니다.',
    items: ['원본 영상 옵션', '선별 클립', '장기 보관용 파일'],
  },
  {
    icon: ClipboardCheck,
    title: '촬영 결과 리포트',
    description: '촬영 일자, 장소, 컷 구성, 납품 파일, 활용 제안을 간단히 정리합니다.',
    items: ['촬영 개요', '납품 목록', '활용 채널 제안'],
  },
  {
    icon: MapPinned,
    title: '정기 촬영 아카이브',
    description: '장기 프로젝트는 동일 지점·유사 동선 기준으로 변화 과정을 기록할 수 있습니다.',
    items: ['월별 비교 컷', '프로젝트 기록', '시계열 콘텐츠'],
  },
];

const packages = [
  {
    name: '기본 항공촬영',
    bestFor: '현장 사진과 짧은 항공 클립이 필요한 부동산·시설·행사',
    includes: ['반일 촬영', '대표 사진', '선별 영상 클립'],
  },
  {
    name: '홍보 영상 제작',
    bestFor: '홈페이지, 유튜브, 제안서에 사용할 완성형 영상이 필요한 경우',
    includes: ['촬영 기획', '편집·색보정', '자막·BGM'],
  },
  {
    name: '행사·관광 콘텐츠',
    bestFor: '축제, 관광지, 리조트, 해양 레저 현장을 홍보해야 하는 기관·기업',
    includes: ['하이라이트 영상', 'SNS 컷', '홍보 이미지'],
  },
  {
    name: '정기 기록 패키지',
    bestFor: '건설·산업 현장, 장기 프로젝트, 계절별 관광 콘텐츠를 누적하려는 경우',
    includes: ['반복 촬영', '비교 컷', '아카이브 관리'],
  },
];

const faqs = [
  {
    question: '촬영 가능 지역은 어떻게 확인하나요?',
    answer:
      '촬영 위치를 알려주시면 공역, 주변 시설, 비행 제한, 현장 안전 조건을 먼저 확인합니다. 공항 인근, 군사시설, 도심 밀집 지역 등은 추가 협의나 제한이 있을 수 있습니다.',
  },
  {
    question: '날씨가 좋지 않으면 촬영은 어떻게 진행되나요?',
    answer:
      '강풍, 비, 안개 등 안전과 화질에 영향을 주는 기상에서는 촬영 일정을 조정합니다. 중요한 행사나 프로젝트는 예비일을 함께 잡아두는 것을 권장드립니다.',
  },
  {
    question: '촬영만 하고 편집은 제외할 수 있나요?',
    answer:
      '가능합니다. 촬영 원본 또는 선별 클립만 납품하는 방식도 가능합니다. 다만 바로 홍보에 활용해야 한다면 컷 편집, 색보정, 자막이 포함된 편집 패키지를 권장드립니다.',
  },
  {
    question: '원본 파일도 받을 수 있나요?',
    answer:
      '프로젝트 범위에 따라 원본 파일 제공이 가능합니다. 원본은 용량이 크고 후반 작업 전 상태이므로, 필요한 경우 선별 원본 또는 납품용 변환 파일 형태로 안내드립니다.',
  },
  {
    question: '납품 기간은 어느 정도 걸리나요?',
    answer:
      '촬영만 진행하는 경우 비교적 빠르게 납품 가능하며, 편집 영상은 분량과 수정 범위에 따라 일정이 달라집니다. 상담 시 활용 일정과 공개 예정일을 알려주시면 납품 일정을 맞춰 제안드립니다.',
  },
];

export default function AerialServicePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate min-h-[760px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/services/aerial-hero.jpg"
            alt="프리미엄 항공촬영과 영상 제작 현장"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/78" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(14,165,233,0.24),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.16),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.68)_46%,rgba(2,6,23,0.96))]" />
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 shadow-[0_0_40px_rgba(14,165,233,0.14)] backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              Aerial Photography & Premium Video Production
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">현장을 더 크게</span>
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                항공 콘텐츠로
              </span>
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                보여드립니다
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              아이엠드론은 브랜드, 부동산, 관광, 행사, 산업 현장을 고품질 항공 영상과 사진으로 담아
              홈페이지·SNS·제안서에 바로 활용할 수 있는 콘텐츠로 제작합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['브랜드 홍보 영상', '부동산·상업시설', '관광·리조트', '행사·축제 기록', '산업 현장 콘텐츠'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-100 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
                <Link href="/contact">
                  항공촬영 상담하기
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
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200/80">Aerial Content</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Premium Flight Package</h2>
              </div>
              <Camera className="h-10 w-10 text-sky-300" />
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
              촬영 목적과 활용 채널을 먼저 정리한 뒤, 필요한 장면과 납품 형태까지 함께 설계합니다.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Why Aerial Content</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">현장을 더 설득력 있게 보여줍니다</h2>
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
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">기획부터 납품까지</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                항공촬영은 비행만으로 끝나지 않습니다. 목적, 장면, 안전, 날씨, 편집 방향, 납품 채널까지 정리해야
                고객이 바로 사용할 수 있는 콘텐츠가 됩니다.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {productionFlow.map((item) => (
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
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">촬영 유형과 적용 분야</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                공간의 규모, 행사의 분위기, 브랜드의 첫인상, 산업 현장의 흐름을 항공 시점으로 명확하게 보여줍니다.
              </p>
            </div>
            <Button variant="outline" className="w-fit border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
              <Link href="/projects">
                포트폴리오 보기
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
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">항공 콘텐츠는 바로 활용 가능한 산출물로 납품됩니다</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              촬영 원본뿐 아니라 홍보 영상, 고해상도 이미지, 숏폼, 선별 클립, 촬영 기록까지 목적에 맞춰 제공합니다.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="h-10 w-10 text-sky-300" />
                    <BadgeCheck className="h-6 w-6 text-cyan-200" />
                  </div>
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

      <section className="border-y border-white/10 bg-slate-900/70 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Packages</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">목적별 추천 구성</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              필요한 촬영 범위와 납품 형태에 따라 작게 시작하거나, 영상·사진·숏폼·정기 기록까지 묶어 진행할 수 있습니다.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {packages.map((item) => (
              <div key={item.name} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.045] p-6">
                <Target className="h-9 w-9 text-sky-300" />
                <h3 className="mt-5 text-xl font-semibold text-white">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.bestFor}</p>
                <div className="mt-6 space-y-2">
                  {item.includes.map((text) => (
                    <div key={text} className="rounded-2xl bg-slate-950/60 px-4 py-3 text-sm text-slate-200">
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">자주 묻는 질문</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              촬영 가능 지역, 날씨, 원본 제공, 편집 범위, 납품 일정까지 시작 전에 자주 확인하는 내용을 정리했습니다.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-3xl border border-white/10 bg-slate-900/80 p-6 open:border-sky-300/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                  {faq.question}
                  <TimerReset className="h-5 w-5 flex-shrink-0 text-sky-300 transition group-open:rotate-45" />
                </summary>
                <p className="mt-4 leading-7 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-400/20 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-sky-950/30 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">촬영 목적과 활용 채널을 알려주시면, 필요한 장면부터 제안하겠습니다</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                브랜드 홍보, 부동산 마케팅, 관광·행사 기록, 산업 현장 콘텐츠가 필요하다면 아이엠드론이
                항공촬영 기획부터 편집·납품까지 함께 준비하겠습니다.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button size="lg" className="bg-white text-slate-950 hover:bg-sky-100" asChild>
                <Link href="/contact">
                  항공촬영 상담 요청
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="/projects">
                  포트폴리오 확인하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
