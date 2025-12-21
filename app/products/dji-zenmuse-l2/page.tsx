import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ProductImageGallery from '@/components/ProductImageGallery';
import { products, getRelatedProducts } from '@/data/products';
import {
  CheckCircle2,
  Layers,
  Gauge,
  Camera,
  Phone,
  Mail,
  Package,
  ArrowRight,
  Map,
  Zap,
  Eye,
  ChevronLeft,
  Check,
  Mountain,
  Building,
  Lightbulb,
  Target
} from 'lucide-react';

export const metadata = {
  title: 'DJI Zenmuse L2 | 아이엠드론',
  description: '고정밀 3D 데이터 수집을 위한 차세대 LiDAR 시스템. 수직 4cm, 수평 5cm 정확도',
};

export default function ZenmuseL2Page() {
  const product = products.find(p => p.id === 'dji-zenmuse-l2');
  if (!product) return null;

  // 관련 상품 가져오기
  const relatedProducts = getRelatedProducts('dji-zenmuse-l2', 3);

  const keyPoints = [
    '수직 4cm, 수평 5cm 고정밀도',
    '최대 2.5km² 단일 비행 커버',
    '5회 반사 지원'
  ];

  const features = [
    { icon: Gauge, title: '고정밀도', description: '수직 4cm, 수평 5cm의 탁월한 정확도로 cm급 측량 데이터 제공' },
    { icon: Zap, title: '우수한 효율성', description: '단일 비행으로 최대 2.5km²의 면적을 커버하여 작업 시간 대폭 단축' },
    { icon: Target, title: '뛰어난 침투력', description: '더 작은 레이저 스팟 사이즈로 더 밀집된 포인트 클라우드 생성' },
    { icon: Eye, title: '450m 탐지 범위', description: '50% 반사율 조건에서 최대 450m까지 탐지하여 높은 고도에서도 정밀 측정' },
    { icon: Layers, title: '5회 반사 지원', description: '더 많은 지면 포인트를 포착하여 복잡한 지형에서도 정확한 데이터 제공' },
    { icon: Camera, title: '4/3 CMOS RGB', description: '20MP 고해상도 RGB 매핑 카메라로 컬러 정보 동시 수집' }
  ];

  const applications = [
    { 
      title: '지형 및 토목 측량', 
      description: '산림, 도로, 하천 등 대규모 지형을 빠르게 스캔하여 정밀한 DEM(Digital Elevation Model)을 생성합니다. 5회 반사 지원으로 식생 아래 지형까지 정확하게 측정할 수 있습니다.',
      icon: Mountain
    },
    { 
      title: '건설 현장 모니터링', 
      description: '토공량 계산, 구조물 검측, 진척도 관리를 위한 정밀 3D 데이터를 수집합니다. cm급 정확도로 미세한 변화도 감지하여 정확한 공정 관리가 가능합니다.',
      icon: Building
    },
    { 
      title: '송전선로 점검', 
      description: '송전선과 주변 식생 간 거리를 정확하게 측정하여 안전 관리를 수행합니다. 정기적인 스캔으로 식생 성장을 모니터링하고 예방적 유지보수를 실시합니다.',
      icon: Zap
    },
    { 
      title: '문화재 디지털 보존', 
      description: '역사적 건축물과 유적지를 정밀하게 3D 스캔하여 디지털로 보존합니다. 고해상도 RGB 카메라로 텍스처 정보도 함께 기록하여 완벽한 디지털 복원이 가능합니다.',
      icon: Lightbulb
    }
  ];

  const technicalAdvantages = [
    {
      title: '프레임 LiDAR',
      description: '프레임 방식의 LiDAR 스캐너로 더 균일한 포인트 분포와 더 밀집된 포인트 클라우드를 생성합니다.',
      icon: Layers
    },
    {
      title: '고정밀 IMU 시스템',
      description: 'DJI 자체 개발 고정밀 IMU 시스템으로 비행 중 자세 변화를 정확하게 보정하여 데이터 정확도를 향상시킵니다.',
      icon: Gauge
    },
    {
      title: '턴키 솔루션',
      description: 'DJI Terra와 완벽하게 통합되어 데이터 수집부터 후처리까지 원스톱 솔루션을 제공합니다.',
      icon: Package
    }
  ];

  const workflow = [
    { step: '1', title: '경로 계획', description: 'DJI Terra에서 측량 지역을 지정하고 자동 경로 생성' },
    { step: '2', title: '자동 비행', description: 'Matrice 350/400 RTK에 장착하여 자동 비행 수행' },
    { step: '3', title: '데이터 수집', description: 'LiDAR 점군 데이터와 RGB 이미지 동시 수집' },
    { step: '4', title: '후처리', description: 'DJI Terra로 점군 데이터 처리 및 3D 모델 생성' }
  ];

  const compatibility = [
    {
      model: 'DJI Matrice 400 RTK',
      description: '차세대 플래그십 산업용 드론'
    },
    {
      model: 'DJI Matrice 350 RTK',
      description: '고성능 산업용 드론 플랫폼'
    },
    {
      model: 'DJI Matrice 300 RTK',
      description: '검증된 산업용 드론 (DJI RC Plus 필요)'
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

      {/* Product Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Product Overview</Badge>
            <h2 className="text-4xl font-bold mb-6">
              고정밀 항공 LiDAR의 새로운 기준
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

      {/* Applications */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Applications</Badge>
            <h2 className="text-4xl font-bold mb-4">산업 분야별 활용</h2>
            <p className="text-xl text-muted-foreground">
              다양한 산업 현장에서 검증된 고정밀 측량 솔루션
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
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {app.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Technical Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Technology</Badge>
            <h2 className="text-4xl font-bold mb-4">핵심 기술</h2>
            <p className="text-xl text-muted-foreground">
              DJI만의 독자적인 기술로 더욱 정확하고 효율적인 데이터 수집
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card key={index} variant="hover-lg">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-center">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Compatibility */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Compatibility</Badge>
            <h2 className="text-4xl font-bold mb-4">호환 기체</h2>
            <p className="text-xl text-muted-foreground">
              DJI Matrice 시리즈와 완벽하게 호환
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {compatibility.map((item, index) => (
              <Card key={index} variant="hover-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{item.model}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Workflow */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Workflow</Badge>
            <h2 className="text-4xl font-bold mb-4">작업 프로세스</h2>
            <p className="text-xl text-muted-foreground">
              간단하고 직관적인 4단계 워크플로우
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
                    <span className="font-semibold">{spec.value}</span>
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
          <Badge variant="hero" className="mb-6 text-base px-6 py-2">
            <Mail className="h-4 w-4 mr-2" />
            Contact Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DJI Zenmuse L2<br />구매 상담을 시작하세요
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            전문 컨설턴트가 귀사의 요구사항에 맞는<br />
            최적의 솔루션을 제안해드립니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>무료 현장 데모</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>맞춤형 견적 제공</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>24시간 이내 답변</span>
            </div>
          </div>
        </div>
      </section>

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

