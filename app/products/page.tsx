'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  ShoppingBag,
  Search,
  X,
  Package,
  Check,
  Mail,
  Phone,
  ChevronRight,
  Drone,
  Factory,
  Wheat,
  Cog,
  Camera,
  Zap,
  Radio
} from 'lucide-react';
import { products, heroProducts } from '@/data/products';
import ProductHeroSlider from '@/components/ProductHeroSlider';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  // 모든 카테고리 추출
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    return ['전체', ...uniqueCategories];
  }, []);

  // 카테고리별 아이콘 매핑
  const categoryIcons: Record<string, any> = {
    '기업용 드론': Drone,
    '산업용 드론': Factory,
    '농업용 드론': Wheat,
    '자동화 시스템': Cog,
    '페이로드': Camera,
    '점검 장비': Zap,
    '측량 장비': Package,
    '조종 장비': Radio,
    '충전 장비': Zap,
  };

  // 필터링된 제품 목록
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // 카테고리 필터
    if (selectedCategory !== '전체') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // 검색 필터
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.features.some(feature => feature.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // // 통계
  // const stats = useMemo(() => {
  //   return [
  //     {
  //       label: '전체 제품',
  //       value: products.length,
  //       icon: Package,
  //       color: 'text-blue-600'
  //     },
  //     {
  //       label: '카테고리',
  //       value: categories.length - 1, // '전체' 제외
  //       icon: ShoppingBag,
  //       color: 'text-green-600'
  //     },
  //     {
  //       label: '검색 결과',
  //       value: filteredProducts.length,
  //       icon: Search,
  //       color: 'text-orange-600'
  //     }
  //   ];
  // }, [categories.length, filteredProducts.length]);

  return (
    <main className="min-h-screen">
      {/* Hero Slider Section */}
      <ProductHeroSlider products={heroProducts} />

      {/* Statistics Section */}
      {/* <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} variant="stats">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className={`p-4 rounded-full bg-primary/10 ${stat.color}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const IconComponent = categoryIcons[category] || Package;
                const isSelected = selectedCategory === category;

                return (
                  <Button
                    key={category}
                    variant={isSelected ? 'default' : 'outline'}
                    size="default"
                    onClick={() => setSelectedCategory(category)}
                    className="gap-2"
                  >
                    {category !== '전체' && <IconComponent className="h-4 w-4" />}
                    {category}
                  </Button>
                );
              })}
            </div>
          </div>
          <Separator className="my-8" />
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-4xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="제품명, 기능, 설명으로 검색하세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg"
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

          {/* Results Info */}
          <div className="mb-6 text-center">
            <p className="text-lg text-muted-foreground">
              {filteredProducts.length === 0 ? (
                <span className="text-destructive font-medium">검색 결과가 없습니다</span>
              ) : (
                <>
                  <span className="font-bold text-primary">{filteredProducts.length}개</span>의 제품을 찾았습니다
                  {selectedCategory !== '전체' && (
                    <span className="ml-2">
                      (카테고리: <span className="font-semibold">{selectedCategory}</span>)
                    </span>
                  )}
                </>
              )}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} variant="hover-lg" className="flex flex-col">
                  <CardHeader>
                    <div className="aspect-video w-full bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Package className="h-20 w-20 text-muted-foreground/30" />
                      )}
                    </div>
                    <Badge variant="outline" className="w-fit mb-2">
                      {product.category}
                    </Badge>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-sm text-muted-foreground">
                          +{product.features.length - 4}개 기능 더보기
                        </li>
                      )}
                    </ul>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-3">
                    <div className="w-full">
                      <p className="text-xl font-bold text-center mb-3">
                        {product.price === 0 
                          ? '견적 문의' 
                          : `₩${product.price.toLocaleString('ko-KR')}`
                        }
                      </p>
                    </div>
                    <div className="w-full flex gap-2">
                      <Button asChild variant="outline" className="flex-1">
                        <Link href={`/products/${product.id}`}>
                          상세보기
                        </Link>
                      </Button>
                      <Button asChild className="flex-1">
                        <Link href="/contact">
                          견적 문의
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12">
              <div className="text-center">
                <Package className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">검색 결과가 없습니다</h3>
                <p className="text-muted-foreground mb-6">
                  다른 검색어나 카테고리를 시도해보세요
                </p>
                <div className="flex gap-3 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setSearchQuery('')}
                  >
                    검색어 지우기
                  </Button>
                  <Button
                    onClick={() => setSelectedCategory('전체')}
                  >
                    전체 제품 보기
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold mb-4">
              아이엠드론을 선택해야 하는 이유
            </h2>
            <p className="text-xl text-muted-foreground">
              최고의 제품과 서비스로 고객의 성공을 지원합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="hover-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">정품 보증</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  신뢰할 수 있는 100% 정품만을 공급하며,
                  제조사 공식 보증을 받을 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card variant="hover-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                  <Cog className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">전문 기술 지원</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  제품 도입부터 운영까지 전문가의 1:1 기술 지원과 교육 프로그램을 제공합니다.
                </p>
              </CardContent>
            </Card>

            <Card variant="hover-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">신속한 A/S</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  신속한 A/S 처리와 예비 장비 대여 서비스로
                  업무 중단 없는 운영을 지원합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/team/team-hero.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Badge variant="hero" className="mb-6 text-base px-6 py-2">
            <Mail className="h-4 w-4 mr-2" />
            Contact Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            제품 구매 상담이 필요하신가요?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            전문 컨설턴트가 귀사의 요구사항에 맞는<br />
            최적의 솔루션을 제안해드립니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="primary-blue" className="gap-2 text-lg px-8 py-6">
              <Link href="/contact">
                <Mail className="h-5 w-5" />
                견적 문의하기
              </Link>
            </Button>
            <Button asChild size="lg" variant="hero-outline" className="gap-2 text-lg px-8 py-6  hover:bg-white/20 text-white border-white/30">
              <a href="tel:010-4790-6650">
                <Phone className="h-5 w-5" />
                전화 상담
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center text-white/80">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-400" />
              <span>무료 현장 데모</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-400" />
              <span>맞춤형 견적 제공</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-400" />
              <span>24시간 이내 답변</span>
            </div>
          </div>
        </div>
      </section>
      <Separator className="my-8" />
      {/* FAQ Link Section */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            제품 구매에 대해 궁금한 점이 있으신가요?
          </p>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/faq">
              자주 묻는 질문 보기
              <ChevronRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      <Separator className="my-8" />
    </main>
  );
}

