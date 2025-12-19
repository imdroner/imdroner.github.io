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
  Fuel,
  FileText,
  Settings,
  Image as ImageIcon,
  BarChart3,
  ArrowRight,
  Phone,
  Mail,
  Plane,
  Zap,
  Battery,
  Lightbulb,
  Users
} from 'lucide-react';

export default function HydrogenServicePage() {
  const keyPoints = [
    '산업용·모빌리티용 수소 연료전지 공급',
    '드론·이동형 전원·소규모 발전 등 응용 제안',
    '설계·구성·시범 운영까지 One-Stop 지원'
  ];

  const overviewSteps = [
    { icon: Plane, title: '모빌리티 전원', description: '드론·로봇 등 이동체에 적용합니다' },
    { icon: Zap, title: '전기차 충전기', description: '친환경 충전 인프라를 구축합니다' },
    { icon: Battery, title: '비상·백업 전원', description: '정전 시에도 안정적인 전력을 공급합니다' },
    { icon: Lightbulb, title: '데모·전시·홍보용 시스템', description: '수소 에너지를 직관적으로 보여줍니다' }
  ];

  const applicationFields = [
    {
      icon: Plane,
      title: '드론·로봇 등 모빌리티 전원',
      description: '기존 배터리 방식으로 비행 시간이 제한되던 드론, 장시간 운용이 필요한 이동 로봇·UGV 등 모빌리티에 수소 연료전지를 적용해 운용 시간과 효율을 대폭 향상시킬 수 있습니다. 아이엠드론은 드론 운용 경험을 기반으로 실제 적용 가능한 구성을 논의합니다.'
    },
    {
      icon: Zap,
      title: '이동형·야외용 전원',
      description: '산업·건설 현장, 야외 행사, 재난 현장 등 전력 인프라가 부족한 곳에서 사용할 수 있는 이동형 수소 연료전지 전원 시스템을 구성합니다. 발전기 대신 소음과 배출가스를 줄인 친환경 전력 공급이 가능합니다.'
    },
    {
      icon: Battery,
      title: '비상·백업 전원 시스템',
      description: '데이터 센터, 관제실, 중요 장비, 소규모 시설 등을 위한 비상 전원을 수소 연료전지 기반으로 구성하여 정전·재난 상황에서도 안정적인 전력 공급을 실현할 수 있습니다.'
    },
    {
      icon: Settings,
      title: '소규모 발전·마이크로그리드 데모',
      description: '학교, 연구소, 공공시설, 기업 홍보관 등에서 태양광·ESS와 함께 연계한 수소 기반 소규모 발전·마이크로그리드 데모 시스템을 구축합니다. 교육·홍보·체험용으로 활용하며, 향후 실증 사업으로 확장할 수 있는 기초를 만듭니다.'
    },
    {
      icon: Users,
      title: '수소 에너지 홍보·체험 콘텐츠',
      description: '지자체·기업·전시관·행사 등에서 수소 연료전지를 활용한 체험형·전시형 콘텐츠를 기획합니다. 수소 드론, 수소 전원, 모형 설비 등을 활용해 시민·학생·관계자에게 수소 에너지의 가능성을 직관적으로 보여줄 수 있습니다.'
    }
  ];

  const strengths = [
    {
      title: '현장 경험 기반 제안',
      description: '아이엠드론은 드론 운용·에너지 설비 점검·관제 등 현장 중심 업무 경험을 바탕으로, 연료전지를 실제로 어디에 어떻게 붙여야 의미가 있는지를 함께 고민합니다. 단순 제품 판매가 아니라, 실효성 있는 응용 시나리오를 우선 논의합니다.'
    },
    {
      title: '제품 중립적 컨설팅',
      description: '특정 제조사에 종속되지 않고, 여러 수소 연료전지 제조사 및 파트너사와 협력하여 고객 상황에 가장 적합한 제품과 구성을 제안합니다. 필요 전력·운전 시간·예산에 맞춘 최적 옵션을 찾아드립니다.'
    },
    {
      title: '파일럿·데모 구축 지원',
      description: '대규모 도입 전에 파일럿·데모 시스템을 먼저 구축해 실제 운용 데이터를 수집하고, 확장 여부를 판단할 수 있도록 돕습니다. 시범 사업·R&D 과제·전시용 시스템 구축 경험을 보유하고 있습니다.'
    },
    {
      title: '수소 생태계 네트워크',
      description: '수소 생산·저장·유통·안전 관련 파트너사, 연구기관, 공공기관과의 네트워크를 활용해 제품 공급뿐 아니라 인허가·안전 규정·보조금·정책 지원 등 종합적인 정보를 함께 제공합니다.'
    }
  ];

  const processSteps = [
    {
      step: 'Step 1',
      title: '상담 & 요구사항 파악',
      description: '수소 연료전지를 어디에, 왜 도입하려는지, 기대 효과, 현재 인프라 상황, 예산 등을 파악합니다.'
    },
    {
      step: 'Step 2',
      title: '적용 시나리오·컨셉 기획',
      description: '위치, 상황, 기대 효과를 함께 정의하여, 가장 현실적인 적용 시나리오를 만듭니다.'
    },
    {
      step: 'Step 3',
      title: '제품 선정 및 시스템 제안',
      description: '필요 전력·연속 운전 시간에 맞춰 적정 용량과 타입의 수소 연료전지 및 주변 시스템 구성을 제안합니다.'
    },
    {
      step: 'Step 4',
      title: '파일럿·데모 구축(선택)',
      description: '도입 전 파일럿·데모 시스템을 먼저 구축해 실제 운용 환경에서 테스트합니다. 운영 데이터를 수집하여, 확장 시 개선점을 도출합니다.'
    },
    {
      step: 'Step 5',
      title: '도입·설치 지원',
      description: '설치·시공·안전·인허가가 필요한 경우 관련 파트너와 연계하여 실제 구축 단계까지 지원합니다.'
    },
    {
      step: 'Step 6',
      title: '운영 교육·활용 지원',
      description: '운영 담당자를 위한 기초 교육, 홍보·전시용으로 활용할 경우, 안내 문구·콘텐츠 구성까지 함께 도와드립니다.'
    }
  ];

  const deliverables = [
    {
      icon: FileText,
      title: '수소 연료전지 도입 제안서',
      items: ['도입 목적·환경 분석', '적용 시나리오·구성안', '예상 효과·활용 방안 요약']
    },
    {
      icon: Settings,
      title: '제품·시스템 구성 사양서',
      items: ['제안된 연료전지·부속 장비 사양', '예상 운전 시간·전력·운영 시나리오']
    },
    {
      icon: BarChart3,
      title: '구축·운영 계획 (파일럿 포함)',
      items: ['단계별 도입 로드맵', '파일럿 운영 계획 및 향후 확장 방향']
    },
    {
      icon: ImageIcon,
      title: '홍보·전시 활용 콘텐츠(옵션)',
      items: ['수소 시스템 설명용 패널/이미지', '시연·체험 시나리오 초안']
    }
  ];

  const faqs = [
    {
      question: 'Q1. 아직 수소 인프라가 부족한데, 지금 도입해도 괜찮을까요?',
      answer: '대규모 상용화가 아니더라도, 데모·시범·체험·파일럿 프로젝트 수준에서 시작해 내부 역량과 활용 경험을 쌓아두는 것이 중요합니다. 아이엠드론은 "지금 할 수 있는 현실적인 수준"에서의 시작점을 함께 찾습니다.'
    },
    {
      question: 'Q2. 수소 연료전지는 안전한가요?',
      answer: '수소는 가벼워 누출 시 빠르게 확산되며, 적절한 환기와 센서·안전장치가 갖춰지면 안전하게 운용할 수 있습니다. 아이엠드론은 안전 기준을 준수하는 제품과 시스템 구성을 제안하며, 관련 법규와 인허가 절차도 함께 안내합니다.'
    },
    {
      question: 'Q3. 드론에 직접 수소 연료전지를 적용하는 것도 가능한가요?',
      answer: '네, 가능합니다. 수소 연료전지를 장착한 드론은 배터리 대비 비행 시간을 2~5배 이상 늘릴 수 있습니다. 다만 기체 선정, 연료전지 파워팩 구성, 안전 운용 절차 등이 필요하므로, 실제 운용 목적에 맞춰 컨설팅을 제공합니다.'
    },
    {
      question: 'Q4. 단순 제품 공급만 요청해도 되나요?',
      answer: '물론입니다. 이미 구체적인 계획이 있고 제품만 필요한 경우, 적합한 연료전지 제품을 추천하고 공급해 드립니다. 다만 도입 후 활용 방안까지 함께 고민하면 더 효과적인 결과를 얻을 수 있어, 기본 컨설팅도 함께 제공합니다.'
    },
    {
      question: 'Q5. 공공·연구 과제 제안 단계에서도 도움을 받을 수 있나요?',
      answer: '네, 가능합니다. 수소 관련 실증 사업, R&D 과제, 지자체 시범 사업 등의 제안서 작성 단계에서 기술 자문, 시스템 구성안 제공, 예산 산정 지원 등을 함께 진행할 수 있습니다.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-20 lg:py-32">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/hydrogen.webp"
            alt="수소 연료전지 배경"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <Badge variant="hero" className="mb-6">
              <Fuel className="h-3 w-3 mr-1" />
              Hydrogen Fuel Cell & Application Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              수소 연료전지 공급 &<br />응용 솔루션
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              모빌리티, 발전, 비상전원, 드론까지.<br />
              아이엠드론은 수소 연료전지 시스템을 공급하고,<br />
              현장에 맞는 친환경 전력·에너지 응용 솔루션을 함께 설계합니다.
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
            <h2 className="text-4xl font-bold mb-4">수소산업 서비스란?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              아이엠드론의 수소산업 서비스는 수소 연료전지 시스템 공급을 중심으로, 드론을 포함한 모빌리티 전원, 소규모 분산 발전·마이크로그리드, 비상·백업 전원, 친환경 전력 데모·전시·홍보용 시스템 등 다양한 응용 분야에 수소 연료전지를 적용할 수 있도록 제품 선정 → 시스템 설계 → 도입·시범 운영까지 함께 지원하는 서비스입니다. 드론·에너지·현장 운영 경험을 바탕으로 "연료전지를 어디에, 어떻게 쓰면 실질적인 도움이 될지"를 기술과 현장을 아우르는 관점에서 제안합니다.
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
              이런 분야에 수소 연료전지를 적용할 수 있습니다.
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
              수소 연료전지, 왜 아이엠드론과 함께 준비할까요?
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
            <h2 className="text-4xl font-bold mb-4">도입 진행 프로세스</h2>
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
              어떤 결과물을 기대할 수 있나요?
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
              <h3 className="text-2xl font-semibold mb-4">도입 규모와 목적에 맞춘 맞춤형 견적</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                수소 연료전지 도입 비용은 필요 전력·연속 운전 시간, 적용 분야(드론/비상전원/전시 등), 시스템 구성 범위에 따라 크게 달라집니다.
              </p>

              <p className="text-muted-foreground mb-6">
                아이엠드론은 다음과 같은 형태를 기준으로 맞춤 견적을 제안합니다:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  '드론/모빌리티용 수소 연료전지 파워팩 도입 상담',
                  '소규모 이동형/야외용 전원 시스템 기획·제안',
                  '공공·연구·기업 전시·체험용 수소 시스템 기획 패키지',
                  '중장기 수소 에너지 실증·시범 사업용 기본 구상 패키지'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground mb-6">
                현재 생각 중인 용도·규모·예산 범위를 공유해 주시면, 가능한 옵션과 단계별 접근 방식을 정리한 맞춤 제안서를 준비해 드립니다.
              </p>

              <Button size="lg" variant="primary-blue" asChild>
                <Link href="/contact">
                  수소 연료전지 도입·적용 아이디어 상담하기
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
            수소 에너지, "언젠가"가 아니라 "지금부터" 준비해 보세요.
          </h2>
          <p className="text-xl text-foreground dark:text-white mb-8 leading-relaxed">
            수소 연료전지는 단순히 미래 기술이 아니라,<br />
            이미 다양한 분야에서 구체적인 활용 사례가 만들어지고 있습니다.
          </p>
          <p className="text-lg text-foreground dark:text-white mb-8">
            아이엠드론은 드론과 에너지, 그리고 현장의 관점을 잇는 파트너로서<br />
            여러분의 비즈니스와 도시, 현장에 수소 에너지를 적용할 수 있는 현실적인 방법을 함께 찾겠습니다.<br /><br />
            <strong className="font-semibold">From Flight to Insight</strong>,<br />
            그리고 <strong className="font-semibold">From Hydrogen to Action</strong>.<br />
            아이엠드론과 함께 수소 에너지 여정을 시작해 보세요.
          </p>
          <Button size="lg" variant="primary-blue" asChild>
            <Link href="/contact">
              수소 연료전지 도입 상담 요청하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

