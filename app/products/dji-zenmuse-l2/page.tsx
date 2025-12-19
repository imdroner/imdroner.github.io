import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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
  Eye
} from 'lucide-react';

export const metadata = {
  title: 'DJI Zenmuse L2 | 아이엠드론',
  description: '고정밀 3D 데이터 수집을 위한 LiDAR 센서. 최대 250m 탐지, 초당 240,000 포인트',
};

export default function ZenmuseL2Page() {
  const keyPoints = [
    '초당 240,000 포인트',
    '최대 250m 탐지 거리',
    '5cm 정확도'
  ];

  const features = [
    { icon: Zap, title: '초당 240,000 포인트', description: '고속 데이터 수집으로 넓은 지역을 빠르게 스캔' },
    { icon: Eye, title: '최대 250m 탐지 거리', description: '장거리 스캔으로 높은 고도에서도 정밀한 데이터 수집' },
    { icon: Gauge, title: '5cm 수직 정확도', description: 'cm급 정확도로 고정밀 3D 모델링 가능' },
    { icon: Camera, title: 'RGB 카메라 통합', description: '20MP RGB 카메라로 컬러 정보 동시 수집' },
    { icon: Layers, title: '다중 반사 지원', description: '식생 아래 지형까지 측정 가능한 다중 반사' },
    { icon: Map, title: '실시간 모델링', description: '비행 중 실시간으로 점군 데이터 확인' }
  ];

  const applications = [
    { title: '지형 측량', description: '산림, 도로, 하천 등 대규모 지형을 빠르게 스캔하여 정밀한 DEM 생성' },
    { title: '건설 현장 측량', description: '토공량 계산, 구조물 검측, 진척도 관리를 위한 정밀 3D 데이터 수집' },
    { title: '송전선로 점검', description: '송전선과 주변 식생 간 거리를 정확하게 측정하여 안전 관리' },
    { title: '문화재 보존', description: '역사적 건축물과 유적지를 정밀하게 3D 스캔하여 디지털 보존' }
  ];

  const specifications = [
    { label: '탐지 거리', value: '최대 250m @ 10% 반사율' },
    { label: '점 측정률', value: '초당 240,000 포인트' },
    { label: '수직 정확도', value: '5cm @ 50m AGL' },
    { label: '수평 정확도', value: '10cm @ 50m AGL' },
    { label: 'RGB 카메라', value: '20MP, 4/3" CMOS' },
    { label: '다중 반사', value: '3회 반사 지원' },
    { label: 'FOV', value: '70.4° (수평) × 77.2° (수직)' },
    { label: '레이저 파장', value: '905nm (Class 1)' }
  ];

  const useCases = [
    {
      title: '도로 및 철도 측량',
      description: 'L2로 도로와 철도 주변을 스캔하여 선형 설계, 토공량 계산, 유지보수 계획 수립에 활용합니다. 다중 반사 기능으로 나무 아래 지형까지 정확하게 측정할 수 있습니다.'
    },
    {
      title: '송전선로 안전 관리',
      description: '송전선과 주변 나무 사이의 정확한 거리를 측정하여 접촉 위험을 사전에 파악합니다. 정기적인 스캔으로 식생 성장을 모니터링하고 예방적 관리를 수행합니다.'
    },
    {
      title: '광산 및 채석장 측량',
      description: '광산 전체를 정밀 스캔하여 채굴량을 정확하게 계산하고, 정기적인 측량으로 안전 관리를 수행합니다. cm급 정확도로 미세한 지형 변화도 감지할 수 있습니다.'
    },
    {
      title: '도시 3D 매핑',
      description: '도시 전체를 스캔하여 정밀한 3D 모델을 생성합니다. 건물, 도로, 교량 등의 정확한 위치와 형상 데이터를 수집하여 스마트시티 구축에 활용합니다.'
    }
  ];

  const workflow = [
    { step: '1', title: '경로 계획', description: 'DJI Terra에서 측량 지역을 지정하고 자동 경로 생성' },
    { step: '2', title: '자동 비행', description: 'Matrice 300/350 RTK에 장착하여 자동 비행 수행' },
    { step: '3', title: '데이터 수집', description: 'LiDAR 점군 데이터와 RGB 이미지 동시 수집' },
    { step: '4', title: '후처리', description: 'DJI Terra로 점군 데이터 처리 및 3D 모델 생성' }
  ];

  return (
    <main className="min-h-screen">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/team/team-hero.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center px-4 py-20">
          <Badge variant="hero" className="mb-6 text-base px-6 py-2">
            <Package className="h-4 w-4 mr-2" />
            LiDAR Sensor
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            DJI Zenmuse L2
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            고정밀 3D 데이터 수집을 위한 LiDAR 센서
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {keyPoints.map((point, index) => (
              <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                {point}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2 text-lg px-8 py-6">
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Product Overview</Badge>
            <h2 className="text-4xl font-bold mb-6">
              차세대 항공 LiDAR
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              DJI Zenmuse L2는 항공 측량을 위한 고성능 LiDAR 센서입니다. 최대 250m 탐지 거리와 
              초당 240,000 포인트의 점군 데이터 수집으로 정밀한 3D 모델링이 가능합니다. 
              RGB 카메라 통합으로 컬러 정보도 함께 수집할 수 있어 더욱 풍부한 데이터를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} variant="hover" className="text-center">
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
              <Card key={index} variant="hover">
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
            <Badge variant="outline" className="mb-4">Use Cases</Badge>
            <h2 className="text-4xl font-bold mb-4">실제 활용 사례</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} variant="hover">
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

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Workflow</Badge>
            <h2 className="text-4xl font-bold mb-4">작업 프로세스</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {workflow.map((item, index) => (
              <Card key={index} variant="hover" className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 text-xl font-bold">
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
            DJI Zenmuse L2<br />구매 상담을 시작하세요
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

