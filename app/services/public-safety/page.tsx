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
  FileText,
  Map,
  Settings,
  Image as ImageIcon,
  File,
  BarChart3,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  Landmark,
  Waves,
  Flame,
  TreePine,
  AlertTriangle
} from 'lucide-react';

export default function PublicSafetyServicePage() {
  const keyPoints = [
    '교량·시설물·문화재 드론 점검',
    '항만·연안·불법어선·해양 안전 관제 지원',
    '산불·재난·재해 현장 모니터링 및 상황 기록'
  ];

  const overviewSteps = [
    { icon: Building2, title: '공공 인프라 점검', description: '교량·시설물을 안전하게 점검합니다' },
    { icon: Shield, title: '불법·위험 행위 감시', description: '항만·연안 구역을 감시합니다' },
    { icon: AlertTriangle, title: '위기 상황 모니터링·기록', description: '재난 현장을 신속하게 파악합니다' },
    { icon: BarChart3, title: '데이터 기반 안전 관리', description: '점검 이력을 축적하고 분석합니다' }
  ];

  const applicationFields = [
    {
      icon: Building2,
      title: '교량·시설물·공공 인프라 점검',
      description: '교량, 도로 구조물, 옹벽, 저수지, 제방, 상하수도·환경 시설 등 공공 인프라를 드론으로 정기 점검합니다. 육안으로 확인하기 어려운 상부/측면/하부 등을 촬영해 균열, 누수, 부식, 변형 등 이상 징후를 기록하고, 보수 필요 구간을 식별합니다.'
    },
    {
      icon: Landmark,
      title: '문화재·국가유산 보호 및 디지털 기록',
      description: '문화재·역사 건축물·기념물·국가유산을 드론으로 촬영·3D 모델링하여 정밀 기록·상태 점검·디지털트윈 구축에 활용합니다. 보수·복원 계획 수립, 관리 이력 축적, 방문객 안내 콘텐츠 제작 등 문화재 행정 전반에 활용 가능한 데이터 기반을 만듭니다.'
    },
    {
      icon: Waves,
      title: '항만·연안·불법어선 감시',
      description: '항만 주변, 연안, 해상 구역을 드론으로 순찰하며 불법어선, 위험 선박, 기름 유출, 해양 폐기물 등을 감시합니다. CCTV나 육상·선박 순찰만으로 커버하기 어려운 구역을 보완하며, 위험 상황 발생 시 위치·영상 정보를 실시간으로 공유합니다.'
    },
    {
      icon: Flame,
      title: '산불·재난·재해 현장 모니터링',
      description: '산불, 산사태, 홍수, 태풍 피해 등 재난 상황에서 드론으로 화재 확산 방향, 연기·불꽃 발생 지점, 도로 통제 상황, 침수 구역, 고립 지점을 파악합니다. 육상 접근이 어려운 구역의 상황과 대피·구조에 필요한 정보를 상공에서 제공합니다.'
    },
    {
      icon: TreePine,
      title: '도시 치안·공원·관광지 안전 관리 지원',
      description: '공원, 관광지, 도심 축제 구역 등에서 드론을 활용해 인파 흐름, 위험 지역, 야간 조도 취약 구간 등을 확인합니다. 기존 CCTV와 병행 운용할 경우, 공중에서 사각지대를 보완하는 수단으로 활용됩니다.'
    }
  ];

  const strengths = [
    {
      title: '공공 현장 경험 기반 운영',
      description: '아이엠드론은 공공·지자체·행사·산업 현장 등 다양한 환경에서 드론을 운용한 경험을 기반으로 행정·안전 규정·협의 구조를 이해하고, 공공기관이 필요로 하는 데이터 포맷과 보고 방식에 맞춰 서비스를 제공합니다.'
    },
    {
      title: '행정·규제 절차 이해',
      description: '공공 업무는 비행 허가, 개인정보 보호, 시설 접근 승인 등 행정 절차가 필요한 경우가 많습니다. 아이엠드론은 관할 기관 협의와 허가 절차를 숙지하고 있어, 사전 준비부터 진행까지 원활하게 지원합니다.'
    },
    {
      title: '디지털트윈·아카이브 구축 지원',
      description: '단순 점검·감시를 넘어, 문화재·시설물의 3D 모델, 정사영상, 포인트클라우드를 생성하여 디지털트윈·디지털 아카이브 구축 프로젝트에 연계할 수 있습니다. 장기 보존·관리 이력·VR/AR 콘텐츠로 확장 가능합니다.'
    },
    {
      title: '위기 대응 신속 출동',
      description: '산불·재난·사고 등 긴급 상황 발생 시 신속 대응 체계를 갖추고 있습니다. 상황실과 협의하여 필요 시 즉시 현장으로 이동, 드론을 투입하여 실시간 영상을 제공하고 상황 파악을 지원합니다.'
    }
  ];

  const processSteps = [
    {
      step: 'Step 1',
      title: '상담 & 업무 범위 정의',
      description: '점검·관제 목적(안전·감시·기록 등), 대상 시설·구역, 운영 주기, 협의 대상 기관 등을 파악하고 업무 범위를 정의합니다.'
    },
    {
      step: 'Step 2',
      title: '대상 시설·구역 사전 조사',
      description: '점검 시설 목록, 위치, 규모, 기존 자료(도면·사진·보고서 등)를 공유받고, 비행 제한·접근성·위험 요인을 파악하여 비행 계획을 수립합니다.'
    },
    {
      step: 'Step 3',
      title: '인허가·협의 및 일정 조율',
      description: '관할 기관과 협의, 비행 허가·촬영 허가가 필요한 경우 절차를 진행하고, 점검·관제 일정과 현장 담당자 일정에 맞춰 스케줄을 조정합니다.'
    },
    {
      step: 'Step 4',
      title: '현장 촬영·관제 수행',
      description: '계획된 구역·시설에 대해 드론 촬영·관제를 수행합니다. 필요 시 현장 담당자/상황실과 화면을 실시간 공유하여 이상 징후 발견 시 즉시 대응할 수 있도록 돕습니다.'
    },
    {
      step: 'Step 5',
      title: '데이터 정리·분석',
      description: '촬영된 영상·사진·기록을 정리하여 이상 구간, 위험 요소, 특이 사항을 분석하고, 정량·정성 정보를 함께 정리합니다.'
    },
    {
      step: 'Step 6',
      title: '결과 보고·후속 제안',
      description: '점검·관제 결과를 보고서·이미지·영상 등으로 제공하고, 정기 사업 전환, 추가 점검 필요 구역, 데이터 활용 방안 등 후속 단계에 대한 제안도 함께 드립니다.'
    }
  ];

  const deliverables = [
    {
      icon: FileText,
      title: '점검·관제 결과 보고서',
      items: ['점검 대상·방법·일시', '주요 이상·위험 요소 요약', '조치·권고 사항 정리']
    },
    {
      icon: ImageIcon,
      title: '주요 구간 사진·영상 자료',
      items: ['교량·시설물·문화재·해상 구역 등', '이상 지점의 전·후·근접 사진 및 영상 클립']
    },
    {
      icon: Map,
      title: '지도·도면 기반 시각자료',
      items: ['점검/관제 구역에 이상 지점 표시', '위험도·우선 조치 필요 구간 등 색상이나 레이어로 표현']
    },
    {
      icon: File,
      title: '디지털 아카이브 데이터(옵션)',
      items: ['문화재·시설물의 항공사진, 3D 모델, 정사영상 등', '장기 보존과 향후 보수·복원 계획용 데이터']
    }
  ];

  const faqs = [
    {
      question: 'Q1. 지자체/공공기관과의 계약 형태는 어떻게 되나요?',
      answer: '용역 형태, 시범 사업, 협약 기반 프로젝트 등 기관 상황과 사업 목적에 맞는 형태로 협의 가능합니다. 제안요청서(RFP) 작성 단계부터 함께 논의해 드릴 수도 있습니다.'
    },
    {
      question: 'Q2. 개인정보·초상권 문제는 어떻게 처리하나요?',
      answer: '촬영 전 필요 시 안내문 게시, 촬영 구역 고지를 진행하며, 개인 식별이 가능한 얼굴이나 차량 번호가 포함된 경우 블러 처리나 모자이크를 적용할 수 있습니다. 공공 목적의 기록·감시 촬영은 관련 법규를 준수하여 진행합니다.'
    },
    {
      question: 'Q3. 기존에 운영 중인 CCTV·관제센터와 연동할 수 있나요?',
      answer: '네, 가능합니다. 드론 영상 피드를 기존 CCTV 통합관제센터 화면에 추가하거나, 영상 데이터를 녹화·저장 시스템에 연계하는 방식으로 구성할 수 있습니다. 시스템 환경에 따라 맞춤 설계를 제안해 드립니다.'
    },
    {
      question: 'Q4. 단발성 점검이 아닌 정기 사업으로 운영해도 되나요?',
      answer: '물론입니다. 분기별·반기별·연간 단위 정기 점검 사업으로 계약하면, 점검 이력을 시계열로 축적하여 시설 상태 변화를 추적하고, 보수 우선순위를 판단하는 데 활용할 수 있습니다.'
    },
    {
      question: 'Q5. 위기 상황(산불·재난 등) 전용 플랜도 제공하나요?',
      answer: '네, 산불·재난·사고 등 긴급 상황 대응을 위한 비상 출동 체계와 요금제를 운영하고 있습니다. 평소에는 대기 상태로 있다가, 상황 발생 시 신속 출동하여 현장 영상을 제공하는 형태로 계약할 수 있습니다.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-20 lg:py-32">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/public-safety.webp"
            alt="공공안전 배경"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <Badge variant="hero" className="mb-6">
              <Shield className="h-3 w-3 mr-1" />
              Public Safety & Facility Inspection
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              공공·해상안전관제 &<br />시설·문화재 점검
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              도시 인프라, 항만·연안, 문화재, 위험 시설까지.<br />
              아이엠드론은 드론을 활용한 공공안전 점검·감시·기록 서비스로<br />
              지자체·공공기관·공기업의 안전 관리 업무를 지원합니다.
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
            <h2 className="text-4xl font-bold mb-4">공공안전 드론 서비스란?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              아이엠드론의 공공안전 드론 서비스는 지자체·공공기관·공기업·공단을 대상으로, 교량·시설물·문화재 등 공공 인프라 점검, 항만·연안·해상 구역 불법·위험 행위 감시, 산불·재난·재해 등 위기 상황 모니터링·기록을 드론으로 수행하는 통합 안전 지원 솔루션입니다. 기존의 육상 순찰·CCTV·인력 의존 방식에 드론이라는 기동성 높은 공중 시야를 더해, 사각지대를 줄이고, 대응 속도를 높이며, 현장을 더 안전하게 관리할 수 있도록 돕습니다.
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
              이런 공공안전 업무에 활용됩니다.
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
              공공안전, 왜 아이엠드론과 함께해야 할까요?
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
            <h2 className="text-4xl font-bold mb-4">점검·관제 진행 프로세스</h2>
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
              <h3 className="text-2xl font-semibold mb-4">업무 특성과 예산에 맞춘 맞춤형 패키지</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                공공안전 드론 서비스의 비용은 대상 시설·구역의 규모, 점검/관제 범위, 기간(단기/정기), 데이터 처리 수준에 따라 달라집니다.
              </p>

              <p className="text-muted-foreground mb-6">
                아이엠드론은 다음과 같은 형태로 패키지를 구성합니다:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  '교량·시설물·문화재 등 특정 대상 점검 패키지',
                  '지자체 단위 도로·하천·제방·시설 정기 점검 패키지',
                  '항만·연안·해상 구역 불법·위험 행위 감시 패키지',
                  '산불·재난 등 위기 대응 시범 사업·파일럿 프로젝트',
                  '디지털트윈·디지털 아카이브 구축 연계형 패키지'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground mb-6">
                업무 범위와 목표를 공유해 주시면, 전문 담당자가 검토 후 맞춤 견적과 단계별 추진 제안을 드립니다.
              </p>

              <Button size="lg" variant="primary-blue" asChild>
                <Link href="/contact">
                  공공안전 드론 서비스 견적 문의하기
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
            도시와 바다, 문화유산의 안전을 드론으로 지켜보세요.
          </h2>
          <p className="text-xl text-foreground dark:text-white mb-8 leading-relaxed">
            공공안전 업무는 "혹시 모를 한 번"을 대비하는 일이지만,<br />
            그 한 번의 대비가 시민의 생명과 도시의 자산을 지켜냅니다.
          </p>
          <p className="text-lg text-foreground dark:text-white mb-8">
            아이엠드론은 <strong className="font-semibold">From Flight to Insight</strong>라는 이름 그대로,<br />
            비행에서 데이터, 그리고 정책·현장 관리까지 이어지는 공공안전 드론 파트너가 되겠습니다.
          </p>
          <Button size="lg" variant="primary-blue" asChild>
            <Link href="/contact">
              공공안전 드론 서비스 상담 요청하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

