import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';
import { featuredProducts } from '@/data/products';
import { blogPosts } from '@/data/blog';
import { 
  Award, 
  Building2, 
  Camera,
  CheckCircle2,
  ChevronRight,
  Database,
  Film,
  Fuel,
  Radio,
  Shield,
  ShoppingBag,
  Sparkles,
  Sprout,
  Star,
  Zap,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock
} from 'lucide-react';

const iconMap: { [key: string]: any } = {
  Camera,
  Building2,
  Zap,
  Radio,
  Shield,
  Sprout,
  Fuel,
  Film
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen flex items-center py-20">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-bg.jpg"
            alt="아이엠드론 배경"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-4xl mb-16 lg:mb-20">
            <Badge variant="hero" className="mb-6 lg:mb-8">
              <Sparkles className="h-3 w-3 mr-1" />
              Professional Drone Solutions
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 text-white leading-tight">
              From Flight to Insight
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-10 lg:mb-12 leading-relaxed">
              단순한 항공촬영을 넘어, 건설·에너지·농업·공공안전 현장을 데이터로 관리합니다.<br />
              서비스는 온라인으로 예약하고, 필요한 드론·장비는 바로 구매하세요.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="primary-blue" asChild>
                <Link href="#services">
                  서비스 보기
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="hero-outline" asChild>
                <Link href="#products">
                  제품 보기
                  <ShoppingBag className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* 특징 배지 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="glass" className="text-center hover:shadow-lg">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-white">Certified Drone Experts</h3>
                <p className="text-sm text-white/80">
                  국가자격취득·보험 가입 전문 조종자가 직접 운영합니다.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass" className="text-center hover:shadow-lg">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-white">Safety First Operation</h3>
                <p className="text-sm text-white/80">
                  비행 전 사전 점검과 리스크 분석으로 안전 우선 운영 원칙을 지킵니다.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass" className="text-center hover:shadow-lg">
              <CardContent className="pt-6">
                <CheckCircle2 className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-white">Industry-Proven Projects</h3>
                <p className="text-sm text-white/80">
                  다양한 산업 현장에서 검증된 실적을 보유하고 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass" className="text-center hover:shadow-lg">
              <CardContent className="pt-6">
                <Sparkles className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-white">Expert Pre-Sales Support</h3>
                <p className="text-sm text-white/80">
                  구매 전 상담을 통해 용도에 맞는 제품을 추천해드립니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 회사 간략 소개 */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">About Us</Badge>
            <h2 className="text-4xl font-bold mb-4">아이엠드론을 선택해야 하는 이유</h2>
            <p className="text-xl text-muted-foreground">
              전문성과 신뢰성을 갖춘 드론 솔루션 파트너
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="hover-xl">
              <CardHeader>
                <Award className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Certified Drone Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  국가자격보유, 보험 가입을 완료한 전문 조종 인력이 직접 운용합니다.
                </p>
              </CardContent>
            </Card>

            <Card variant="hover-xl">
              <CardHeader>
                <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Industry-Proven Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  건설·에너지·농업·공공안전 등 다양한 산업 현장에서 검증된 프로젝트 경험을 보유하고 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card variant="hover-xl">
              <CardHeader>
                <Database className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Data-Driven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  촬영·점검·관제 데이터를 리포트·지도·3D 모델로 제공해 실제 의사결정에 활용할 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card variant="hover-xl">
              <CardHeader>
                <ShoppingBag className="h-10 w-10 text-primary mb-4" />
                <CardTitle>One-Stop Service & Store</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  드론 서비스 상담·운영부터 드론·장비 구매까지, 홈페이지와 쇼핑몰에서 한 번에 이용할 수 있습니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 주요 서비스 */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold mb-4">주요 서비스</h2>
            <p className="text-xl text-muted-foreground">
              산업별 맞춤형 드론 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              return (
                <Card key={service.id} variant="lift" className="group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full" asChild>
                      <Link href={service.link}>
                        더보기
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* 최근 프로젝트 */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Recent Projects</Badge>
            <h2 className="text-4xl font-bold mb-4">최근 프로젝트</h2>
            <p className="text-xl text-muted-foreground">
              다양한 산업 현장에서 성공적으로 완료한 프로젝트들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="group">
                <Card variant="lift" className="h-full overflow-hidden hover:shadow-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                     <Badge variant="white" className="absolute top-4 right-4">
                      {project.date}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.shortDesc}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Button size="lg" variant="primary-blue" asChild>
              <Link href="/projects">
                모든 프로젝트 보기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* 최신 블로그 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Latest Blog Posts</Badge>
            <h2 className="text-4xl font-bold mb-4">드론 인사이트</h2>
            <p className="text-xl text-muted-foreground">
              드론 산업의 최신 동향과 전문가 노하우를 공유합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <Card variant="lift" className="h-full overflow-hidden hover:shadow-2xl">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <Badge variant="white" className="absolute top-4 right-4">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Button size="lg" variant="primary-blue" asChild>
              <Link href="/blog">
                모든 글 보기
                <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* 고객 후기 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl font-bold mb-4">고객 후기</h2>
            <p className="text-xl text-muted-foreground">
              고객들의 생생한 경험을 들어보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} variant="hover-xl">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.role} · {testimonial.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* 추천 제품 */}
      <section id="products" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Featured Products</Badge>
            <h2 className="text-4xl font-bold mb-4">추천 제품</h2>
            <p className="text-xl text-muted-foreground">
              기업용 드론 및 장비를 합리적인 가격에 만나보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} variant="lift" className="group overflow-hidden">
                <div className="relative h-48 bg-white overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge variant="outline" className="absolute top-4 right-4">
                    {product.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href={`/products/${product.id}`}>
                      자세히 보기
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Button size="lg" variant="primary-blue" asChild>
              <Link href="/products">
                전체 제품 보기
                <ShoppingBag className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
