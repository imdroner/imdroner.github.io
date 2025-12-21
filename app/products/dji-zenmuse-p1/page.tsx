import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ProductDetailHero from '@/components/ProductDetailHero';
import ProductCTA from '@/components/ProductCTA';
import { products, getRelatedProducts } from '@/data/products';
import {
  CheckCircle2,
  Camera,
  Layers,
  Target,
  Clock,
  Zap,
  Map,
  Settings,
  Phone,
  Mail,
  Package,
  ArrowRight,
  ChevronLeft,
  Check,
  Ruler,
  Timer
} from 'lucide-react';

export const metadata = {
  title: 'DJI Zenmuse P1 | 아이엠드론',
  description: '항공 측량을 위한 풀프레임 카메라 시스템. 45MP 센서, GCP 없이 3cm 정확도, 단일 비행으로 3km² 커버',
};

export default function ZenmuseP1Page() {
  const product = products.find(p => p.id === 'dji-zenmuse-p1');
  if (!product) return null;

  // 관련 상품 가져오기
  const relatedProducts = getRelatedProducts('dji-zenmuse-p1', 3);

  const keyPoints = [
    '45MP 풀프레임 센서',
    'GCP 없이 수평 3cm / 수직 5cm 정확도',
    '단일 비행으로 3km² 커버'
  ];

  const features = [
    {
      title: '45MP 풀프레임 센서',
      description: '35mm 풀프레임 CMOS 센서로 8192 × 5460 픽셀의 고해상도 이미지를 촬영합니다. 뛰어난 디테일과 색상 재현으로 정밀한 측량 데이터를 제공합니다.',
      icon: Camera
    },
    {
      title: 'GCP 없는 고정밀도',
      description: '지상 기준점(GCP) 없이도 수평 3cm, 수직 5cm의 정확도를 달성합니다. RTK 모듈과 TimeSync 2.0의 결합으로 측량 효율성을 극대화합니다.',
      icon: Target
    },
    {
      title: '단일 비행 3km² 커버',
      description: '100m 고도에서 단일 비행으로 최대 3km²의 면적을 커버할 수 있습니다. 넓은 지역의 측량 작업을 빠르게 완료할 수 있습니다.',
      icon: Map
    },
    {
      title: '글로벌 기계식 셔터',
      description: '최대 1/2000초의 고속 글로벌 기계식 셔터로 비행 중에도 왜곡 없는 선명한 이미지를 촬영합니다. 롤링 셔터 현상을 완전히 제거합니다.',
      icon: Timer
    },
    {
      title: '3축 안정화 짐벌',
      description: '스마트 경사 촬영 기능이 탑재된 3축 안정화 짐벌로 안정적인 촬영을 보장합니다. 자동으로 최적의 각도에서 경사 이미지를 촬영합니다.',
      icon: Layers
    },
    {
      title: 'TimeSync 2.0',
      description: '마이크로초 수준의 시간 동기화로 비행 컨트롤러, RTK 모듈, 카메라 간의 완벽한 동기화를 실현합니다. 측량 데이터의 정확도를 보장합니다.',
      icon: Zap
    }
  ];

  const applications = [
    {
      icon: Map,
      title: '토지 측량',
      description: '대규모 토지 측량 프로젝트',
      details: [
        '지적 측량 및 경계 확정',
        '지형도 작성',
        '토지 이용 현황 조사',
        '개발 계획 수립 지원'
      ]
    },
    {
      icon: Layers,
      title: '건설 및 BIM',
      description: '건설 현장 모니터링 및 3D 모델링',
      details: [
        '공사 진행 상황 모니터링',
        '토공량 계산',
        'BIM 모델 생성',
        '준공 측량'
      ]
    },
    {
      icon: Target,
      title: '정밀 농업',
      description: '농업 지형 분석 및 작물 모니터링',
      details: [
        '농경지 지형 분석',
        '작물 생육 모니터링',
        '관개 시스템 설계',
        '수확량 예측'
      ]
    },
    {
      icon: Settings,
      title: '인프라 관리',
      description: '도로, 교량 등 인프라 현황 조사',
      details: [
        '도로 및 철도 조사',
        '교량 구조 분석',
        '댐 및 저수지 관리',
        '전력선 점검'
      ]
    }
  ];

  const lensOptions = [
    {
      name: 'DJI DL 24mm F2.8 LS ASPH',
      fov: '84°',
      gsd: '100m 고도에서 2.7cm',
      use: '넓은 지역 커버리지'
    },
    {
      name: 'DJI DL 35mm F2.8 LS ASPH',
      fov: '63°',
      gsd: '100m 고도에서 1.9cm',
      use: '일반 측량 작업'
    },
    {
      name: 'DJI DL 50mm F2.8 LS ASPH',
      fov: '46°',
      gsd: '100m 고도에서 1.3cm',
      use: '정밀 측량 및 세부 촬영'
    }
  ];

  const workflow = [
    { step: '1', title: '임무 계획', description: 'DJI Pilot 2로 자동 비행 경로 설정 및 촬영 파라미터 구성' },
    { step: '2', title: '자동 비행', description: 'RTK 정밀 위치 정보를 기반으로 자동 촬영 수행' },
    { step: '3', title: '데이터 처리', description: 'DJI Terra로 이미지 처리 및 3D 모델 생성' },
    { step: '4', title: '결과물 도출', description: '정사영상, DSM, 포인트 클라우드 등 다양한 측량 성과물 생성' }
  ];

  const useCases = [
    {
      title: '대규모 토지 개발 프로젝트',
      description: 'P1으로 개발 예정지 전체를 신속하게 측량하여 정확한 지형도를 작성합니다. GCP 설치 없이도 센티미터급 정확도로 토공량 계산과 개발 계획 수립이 가능합니다.',
      icon: Map
    },
    {
      title: '고속도로 건설 모니터링',
      description: '건설 중인 고속도로 전 구간을 정기적으로 촬영하여 공사 진행 상황을 모니터링합니다. 3D 모델로 설계와 실제 시공 상태를 비교하여 품질을 관리합니다.',
      icon: Target
    },
    {
      title: '유적지 디지털 보존',
      description: '문화재 및 유적지를 고해상도로 촬영하여 정밀한 3D 모델을 생성합니다. 디지털 아카이빙으로 문화유산을 보존하고 복원 계획을 수립합니다.',
      icon: Layers
    },
    {
      title: '광산 측량 및 관리',
      description: '광산 채굴 현장의 지형 변화를 정기적으로 측량하여 채굴량을 정확하게 계산합니다. 안전 관리와 효율적인 작업 계획 수립에 활용합니다.',
      icon: Settings
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

      {/* Main Content - Hero Section */}
      <ProductDetailHero product={product} />

      <Separator />

      {/* Product Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Product Overview</Badge>
            <h2 className="text-4xl font-bold mb-6">
              항공 측량의 새로운 기준
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {product.detailDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} variant="hover-lg" className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Lens Options */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Lens Options</Badge>
            <h2 className="text-4xl font-bold mb-4">교환 가능한 고정 초점 렌즈</h2>
            <p className="text-xl text-muted-foreground">
              임무에 맞는 최적의 렌즈를 선택하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lensOptions.map((lens, index) => (
              <Card key={index} variant="hover-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{lens.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">화각</span>
                    <span className="font-semibold">{lens.fov}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">GSD</span>
                    <span className="font-semibold text-sm">{lens.gsd}</span>
                  </div>
                  <Separator />
                  <p className="text-sm text-muted-foreground">
                    <Check className="h-4 w-4 inline mr-1 text-green-600" />
                    {lens.use}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Applications</Badge>
            <h2 className="text-4xl font-bold mb-4">주요 활용 분야</h2>
            <p className="text-xl text-muted-foreground">
              다양한 산업 분야에서 활용되는 P1
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <Card key={index} variant="hover-lg">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{app.title}</CardTitle>
                        <CardDescription className="text-base">{app.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {app.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Workflow */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Workflow</Badge>
            <h2 className="text-4xl font-bold mb-4">측량 워크플로우</h2>
            <p className="text-xl text-muted-foreground">
              계획부터 결과물 생성까지 간편한 4단계
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {workflow.map((item, index) => (
              <Card key={index} variant="hover-lg" className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Use Cases</Badge>
            <h2 className="text-4xl font-bold mb-4">실제 활용 사례</h2>
            <p className="text-xl text-muted-foreground">
              다양한 프로젝트에서 검증된 성능
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <Card key={index} variant="hover-lg">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Specifications */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Specifications</Badge>
            <h2 className="text-4xl font-bold mb-4">제품 사양</h2>
            <p className="text-xl text-muted-foreground">
              상세한 기술 스펙을 확인하세요
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specifications?.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <span className="font-medium text-muted-foreground">{spec.label}</span>
                    <span className="font-semibold text-right">{spec.value}</span>
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

      {/* Related Products - Dynamic */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">함께 보면 좋은 제품</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
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
                      <Link href={`/products/${relatedProduct.id}`}>
                        자세히 보기
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/products">
                  모든 제품 보기
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

