import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Award,
  CheckCircle2,
  Shield,
  Sparkles,
  Radio,
  FileText,
  Map,
  Settings,
  Image as ImageIcon,
  File,
  BarChart3,
  ArrowRight,
  Phone,
  Mail,
  MonitorPlay,
  Users,
  AlertTriangle,
  Waves,
  Building,
  Flame
} from 'lucide-react';

export default function ControlServicePage() {
  const keyPoints = [
    '실시간 영상 스트리밍·지도 기반 위치 표시',
    '단일·다중 드론 관제 및 상황 공유',
    '공공·민간 현장에 맞춘 관제 시스템 커스터마이징'
  ];

  const overviewSteps = [
    { icon: Radio, title: '단일·다중 드론 운용', description: '여러 대의 드론을 동시에 관제합니다' },
    { icon: MonitorPlay, title: '현장 상황 실시간 공유', description: '상황실과 현장이 실시간으로 연결됩니다' },
    { icon: AlertTriangle, title: '유사시 빠른 의사결정 지원', description: '위험 상황 발생 시 즉각 대응합니다' },
    { icon: BarChart3, title: '데이터 기반 관제 운영', description: '관제 이력을 축적하고 분석합니다' }
  ];

  const applicationFields = [
    {
      icon: Users,
      title: '대규모 행사·축제·집회 안전관리',
      description: '도심 행사, 축제, 스포츠 경기, 대규모 집회 등에서 드론으로 인파 흐름, 차량 동선, 위험 구역을 상공에서 모니터링합니다. 관제 화면을 통해 상황실·안전요원·운영팀이 동시에 현황을 공유할 수 있습니다.'
    },
    {
      icon: Waves,
      title: '항만·연안·불법어선 단속',
      description: '해상·연안 구역을 드론으로 순찰하면서 불법어선, 위험 선박, 해양 사고 등을 감시하고, 영상과 위치 정보를 실시간으로 공유해 신속한 대응을 지원합니다.'
    },
    {
      icon: Building,
      title: '산업 시설·공사현장 안전 관제',
      description: '산업단지, 플랜트, 대규모 공사현장에서 위험 구역·중장비 동선·작업 인원을 상공에서 모니터링합니다. 추락·충돌·화재 등 안전사고 예방 및 사고 시 상황 파악에 도움을 줍니다.'
    },
    {
      icon: Flame,
      title: '산불·재난 등 광역 감시',
      description: '산림·산지·농경지에서의 산불 감시, 재난 발생 지역 파악에 드론 관제를 활용해 연기·불꽃·피난 경로·차량 정체 상황을 빠르게 확인합니다. 지자체·소방·유관기관과 협업하여 대응력을 높일 수 있습니다.'
    },
    {
      icon: Shield,
      title: '치안·공공안전·순찰 지원',
      description: '도시·주거지역·공원·관광지 등에서 드론을 활용한 순찰 감시를 진행하고, 관제센터에서 현장 상황을 모니터링합니다. 기존 CCTV가 닿지 않는 사각지대를 보완하는 공중 감시 수단으로 활용됩니다.'
    }
  ];

  const strengths = [
    {
      title: '현장 맞춤형 관제 설계',
      description: '행사·공사·해상·도시 등 현장 유형에 따라 관제 방식과 UI를 설계합니다. 필요한 정보를 선별해 실제 운영에 효율적인 화면 구성으로 제공합니다.'
    },
    {
      title: '실시간 영상 & 데이터 통합 뷰',
      description: '드론 영상, 위치 정보, 고도, 배터리 상태, 비행 경로 등을 한 화면에서 통합 확인할 수 있는 관제 화면을 제공합니다. 상황실·현장 요원·의사결정권자가 같은 정보를 공유할 수 있습니다.'
    },
    {
      title: '단일·다중 드론 운영 지원',
      description: '한 대의 드론만 감시하는 것이 아니라, 상황에 따라 여러 대의 드론을 동시에 운영하면서 각각의 위치와 영상을 한눈에 관리할 수 있습니다. 넓은 구역을 효율적으로 커버할 수 있습니다.'
    },
    {
      title: '관제 이력 축적 & 분석',
      description: '운영 이력, 주요 이벤트, 영상 클립을 기록하여 사후 분석과 보고에 활용할 수 있습니다. 정기 관제 시 과거 데이터를 참고해 더 나은 운영 방식을 개선할 수 있습니다.'
    }
  ];

  const processSteps = [
    {
      step: 'Step 1',
      title: '상담 & 현장 분석',
      description: '관제 목적(안전·감시·이벤트 관리 등), 운영 기간(상시/기간한정), 관제 장소, 관련 인력 구성 등을 파악합니다.'
    },
    {
      step: 'Step 2',
      title: '관제 시나리오·구역 설계',
      description: '관제할 구역과 우선순위, 드론 배치 방식, 비행 패턴, 상황 발생 시 보고·대응 흐름을 정의한 관제 시나리오를 함께 설계합니다.'
    },
    {
      step: 'Step 3',
      title: '장비·시스템 구성 계획',
      description: '드론 장비, 영상 전송 장비 및 네트워크 환경, 관제 화면 구성 등을 고려하여 필요한 장비와 시스템 구성을 제안합니다.'
    },
    {
      step: 'Step 4',
      title: '시범 운영·테스트',
      description: '본격 운영 전, 실제 환경에서 시범 관제를 진행하여 영상 품질, 지연 시간, 통신 안정성, 화면 구성 등을 점검하고 보완합니다.'
    },
    {
      step: 'Step 5',
      title: '본 운영·실시간 관제',
      description: '운영 기간 동안 관제 시나리오에 따라 드론을 운용하고, 상황실·현장과 연계하여 실시간으로 감시·상황 공유를 수행합니다.'
    },
    {
      step: 'Step 6',
      title: '결과 리포트 & 개선 제안',
      description: '운영 결과를 정리해 핵심 이벤트, 주요 영상 클립, 개선 사항 등을 리포트로 제공하고, 향후 정기 관제·상시 운영으로 확장할 수 있는 방안을 함께 제안합니다.'
    }
  ];

  const deliverables = [
    {
      icon: FileText,
      title: '관제 리포트',
      items: ['운영 기간 동안의 주요 상황·이벤트 정리', '관제 구역·시간대별 이슈 요약']
    },
    {
      icon: ImageIcon,
      title: '핵심 영상 클립 및 스냅샷',
      items: ['주요 상황을 담은 드론 영상 클립과 스틸 이미지', '교육·보고·홍보용으로 활용 가능']
    },
    {
      icon: Settings,
      title: '관제 시나리오 및 개선 제안서',
      items: ['관제 방식·동선·배치에 대한 회고', '다음 운영 시 개선 포인트와 추천 운영안']
    },
    {
      icon: BarChart3,
      title: '시스템 구성·운영 로그',
      items: ['장비·통신·운영 횟수 등 기초 데이터 제공']
    }
  ];

  const faqs = [
    {
      question: 'Q1. 기존 CCTV 시스템과 함께 사용할 수 있나요?',
      answer: '네, 드론 영상은 기존 CCTV와 보완 관계에 있습니다. CCTV가 고정 시야를 담당한다면, 드론은 사각지대나 넓은 구역을 유동적으로 커버합니다. 상황실 화면 구성 시 CCTV와 드론 피드를 함께 배치하는 것도 가능합니다.'
    },
    {
      question: 'Q2. 통신 환경이 불안정한 곳에서도 관제가 가능한가요?',
      answer: '기본적으로는 안정적인 LTE/5G 또는 전용 통신망이 필요합니다. 통신 환경이 열악한 경우, 로컬 녹화 후 사후 분석 방식이나 이동형 중계 장비를 활용하는 방안을 검토할 수 있습니다. 현장 조건에 따라 최적 방식을 제안해 드립니다.'
    },
    {
      question: 'Q3. 관제 전용 드론을 따로 구매해야 하나요?',
      answer: '아이엠드론이 보유한 관제 대응 드론을 활용한 서비스 형태로 제공하므로, 고객사가 별도로 드론을 구매하지 않아도 됩니다. 다만 장기 상시 운영이 필요한 경우, 드론 구매 및 시스템 구축 형태로 전환하는 것도 가능합니다.'
    },
    {
      question: 'Q4. 상시 관제센터 구축도 가능합니까?',
      answer: '네, 가능합니다. 단기 이벤트성 관제뿐 아니라, 공공기관·지자체·대형 시설 등에서 상시 운영 가능한 드론 관제센터 구축을 컨설팅하고, 필요 시 시스템 설치·인력 교육·운영 매뉴얼 제공까지 지원합니다.'
    },
    {
      question: 'Q5. 법적·규제 측면에서 문제가 되지 않나요?',
      answer: '드론 비행은 항공안전법 등 관련 법규를 준수해야 하며, 특히 도심·행사장·특정 시설에서는 사전 허가가 필요할 수 있습니다. 아이엠드론은 비행 허가 협의, 개인정보 보호, 촬영 동의 등 법적 절차를 사전에 검토하고 진행합니다.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-20 lg:py-32">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/control.webp"
            alt="드론 관제 배경"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <Badge variant="hero" className="mb-6">
              <Radio className="h-3 w-3 mr-1" />
              Drone Control & Real-time Monitoring
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              드론 관제·실시간 모니터링
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              대규모 행사, 산업 현장, 해상·연안 감시, 공공안전까지.<br />
              아이엠드론은 드론을 실시간으로 관제하고 현장 상황을 모니터링하는<br />
              드론 관제·영상 플랫폼 서비스를 제공합니다.
            </p>

            {/* 포인트 리스트 */}
            <div className="space-y-3 mb-10">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-white/90">{point}</p>
                </div>
              ))}
            </div>

            {/* 버튼 */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="primary-blue" asChild>
                <Link href="#contact">
                  상담하기
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="hero-outline" asChild>
                <Link href="/projects">
                  포트폴리오
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 특징 카드 (4개) */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="hover-lg" className="text-center">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Certified Drone Experts</h3>
                <p className="text-sm text-muted-foreground">
                  국가자격취득·보험 가입 전문 조종자가 직접 운영합니다.
                </p>
              </CardContent>
            </Card>

            <Card variant="hover-lg" className="text-center">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Safety First Operation</h3>
                <p className="text-sm text-muted-foreground">
                  비행 전 사전 점검과 리스크 분석으로 안전 우선 운영 원칙을 지킵니다.
                </p>
              </CardContent>
            </Card>

            <Card variant="hover-lg" className="text-center">
              <CardContent className="pt-6">
                <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Industry-Proven Projects</h3>
                <p className="text-sm text-muted-foreground">
                  다양한 산업 현장에서 검증된 실적을 보유하고 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card variant="hover-lg" className="text-center">
              <CardContent className="pt-6">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expert Pre-Sales Support</h3>
                <p className="text-sm text-muted-foreground">
                  구매 전 상담을 통해 용도에 맞는 제품을 추천해드립니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Overview (서비스 개요) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Overview</Badge>
            <h2 className="text-4xl font-bold mb-4">관제서비스란?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              아이엠드론의 관제서비스는 드론으로 수집한 영상·센서 데이터를 실시간으로 전송·모니터링하고, 지도·지형·시설 정보와 함께 한 화면에서 관리할 수 있는 드론 관제·상황 관리 솔루션입니다. 단일 드론의 단순 비행을 넘어, 여러 대 드론의 위치·고도·배터리 상태 파악, 현장의 영상·사진·이벤트를 실시간으로 공유, 위험 상황·이상 징후 발생 시 빠른 의사결정 지원까지 연결하여, 현장을 '보는 것'을 넘어 '관리하는 것'으로 확장합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} variant="hover-xl">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* 주요 적용 분야 */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Application Fields</Badge>
            <h2 className="text-4xl font-bold mb-4">주요 적용 분야</h2>
            <p className="text-xl text-muted-foreground">
              이런 현장에서 관제서비스가 활약합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationFields.slice(0, 3).map((field, index) => {
              const Icon = field.icon;
              return (
                <Card key={index} variant="hover-xl">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{field.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{field.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {applicationFields.slice(3).map((field, index) => {
              const Icon = field.icon;
              return (
                <Card key={index + 3} variant="hover-xl">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{field.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{field.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* 아이엠드론의 강점 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Strength</Badge>
            <h2 className="text-4xl font-bold mb-4">아이엠드론의 강점</h2>
            <p className="text-xl text-muted-foreground">
              아이엠드론 관제는 무엇이 다를까요?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strengths.map((strength, index) => (
              <Card key={index} variant="hover-xl">
                <CardHeader>
                  <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-xl">{strength.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* 촬영 진행 프로세스 */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Process</Badge>
            <h2 className="text-4xl font-bold mb-4">관제 진행 프로세스</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((process, index) => (
              <Card key={index} variant="hover-lg">
                <CardHeader>
                  <Badge className="mb-3 w-fit">{process.step}</Badge>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* 제공 결과물 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Deliverables</Badge>
            <h2 className="text-4xl font-bold mb-4">제공 결과물</h2>
            <p className="text-xl text-muted-foreground">
              관제서비스 후 어떤 결과물을 받나요?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} variant="hover-xl">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.items.map((text, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{text}</span>
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

      {/* 견적 안내 */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Estimate</Badge>
            <h2 className="text-4xl font-bold mb-4">견적은 이렇게 산출됩니다</h2>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-semibold mb-4">현장 규모와 기간에 맞춘 맞춤 견적</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                드론 관제서비스 비용은 운영 기간(시간/일/장기), 관제 구역 규모, 드론 대수, 인력 구성, 시스템 요구 수준에 따라 달라집니다.
              </p>

              <p className="text-muted-foreground mb-6">
                아이엠드론은 다음과 같은 형태로 패키지를 구성합니다:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  '단일 행사·축제 기간 한정 관제 패키지',
                  '산업 현장·공사현장 단기 안전 관제 패키지',
                  '항만·연안·도시 지역 정기 순찰·관제 패키지',
                  '재난·산불 등 비상 상황 대응용 관제 솔루션 구축 컨설팅'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground mb-6">
                현장 위치, 운영 목적, 예상 기간, 필요 시스템 수준을 알려주시면 전문 담당자가 검토 후 맞춤 견적과 관제 운영 시나리오를 함께 제안드립니다.
              </p>

              <Button size="lg" variant="primary-blue" asChild>
                <Link href="/contact">
                  드론 관제서비스 견적 문의하기
                  <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold mb-4">자주 묻는 질문</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-lg font-medium hover:text-primary text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Separator />

      {/* CTA (행동 유도) */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground dark:text-white">
            현장을 '보는 것'을 넘어, '통합해서 관리'해 보세요.
          </h2>
          <p className="text-xl text-foreground dark:text-white mb-8 leading-relaxed">
            드론 한 대의 비행이 아니라, 여러 현장과 상황을 동시에 바라보고<br />
            빠르게 대응할 수 있는 드론 관제·모니터링 체계가 필요하다면,<br />
            아이엠드론이 함께 설계하겠습니다.
          </p>
          <p className="text-lg text-foreground dark:text-white mb-8">
            <strong className="font-semibold">From Flight to Insight</strong>,<br />
            아이엠드론은 비행, 데이터, 그리고 현장의 안전·운영을 하나로 잇는 관제 파트너입니다.
          </p>
          <Button size="lg" variant="primary-blue" asChild>
            <Link href="/contact">
              드론 관제서비스 상담 요청하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

