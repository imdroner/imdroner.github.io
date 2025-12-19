import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  CheckCircle2,
  Wheat,
  Droplets,
  Gauge,
  Phone,
  Mail,
  Package,
  ArrowRight,
  Zap,
  Shield
} from 'lucide-react';

export const metadata = {
  title: 'DJI Agras T40 | 아이엠드론',
  description: '대규모 농업 작업을 위한 고성능 농업용 드론. 40kg 페이로드, 시간당 300무 작업',
};

export default function AgrasT40Page() {
  const keyPoints = [
    '40kg 대용량 페이로드',
    '시간당 300무 작업',
    '완전 자동 작업 시스템'
  ];

  const features = [
    { icon: Droplets, title: '40kg 페이로드', description: '40리터 액체 또는 50kg 고체 살포 가능, 한 번에 넓은 지역 작업' },
    { icon: Gauge, title: '시간당 300무 작업', description: '듀얼 원자 스프레이 시스템으로 초고속 작업 효율' },
    { icon: Wheat, title: '지형 추적 레이더', description: '작물과 지형을 자동 인식하여 최적의 살포 높이 유지' },
    { icon: Zap, title: '완전 자동 작업', description: 'RTK + AI로 경로 계획부터 살포까지 완전 자동화' },
    { icon: Shield, title: '스마트 장애물 회피', description: '전방향 감지로 장애물을 자동으로 회피하며 안전 작업' },
    { icon: Package, title: '듀얼 배터리 시스템', description: '핫스왑 기능으로 중단 없이 연속 작업 가능' }
  ];

  const applications = [
    { title: '농약 살포', description: '논, 밭, 과수원 등 모든 작물에 균일한 농약 살포로 방제 효과 극대화' },
    { title: '비료 살포', description: '액비, 고체 비료를 정밀하게 살포하여 작물 생육 촉진' },
    { title: '파종 작업', description: '벼, 옥수수 등의 씨앗을 자동으로 파종하여 인력 절감' },
    { title: '작황 모니터링', description: 'FPV 카메라로 작물 생육 상태를 실시간 확인 및 기록' }
  ];

  const specifications = [
    { label: '최대 페이로드', value: '40kg (액체) / 50kg (고체)' },
    { label: '작업 효율', value: '시간당 300무 (약 10만㎡)' },
    { label: '스프레이 폭', value: '11m (듀얼 노즐)' },
    { label: '탱크 용량', value: '40L (액체) / 50kg (고체)' },
    { label: '비행시간', value: '최대 18분 (풀 탱크)' },
    { label: '작동 온도', value: '-20°C ~ 45°C' },
    { label: 'RTK 정확도', value: 'cm급' },
    { label: '장애물 감지', value: '전방향 레이더' }
  ];

  const benefits = [
    { title: '비용 절감', description: '인력 대비 10배 빠른 작업 속도로 인건비 대폭 절감' },
    { title: '균일한 살포', description: '정밀 제어로 작물 전체에 균일하게 살포하여 방제 효과 향상' },
    { title: '작물 보호', description: '무접촉 작업으로 작물 손상 없이 살포 작업 가능' },
    { title: '안전한 작업', description: '작업자가 농약에 직접 노출되지 않아 안전' }
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
            Agricultural Drone
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            DJI Agras T40
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            대규모 농업 작업을 위한 고성능 농업용 드론
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {keyPoints.map((point, index) => (
              <Badge key={index} variant="hero" className="text-base px-4 py-2">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                {point}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Product Overview</Badge>
            <h2 className="text-4xl font-bold mb-6">
              스마트 농업의 시작
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              DJI Agras T40는 40kg 페이로드와 듀얼 원자 스프레이 시스템으로 시간당 300무(약 10만㎡)의 
              초고속 작업이 가능한 농업용 드론입니다. 지형 추적 레이더와 RTK 정밀 측위로 작물 손상 없이 
              균일한 살포 작업을 수행하며, 완전 자동 작업 시스템으로 인력을 최소화합니다.
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
            <h2 className="text-4xl font-bold mb-4">다양한 농업 작업</h2>
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
            <Badge variant="outline" className="mb-4">Benefits</Badge>
            <h2 className="text-4xl font-bold mb-4">Agras T40의 장점</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="hover-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
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
            DJI Agras T40<br />구매 상담을 시작하세요
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="primary-blue" className="gap-2">
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

