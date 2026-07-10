import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileText,
  Fuel,
  Gauge,
  Lightbulb,
  MonitorCog,
  Phone,
  Plane,
  PlugZap,
  Route,
  Settings2,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from 'lucide-react';

const service = services.find((item) => item.id === 'hydrogen')!;

const pageDescription =
  '드론, 모빌리티, 이동형 전원, 비상·백업 전원, 실증·전시 시스템에 적용할 수 있는 수소 연료전지 시스템을 현장 목적에 맞춰 설계·공급·파일럿 운영까지 지원하는 아이엠드론의 수소 연료전지 응용 솔루션입니다.';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/hydrogen',
  },
  title: `${service.title} | ${SITE_NAME}`,
  description: pageDescription,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/services/hydrogen`,
    siteName: SITE_NAME,
    title: `${service.title} | ${SITE_NAME}`,
    description: pageDescription,
    images: [{ url: `${SITE_URL}${service.image}`, width: 1200, height: 630 }],
  },
};

const heroStats = [
  { label: 'Long Endurance', value: '장시간 전원 솔루션', detail: '배터리 한계를 보완해 드론·이동체·야외 장비의 연속 운용 시간을 확장' },
  { label: 'Backup Power', value: '비상·백업 전원', detail: '정전, 재난, 원격 현장, 관제 설비에 필요한 친환경 전력 구성 검토' },
  { label: 'Pilot Project', value: '실증·전시 패키지', detail: '공공·연구·기업 프로젝트에 맞춘 데모, 시범 운용, 홍보 콘텐츠 지원' },
];

const painPoints = [
  {
    icon: BatteryCharging,
    title: '배터리만으로는 운용 시간이 부족합니다',
    description: '장시간 비행, 원격 현장 장비, 이동형 로봇은 배터리 교체와 충전 대기 때문에 임무 연속성이 떨어질 수 있습니다.',
  },
  {
    icon: PlugZap,
    title: '전력 인프라가 없는 현장이 많습니다',
    description: '건설·재난·행사·해상·산간 현장처럼 전원 접근이 어려운 곳에서는 조용하고 깨끗한 이동형 전원이 필요합니다.',
  },
  {
    icon: ShieldCheck,
    title: '비상 전원은 신뢰성과 안전성이 핵심입니다',
    description: '관제실, 통신 장비, 연구 시설, 공공 설비는 정전 상황에서도 일정 시간 안정적으로 동작할 수 있는 전원 계획이 필요합니다.',
  },
  {
    icon: FileText,
    title: '수소 기술을 어디에 적용할지 막막합니다',
    description: '연료전지 제품만으로는 사업화가 어렵습니다. 목적, 용량, 안전, 설치, 운영, 실증 자료까지 함께 설계해야 합니다.',
  },
];

const solutionFlow = [
  {
    step: '01',
    title: '적용 목적·운용 시간 정의',
    description: '드론, 이동형 전원, 백업 전원, 전시·실증 등 목적과 필요한 전력, 연속 운전 시간, 현장 제약을 먼저 정리합니다.',
  },
  {
    step: '02',
    title: '현장 조건·안전 요구 검토',
    description: '설치 위치, 환기, 수소 저장·공급 방식, 운반 조건, 관계 법규, 사용자 안전관리 수준을 확인합니다.',
  },
  {
    step: '03',
    title: '연료전지·주변 시스템 구성',
    description: '필요 출력과 운전 시나리오에 맞춰 연료전지, 배터리 하이브리드, 제어부, 충전·전력 변환 장치를 조합합니다.',
  },
  {
    step: '04',
    title: '파일럿·데모 운용 설계',
    description: '대규모 도입 전 작은 범위에서 운용 데이터를 얻을 수 있도록 테스트 항목, 운영 절차, 기록 방식을 설계합니다.',
  },
  {
    step: '05',
    title: '구축·연계·운영 지원',
    description: '파트너 장비 공급, 설치 협의, 현장 교육, 홍보·전시 콘텐츠, 과제 제안 자료까지 프로젝트 성격에 맞춰 지원합니다.',
  },
  {
    step: '06',
    title: '확장 로드맵 정리',
    description: '파일럿 결과를 기반으로 상용 운용, 정기 유지관리, 추가 장비 도입, 공공·연구 과제 확장 방향을 정리합니다.',
  },
];

const useCases = [
  {
    icon: Plane,
    title: '드론·로봇 장시간 운용 전원',
    description: '배터리 방식의 비행·운용 시간 한계를 보완하기 위해 수소 연료전지 파워팩과 하이브리드 전원 적용 가능성을 검토합니다.',
    tags: ['수소 드론', 'UGV·로봇', '장시간 임무'],
  },
  {
    icon: Truck,
    title: '이동형·야외용 전력 공급',
    description: '재난 현장, 건설 현장, 야외 행사, 임시 관제소처럼 전력 인프라가 부족한 곳에서 저소음·무배출 전원 구성을 제안합니다.',
    tags: ['이동형 전원', '재난 현장', '야외 장비'],
  },
  {
    icon: Zap,
    title: '비상·백업 전원 시스템',
    description: '관제실, 통신 장비, 연구 설비, 공공 시설의 정전 대비 전원을 연료전지와 배터리·ESS 조합으로 검토합니다.',
    tags: ['백업 전원', '관제 설비', '정전 대비'],
  },
  {
    icon: Factory,
    title: '소규모 발전·마이크로그리드 실증',
    description: '학교, 연구소, 공공기관, 기업 홍보관에서 태양광·ESS와 연계한 수소 기반 분산전원 데모를 구성할 수 있습니다.',
    tags: ['마이크로그리드', '실증 사업', '분산전원'],
  },
  {
    icon: Lightbulb,
    title: '전시·교육·홍보 콘텐츠',
    description: '수소 드론, 수소 전원, 모형 설비, 시연 시나리오를 활용해 시민·학생·관계자에게 수소 에너지의 활용성을 보여줍니다.',
    tags: ['전시 콘텐츠', '교육', '홍보관'],
  },
];

const deliverables = [
  {
    icon: FileText,
    title: '수소 연료전지 도입 제안서',
    description: '도입 목적과 현장 조건에 맞춘 적용 시나리오를 문서로 정리합니다.',
    items: ['도입 목적 정리', '적용 시나리오', '기대 효과·제약 조건'],
  },
  {
    icon: Gauge,
    title: '전력·운전 시간 산정표',
    description: '필요 출력, 연속 운전 시간, 부하 특성, 배터리 하이브리드 필요성을 계산합니다.',
    items: ['필요 전력', '운전 시간', '용량 후보'],
  },
  {
    icon: Settings2,
    title: '시스템 구성안',
    description: '연료전지, 저장·공급 장치, 전력 변환, 제어·모니터링 장비의 구성을 제안합니다.',
    items: ['장비 구성', '연계 방식', '운영 구조'],
  },
  {
    icon: ClipboardCheck,
    title: '파일럿 운영 계획',
    description: '시범 도입 전에 확인해야 할 테스트 항목과 운영 절차를 정리합니다.',
    items: ['테스트 항목', '운영 절차', '성과 기록'],
  },
  {
    icon: MonitorCog,
    title: '전시·홍보 시나리오',
    description: '공공·기업 홍보관이나 행사에서 이해하기 쉬운 시연 흐름과 설명 자료를 구성합니다.',
    items: ['시연 구성', '설명 패널', '홍보 메시지'],
  },
  {
    icon: Route,
    title: '확장 로드맵',
    description: '파일럿 이후 실제 운용, 유지관리, 추가 과제, 장비 확장 방향을 정리합니다.',
    items: ['단계별 도입', '유지관리', '확장 방향'],
  },
];

const packages = [
  {
    name: '수소 드론·모빌리티 검토',
    bestFor: '장시간 비행·이동체 운용 가능성을 확인하려는 기업·기관',
    includes: ['운용 시간 목표', '파워팩 구성 검토', '파일럿 계획'],
  },
  {
    name: '이동형 전원 파일럿',
    bestFor: '재난·건설·행사·원격 현장에서 전원이 필요한 프로젝트',
    includes: ['부하 분석', '이동형 구성안', '현장 테스트'],
  },
  {
    name: '비상·백업 전원 제안',
    bestFor: '관제실, 통신 장비, 연구 설비, 공공 시설의 정전 대비',
    includes: ['필요 전력 산정', '안전 검토', '도입 제안서'],
  },
  {
    name: '실증·전시 패키지',
    bestFor: '지자체, 연구소, 학교, 기업 홍보관의 수소 에너지 체험·전시',
    includes: ['시연 시나리오', '전시 콘텐츠', '성과 자료'],
  },
];

const faqs = [
  {
    question: '수소 연료전지는 어떤 현장에 먼저 적용해볼 수 있나요?',
    answer:
      '장시간 전원이 필요한 드론·로봇, 전력 인프라가 부족한 야외 현장, 정전 대비가 필요한 관제·통신 설비, 공공·연구·전시용 실증 프로젝트부터 검토하기 좋습니다. 아이엠드론은 바로 상용 도입이 어려운 경우에도 작은 파일럿부터 시작할 수 있게 범위를 조정합니다.',
  },
  {
    question: '제품만 공급받는 것도 가능한가요?',
    answer:
      '가능합니다. 다만 수소 연료전지는 출력, 운전 시간, 저장·공급 방식, 안전 조건, 설치 환경에 따라 구성이 달라지므로 제품 공급 전 기본 요구사항을 확인하는 과정을 권장드립니다.',
  },
  {
    question: '수소 드론 적용은 바로 가능한가요?',
    answer:
      '기체, 탑재 중량, 출력 요구, 연료전지 파워팩, 안전 운용 절차가 맞아야 합니다. 아이엠드론은 드론 운용 경험을 기반으로 실제 임무 목적에 맞는 적용 가능성, 파일럿 범위, 필요한 파트너 구성을 검토합니다.',
  },
  {
    question: '안전이나 인허가 검토도 도와주나요?',
    answer:
      '프로젝트 범위에 따라 관련 법규, 안전관리, 설치 환경, 관계 기관 협의가 필요할 수 있습니다. 아이엠드론은 제품·시스템 파트너와 함께 안전 조건과 운영 절차를 검토하고, 필요한 경우 전문 기관 협의를 연결합니다.',
  },
  {
    question: '공공 과제나 연구·실증 사업 제안 단계에서도 상담할 수 있나요?',
    answer:
      '네. 수소 에너지 실증, 친환경 전원, 수소 드론, 재난·안전 전원, 교육·전시 사업처럼 제안서 단계에서 기술 구성, 예산 범위, 시연 시나리오, 기대 효과 자료가 필요한 경우 함께 정리할 수 있습니다.',
  },
];

export default function HydrogenServicePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate min-h-[760px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/services/hydrogen.webp"
            alt="수소 연료전지와 친환경 전원 응용 솔루션"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/84" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(14,165,233,0.24),transparent_32%),radial-gradient(circle_at_82%_16%,rgba(125,211,252,0.16),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.72)_45%,rgba(2,6,23,0.96))]" />
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 shadow-[0_0_40px_rgba(14,165,233,0.14)] backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              Hydrogen Fuel Cell & Applied Power Solutions
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              수소 연료전지를
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                현장에서 쓰이는 전원 솔루션으로 설계합니다
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              아이엠드론은 드론, 이동형 전원, 비상·백업 전원, 실증·전시 시스템에 필요한 수소 연료전지 구성을
              목적과 현장 조건에 맞춰 검토하고 파일럿 운영까지 연결합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['수소 드론·모빌리티', '이동형 친환경 전원', '비상·백업 전원', '실증·전시 시스템', '파일럿 운영 지원'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-100 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
                <Link href="/contact">
                  수소 연료전지 상담하기
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
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200/80">Applied Hydrogen</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Hydrogen Power Package</h2>
              </div>
              <Fuel className="h-10 w-10 text-sky-300" />
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
              단순 제품 소개가 아니라, 전력 요구와 안전 조건, 운영 목적에 맞춰 실제 적용 가능한 수소 전원 구성으로 정리합니다.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Why Hydrogen Power</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">수소 전원이 필요한 현장 문제를 해결합니다</h2>
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
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">적용 목적 검토부터 파일럿 운영까지</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                수소 연료전지는 출력만 맞춘다고 끝나지 않습니다. 운용 시간, 저장·공급 방식, 안전 조건, 현장 교육,
                실증 자료까지 함께 설계해야 실제 사업과 운영으로 이어집니다.
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
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">적용 분야</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                장시간 운용이 필요한 드론·모빌리티부터 야외 전원, 비상 전원, 공공·연구 실증, 전시 콘텐츠까지 목적에 맞게 구성합니다.
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
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">수소 전원 도입을 판단할 수 있는 산출물로 정리합니다</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              제품 리스트만 전달하지 않고, 적용 목적과 전력 요구, 안전 조건, 파일럿 범위, 확장 방향을 고객이 판단할 수 있는 형태로 제공합니다.
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
              고객의 사업 목적, 필요한 전력, 실증 단계, 안전·운영 조건에 따라 제품 공급부터 파일럿 운영까지 범위를 조정합니다.
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
              수소 연료전지는 적용 분야에 따라 출력, 저장·공급 방식, 안전관리, 법규 검토가 달라지므로 초기 설계가 중요합니다.
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">From Hydrogen to Action</p>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">
            수소 연료전지를 미래 기술이 아니라 지금 검토 가능한 현장 솔루션으로 만듭니다.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            아이엠드론이 드론·전원·관제·현장 운영 경험을 바탕으로 제품 선정, 시스템 구성, 파일럿 운영, 실증·전시 자료까지
            프로젝트 목적에 맞춰 제안드립니다.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
              <Link href="/contact">
                수소 연료전지 도입 상담하기
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
