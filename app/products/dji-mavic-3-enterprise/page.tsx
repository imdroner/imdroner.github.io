import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  CheckCircle2,
  Camera,
  Zap,
  Shield,
  Map,
  Settings,
  Sparkles,
  Phone,
  Mail,
  Package,
  ArrowRight,
  Clock,
  Gauge,
  Radio,
  MapPin
} from 'lucide-react';

export const metadata = {
  title: 'DJI Mavic 3 Enterprise | 아이엠드론',
  description: '산업용 촬영 및 점검에 최적화된 전문가급 기업용 드론. 4/3 CMOS 센서, 56배 하이브리드 줌, RTK 모듈 지원',
};

export default function Mavic3EnterprisePage() {
  const keyPoints = [
    '4/3 CMOS 20MP 고해상도 촬영',
    '56배 하이브리드 줌으로 원거리 점검',
    'RTK 모듈 지원으로 cm급 정확도'
  ];

  const applications = [
    {
      icon: Camera,
      title: '항공 촬영',
      description: '부동산, 관광지, 행사 등 전문가급 항공 촬영',
      details: [
        '4K 60fps 고화질 영상',
        'D-Log 프로페셔널 촬영',
        '하이퍼랩스 타임랩스',
        '파노라마 자동 촬영'
      ]
    },
    {
      icon: Shield,
      title: '시설물 점검',
      description: '교량, 건물, 송전탑 등 안전하고 효율적인 점검',
      details: [
        '56배 줌으로 근접 촬영',
        '손상 부위 정밀 확인',
        '고위험 구역 안전 점검',
        '점검 데이터 자동 기록'
      ]
    },
    {
      icon: MapPin,
      title: '정밀 측량',
      description: 'RTK 모듈로 고정밀 항공측량 수행',
      details: [
        'cm급 위치 정확도',
        '정사영상 제작',
        '3D 모델링 지원',
        'GIS 데이터 생성'
      ]
    },
    {
      icon: Zap,
      title: '긴급 대응',
      description: '재난 현장, 수색 구조 등 신속한 출동',
      details: [
        '15분 내 즉시 출동',
        '45분 장시간 비행',
        '실시간 영상 전송',
        '야간 촬영 지원'
      ]
    }
  ];

  const features = [
    {
      title: '4/3 CMOS 센서',
      description: '20MP 고해상도 이미지와 4K 60fps 동영상 촬영이 가능한 전문가급 센서를 탑재했습니다. D-Log 컬러 모드로 후보정에 최적화된 영상을 제공합니다.',
      icon: Camera
    },
    {
      title: '56배 하이브리드 줌',
      description: '12MP 줌 카메라를 통해 최대 56배 하이브리드 줌이 가능하여 안전거리를 유지하면서도 세밀한 피사체 촬영이 가능합니다.',
      icon: Sparkles
    },
    {
      title: 'RTK 모듈',
      description: 'cm급 정밀 측위가 가능한 RTK 모듈을 통해 항공측량, 정사영상 제작, 3D 모델링 등의 고정밀 작업을 수행할 수 있습니다.',
      icon: MapPin
    },
    {
      title: '45분 비행시간',
      description: '최대 45분의 비행시간으로 넓은 지역의 촬영이나 점검 작업을 한 번에 완료할 수 있어 작업 효율성이 뛰어납니다.',
      icon: Clock
    },
    {
      title: '15km 전송 거리',
      description: 'O3 Enterprise 전송 시스템으로 최대 15km 떨어진 거리에서도 안정적인 영상 전송과 드론 제어가 가능합니다.',
      icon: Radio
    },
    {
      title: '전방위 장애물 감지',
      description: '전방향 장애물 감지 시스템과 APAS 5.0으로 복잡한 환경에서도 안전한 비행이 가능하며 자동 회피 기능을 제공합니다.',
      icon: Shield
    }
  ];

  const useCases = [
    {
      title: '건설 현장 모니터링',
      description: 'RTK 정밀 측위와 고해상도 카메라로 건설 현장의 진척도를 정확하게 기록하고 분석합니다. 토공량 계산, 구조물 검측 등의 작업에 활용됩니다.'
    },
    {
      title: '태양광 패널 점검',
      description: '56배 줌 기능으로 태양광 패널의 손상, 오염, 핫스팟 등을 안전한 거리에서 정밀하게 확인할 수 있습니다. AI 분석과 연계하여 자동 결함 탐지도 가능합니다.'
    },
    {
      title: '교량 및 구조물 점검',
      description: '사람이 접근하기 어려운 교량 하부, 고층 건물 외벽 등을 줌 카메라로 안전하게 점검합니다. 균열, 부식, 손상 부위를 고해상도로 기록합니다.'
    },
    {
      title: '부동산 마케팅',
      description: '전문가급 영상 품질로 분양 현장, 리조트, 골프장 등의 항공 촬영을 수행합니다. 하이퍼랩스, 파노라마 등 다양한 촬영 모드를 지원합니다.'
    }
  ];

  const specifications = [
    { label: '무게', value: '915g (배터리 포함)' },
    { label: '최대 비행시간', value: '45분' },
    { label: '최대 전송거리', value: '15km (FCC)' },
    { label: '센서', value: '4/3 CMOS, 20MP' },
    { label: '동영상', value: '4K 60fps' },
    { label: '렌즈', value: '24mm, f/2.8-f/11' },
    { label: '줌 카메라', value: '12MP, 56배 하이브리드 줌' },
    { label: 'RTK 정확도', value: '수평: 1cm+1ppm, 수직: 1.5cm+1ppm' },
    { label: '최대 비행속도', value: '21 m/s (S모드)' },
    { label: '최대 상승속도', value: '8 m/s' },
    { label: '최대 하강속도', value: '6 m/s' },
    { label: '최대 경사각', value: '35°' },
    { label: '작동 온도', value: '-20°C ~ 50°C' },
    { label: 'GNSS', value: 'GPS+Galileo+BeiDou+GLONASS' },
    { label: '내부 저장소', value: '8GB' },
    { label: '외부 저장소', value: 'microSD (최대 2TB)' }
  ];

  const whyChoose = [
    {
      title: '휴대성과 성능의 완벽한 균형',
      description: '915g의 컴팩트한 무게로 이동과 보관이 편리하면서도, 전문가급 촬영 성능과 45분 비행시간을 제공합니다.'
    },
    {
      title: '다양한 산업 분야 적용',
      description: '항공촬영, 시설물 점검, 정밀 측량, 긴급 대응 등 한 대로 여러 산업 분야의 요구사항을 충족할 수 있습니다.'
    },
    {
      title: '전문가급 카메라 시스템',
      description: '4/3 CMOS 센서와 56배 줌 카메라로 일반 촬영부터 정밀 점검까지 모든 상황에 대응할 수 있습니다.'
    },
    {
      title: '검증된 안정성',
      description: 'DJI의 수년간 축적된 기술력과 전세계 수많은 기업들이 검증한 안정성으로 안심하고 업무에 활용할 수 있습니다.'
    }
  ];

  const includedItems = [
    'DJI Mavic 3 Enterprise 기체',
    '인텔리전트 플라이트 배터리',
    'RC Pro Enterprise 조종기',
    '배터리 충전 허브',
    '65W 포터블 충전기',
    '프로펠러 (한 세트)',
    '캐리백',
    'RTK 모듈 (옵션)',
    '1년 무상 A/S'
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/products/mavic3-enterprise.jpg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <Badge variant="hero" className="mb-6 text-base px-6 py-2">
            <Package className="h-4 w-4 mr-2" />
            Enterprise Drone
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            DJI Mavic 3 Enterprise
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mx-auto leading-relaxed mb-8">
            산업용 촬영 및 점검에 최적화된 전문가급 기업용 드론
          </p>
          <div className="flex flex-wrap  gap-4 mb-8">
            {keyPoints.map((point, index) => (
              <Badge key={index} variant="hero" className="text-base px-4 py-2">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                {point}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 ">
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
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Product Overview</Badge>
            <h2 className="text-4xl font-bold mb-6">
              휴대성과 전문성을 모두 갖춘<br />완벽한 기업용 드론
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              DJI Mavic 3 Enterprise는 컴팩트한 폼 팩터에 전문가급 촬영 성능을 담은 혁신적인 기업용 드론입니다. 
              4/3 CMOS 센서와 56배 하이브리드 줌 카메라로 일반 촬영부터 정밀 점검까지, RTK 모듈로 cm급 정확도의 
              항공측량까지 한 대로 모든 것을 수행할 수 있습니다. 45분의 긴 비행시간과 15km 전송 거리로 
              넓은 지역의 작업도 효율적으로 완료할 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <h2 className="text-4xl font-bold mb-4">다양한 산업 분야 활용</h2>
            <p className="text-xl text-muted-foreground">
              한 대의 드론으로 여러 산업 분야의 요구사항을 충족합니다
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

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Use Cases</Badge>
            <h2 className="text-4xl font-bold mb-4">실제 활용 사례</h2>
            <p className="text-xl text-muted-foreground">
              다양한 산업 현장에서 검증된 성능
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Why Choose</Badge>
            <h2 className="text-4xl font-bold mb-4">Mavic 3 Enterprise를 선택해야 하는 이유</h2>
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

      <Separator />

      {/* Package Contents */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Package Contents</Badge>
            <h2 className="text-4xl font-bold mb-4">패키지 구성품</h2>
            <p className="text-xl text-muted-foreground">
              기본 패키지에 포함된 구성품
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/products/mavic3-enterprise.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Badge variant="hero" className="mb-6 text-base px-6 py-2">
            <Mail className="h-4 w-4 mr-2" />
            Contact Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DJI Mavic 3 Enterprise<br />구매 상담을 시작하세요
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

      {/* Related Products */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            다른 제품도 함께 살펴보세요
          </p>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/products">
              모든 제품 보기
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

