'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BadgeCheck,
  Box,
  Camera,
  ClipboardList,
  Filter,
  FolderOpen,
  Layers3,
  MapPinned,
  MonitorPlay,
  PlayCircle,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Video,
} from 'lucide-react';

const heroPoints = [
  '항공촬영',
  '디지털트윈',
  '3D 모델링',
  '가상투어',
  '문화·관광 콘텐츠',
];

const capabilitySummary = [
  {
    icon: Camera,
    title: '현장을 보여주는 항공 홍보 콘텐츠',
    description: '부동산, 관광지, 행사, 산업 현장을 항공 영상·사진으로 기록하고 홍보 채널에 맞게 활용합니다.',
  },
  {
    icon: Layers3,
    title: '문화재·시설을 데이터로 남기는 디지털트윈',
    description: '드론 촬영 데이터를 3D 모델과 가상투어로 전환해 보존, 안내, 홍보, 교육 자료로 확장합니다.',
  },
  {
    icon: MonitorPlay,
    title: '웹·영상·VR까지 연결되는 납품 산출물',
    description: '영상, 이미지, 360도 콘텐츠, 3D 모델을 고객이 실제로 활용할 수 있는 형태로 구성합니다.',
  },
  {
    icon: ShieldCheck,
    title: '현장 조건을 이해한 안전한 수행',
    description: '촬영 위치, 동선, 장비, 일정, 안전 조건을 검토해 반복 가능한 수행 체계로 프로젝트를 진행합니다.',
  },
];

const customerChecks = [
  {
    icon: SearchCheck,
    title: '비슷한 현장 경험이 있는가',
    description: '관광지, 문화유산, 시설물, 행사 등 우리 프로젝트와 유사한 수행 사례를 먼저 확인할 수 있습니다.',
  },
  {
    icon: ClipboardList,
    title: '어떤 산출물을 받을 수 있는가',
    description: '항공 영상, 사진, 3D 모델, VR 영상, 가상투어처럼 실제 납품 형태를 프로젝트 카드에서 확인합니다.',
  },
  {
    icon: Target,
    title: '홍보·기록·점검 중 목적이 무엇인가',
    description: '프로젝트 목적에 따라 촬영 방식, 편집 범위, 데이터 처리 방식, 납품 채널이 달라집니다.',
  },
];

const categoryGuide = [
  {
    label: '항공촬영·홍보 영상',
    match: ['드론촬영', '항공VR', '디지털투어'],
    description: '현장 규모와 분위기를 영상·사진으로 전달하는 프로젝트',
  },
  {
    label: '디지털트윈·3D 모델링',
    match: ['디지털트윈', '디지털 트윈', '3D모델링', '3D 모델링'],
    description: '촬영 데이터를 3D 모델과 디지털 자산으로 만드는 프로젝트',
  },
  {
    label: '문화유산·관광 콘텐츠',
    match: ['문화유산', '디지털문화재', '세계유산도시', '순천만국가정원'],
    description: '문화재, 관광지, 공공 홍보에 활용 가능한 콘텐츠 프로젝트',
  },
  {
    label: 'VR·가상투어',
    match: ['VR', '메타포트', '3D 가상투어', '항공VR'],
    description: '웹과 전시에서 체험형 콘텐츠로 활용 가능한 프로젝트',
  },
];

function getProjectValue(tags: string[] = [], hasModel?: boolean, hasVideo360?: boolean) {
  const tagText = tags.join(' ');

  if (hasModel || tagText.includes('디지털트윈') || tagText.includes('3D')) {
    return '3D 모델과 디지털트윈으로 현장을 보존·홍보·설명할 수 있는 데이터 자산을 제공합니다.';
  }

  if (hasVideo360 || tagText.includes('VR') || tagText.includes('가상투어')) {
    return '온라인에서도 현장감을 전달할 수 있는 VR·가상투어 콘텐츠로 활용할 수 있습니다.';
  }

  if (tagText.includes('문화') || tagText.includes('세계유산') || tagText.includes('관광')) {
    return '지역·문화·관광 자원을 스토리 있는 홍보 콘텐츠로 보여주는 데 적합합니다.';
  }

  return '항공 영상과 이미지를 기반으로 홍보, 기록, 제안, 웹 콘텐츠에 활용할 수 있습니다.';
}

function getPrimaryOutput(project: (typeof projects)[number]) {
  const outputs = ['항공 이미지'];
  if (project.video) outputs.push('영상');
  if (project.video360) outputs.push('360° VR');
  if (project.model) outputs.push('3D 모델');
  return outputs.join(' · ');
}

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string>('전체');

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projects.forEach((project) => {
      project.tags?.forEach((tag) => tagsSet.add(tag));
    });
    return ['전체', ...Array.from(tagsSet).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTag === '전체') return projects;
    return projects.filter((project) => project.tags?.includes(selectedTag));
  }, [selectedTag]);

  const stats = useMemo(
    () => [
      {
        label: '공개 프로젝트',
        value: projects.length,
        description: '대표 수행 사례',
      },
      {
        label: '영상 포함 사례',
        value: projects.filter((project) => project.video || project.video360).length,
        description: '홍보·VR 영상 산출물',
      },
      {
        label: '3D 모델 사례',
        value: projects.filter((project) => project.model).length,
        description: '디지털트윈·모델링',
      },
    ],
    []
  );

  const featuredProjects = filteredProjects.slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/portfolios/portfolio-hero.webp"
            alt="아이엠드론 포트폴리오 대표 배경"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(14,165,233,0.26),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(125,211,252,0.16),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.72)_48%,rgba(2,6,23,0.98))]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              IMDRONE Portfolio Hub
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              실제 수행 사례로
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                기술 역량을 증명합니다
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              아이엠드론의 포트폴리오는 단순한 작업 목록이 아니라, 항공촬영·디지털트윈·3D 모델링·가상투어·콘텐츠 제작 역량을
              고객이 확인할 수 있는 실제 결과물 중심의 사례 모음입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroPoints.map((point) => (
                <span key={point} className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-100 backdrop-blur">
                  {point}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300" asChild>
                <Link href="/contact">
                  비슷한 사례 문의하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="#project-list">
                  프로젝트 살펴보기
                  <FolderOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-sky-950/40 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-200/80">Proof of Work</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">대표 실적 요약</h2>
            <div className="mt-6 grid gap-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/55 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-slate-300">{item.label}</p>
                    <BadgeCheck className="h-5 w-5 text-sky-300" />
                  </div>
                  <p className="mt-3 text-4xl font-semibold text-white">{item.value}+</p>
                  <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-gradient-to-r from-sky-400/20 to-cyan-300/10 p-5 text-sm leading-6 text-sky-50">
              각 프로젝트는 고객이 확인해야 할 적용 분야, 산출물, 활용 가치를 중심으로 정리했습니다.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Capabilities</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">사례로 보는 수행 역량</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilitySummary.map((item) => {
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
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Project Categories</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">분야별로 빠르게 확인하세요</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                프로젝트 유형별로 어떤 현장에 적용되었고, 어떤 산출물로 확장되는지 먼저 확인할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categoryGuide.map((category) => {
              const count = projects.filter((project) =>
                project.tags?.some((tag) => category.match.some((keyword) => tag.includes(keyword)))
              ).length;
              return (
                <div key={category.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                  <Filter className="h-9 w-9 text-sky-300" />
                  <h3 className="mt-5 text-xl font-semibold text-white">{category.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{category.description}</p>
                  <p className="mt-5 text-sm font-medium text-sky-200">관련 공개 사례 {count}건</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="project-list" className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Portfolio List</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">주요 프로젝트</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                이미지, 영상, 3D 모델, VR 콘텐츠 등 프로젝트별 산출물과 활용 가치를 함께 확인하세요.
              </p>
            </div>
            <p className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm text-slate-300">
              현재 표시: <span className="font-semibold text-white">{filteredProjects.length}개</span>
              {selectedTag !== '전체' && <span className="text-sky-200"> · {selectedTag}</span>}
            </p>
          </div>

          <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-sky-200">
              <Filter className="h-4 w-4" />
              분야별 필터
            </div>
            <div className="flex flex-wrap gap-3">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    selectedTag === tag
                      ? 'border-sky-300 bg-sky-300 text-slate-950'
                      : 'border-white/10 bg-slate-950/50 text-slate-200 hover:border-sky-300/50 hover:bg-sky-400/10'
                  }`}
                >
                  {tag}
                  {tag !== '전체' && (
                    <span className="ml-2 opacity-70">({projects.filter((project) => project.tags?.includes(tag)).length})</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {featuredProjects.length > 0 && selectedTag === '전체' && (
            <div className="mb-12 grid gap-5 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`} prefetch={false} className="group block">
                  <article className="h-full overflow-hidden rounded-[2rem] border border-sky-300/20 bg-white/[0.06] shadow-2xl shadow-sky-950/20 transition hover:-translate-y-1 hover:border-sky-300/60">
                    <div className="relative h-72 overflow-hidden bg-slate-800">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                        {project.video && (
                          <span className="rounded-full bg-sky-300 px-3 py-1 text-xs font-semibold text-slate-950">영상</span>
                        )}
                        {project.video360 && (
                          <span className="rounded-full bg-cyan-200 px-3 py-1 text-xs font-semibold text-slate-950">360° VR</span>
                        )}
                        {project.model && (
                          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-950">3D 모델</span>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-medium text-sky-200">대표 프로젝트 · {project.date ?? '진행 사례'}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white group-hover:text-sky-200">{project.title}</h3>
                      <p className="mt-4 line-clamp-3 leading-7 text-slate-300">{project.shortDesc}</p>
                      <div className="mt-5 flex items-center gap-2 text-sm font-medium text-sky-200">
                        자세히 보기
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} prefetch={false} className="group block">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/85 transition hover:-translate-y-1 hover:border-sky-300/50 hover:shadow-2xl hover:shadow-sky-950/25">
                  <div className="relative h-60 overflow-hidden bg-slate-800">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    {project.date && (
                      <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                        {project.date}
                      </span>
                    )}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {project.video && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-sky-100 backdrop-blur">
                          <Video className="h-3 w-3" /> 영상
                        </span>
                      )}
                      {project.video360 && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-cyan-100 backdrop-blur">
                          <PlayCircle className="h-3 w-3" /> VR
                        </span>
                      )}
                      {project.model && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                          <Box className="h-3 w-3" /> 3D
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-white transition group-hover:text-sky-200">{project.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">{project.shortDesc}</p>
                    <div className="mt-5 rounded-2xl bg-slate-950/60 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Deliverables</p>
                      <p className="mt-2 text-sm text-slate-200">{getPrimaryOutput(project)}</p>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-400">{getProjectValue(project.tags, Boolean(project.model), Boolean(project.video360))}</p>
                    {project.tags && project.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                            #{tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">+{project.tags.length - 4}</span>}
                      </div>
                    )}
                    <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-sky-200">
                      프로젝트 상세 확인
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 px-6 py-16 text-center">
              <FolderOpen className="mx-auto h-16 w-16 text-slate-500" />
              <p className="mt-4 text-xl font-semibold text-white">해당 카테고리의 프로젝트가 없습니다.</p>
              <Button className="mt-6 bg-sky-400 text-slate-950 hover:bg-sky-300" onClick={() => setSelectedTag('전체')}>
                전체 프로젝트 보기
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Client Checkpoints</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">상담 전 이런 부분을 확인해보세요</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                포트폴리오를 보면 우리 현장에 필요한 촬영 방식과 산출물 범위를 더 빠르게 판단할 수 있습니다.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {customerChecks.map((item) => {
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
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">우리 현장에 맞는 사례와 산출물을 함께 찾아보겠습니다</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                유사한 포트폴리오가 있는지, 항공촬영·3D 모델·VR·홍보 영상 중 어떤 산출물이 적합한지 아이엠드론과 상담해보세요.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button size="lg" className="bg-white text-slate-950 hover:bg-sky-100" asChild>
                <Link href="/contact">
                  프로젝트 상담 요청
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="/services">
                  서비스 전체 보기
                  <MapPinned className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
