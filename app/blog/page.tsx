'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogCategories, blogPosts } from '@/data/blog';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Calendar,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock,
  Database,
  FileText,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

const topicGuides = [
  {
    title: '건설·현장 데이터',
    description: '정기 촬영, 공정 비교, 3D 기록, 리얼리티 캡처 운영 표준을 다룹니다.',
    icon: Layers3,
    query: '건설',
  },
  {
    title: '시설·에너지 점검',
    description: '고소 구조물, 태양광, 플랜트, 교량 점검의 데이터 활용 기준을 정리합니다.',
    icon: ShieldCheck,
    query: '점검',
  },
  {
    title: '관제·공공안전',
    description: '드론 스테이션, 원격관제, 도심·공공 현장 운영 인프라를 소개합니다.',
    icon: Camera,
    query: '관제',
  },
  {
    title: '스마트농업·환경',
    description: 'NDVI, 베이스맵, 위성 데이터, 필드 운영 의사결정 관점을 연결합니다.',
    icon: BarChart3,
    query: '농업',
  },
];

const editorialPrinciples = [
  '단순 뉴스 요약보다 고객 의사결정에 필요한 적용 기준을 먼저 설명합니다.',
  '드론 촬영 결과물을 현장 운영, 리포트, 반복 모니터링 관점으로 해석합니다.',
  '서비스·프로젝트·문의 페이지로 이어지는 실무형 인사이트 허브를 지향합니다.',
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const latestPost = blogPosts[0];
  const highlightedPosts = blogPosts.slice(1, 4);
  const recentPosts = blogPosts.slice(0, 6);
  const allTags = useMemo(() => [...new Set(blogPosts.flatMap((post) => post.tags))], []);
  const popularTags = allTags.slice(0, 12);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === '전체' || post.category === selectedCategory;
      const matchesSearch =
        query === '' ||
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('전체');
    setSearchQuery('');
  };

  const applyTopicSearch = (query: string) => {
    setSelectedCategory('전체');
    setSearchQuery(query);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_12%,rgba(14,165,233,0.26),transparent_30%),radial-gradient(circle_at_88%_8%,rgba(56,189,248,0.14),transparent_28%),linear-gradient(135deg,#020617,#0f172a_54%,#020617)]" />
        <div className="absolute inset-0 -z-10 bg-[url('/images/blog/dronedeploy-owner-capture-program-scale-2026-07-14.webp')] bg-cover bg-center opacity-14" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/45 via-slate-950/82 to-slate-950" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              IMDRONE Insight Hub
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">드론 현장을 읽는</span>
              <span className="mt-2 block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                실무 인사이트 허브
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              산업 드론 기술, 장비, 현장 적용 사례를 아이엠드론의 서비스 관점으로 해석합니다.
              촬영을 넘어 고객이 바로 활용할 수 있는 데이터 운영 기준과 의사결정 포인트를 정리합니다.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <p className="text-sm text-slate-400">전체 글</p>
                <p className="mt-1 text-2xl font-bold text-white">{blogPosts.length}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <p className="text-sm text-slate-400">주제 분류</p>
                <p className="mt-1 text-2xl font-bold text-white">{blogCategories.length - 1}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <p className="text-sm text-slate-400">태그</p>
                <p className="mt-1 text-2xl font-bold text-white">{allTags.length}</p>
              </div>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-sky-400 px-6 text-slate-950 hover:bg-sky-300">
                <Link href="#insight-list">
                  인사이트 보기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
                <Link href="/contact">
                  현장 상담하기
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {latestPost ? (
            <Link href={`/blog/${latestPost.id}`} className="group block rounded-[2rem] border border-sky-300/20 bg-white/[0.07] p-4 shadow-2xl shadow-sky-950/30 backdrop-blur transition hover:-translate-y-1 hover:border-sky-300/45">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-900">
                <img
                  src={latestPost.thumbnail}
                  alt={latestPost.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder-blog.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-100 backdrop-blur">
                  Latest Insight
                </div>
              </div>
              <div className="p-3 pt-6">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                  <span className="rounded-full bg-sky-400/15 px-3 py-1 font-medium text-sky-100 ring-1 ring-sky-300/20">{latestPost.category}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4 text-sky-300" />{latestPost.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4 text-sky-300" />{latestPost.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold leading-tight text-white group-hover:text-sky-100">{latestPost.title}</h2>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-300">{latestPost.description}</p>
                <div className="mt-5 inline-flex items-center text-sm font-semibold text-sky-200">
                  최신 글 읽기
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ) : null}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Editorial Map</p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">고객 질문에서 출발하는 주제별 인사이트</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                장비 스펙보다 중요한 것은 현장에서 어떤 문제를 줄이고 어떤 결정을 빠르게 만드는가입니다. 관심 주제를 선택하면 관련 글을 바로 찾아볼 수 있습니다.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <Link href="/services">
                서비스와 연결해 보기
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {topicGuides.map((topic) => {
              const Icon = topic.icon;
              return (
                <button
                  key={topic.title}
                  type="button"
                  onClick={() => applyTopicSearch(topic.query)}
                  className="group rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-sky-400/10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/12 text-sky-300 ring-1 ring-sky-300/20 transition group-hover:bg-sky-300 group-hover:text-slate-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{topic.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{topic.description}</p>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-sky-200">
                    관련 글 찾기
                    <ChevronRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Featured Flow</p>
            <h2 className="text-3xl font-bold text-white">최근 글은 현장 데이터 운영 흐름으로 이어집니다</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              최신 글들은 단발성 촬영보다 반복 캡처, 데이터 소유권, 공정관리, 안전 인프라를 강조합니다. 고객이 서비스 도입 전 확인해야 할 기준을 순서대로 살펴볼 수 있습니다.
            </p>
            <div className="mt-7 space-y-3">
              {editorialPrinciples.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-6 text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {highlightedPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group grid gap-4 rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-4 transition hover:border-sky-300/40 hover:bg-sky-400/10 sm:grid-cols-[150px_1fr]"
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-900">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="h-36 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder-blog.webp';
                    }}
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-slate-950/75 px-2.5 py-1 text-xs font-bold text-sky-100 ring-1 ring-white/10">0{index + 1}</span>
                </div>
                <div className="min-w-0 py-1">
                  <div className="mb-2 flex flex-wrap gap-2 text-xs text-slate-400">
                    <span className="rounded-full bg-sky-400/12 px-2.5 py-1 font-medium text-sky-100">{post.category}</span>
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
                  </div>
                  <h3 className="line-clamp-2 text-lg font-bold leading-snug text-white group-hover:text-sky-100">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-300">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="insight-list" className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.14),transparent_34%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Browse Insights</p>
                <h2 className="text-3xl font-bold text-white">필요한 글을 빠르게 찾으세요</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  카테고리와 검색을 함께 사용해 산업 동향, 현장 적용 사례, 데이터 운영 기준을 선별할 수 있습니다.
                </p>
              </div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-sky-300" />
                <Input
                  type="text"
                  placeholder="예: 건설, 점검, 관제, NDVI, PIX4D"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 border-white/10 bg-slate-950/70 pl-12 pr-12 text-base text-white placeholder:text-slate-500 focus-visible:ring-sky-300"
                />
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-white"
                    aria-label="검색어 지우기"
                  >
                    <X className="h-5 w-5" />
                  </button>
                ) : null}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {blogCategories.map((category) => (
                <Button
                  key={category}
                  type="button"
                  variant="outline"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? 'border-sky-300 bg-sky-300 text-slate-950 hover:bg-sky-200 hover:text-slate-950'
                      : 'border-white/10 bg-slate-950/50 text-slate-200 hover:border-sky-300/50 hover:bg-sky-400/10 hover:text-white'
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">{filteredPosts.length}</span>개의 글을 표시 중입니다.
              </p>
              {(selectedCategory !== '전체' || searchQuery) ? (
                <Button type="button" variant="ghost" onClick={resetFilters} className="w-fit text-slate-300 hover:bg-white/10 hover:text-white">
                  <X className="mr-2 h-4 w-4" />
                  필터 초기화
                </Button>
              ) : null}
            </div>
          </div>

          {popularTags.length > 0 ? (
            <div className="mb-8 flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => applyTopicSearch(tag)}
                  className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-sky-300/40 hover:bg-sky-400/10 hover:text-sky-100"
                >
                  #{tag}
                </button>
              ))}
            </div>
          ) : null}

          {filteredPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.045] shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-sky-400/10"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-900">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/placeholder-blog.webp';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute right-4 top-4 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold text-sky-100 ring-1 ring-white/10 backdrop-blur">{post.category}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-sky-300" />{post.date}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-sky-300" />{post.readTime}</span>
                    </div>
                    <h3 className="line-clamp-2 text-xl font-bold leading-snug text-white group-hover:text-sky-100">{post.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">{post.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1 text-xs text-slate-300">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-5">
                      <span className="inline-flex items-center text-sm font-semibold text-sky-200">
                        자세히 보기
                        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] px-6 py-16 text-center">
              <BookOpen className="mx-auto h-14 w-14 text-sky-300" />
              <h3 className="mt-5 text-2xl font-bold text-white">검색 결과가 없습니다</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
                다른 키워드나 카테고리로 다시 검색해보세요. 서비스 목적이 명확하다면 문의 페이지에서 바로 상담하실 수 있습니다.
              </p>
              <Button type="button" onClick={resetFilters} className="mt-7 bg-sky-300 text-slate-950 hover:bg-sky-200">
                전체 글 보기
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Start Reading</p>
              <h2 className="mt-3 text-3xl font-bold text-white">처음이라면 이 글부터 읽어보세요</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                최근 글은 드론 데이터를 도입하는 고객이 가장 먼저 확인해야 할 기준을 담고 있습니다. 현장 목적에 맞춰 글을 읽고 서비스 상담으로 연결해보세요.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-sky-300/40 hover:bg-sky-400/10"
                >
                  <div className="flex items-center gap-2 text-xs text-sky-200">
                    <FileText className="h-4 w-4" />
                    {post.date}
                  </div>
                  <h3 className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-white group-hover:text-sky-100">{post.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-sky-950/25 to-transparent" />
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-sky-300/20 bg-gradient-to-br from-sky-500/16 via-slate-900 to-slate-950 p-8 text-center shadow-2xl shadow-sky-950/40 sm:p-12">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-300 text-slate-950">
            <Database className="h-7 w-7" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">인사이트를 현장 계획으로 바꿔보세요</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
            관심 있는 글이나 현장 조건을 알려주시면 촬영 방식, 데이터 산출물, 반복 운영 계획까지 아이엠드론이 함께 정리해드립니다.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-sky-300 px-7 text-slate-950 hover:bg-sky-200">
              <Link href="/contact">
                프로젝트 상담하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white">
              <a href="tel:061-920-9297">
                <Phone className="mr-2 h-5 w-5" />
                061-920-9297
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white">
              <a href="mailto:imdrone.site@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                이메일 문의
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <MapPin className="h-4 w-4 text-sky-300" />
              현장 조건 검토
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <FileText className="h-4 w-4 text-sky-300" />
              산출물 설계
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <Clock className="h-4 w-4 text-sky-300" />
              반복 운영 제안
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
