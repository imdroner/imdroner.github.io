import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import { generalData } from '@/data/general';
import {
  ArrowRight,
  BarChart3,
  Building2,
  Camera,
  CheckCircle2,
  ClipboardList,
  FileText,
  Radar,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Wrench,
} from 'lucide-react';

const pageTitle = '도원씨엔씨 × 아이엠드론 드론 AI 외벽 진단 협업 제안';
const pageDescription =
  '아파트 외벽 크랙 보수·재도장·옥상 방수 공사를 위한 드론 고해상도 촬영, 열화상 점검, AI 이상 후보 탐지, Before & After 리포트 협업 제안입니다.';

export const metadata: Metadata = {
  title: `${pageTitle} | ${SITE_NAME}`,
  description: pageDescription,
  alternates: {
    canonical: '/proposals/dowon-cnc-drone-ai-diagnosis',
  },
  openGraph: {
    type: 'article',
    locale: 'ko_KR',
    url: `${SITE_URL}/proposals/dowon-cnc-drone-ai-diagnosis`,
    siteName: SITE_NAME,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: `${SITE_URL}/images/proposals/dowon-cnc/cover-facade.jpg`,
        width: 1600,
        height: 900,
        alt: '드론 AI 외벽 진단 협업 제안',
      },
    ],
  },
};

const proposalImages = {
  cover: '/images/proposals/dowon-cnc/cover-facade.jpg',
  construction: '/images/proposals/dowon-cnc/construction-service.jpg',
  energy: '/images/proposals/dowon-cnc/energy-service.jpg',
  publicSafety: '/images/proposals/dowon-cnc/public-safety-service.jpg',
  before: '/images/proposals/dowon-cnc/before-sample.jpg',
  after: '/images/proposals/dowon-cnc/after-sample.jpg',
  thermal: '/images/proposals/dowon-cnc/thermal-sample.jpg',
  matrice4t: '/images/proposals/dowon-cnc/matrice4t.jpg',
  mavic3Thermal: '/images/proposals/dowon-cnc/mavic3-thermal.jpg',
  report: '/images/proposals/dowon-cnc/report-sample.jpg',
  siteInspection: '/images/proposals/dowon-cnc/site-inspection.jpg',
};

const collaborationCards = [
  {
    title: '도원씨엔씨',
    description: '외벽 크랙 보수, 재도장, 옥상 방수, 폴리우레아·방수 공법, 시설물 유지관리 시공',
    icon: Wrench,
  },
  {
    title: '아이엠드론',
    description: '고해상도 드론 촬영, 열화상 점검, 위치 기반 이미지 기록, AI 이상 후보 탐지, 리포트 제공',
    icon: Radar,
  },
  {
    title: '공동 제안 상품',
    description: '공사 전 진단부터 보수 범위 합의, 공사 후 검증까지 연결하는 데이터 기반 보수공사 패키지',
    icon: Sparkles,
  },
];

const strengths = [
  {
    title: '드론 촬영·운용',
    description: '고해상도 사진·영상 촬영과 현장 목적에 맞춘 비행 계획을 수립합니다.',
    icon: Camera,
  },
  {
    title: '건설·건축 모니터링',
    description: '공정관리, 구조물·시설물 점검, 정사영상·3D 모델·포인트클라우드 제작 경험을 보유합니다.',
    icon: Building2,
  },
  {
    title: '에너지·열화상 점검',
    description: '태양광·플랜트 등 광역 설비를 열화상·고해상도 영상으로 비접촉 점검합니다.',
    icon: Thermometer,
  },
  {
    title: '데이터 기반 리포트',
    description: '위치 기반 이미지, 전후 비교, 보수 우선순위, 보고용 자료를 제작합니다.',
    icon: FileText,
  },
];

const applications = [
  {
    title: '외벽 크랙·도장 박리',
    description: '고층부와 접근 곤란 구간을 근접 촬영해 균열, 박리, 오염·변색 위치를 기록합니다.',
  },
  {
    title: '누수·습기 의심 구간',
    description: '열화상과 RGB 이미지를 함께 비교해 온도 이상, 습기 체류, 열교 후보를 선별합니다.',
  },
  {
    title: '옥상 방수·배수 상태',
    description: '방수층 들뜸, 균열, 배수 불량, 물고임 등 보수 전 확인이 필요한 구간을 촬영합니다.',
  },
  {
    title: '공사 전후 검증',
    description: '동일 위치·유사 각도 촬영으로 보수 전후 상태를 비교하고 하자·민원 대응 자료로 활용합니다.',
  },
];

const processSteps = [
  ['01', '상담·현장 분석', '단지 위치, 동 수, 외벽/옥상 범위, 보수 목적, 필요한 데이터 형식을 파악합니다.'],
  ['02', '비행 가능 검토', '비행 제한 구역, 고도 제한, 주변 장애물, 입주민 고지·안전 이슈를 확인합니다.'],
  ['03', '촬영 계획 수립', '동/라인/층 기준 촬영 순서, RGB·열화상 구간, 동일 위치 전후 비교 기준을 설계합니다.'],
  ['04', '현장 촬영', '사전 안전 브리핑 후 고해상도 RGB·열화상 데이터를 수집합니다.'],
  ['05', '분석·정리', '이상 후보 위치화, 유형 분류, 보수 우선순위 및 이미지 증거를 정리합니다.'],
  ['06', '리포트 납품', 'PDF 요약본, 원본 이미지, 전후 비교자료, 관리사무소 제출용 자료를 제공합니다.'],
];

const deliverables = [
  ['점검 위치도', '동·라인·층 기준으로 문제 후보 위치를 정리합니다.'],
  ['RGB/열화상 이미지 세트', '각 이상 지점의 고해상도 사진과 열화상 이미지를 제공합니다.'],
  ['분석 리포트', '유형별 분류, 심각도, 보수 우선순위, 조치 권고를 정리합니다.'],
  ['전후 비교자료', '공사 전·후 동일 구간 기록으로 결과를 검증합니다.'],
  ['원본 데이터', '고객사·시공사의 자체 보관 및 재분석용 이미지를 제공합니다.'],
  ['관리 이력화', '정기점검·하자 대응·민원 설명자료로 재활용할 수 있습니다.'],
];

const pilotPackages = [
  {
    name: 'A. 공사 수주 지원용 기본 점검',
    price: '300만~350만 원 + VAT',
    summary: 'RGB·열화상 동시 촬영 + 이상 후보 표시 + 제안용 요약 리포트',
    use: '단지 제안 / 보수공사 필요성 설명',
  },
  {
    name: 'B. 간이 3D 포함형',
    price: '350만~450만 원 + VAT',
    summary: '기본 점검 + 설명용 간이 3D 시각화 + 위치 이해 자료',
    use: '입주자대표회의·관리사무소 설득자료 강화',
  },
  {
    name: 'C. 공사 후 전후 비교 옵션',
    price: '별도 협의',
    summary: '보수 후 동일 구간 재촬영 + Before & After 비교자료',
    use: '시공 결과 검증 / 민원 대응',
  },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl dark:text-white">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p> : null}
    </div>
  );
}

export default function DowonCncDroneAiDiagnosisProposalPage() {
  return (
    <main className="bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={proposalImages.cover} alt="드론 AI 외벽 진단 제안 표지" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/90 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-sky-400/15 px-4 py-2 text-sm font-semibold text-sky-200 ring-1 ring-sky-300/30">
              도원씨엔씨 × 아이엠드론 협업 제안
            </span>
            <h1 className="mt-8 text-4xl font-black tracking-tight text-white md:text-6xl">
              아파트 외벽 보수공사를 위한<br className="hidden md:block" /> 드론 AI 진단·열화상 점검
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              외벽 크랙·도장 박리·누수 의심 구간을 촬영·분석하고, 공사 전후를 데이터로 기록하는 협업형 점검 서비스입니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-200">
              {['고해상도 외벽 촬영', '열화상 점검', 'AI 이상 후보 탐지', 'Before & After 리포트'].map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <p className="text-sm font-semibold text-sky-300">아이엠드론</p>
            <p className="mt-2 text-2xl font-bold">드론 기반 데이터 전문 기업</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg leading-8 text-slate-200">
              아이엠드론은 항공촬영·건설측량·에너지점검·스마트농업·드론관제 전문 서비스 역량을 기반으로, 시공사와 관리사무소가 실제로 필요한 데이터와 뷰포인트를 기준으로 촬영·분석·보고합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Collaboration"
            title="보수 시공 역량과 드론 데이터의 결합"
            description="도원씨엔씨의 외벽 보수·방수 시공 역량에 아이엠드론의 촬영·분석·기록 데이터를 결합합니다."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {collaborationCards.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <Icon className="h-10 w-10 text-sky-500" />
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [proposalImages.construction, '건설·건축 모니터링'],
              [proposalImages.energy, '열화상 기반 설비 점검'],
              [proposalImages.publicSafety, '시설물·공공 인프라 점검'],
            ].map(([src, label]) => (
              <figure key={label} className="overflow-hidden rounded-3xl bg-slate-100 shadow-sm dark:bg-slate-900">
                <img src={src} alt={label} className="h-56 w-full object-cover" />
                <figcaption className="px-5 py-4 text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why IMDRONE" title="아이엠드론 역량 요약" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
                <Icon className="h-9 w-9 text-sky-500" />
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Application"
            title="아파트 외벽·옥상 적용 범위"
            description="도원씨엔씨의 보수·방수 업무와 연결되는 점검 대상을 중심으로 구성했습니다."
          />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="grid gap-5 md:grid-cols-2">
              {applications.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 p-6 dark:border-slate-800">
                  <CheckCircle2 className="h-7 w-7 text-emerald-500" />
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl dark:bg-slate-900">
              <img src={proposalImages.siteInspection} alt="현장 점검 데이터 예시" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="진행 프로세스"
            description="건설·에너지 점검 프로세스를 아파트 외벽 보수 협업에 맞게 재구성했습니다."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(([number, title, description]) => (
              <div key={number} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <span className="text-sm font-bold text-sky-300">{number}</span>
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl bg-sky-400/10 p-6 ring-1 ring-sky-300/20">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 h-7 w-7 flex-none text-sky-300" />
              <div>
                <h3 className="text-lg font-bold">개인정보·사생활 보호 원칙</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  촬영 전 관리사무소 고지, 세대 창문·베란다 등 사생활 노출 구간 최소화 또는 블러 처리, 촬영 데이터의 진단·보수 목적 외 사용 금지를 기본 원칙으로 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technology"
            title="활용 장비·기술 스펙"
            description="홈페이지 제품 데이터 기준으로 외벽·열화상 점검에 적합한 장비 스펙을 반영했습니다."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-900">
              <img src={proposalImages.matrice4t} alt="DJI Matrice 4T" className="h-56 w-full rounded-2xl object-contain bg-white" />
              <h3 className="mt-5 text-xl font-bold">DJI Matrice 4T</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                광학 + 열화상 + 레이저 거리측정 기반 멀티센서 시스템, 640×512 열화상, 최대 49분 비행시간을 활용할 수 있습니다.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-900">
              <img src={proposalImages.mavic3Thermal} alt="DJI Mavic 3 Thermal" className="h-56 w-full rounded-2xl object-contain bg-white" />
              <h3 className="mt-5 text-xl font-bold">DJI Mavic 3 Thermal</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                640×512 열화상, 20MP 고해상도 촬영, RTK 모듈 지원, 최대 45분 비행시간으로 소규모·중규모 점검에 적합합니다.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-900">
              <img src={proposalImages.thermal} alt="열화상 이상 패턴 해석 예시" className="h-56 w-full rounded-2xl object-cover" />
              <h3 className="mt-5 text-xl font-bold">열화상 + RGB 복합 분석</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                열화상은 균열 자체를 직접 판별하는 장비가 아니라, 누수·습기·열교 등으로 인한 온도 이상을 RGB 이미지와 함께 해석하는 보조 진단입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Before & After"
            title="보수 전후 비교자료 구성 예시"
            description="실제 현장에서는 동일 위치·동일 각도의 촬영 이미지를 기준으로 보수 전후를 비교합니다."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
              <img src={proposalImages.before} alt="외벽 점검 Before 예시" className="h-80 w-full object-cover" />
              <figcaption className="p-6">
                <p className="text-sm font-semibold text-red-500">BEFORE</p>
                <h3 className="mt-2 text-xl font-bold">이상 후보 위치 표시</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">균열·박리·누수 흔적 등 보수 협의가 필요한 구간을 이미지 위에 표시합니다.</p>
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
              <img src={proposalImages.after} alt="외벽 보수 After 예시" className="h-80 w-full object-cover" />
              <figcaption className="p-6">
                <p className="text-sm font-semibold text-emerald-500">AFTER</p>
                <h3 className="mt-2 text-xl font-bold">보수 완료 후 동일 구간 기록</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">시공 결과 검증, 하자 대응, 입주자대표회의 보고자료로 활용합니다.</p>
              </figcaption>
            </figure>
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm text-slate-500 dark:text-slate-400">
            위 이미지는 홈페이지/블로그 보유 이미지를 바탕으로 구성한 설명용 샘플입니다. 시범 현장 진행 시 실제 촬영 데이터로 교체합니다.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Deliverables" title="제공 산출물" />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="grid gap-5 md:grid-cols-2">
              {deliverables.map(([title, description]) => (
                <div key={title} className="rounded-3xl border border-slate-200 p-6 dark:border-slate-800">
                  <ClipboardList className="h-7 w-7 text-sky-500" />
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
                </div>
              ))}
            </div>
            <figure className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl dark:bg-slate-900">
              <img src={proposalImages.report} alt="리포트 예시" className="h-96 w-full object-cover" />
              <figcaption className="p-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
                이미지·위치·상태 정보를 축적하면 향후 보수 이력 관리와 민원 대응에 활용할 수 있습니다.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Value for Dawon C&C" title="도원씨엔씨 활용 가치" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['입주자대표회의 설득', '공사 필요성과 보수 범위를 사진·열화상·위치 정보로 설명합니다.'],
              ['보수 범위 합의', '누락 구간을 줄이고 우선순위를 사전에 공유합니다.'],
              ['공사 후 검증', 'Before & After 기록으로 결과 설명과 하자 대응 근거를 확보합니다.'],
              ['정기점검 상품화', '외벽·옥상·방수 상태를 주기적으로 추적하는 유지관리 서비스로 확장합니다.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <BarChart3 className="h-8 w-8 text-sky-300" />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
            <h3 className="text-2xl font-bold">공동 제안 패키지</h3>
            <p className="mt-4 text-slate-300">
              ① 공사 전 진단 촬영 → ② 보수 범위 협의 리포트 → ③ 공사 후 비교 촬영 → ④ 관리사무소 제출용 요약본
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pilot Package"
            title="공사 수주 지원용 기초 점검 패키지"
            description="정밀 안전진단이 아니라, 아파트 관계자에게 보수공사의 필요성을 설명하기 위한 제안용 시각자료 제작을 우선합니다."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {pilotPackages.map((item) => (
              <div key={item.name} className="rounded-3xl border border-slate-200 p-7 shadow-sm dark:border-slate-800">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="mt-4 text-2xl font-black text-sky-600 dark:text-sky-300">{item.price}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.summary}</p>
                <p className="mt-6 rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">활용: {item.use}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl bg-amber-50 p-6 text-sm leading-7 text-amber-900 ring-1 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-100 dark:ring-amber-400/20">
            Matrice 4T·Mavic 3 Thermal 장비는 RGB와 열화상 동시 촬영이 가능하므로, 공사 수주 전 기본 점검 단계에서는 촬영·정리 효율을 반영한 합리적인 견적 구성이 가능합니다. 열화상 결과는 누수 원인을 확정하는 정밀진단이 아니라, 습기·열교·방수층 이상 의심 구간을 선별하는 참고자료로 활용합니다.
          </div>
          <div className="mt-8 rounded-3xl bg-slate-50 p-8 dark:bg-slate-900">
            <h3 className="text-xl font-bold">견적 산정 기준</h3>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
              {['대상 동 수·라인 수·층수', '외벽/옥상/공용부 촬영 범위', '열화상 포함 여부와 촬영 시간대', '리포트 상세 수준', '공사 후 재촬영 포함 여부'].map((item) => (
                <span key={item} className="rounded-full bg-white px-4 py-2 ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm dark:bg-slate-950 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Next Step</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">시범 현장 1건으로 협업 구조를 검증합니다.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-4">
              {[
                ['1', '샘플 현장 선정'],
                ['2', '촬영 범위 확정'],
                ['3', '리포트 템플릿 확정'],
                ['4', '공동 제안 상품화'],
              ].map(([number, title]) => (
                <div key={number} className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
                  <span className="text-sm font-bold text-sky-600">{number}</span>
                  <p className="mt-2 font-bold">{title}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 rounded-3xl bg-slate-950 p-6 text-white md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-bold">아이엠드론</p>
                <p className="mt-1 text-sm text-slate-300">{generalData.about}</p>
                <p className="mt-2 text-sm text-slate-300">Email: imdrone.site@gmail.com · Instagram: @imdrone_official · YouTube: @imdrone6824</p>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-400">
                상담 문의하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
