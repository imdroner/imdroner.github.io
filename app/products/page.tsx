'use client';

import { useMemo, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BadgeCheck,
  Box,
  Camera,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Cog,
  Factory,
  Filter,
  Gauge,
  Map,
  Package,
  PlaneTakeoff,
  Radio,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import { products } from '@/data/products';
import type { Product } from '@/data/products';

const heroTags = ['산업용 드론', '자동화 시스템', 'LiDAR·센서', '열화상 점검', '항공 콘텐츠', '도입 상담'];

const purposeSolutions = [
  {
    icon: ShieldCheck,
    title: '시설·안전 점검',
    description: '열화상, 줌, 레이저 거리 측정 장비로 에너지 설비·건축물·공공안전 현장을 점검합니다.',
    tags: ['열화상', '점검', '공공안전', '수색구조', '긴급대응'],
  },
  {
    icon: Map,
    title: '측량·3D 데이터',
    description: 'RTK, LiDAR, 고해상도 매핑 카메라로 정사영상·3D 모델·공간 데이터를 구축합니다.',
    tags: ['RTK', 'LiDAR', '측량', '3D모델링', '포토그래메트리'],
  },
  {
    icon: Radio,
    title: '무인 관제·자동화',
    description: 'Dock과 원격 운영 플랫폼을 기반으로 정기 순찰·상시 모니터링 체계를 설계합니다.',
    tags: ['자동화', '무인운영', 'FlightHub2', '드론스테이션', '원격관리'],
  },
  {
    icon: Camera,
    title: '항공촬영·콘텐츠',
    description: '브랜드, 관광, 행사, 현장 홍보에 필요한 고품질 항공 영상과 이미지를 제작합니다.',
    tags: ['항공촬영', '콘텐츠제작', '카메라드론', 'FPV', '360촬영'],
  },
];

const buyingCheckpoints = [
  {
    icon: Target,
    title: '목적 먼저 정리',
    description: '촬영, 점검, 측량, 방제, 관제처럼 업무 목적을 먼저 정하면 필요한 기체와 센서가 명확해집니다.',
  },
  {
    icon: Gauge,
    title: '현장 조건 검토',
    description: '비행 시간, 통신 거리, 장애물, 방진방수, 안전 장비, 비행 승인 조건을 함께 확인해야 합니다.',
  },
  {
    icon: ClipboardCheck,
    title: '산출물 기준 설정',
    description: '사진·영상, 정사영상, 3D 모델, 열화상 리포트, 관제 데이터 등 최종 활용 형태를 기준으로 장비를 선택합니다.',
  },
  {
    icon: Wrench,
    title: '운용·유지관리 계획',
    description: '교육, 예비 배터리, A/S, 소프트웨어, 정기 점검까지 고려해야 실제 현장에서 안정적으로 운용할 수 있습니다.',
  },
];

const categoryIconMap: Record<string, LucideIcon> = {
  '기업용 드론': PlaneTakeoff,
  '산업용 드론': Factory,
  '농업용 드론': Zap,
  '자동화 시스템': Radio,
  '페이로드': Box,
  '점검 장비': ShieldCheck,
  '측량 장비': Map,
  '조종 장비': Cog,
  '충전 장비': Zap,
  '카메라 드론': Camera,
};

function getCategoryIcon(category: string) {
  return categoryIconMap[category] ?? Package;
}

function formatPrice(price: number) {
  if (!price) return '견적 문의';
  return `₩${price.toLocaleString('ko-KR')}`;
}

function productMatchesTags(product: Product, tags: string[]) {
  const haystack = `${product.category} ${product.name} ${product.description} ${(product.tags ?? []).join(' ')} ${product.features.join(' ')}`;
  return tags.some((tag) => haystack.includes(tag));
}

function getProductPurpose(product: Product) {
  const matched = purposeSolutions.find((solution) => productMatchesTags(product, solution.tags));
  return matched?.title ?? '맞춤형 드론 운용';
}

function getConsultingPoint(product: Product) {
  if (productMatchesTags(product, ['Dock', '자동화', '무인운영', 'FlightHub2', '드론스테이션'])) {
    return '상시 모니터링, 원격 관제, 자동 이착륙 운영을 검토하는 고객에게 적합합니다.';
  }
  if (productMatchesTags(product, ['LiDAR', '측량', '3D모델링', 'RTK', '포토그래메트리'])) {
    return '정사영상, 3D 모델, 지형·시설 데이터 구축이 필요한 프로젝트에 적합합니다.';
  }
  if (productMatchesTags(product, ['열화상', '점검', '공공안전', '수색구조', '긴급대응'])) {
    return '설비 점검, 공공안전, 야간·고위험 현장 확인이 필요한 업무에 적합합니다.';
  }
  if (productMatchesTags(product, ['항공촬영', '콘텐츠제작', '카메라드론', 'FPV', '360촬영'])) {
    return '홍보 영상, 현장 기록, 관광·행사 콘텐츠 제작에 적합합니다.';
  }
  return '현장 목적과 산출물 기준에 맞춰 장비·센서·운용 방식을 함께 검토할 수 있습니다.';
}

function getCategoryDescription(category: string) {
  const descriptions: Record<string, string> = {
    '산업용 드론': '점검, 측량, 공공안전, 대형 현장 운영에 적합한 엔터프라이즈 플랫폼',
    '기업용 드론': '휴대성과 업무 성능의 균형이 필요한 기업·기관용 드론',
    '자동화 시스템': '정기 순찰과 원격 관제를 위한 무인 드론 스테이션',
    '페이로드': 'LiDAR, 매핑 카메라 등 데이터 품질을 결정하는 전문 센서',
    '카메라 드론': '홍보, 기록, 콘텐츠 제작에 활용되는 항공촬영 장비',
    '농업용 드론': '방제, 생육 확인, 농업 현장 운영을 위한 드론 장비',
  };
  return descriptions[category] ?? '현장 목적에 맞춰 선택할 수 있는 드론 관련 장비';
}

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
    return ['전체', ...uniqueCategories];
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== '전체') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((product) => {
        const searchable = [
          product.name,
          product.category,
          product.description,
          product.detailDescription ?? '',
          ...(product.tags ?? []),
          ...product.features,
        ]
          .join(' ')
          .toLowerCase();
        return searchable.includes(query);
      });
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const heroProducts = useMemo(() => products.filter((product) => product.hero || product.featured).slice(0, 4), []);
  const featuredProducts = useMemo(() => products.filter((product) => product.featured).slice(0, 6), []);
  const productStats = useMemo(
    () => [
      { label: '등록 제품', value: products.length, description: '드론·센서·자동화 장비' },
      { label: '솔루션 카테고리', value: categories.length - 1, description: '목적별 장비 구성' },
      { label: '상세 페이지', value: products.filter((product) => product.hasDetailedPage).length, description: '제품별 정보 제공' },
    ],
    [categories.length]
  );

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.25),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(125,211,252,0.18),transparent_26%),linear-gradient(135deg,#020617,#0f172a_48%,#020617)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-sky-500/10 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              IMDRONE Product Solution Guide
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">장비 선택을 넘어</span>
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                현장 솔루션 설계
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              아이엠드론은 제품명과 스펙만 나열하지 않습니다. 점검, 측량, 관제, 촬영, 농업, 공공안전처럼 고객의 실제 목적에 맞춰
              기체·센서·SW·운용 서비스를 함께 검토합니다.
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
                  도입 상담 요청
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="#product-list">
                  제품 둘러보기
                  <ShoppingBag className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-sky-950/40 backdrop-blur-xl sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-sky-200/80">Featured Systems</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">현장 목적별 대표 장비</h2>
              </div>
              <BadgeCheck className="h-7 w-7 text-sky-300" />
            </div>
            <div className="mt-6 grid gap-4">
              {heroProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`} className="group block" prefetch={false}>
                  <div className="grid grid-cols-[96px_1fr] gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-3 transition hover:border-sky-300/50 hover:bg-sky-400/10">
                    <div className="aspect-square overflow-hidden rounded-xl bg-white">
                      <img src={product.image} alt={product.name} className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-sky-200">{product.category}</p>
                      <h3 className="mt-1 truncate text-lg font-semibold text-white">{product.name}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-300">{product.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {productStats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-medium text-slate-300">{stat.label}</p>
              <p className="mt-3 text-4xl font-semibold text-white">{stat.value}+</p>
              <p className="mt-2 text-sm text-slate-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Solution First</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">제품보다 먼저 현장 목적을 확인합니다</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              같은 드론도 어떤 센서와 운용 방식으로 구성하느냐에 따라 결과물이 달라집니다. 아이엠드론은 장비 구매 전 고객의 업무 목적과
              최종 산출물을 함께 정리합니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {purposeSolutions.map((solution) => {
              const Icon = solution.icon;
              const count = products.filter((product) => productMatchesTags(product, solution.tags)).length;
              return (
                <div key={solution.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-sky-400/10">
                  <Icon className="h-9 w-9 text-sky-300" />
                  <h3 className="mt-5 text-xl font-semibold text-white">{solution.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{solution.description}</p>
                  <p className="mt-5 text-sm font-medium text-sky-200">관련 제품 {count}개</p>
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
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Featured Products</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">아이엠드론이 제안하는 주요 장비</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                현장 검토, 데이터 취득, 자동화 운영까지 연결하기 좋은 대표 장비를 먼저 확인해보세요.
              </p>
            </div>
            <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
              <Link href="#product-list">
                전체 제품 보기
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group block" prefetch={false}>
                <article className="h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 transition hover:-translate-y-1 hover:border-sky-300/50 hover:shadow-2xl hover:shadow-sky-950/25">
                  <div className="flex h-56 items-center justify-center bg-white p-5">
                    <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-medium text-sky-200">{getProductPurpose(product)}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white group-hover:text-sky-200">{product.name}</h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-300">{product.description}</p>
                    <div className="mt-5 rounded-2xl bg-slate-900/80 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Consulting Point</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{getConsultingPoint(product)}</p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="product-list" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Product Finder</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">제품·장비 찾기</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                카테고리와 검색어로 필요한 장비를 찾고, 제품별 활용 현장과 상담 포인트를 함께 확인하세요.
              </p>
            </div>
            <p className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm text-slate-300">
              현재 표시: <span className="font-semibold text-white">{filteredProducts.length}개</span>
              {selectedCategory !== '전체' && <span className="text-sky-200"> · {selectedCategory}</span>}
            </p>
          </div>

          <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-sky-200">
              <Filter className="h-4 w-4" />
              제품 카테고리
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category === '전체' ? Package : getCategoryIcon(category);
                const isSelected = selectedCategory === category;
                const count = category === '전체' ? products.length : products.filter((product) => product.category === category).length;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                      isSelected
                        ? 'border-sky-300 bg-sky-300 text-slate-950'
                        : 'border-white/10 bg-slate-950/50 text-slate-200 hover:border-sky-300/50 hover:bg-sky-400/10'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {category}
                    <span className="opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-10 rounded-3xl border border-white/10 bg-slate-900/80 p-4 sm:p-5">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="제품명, 기능, 활용 목적을 검색하세요. 예: 열화상, RTK, Dock, 항공촬영"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/80 py-4 pl-12 pr-12 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/60 focus:ring-2 focus:ring-sky-300/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition hover:bg-white/10 hover:text-white"
                  aria-label="검색어 지우기"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories
              .filter((category) => category !== '전체')
              .slice(0, 6)
              .map((category) => {
                const Icon = getCategoryIcon(category);
                return (
                  <div key={category} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                    <Icon className="h-7 w-7 text-sky-300" />
                    <h3 className="mt-3 text-lg font-semibold text-white">{category}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{getCategoryDescription(category)}</p>
                  </div>
                );
              })}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => {
                const CategoryIcon = getCategoryIcon(product.category);
                return (
                  <article key={product.id} className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/85 transition hover:-translate-y-1 hover:border-sky-300/50 hover:shadow-2xl hover:shadow-sky-950/25">
                    <Link href={`/products/${product.id}`} prefetch={false} className="group block">
                      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-white p-5">
                        <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain transition duration-700 group-hover:scale-105" />
                        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-sky-100 backdrop-blur">
                          <CategoryIcon className="h-3 w-3" />
                          {product.category}
                        </span>
                      </div>
                    </Link>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-sm font-medium text-sky-200">{getProductPurpose(product)}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{product.name}</h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">{product.description}</p>

                      <div className="mt-5 rounded-2xl bg-slate-950/60 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Recommended For</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{getConsultingPoint(product)}</p>
                      </div>

                      <ul className="mt-5 space-y-2">
                        {product.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                            <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-sky-300" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {product.tags && product.tags.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {product.tags.slice(0, 4).map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto pt-6">
                        <p className="mb-3 text-center text-lg font-semibold text-white">{formatPrice(product.price)}</p>
                        <div className="grid grid-cols-2 gap-3">
                          <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                            <Link href={`/products/${product.id}`}>상세보기</Link>
                          </Button>
                          <Button asChild className="bg-sky-400 text-slate-950 hover:bg-sky-300">
                            <Link href="/contact">상담 문의</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 px-6 py-16 text-center">
              <Package className="mx-auto h-16 w-16 text-slate-500" />
              <p className="mt-4 text-xl font-semibold text-white">검색 결과가 없습니다.</p>
              <p className="mt-2 text-slate-400">다른 검색어나 카테고리를 선택해보세요.</p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white" onClick={() => setSearchQuery('')}>
                  검색어 지우기
                </Button>
                <Button className="bg-sky-400 text-slate-950 hover:bg-sky-300" onClick={() => setSelectedCategory('전체')}>
                  전체 제품 보기
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Buying Checklist</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">제품 도입 전 확인할 기준</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                드론 장비는 단품 가격보다 현장 조건, 산출물, 운용 인력, 유지관리 계획까지 함께 검토해야 도입 효과가 커집니다.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {buyingCheckpoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                    <Icon className="h-9 w-9 text-sky-300" />
                    <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-400/20 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-sky-950/30 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">우리 현장에 맞는 드론 장비와 운용 방식을 함께 찾겠습니다</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                필요한 장비를 이미 알고 계셔도 좋고, 현장 목적만 정리되어 있어도 괜찮습니다. 아이엠드론이 장비, 센서, 소프트웨어, 서비스 조합을
                고객의 업무 목적에 맞춰 제안드립니다.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button size="lg" className="bg-white text-slate-950 hover:bg-sky-100" asChild>
                <Link href="/contact">
                  제품·솔루션 상담
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="/services">
                  서비스와 함께 보기
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
