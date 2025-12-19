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
  Monitor,
  FileText,
  Settings,
  Image as ImageIcon,
  BarChart3,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Layout,
  ShoppingCart,
  Megaphone,
  FolderOpen,
  Edit3,
  Palette,
  Code,
  Video
} from 'lucide-react';

export default function ContentsServicePage() {
  const keyPoints = [
    '기업·서비스 홈페이지 기획·디자인·구축',
    '제품·산업 분야에 특화된 콘텐츠 구성',
    '항공촬영·영상·사진과 연계한 디지털 브랜딩'
  ];

  const overviewSteps = [
    { icon: Globe, title: '홈페이지', description: '기업 및 서비스를 명확하게 소개합니다' },
    { icon: Layout, title: '랜딩 페이지', description: '서비스별 전용 페이지를 제작합니다' },
    { icon: ShoppingCart, title: '쇼핑몰 연동', description: '예약/판매 기능을 자연스럽게 통합합니다' },
    { icon: Palette, title: '브랜딩', description: '항공촬영 영상과 연계한 브랜드 이미지를 구축합니다' }
  ];

  const applicationFields = [
    {
      icon: Globe,
      title: '기업·서비스 소개 홈페이지',
      description: '회사 소개, 제공 서비스, 장비·기술, 포트폴리오, 문의 채널을 명확한 구조와 설득력 있는 카피로 담아낸 기업 홈페이지를 제작합니다. 드론·산업 서비스 경험을 바탕으로 실제 고객이 이해하고 행동하게 만드는 웹사이트를 제작합니다.'
    },
    {
      icon: Layout,
      title: '서비스·산업용 솔루션 랜딩 페이지',
      description: '서비스 및 제품별로 전용 랜딩 페이지를 제작해 서비스 설명, 진행 프로세스, 강점, FAQ, 문의 폼까지 한 페이지 안에서 완결되게 보여줄 수 있도록 구성합니다.'
    },
    {
      icon: ShoppingCart,
      title: '쇼핑몰 연동 홈페이지',
      description: '워드프레스 + Woocommerce 기반으로, 서비스 예약/견적 문의용 "서비스 상품", 제품·장비 등 판매용 "제품 쇼핑몰"을 홈페이지 흐름 안에 자연스럽게 녹인 구조를 설계합니다. "소개 → 이해 → 신뢰 → 장바구니/문의"가 한 번에 이어지도록 만드는 것이 목표입니다.'
    },
    {
      icon: Megaphone,
      title: '프로젝트·행사·캠페인 페이지',
      description: '드론 라이트쇼, 축제·행사, 시범 사업, 공공 프로젝트 등 기간 한정 프로젝트를 소개하는 랜딩 페이지를 제작합니다. 행사 개요, 일정, 장소, 프로그램, 포스터·영상 등을 한데 모아 홍보와 참가자 안내에 활용할 수 있도록 구성합니다.'
    },
    {
      icon: FolderOpen,
      title: '포트폴리오 & 미디어 콘텐츠 정리',
      description: '그동안 수행한 프로젝트를 카테고리별 포트폴리오 페이지로 정리해, 새로운 고객에게 "우리가 어떤 일을 해왔는지"를 한눈에 보여줍니다. 필요 시 간단한 하이라이트 영상·썸네일 제작도 함께 지원합니다.'
    }
  ];

  const strengths = [
    {
      title: '드론·산업을 아는 팀',
      description: '아이엠드론은 직접 드론 서비스를 운영하고 있기 때문에, 산업용 드론·에너지·건설·농업·공공 분야의 언어와 요구를 이해합니다. 일반 웹에이전시가 놓치기 쉬운 현장 용어, 고객의 질문 흐름, 서비스 구조를 제대로 반영한 홈페이지를 만들 수 있습니다.'
    },
    {
      title: '실제 운영 경험 기반 설계',
      description: '단순히 "예쁜 홈페이지"가 아니라, "문의가 들어오고, 고객이 이해하고, 신뢰를 주는" 구조를 설계합니다. 실제로 아이엠드론 자체 사이트를 운영하며 얻은 데이터·피드백을 바탕으로, 효과적인 페이지 흐름과 CTA(행동 유도) 배치를 제안합니다.'
    },
    {
      title: '비즈니스를 이해하는 카피',
      description: '기술 스펙만 나열하는 것이 아니라, "왜 이 서비스가 필요한지", "어떤 문제를 해결하는지", "어떻게 진행되는지"를 고객 관점에서 설명하는 카피라이팅을 함께 제공합니다. 필요 시 FAQ, 프로세스, 강점 등 콘텐츠 구조도 함께 기획합니다.'
    },
    {
      title: '항공촬영·영상과 연계 원스톱',
      description: '홈페이지 제작과 함께 항공촬영, 홍보 영상 편집, 썸네일·배너 이미지 제작을 한 번에 진행할 수 있습니다. 드론 영상을 활용한 히어로 섹션, 백그라운드 비디오, 포트폴리오 갤러리 등 시각적으로 강렬한 브랜딩 웹사이트를 만들 수 있습니다.'
    }
  ];

  const processSteps = [
    {
      step: 'Step 1',
      title: '상담 & 목표 설정',
      description: '어떤 목적의 홈페이지인지(소개/판매/문의 유도), 주요 타겟 고객, 담고 싶은 콘텐츠, 디자인 선호 등을 파악합니다.'
    },
    {
      step: 'Step 2',
      title: '사이트 구조 기획',
      description: '메인 페이지와 서브 페이지 구성, 메뉴 구조, 각 페이지의 역할과 CTA 흐름을 정리한 사이트맵을 만듭니다.'
    },
    {
      step: 'Step 3',
      title: '디자인 시안 제작',
      description: '메인 페이지를 중심으로 레이아웃, 컬러, 타이포, 버튼·카드 스타일 등을 반영한 디자인 시안을 제작합니다. 이후 서비스·포트폴리오·문의 페이지로 확장해 나갑니다.'
    },
    {
      step: 'Step 4',
      title: '개발·구축',
      description: '디자인을 바탕으로 워드프레스·NextJS를 세팅하고, 필요한 플러그인을 구성합니다. 서비스 카드, 상세 페이지, 카테고리 등을 실제 데이터 구조에 맞게 세팅합니다.'
    },
    {
      step: 'Step 5',
      title: '콘텐츠 입력 & 최적화',
      description: '고객이 제공한 텍스트·이미지·영상과 카피를 조합하여 각 페이지 콘텐츠를 채워 넣습니다. 기본적인 SEO 요소(타이틀, 메타 설명, URL 구조 등)도 함께 정리합니다.'
    },
    {
      step: 'Step 6',
      title: '오픈 & 운영 가이드',
      description: 'PC·모바일에서 화면과 기능을 점검한 뒤 사이트를 오픈합니다. 관리자 페이지 사용법, 콘텐츠 수정·추가 방법 등 간단한 운영 매뉴얼을 함께 안내해 드립니다.'
    }
  ];

  const deliverables = [
    {
      icon: Globe,
      title: '완성된 홈페이지',
      items: ['메인 페이지 + 핵심 서비스 페이지 + 포트폴리오/문의 페이지 등', 'PC/모바일 반응형 레이아웃']
    },
    {
      icon: Edit3,
      title: '콘텐츠 구조·카피라이팅',
      items: ['서비스 설명, 진행 프로세스, 강점, FAQ 등', '제품·서비스에 맞는 설명 문구 제공·보정']
    },
    {
      icon: Palette,
      title: '디자인 에셋',
      items: ['버튼/카드/섹션 스타일 가이드', '배너/섹션용 대표 이미지']
    },
    {
      icon: FileText,
      title: '운영 매뉴얼',
      items: ['텍스트·이미지 수정 방법', '새 글/새 페이지 추가 방법', '기본적인 유지보수 팁']
    },
    {
      icon: Video,
      title: '(옵션) 콘텐츠 패키지',
      items: ['항공촬영 영상 하이라이트 편집본', '홈페이지용 짧은 루프 영상/배경 영상', '썸네일·포스터용 이미지 편집']
    }
  ];

  const faqs = [
    {
      question: 'Q1. 어느 정도 기간이 걸리나요?',
      answer: '단순 랜딩 페이지는 보통 2~3주, 기업 홈페이지나 쇼핑몰 결합형은 콘텐츠 준비 상황에 따라 4~8주 정도 소요됩니다. (정확한 일정은 구성 범위와 자료 준비 상태에 따라 달라집니다.)'
    },
    {
      question: 'Q2. 우리가 직접 준비해야 할 자료는 무엇인가요?',
      answer: '기본적으로 회사 로고, 서비스/제품 설명 텍스트, 대표 사진·영상이 있으면 좋습니다. 자료가 부족하더라도 상담을 통해 함께 정리할 수 있으니, 지금 가지고 있는 것만으로도 충분히 시작할 수 있습니다.'
    },
    {
      question: 'Q3. 홈페이지 오픈 후에도 수정·유지보수를 요청할 수 있나요?',
      answer: '네, 가능합니다. 오픈 후 일정 기간 내 발견되는 오류나 간단한 수정은 무상으로 지원하며, 이후에도 콘텐츠 업데이트, 페이지 추가, 디자인 변경 등 유지보수 및 운영 지원 서비스를 제공합니다.'
    },
    {
      question: 'Q4. 직접 글/이미지를 바꾸는 게 어렵지는 않나요?',
      answer: '워드프레스·NextJS 기반으로 제작하며, 관리자 페이지에서 직관적으로 수정할 수 있도록 구성합니다. 오픈 시 간단한 운영 매뉴얼과 함께 텍스트·이미지 수정 방법을 안내해 드리며, 필요 시 추가 교육도 가능합니다.'
    },
    {
      question: 'Q5. 이미 운영 중인 홈페이지 리뉴얼도 가능한가요?',
      answer: '물론입니다. 기존 홈페이지의 구조와 콘텐츠를 분석하여, 개선이 필요한 부분을 중심으로 리뉴얼 방향을 제안해 드립니다. 전체 리뉴얼 또는 부분 개선 중 선택 가능하며, 기존 도메인·데이터 이전도 함께 지원합니다.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-20 lg:py-32">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/contents.webp"
            alt="홈페이지 제작 배경"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <Badge variant="hero" className="mb-6">
              <Monitor className="h-3 w-3 mr-1" />
              Website & Digital Contents
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              홈페이지 제작 &<br />디지털 콘텐츠 제작
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              드론으로 얻은 좋은 데이터와 영상도,<br />
              보여주는 창구인 홈페이지와 콘텐츠가 좋지 않으면 힘을 잃습니다.<br />
              아이엠드론은 드론·산업 서비스를 이해하는 파트너로,<br />
              비즈니스를 설명하고 문의와 매출로 이어지게 하는 홈페이지를 제작합니다.
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
            <h2 className="text-4xl font-bold mb-4">콘텐츠 & 미디어 서비스는?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              아이엠드론의 콘텐츠 & 미디어 서비스는 "드론과 산업 서비스"를 이해하는 팀이 직접 만드는 홈페이지·디지털 콘텐츠입니다. 기업/서비스 소개 홈페이지, 드론·산업 서비스 랜딩 페이지, 쇼핑몰(제품·서비스 예약) 연동 페이지, 항공촬영 영상·사진을 활용한 브랜딩 콘텐츠까지 한 흐름으로 설계하여, "우리가 무엇을 하는 회사인지"를 명확하게 보여주고 "문의·예약·구매"로 이어지도록 만드는 것이 목표입니다. 단순한 예쁜 홈페이지가 아니라, 아이엠드론이 실제로 드론 비즈니스를 운영하며 쌓은 경험을 바탕으로 실제 고객이 이해하고 행동하게 만드는 웹사이트를 제작합니다.
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
              이런 웹·콘텐츠가 필요하신가요?
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
              홈페이지, 왜 아이엠드론에게 맡길까요?
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
            <h2 className="text-4xl font-bold mb-4">제작 진행 프로세스</h2>
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
              홈페이지 제작 후, 무엇을 얻게 되나요?
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
              <h3 className="text-2xl font-semibold mb-4">규모와 목적에 맞는 홈페이지 패키지</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                홈페이지 제작 비용은 페이지 수, 디자인 난이도, 기능(쇼핑몰/폼/다국어 등), 콘텐츠 양에 따라 달라집니다.
              </p>

              <p className="text-muted-foreground mb-6">
                아이엠드론은 대략 다음과 같은 기준으로 맞춤 견적을 제안합니다:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  '베이직 원페이지/랜딩 페이지 - 프로젝트 소개, 행사 안내, 단일 서비스 홍보용',
                  '기업·서비스 홈페이지 패키지 - 메인 + 회사소개 + 서비스 + 포트폴리오 + 문의 등, 드론/산업 서비스 설명에 최적화된 구조',
                  '홈페이지 + 쇼핑몰(우커머스) 결합 패키지 - 서비스 상품(문의/예약) + 제품 판매 기능 연동, 결제까지 연계되는 구조',
                  '콘텐츠·영상 패키지 연동형 - 항공촬영·영상 제작과 함께 진행하는 브랜딩 패키지'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground mb-6">
                필요하신 사이트의 형태와 대략적인 예산 범위만 알려주셔도, 가능한 구성과 단계별 접근 방안을 정리해 맞춤 제안서를 드립니다.
              </p>

              <Button size="lg" variant="primary-blue" asChild>
                <Link href="/contact">
                  홈페이지 제작·리뉴얼 상담하기
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
            우리 비즈니스를 제대로 설명해 줄 '온라인 사무실'을 준비해 보세요.
          </h2>
          <p className="text-xl text-foreground dark:text-white mb-8 leading-relaxed">
            지금 하고 있는 좋은 일들을,<br />
            고객과 파트너에게 명확하고 매력적으로 보여줄 차례입니다.
          </p>
          <p className="text-lg text-foreground dark:text-white mb-8">
            아이엠드론은 <strong className="font-semibold">From Flight to Insight</strong>라는 이름 그대로,<br />
            하늘에서 얻은 데이터와 현장의 경험을<br />
            홈페이지와 디지털 콘텐츠로 풀어내는 파트너가 되겠습니다.
          </p>
          <Button size="lg" variant="primary-blue" asChild>
            <Link href="/contact">
              홈페이지 제작·리뉴얼 상담 요청하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

