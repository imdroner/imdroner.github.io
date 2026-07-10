import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  Camera,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  FileText,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Radio,
  Send,
  ShieldCheck,
  Sparkles,
  Youtube,
} from 'lucide-react';
import { generalData } from '@/data/general';

export const metadata: Metadata = {
  alternates: {
    canonical: '/contact',
  },
  title: `문의하기 | ${SITE_NAME}`,
  description: '아이엠드론 드론 서비스, 장비 도입, 항공촬영, 산업 점검, 관제 프로젝트 상담 및 견적 문의',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    title: `문의하기 | ${SITE_NAME}`,
    description: '아이엠드론 드론 서비스, 장비 도입, 항공촬영, 산업 점검, 관제 프로젝트 상담 및 견적 문의',
  },
};

const contactMethods = [
  {
    icon: Phone,
    title: '전화 상담',
    description: '일정이 급하거나 바로 조율이 필요한 프로젝트',
    value: '061-920-9297',
    href: 'tel:061-920-9297',
    subValue: '010-4790-6650',
    subHref: 'tel:010-4790-6650',
    action: '전화 연결',
    note: '평일 09:00 - 18:00',
  },
  {
    icon: Mail,
    title: '이메일 견적 요청',
    description: '장소, 일정, 목적, 참고 자료를 함께 전달할 때',
    value: 'imdrone.site@gmail.com',
    href: 'mailto:imdrone.site@gmail.com',
    action: '메일 작성',
    note: '24시간 접수 가능',
  },
  {
    icon: Instagram,
    title: 'Instagram DM',
    description: '사진, 영상, 현장 링크를 간편하게 공유할 때',
    value: 'imdrone_official',
    href: 'https://instagram.com/imdrone_official',
    action: 'DM 보내기',
    note: '모바일 간편 문의',
  },
];

const inquiryTypes = [
  {
    icon: Camera,
    title: '항공촬영·콘텐츠 제작',
    description: '브랜드, 부동산, 관광, 행사, 현장 홍보에 필요한 사진·영상·숏폼 산출물을 상담합니다.',
    examples: ['촬영 목적', '활용 채널', '희망 일정', '납품 형식'],
  },
  {
    icon: ShieldCheck,
    title: '산업 점검·안전 진단',
    description: '교량, 건축물, 에너지 설비, 고위험 시설의 점검 방식과 리포트 산출물을 함께 검토합니다.',
    examples: ['점검 대상', '위험 구간', '필요 센서', '보고서 형식'],
  },
  {
    icon: Radio,
    title: '드론 관제·자동화 운영',
    description: 'Dock, 원격 관제, 정기 순찰, 상시 모니터링 도입 가능성을 현장 조건 기준으로 확인합니다.',
    examples: ['운영 구역', '순찰 주기', '통신 환경', '연동 요구'],
  },
  {
    icon: ClipboardList,
    title: '장비 구매·도입 상담',
    description: '드론, 센서, 소프트웨어, 교육, 유지관리까지 실제 운용에 필요한 구성을 제안합니다.',
    examples: ['도입 목적', '예산 범위', '운용 인력', '필요 교육'],
  },
];

const processSteps = [
  {
    title: '문의 접수',
    description: '전화, 이메일, SNS 중 편한 채널로 프로젝트 목적과 현장 정보를 전달합니다.',
  },
  {
    title: '현장·목적 확인',
    description: '비행 가능 조건, 촬영·점검 범위, 장비 구성, 안전 이슈를 빠르게 검토합니다.',
  },
  {
    title: '견적·일정 제안',
    description: '필요 인력, 장비, 산출물, 일정 기준으로 실행 가능한 견적과 진행안을 안내합니다.',
  },
  {
    title: '수행·납품',
    description: '승인 후 촬영·점검·운용을 진행하고 결과물을 활용 가능한 형태로 납품합니다.',
  },
];

const preparationItems = [
  '현장 주소 또는 대략적인 위치',
  '원하는 서비스 유형과 최종 활용 목적',
  '희망 일정과 마감 기한',
  '필요한 산출물 형식: 사진, 영상, 리포트, 3D 모델, 관제 데이터 등',
  '참고 이미지, 도면, 기존 자료, 유사 사례 링크',
];

const faqs = [
  {
    question: '견적을 받으려면 어떤 정보를 보내야 하나요?',
    answer: '현장 위치, 서비스 목적, 희망 일정, 필요한 산출물, 예산 범위를 알려주시면 가장 빠르게 검토할 수 있습니다. 정확한 범위가 정해지지 않았어도 상담 단계에서 함께 정리해드립니다.',
  },
  {
    question: '드론 비행 승인이나 안전 관리는 어떻게 진행되나요?',
    answer: '비행 가능 여부, 공역, 촬영 제한, 현장 안전 조건을 사전에 확인합니다. 필요한 경우 비행 승인 절차와 현장 안전 운영 계획까지 함께 안내합니다.',
  },
  {
    question: '장비 구매와 서비스 수행을 함께 상담할 수 있나요?',
    answer: '가능합니다. 단순 장비 판매가 아니라 실제 운용 목적에 맞춰 드론, 센서, 소프트웨어, 교육, 유지관리까지 연결해 검토합니다.',
  },
  {
    question: '긴급 촬영이나 단기 프로젝트도 가능한가요?',
    answer: '일정과 현장 조건에 따라 가능합니다. 급한 일정은 전화 상담으로 먼저 연락주시면 비행 가능 여부와 투입 가능 장비를 빠르게 확인하겠습니다.',
  },
  {
    question: '결과물은 어떤 형태로 받을 수 있나요?',
    answer: '프로젝트 목적에 따라 고해상도 사진, 편집 영상, 숏폼 콘텐츠, 열화상 이미지, 점검 리포트, 3D 모델, 정사영상, 원본 데이터 등으로 납품할 수 있습니다.',
  },
];

function SocialIcon({ label }: { label: string }) {
  if (label === 'Email') return <Mail className="h-5 w-5" />;
  if (label === 'Instagram') return <Instagram className="h-5 w-5" />;
  if (label === 'Youtube') return <Youtube className="h-5 w-5" />;
  return <MessageSquare className="h-5 w-5" />;
}

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,rgba(14,165,233,0.28),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(56,189,248,0.14),transparent_28%),linear-gradient(135deg,#020617,#0f172a_52%,#020617)]" />
        <div className="absolute inset-0 -z-10 bg-[url('/images/contact/contact-hero.webp')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              IMDRONE Contact Desk
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">프로젝트 상담은</span>
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                목적부터 정리합니다
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              항공촬영, 산업 점검, 드론 관제, 장비 도입까지 필요한 내용을 편하게 알려주세요. 아이엠드론이 현장 조건, 필요한 장비,
              산출물, 일정까지 함께 정리해 실행 가능한 상담으로 연결합니다.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
                <a href="tel:061-920-9297">
                  전화 상담하기
                  <Phone className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <a href="mailto:imdrone.site@gmail.com">
                  이메일 견적 요청
                  <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-sky-950/40 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-sky-200/80">Fast Contact</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">빠른 문의 채널</h2>
              </div>
              <BadgeCheck className="h-7 w-7 text-sky-300" />
            </div>
            <div className="mt-6 grid gap-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div key={method.title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-white">{method.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-300">{method.description}</p>
                        <a href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="mt-3 block break-words text-base font-semibold text-sky-200 hover:text-sky-100">
                          {method.value}
                        </a>
                        {method.subValue && (
                          <a href={method.subHref} className="mt-1 block text-sm font-semibold text-sky-200 hover:text-sky-100">
                            {method.subValue}
                          </a>
                        )}
                        <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                          <Clock className="h-4 w-4" />
                          {method.note}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <Phone className="h-8 w-8 text-sky-300" />
            <p className="mt-4 text-sm font-medium text-slate-300">대표 상담 전화</p>
            <a href="tel:061-920-9297" className="mt-2 block text-2xl font-semibold text-white hover:text-sky-200">061-920-9297</a>
            <a href="tel:010-4790-6650" className="mt-1 block text-lg font-semibold text-sky-200 hover:text-sky-100">010-4790-6650</a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <Mail className="h-8 w-8 text-sky-300" />
            <p className="mt-4 text-sm font-medium text-slate-300">견적·자료 접수</p>
            <a href="mailto:imdrone.site@gmail.com" className="mt-2 block break-words text-2xl font-semibold text-white hover:text-sky-200">imdrone.site@gmail.com</a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <MapPin className="h-8 w-8 text-sky-300" />
            <p className="mt-4 text-sm font-medium text-slate-300">사업장 소재지</p>
            <p className="mt-2 text-2xl font-semibold text-white">전라남도 여수시</p>
            <p className="mt-1 text-slate-300">성산5길 37</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Inquiry Type</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">무엇을 상담하면 좋을까요?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              문의 내용이 완성되어 있지 않아도 괜찮습니다. 아래 유형 중 가장 가까운 목적을 기준으로 알려주시면 아이엠드론이 필요한 확인 항목을 정리합니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {inquiryTypes.map((type) => {
              const Icon = type.icon;
              return (
                <article key={type.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-sky-400/10">
                  <Icon className="h-9 w-9 text-sky-300" />
                  <h3 className="mt-5 text-xl font-semibold text-white">{type.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{type.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {type.examples.map((example) => (
                      <span key={example} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                        {example}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Consulting Flow</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">상담부터 납품까지 한 흐름으로 안내합니다</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              아이엠드론은 문의를 받은 뒤 단순 가격 안내에 그치지 않고, 실제 수행 가능성과 결과물 기준까지 함께 확인합니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400 text-lg font-semibold text-slate-950">{index + 1}</div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Before Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">상담 전에 준비하면 좋은 정보</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              모든 항목을 다 준비할 필요는 없습니다. 알고 있는 내용만 보내주셔도 초기 상담과 견적 검토가 빨라집니다.
            </p>
            <ul className="mt-8 space-y-4">
              {preparationItems.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-200">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-sky-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Social Channels</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">채널별 소식 확인</h2>
            <p className="mt-4 text-slate-300">프로젝트 사례, 촬영 결과물, 회사 소식은 SNS와 블로그에서도 확인할 수 있습니다.</p>
            <div className="mt-8 grid gap-4">
              {generalData.contacts.map((contact) => (
                <Link key={contact.label} href={contact.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-sky-300/50 hover:bg-sky-400/10">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                      <SocialIcon label={contact.label} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-white">{contact.label}</p>
                      <p className="truncate text-sm text-slate-400">{contact.value}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-sky-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">자주 묻는 질문</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">상담 전 자주 확인하시는 내용을 정리했습니다.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 sm:p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-left text-base font-semibold text-white hover:text-sky-200 hover:no-underline sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-slate-300 sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-400/20 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-sky-950/30 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Start Project</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">현장 목적을 알려주시면 실행 가능한 방법부터 제안드립니다</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                촬영이 필요한지, 점검 리포트가 필요한지, 장비를 도입해야 하는지 아직 정해지지 않았어도 괜찮습니다.
                아이엠드론이 고객의 목적에 맞는 다음 단계를 함께 정리하겠습니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2"><CalendarCheck2 className="h-4 w-4 text-sky-300" />일정 검토</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2"><FileText className="h-4 w-4 text-sky-300" />견적 제안</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2"><Send className="h-4 w-4 text-sky-300" />자료 접수</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button size="lg" className="bg-white text-slate-950 hover:bg-sky-100" asChild>
                <a href="tel:061-920-9297">
                  전화 상담하기
                  <Phone className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <a href="mailto:imdrone.site@gmail.com">
                  이메일 문의
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
