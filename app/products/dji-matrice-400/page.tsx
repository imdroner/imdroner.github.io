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
  Clock,
  Package as PackageIcon,
  ArrowRight,
  Radio,
  Radar,
  Shield,
  Zap,
  Ship,
  Layers,
  Eye,
  Thermometer,
  ChevronLeft,
  Battery,
  Target,
  Sparkles,
  CloudSun,
  AlertTriangle,
  Building2,
  Map
} from 'lucide-react';

export const metadata = {
  title: 'DJI Matrice 400 | 아이엠드론',
  description: '장시간 비행과 전력선급 장애물 감지를 갖춘 엔터프라이즈 플래그십 드론 플랫폼',
};

export default function DJIMatrice400Page() {
  // 제품 데이터 가져오기
  const product = products.find(p => p.id === 'dji-matrice-400')!;
  
  // 관련 상품 가져오기
  const relatedProducts = getRelatedProducts('dji-matrice-400', 3);

  const keyPoints = [
    '최대 59분 장시간 비행',
    '최대 6kg 페이로드',
    '전력선급 장애물 감지'
  ];

  const features = [
    { icon: Clock, title: '장시간 비행', description: '최대 59분의 비행 시간으로 넓은 지역을 효율적으로 커버하고 작업 시간을 최대화합니다.' },
    { icon: PackageIcon, title: '대용량 페이로드', description: '최대 6kg의 페이로드 용량으로 다양한 센서와 장비를 탑재할 수 있습니다.' },
    { icon: Radar, title: '전력선급 장애물 감지', description: '회전식 LiDAR와 mmWave 레이더를 통합하여 전력선급의 정밀한 장애물 감지가 가능합니다.' },
    { icon: Radio, title: 'O4 Enterprise Enhanced', description: '향상된 O4 Enterprise 전송 시스템으로 안정적인 장거리 통신을 제공합니다.' },
    { icon: Layers, title: '공중 릴레이 전송', description: '공중 릴레이 비디오 전송을 지원하여 통신 범위를 대폭 확장합니다.' },
    { icon: Eye, title: '스마트 감지', description: '가시광선과 열화상 이미징을 결합한 스마트 감지 기능으로 정확한 데이터를 수집합니다.' }
  ];

  const applications = [
    { 
      icon: AlertTriangle,
      title: '긴급 대응', 
      description: '재난 현장, 수색 구조 등 긴급 상황에서 장시간 비행과 고급 센싱으로 신속한 대응을 지원합니다.',
      link: '/services/public-safety'
    },
    { 
      icon: Zap,
      title: '전력 점검', 
      description: '송전선로, 변전소 등 전력 인프라의 정밀 점검을 위한 최적의 플랫폼입니다.',
      link: '/services/energy'
    },
    { 
      icon: Map,
      title: '매핑 및 측량', 
      description: '대규모 지역의 항공 매핑과 정밀 측량 작업을 효율적으로 수행합니다.',
      link: '/services/construction'
    },
    { 
      icon: Building2,
      title: 'AEC (건축, 엔지니어링, 건설)', 
      description: '건설 현장 모니터링, 진행 상황 추적, BIM 데이터 생성 등을 지원합니다.',
      link: '/services/construction'
    }
  ];

  const specifications = [
    { label: '최대 비행시간', value: '59분 (페이로드 없음)' },
    { label: '최대 페이로드', value: '6kg' },
    { label: '최대 상승 속도', value: '6m/s' },
    { label: '최대 하강 속도', value: '5m/s' },
    { label: '최대 수평 속도', value: '23m/s' },
    { label: '장애물 감지', value: '회전식 LiDAR + mmWave 레이더' },
    { label: '전송 시스템', value: 'O4 Enterprise Enhanced' },
    { label: '비디오 전송', value: '공중 릴레이 전송 지원' },
    { label: '센싱 시스템', value: '가시광선 + 열화상 이미징' },
    { label: '특수 기능', value: 'AR 프로젝션, 선박 이착륙' },
    { label: '방진방수', value: 'IP55' },
    { label: '작동 온도', value: '-20°C ~ 50°C' }
  ];

  const sensingSystem = [
    {
      title: '회전식 LiDAR',
      features: [
        '360도 전방위 스캔',
        '고정밀 거리 측정',
        '실시간 3D 맵핑',
        '전력선 감지 최적화'
      ]
    },
    {
      title: 'mmWave 레이더',
      features: [
        '악천후에서도 안정적 감지',
        '미세 장애물 탐지',
        '고속 반응 속도',
        '간섭 최소화'
      ]
    },
    {
      title: '가시광선 + 열화상',
      features: [
        '듀얼 센서 시스템',
        '스마트 감지 알고리즘',
        '정밀 온도 측정',
        '실시간 이상 감지'
      ]
    }
  ];

  const advantages = [
    {
      title: '탁월한 비행 성능',
      description: '59분의 장시간 비행과 6kg 페이로드로 복잡한 임무를 한 번의 비행으로 완수할 수 있습니다.',
      icon: Battery
    },
    {
      title: '전력선급 안전',
      description: 'LiDAR와 mmWave 레이더의 조합으로 전력선과 같은 미세 장애물도 정확하게 감지합니다.',
      icon: Shield
    },
    {
      title: '확장된 통신 범위',
      description: 'O4 Enterprise Enhanced와 공중 릴레이로 통신 범위를 극대화하여 광범위한 작업이 가능합니다.',
      icon: Radio
    },
    {
      title: '지능형 자동화',
      description: 'AR 프로젝션, 스마트 감지, 선박 이착륙 등 고급 자동화 기능으로 작업 효율을 향상시킵니다.',
      icon: Sparkles
    }
  ];

  const smartFeatures = [
    {
      title: 'AR 프로젝션',
      description: 'AR 기술을 활용하여 비행 경로와 작업 영역을 시각화하고 정확한 작업을 수행합니다.',
      icon: Target
    },
    {
      title: '선박 이착륙',
      description: '움직이는 선박에서도 안전하게 이착륙할 수 있어 해양 작업에 최적화되어 있습니다.',
      icon: Ship
    },
    {
      title: '전천후 운영',
      description: 'IP55 방진방수 등급과 -20°C ~ 50°C 작동 온도로 다양한 환경에서 안정적으로 작동합니다.',
      icon: CloudSun
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
              <CardTitle className="text-2xl">엔터프라이즈 플래그십 드론 플랫폼</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DJI Matrice 400은 <strong>59분의 장시간 비행</strong>과 <strong>최대 6kg의 페이로드 용량</strong>을 자랑하는 
                엔터프라이즈 플래그십 드론 플랫폼입니다. 회전식 LiDAR와 mmWave 레이더를 통합한 
                <strong>전력선급 장애물 감지 시스템</strong>으로 안전성을 극대화했으며, O4 Enterprise Enhanced 비디오 전송과 
                공중 릴레이 전송을 지원하여 광범위한 작업 영역을 커버합니다. 
                스마트 감지, AR 프로젝션, 선박 이착륙 등 고급 자동화 기능을 갖춰 긴급 대응, 전력 점검, 매핑, AEC 분야에서 
                탁월한 성능을 발휘합니다.
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

      {/* Sensing System */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">전력선급 장애물 감지 시스템</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sensingSystem.map((system, index) => (
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
          <h2 className="text-3xl font-bold mb-8">지능형 기능</h2>
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
          <h2 className="text-3xl font-bold mb-8">DJI Matrice 400의 장점</h2>
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

      {/* Specifications */}
      <section className="py-12 bg-muted/50">
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
                        <PackageIcon className="h-20 w-20 text-muted-foreground/30" />
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

