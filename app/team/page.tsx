'use client';

import { teamMembers } from '@/data/team';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  Mail,
  Phone,
  ArrowRight,
  Tag,
  Calendar
} from 'lucide-react';
import { useState, useMemo } from 'react';

export default function TeamPage() {
  const [selectedTag, setSelectedTag] = useState<string>('전체');

  // 모든 태그 수집
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    teamMembers.forEach(member => {
      member.tags?.forEach(tag => tagsSet.add(tag));
    });
    return ['전체', ...Array.from(tagsSet).sort()];
  }, []);

  // 필터링된 팀원
  const filteredMembers = useMemo(() => {
    if (selectedTag === '전체') return teamMembers;
    return teamMembers.filter(member => member.tags?.includes(selectedTag));
  }, [selectedTag]);

  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-20 lg:py-32">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/team/team-hero.webp"
            alt="팀 배경"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="hero" className="mb-6">
              <Users className="h-3 w-3 mr-1" />
              Our Team
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              팀 소개
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              아이엠드론을 이끌어가는 전문가들을 만나보세요.<br />
              각 분야의 전문성을 갖춘 팀원들이<br />
              최고의 드론 솔루션을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* 필터 & 팀원 그리드 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* 필터 */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">전문 분야</h2>
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
                      ({teamMembers.filter(m => m.tags?.includes(tag)).length})
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* 결과 수 표시 */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredMembers.length}명</span>의 팀원
              {selectedTag !== '전체' && (
                <>
                  {' '}· <span className="text-primary font-medium">{selectedTag}</span>
                </>
              )}
            </p>
          </div>

          {/* 팀원 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <Link
                key={member.id}
                href={`/team/${member.id}`}
                prefetch={false}
                className="group"
              >
                <Card variant="lift" className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* 프로필 이미지 */}
                  <div className="relative w-full h-80 overflow-hidden bg-muted flex items-center justify-center">
                    <Avatar className="w-48 h-48 transition-transform duration-500 group-hover:scale-110">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="text-4xl">{member.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    {/* 입사년도 뱃지 */}
                    {member.joinDate && (
                      <Badge variant="white" className="absolute top-4 right-4">
                        <Calendar className="h-3 w-3 mr-1" />
                        Since {member.joinDate}
                      </Badge>
                    )}
                  </div>

                  {/* 카드 내용 */}
                  <CardHeader className="space-y-3">
                    <div>
                      <CardTitle className="group-hover:text-primary transition-colors text-2xl mb-2">
                        {member.name}
                      </CardTitle>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.position}</p>
                    </div>
                    <CardDescription className="line-clamp-2 text-base leading-relaxed">
                      {member.shortBio}
                    </CardDescription>
                  </CardHeader>

                  {/* 연락처 */}
                  <CardContent className="pt-0 space-y-2">
                    {member.email && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </div>
                    )}
                    {member.phone && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        <span>{member.phone}</span>
                      </div>
                    )}
                  </CardContent>

                  {/* 태그 */}
                  {member.tags && member.tags.length > 0 && (
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2">
                        {member.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                        {member.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{member.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </Link>
            ))}
          </div>

          {/* 팀원 없음 */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-16">
              <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground mb-2">
                해당 분야의 팀원이 없습니다.
              </p>
              <Button variant="outline" onClick={() => setSelectedTag('전체')}>
                전체 팀원 보기
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
            아이엠드론과 함께하고 싶으신가요?
          </h2>
          <p className="text-xl text-muted-foreground dark:text-white mb-8 leading-relaxed">
            열정적인 팀원을 찾고 있습니다.<br />
            드론 산업의 미래를 함께 만들어갈 인재를 기다립니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="primary-blue" asChild>
              <Link href="/contact">
                채용 문의하기
                <Mail className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="hero-outline" asChild>
              <Link href="/about">
                회사 소개 보기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

