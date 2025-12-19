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
  Building2,
  FileText,
  Map,
  Settings,
  Layers,
  Image as ImageIcon,
  File,
  BarChart3,
  ArrowRight,
  Phone,
  Mail,
  Ruler,
  Box,
  Camera
} from 'lucide-react';

export default function ConstructionServicePage() {
  const keyPoints = [
    '정사영상(Orthomosaic)·3D 모델·포인트클라우드 제작',
    '토공량·면적·거리 등 정량 분석 지원',
    '공정 모니터링, 시공 전·후 비교, 안전 점검까지 원스톱'
  ];

  const overviewSteps = [
    { icon: FileText, title: '공정 진행 상황 기록', description: '주기적 드론 촬영으로 공사 진행 상황을 시각화합니다' },
    { icon: Ruler, title: '토공량 파악 및 설계 대비 비교', description: '정밀한 측량 데이터로 토공량을 계산합니다' },
    { icon: Shield, title: '구조물 및 위험 구역 점검', description: '접근 어려운 구간을 안전하게 점검합니다' },
    { icon: Camera, title: '보고용 자료 제작', description: '발주처·투자자 보고용 고품질 자료를 제작합니다' }
  ];

  const shootingFields = [
    {
      title: '토목·건축 공사 현장 공정관리',
      description: '도로, 택지, 산업단지, 아파트 단지 등 대규모 공사 현장을 주기적으로 드론으로 촬영해 상공에서 전체 공정을 한눈에 확인합니다. 주간·월간 공정 리포트를 통해 발주처 보고와 내부 회의를 효율화합니다.'
    },
    {
      title: '항공측량 & 토공량 분석',
      description: '드론으로 촬영한 사진을 기반으로 정사영상(Orthomosaic), 고도모델(DSM/DTM), 포인트클라우드를 생성합니다. 이를 활용해 토공량·절·성토량·면적·거리 등을 계산하고, 설계 대비 차이를 쉽게 파악할 수 있습니다.'
    },
    {
      title: '구조물·시설물 점검',
      description: '교량, 옹벽, 고가도로, 플랜트 구조물 등 접근이 어려운 구간을 드론으로 근접 촬영하여 균열·누수·변형 여부를 확인합니다. 붕괴 우려 구간, 고소 작업이 필요한 곳을 사전 점검하는 용도로 활용할 수 있습니다.'
    },
    {
      title: '문화재·역사 건축물 디지털 기록',
      description: '문화재, 전통 건축물, 상징성 있는 건물들을 항공사진과 3D 모델로 정밀하게 기록하여 디지털 아카이브 및 디지털트윈 구축에 활용합니다. 보수·복원 계획 수립, 방문객 안내 콘텐츠 제작에도 연계할 수 있습니다.'
    },
    {
      title: '홍보·보고용 항공 이미지 & 영상',
      description: '완공 전·후, 분양·분양홍보, 발주처 보고용으로 고해상도 항공사진과 드론 영상을 함께 제작하여 제안서, 브로셔, 영상 PT, 홈페이지 등 다양한 채널에서 활용할 수 있습니다.'
    }
  ];

  const strengths = [
    {
      title: '건설·토목 현장 이해 기반 촬영·분석',
      description: '아이엠드론은 단순 촬영이 아니라 시공사·감리·발주처가 실제로 필요로 하는 데이터와 뷰포인트를 기준으로 서비스를 설계합니다. 공정표, 설계도, 시방서 등과 연계한 촬영 계획 수립이 가능합니다.'
    },
    {
      title: '고정밀 항공측량 워크플로우',
      description: '드론 촬영 후, 전문 포토그래메트리 소프트웨어를 활용해 정사영상, 3D 모델, 고도모델, 포인트클라우드를 생성합니다. GCP(지상 기준점) 설치를 통해 정확도를 높이고, GIS·CAD·BIM 시스템과 연동 가능한 포맷으로 제공합니다.'
    },
    {
      title: '3D 모델·토공량 분석 등 정량 데이터 제공',
      description: '단순 영상이 아닌, 실제 설계·시공 검토에 쓸 수 있는 수치 데이터를 제공합니다. 토공량 산정, 면적·거리 측정, 경사 분석, Before-After 비교 등 정량 분석 리포트를 함께 제공해 의사결정을 지원합니다.'
    },
    {
      title: '주기적 촬영을 통한 공정관리 최적화',
      description: '일회성 촬영이 아닌, 주·월 단위 정기 촬영 프로그램을 통해 공정 변화를 시계열로 기록하고, 타임랩스 영상과 비교 분석 자료를 제공합니다. 지연 구간 파악, 일정 관리, 품질 점검에 효과적입니다.'
    }
  ];

  const processSteps = [
    {
      step: 'Step 1',
      title: '상담 & 현장 분석',
      description: '현장 위치, 면적, 촬영 목적(공정관리/측량/점검 등), 필요한 데이터 형식을 파악하고 최적 촬영 방법을 제안합니다.'
    },
    {
      step: 'Step 2',
      title: '촬영 계획 수립',
      description: '설계도, 공정표, 현장 위치 및 접근 방법을 공유받아 비행 범위와 촬영 고도, 중첩률, 참조점 등을 설계합니다.'
    },
    {
      step: 'Step 3',
      title: '비행 가능 여부 검토',
      description: '비행 제한 구역 여부, 고도 제한, 안전 이슈를 검토하고 필요 시 관할기관 협의·허가 절차를 진행합니다.'
    },
    {
      step: 'Step 4',
      title: '현장 촬영',
      description: '사전 안전 브리핑 후, 계획된 경로에 따라 드론 자동·수동 비행을 병행하여 촬영합니다.'
    },
    {
      step: 'Step 5',
      title: '데이터 처리·분석',
      description: '촬영 데이터를 정리해 정사영상, 고도모델, 3D 모델, 토공량 분석 결과 등을 생성하고, 요청 목적에 맞게 시각자료와 수치를 정리합니다.'
    },
    {
      step: 'Step 6',
      title: '납품 & 후속 컨설팅',
      description: '최종 결과물을 전달하고, 추가 촬영 주기, 공정관리 방식, BIM/기존 시스템과의 연계 등에 대한 후속 컨설팅을 진행합니다.'
    }
  ];

  const deliverables = [
    {
      icon: Map,
      title: '정사영상',
      items: ['정사영상 (Orthomosaic)', 'GeoTIFF, JPG 등 포맷 / GIS, CAD, BIM 시스템에서 활용 가능']
    },
    {
      icon: Layers,
      title: '고도모델 & 포인트클라우드',
      items: ['고도모델(DSM/DTM) & 포인트클라우드', '지형 분석, 배수 계획, 토공량 산정, 경사 분석 등에 사용']
    },
    {
      icon: Box,
      title: '3D 모델',
      items: ['3D 모델(메쉬 모델)', '공정 회의, 발주처·투자자 프레젠테이션, VR/AR 적용 등']
    },
    {
      icon: BarChart3,
      title: '분석 리포트',
      items: ['토공량·면적·거리 분석 리포트', '주요 구간별 수치와 비교 결과를 정리한 보고서(PDF, 이미지)']
    },
    {
      icon: ImageIcon,
      title: '공정 진행 비교 이미지/영상',
      items: ['정기 촬영을 기반으로 한 Before-After, 타임랩스, 동영상 클립']
    }
  ];

  const faqs = [
    {
      question: 'Q1. 기존 측량과 비교했을 때 정확도가 어느 정도인가요?',
      answer: '기준점 설치 및 적절한 촬영·처리 과정을 거치면, 일반적인 토공량·면적 분석에는 충분한 수준의 정확도를 확보할 수 있습니다. 설계·시공 검토 등 용도에 따라 요구 수준이 다르므로, 상담 시 목적을 알려주시면 적합한 방식과 한계를 함께 안내해 드립니다.'
    },
    {
      question: 'Q2. 공사 중 장비·인력과의 충돌 위험은 없나요?',
      answer: '촬영 전 현장 관계자와 비행 시간·구역을 협의하고, 작업자·장비가 없는 시간대나 안전거리를 확보한 상태에서 촬영합니다. 필요 시 안전 관리자를 배치하고, 비상 연락 체계를 구축하여 위험을 최소화합니다.'
    },
    {
      question: 'Q3. BIM이나 기존 공정관리 시스템과 연동할 수 있나요?',
      answer: '네, 가능합니다. 정사영상, 3D 모델, 포인트클라우드 등을 IFC, DWG, LAS 등 표준 포맷으로 제공하여 Revit, Civil 3D, Navisworks 등 BIM 도구와 연계할 수 있습니다. 공정관리 시스템에 맞춰 데이터 형식을 커스터마이징할 수도 있습니다.'
    },
    {
      question: 'Q4. 한 번만 촬영해도 효과가 있나요, 아니면 주기적으로 해야 하나요?',
      answer: '목적에 따라 다릅니다. 단순 준공 기록·홍보용이라면 1회 촬영으로 충분하지만, 공정관리·토공량 변화 추적이 목적이라면 주기적(주간/월간) 촬영을 권장합니다. 정기 촬영 시 타임랩스와 진행률 비교 자료를 함께 제공해 의사결정에 도움을 드립니다.'
    },
    {
      question: 'Q5. 비가 오거나 안개가 심한 날에도 촬영이 가능한가요?',
      answer: '드론 촬영은 기상 조건에 민감하므로, 강우·강풍·짙은 안개 시에는 안전상 비행이 제한됩니다. 촬영 예정일 기상이 좋지 않을 경우 대체 일정을 협의하며, 급한 일정의 경우 예비일을 함께 잡아 드립니다.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-20 lg:py-32">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/construction.webp"
            alt="건설 현장 배경"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <Badge variant="hero" className="mb-6">
              <Building2 className="h-3 w-3 mr-1" />
              Construction Monitoring & Aerial Survey
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              건설·건축 모니터링 & 항공측량
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              공정관리, 토공량 분석, 구조물·문화재 점검까지.<br />
              아이엠드론은 드론과 3D 데이터로 현장을 숫자와 영상으로 관리하는<br />
              스마트 건설 솔루션을 제공합니다.
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
            <h2 className="text-4xl font-bold mb-4">건설·건축 드론 서비스란?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              아이엠드론의 건설·건축 드론 서비스는 공사 현장의 진행 상황을 항공사진과 3D 데이터로 시각화하고, 측량·공정관리·안전점검·보고용 자료까지 한 번에 해결할 수 있도록 돕는 솔루션입니다. 기존에 인력과 시간이 많이 들던 공정 진행 상황 기록, 토공량 파악 및 설계 대비 비교, 구조물 및 위험 구역 점검, 발주처·투자자·관계자 보고용 자료 제작을 드론으로 자동화·표준화하여, 더 정확하고 더 빠른 의사결정을 가능하게 합니다.
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

      {/* 주요 촬영 분야 */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Shooting Fields</Badge>
            <h2 className="text-4xl font-bold mb-4">주요 촬영 분야</h2>
            <p className="text-xl text-muted-foreground">
              이런 현장에서 특히 효과적입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shootingFields.slice(0, 3).map((field, index) => (
              <Card key={index} variant="hover-xl">
                <CardHeader>
                  <CardTitle className="text-xl">{field.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{field.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {shootingFields.slice(3).map((field, index) => (
              <Card key={index + 3} variant="hover-xl">
                <CardHeader>
                  <CardTitle className="text-xl">{field.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{field.description}</p>
                </CardContent>
              </Card>
            ))}
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
              왜 아이엠드론과 함께해야 할까요?
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
            <h2 className="text-4xl font-bold mb-4">촬영 진행 프로세스</h2>
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
              <h3 className="text-2xl font-semibold mb-4">프로젝트 특성에 맞춘 맞춤 견적</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                건설·건축 드론 서비스의 비용은 대상 면적, 지형 난이도, 촬영 주기, 데이터 처리 범위, 분석 수준에 따라 달라집니다.
              </p>

              <p className="text-muted-foreground mb-6">
                아이엠드론은 다음과 같은 방식을 기준으로 맞춤 견적을 제공합니다:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  '단일 현장 1회 촬영·분석 패키지',
                  '월·분기 단위 정기 공정관리 패키지',
                  '토공량 분석·정사영상 제작 중심 패키지',
                  '구조물·시설물 점검 중심 패키지',
                  '문화재·역사 건축물 디지털 기록 전용 패키지'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground mb-6">
                현장 위치와 용도, 필요한 결과물을 알려주시면 엔지니어가 직접 검토 후 상세 견적과 작업 제안을 함께 드립니다.
              </p>

              <Button size="lg" variant="primary-blue" asChild>
                <Link href="/contact">
                  스마트 건설 드론 견적 문의하기
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
            현장을 '감'이 아닌 데이터로 관리해 보세요.
          </h2>
          <p className="text-xl text-foreground dark:text-white mb-8 leading-relaxed">
            도면과 보고서만으로는 부족했던 공사 현황 파악,<br />
            이제 드론과 3D 데이터로 한눈에 보이는 공정관리와 정량 분석을 경험해 보세요.
          </p>
          <p className="text-lg text-foreground dark:text-white mb-8">
            아이엠드론은 <strong className="font-semibold">From Flight to Insight</strong>라는 이름 그대로,<br />
            비행에서 데이터, 그리고 현장의 의사결정까지 이어지는 스마트 건설 파트너입니다.
          </p>
          <Button size="lg" variant="primary-blue" asChild>
            <Link href="/contact">
              스마트 건설 드론 상담 요청하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

