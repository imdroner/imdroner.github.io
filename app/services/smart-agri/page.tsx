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
  Sprout,
  FileText,
  Map,
  Settings,
  Image as ImageIcon,
  File,
  BarChart3,
  ArrowRight,
  Phone,
  Mail,
  Leaf,
  TreeDeciduous,
  Flag,
  FlaskConical,
  Building
} from 'lucide-react';

export default function SmartAgriServicePage() {
  const keyPoints = [
    '드론·위성 기반 NDVI/식생지수 분석',
    '문제 구역을 지도 위에서 한눈에 확인',
    '농장·골프장 관리 전략 최적화(비료·관수·방제)'
  ];

  const overviewSteps = [
    { icon: Leaf, title: '생육 불량 구역', description: '생육이 저조한 지역을 찾아냅니다' },
    { icon: Settings, title: '수분·양분 부족 구역', description: '관리가 필요한 구역을 파악합니다' },
    { icon: Shield, title: '병해충 의심 구역', description: '병해충이 의심되는 구역을 조기 발견합니다' },
    { icon: BarChart3, title: '과도한 관리 구역', description: '불필요한 투입을 줄일 수 있습니다' }
  ];

  const applicationFields = [
    {
      icon: Sprout,
      title: '농경지·작물 생육 관리',
      description: '논·밭·밭농사·과수원·채소 재배지 등에서 작물의 생육 상태를 NDVI 등 식생지수로 분석하여 생육 불량, 생장 편차, 수확량 예측에 도움이 되는 구역을 확인합니다. 비료, 관수, 토양 개량, 품종 시험 등 의사결정에 활용할 수 있습니다.'
    },
    {
      icon: TreeDeciduous,
      title: '과수원·특용작물 관리',
      description: '과수·포도·차·인삼 등 고부가가치 작물의 수관 상태·생육 편차를 드론으로 촬영해 나무·구역별 건강 상태를 지도 기반으로 시각화합니다. 열악 구역을 먼저 관리해 전체 품질과 수량을 안정화할 수 있습니다.'
    },
    {
      icon: Flag,
      title: '골프장 페어웨이·그린 필드 관리',
      description: '골프장 페어웨이, 러프, 그린, 티박스의 잔디 상태를 드론·식생지수 분석으로 진단합니다. 배수 불량, 과습·건조, 잔디 스트레스, 토양 문제 등이 의심되는 구역을 찾아 보수 작업·관수·시비 전략을 구체적으로 세울 수 있습니다.'
    },
    {
      icon: FlaskConical,
      title: '시험포 관리·연구용 데이터 수집',
      description: '연구소, 농업 기술센터, 시험포 등에서 품종 비교, 재배 방식 비교, 시비·관수 실험 등에 대한 데이터를 드론 기반 NDVI 분석으로 정량화합니다. 논문·보고서·교육자료에 활용하기 좋은 시각화 자료를 제공합니다.'
    },
    {
      icon: Building,
      title: '대규모 농업법인·스마트팜 통합 관리',
      description: '넓은 면적을 운영하는 농업법인이나 여러 필드를 가진 운영자는 드론 분석을 통해 관리 우선순위와 투입 자원 배분을 효율적으로 할 수 있습니다. 스마트팜 데이터와 함께 연계하면 더 높은 수준의 정밀 관리도 가능합니다.'
    }
  ];

  const strengths = [
    {
      title: '드론 + 위성 데이터 활용',
      description: '현장 상황과 예산에 따라 고해상도 드론 촬영 기반 분석, 비교적 저렴한 위성 데이터 기반 분석을 병행하거나 단계별로 적용합니다. 필요에 따라 두 데이터를 시간·해상도 측면에서 보완해 활용합니다.'
    },
    {
      title: '현장 맞춤형 분석',
      description: '작물 종류, 재배 방식, 관리 목표(수량·품질·비용 절감 등)에 따라 적합한 식생지수(NDVI, GNDVI, NDRE 등)와 분석 기법을 적용합니다. 단순 지도 제공이 아니라, 현장 관리자가 바로 쓸 수 있는 해석과 권장 사항을 함께 제공합니다.'
    },
    {
      title: '농업·골프장 관리 경험',
      description: '아이엠드론은 실제 농가, 골프장, 시험 농장 등에서 드론 기반 분석을 진행한 경험을 바탕으로, 현장에서 부딪히는 문제(배수, 토양, 관수 시스템 등)를 함께 고려해 분석 결과를 해석합니다.'
    },
    {
      title: '교육·컨설팅 지원',
      description: '단발성 분석에 그치지 않고, 농장주·관리자가 스스로 데이터를 보고 판단할 수 있도록 교육과 컨설팅을 제공합니다. 필요 시 드론·센서 구매와 운용 교육까지 지원할 수 있습니다.'
    }
  ];

  const processSteps = [
    {
      step: 'Step 1',
      title: '상담 & 필드 현황 파악',
      description: '필드 종류(작물/골프장/시험포 등), 면적, 관리 목표, 기존 관리 방식, 문제점을 파악합니다.'
    },
    {
      step: 'Step 2',
      title: '데이터 소스·일정 결정',
      description: '드론 촬영 또는 위성 데이터 활용 여부를 결정하고, 생육 단계별 촬영 일정(필요 시 여러 차례)을 계획합니다.'
    },
    {
      step: 'Step 3',
      title: '현장 촬영·데이터 수집',
      description: '멀티스펙트럼 센서가 장착된 드론으로 필드를 촬영하고, 필요 시 여러 시기(생육 단계별)로 나누어 촬영합니다.'
    },
    {
      step: 'Step 4',
      title: 'NDVI 등 식생지수 분석',
      description: '수집된 데이터를 처리하여 NDVI, GNDVI, NDRE 등 적합한 식생지수를 계산하고, 필드 전체를 픽셀별/구역별로 시각화합니다.'
    },
    {
      step: 'Step 5',
      title: '문제 구역 도출 및 해석',
      description: '지수 값이 비정상적으로 낮거나 편차가 큰 구역을 중심으로, 생육 불량·스트레스·관리 과부족 의심 구역을 도출합니다. 현장 상황(지형, 토양, 배수, 관리 이력)을 고려해 해석을 돕습니다.'
    },
    {
      step: 'Step 6',
      title: '리포트 & 후속 컨설팅',
      description: '지도, 그래프, 설명이 포함된 리포트를 제공하고, 관리 우선순위, 추가 촬영·분석 필요 여부, 정기 모니터링 방안을 함께 논의합니다.'
    }
  ];

  const deliverables = [
    {
      icon: Map,
      title: 'NDVI 등 식생지수 지도',
      items: ['필드 전체를 색깔로 표현한 생육 상태 지도', '구역별로 값 범위·평균 등을 표 형태로 제공']
    },
    {
      icon: ImageIcon,
      title: '문제 구역 강조 지도',
      items: ['생육 불량·편차가 큰 구역을 강조 표시', '구역 ID/번호를 부여해 관리계획에 바로 반영 가능']
    },
    {
      icon: FileText,
      title: '요약 리포트',
      items: ['조사 개요(일시, 방법, 데이터 소스)', '주요 결과 요약 / 개선 필요 구역 / 권장 관리 방향', 'GeoTIFF, Shapefile 등 GIS용 데이터']
    },
    {
      icon: BarChart3,
      title: '비교 자료(옵션)',
      items: ['여러 시기 촬영/분석 결과를 비교한 트렌드 차트', '특정 관리(시비·방제 등) 전·후의 효과 비교 그래프']
    }
  ];

  const faqs = [
    {
      question: 'Q1. NDVI 분석만으로 병해충이나 원인을 정확히 알 수 있나요?',
      answer: 'NDVI 등 식생지수는 \'어디가 문제인지\'를 찾는 데 매우 유용하지만, 정확한 원인(병해충, 토양, 수분 등)은 현장 조사와 함께 판단해야 합니다. 아이엠드론은 문제 구역을 좁혀 드리고, 현장 관리자와 함께 원인 해석을 돕습니다.'
    },
    {
      question: 'Q2. 위성 데이터만 사용해도 효과가 있나요?',
      answer: '위성 데이터는 넓은 면적을 저렴하게 커버할 수 있지만, 해상도가 드론보다 낮고 날씨·촬영 주기에 제약이 있습니다. 예산이 제한적이거나 대규모 필드의 전반적 경향을 파악할 때는 위성 데이터로 시작하고, 상세 분석이 필요한 구역은 드론을 병행하는 방식을 추천합니다.'
    },
    {
      question: 'Q3. 계절·날씨에 따라 결과가 많이 달라지지 않나요?',
      answer: '네, 작물 생육 단계, 날씨(구름·비·바람), 촬영 시간에 따라 지수 값이 변동할 수 있습니다. 그래서 단일 촬영보다는 주기적인 모니터링이나 동일 조건에서의 비교 분석이 더 정확합니다. 아이엠드론은 촬영 조건을 통제하고, 결과 해석 시 환경 변수를 고려합니다.'
    },
    {
      question: 'Q4. 드론·센서 장비를 직접 구매해서 운용해도 되나요?',
      answer: '정기적으로 넓은 면적을 분석해야 하는 경우, 드론과 센서를 구매하여 자체 운용하는 것도 경제적일 수 있습니다. 아이엠드론은 장비 추천, 구매 대행, 운용 교육, 데이터 분석 소프트웨어 사용법까지 종합적으로 컨설팅해 드립니다.'
    },
    {
      question: 'Q5. 골프장/농장 관리자들이 이해하기 쉽게 설명해 주나요?',
      answer: '네, 전문 용어와 수치만 나열하는 것이 아니라, "이 구역은 배수 문제 의심", "저 구역은 시비 부족 가능성"처럼 현장에서 바로 쓸 수 있는 말로 설명합니다. 필요 시 현장 미팅을 통해 지도를 보면서 직접 설명해 드립니다.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-20 lg:py-32">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/smart-agri.webp"
            alt="스마트 농업 배경"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <Badge variant="hero" className="mb-6">
              <Sprout className="h-3 w-3 mr-1" />
              Smart Agriculture & NDVI Analysis
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              스마트 농업 &<br />NDVI 필드 분석
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              작물 재배지, 과수원, 논·밭, 골프장 필드까지.<br />
              아이엠드론은 드론과 식생지수(NDVI) 분석으로<br />
              눈에 보이지 않던 생육 상태를 데이터로 시각화합니다.
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
            <h2 className="text-4xl font-bold mb-4">스마트 농업 서비스란?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              아이엠드론의 스마트 농업 서비스는 드론과 멀티스펙트럼 센서, 위성 데이터를 활용해 작물·잔디·수목의 생육 상태를 식생지수(NDVI 등)로 분석하고, 생육 불량 구역, 수분·양분 부족 구역, 병해충 의심 구역, 관리가 과도하게 들어가는 구역을 지도 위에서 한눈에 보여주는 정밀 농업·필드 관리 솔루션입니다. 농업·골프장 관리자가 감(感)과 경험만이 아니라 수치와 지도를 기반으로 의사결정할 수 있게 돕는 것이 핵심입니다.
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
              이런 곳에서 특히 효과적입니다.
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
              스마트 농업, 왜 아이엠드론일까요?
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
            <h2 className="text-4xl font-bold mb-4">분석 진행 프로세스</h2>
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
              어떤 결과물을 제공받게 되나요?
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
              <h3 className="text-2xl font-semibold mb-4">필드 규모와 분석 빈도에 맞춘 맞춤형 패키지</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                스마트 농업 서비스 비용은 필드 면적, 데이터 소스(드론/위성), 분석 범위, 촬영/분석 횟수에 따라 달라집니다.
              </p>

              <p className="text-muted-foreground mb-6">
                아이엠드론은 다음과 같은 형태로 패키지를 구성합니다:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  '단일 필드 1회 NDVI 분석 패키지',
                  '생육 단계별(예: 2~3회) 촬영·분석 패키지',
                  '골프장 정기(월/분기) 필드 분석 패키지',
                  '연구·시험포 전용 분석 패키지',
                  '드론 도입 + 분석 교육·컨설팅 결합 패키지'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground mb-6">
                필드 종류, 면적, 분석 목적을 알려주시면 전문 담당자가 검토 후 맞춤 견적과 분석 플랜을 제안 드립니다.
              </p>

              <Button size="lg" variant="primary-blue" asChild>
                <Link href="/contact">
                  스마트 농업·필드 분석 견적 문의하기
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
            필드의 건강 상태를 하늘에서, 그리고 데이터로 확인해 보세요.
          </h2>
          <p className="text-xl text-foreground dark:text-white mb-8 leading-relaxed">
            이제는 감과 경험만이 아니라, 지도와 지수로 작물과 잔디의 상태를 보는 시대입니다.
          </p>
          <p className="text-lg text-foreground dark:text-white mb-8">
            아이엠드론의 스마트 농업 & 필드 분석 서비스로 비료·관수·방제·보수 작업의 우선순위를 세우고,<br />
            예산과 시간을 더 효율적으로 쓰는 정밀 관리를 시작해 보세요.<br /><br />
            <strong className="font-semibold">From Flight to Insight</strong>,<br />
            아이엠드론이 당신의 필드를 데이터로 관리하는 파트너가 되겠습니다.
          </p>
          <Button size="lg" variant="primary-blue" asChild>
            <Link href="/contact">
              스마트 농업·필드 분석 상담 요청하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

