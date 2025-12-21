import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ProductDetailHero from '@/components/ProductDetailHero';
import { products, getRelatedProducts } from '@/data/products';
import {
  CheckCircle2,
  Shield,
  Zap,
  Settings,
  Radio,
  Phone,
  Mail,
  Package,
  ArrowRight,
  Clock,
  Droplets,
  Layers,
  Eye,
  ChevronLeft,
  Check
} from 'lucide-react';
import ProductCTA from '@/components/ProductCTA';

export const metadata = {
  title: 'DJI Matrice 300 RTK | 아이엠드론',
  description: '건설·점검·측량 등 산업 현장을 위한 고성능 산업용 드론. 듀얼 페이로드, IP45 방진방수, 55분 비행시간',
};

export default function Matrice300RTKPage() {
  const product = products.find(p => p.id === 'dji-matrice-350-rtk');
  if (!product) return null;

  // 관련 상품 가져오기
  const relatedProducts = getRelatedProducts('dji-matrice-350-rtk', 3);

  const keyPoints = [
    '최대 55분 비행시간',
    '듀얼 페이로드 시스템',
    'IP45 방진방수 등급'
  ];

  const applications = [
    {
      icon: Settings,
      title: '건설 현장 모니터링',
      description: '대규모 건설 현장의 진척도 관리 및 안전 관리',
      details: [
        '넓은 작업 범위 커버',
        '정밀 측량 데이터 수집',
        '진척도 비교 분석',
        '안전사고 예방 점검'
      ]
    },
    {
      icon: Zap,
      title: '에너지 인프라 점검',
      description: '송전선로, 발전소, 풍력 터빈 등 점검',
      details: [
        '고압 송전선 안전 점검',
        '풍력터빈 블레이드 점검',
        '태양광 패널 열화상 검사',
        '변전소 시설 점검'
      ]
    },
    {
      icon: Eye,
      title: '공공 안전 & 수색구조',
      description: '재난 현장 파악 및 수색 구조 지원',
      details: [
        '재난 현장 실시간 모니터링',
        '수색 구조 작업 지원',
        '야간 수색 가능',
        '긴급 상황 대응'
      ]
    },
    {
      icon: Layers,
      title: '항공 측량',
      description: '대규모 지형 측량 및 3D 매핑',
      details: [
        'cm급 정확도 측량',
        '정사영상 제작',
        '3D 모델링',
        '지형 분석'
      ]
    }
  ];

  const features = [
    {
      title: '듀얼 페이로드 시스템',
      description: '두 개의 페이로드를 동시에 장착하여 광각 카메라와 줌 카메라, 또는 RGB 카메라와 열화상 카메라를 함께 사용할 수 있습니다.',
      icon: Layers
    },
    {
      title: 'IP45 방진방수',
      description: 'IP45 등급의 방진방수 성능으로 비, 눈, 먼지가 있는 열악한 환경에서도 안정적으로 작업할 수 있습니다.',
      icon: Droplets
    },
    {
      title: '55분 비행시간',
      description: '최대 55분의 비행시간으로 넓은 지역의 점검이나 측량 작업을 한 번의 비행으로 완료할 수 있습니다.',
      icon: Clock
    },
    {
      title: 'cm급 RTK 정확도',
      description: '고정밀 RTK 모듈로 수평 1cm + 1ppm, 수직 1.5cm + 1ppm의 정확도를 제공하여 정밀 측량이 가능합니다.',
      icon: Shield
    },
    {
      title: '6방향 감지 및 위치 지정',
      description: '전방, 후방, 상향, 하향, 좌우 6방향의 장애물 감지 시스템으로 복잡한 환경에서도 안전하게 비행합니다.',
      icon: Eye
    },
    {
      title: '15km 전송 거리',
      description: 'OcuSync Enterprise 전송 시스템으로 최대 15km 거리에서도 안정적인 HD 영상 전송이 가능합니다.',
      icon: Radio
    }
  ];

  const payloadOptions = [
    {
      name: 'Zenmuse H20 Series',
      description: '광각/줌/레이저거리측정/열화상 통합 짐벌',
      features: ['20MP 광각', '200배 줌', '레이저 거리측정', '열화상 카메라']
    },
    {
      name: 'Zenmuse P1',
      description: '45MP 풀프레임 항공측량 카메라',
      features: ['45MP 센서', '3cm GSD', '기계식 셔터', '다양한 렌즈']
    },
    {
      name: 'Zenmuse L1',
      description: 'LiDAR 스캐닝 시스템',
      features: ['190m 탐지거리', '점군 데이터', 'RGB 통합', '실시간 모델링']
    },
    {
      name: 'Zenmuse L2',
      description: '차세대 LiDAR 센서',
      features: ['250m 탐지거리', '초당 240K 포인트', '5cm 정확도', 'RGB 카메라']
    }
  ];

  const specifications = [
    { label: '무게', value: '약 6.3kg (배터리 포함)' },
    { label: '최대 비행시간', value: '55분 (페이로드 없이)' },
    { label: '최대 전송거리', value: '15km (FCC)' },
    { label: '페이로드', value: '듀얼 하향, 싱글 상향' },
    { label: '최대 탑재 중량', value: '2.7kg' },
    { label: 'RTK 정확도', value: '수평: 1cm+1ppm, 수직: 1.5cm+1ppm' },
    { label: '방진방수', value: 'IP45' },
    { label: '작동 온도', value: '-20°C ~ 50°C' },
    { label: '최대 비행속도', value: '23 m/s' },
    { label: '최대 상승속도', value: '6 m/s' },
    { label: '최대 하강속도', value: '5 m/s' },
    { label: '최대 경사각', value: '30°' },
    { label: '최대 각속도', value: '300°/s' },
    { label: '최대 풍속 저항', value: '15 m/s' },
    { label: 'GNSS', value: 'GPS+Galileo+BeiDou+GLONASS' },
    { label: '장애물 감지', value: '6방향' }
  ];

  const useCases = [
    {
      title: '초고압 송전선로 점검',
      description: 'H20T 열화상 카메라로 송전선로의 발열 부위를 감지하고, 줌 카메라로 애자 손상을 확인합니다. 듀얼 페이로드로 한 번의 비행으로 RGB 육안 점검과 열화상 점검을 동시에 수행할 수 있습니다.'
    },
    {
      title: '광산 측량 및 모니터링',
      description: 'P1 또는 L2 페이로드로 광산 전체를 정밀 측량하여 토공량을 계산하고, 정기적인 비행으로 채굴 진척도를 모니터링합니다. RTK로 cm급 정확도의 데이터를 제공합니다.'
    },
    {
      title: '교량 정밀 점검',
      description: '6방향 장애물 감지로 교량 하부 구조물 사이를 안전하게 비행하며, H20 시리즈의 200배 줌으로 균열과 부식 부위를 정밀하게 촬영합니다.'
    },
    {
      title: '재난 현장 대응',
      description: 'IP45 방진방수 성능으로 악천후에서도 작동하며, 55분의 긴 비행시간으로 넓은 재난 현장을 빠르게 파악합니다. 열화상 카메라로 야간 수색도 가능합니다.'
    }
  ];

  const whyChoose = [
    {
      title: '산업용 드론의 글로벌 표준',
      description: '전 세계 수천 개 기업이 선택한 산업용 드론의 표준으로, 검증된 안정성과 성능을 제공합니다.'
    },
    {
      title: '다양한 페이로드 호환성',
      description: 'DJI의 모든 엔터프라이즈 페이로드와 호환되어, 한 대의 기체로 다양한 임무를 수행할 수 있습니다.'
    },
    {
      title: '극한 환경 작동',
      description: '-20°C ~ 50°C 작동 온도와 IP45 방진방수로 사막, 극지, 해상 등 어떤 환경에서도 작동합니다.'
    },
    {
      title: '완벽한 안전 시스템',
      description: '6방향 장애물 감지, ADS-B 수신기, RTK 정밀 측위, 듀얼 배터리 시스템으로 최고 수준의 안전성을 보장합니다.'
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

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Product Overview</Badge>
            <h2 className="text-4xl font-bold mb-6">
              산업용 드론의 새로운 기준
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              DJI Matrice 300 RTK는 산업용 드론의 글로벌 표준입니다. IP45 방진방수 등급과 듀얼 페이로드 시스템으로 
              어떤 환경에서도 안정적인 작업이 가능하며, 고정밀 RTK와 6방향 감지 시스템으로 안전성과 정확성을 
              극대화했습니다. 최대 55분의 비행시간과 2.7kg 탑재 중량으로 대규모 산업 현장에서 필요한 모든 
              작업을 효율적으로 수행할 수 있습니다.
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
              다양한 산업 현장의 요구사항을 완벽하게 충족합니다
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
                        <CardDescription className="text-base">
                          {app.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {app.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span>{detail}</span>
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

      {/* Payload Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Payload Options</Badge>
            <h2 className="text-4xl font-bold mb-4">다양한 페이로드 옵션</h2>
            <p className="text-xl text-muted-foreground">
              임무에 맞는 페이로드를 선택하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {payloadOptions.map((payload, index) => (
              <Card key={index} variant="hover-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{payload.name}</CardTitle>
                  <CardDescription>{payload.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {payload.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
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

      {/* Use Cases */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Use Cases</Badge>
            <h2 className="text-4xl font-bold mb-4">실제 활용 사례</h2>
            <p className="text-xl text-muted-foreground">
              전 세계 산업 현장에서 검증된 성능
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} variant="hover-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Specifications</Badge>
            <h2 className="text-4xl font-bold mb-4">제품 사양</h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <span className="font-medium text-muted-foreground">
                      {spec.label}
                    </span>
                    <span className="font-semibold">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Why Choose */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Why Choose</Badge>
            <h2 className="text-4xl font-bold mb-4">Matrice 300 RTK를 선택해야 하는 이유</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChoose.map((reason, index) => (
              <Card key={index} variant="hover-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

