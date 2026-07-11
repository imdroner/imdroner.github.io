import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  Camera,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Database,
  FileCheck2,
  Globe2,
  GraduationCap,
  Handshake,
  Layers3,
  Map,
  Radio,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';
import { teamMembers } from '@/data/team';
import { experienceData } from '@/data/experience';
import { certificateData } from '@/data/certificate';

export const metadata: Metadata = {
  alternates: {
    canonical: '/about',
  },
  title: `아이엠드론 소개 | ${SITE_NAME}`,
  description: '산업 현장의 촬영, 점검, 관제, 데이터 활용을 함께 설계하는 드론 기반 데이터 전문 기업 아이엠드론을 소개합니다.',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    title: `아이엠드론 소개 | ${SITE_NAME}`,
    description: '산업 현장의 촬영, 점검, 관제, 데이터 활용을 함께 설계하는 드론 기반 데이터 전문 기업 아이엠드론을 소개합니다.',
  },
};

const heroTags = ['산업 데이터', '항공촬영', '시설 점검', '드론 관제', '스마트 농업', '장비 도입'];

const proofStats = [
  { label: '서비스 영역', value: '8+', description: '촬영·점검·관제·농업·콘텐츠' },
  { label: '데이터 산출물', value: '6+', description: '영상·리포트·지도·3D 모델' },
  { label: '운영 기준', value: '안전 우선', description: '자격·보험·현장 조건 확인' },
];

const strengths: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: ShieldCheck,
    title: '안전하게 수행되는 드론 운용',
    description: '비행 가능 조건, 공역, 현장 위험요소, 보험과 운용 인력을 사전에 확인해 안전한 프로젝트를 설계합니다.',
  },
  {
    icon: Database,
    title: '결과물로 이어지는 데이터 설계',
    description: '단순 촬영에 그치지 않고 보고서, 지도, 3D 모델, 관제 기록처럼 고객이 활용할 수 있는 산출물 기준을 함께 정리합니다.',
  },
  {
    icon: Layers3,
    title: '산업별 현장 적용 경험',
    description: '건설·건축, 에너지 설비, 공공안전, 스마트 농업, 홍보 콘텐츠 등 서로 다른 현장 목적에 맞춰 서비스를 구성합니다.',
  },
  {
    icon: Handshake,
    title: '상담부터 장비 도입까지 연결',
    description: '드론 서비스 수행뿐 아니라 장비, 센서, 소프트웨어, 교육과 유지관리까지 실제 운용 관점에서 안내합니다.',
  },
];

const serviceFocus = [
  {
    icon: Camera,
    title: '항공촬영·콘텐츠',
    description: '브랜드, 관광, 행사, 시설 홍보에 필요한 사진·영상·숏폼 콘텐츠를 현장 목적에 맞춰 제작합니다.',
  },
  {
    icon: ClipboardCheck,
    title: '건설·시설 점검',
    description: '접근이 어렵거나 위험한 구조물, 건설 현장, 설비를 항공 데이터와 리포트 중심으로 확인합니다.',
  },
  {
    icon: Zap,
    title: '에너지·안전 진단',
    description: '태양광, 발전 설비, 산업 시설의 이상 징후를 열화상·고해상도 이미지 등으로 빠르게 파악합니다.',
  },
  {
    icon: Radio,
    title: '드론 관제·자동화',
    description: 'Dock, 원격 관제, 정기 순찰 기반의 상시 모니터링 구조를 현장 조건에 맞게 검토합니다.',
  },
  {
    icon: Map,
    title: '스마트 농업·공간 데이터',
    description: '작물 생육, 정사영상, NDVI, 공간 데이터 등 농업과 현장 관리에 필요한 분석 자료를 구축합니다.',
  },
  {
    icon: Wrench,
    title: '장비·솔루션 도입',
    description: '목적, 예산, 운용 인력, 유지관리 기준에 맞춰 드론·센서·소프트웨어 조합을 제안합니다.',
  },
];

const operatingPrinciples = [
  {
    title: '목적 먼저 확인',
    description: '촬영이 필요한지, 점검 리포트가 필요한지, 관제 체계가 필요한지 고객의 최종 활용 목적부터 정리합니다.',
  },
  {
    title: '현장 조건 검토',
    description: '위치, 비행 가능 구역, 장애물, 일정, 안전 통제, 필요한 장비 구성을 수행 전 단계에서 확인합니다.',
  },
  {
    title: '산출물 기준 합의',
    description: '사진·영상·보고서·지도·3D 모델·원본 데이터 등 납품 형태와 활용 방식을 명확히 정합니다.',
  },
  {
    title: '운용 이후 활용 지원',
    description: '결과물을 실제 의사결정, 유지관리, 홍보, 반복 모니터링에 연결할 수 있도록 다음 단계를 안내합니다.',
  },
];

const values = [
  { title: 'Safety', label: '안전', description: '모든 비행과 현장 운영의 기준은 안전입니다.' },
  { title: 'Data', label: '데이터', description: '보여주는 이미지를 넘어 판단 가능한 자료를 제공합니다.' },
  { title: 'Field', label: '현장성', description: '실제 운용 조건과 고객의 업무 흐름을 기준으로 설계합니다.' },
];

const certificates = [
  { name: '초경량비행장치 사용사업 등록증', image: '/images/about/certificates/business-registration.jpg' },
  { name: '초경량비행장치 신고증명서', image: '/images/about/certificates/aircraft-declaration.jpg' },
  { name: '보험가입인증서', image: '/images/about/certificates/insurance-certificate.jpg' },
  { name: '교관과정훈련이수증명서', image: '/images/about/certificates/instructor-certificate.jpg' },
  { name: '소프트웨어사업자', image: '/images/about/certificates/software-business.jpg' },
];

export default function AboutPage() {
  const experiencesByYear = experienceData[0].items.reduce((acc, item) => {
    const year = item.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {} as Record<string, typeof experienceData[0]['items']>);

  const sortedYears = Object.keys(experiencesByYear).sort((a, b) => {
    const yearA = parseInt(a.split(' - ')[0]);
    const yearB = parseInt(b.split(' - ')[0]);
    return yearB - yearA;
  });

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_16%,rgba(14,165,233,0.28),transparent_31%),radial-gradient(circle_at_82%_10%,rgba(56,189,248,0.16),transparent_28%),linear-gradient(135deg,#020617,#0f172a_50%,#020617)]" />
        <div className="absolute inset-0 -z-10 bg-[url('/images/about/imdrone-bout-hero-bg.jpg')] bg-cover bg-center opacity-24" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/35 via-slate-950/75 to-slate-950" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              IMDRONE Company Profile
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">드론 기술로</span>
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                현장의 의사결정을
              </span>
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                바꿉니다
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              아이엠드론은 항공촬영, 산업 점검, 드론 관제, 장비 도입을 고객의 현장 목적에 맞춰 연결하는 드론 기반 데이터 전문 기업입니다.
              안전한 비행과 활용 가능한 산출물을 기준으로 프로젝트를 설계합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroTags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-100 backdrop-blur">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
                <Link href="/contact">
                  프로젝트 상담하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="/projects">
                  수행 사례 보기
                  <Building2 className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-sky-950/40 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-sky-200/80">Why IMDRONE</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">신뢰를 만드는 운영 기준</h2>
              </div>
              <BadgeCheck className="h-7 w-7 text-sky-300" />
            </div>
            <div className="mt-6 grid gap-4">
              {proofStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-sm font-medium text-slate-300">{stat.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-sky-400/10">
                <Icon className="h-9 w-9 text-sky-300" />
                <h2 className="mt-5 text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-2xl shadow-sky-950/20">
            <img src="/images/about/imdrone-intro.jpg" alt="아이엠드론 현장 운용 이미지" className="h-full min-h-[420px] w-full object-cover opacity-90" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Company Role</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">아이엠드론은 드론을 현장 데이터 서비스로 연결합니다</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              고객에게 필요한 것은 멋진 비행 장면만이 아니라, 일정·안전·데이터 품질·납품 형식까지 정리된 실행 가능한 결과입니다.
              아이엠드론은 드론 운용, 장비 선택, 데이터 산출물, 콘텐츠 제작을 하나의 흐름으로 설계해 현장의 판단을 돕습니다.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {operatingPrinciples.map((principle, index) => (
                <div key={principle.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-400 text-base font-semibold text-slate-950">{index + 1}</div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Service Capability</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">고객 목적에 맞춰 확장되는 드론 서비스</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              아이엠드론은 하나의 서비스만 제안하지 않습니다. 현장 목적, 필요한 데이터, 납품 방식, 운용 지속성을 기준으로 가장 적합한 조합을 찾습니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceFocus.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-sky-300/50 hover:shadow-2xl hover:shadow-sky-950/25">
                  <Icon className="h-9 w-9 text-sky-300" />
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Vision & Values</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">우리가 지키는 방향</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              드론 기술의 가치는 현장에서 더 안전하게 보고, 더 정확하게 판단하고, 더 빠르게 실행할 때 커집니다.
              아이엠드론은 고객의 업무 흐름에 맞는 실용적인 드론 데이터 파트너가 되겠습니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">{value.title}</p>
                <h3 className="mt-5 text-2xl font-semibold text-white">{value.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">History</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">프로젝트 경험과 성장 기록</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">아이엠드론이 수행해온 현장 경험을 연도별로 확인할 수 있습니다.</p>
            </div>
            <Award className="hidden h-12 w-12 text-sky-300 lg:block" />
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 sm:p-6">
            <Accordion type="single" collapsible className="w-full" defaultValue="year-0">
              {sortedYears.map((year, index) => (
                <AccordionItem key={year} value={`year-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-sky-200 hover:no-underline sm:text-xl">
                    {year}년
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4 pt-4 md:grid-cols-2">
                      {experiencesByYear[year].map((item, idx) => (
                        <article key={`${item.month}-${idx}`} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                          <div className="flex items-start gap-4">
                            <span className="flex h-11 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-400/10 text-sm font-semibold text-sky-200">
                              {item.month}월
                            </span>
                            <div>
                              <h3 className="text-base font-semibold leading-7 text-white">{item.title}</h3>
                              <p className="mt-1 text-sm text-slate-400">{item.client}</p>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Team</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">프로젝트를 함께 설계하는 사람들</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">현장 운용, 콘텐츠 제작, 장비 이해, 데이터 활용 관점을 함께 갖춘 팀이 고객의 프로젝트를 준비합니다.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.id} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-sky-400/10">
                <div className="flex items-center gap-5">
                  <Avatar className="h-20 w-20 border border-white/10">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-slate-800 text-lg text-white">{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="inline-flex rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-100">{member.role}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{member.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{member.position}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-300">{member.shortBio}</p>
                {member.tags && member.tags.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                <Button asChild variant="outline" className="mt-6 w-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                  <Link href={`/team/${member.id}`}>
                    프로필 보기
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Skills & Certifications</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">기술 역량과 운영 자격</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">전문적인 드론 운용과 데이터 서비스를 위해 필요한 기술과 자격 기준을 갖추고 있습니다.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <GraduationCap className="h-8 w-8 text-sky-300" />
                <p className="mt-4 text-sm font-medium text-slate-300">전문 교육</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <FileCheck2 className="h-8 w-8 text-sky-300" />
                <p className="mt-4 text-sm font-medium text-slate-300">운영 자격</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <Globe2 className="h-8 w-8 text-sky-300" />
                <p className="mt-4 text-sm font-medium text-slate-300">산업 적용</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white">{certificateData[0].title}</h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {certificateData[0].items.map((skill, index) => (
                <div key={`${skill.title}-${index}`} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                  <CheckCircle2 className="h-7 w-7 text-sky-300" />
                  <h4 className="mt-4 text-lg font-semibold text-white">{skill.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{skill.subTitle}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">자격사항</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {certificates.map((cert) => (
                <article key={cert.name} className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
                  <div className="aspect-[3/4] overflow-hidden bg-white">
                    <img src={cert.image} alt={cert.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold leading-6 text-white">{cert.name}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-400/20 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-sky-950/30 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Work With IMDRONE</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">현장에 필요한 드론 데이터, 아이엠드론과 함께 설계하세요</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                촬영, 점검, 관제, 장비 도입 중 어디서 시작해야 할지 정해지지 않았어도 괜찮습니다. 목적과 현장 조건을 알려주시면 실행 가능한 방법부터 제안드립니다.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button size="lg" className="bg-white text-slate-950 hover:bg-sky-100" asChild>
                <Link href="/contact">
                  상담 문의
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="/services">
                  서비스 보기
                  <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
