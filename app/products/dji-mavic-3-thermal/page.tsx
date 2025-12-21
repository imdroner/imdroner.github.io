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
  Flame,
  Shield,
  Search,
  Thermometer,
  Sparkles,
  Phone,
  Mail,
  Package,
  ArrowRight,
  Clock,
  Gauge,
  Radio,
  MapPin,
  ChevronLeft,
  Check,
  Moon,
  Zap,
  Eye
} from 'lucide-react';

export const metadata = {
  title: 'DJI Mavic 3 Thermal | 아이엠드론',
  description: '열화상 기능을 갖춘 소방·수색·야간 작업용 드론. 640×512 열화상 카메라, 48MP 광각 카메라, 56배 하이브리드 줌',
};

export default function Mavic3ThermalPage() {
  const product = products.find(p => p.id === 'dji-mavic-3-thermal');
  if (!product) return null;

  // 관련 상품 가져오기
  const relatedProducts = getRelatedProducts('dji-mavic-3-thermal', 3);

  const keyPoints = [
    '640×512 픽셀 열화상 카메라',
    '48MP 광각 카메라 고해상도 촬영',
    '소방·수색·야간 작업 전문'
  ];

  const applications = [
    {
      icon: Flame,
      title: '소방 및 화재 대응',
      description: '화재 현장의 열원 탐지 및 피해 상황 파악',
      details: [
        '화재 발생 지점 정확한 파악',
        '잔불 및 열원 탐지',
        '연기 투과 가시성 확보',
        '안전 거리에서 상황 모니터링'
      ]
    },
    {
      icon: Search,
      title: '수색 구조',
      description: '실종자 수색 및 야간 구조 작업',
      details: [
        '인명 열 신호 탐지',
        '야간 및 악천후 수색',
        '넓은 지역 신속 탐색',
        '고음량 스피커로 소통'
      ]
    },
    {
      icon: Shield,
      title: '시설물 열화상 점검',
      description: '전력, 태양광, 건물 등의 열 이상 탐지',
      details: [
        '태양광 패널 핫스팟 탐지',
        '전력 설비 과열 확인',
        '건물 단열 결함 점검',
        '기계 설비 열화상 진단'
      ]
    },
    {
      icon: Moon,
      title: '야간 작업',
      description: '열화상으로 야간 점검 및 감시 수행',
      details: [
        '완전 암흑 환경 작업',
        '동물 및 침입자 탐지',
        '야간 경계 임무',
        '저조도 촬영 지원'
      ]
    }
  ];

  const features = [
    {
      title: '640×512 열화상 카메라',
      description: '30Hz 고해상도 열화상 센서로 정밀한 온도 측정과 열 분포 파악이 가능합니다. 연기나 어둠 속에서도 명확한 시야를 확보할 수 있습니다.',
      icon: Thermometer
    },
    {
      title: '48MP 광각 카메라',
      description: '1/2인치 CMOS 센서를 탑재하여 고해상도 이미지와 4K 동영상 촬영이 가능합니다. 열화상과 함께 정확한 현장 기록을 제공합니다.',
      icon: Camera
    },
    {
      title: '56배 하이브리드 줌',
      description: '광학 줌과 디지털 줌을 결합한 56배 하이브리드 줌으로 안전 거리에서도 세밀한 부분까지 확인할 수 있습니다.',
      icon: Eye
    },
    {
      title: 'RTK 센티미터급 정밀도',
      description: 'RTK 모듈을 통해 수평 1cm+1ppm, 수직 1.5cm+1ppm의 정확도로 정밀한 위치 데이터를 제공합니다.',
      icon: MapPin
    },
    {
      title: '45분 비행시간',
      description: '최대 45분의 긴 비행시간으로 넓은 지역을 탐색하거나 긴 시간 동안 모니터링할 수 있습니다.',
      icon: Clock
    },
    {
      title: 'DJI O3 Enterprise 전송',
      description: '최대 15km(FCC) 전송 거리와 안정적인 영상 전송으로 넓은 범위에서 임무를 수행할 수 있습니다.',
      icon: Radio
    }
  ];

  const technicalAdvantages = [
    {
      title: '컴팩트하고 휴대 가능',
      description: '920g의 가벼운 무게와 접이식 디자인으로 어디든 쉽게 휴대하고 신속하게 출동할 수 있습니다.',
      icon: Package
    },
    {
      title: '고음량 스피커',
      description: '100dB 고출력 스피커를 탑재하여 수색 현장에서 실종자와 소통하거나 경고 방송을 송출할 수 있습니다.',
      icon: Radio
    },
    {
      title: '다양한 열화상 모드',
      description: '화이트 핫, 블랙 핫, 레인보우 등 다양한 컬러 팔레트로 상황에 맞는 최적의 열화상 이미지를 제공합니다.',
      icon: Sparkles
    }
  ];

  const useCases = [
    {
      title: '도시 화재 진압',
      description: 'Mavic 3 Thermal로 화재 현장의 열원을 실시간으로 파악하여 소방대원의 진입 경로를 안내하고, 잔불을 탐지하여 완전 진화를 확인합니다. 연기로 가려진 구역도 열화상으로 명확하게 파악할 수 있습니다.',
      icon: Flame
    },
    {
      title: '산악 조난자 수색',
      description: '산악 지역에서 실종자를 수색할 때 열화상 카메라로 인명의 열 신호를 탐지합니다. 야간이나 악천후에도 넓은 지역을 신속하게 탐색하여 골든타임 내 구조 가능성을 높입니다.',
      icon: Search
    },
    {
      title: '태양광 발전소 점검',
      description: '태양광 패널의 핫스팟, 과열 셀, 결함 모듈을 열화상으로 탐지합니다. 넓은 발전소를 빠르게 스캔하여 유지보수 비용을 절감하고 발전 효율을 최적화할 수 있습니다.',
      icon: Zap
    },
    {
      title: '전력 인프라 점검',
      description: '송전탑, 변전소 설비의 과열 부위를 열화상으로 조기에 발견하여 전력 사고를 예방합니다. 고압 전류가 흐르는 위험 구역에 접근하지 않고도 안전하게 점검할 수 있습니다.',
      icon: Shield
    }
  ];

  const workflow = [
    { step: '1', title: '신속 전개', description: '접이식 디자인으로 15분 이내 현장 도착 및 비행 준비 완료' },
    { step: '2', title: '열화상 스캔', description: '640×512 열화상 센서로 대상 지역 또는 시설물 스캔' },
    { step: '3', title: '이상 탐지', description: '온도 이상 부위 자동 탐지 및 정밀 줌 촬영' },
    { step: '4', title: '보고서 작성', description: '열화상 이미지 및 위치 데이터 기반 점검 보고서 생성' }
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

      {/* Product Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Product Overview</Badge>
            <h2 className="text-4xl font-bold mb-6">
              열화상 기능을 갖춘 공공 안전 드론
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
            <h2 className="text-4xl font-bold mb-4">주요 활용 분야</h2>
            <p className="text-xl text-muted-foreground">
              열화상 기능으로 다양한 임무를 수행합니다
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

      {/* Technical Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Technology</Badge>
            <h2 className="text-4xl font-bold mb-4">핵심 기술</h2>
            <p className="text-xl text-muted-foreground">
              현장 작업을 위한 최적화된 기술
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

      {/* Use Cases */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Use Cases</Badge>
            <h2 className="text-4xl font-bold mb-4">실제 활용 사례</h2>
            <p className="text-xl text-muted-foreground">
              다양한 현장에서 검증된 성능
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

      {/* Workflow */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Workflow</Badge>
            <h2 className="text-4xl font-bold mb-4">작업 프로세스</h2>
            <p className="text-xl text-muted-foreground">
              신속하고 체계적인 4단계 워크플로우
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

