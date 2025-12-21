import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { products, getRelatedProducts } from '@/data/products';
import ProductImageGallery from '@/components/ProductImageGallery';
import {
  CheckCircle2,
  Server,
  Wifi,
  Shield,
  Phone,
  Mail,
  Package,
  ArrowRight,
  Clock,
  Truck,
  Cloud,
  Radio,
  Battery,
  Cpu,
  ChevronLeft,
  Check
} from 'lucide-react';

export const metadata = {
  title: 'DJI Dock 3 | 아이엠드론',
  description: '차량 탑재 지원, 24/7 원격 무인 운영을 위한 혁신적인 드론 도킹 스테이션',
};

export default function DJIDock3Page() {
  // 제품 데이터 가져오기
  const product = products.find(p => p.id === 'dji-dock-3')!;
  
  // 관련 상품 가져오기
  const relatedProducts = getRelatedProducts('dji-dock-3', 3);

  const keyPoints = [
    '차량 탑재 배치 지원',
    '24/7 무인 자동 운영',
    'Matrice 4D/4TD 호환'
  ];

  const features = [
    { icon: Truck, title: '차량 탑재 지원 (업계 최초)', description: 'DJI 최초로 차량 탑재 배치를 지원하여 이동형 드론 기지로 활용 가능' },
    { icon: Clock, title: '24/7 완전 무인 운영', description: '자동 이착륙, 충전, 데이터 전송으로 사람의 개입 없이 24시간 작동' },
    { icon: Server, title: 'Matrice 4D/4TD 통합', description: '고성능 Matrice 4D 또는 4TD 드론과 완벽하게 통합되어 작동' },
    { icon: Cloud, title: 'DJI FlightHub 2 연동', description: '지능형 클라우드 플랫폼으로 원격 작업 관리 및 실시간 모니터링' },
    { icon: Shield, title: 'IP56 방진방수', description: '비, 눈, 먼지 등 극한 환경에서도 안정적인 운영 보장' },
    { icon: Radio, title: 'O3 Enterprise 전송', description: '초장거리 안정적인 데이터 전송으로 넓은 작업 범위 커버' }
  ];

  const applications = [
    { title: '공공 안전 및 치안', description: '무인 자동 순찰로 24시간 감시 체계를 구축하고, 긴급 상황 발생 시 즉시 드론을 출동시킵니다.' },
    { title: '시설물 점검', description: '송전선로, 태양광 시설 등을 정기적으로 자동 점검하여 이상 징후를 조기에 발견합니다.' },
    { title: '건설 현장 모니터링', description: '건설 현장의 진행 상황을 매일 자동으로 촬영하여 공정 관리 및 BIM 데이터를 생성합니다.' },
    { title: '이동형 긴급 대응', description: '차량에 탑재하여 재난 현장으로 신속하게 이동하고, 현장에서 즉시 드론 운영을 시작합니다.' }
  ];

  const specifications = [
    { label: '호환 드론', value: 'Matrice 4D Series, Matrice 4TD Series' },
    { label: '배치 방식', value: '고정 설치 / 차량 탑재' },
    { label: '방진방수', value: 'IP56' },
    { label: '작동 온도', value: '-35°C ~ 50°C' },
    { label: '풍속 저항', value: '최대 15m/s (이착륙 시)' },
    { label: '전송 시스템', value: 'O3 Enterprise' },
    { label: '관리 플랫폼', value: 'DJI FlightHub 2' },
    { label: '자동화 기능', value: '자동 이착륙, 충전, 데이터 전송' }
  ];

  const systemComponents = [
    {
      title: 'DJI Dock 3 본체',
      features: [
        'IP56 방진방수 인클로저',
        '자동 개폐 도어 시스템',
        '환경 모니터링 센서',
        '통합 배터리 충전 시스템'
      ]
    },
    {
      title: 'Matrice 4D/4TD 드론',
      features: [
        '고성능 산업용 드론',
        'Matrice 4 Series 카메라 탑재',
        '향상된 비행 및 보호 성능',
        'DJI RC Plus 2 Enterprise 호환'
      ]
    },
    {
      title: 'DJI FlightHub 2',
      features: [
        '원격 임무 계획 및 실행',
        '실시간 라이브 스트리밍',
        '자동 데이터 동기화',
        '다중 도크 통합 관리'
      ]
    }
  ];

  const advantages = [
    {
      title: '유연한 배치',
      description: '고정 설치와 차량 탑재 모두 지원하여 상황에 맞는 최적의 배치 방식을 선택할 수 있습니다.',
      icon: Truck
    },
    {
      title: '지능형 자동화',
      description: 'FlightHub 2의 AI 기반 임무 계획으로 작업 시간을 대폭 단축하고 인건비를 절감합니다.',
      icon: Cpu
    },
    {
      title: '극한 환경 대응',
      description: '-35°C ~ 50°C의 넓은 작동 온도 범위와 IP56 등급으로 어떤 환경에서도 안정적입니다.',
      icon: Shield
    },
    {
      title: '확장 가능한 시스템',
      description: '여러 대의 도크를 통합 관리하여 광범위한 지역을 효율적으로 커버할 수 있습니다.',
      icon: Cloud
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-muted/50 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">홈</Link>
            <ChevronLeft className="h-4 w-4 rotate-180" />
            <Link href="/products" className="hover:text-primary">제품 구매</Link>
            <ChevronLeft className="h-4 w-4 rotate-180" />
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
            {/* Left Column - Image Gallery (6/10) */}
            <div className="lg:col-span-6">
              <ProductImageGallery 
                images={product.images && product.images.length > 0 ? product.images : [product.image]}
                productName={product.name}
              />
            </div>

            {/* Right Column - Details (4/10) */}
            <div className="lg:col-span-4">
              {/* Category Badge */}
              <Badge variant="outline" className="mb-4 text-sm px-4 py-1">
                {product.category}
              </Badge>

              {/* Product Name */}
              <h1 className="text-2xl md:text-4xl font-bold mb-6">
                {product.name}
              </h1>

              {/* Short Description */}
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <Card variant="default">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-2">가격</p>
                    <p className="text-lg font-bold text-primary">
                      {product.price === 0 
                        ? '견적 문의' 
                        : `₩${product.price.toLocaleString('ko-KR')}`
                      }
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="flex-1 gap-2" variant="primary-blue">
                  <Link href="/contact">
                    <Mail className="h-5 w-5" />
                    견적 문의하기
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1 gap-2">
                  <a href="tel:010-4790-6650">
                    <Phone className="h-5 w-5" />
                    전화 상담
                  </a>
                </Button>
              </div>

              {/* Key Features */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    주요 특징
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="font-bold text-primary mb-1">정품 보증</div>
                    <p className="text-xs text-muted-foreground">100% 정품</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="font-bold text-primary mb-1">기술 지원</div>
                    <p className="text-xs text-muted-foreground">전문가 상담</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="font-bold text-primary mb-1">신속 A/S</div>
                    <p className="text-xs text-muted-foreground">빠른 처리</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Product Description */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">업계 최초 차량 탑재 지원 드론 도킹 시스템</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DJI Dock 3는 Matrice 4D 또는 Matrice 4TD 고성능 드론과 함께 작동하여 24/7 원격 운영을 지원하는 차세대 자동화 시스템입니다. 
                업계 최초로 <strong>차량 탑재 배치</strong>를 지원하여 고정형 설치와 이동형 배치 모두 가능합니다. 
                DJI FlightHub 2의 지능형 기능과 통합되어 작업 시간 및 인건비를 대폭 절감하며, 
                완전 무인 자동 이착륙, 배터리 충전, 실시간 데이터 전송을 통해 효율성을 극대화합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Key Features */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">핵심 기능</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} variant="hover-lg" className="group">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* System Components */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">시스템 구성</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {systemComponents.map((component, index) => (
              <Card key={index} variant="hover-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">{component.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {component.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Advantages */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">DJI Dock 3의 장점</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card key={index} variant="hover-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Applications */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">활용 분야</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} variant="hover-lg" className="group">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {app.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">{app.description}</p>
                  <Button variant="link" className="p-0 h-auto font-semibold gap-2 group-hover:gap-3 transition-all">
                    자세히 보기
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Specifications */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">제품 사양</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-border pb-4">
                    <span className="font-semibold text-foreground">{spec.label}</span>
                    <span className="text-muted-foreground text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            구매 상담이 필요하신가요?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            전문 컨설턴트가 귀사의 요구사항에 맞는<br />
            최적의 솔루션을 제안해드립니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="primary-blue" className="gap-2 text-lg px-8 py-6">
              <Link href="/contact">
                <Mail className="h-5 w-5" />
                견적 문의하기
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30">
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

      <Separator />

      {/* Related Products - Dynamic */}
      {relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">함께 보면 좋은 제품</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} variant="hover-lg">
                  <CardHeader>
                    <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      {relatedProduct.image ? (
                        <img 
                          src={relatedProduct.image} 
                          alt={relatedProduct.name}
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <Package className="h-20 w-20 text-muted-foreground/30" />
                      )}
                    </div>
                    <Badge variant="outline" className="w-fit mb-2">
                      {relatedProduct.category}
                    </Badge>
                    <CardTitle>{relatedProduct.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={
                        relatedProduct.hasDetailedPage 
                          ? `/products/${relatedProduct.id}` 
                          : `/products/${relatedProduct.id}`
                      }>
                        자세히 보기
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

