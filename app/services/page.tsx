import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { serviceIconMap } from '@/lib/service-icons';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Database,
  Phone,
  Radar,
  Sparkles,
} from 'lucide-react';

const pageDescription =
  '항공촬영·건설측량·에너지점검·드론관제·공공안전·스마트농업·미디어 콘텐츠까지, 아이엠드론의 드론 기반 데이터 서비스를 소개합니다.';

export const metadata: Metadata = {
  title: `드론 서비스 | ${SITE_NAME}`,
  description: pageDescription,
  alternates: { canonical: '/services' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/services`,
    siteName: SITE_NAME,
    title: `드론 서비스 | ${SITE_NAME}`,
    description: pageDescription,
  },
};

const serviceDetails: Record<string, { value: string; useCases: string[]; outputs: string[] }> = {
  aerial: {
    value: '브랜드와 현장의 규모를 하늘에서 설득력 있게 보여주는 고품질 영상·사진 콘텐츠를 제작합니다.',
    useCases: ['부동산·상업시설', '골프장·리조트', '행사·도시 홍보'],
    outputs: ['4K 영상', '고해상도 사진', 'SNS·홈페이지용 컷'],
  },
  construction: {
    value: '공정 상황과 토공량을 눈으로 보고 숫자로 확인할 수 있도록 현장을 데이터화합니다.',
    useCases: ['공정관리', '토공량 분석', '발주처 보고'],
    outputs: ['정사영상', '3D 모델', '분석 리포트'],
  },
  energy: {
    value: '태양광·풍력·플랜트 설비를 열화상과 고해상도 이미지로 안전하게 점검합니다.',
    useCases: ['태양광 패널', '산업 플랜트', '풍력·고소 설비'],
    outputs: ['열화상 이미지', '이상 후보 목록', '점검 보고서'],
  },
  control: {
    value: '현장 영상과 센서 데이터를 실시간으로 확인하고 상황 대응에 활용할 수 있게 연결합니다.',
    useCases: ['현장 관제', '원격 모니터링', '드론 스테이션'],
    outputs: ['실시간 영상', '운용 기록', '상황 리포트'],
  },
  'public-safety': {
    value: '교량·항만·해상·문화재 등 공공 인프라를 넓고 안전하게 감시·점검합니다.',
    useCases: ['시설물 점검', '해상안전관제', '재난·위험 구역 확인'],
    outputs: ['위치 기반 이미지', '위험 후보 목록', '기관 보고자료'],
  },
  'smart-agri': {
    value: '작물·잔디·골프장 필드의 상태를 식생지수와 항공 데이터로 수치화합니다.',
    useCases: ['작물 생육 확인', '골프장 잔디 관리', '필드 구역별 진단'],
    outputs: ['NDVI 지도', '구역별 상태표', '관리 우선순위'],
  },
  hydrogen: {
    value: '수소 연료전지와 산업용 전원 솔루션을 드론·모빌리티·비상전원 영역에 연결합니다.',
    useCases: ['장시간 운용', '비상전원', '산업용 전원'],
    outputs: ['시스템 구성안', '적용 검토', '운용 컨설팅'],
  },
  contents: {
    value: '드론 촬영 데이터와 브랜드 메시지를 홈페이지·홍보영상·소개자료로 완성합니다.',
    useCases: ['홈페이지 제작', '회사 소개영상', '프로젝트 홍보물'],
    outputs: ['랜딩페이지', '홍보영상', '이미지·카피 세트'],
  },
};

const solutionGroups = [
  {
    title: '데이터 수집·기록',
    description: '현장 상태를 정확히 남기는 항공 이미지·영상·3D 데이터 수집',
    items: ['항공촬영', '건설 모니터링', '시설물 점검'],
    icon: Database,
  },
  {
    title: '분석·진단',
    description: '촬영 결과를 정사영상, 열화상, NDVI, 리포트로 변환하는 분석 서비스',
    items: ['열화상 점검', '토공량 분석', 'NDVI 필드 분석'],
    icon: BarChart3,
  },
  {
    title: '운영·콘텐츠화',
    description: '관제·모니터링·홍보 콘텐츠까지 고객 업무에 맞게 활용',
    items: ['실시간 관제', '공공안전관제', '홈페이지·미디어 콘텐츠'],
    icon: Radar,
  },
];

const selectionGuide = [
  ['홍보 영상이나 항공사진이 필요하다면', '항공촬영 & 프리미엄 영상', '/services/aerial'],
  ['공사 현장을 주기적으로 기록하고 보고해야 한다면', '건설·건축 모니터링 & 항공측량', '/services/construction'],
  ['태양광·플랜트 이상 여부를 확인해야 한다면', '에너지 설비 드론 점검', '/services/energy'],
  ['현장을 원격으로 보고 상황 대응이 필요하다면', '드론 관제 & 실시간 모니터링', '/services/control'],
  ['항만·해상·공공시설을 넓게 감시해야 한다면', '공공·해상안전관제 & 시설점검', '/services/public-safety'],
  ['농작물·잔디 상태를 수치로 보고 싶다면', '스마트 농업 & NDVI 필드 분석', '/services/smart-agri'],
];

const processSteps = [
  ['01', '현장 목적 확인', '촬영 장소, 해결해야 할 문제, 필요한 산출물과 활용 목적을 먼저 정리합니다.'],
  ['02', '비행·안전 검토', '비행 가능 구역, 주변 장애물, 허가 필요 여부, 현장 안전 이슈를 확인합니다.'],
  ['03', '촬영·데이터 수집', 'RGB·열화상·영상·3D·NDVI 등 목적에 맞는 드론 데이터를 수집합니다.'],
  ['04', '분석·리포트 제작', '이미지 선별, 위치화, 수치 분석, 전후 비교, 보고자료 제작을 진행합니다.'],
  ['05', '납품·활용 상담', 'PDF·이미지·영상·지도·모델 등 산출물을 전달하고 후속 활용 방안을 제안합니다.'],
];

const deliverables = [
  '고해상도 사진·영상',
  '정사영상',
  '3D 모델',
  '포인트클라우드',
  '열화상 이미지',
  'NDVI 지도',
  'Before & After 비교자료',
  'PDF 점검·분석 리포트',
  '홈페이지·SNS용 콘텐츠',
];

function SectionHeading({ eyebrow, title, description, tone = 'light' }: { eyebrow: string; title: string; description?: string; tone?: 'light' | 'dark' }) {
  const isDark = tone === 'dark';

  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${isDark ? 'text-sky-300' : 'text-sky-600'}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${isDark ? 'text-white' : 'text-slate-950 dark:text-white'}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-7 ${isDark ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>{description}</p> : null}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/images/services/aerial-hero.jpg" alt="아이엠드론 드론 서비스" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/75" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div>
            <span className="inline-flex items-center rounded-full bg-sky-400/15 px-4 py-2 text-sm font-semibold text-sky-100 ring-1 ring-sky-300/30">
              <Sparkles className="mr-2 h-4 w-4" />
              IMDRONE Drone Data Services
            </span>
            <h1 className="mt-8 text-4xl font-black tracking-tight text-white md:text-6xl">
              현장을 데이터로 바꾸는 드론 서비스
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              아이엠드론은 항공촬영, 건설 모니터링, 에너지 설비 점검, 공공안전관제, 스마트 농업 분석까지 현장 목적에 맞는 드론 데이터를 수집하고 활용 가능한 결과물로 제공합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
              {['항공촬영', '건설·측량', '열화상 점검', '드론 관제', 'NDVI 분석', '보고서 납품'].map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" variant="primary-blue" asChild>
                <Link href="#service-list">
                  서비스 살펴보기
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="hero-outline" asChild>
                <Link href="/contact">
                  프로젝트 문의
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md lg:mt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Service Scope</p>
            <div className="mt-6 grid gap-4">
              {[
                ['Collect', '현장 사진·영상·열화상·3D 데이터 수집'],
                ['Analyze', '정사영상·NDVI·토공량·이상 후보 분석'],
                ['Report', 'PDF 보고서·전후 비교·콘텐츠 납품'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-950/50 p-5 ring-1 ring-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{label}</p>
                  <p className="mt-2 text-lg font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {solutionGroups.map(({ title, description, items, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <Icon className="h-10 w-10 text-sky-300" />
              <h2 className="mt-6 text-xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="service-list" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service Lineup"
            title="아이엠드론 서비스 전체 보기"
            description="각 서비스는 단순 촬영이 아니라 현장 목적, 분석 방식, 납품 산출물까지 함께 설계합니다."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = serviceIconMap[service.icon];
              const detail = serviceDetails[service.id];
              return (
                <Link key={service.id} href={service.link} className="group flex overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900 dark:ring-slate-800">
                  <article className="flex w-full flex-col">
                    <div className="relative h-44 overflow-hidden">
                      <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-sky-600 shadow-sm">
                        {Icon ? <Icon className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-bold tracking-tight group-hover:text-sky-600">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{detail?.value ?? service.description}</p>

                      <div className="mt-5">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">활용처</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {(detail?.useCases ?? []).map((item) => (
                            <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">대표 산출물</p>
                        <ul className="mt-2 space-y-2">
                          {(detail?.outputs ?? []).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto pt-6 text-sm font-semibold text-sky-600">
                        자세히 보기
                        <ArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service Guide"
            title="어떤 서비스가 필요하신가요?"
            description="원하는 결과물이나 현장 문제를 기준으로 가장 가까운 서비스를 먼저 확인해보세요."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {selectionGuide.map(([question, serviceName, href]) => (
              <Link key={question} href={href} className="group flex items-center justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-slate-950 dark:ring-slate-800">
                <div>
                  <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">{question}</p>
                  <p className="mt-2 text-lg font-bold group-hover:text-sky-600">{serviceName}</p>
                </div>
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-sky-500 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Workflow"
            title="상담부터 납품까지, 활용 목적 중심으로 진행합니다"
            description="아이엠드론은 비행 자체보다 고객이 바로 활용할 수 있는 산출물 설계를 중요하게 봅니다."
          />
          <div className="grid gap-5 md:grid-cols-5">
            {processSteps.map(([step, title, description]) => (
              <div key={step} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                <p className="text-sm font-black tracking-[0.24em] text-sky-500">{step}</p>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Deliverables"
            title="드론 데이터는 활용 가능한 결과물로 납품됩니다"
            description="사진과 영상 원본뿐 아니라 의사결정, 보고, 홍보, 유지관리 업무에 바로 사용할 수 있는 자료로 정리합니다."
            tone="dark"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <ClipboardCheck className="h-5 w-5 flex-shrink-0 text-sky-300" />
                <span className="font-semibold text-slate-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 px-6 py-14 text-center text-white shadow-2xl sm:px-10 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Contact</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">현장 목적에 맞는 드론 서비스를 제안드립니다</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            촬영 장소, 필요한 결과물, 활용 목적을 알려주시면 비행 가능 여부와 적합한 서비스 구성을 먼저 검토해드립니다.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="primary-blue" asChild>
              <Link href="/contact">
                문의하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="hero-outline" asChild>
              <Link href="tel:010-4790-6650">
                <Phone className="mr-2 h-5 w-5" />
                010-4790-6650
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
