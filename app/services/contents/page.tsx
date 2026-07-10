import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Camera,
  CheckCircle2,
  ClipboardList,
  Code2,
  Film,
  Globe2,
  Image as ImageIcon,
  Layers3,
  LayoutDashboard,
  Megaphone,
  MessageSquareText,
  MonitorSmartphone,
  Palette,
  PenTool,
  Phone,
  SearchCheck,
  Settings2,
  Sparkles,
  Target,
  Video,
} from 'lucide-react';

const service = services.find((item) => item.id === 'contents')!;

const pageDescription =
  '드론 촬영 데이터, 산업 서비스 경험, 브랜드 메시지를 연결해 홈페이지·랜딩페이지·홍보 영상·이미지 콘텐츠까지 고객이 이해하고 문의할 수 있는 디지털 콘텐츠 패키지로 제작합니다.';

export const metadata: Metadata = {
  alternates: {
    canonical: '/services/contents',
  },
  title: `${service.title} | ${SITE_NAME}`,
  description: pageDescription,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/services/contents`,
    siteName: SITE_NAME,
    title: `${service.title} | ${SITE_NAME}`,
    description: pageDescription,
    images: [{ url: `${SITE_URL}${service.image}`, width: 1200, height: 630 }],
  },
};

const heroStats = [
  {
    label: 'Brand Website',
    value: '이해되는 웹사이트',
    detail: '회사 소개, 서비스 구조, 포트폴리오, 문의 흐름을 고객 관점의 페이지로 정리',
  },
  {
    label: 'Drone Media',
    value: '현장감 있는 영상·이미지',
    detail: '항공촬영·현장 사진·짧은 홍보 영상을 웹 콘텐츠와 캠페인 소재로 재가공',
  },
  {
    label: 'Lead Flow',
    value: '문의로 이어지는 콘텐츠 구조',
    detail: '검색, 이해, 신뢰, 상담 요청까지 이어지는 CTA와 FAQ 중심의 랜딩 설계',
  },
];

const painPoints = [
  {
    icon: MessageSquareText,
    title: '좋은 서비스가 한 문장으로 설명되지 않습니다',
    description: '기술과 현장 경험은 충분한데 고객이 처음 보는 순간 “무엇을 맡길 수 있는지” 이해하지 못하면 문의로 이어지기 어렵습니다.',
  },
  {
    icon: ImageIcon,
    title: '사진·영상은 있지만 판매 구조가 없습니다',
    description: '드론 영상과 현장 사진을 보유하고 있어도 페이지, 썸네일, 설명 문구, CTA로 정리되지 않으면 자료가 흩어집니다.',
  },
  {
    icon: SearchCheck,
    title: '검색과 제안서에서 신뢰를 보여줘야 합니다',
    description: '기업 홈페이지는 명함이 아니라 고객이 업체를 검토하는 첫 자료입니다. 서비스별 근거, 사례, FAQ, 연락 경로가 필요합니다.',
  },
  {
    icon: MonitorSmartphone,
    title: '모바일에서도 빠르게 설득해야 합니다',
    description: '대부분의 고객은 모바일에서 먼저 확인합니다. 핵심 메시지, 버튼, 이미지, 문의 동선이 작은 화면에서도 분명해야 합니다.',
  },
];

const serviceFlow = [
  {
    step: '01',
    title: '목표·고객·전환 경로 정의',
    description: '홈페이지의 목적이 회사 소개, 서비스 문의, 행사 홍보, 제품 판매, 포트폴리오 신뢰 확보 중 어디에 있는지 먼저 정리합니다.',
  },
  {
    step: '02',
    title: '메시지와 사이트 구조 설계',
    description: '고객이 궁금해하는 순서에 맞춰 메뉴, 서비스 페이지, 사례, FAQ, 문의 CTA, 검색 노출 문구를 구성합니다.',
  },
  {
    step: '03',
    title: '촬영·자료 수집·콘텐츠 기획',
    description: '항공촬영, 현장 사진, 인터뷰, 기존 자료를 점검하고 웹에 필요한 이미지·영상·카피·도표·썸네일 목록을 만듭니다.',
  },
  {
    step: '04',
    title: '디자인·개발·반응형 구현',
    description: '브랜드 톤에 맞춘 화면을 제작하고 PC·모바일에서 빠르게 읽히는 랜딩 페이지와 관리 가능한 웹 구조로 구현합니다.',
  },
  {
    step: '05',
    title: '검수·검색 기본 설정·오픈',
    description: '문구, 링크, 문의 버튼, 이미지, 메타데이터, 속도, 모바일 화면을 확인하고 공개 가능한 상태로 배포합니다.',
  },
  {
    step: '06',
    title: '운영·콘텐츠 업데이트 지원',
    description: '새 프로젝트, 블로그, 제품, 행사 소식이 생길 때 추가 페이지와 미디어 콘텐츠로 이어질 수 있도록 운영 방식을 안내합니다.',
  },
];

const useCases = [
  {
    icon: Globe2,
    title: '기업·서비스 홈페이지 리뉴얼',
    description: '회사 소개와 서비스 목록을 나열하는 수준을 넘어 고객이 목적별로 바로 이해하고 상담 요청까지 이동할 수 있는 홈페이지로 정리합니다.',
    tags: ['회사 소개', '서비스 페이지', '문의 동선'],
  },
  {
    icon: LayoutDashboard,
    title: '서비스·프로젝트 랜딩 페이지',
    description: '건설 모니터링, 에너지 점검, 공공안전, 스마트농업처럼 특정 서비스나 사업을 한 페이지에서 설명하고 제안서 링크로 활용합니다.',
    tags: ['랜딩 페이지', '공공사업', 'B2B 제안'],
  },
  {
    icon: Film,
    title: '항공촬영 기반 홍보 영상',
    description: '드론 영상, 지상 촬영, 인터뷰, 그래픽 자막을 조합해 홈페이지 히어로 영상, SNS 숏폼, 행사 홍보 영상으로 제작합니다.',
    tags: ['드론 영상', '숏폼', '홍보 영상'],
  },
  {
    icon: Camera,
    title: '포트폴리오·사례 콘텐츠 정리',
    description: '수행 프로젝트를 업종, 목적, 산출물 중심으로 재구성해 신규 고객이 “비슷한 일을 해본 팀”이라고 판단할 수 있게 만듭니다.',
    tags: ['사례 정리', '프로젝트 카드', '레퍼런스'],
  },
  {
    icon: Megaphone,
    title: '행사·캠페인·전시 콘텐츠',
    description: '축제, 시범사업, 전시, 제품 출시, 지자체 캠페인을 위한 안내 페이지, 포스터형 이미지, 짧은 영상, 현장 스케치 콘텐츠를 제작합니다.',
    tags: ['행사 홍보', '캠페인', '전시 페이지'],
  },
];

const deliverables = [
  {
    icon: Code2,
    title: '반응형 홈페이지·랜딩 페이지',
    description: 'PC와 모바일에서 바로 읽히는 화면 구조와 상담 동선을 갖춘 웹페이지를 제공합니다.',
    items: ['메인·서비스·사례·문의 페이지', '모바일 최적화', '기본 SEO 메타데이터'],
  },
  {
    icon: PenTool,
    title: '서비스 카피·콘텐츠 구조',
    description: '기술 설명을 고객 언어로 바꾸고, 필요성·프로세스·산출물·FAQ 중심으로 페이지 내용을 구성합니다.',
    items: ['브랜드 메시지', '서비스 설명 문구', 'FAQ·CTA 문안'],
  },
  {
    icon: Video,
    title: '웹용 영상·숏폼 콘텐츠',
    description: '항공촬영 원본을 홈페이지, SNS, 제안서에 활용할 수 있는 짧은 영상과 썸네일로 편집합니다.',
    items: ['히어로 영상', '숏폼 클립', '자막·타이틀 그래픽'],
  },
  {
    icon: Palette,
    title: '배너·썸네일·이미지 에셋',
    description: '서비스 카드, 블로그, 포트폴리오, 캠페인에 사용할 이미지와 그래픽 톤을 정리합니다.',
    items: ['대표 배너', '카드 썸네일', 'SNS용 이미지'],
  },
  {
    icon: ClipboardList,
    title: '운영 가이드·업데이트 기준',
    description: '오픈 이후 글, 이미지, 프로젝트 사례를 어떻게 추가하고 관리할지 간단한 운영 기준을 제공합니다.',
    items: ['수정 방법 안내', '콘텐츠 추가 기준', '유지보수 범위'],
  },
  {
    icon: BarChart3,
    title: '콘텐츠 개선 제안서',
    description: '기존 홈페이지를 보유한 경우 구조, 메시지, CTA, 모바일 화면, 검색 문구의 개선점을 정리합니다.',
    items: ['현황 진단', '개선 우선순위', '단계별 리뉴얼 제안'],
  },
];

const packages = [
  {
    name: '원페이지 랜딩 패키지',
    bestFor: '단일 서비스, 행사, 프로젝트, 공공사업 제안 페이지가 필요한 경우',
    includes: ['핵심 메시지', '페이지 디자인·구현', '문의 CTA'],
  },
  {
    name: '기업 홈페이지 리뉴얼',
    bestFor: '회사 소개, 서비스, 포트폴리오, 블로그, 문의 구조를 새로 정리하려는 기업',
    includes: ['사이트맵', '서비스별 카피', '반응형 페이지'],
  },
  {
    name: '드론 미디어 콘텐츠 패키지',
    bestFor: '항공촬영 영상과 사진을 웹·SNS·제안서 소재로 함께 활용하려는 프로젝트',
    includes: ['항공촬영', '영상 편집', '배너·썸네일'],
  },
  {
    name: '운영·콘텐츠 업데이트 지원',
    bestFor: '새 프로젝트와 소식을 꾸준히 홈페이지 콘텐츠로 쌓아가려는 조직',
    includes: ['블로그·사례 추가', '이미지 보정', '페이지 유지보수'],
  },
];

const faqs = [
  {
    question: '홈페이지 제작만 의뢰해도 되나요?',
    answer:
      '가능합니다. 다만 아이엠드론은 홈페이지 화면뿐 아니라 서비스 구조, 문구, 이미지, 영상 활용까지 함께 검토합니다. 이미 보유한 자료가 있다면 그 자료를 최대한 활용하고, 부족한 부분은 필요한 범위만 제안드립니다.',
  },
  {
    question: '드론 촬영 영상이 없어도 시작할 수 있나요?',
    answer:
      '네. 기존 사진과 자료만으로도 기본 홈페이지나 랜딩 페이지를 만들 수 있습니다. 다만 서비스의 현장감이 중요한 경우에는 항공촬영, 현장 스케치, 짧은 인터뷰 영상 등을 함께 준비하면 신뢰도가 높아집니다.',
  },
  {
    question: '기존 홈페이지 일부만 리뉴얼할 수 있나요?',
    answer:
      '가능합니다. 메인 페이지, 특정 서비스 페이지, 포트폴리오, 문의 페이지처럼 우선순위가 높은 부분부터 개선할 수 있습니다. 현재 구조를 진단한 뒤 단계별 리뉴얼 방식을 제안드립니다.',
  },
  {
    question: '쇼핑몰이나 예약 기능도 연결할 수 있나요?',
    answer:
      '프로젝트 목적에 따라 제품 판매, 서비스 예약, 견적 문의, 신청 폼, 외부 결제·예약 솔루션 연동을 검토할 수 있습니다. 처음부터 복잡하게 만들기보다 고객 행동 흐름에 맞는 최소 기능부터 제안합니다.',
  },
  {
    question: '오픈 후 콘텐츠 수정과 운영도 맡길 수 있나요?',
    answer:
      '네. 새 프로젝트 등록, 블로그 게시, 이미지 교체, 팝업·배너 수정, 페이지 추가 같은 운영 지원이 가능합니다. 직접 관리하고 싶은 경우에는 수정 방법과 운영 기준도 함께 안내드립니다.',
  },
];

export default function ContentsServicePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate min-h-[760px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/services/contents.webp"
            alt="홈페이지와 미디어 콘텐츠 제작을 위한 디지털 화면"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/82" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(14,165,233,0.26),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(99,102,241,0.18),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.74)_46%,rgba(2,6,23,0.96))]" />
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 shadow-[0_0_40px_rgba(14,165,233,0.14)] backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              Website, Media & Brand Content Studio
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              홈페이지와 콘텐츠를
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                문의 구조로 만듭니다
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              아이엠드론은 드론 촬영 데이터와 산업 서비스 경험을 바탕으로 홈페이지, 서비스 랜딩 페이지,
              홍보 영상, 이미지 콘텐츠를 하나의 브랜드 흐름으로 설계합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['홈페이지 리뉴얼', '서비스 랜딩 페이지', '항공촬영 홍보 영상', '포트폴리오 콘텐츠', '운영 업데이트 지원'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-100 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
                <Link href="/contact">
                  홈페이지·콘텐츠 상담하기
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
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200/80">Content Growth</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Digital Content Package</h2>
              </div>
              <Layers3 className="h-10 w-10 text-sky-300" />
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
              웹사이트는 온라인 사무실이자 제안서입니다. 고객이 검토하고 문의할 수 있도록 메시지, 화면, 미디어를 함께 정리합니다.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Why Digital Content</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">서비스 전달 문제를 해결합니다</h2>
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
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">기획부터 오픈 후 운영까지</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                예쁜 화면만 만드는 것이 아니라, 고객이 서비스를 이해하고 상담을 요청할 수 있는 흐름을 설계합니다.
                촬영 자료와 기존 콘텐츠를 정리해 웹과 미디어 산출물로 연결합니다.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {serviceFlow.map((item) => (
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
                기업 홈페이지부터 서비스별 랜딩 페이지, 드론 영상 홍보물, 포트폴리오 정리, 행사 캠페인까지 목적에 맞게 제작합니다.
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
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">콘텐츠는 바로 활용 가능한 산출물로 납품됩니다</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              상담 자료, 검색 결과, 제안서 링크, SNS 홍보, 내부 운영에 실제로 사용할 수 있는 형태로 정리합니다.
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
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Packages</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">목적별 추천 구성</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                필요한 범위만 작게 시작하거나, 촬영·웹·영상·운영까지 한 번에 묶어 진행할 수 있습니다.
              </p>
            </div>
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
              제작 범위, 자료 준비, 기존 홈페이지 리뉴얼, 운영 지원까지 시작 전에 자주 확인하는 내용을 정리했습니다.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-3xl border border-white/10 bg-slate-900/80 p-6 open:border-sky-300/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                  {faq.question}
                  <Settings2 className="h-5 w-5 flex-shrink-0 text-sky-300 transition group-open:rotate-45" />
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
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">좋은 서비스가 잘 보이도록, 온라인 사무실을 함께 정리하겠습니다</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                홈페이지 제작, 서비스 페이지 리뉴얼, 항공촬영 기반 홍보 영상, 포트폴리오 정리가 필요하다면
                현재 자료와 목표만 알려주세요. 아이엠드론이 고객이 이해하는 구조로 바꿔드리겠습니다.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button size="lg" className="bg-white text-slate-950 hover:bg-sky-100" asChild>
                <Link href="/contact">
                  제작·리뉴얼 상담 요청
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
