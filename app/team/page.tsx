'use client';

import { useMemo, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { teamMembers } from '@/data/team';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Calendar,
  Camera,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Database,
  FileText,
  Mail,
  Map,
  Phone,
  Radio,
  Search,
  ShieldCheck,
  Sparkles,
  Tag,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';

const heroTags = ['현장 운용', '항공촬영', '산업 점검', '3D 데이터', '관제 설계', '장비 컨설팅'];

const teamStats = [
  { label: '운영 기준', value: '안전 우선', description: '비행 가능 조건과 현장 리스크를 먼저 확인합니다.' },
  { label: '핵심 역량', value: '데이터 중심', description: '촬영 결과를 리포트·지도·모델로 연결합니다.' },
  { label: '상담 흐름', value: '목적부터', description: '장비보다 고객의 최종 활용 목적을 먼저 정리합니다.' },
];

const capabilities: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Camera,
    title: '항공촬영·콘텐츠 기획',
    description: '브랜드 홍보, 행사, 관광, 현장 기록에 필요한 항공 이미지와 영상 결과물을 목적에 맞춰 설계합니다.',
  },
  {
    icon: ClipboardCheck,
    title: '시설 점검·현장 모니터링',
    description: '고위험 구조물, 건설 현장, 에너지 설비를 안전하게 확인하고 점검 리포트로 활용할 수 있게 정리합니다.',
  },
  {
    icon: Map,
    title: '3D 모델링·디지털트윈',
    description: '정사영상, 3D 모델, 공간 데이터, 디지털트윈 기반 자료를 고객의 의사결정 자료로 연결합니다.',
  },
  {
    icon: Radio,
    title: '드론 관제·자동화 운영',
    description: '정기 순찰, 원격 관제, Dock 기반 자동화 운영처럼 반복 모니터링이 필요한 현장 구조를 검토합니다.',
  },
  {
    icon: Wrench,
    title: '장비 도입·운용 컨설팅',
    description: '드론, 센서, 소프트웨어, 교육, 유지관리까지 실제 운용 가능한 구성을 고객 목적에 맞춰 제안합니다.',
  },
  {
    icon: Zap,
    title: '산업별 서비스 조합',
    description: '건설, 에너지, 공공안전, 스마트 농업, 콘텐츠 제작 등 분야별로 필요한 장비와 산출물을 조합합니다.',
  },
];

const collaborationSteps = [
  {
    title: '목적 확인',
    description: '촬영, 점검, 관제, 장비 도입 중 어떤 결과가 필요한지 먼저 정리합니다.',
  },
  {
    title: '현장 검토',
    description: '위치, 일정, 비행 조건, 위험 요소, 필요한 장비와 센서 구성을 확인합니다.',
  },
  {
    title: '운영 설계',
    description: '비행 계획, 데이터 취득 방식, 안전 기준, 산출물 형식을 실행 가능한 흐름으로 만듭니다.',
  },
  {
    title: '수행·납품',
    description: '현장에서 데이터를 수집하고 고객이 바로 활용할 수 있는 형태로 결과물을 전달합니다.',
  },
];

function getTagCount(tag: string) {
  return teamMembers.filter((member) => member.tags?.includes(tag)).length;
}

export default function TeamPage() {
  const [selectedTag, setSelectedTag] = useState<string>('전체');

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    teamMembers.forEach((member) => {
      member.tags?.forEach((tag) => tagsSet.add(tag));
    });
    return ['전체', ...Array.from(tagsSet).sort()];
  }, []);

  const filteredMembers = useMemo(() => {
    if (selectedTag === '전체') return teamMembers;
    return teamMembers.filter((member) => member.tags?.includes(selectedTag));
  }, [selectedTag]);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_16%,rgba(14,165,233,0.28),transparent_31%),radial-gradient(circle_at_84%_10%,rgba(125,211,252,0.16),transparent_28%),linear-gradient(135deg,#020617,#0f172a_50%,#020617)]" />
        <div className="absolute inset-0 -z-10 bg-[url('/images/team/team-hero.webp')] bg-cover bg-center opacity-24" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/40 via-slate-950/78 to-slate-950" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              IMDRONE Field Team
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">현장을 이해하는</span>
              <span className="block bg-gradient-to-r from-sky-200 via-cyan-100 to-white bg-clip-text text-transparent">
                드론 운영팀
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              아이엠드론은 장비를 운용하는 사람의 판단이 결과물의 품질을 만든다고 믿습니다. 현장 조건, 안전 기준, 데이터 활용 목적을 함께 이해하는 팀이 촬영부터 분석, 납품까지 책임 있게 설계합니다.
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
                <Link href="/about">
                  회사 신뢰도 보기
                  <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-sky-950/40 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-sky-200/80">Team Standard</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">프로젝트 운영 기준</h2>
              </div>
              <BadgeCheck className="h-7 w-7 text-sky-300" />
            </div>
            <div className="mt-6 grid gap-4">
              {teamStats.map((stat) => (
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
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <ShieldCheck className="h-8 w-8 text-sky-300" />
            <h2 className="mt-5 text-xl font-semibold text-white">안전 운항 판단</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">공역, 장애물, 현장 통제, 보험과 승인 조건을 확인해 무리 없는 운영 범위를 제안합니다.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <Database className="h-8 w-8 text-sky-300" />
            <h2 className="mt-5 text-xl font-semibold text-white">데이터 산출물 이해</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">사진과 영상을 넘어 보고서, 지도, 3D 모델, 관제 기록 등 활용 가능한 결과물로 정리합니다.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <BriefcaseBusiness className="h-8 w-8 text-sky-300" />
            <h2 className="mt-5 text-xl font-semibold text-white">고객 업무 관점</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">현장 담당자가 실제로 판단하고 보고해야 하는 내용에 맞춰 촬영 범위와 납품 형식을 설계합니다.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Team Capability</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">팀의 전문성은 현장 결과물로 증명됩니다</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              아이엠드론의 팀 역량은 단순한 직함보다 어떤 현장 문제를 해결할 수 있는지로 설명되어야 합니다. 고객 목적에 맞춰 아래 역량을 조합합니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-sky-400/10">
                  <Icon className="h-9 w-9 text-sky-300" />
                  <h3 className="mt-5 text-xl font-semibold text-white">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{capability.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">People Finder</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">역할과 전문 분야로 팀을 확인하세요</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                필요한 현장 업무와 가까운 전문 분야를 선택하면 관련 프로필을 빠르게 확인할 수 있습니다.
              </p>
            </div>
            <p className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm text-slate-300">
              현재 표시: <span className="font-semibold text-white">{filteredMembers.length}명</span>
              {selectedTag !== '전체' && <span className="text-sky-200"> · {selectedTag}</span>}
            </p>
          </div>

          <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-sky-200">
              <Tag className="h-4 w-4" />
              전문 분야
            </div>
            <div className="flex flex-wrap gap-3">
              {allTags.map((tag) => {
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                      isSelected
                        ? 'border-sky-300 bg-sky-300 text-slate-950'
                        : 'border-white/10 bg-slate-950/50 text-slate-200 hover:border-sky-300/50 hover:bg-sky-400/10'
                    }`}
                  >
                    {tag === '전체' ? <Search className="h-4 w-4" /> : <Tag className="h-4 w-4" />}
                    {tag}
                    {tag !== '전체' && <span className="opacity-70">({getTagCount(tag)})</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {filteredMembers.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredMembers.map((member) => (
                <article key={member.id} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 transition hover:-translate-y-1 hover:border-sky-300/50 hover:shadow-2xl hover:shadow-sky-950/25">
                  <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(14,165,233,0.22),transparent_35%),linear-gradient(135deg,#0f172a,#020617)] p-8">
                    <Avatar className="h-44 w-44 border border-white/10 shadow-2xl shadow-sky-950/30 transition duration-500 group-hover:scale-105">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-slate-800 text-4xl text-white">{member.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    {member.joinDate && (
                      <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-medium text-sky-100 backdrop-blur">
                        <Calendar className="h-3 w-3" />
                        Since {member.joinDate}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <p className="inline-flex rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-100">{member.role}</p>
                    <h3 className="mt-4 text-2xl font-semibold text-white group-hover:text-sky-200">{member.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{member.position}</p>
                    <p className="mt-5 text-sm leading-6 text-slate-300">{member.shortBio}</p>

                    <div className="mt-5 space-y-2 rounded-2xl bg-slate-900/80 p-4">
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="flex min-w-0 items-center gap-2 text-sm text-slate-300 hover:text-sky-200">
                          <Mail className="h-4 w-4 flex-shrink-0 text-sky-300" />
                          <span className="truncate">{member.email}</span>
                        </a>
                      )}
                      {member.phone && (
                        <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-sm text-slate-300 hover:text-sky-200">
                          <Phone className="h-4 w-4 flex-shrink-0 text-sky-300" />
                          <span>{member.phone}</span>
                        </a>
                      )}
                    </div>

                    {member.tags && member.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {member.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Button asChild className="mt-6 w-full bg-sky-400 text-slate-950 hover:bg-sky-300">
                      <Link href={`/team/${member.id}`} prefetch={false}>
                        상세 프로필 보기
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 px-6 py-16 text-center">
              <Users className="mx-auto h-16 w-16 text-slate-500" />
              <p className="mt-4 text-xl font-semibold text-white">해당 분야의 팀원이 없습니다.</p>
              <p className="mt-2 text-slate-400">다른 전문 분야를 선택하거나 전체 팀원을 확인해보세요.</p>
              <Button className="mt-6 bg-sky-400 text-slate-950 hover:bg-sky-300" onClick={() => setSelectedTag('전체')}>
                전체 팀원 보기
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Collaboration Flow</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">팀은 상담부터 납품까지 한 흐름으로 움직입니다</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              고객이 원하는 결과가 명확하지 않아도 괜찮습니다. 아이엠드론은 프로젝트 목적을 함께 정리하고, 현장 조건에 맞는 수행 방식을 제안합니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {collaborationSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400 text-lg font-semibold text-slate-950">{index + 1}</div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-400/20 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-sky-950/30 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Talk To The Team</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">우리 현장을 이해하는 팀과 먼저 이야기해보세요</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                촬영, 점검, 관제, 장비 도입 중 무엇이 필요한지 아직 정해지지 않았어도 괜찮습니다. 아이엠드론이 현장 목적과 다음 단계를 함께 정리하겠습니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2"><CheckCircle2 className="h-4 w-4 text-sky-300" />현장 목적 정리</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2"><FileText className="h-4 w-4 text-sky-300" />산출물 제안</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2"><ShieldCheck className="h-4 w-4 text-sky-300" />안전 조건 확인</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button size="lg" className="bg-white text-slate-950 hover:bg-sky-100" asChild>
                <Link href="/contact">
                  상담 문의
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="/projects">
                  수행 사례 보기
                  <BriefcaseBusiness className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
