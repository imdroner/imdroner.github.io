import { notFound } from 'next/navigation';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import { blogPosts } from '@/data/blog';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/data/team';
import BlogImage from '@/components/BlogImage';
import ShareButtons from '@/components/ShareButtons';
import { mdxComponents } from '@/components/mdx-components';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ChevronRight,
} from 'lucide-react';
import type { Metadata } from 'next';

// 정적 경로 생성
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

// 메타데이터 생성
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return {
      title: '블로그 글을 찾을 수 없습니다',
    };
  }

  return {
    title: `${post.title} | 아이엠드론 블로그`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.thumbnail],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  // 작성자 정보 가져오기
  const author = teamMembers.find((member) => member.id === post.authorId);

  // MDX 파일 읽기
  const filePath = path.join(process.cwd(), 'content/blog', `${id}.mdx`);
  let fileContent = '';
  let content = '';
  let frontmatter: any = {};

  try {
    fileContent = fs.readFileSync(filePath, 'utf8');
    const { content: mdxContent, data } = matter(fileContent);
    content = mdxContent;
    frontmatter = data;
  } catch (error) {
    console.error('MDX 파일을 읽는 중 오류 발생:', error);
    notFound();
  }

  // 관련 글 (같은 카테고리)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <main className="min-h-screen py-8 lg:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 뒤로 가기 버튼 */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            목록으로
          </Link>
        </Button>

        {/* 헤더 */}
        <header className="mb-12">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.description}
          </p>

          {/* 메타 정보 */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <Link 
              href={`/team/${post.authorId}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </Link>
          </div>

          <Separator className="mt-8" />
        </header>

        {/* 썸네일 이미지 */}
        <div className="mb-12 rounded-lg overflow-hidden">
          <BlogImage
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* MDX 콘텐츠 */}
        <article className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <MDXRemote 
            source={content} 
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </article>

        {/* 태그 */}
        <div className="mb-12">
          <Separator className="mb-6" />
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* 공유 버튼 */}
        <ShareButtons title={post.title} />

        {/* 작성자 정보 */}
        {author && (
          <Card className="mb-12 p-6">
            <div className="flex items-start gap-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src={author.avatar} alt={author.name} className="object-cover" />
                <AvatarFallback>{author.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{author.name}</h3>
                  <Badge variant="outline">{author.role}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{author.shortBio}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/team/${author.id}`}>
                    프로필 보기
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* 관련 글 */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">같은 카테고리의 다른 글</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                  <Card variant="hover-sm" className="h-full overflow-hidden">
                    <div className="relative w-full h-40 overflow-hidden bg-muted">
                      <BlogImage
                        src={relatedPost.thumbnail}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* CTA 섹션 */}
      <section className="mt-20 py-16 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">
            드론 프로젝트를 시작하세요
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            전문가와 함께라면 더 쉽고 빠르게 목표를 달성할 수 있습니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="primary-blue" asChild>
              <Link href="/contact">
                무료 상담 신청
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">서비스 살펴보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

