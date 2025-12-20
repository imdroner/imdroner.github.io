'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { blogPosts, blogCategories } from '@/data/blog';
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  Search,
  X,
  ChevronRight,
  TrendingUp,
  FileText,
  Tag,
} from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState('');

  // 카테고리 및 검색 필터링
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === '전체' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // 통계 계산
  // const totalPosts = blogPosts.length;
  // const categoriesCount = blogCategories.length - 1; // '전체' 제외
  // const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/team/team-hero.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center px-4 py-20">
          <Badge variant="hero" className="mb-6 text-base px-6 py-2">
            <BookOpen className="h-3 w-3 mr-1" />
            Blog
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            드론 인사이트
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            드론 산업의 최신 동향, 기술 가이드, 프로젝트 사례를 공유합니다.<br />
            전문가의 경험과 노하우로 여러분의 드론 비즈니스를 지원합니다.
          </p>
        </div>
      </section> */}
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              <BookOpen className="h-3 w-3 mr-1" />
              Insight
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
              드론 인사이트
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              드론 산업의 최신 동향, 기술 가이드, 프로젝트 사례를 공유합니다.
              <br />
              전문가의 경험과 노하우로 여러분의 드론 비즈니스를 지원합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      {/* <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="stat">
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">전체 글</p>
                  <p className="text-3xl font-bold">{totalPosts}</p>
                </div>
                <FileText className="h-12 w-12 text-primary/20" />
              </CardContent>
            </Card>
            <Card variant="stat">
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">카테고리</p>
                  <p className="text-3xl font-bold">{categoriesCount}</p>
                </div>
                <TrendingUp className="h-12 w-12 text-primary/20" />
              </CardContent>
            </Card>
            <Card variant="stat">
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">태그</p>
                  <p className="text-3xl font-bold">{allTags.length}</p>
                </div>
                <Tag className="h-12 w-12 text-primary/20" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* 필터 및 검색 섹션 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* 카테고리 필터 */}
          <div className="flex flex-col items-center mb-8">
            {/* <h3 className="text-lg font-semibold mb-4">카테고리</h3> */}
            <div className="flex flex-wrap gap-3 justify-center">
              {blogCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="default"
                  onClick={() => setSelectedCategory(category)}
                  className="gap-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <Separator className="my-8" />
          {/* 검색창 */}
          <div className="mb-8">
            <div className="relative max-w-4xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="제목, 내용, 태그로 검색하세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 py-6 text-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="검색어 지우기"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>



          <Separator className="my-8" />

          {/* 검색 결과 정보 */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredPosts.length}</span>개의 글
            </p>
            {(selectedCategory !== '전체' || searchQuery) && (
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedCategory('전체');
                  setSearchQuery('');
                }}
                className="text-sm"
              >
                <X className="h-4 w-4 mr-1" />
                필터 초기화
              </Button>
            )}
          </div>

          {/* 블로그 포스트 그리드 */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                  <Card variant="lift" className="h-full overflow-hidden hover:shadow-2xl">
                    {/* 썸네일 이미지 */}
                    <div className="relative w-full h-64 overflow-hidden bg-muted">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/placeholder-blog.webp';
                        }}
                      />
                      <Badge variant="white" className="absolute top-4 right-4">
                        {post.category}
                      </Badge>
                    </div>

                    <CardHeader className="space-y-3">
                      <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* 메타 정보 */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{post.author}</span>
                      </div>
                    </CardContent>

                    <CardFooter className="flex flex-col items-start gap-3">
                      <Separator />
                      {/* 태그 */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                      {/* 더보기 링크 */}
                      <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        <span>자세히 보기</span>
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">검색 결과가 없습니다</h3>
              <p className="text-muted-foreground mb-6">
                다른 키워드나 카테고리로 검색해보세요.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory('전체');
                  setSearchQuery('');
                }}
              >
                전체 글 보기
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            드론 비즈니스에 대해 더 알고 싶으신가요?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            전문 컨설팅부터 프로젝트 의뢰까지, 아이엠드론이 함께합니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="primary-blue" asChild>
              <Link href="/contact">
                문의하기
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="/services">서비스 둘러보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

