import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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
  Cpu
} from 'lucide-react';

export const metadata = {
  title: 'DJI Dock 3 | 아이엠드론',
  description: '차량 탑재 지원, 24/7 원격 무인 운영을 위한 혁신적인 드론 도킹 스테이션',
};

export default function DJIDock3Page() {
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
      {/* Hero Section */}
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
            <Server className="h-4 w-4 mr-2" />
            Autonomous System
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            DJI Dock 3
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            차량 탑재 지원, 24/7 원격 무인 운영을 위한 혁신적인 드론 도킹 스테이션
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

      {/* Product Description */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">업계 최초 차량 탑재 지원 드론 도킹 시스템</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              DJI Dock 3는 Matrice 4D 또는 Matrice 4TD 고성능 드론과 함께 작동하여 24/7 원격 운영을 지원하는 차세대 자동화 시스템입니다. 
              업계 최초로 <strong>차량 탑재 배치</strong>를 지원하여 고정형 설치와 이동형 배치 모두 가능합니다. 
              DJI FlightHub 2의 지능형 기능과 통합되어 작업 시간 및 인건비를 대폭 절감하며, 
              완전 무인 자동 이착륙, 배터리 충전, 실시간 데이터 전송을 통해 효율성을 극대화합니다.
            </p>
          </div>

          {/* Price Card */}
          <Card className="mb-16 border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">시스템 가격</p>
                  <p className="text-4xl font-bold text-primary">₩17,853,000</p>
                  <p className="text-sm text-muted-foreground mt-2">* Dock 본체 + Matrice 4D/4TD 드론 포함</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/contact">
                      <Mail className="h-5 w-5" />
                      견적 문의
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="gap-2">
                    <a href="tel:010-4790-6650">
                      <Phone className="h-5 w-5" />
                      전화 상담
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">핵심 기능</h2>
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

      {/* System Components */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">시스템 구성</h2>
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

      {/* Advantages */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">DJI Dock 3의 장점</h2>
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

      {/* Applications */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">활용 분야</h2>
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

      {/* Specifications */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">제품 사양</h2>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">DJI Dock 3로 무인 자동 운영을 시작하세요</h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            24/7 원격 드론 운영으로 작업 효율을 극대화하고 비용을 절감하세요.
            <br />
            차량 탑재 지원으로 어디서든 유연하게 배치할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
              <Link href="/contact">
                <Mail className="h-5 w-5" />
                견적 문의하기
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 bg-white/10 hover:bg-white/20 border-white/30">
              <a href="tel:010-4790-6650">
                <Phone className="h-5 w-5" />
                010-4790-6650
              </a>
            </Button>
          </div>
          
          <Separator className="my-12 bg-white/20" />
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-80">무인 자동 운영</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">IP56</div>
              <div className="text-sm opacity-80">방진방수 등급</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">-35°C ~ 50°C</div>
              <div className="text-sm opacity-80">작동 온도 범위</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">함께 보면 좋은 제품</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="hover-lg">
              <CardHeader>
                <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center p-4">
                  <Package className="h-20 w-20 text-muted-foreground/30" />
                </div>
                <CardTitle>DJI Matrice 4D Series</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Dock 3와 완벽 호환되는 고성능 산업용 드론</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products">자세히 보기</Link>
                </Button>
              </CardContent>
            </Card>

            <Card variant="hover-lg">
              <CardHeader>
                <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center p-4">
                  <Cloud className="h-20 w-20 text-muted-foreground/30" />
                </div>
                <CardTitle>DJI FlightHub 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">원격 임무 관리 및 클라우드 플랫폼</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products">자세히 보기</Link>
                </Button>
              </CardContent>
            </Card>

            <Card variant="hover-lg">
              <CardHeader>
                <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center p-4">
                  <Battery className="h-20 w-20 text-muted-foreground/30" />
                </div>
                <CardTitle>DJI Battery Station</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">고속 배터리 충전 및 관리 솔루션</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products">자세히 보기</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

