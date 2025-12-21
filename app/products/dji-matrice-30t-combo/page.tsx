import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ProductImageGallery from '@/components/ProductImageGallery';
import { products } from '@/data/products';
import {
  CheckCircle2,
  Thermometer,
  Camera,
  Shield,
  Phone,
  Mail,
  Package,
  ArrowRight,
  Moon,
  Zap,
  Eye,
  ChevronLeft,
  Check
} from 'lucide-react';

export const metadata = {
  title: 'DJI Matrice 30T Combo | 아이엠드론',
  description: '열화상 카메라 탑재로 야간 점검 및 수색 작업에 최적화된 올인원 산업용 드론',
};

export default function Matrice30TComboPage() {
  const product = products.find(p => p.id === 'dji-matrice-30t-combo');
  if (!product) return null;

  const keyPoints = [
    '640×512 열화상 센서',
    '48MP 광각 + 200배 줌',
    'IP55 방진방수'
  ];

  const features = [
    { icon: Thermometer, title: '640×512 열화상 센서', description: '고해상도 열화상 이미징으로 온도 이상 감지 및 야간 수색 작업에 최적화' },
    { icon: Camera, title: '48MP 광각 카메라', description: '1/2" CMOS 센서로 4K 영상과 48MP 고해상도 사진 촬영' },
    { icon: Eye, title: '200배 하이브리드 줌', description: '12MP 줌 카메라로 원거리 피사체 세밀하게 확인' },
    { icon: Shield, title: 'IP55 방진방수', description: '비, 눈, 먼지에도 강한 방진방수 성능으로 극한 환경 작업' },
    { icon: Moon, title: '야간 작업 최적화', description: '열화상 + 스타라이트 센서로 24시간 작업 가능' },
    { icon: Zap, title: '레이저 거리측정', description: '최대 1200m 거리측정으로 정확한 위치 파악' }
  ];

  const applications = [
    { title: '야간 수색 구조', description: '열화상 센서로 어둠 속에서도 사람과 동물을 탐지하여 수색 구조 작업을 수행합니다.' },
    { title: '태양광 패널 점검', description: '열화상으로 핫스팟과 불량 셀을 빠르게 감지하고, 줌 카메라로 세밀하게 확인합니다.' },
    { title: '전력 시설 점검', description: '송전선로, 변압기 등의 발열 부위를 열화상으로 조기 발견하여 사고를 예방합니다.' },
    { title: '소방 및 재난 대응', description: 'IP55 방진방수로 악천후에서도 작동하며, 열화상으로 화재 현장을 파악합니다.' }
  ];

  const specifications = [
    { label: '무게', value: '약 3.77kg (배터리 포함)' },
    { label: '최대 비행시간', value: '41분' },
    { label: '열화상', value: '640×512, 30Hz' },
    { label: '광각 카메라', value: '48MP, 1/2" CMOS' },
    { label: '줌 카메라', value: '12MP, 200배 줌' },
    { label: '레이저 거리계', value: '최대 1200m' },
    { label: '방진방수', value: 'IP55' },
    { label: '작동 온도', value: '-20°C ~ 50°C' }
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Product Overview</Badge>
            <h2 className="text-4xl font-bold mb-6">
              열화상이 통합된 올인원 솔루션
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              DJI Matrice 30T Combo는 640×512 열화상 센서, 48MP 광각 카메라, 200배 하이브리드 줌 카메라를 
              하나의 기체에 통합한 올인원 솔루션입니다. 야간 작업, 수색 구조, 시설물 점검 등 다양한 임무를 
              한 대로 완벽하게 수행할 수 있습니다.
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

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Applications</Badge>
            <h2 className="text-4xl font-bold mb-4">주요 활용 분야</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <Card key={index} variant="hover-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {app.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

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
                    <span className="font-medium text-muted-foreground">{spec.label}</span>
                    <span className="font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

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
            DJI Matrice 30T Combo<br />구매 상담을 시작하세요
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href="/contact"><Mail className="h-5 w-5" />견적 문의하기</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 bg-white/10 hover:bg-white/20 text-white border-white/30">
              <a href="tel:010-4790-6650"><Phone className="h-5 w-5" />전화 상담</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/products">모든 제품 보기<ArrowRight className="h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

