import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import { generalData } from '@/data/general';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';
import { featuredProducts } from '@/data/products';
import { blogPosts } from '@/data/blog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { serviceIconMap } from '@/lib/service-icons';
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Database,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
} from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  title: SITE_NAME,
  description: generalData.about,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: generalData.about,
  },
};

const heroChips = ['건설·건축 모니터링', '에너지 설비 점검', '공공·해상안전관제', '스마트 농업 분석'];

const strengths = [
  {
    title: '현장 목적에 맞춘 비행 설계',
    description: '촬영 범위, 장애물, 비행 제한, 납품 형식을 먼저 확인하고 필요한 데이터만 정확하게 수집합니다.',
    icon: ClipboardList,
  },
  {
    title: '데이터로 남는 결과물',
    description: '사진과 영상에 그치지 않고 리포트, 지도, 3D 모델, 전후 비교자료로 의사결정에 활용할 수 있게 정리합니다.',
    icon: Database,
  },
  {
    title: '안전 우선 운영 체계',
    description: '국가자격과 보험, 사전 점검, 현장 리스크 분석을 기반으로 안전하고 신뢰도 높은 비행을 수행합니다.',
    icon: ShieldCheck,
  },
  {
    title: '서비스와 장비를 함께 제안',
    description: '운용 대행이 필요한 현장과 자체 운용을 준비하는 고객에게 서비스·장비·교육 방향을 함께 제안합니다.',
    icon: Award,
  },
];

const workflow = [
  ['01', '상담·목표 정의', '현장 위치, 목적, 촬영 범위, 활용 자료를 확인합니다.'],
  ['02', '비행·안전 검토', '비행 가능 여부, 주변 장애물, 일정과 안전 계획을 점검합니다.'],
  ['03', '촬영·데이터 수집', 'RGB·열화상·영상·3D 등 목적에 맞는 데이터를 수집합니다.'],
  ['04', '분석·납품', '리포트, 이미지 세트, 지도, 포트폴리오 콘텐츠로 정리해 제공합니다.'],
];

function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
}) {
  const isDark = tone === 'dark';

  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${isDark ? 'text-sky-300' : 'text-sky-600'}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${isDark ? 'text-white' : 'text-slate-950 dark:text-white'}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-7 ${isDark ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>{description}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/images/hero/hero-bg.jpg" alt="아이엠드론 드론 데이터 솔루션" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full bg-sky-400/15 px-4 py-2 text-sm font-semibold text-sky-100 ring-1 ring-sky-300/30">
              <Sparkles className="mr-2 h-4 w-4" />
              Drone Data Company, IMDRONE
            </span>
            <h1 className="mt-8 text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
              From Flight to Insight
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              아이엠드론은 단순한 항공촬영을 넘어 건설·에너지·농업·공공안전 현장을 데이터로 기록하고 분석하는 드론 기반 데이터 전문 기업입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
              {heroChips.map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" variant="primary-blue" asChild>
                <Link href="#services">
                  서비스 보기
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

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md lg:mt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Operation Brief</p>
            <div className="mt-6 grid gap-4">
              {[
                ['Service', '촬영·점검·분석·리포트'],
                ['Industries', '건설 / 에너지 / 농업 / 공공안전'],
                ['Output', '사진·영상·정사영상·3D·PDF 보고서'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-950/50 p-5 ring-1 ring-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{label}</p>
                  <p className="mt-2 text-lg font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-sky-400/15 p-5 ring-1 ring-sky-300/30">
              <p className="text-sm leading-7 text-sky-50">
                필요한 드론 서비스는 상담부터 납품까지, 필요한 기업용 장비는 제품 페이지에서 함께 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {strengths.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <Icon className="h-9 w-9 text-sky-300" />
              <h2 className="mt-5 text-lg font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="현장 문제를 데이터로 해결하는 드론 서비스"
            description="항공촬영, 건설 모니터링, 에너지 설비 점검, 관제, 스마트 농업, 콘텐츠 제작까지 산업별 목적에 맞춰 제공합니다."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <Link key={service.id} href={service.link} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900 dark:ring-slate-800">
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-sky-600 shadow-sm">
                      {Icon ? <Icon className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold tracking-tight group-hover:text-sky-600">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
                    <div className="mt-5 inline-flex items-center text-sm font-semibold text-sky-600">
                      자세히 보기
                      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Workflow"
            title="상담부터 납품까지, 현장 중심 프로세스"
            description="비행 자체보다 중요한 것은 고객이 바로 활용할 수 있는 결과물입니다. 아이엠드론은 목적 정의부터 산출물 설계까지 함께 진행합니다."
          />
          <div className="grid gap-5 md:grid-cols-4">
            {workflow.map(([step, title, description]) => (
              <div key={step} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
                <p className="text-sm font-black tracking-[0.24em] text-sky-500">{step}</p>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Recent Projects"
            title="현장에서 검증한 프로젝트"
            description="아이엠드론이 수행한 디지털 트윈, 문화재·시설물 기록, 산업 현장 프로젝트를 확인하세요."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900 dark:ring-slate-800">
                <div className="relative h-56 overflow-hidden">
                  <img src={project.thumbnail} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <Badge variant="white" className="absolute right-4 top-4">{project.date}</Badge>
                </div>
                <div className="p-6">
                  <h3 className="line-clamp-2 text-xl font-bold group-hover:text-sky-600">{project.title}</h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.shortDesc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags?.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="primary-blue" asChild>
              <Link href="/projects">
                모든 프로젝트 보기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Insights"
            title="드론 산업과 현장 적용 인사이트"
            description="산업 동향, 기술, 장비, 현장 적용 사례를 아이엠드론의 관점으로 정리합니다."
            tone="dark"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group overflow-hidden rounded-3xl bg-white/[0.06] ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/[0.09]">
                <div className="relative h-52 overflow-hidden">
                  <img src={post.thumbnail} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <Badge variant="white" className="absolute right-4 top-4">{post.category}</Badge>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-4 text-sm text-slate-300">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" />{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="line-clamp-2 text-xl font-bold text-white group-hover:text-sky-200">{post.title}</h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-300">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="hero-outline" asChild>
              <Link href="/blog">
                모든 글 보기
                <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products"
            title="현장 운용을 위한 기업용 드론·장비"
            description="점검, 촬영, 측량, 관제 목적에 맞는 드론과 페이로드를 확인하고 구매 전 상담을 받아보세요."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900 dark:ring-slate-800">
                <div className="relative h-48 bg-slate-50 p-5 dark:bg-white">
                  <img src={product.image} alt={product.name} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" />
                  <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
                    {product.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold group-hover:text-sky-600">{product.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{product.description}</p>
                  <ul className="mt-5 space-y-2">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full" variant="outline" asChild>
                    <Link href={`/products/${product.id}`}>
                      자세히 보기
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="primary-blue" asChild>
              <Link href="/products">
                전체 제품 보기
                <ShoppingBag className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="고객이 경험한 아이엠드론"
            description="현장 목적을 이해하고 결과물까지 책임지는 드론 파트너가 되겠습니다."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{testimonial.role} · {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 px-6 py-14 text-center text-white shadow-2xl sm:px-10 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Contact</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">드론으로 확인해야 할 현장이 있으신가요?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            촬영, 점검, 관제, 분석, 콘텐츠 제작까지 필요한 목적을 알려주시면 가장 적합한 방식으로 제안드리겠습니다.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="primary-blue" asChild>
              <Link href="/contact">
                문의하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="hero-outline" asChild>
              <Link href="tel:010-4790-6650">010-4790-6650</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
