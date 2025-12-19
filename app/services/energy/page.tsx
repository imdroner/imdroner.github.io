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
  Zap,
  FileText,
  Map,
  Settings,
  Image as ImageIcon,
  File,
  BarChart3,
  ArrowRight,
  Phone,
  Mail,
  Thermometer,
  Wind,
  SunMedium,
  Factory
} from 'lucide-react';

export default function EnergyServicePage() {
  const keyPoints = [
    '광역 설비를 빠르게 스캔하는 항공·열화상 점검',
    '고소 작업·정전 시간을 줄이는 비접촉 점검 방식',
    '이상 패널·블레이드 위치를 좌표와 이미지로 리포트 제공'
  ];

  const overviewSteps = [
    { icon: Thermometer, title: '설비 효율 저하 최소화', description: '조기 발견으로 효율 저하를 최소화합니다' },
    { icon: Settings, title: '정비 인력·시간 절감', description: '드론 점검으로 인력과 시간을 절약합니다' },
    { icon: Shield, title: '정전·사고 리스크 감소', description: '비접촉 방식으로 안전하게 점검합니다' },
    { icon: BarChart3, title: '데이터 기반 의사결정', description: '정량 데이터로 정확한 판단을 지원합니다' }
  ];

  const applicationFields = [
    {
      icon: SunMedium,
      title: '태양광 발전소 패널 점검',
      description: '드론 열화상 촬영을 통해 Hot Spot, String Failure, 접속 불량, 오염·파손 패널 등을 빠르게 찾아냅니다. 문제 패널의 위치를 좌표·사진과 함께 리포트로 제공하여 교체·청소·보수 작업을 효율적으로 계획할 수 있습니다.'
    },
    {
      icon: Wind,
      title: '윈드터빈 블레이드·타워 점검',
      description: '고해상도 줌 카메라로 블레이드, 허브, 타워를 다양한 각도에서 촬영해 크랙, 도장 박리, 침식, 오염, 볼트·부품 이상을 확인합니다. 로프 작업·정지 시간 없이도 외관 상태를 정밀하게 기록할 수 있습니다.'
    },
    {
      icon: Zap,
      title: '송전선·변전소·배전 설비 점검',
      description: '철탑·송전선, 변전소의 주요 장비를 드론과 열화상 카메라로 촬영해 국부 과열, 이물질, 도체 처짐, 구조물 손상 등 전력 설비의 이상 징후를 탐지합니다.'
    },
    {
      icon: Factory,
      title: '산업 플랜트·저장탱크·배관 시설',
      description: '정유·화학·가스 플랜트 등의 저장탱크와 배관, 구조물을 상공에서 관찰하여 누유·부식·단열재 손상 등 위험 요소를 확인합니다. 시설 전경·레이아웃을 파악하는 데도 도움을 줍니다.'
    },
    {
      icon: Sparkles,
      title: '신재생·친환경 에너지 단지 통합 점검',
      description: '태양광·풍력·ESS·수소 등 복합 에너지 단지에서 여러 설비를 통합적으로 점검하고, 공간별 리스크·우선점검 구역을 지도 기반으로 정리해 드립니다.'
    }
  ];

  const strengths = [
    {
      title: '안전한 비접촉 점검',
      description: '사다리·로프·고소작업차 없이 드론으로 촬영해 인력의 추락·감전·폭발 위험을 크게 줄입니다. 운영 중 설비도 필요한 범위 내에서 안전하게 점검할 수 있습니다.'
    },
    {
      title: '열화상 + RGB 복합 분석',
      description: '열화상 카메라와 고해상도 RGB 카메라를 함께 사용해 온도 이상뿐 아니라 실제 육안 상태까지 하나의 데이터로 제공합니다. 이를 통해 고장 원인을 보다 정확히 판단할 수 있습니다.'
    },
    {
      title: '대규모 설비 신속 커버',
      description: '수백 MW급 태양광 단지, 수십 기 이상의 터빈 단지도 단시간에 촬영·스캔하여 점검 주기를 단축하고, 누락 없이 모든 설비를 확인할 수 있습니다.'
    },
    {
      title: '좌표·위치 기반 리포트',
      description: '이상이 발견된 패널이나 블레이드의 정확한 위치를 좌표·ID·사진과 함께 정리해 드려, 현장 보수팀이 즉시 해당 지점으로 이동하여 조치할 수 있습니다.'
    }
  ];

  const processSteps = [
    {
      step: 'Step 1',
      title: '상담 & 현장 분석',
      description: '설비 위치, 규모, 종류, 점검 목적(정기 점검, 신규 점검, 사후 점검 등)을 확인합니다.'
    },
    {
      step: 'Step 2',
      title: '비행 가능 여부 검토',
      description: '비행 제한 구역, 송전선·구조물·주변 지형 등 안전 요소를 검토하여 비행 계획을 수립하고, 필요 시 인허가 절차를 진행합니다.'
    },
    {
      step: 'Step 3',
      title: '비행 경로·촬영 모드 설계',
      description: '설비 배치도·지도 등을 활용해 최적의 고도, 속도, 중첩률, 촬영 패턴을 결정합니다. 태양광·열화상 촬영 시에는 일사 조건·시간대도 함께 고려합니다.'
    },
    {
      step: 'Step 4',
      title: '현장 촬영',
      description: '사전 안전 브리핑 후, 계획된 경로에 따라 드론 비행을 진행하면서 RGB 및 열화상 데이터를 수집합니다. 필요 시 현장 운영팀과 실시간으로 화면을 공유합니다.'
    },
    {
      step: 'Step 5',
      title: '데이터 처리·분석',
      description: '촬영 데이터를 정리해 이상 패널/블레이드/설비를 분류하고, 온도 편차·패턴 분석 등 에너지 설비에 특화된 분석 작업을 수행합니다.'
    },
    {
      step: 'Step 6',
      title: '리포트 & 후속 컨설팅',
      description: '점검 리포트와 원본 데이터를 전달하고, 우선 조치가 필요한 구간, 정기 점검 권장 주기, 향후 드론 점검 자동화 방안 등에 대해 컨설팅을 제공합니다.'
    }
  ];

  const deliverables = [
    {
      icon: Map,
      title: '이상 설비 목록 및 위치 정보',
      items: ['문제가 발견된 패널/블레이드/설비의 ID, 좌표, 구역 정보']
    },
    {
      icon: ImageIcon,
      title: 'RGB & 열화상 이미지 세트',
      items: ['각 이상 지점의 고해상도 사진과 열화상 이미지']
    },
    {
      icon: BarChart3,
      title: '온도·상태 분석 리포트',
      items: ['Hot Spot, String Failure 등 유형별 분류 및 심각도 수준']
    },
    {
      icon: FileText,
      title: '현장 기반 시각화 이미지',
      items: ['발전소/단지 평면도 위에 이상 구간을 표시한 지도 형식 이미지']
    },
    {
      icon: File,
      title: '원본 데이터(옵션)',
      items: ['고객사의 자체 분석·축적용으로 원본 사진/열화상 데이터 제공']
    }
  ];

  const faqs = [
    {
      question: 'Q1. 태양광 발전소는 어느 정도 크기부터 드론 점검이 효과적인가요?',
      answer: '수 MW급 이상의 중대형 발전소는 드론 점검의 효율이 특히 높지만, 수백 kW급 소규모 설비도 인력·시간을 줄이고 누락 없이 점검하는 데 도움이 됩니다. 규모에 따라 적정 점검 주기와 방식을 제안해 드립니다.'
    },
    {
      question: 'Q2. 드론 열화상 점검 정확도는 어느 정도인가요?',
      answer: '전문 열화상 카메라와 적절한 비행 고도·속도를 사용하면, Hot Spot이나 String 이상 등 주요 결함을 높은 신뢰도로 탐지할 수 있습니다. 다만 미세한 크랙이나 내부 결함은 추가 정밀 검사가 필요할 수 있으며, 이는 리포트에 명시해 드립니다.'
    },
    {
      question: 'Q3. 점검 중 설비를 멈춰야 하나요?',
      answer: '대부분의 경우 설비를 정지하지 않아도 점검이 가능합니다. 다만 열화상 촬영의 경우 발전 중일 때 온도 편차가 명확하게 나타나므로, 가동 중 점검을 권장합니다. 안전거리를 확보하여 운영에 지장을 주지 않습니다.'
    },
    {
      question: 'Q4. 점검 결과는 유지보수 업체와 공유해도 되나요?',
      answer: '네, 물론입니다. 납품된 점검 리포트와 데이터는 고객사 소유이므로, 유지보수 업체나 보험사 등과 자유롭게 공유하실 수 있습니다. 필요 시 보수 업체가 이해하기 쉬운 형태로 리포트 포맷을 조정해 드릴 수도 있습니다.'
    },
    {
      question: 'Q5. 정기 점검 계약도 가능한가요?',
      answer: '네, 가능합니다. 월·분기·반기·연간 단위 정기 점검 계약을 체결하시면 할인된 가격으로 서비스를 제공하며, 점검 이력을 시계열로 관리하여 설비 상태 변화 추이를 함께 분석해 드립니다.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-20 lg:py-32">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/energy.webp"
            alt="에너지 설비 배경"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <Badge variant="hero" className="mb-6">
              <Zap className="h-3 w-3 mr-1" />
              Energy Facility Inspection
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              에너지 설비 드론 점검
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              태양광 패널, 윈드터빈, 산업 플랜트까지.<br />
              아이엠드론은 드론과 열화상·고해상도 영상으로<br />
              에너지 설비의 이상 징후를 조기에 발견하는 점검 솔루션을 제공합니다.
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
            <h2 className="text-4xl font-bold mb-4">에너지 드론 점검 서비스란?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              아이엠드론의 에너지 드론 점검 서비스는 태양광 발전소, 윈드터빈, 송·변전 설비, 산업 플랜트 등을 대상으로 고해상도 RGB 및 열화상(적외선) 촬영을 수행하고, 그 데이터를 분석하여 고장·효율 저하·안전 위험 요인을 조기에 발견하는 솔루션입니다. 사람이 직접 올라가거나 넓은 부지를 일일이 걸어 다니지 않아도, 드론으로 단시간에 대규모 설비를 점검하여 설비 효율 저하 최소화, 정비 인력·시간 절감, 정전·사고 리스크 감소라는 효과를 얻을 수 있습니다.
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
              이런 에너지 설비에 적용합니다.
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
              에너지 설비 점검, 왜 드론과 아이엠드론일까요?
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
            <h2 className="text-4xl font-bold mb-4">점검 진행 프로세스</h2>
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
              어떤 결과를 받아볼 수 있나요?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <h3 className="text-2xl font-semibold mb-4">설비 규모와 점검 주기에 맞춘 맞춤 견적</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                에너지 설비 드론 점검 비용은 설비 규모(용량·면적), 설비 종류, 촬영·분석 범위, 점검 주기에 따라 달라집니다.
              </p>

              <p className="text-muted-foreground mb-6">
                아이엠드론은 다음과 같은 형태로 맞춤 패키지를 구성합니다:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  '소규모 태양광 발전소 1회 점검 패키지',
                  '중·대규모 발전소 정기(분기/반기/연간) 점검 패키지',
                  '풍력단지 블레이드 집중 점검 패키지',
                  '사고·고장 발생 시 긴급 점검 패키지',
                  '복합 에너지 단지 통합 점검 패키지'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground mb-6">
                설비 위치와 규모, 원하는 점검 방식(열화상 포함 여부 등)을 알려주시면 전문 엔지니어가 검토 후 상세 견적과 작업 제안서를 보내드립니다.
              </p>

              <Button size="lg" variant="primary-blue" asChild>
                <Link href="/contact">
                  에너지 설비 드론 점검 견적 문의하기
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
            에너지 설비의 '보이지 않던 위험'을 찾아드립니다.
          </h2>
          <p className="text-xl text-foreground dark:text-white mb-8 leading-relaxed">
            한 번의 드론 점검이 발전 효율 저하와 설비 사고를 막아 줄 수 있습니다.
          </p>
          <p className="text-lg text-foreground dark:text-white mb-8">
            아이엠드론과 함께 안전하고 효율적인 에너지 설비 운영을 시작해 보세요.<br />
            아이엠드론은 비행과 데이터, 그리고 설비 운용의 안전을 연결하는 에너지 점검 파트너입니다.
          </p>
          <Button size="lg" variant="primary-blue" asChild>
            <Link href="/contact">
              에너지 설비 드론 점검 상담하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

