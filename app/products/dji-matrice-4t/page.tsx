import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { products, getRelatedProducts } from '@/data/products';
import ProductDetailHero from '@/components/ProductDetailHero';
import ProductCTA from '@/components/ProductCTA';
import {
  CheckCircle2,
  Cpu,
  Eye,
  Shield,
  Package,
  ArrowRight,
  Zap,
  Target,
  Thermometer,
  Ruler,
  Radio,
  Moon,
  ChevronLeft,
  Sparkles,
  CloudSun,
  AlertTriangle,
  Building2,
  Flame,
  Trees
} from 'lucide-react';

export const metadata = {
  title: 'DJI Matrice 4T | 아이엠드론',
  description: '차세대 플래그십 멀티센서 엔터프라이즈 드론 - 스마트 감지 및 측정',
};

export default function DJIMatrice4TPage() {
  // 제품 데이터 가져오기
  const product = products.find(p => p.id === 'dji-matrice-4t')!;
  
  // 관련 상품 가져오기
  const relatedProducts = getRelatedProducts('dji-matrice-4t', 3);

  const keyPoints = [
    '멀티센서 통합 시스템',
    'AI 기반 스마트 감지',
    '레이저 거리 측정 (1,800m)'
  ];

  const features = [
    { icon: Sparkles, title: 'AI 기반 스마트 작업', description: '레이저 거리 측정기와 AI를 활용한 스마트 감지 및 자동 측정으로 작업 효율성을 극대화합니다.' },
    { icon: Eye, title: '멀티센서 통합', description: '광각, 미디엄 망원, 망원, 열화상 카메라와 레이저 거리 측정기를 통합한 차세대 센싱 시스템입니다.' },
    { icon: Thermometer, title: '640×512 열화상 카메라', description: '고해상도 열화상 센서로 정밀한 온도 측정 및 이상 징후를 실시간으로 감지합니다.' },
    { icon: Ruler, title: '레이저 거리 측정기', description: '최대 1,800m 측정 거리로 안전하고 정확한 원거리 측정이 가능합니다.' },
    { icon: Shield, title: '향상된 안전 기능', description: '전방위 장애물 감지 시스템으로 복잡한 환경에서도 안전한 비행을 보장합니다.' },
    { icon: Radio, title: 'O4 Enterprise 전송', description: '최대 25km(FCC) 초장거리 전송으로 넓은 작업 범위를 안정적으로 커버합니다.' }
  ];

  const applications = [
    { 
      icon: Zap,
      title: '전력 산업 점검', 
      description: '송전선로, 변전소, 태양광 발전소 등 전력 시설의 정밀 점검과 열화상 진단으로 이상 징후를 조기에 발견합니다.',
      link: '/services/energy'
    },
    { 
      icon: AlertTriangle,
      title: '긴급 대응 및 공공 안전', 
      description: '재난 현장, 수색 구조, 치안 활동 등 긴급 상황에서 실시간 정보 수집과 신속한 대응을 지원합니다.',
      link: '/services/control'
    },
    { 
      icon: Building2,
      title: '시설물 점검', 
      description: '교량, 건물, 산업 시설 등 대형 인프라의 안전 점검과 유지보수를 효율적으로 수행합니다.',
      link: '/services/construction'
    },
    { 
      icon: Trees,
      title: '산림 보호 및 환경 감시', 
      description: '산불 감시, 산림 자원 조사, 생태계 모니터링 등 환경 보호 임무를 수행합니다.',
      link: '/services/public-safety'
    }
  ];

  const packageContents = [
    { name: 'DJI Matrice 4T', quantity: '1' },
    { name: 'DJI Matrice 4 시리즈 배터리', quantity: '1' },
    { name: 'DJI RC Plus 2 Enterprise', quantity: '1' },
    { name: 'DJI 100W USB-C 전원 어댑터', quantity: '1' },
    { name: 'DJI Matrice 4 시리즈 충전 허브', quantity: '1' },
    { name: 'microSD 카드', quantity: '1' },
    { name: 'DJI Matrice 4T 짐벌 보호대', quantity: '1' },
    { name: 'DJI 셀룰러 동글 2 프라이바', quantity: '1' },
    { name: 'DJI Matrice 4 시리즈 프로펠러 (쌍)', quantity: '3' },
    { name: '100W 전원 어댑터 AC 케이블', quantity: '1' },
    { name: 'USB-C to USB-C 데이터 케이블', quantity: '1' },
    { name: 'USB-A to USB-C 데이터 케이블', quantity: '1' },
    { name: 'DJI Matrice 4 시리즈 운반 케이스', quantity: '1' },
    { name: 'DJI Matrice 4 시리즈 운반 케이스 스트랩', quantity: '1' }
  ];

  const specifications = [
    { label: '무게', value: '1,219g (배터리, 프로펠러 포함)' },
    { label: '최대 비행시간', value: '49분 (표준 프로펠러, 무풍)' },
    { label: '최대 상승/하강 속도', value: '10m/s / 8m/s' },
    { label: '내풍 가능 풍속', value: '12m/s' },
    { label: '작동 온도', value: '-10°C ~ 40°C' },
    { label: '광각 카메라', value: '1/1.3" CMOS, 48MP, f/1.7, 24mm' },
    { label: '미디엄 망원 카메라', value: '1/1.3" CMOS, 48MP, f/2.8, 70mm' },
    { label: '망원 카메라', value: '1/1.5" CMOS, 48MP, f/2.8, 168mm' },
    { label: '열화상 카메라', value: '640×512, f/1.0, 53mm' },
    { label: '레이저 거리측정기', value: '1,800m (1Hz)' },
    { label: '전송 시스템', value: 'O4 Enterprise' },
    { label: '최대 전송거리', value: '25km (FCC) / 12km (CE)' },
    { label: 'GNSS', value: 'GPS + Galileo + BeiDou + GLONASS' },
    { label: '조종기', value: 'DJI RC Plus 2 Enterprise' }
  ];

  const cameraSystem = [
    {
      title: '광각 카메라 시스템',
      features: [
        '1/1.3" CMOS 센서, 48MP',
        'f/1.7 대구경 조리개',
        '환산 초점 거리 24mm',
        '야간 촬영 최적화'
      ]
    },
    {
      title: '열화상 카메라',
      features: [
        '640×512 고해상도',
        '온도 측정 범위: -20~150°C (하이게인)',
        '고해상도 모드 지원',
        '비냉각식 VOx 센서'
      ]
    },
    {
      title: '레이저 거리 측정기',
      features: [
        '최대 측정 거리 1,800m',
        '정사 입사 범위 600m',
        '정확도 ±(0.2 + 0.0015 × D)m',
        '스마트 감지 및 측정 지원'
      ]
    }
  ];

  const advantages = [
    {
      title: '지능형 비행',
      description: 'AI 기반 자동 임무 수행과 스마트 감지 기능으로 작업 시간을 대폭 단축하고 정확도를 향상시킵니다.',
      icon: Cpu
    },
    {
      title: '컴팩트한 디자인',
      description: '접이식 구조로 휴대가 간편하며, 신속한 현장 투입이 가능한 컴팩트한 플래그십 드론입니다.',
      icon: Package
    },
    {
      title: '전천후 운영',
      description: '-10°C ~ 40°C의 넓은 작동 온도 범위와 12m/s 내풍 성능으로 다양한 환경에서 안정적으로 작동합니다.',
      icon: CloudSun
    },
    {
      title: '멀티센서 융합',
      description: '4개의 카메라와 레이저 거리 측정기를 통합한 멀티센서 시스템으로 종합적인 데이터를 수집합니다.',
      icon: Target
    }
  ];

  const smartFeatures = [
    {
      title: '스마트 감지 및 측정',
      description: '레이저 거리 측정기와 AI를 활용하여 대상물을 자동으로 감지하고 정확한 거리 및 크기를 측정합니다.',
      icon: Sparkles
    },
    {
      title: '야간 비행 성능',
      description: '강화된 야간 성능과 NIR 보조등으로 24시간 작업이 가능합니다.',
      icon: Moon
    },
    {
      title: '전방위 장애물 감지',
      description: '모든 방향에서 장애물을 감지하여 복잡한 환경에서도 안전한 비행을 보장합니다.',
      icon: Shield
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
      <ProductDetailHero product={product} />

      <Separator />

      {/* Product Description */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">차세대 플래그십 멀티센서 엔터프라이즈 드론</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DJI Matrice 4T는 <strong>광학 + 열화상 + 레이저 거리 측정기</strong>를 통합한 지능형 멀티센서 시스템을 탑재한 
                차세대 플래그십 엔터프라이즈 드론입니다. AI 기반 스마트 감지 및 측정 기능으로 전력, 긴급 대응, 공공 안전, 
                산림 보호 등 다양한 산업 분야에 최적화되어 있습니다. 향상된 센싱 기능과 O4 Enterprise 전송 시스템으로 
                안전하고 효율적인 비행 작업을 실현합니다. 컴팩트하면서도 강력한 성능으로 복잡한 임무를 완벽하게 수행합니다.
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

      {/* Camera System */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">멀티센서 시스템</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cameraSystem.map((system, index) => (
              <Card key={index} variant="hover-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">{system.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {system.features.map((feature, idx) => (
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

      {/* Smart Features */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">스마트 기능</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {smartFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} variant="hover-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Advantages */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">DJI Matrice 4T의 장점</h2>
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
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">활용 분야</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <Card key={index} variant="hover-lg" className="group">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {app.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">{app.description}</p>
                    <Button variant="link" className="p-0 h-auto font-semibold gap-2 group-hover:gap-3 transition-all" asChild>
                      <Link href={app.link}>
                        자세히 보기
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Package Contents */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">구성품</h2>
          </div>

          {/* Grid of Package Items */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {packageContents.map((item, index) => (
              <Card key={index} variant="hover-lg" className="text-center">
                <CardContent className="p-4">
                  <div className="font-bold text-primary mb-1 text-sm leading-tight">
                    {item.name}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    × {item.quantity}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      </section>

      <Separator />

      {/* Specifications */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">제품 사양</h2>
            {product.specificationUrl && (
              <Button variant="outline" asChild>
                <Link href={product.specificationUrl}>
                  <Package className="h-4 w-4 mr-2" />
                  상세 규격서 보기
                </Link>
              </Button>
            )}
          </div>
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
      <ProductCTA productName={product.name} />

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

