'use client';

import { projects } from '@/data/projects';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  FolderOpen, 
  CheckCircle2, 
  Film, 
  Box, 
  ArrowRight,
  Phone,
  Calendar,
  Tag
} from 'lucide-react';
import { useState, useMemo } from 'react';

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string>('전체');

  // 모든 태그 수집
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projects.forEach(project => {
      project.tags?.forEach(tag => tagsSet.add(tag));
    });
    return ['전체', ...Array.from(tagsSet).sort()];
  }, []);

  // 필터링된 프로젝트
  const filteredProjects = useMemo(() => {
    if (selectedTag === '전체') return projects;
    return projects.filter(project => project.tags?.includes(selectedTag));
  }, [selectedTag]);

  // 통계
  const stats = [
    {
      icon: FolderOpen,
      label: '완료 프로젝트',
      value: projects.length,
      suffix: '+'
    },
    {
      icon: Film,
      label: '제작 영상',
      value: projects.filter(p => p.video).length,
      suffix: '+'
    },
    {
      icon: Box,
      label: '3D 모델',
      value: projects.filter(p => p.model).length,
      suffix: '+'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-20 lg:py-32">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/portfolios/portfolio-hero.webp"
            alt="포트폴리오 배경"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="hero" className="mb-6">
              <FolderOpen className="h-3 w-3 mr-1" />
              Portfolio
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              포트폴리오
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              아이엠드론이 완성한 프로젝트를 만나보세요.<br />
              드론 촬영부터 3D 모델링, 디지털 트윈까지,<br />
              다양한 분야에서 검증된 실적을 확인하실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 통계 카드
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} variant="hover-lg" className="text-center">
                  <CardContent className="pt-8 pb-6">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2 text-primary">
                      {stat.value}{stat.suffix}
                    </div>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}

      <Separator />

      {/* 필터 & 프로젝트 그리드 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* 필터 */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">카테고리</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                  className="transition-all"
                >
                  {tag}
                  {tag !== '전체' && (
                    <span className="ml-2 text-xs opacity-70">
                      ({projects.filter(p => p.tags?.includes(tag)).length})
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* 결과 수 표시 */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredProjects.length}개</span>의 프로젝트
              {selectedTag !== '전체' && (
                <>
                  {' '}· <span className="text-primary font-medium">{selectedTag}</span>
                </>
              )}
            </p>
          </div>

          {/* 프로젝트 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                prefetch={false}
                className="group"
              >
                <Card variant="lift" className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* 썸네일 */}
                  <div className="relative w-full h-64 overflow-hidden bg-muted">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* 날짜 뱃지 */}
                    {project.date && (
                        <Badge variant="white" className="absolute top-4 right-4">
                          {/* <Calendar className="h-3 w-3 mr-1" /> */}
                          {project.date}
                        </Badge>
                    )}
                    {/* 타입 뱃지 */}
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      {project.video && (
                        <Badge variant="hero" className="backdrop-blur-sm bg-background/90 shadow-lg">
                          <Film className="h-3 w-3 mr-1" />
                          영상
                        </Badge>
                      )}
                      {project.model && (
                        <Badge variant="hero" className="backdrop-blur-sm bg-background/90 shadow-lg">
                          <Box className="h-3 w-3 mr-1" />
                          3D
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* 카드 내용 */}
                  <CardHeader className="space-y-3">
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 text-base leading-relaxed">
                      {project.shortDesc}
                    </CardDescription>
                  </CardHeader>

                  {/* 태그 */}
                  {project.tags && project.tags.length > 0 && (
                    <CardFooter className="pt-0">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardFooter>
                  )}

                  {/* 호버 효과 - 더보기 */}
                  {/* <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="flex items-center gap-2 text-primary font-semibold bg-background/90 px-4 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      자세히 보기
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div> */}
                </Card>
              </Link>
            ))}
          </div>

          {/* 프로젝트 없음 */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <FolderOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground mb-2">
                해당 카테고리의 프로젝트가 없습니다.
              </p>
              <Button variant="outline" onClick={() => setSelectedTag('전체')}>
                전체 프로젝트 보기
              </Button>
            </div>
          )}
        </div>
      </section>

      <Separator />

      {/* CTA (행동 유도) */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl dark:text-white lg:text-4xl font-bold mb-6">
            당신의 프로젝트도 포트폴리오에 추가해 보세요
          </h2>
          <p className="text-xl text-muted-foreground dark:text-white mb-8 leading-relaxed">
            드론 촬영, 3D 모델링, 디지털 트윈부터<br />
            산업용 솔루션까지, 함께 만들어갑니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="primary-blue" asChild>
              <Link href="/contact">
                프로젝트 문의하기
                <Phone className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="hero-outline" asChild>
              <Link href="/services/aerial">
                서비스 둘러보기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
