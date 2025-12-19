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
  Camera,
  FileText,
  Map,
  Settings,
  Video,
  Image as ImageIcon,
  File,
  Layout,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

export default function AerialServicePage() {
  const keyPoints = [
    '고해상도 4K 이상 촬영 · 시네마급 드론 운용',
    '국가자격·보험 가입 전문 조종 인력',
    '기획·촬영·편집·색보정·BGM 포함 원스톱 제작'
  ];

  const overviewSteps = [
    { icon: FileText, title: '촬영 목적 분석', description: '프로젝트 목표와 활용 방안을 분석합니다' },
    { icon: Map, title: '콘티·동선 기획', description: '최적의 촬영 구도와 동선을 설계합니다' },
    { icon: Shield, title: '현장 안전 관리', description: '안전 우선 원칙으로 비행을 진행합니다' },
    { icon: Settings, title: '후반 편집 & 색보정', description: '전문 편집으로 완성도 높은 결과물 제작' }
  ];

  const shootingFields = [
    {
      title: '부동산·상업시설 항공촬영',
      description: '분양 현장, 단지 조감도, 상가·오피스·숙박시설 등 입지와 주변 환경을 한눈에 보여주는 항공샷으로 마케팅 경쟁력을 높여 드립니다. 지상 사진만으로 설명하기 어려운 접근성, 조망, 동선 등을 영상으로 설득력 있게 전달합니다.'
    },
    {
      title: '골프장·리조트·관광지 브랜딩 영상',
      description: '라운드 동선, 코스 레이아웃, 풍광을 드론으로 따라가며 촬영하여 코스 소개 영상, 프로모션 영상, 브랜딩 필름으로 제작합니다. 사계절 촬영을 통해 시즌별 홍보 콘텐츠도 구축할 수 있습니다.'
    },
    {
      title: '요트·마리나·해양 레저 촬영',
      description: '요트 세일링, 레저 스포츠, 해상 행사 등을 수면과 상공을 넘나드는 동선으로 촬영해 현장감 있는 영상을 제작합니다. 선박 이동 경로와 주변 경관을 함께 담아 브랜드 스토리를 강화합니다.'
    },
    {
      title: '행사·축제·도시 홍보 영상',
      description: '대규모 행사, 축제, 퍼레이드, 스포츠 이벤트 등을 상공에서 기록하여 행사 스케일과 분위기를 전달하는 하이라이트 영상을 제작합니다. 도시·지자체 홍보, 기업 행사 리포트 영상으로도 활용할 수 있습니다.'
    },
    {
      title: '산업 현장·시설 촬영',
      description: '플랜트, 항만, 물류단지, 산업단지 등 일반 촬영이 어려운 대규모 시설의 규모와 구조를 조감도로 표현합니다. 기업 홍보, 안전 교육, 투자자 대상 브리핑 자료로 활용하기 좋습니다.'
    }
  ];

  const strengths = [
    {
      title: '기획부터 편집까지 One-Stop',
      description: '단순한 항공 샷 나열이 아니라, 촬영 목적에 맞는 스토리 구조와 컷 플로우를 기획한 뒤 촬영합니다. 필요 시 자막, 로고 애니메이션, BGM까지 포함해 최종 영상으로 납품합니다.'
    },
    {
      title: '전문 조종 인력 & 안전 기준 준수',
      description: '국가 자격을 갖춘 조종자와 보조 인력이 팀을 구성하여, 비행 전 비행허가·협의, 현장 사전 점검 등 안전 우선 원칙에 따라 운영합니다. 비행 관련 책임보험에 가입해 고객과 현장의 리스크를 최소화합니다.'
    },
    {
      title: '현장 이해 기반 촬영',
      description: '단순히 \'예쁜 그림\'을 넘어, 부동산·건설·에너지·공공안전 등 산업 현장의 특성을 이해하고 실제 업무에 쓰기 좋은 시야와 구도로 촬영합니다.'
    },
    {
      title: '고해상도 & 색보정',
      description: '4K 이상 해상도, 로그(Log) 촬영, 짐벌 안정화 등을 활용해 편집과 색보정을 고려한 후반 작업 친화적인 소스를 제공합니다. 필요에 따라 세로영상(Shorts/Reels)용 컷도 함께 제작할 수 있습니다.'
    }
  ];

  const processSteps = [
    {
      step: 'Step 1',
      title: '상담 & 기획',
      description: '촬영 목적, 활용 채널(홈페이지, 유튜브, 광고 등), 원하는 분위기와 예산을 파악하여 촬영 콘셉트와 기본 구성을 함께 정합니다.'
    },
    {
      step: 'Step 2',
      title: '비행 가능 여부 검토',
      description: '촬영 장소의 비행 제한 구역, 고도, 주변 환경을 확인하고 필요 시 관할 기관 협의 및 비행 승인 절차를 진행합니다.'
    },
    {
      step: 'Step 3',
      title: '일정 확정 & 사전 점검',
      description: '기상 조건과 현장 일정에 맞춰 촬영 일정을 확정하고, 장비·배터리·백업 장비를 포함한 체크리스트를 점검합니다.'
    },
    {
      step: 'Step 4',
      title: '현장 촬영',
      description: '안전 브리핑 후 비행 동선을 공유하고, 필요 시 지상 카메라/타임랩스와 함께 복합 촬영도 진행합니다.'
    },
    {
      step: 'Step 5',
      title: '편집 & 후반 작업',
      description: '선별된 컷을 기반으로 러프컷 → 본편 편집 → 색보정 → 자막/로고/BGM 순으로 작업합니다.'
    },
    {
      step: 'Step 6',
      title: '납품 & 추가 컨설팅',
      description: '최종 영상/사진을 납품하고, 홈페이지·SNS·오프라인 등 활용 채널에 맞춰 추가 컷 분할, 썸네일 제작 등도 지원합니다.'
    }
  ];

  const deliverables = [
    {
      icon: Video,
      title: '완성 영상',
      items: ['1~3분 내외 하이라이트 영상 (MP4, 4K/Full HD)', '필요 시 30초 버전/세로형 SNS 버전 추가 제작 가능']
    },
    {
      icon: ImageIcon,
      title: '스틸 이미지',
      items: ['주요 구도 항공사진 10~30장 (JPG, 고해상도)', '보정 유무 선택 가능']
    },
    {
      icon: File,
      title: '원본 파일(옵션)',
      items: ['고객 요청 시 원본 영상/사진 파일 별도 제공', '장기 프로젝트/재편집 계획이 있을 경우 추천']
    },
    {
      icon: Layout,
      title: '썸네일 이미지(옵션)',
      items: ['유튜브·홈페이지용 대표 썸네일 디자인', '프레젠테이션·리포트용 캡쳐 이미지 세트']
    }
  ];

  const faqs = [
    {
      question: 'Q1. 촬영 가능 지역이 정해져 있나요?',
      answer: '기본적으로 국내 전 지역 촬영이 가능하지만, 공항 인근·군사 시설 등 비행 제한 구역은 비행 허가 절차가 필요하거나 촬영이 제한될 수 있습니다. 상담 시 촬영 위치를 알려 주시면 가능한지 먼저 검토해 드립니다.'
    },
    {
      question: 'Q2. 날씨가 좋지 않으면 어떻게 되나요?',
      answer: '드론은 기상 조건에 민감하므로, 강풍·강우 시 안전상 비행이 불가능할 수 있습니다. 예정일 기상이 좋지 않을 경우 대체 일정을 협의하며, 긴급 일정의 경우 예비일을 함께 잡아 드립니다.'
    },
    {
      question: 'Q3. 촬영만 의뢰하고 편집은 직접 해도 되나요?',
      answer: '네, 가능합니다. 촬영 원본 파일만 제공받는 "촬영 전용 패키지"도 운영 중입니다. 다만 원본 파일은 용량이 크고 색보정 전 상태이므로, 후반 작업이 가능하신 경우에 권장합니다.'
    },
    {
      question: 'Q4. 촬영한 영상을 여러 채널에서 사용해도 되나요?',
      answer: '네. 납품된 영상과 사진은 고객사 소유이므로, 홈페이지·유튜브·SNS·오프라인 전시 등 자유롭게 활용하실 수 있습니다. 단, 2차 판매나 재배포는 별도 협의가 필요합니다.'
    },
    {
      question: 'Q5. 사람(고객·직원)이 촬영에 등장해도 괜찮나요?',
      answer: '물론입니다. 행사, 단체 사진, 현장 작업 모습 등 사람이 포함된 촬영도 가능합니다. 다만 개인정보 보호를 위해 얼굴이 식별되는 촬영의 경우 사전 동의를 받아 주시거나, 후반 작업 시 블러 처리 등을 요청하실 수 있습니다.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-20 lg:py-32">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/aerial-hero.jpg"
            alt="항공촬영 배경"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <Badge variant="hero" className="mb-6">
              <Camera className="h-3 w-3 mr-1" />
              Aerial Photography & Premium Video
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              항공촬영 & 프리미엄 영상 제작
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              부동산·골프장·요트·행사·관광지까지,<br />
              아이엠드론의 항공촬영은 단순한 '하늘샷'이 아니라<br />
              기획부터 편집까지 완성된 콘텐츠를 제공합니다.
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
            <h2 className="text-4xl font-bold mb-4">항공촬영 서비스란?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              아이엠드론의 항공촬영 서비스는 부동산, 골프장, 요트·마리나, 관광지, 산업 현장, 이벤트 등 다양한 공간과 순간을 하늘에서 입체적으로 담아내는 영상·사진 제작 서비스입니다. 단순한 항공촬영에 그치지 않고, 촬영 목적 분석부터 후반편집까지 포함한 토털 패키지로 제공하여, 바로 활용 가능한 결과물을 전달합니다.
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
              이런 촬영에 특히 잘 어울립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shootingFields.map((field, index) => (
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
        </div>
      </section>

      <Separator />

      {/* 아이엠드론의 강점 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Strength</Badge>
            <h2 className="text-4xl font-bold mb-4">아이엠드론의 강점</h2>
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
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                항공촬영 비용은 촬영 시간, 장소(이동 거리), 인력 구성, 편집 난이도, 사용 목적에 따라 달라집니다.
                아이엠드론은 다음과 같은 기준으로 맞춤 견적을 제공합니다.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  '단일 장소·반일 기준 촬영 패키지',
                  '하루 이상 장기 촬영 패키지',
                  '편집 포함/촬영만 의뢰 옵션',
                  '반복 촬영(정기 촬영·사계절 촬영) 할인 프로그램'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground mb-6">
                아래 버튼을 눌러 촬영 목적과 희망 일정을 남겨 주시면, 담당자가 상세 상담 후 맞춤 견적서를 보내드립니다.
              </p>

              <Button size="lg" className="w-full lg:w-auto" asChild>
                <Link href="/contact">
                  항공촬영 견적 문의하기
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
            당신의 공간과 순간을 하늘에서 기록해 보세요.
          </h2>
          <p className="text-xl text-foreground mb-8 leading-relaxed dark:text-white">
            한 번의 항공촬영이, 부동산 분양률 상승과 브랜드 인지도 향상,<br />
            그리고 도시·현장을 보여 주는 새로운 관점을 만들어 냅니다.
          </p>
          <p className="text-lg text-foreground mb-8 dark:text-white">
            아이엠드론과 함께 <strong className="font-semibold">비행에서 인사이트까지(From Flight to Insight)</strong><br />
            이어지는 항공촬영을 시작해 보세요.
          </p>
          <Button size="lg" variant="primary-blue" asChild>
            <Link href="/contact">
              항공촬영 상담 요청하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

