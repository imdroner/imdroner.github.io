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
  HelpCircle,
  FileQuestion,
  DollarSign,
  Camera,
  Shield,
  FileCheck,
  Settings,
  Phone,
  Mail,
  ChevronRight,
  Clock,
  CheckCircle2
} from 'lucide-react';

export default function FAQPage() {
  const categories = [
    {
      id: 'general',
      title: '서비스 일반',
      icon: HelpCircle,
      color: 'text-blue-600',
      description: '아이엠드론의 서비스와 이용 방법에 대한 기본 정보'
    },
    {
      id: 'pricing',
      title: '견적 및 비용',
      icon: DollarSign,
      color: 'text-green-600',
      description: '가격 정책, 견적 요청, 결제 방법에 관한 안내'
    },
    {
      id: 'shooting',
      title: '촬영 및 작업',
      icon: Camera,
      color: 'text-purple-600',
      description: '촬영 진행 과정, 준비사항, 현장 작업 관련 정보'
    },
    {
      id: 'legal',
      title: '법규 및 안전',
      icon: Shield,
      color: 'text-red-600',
      description: '드론 비행 허가, 보험, 안전 관리에 대한 설명'
    },
    {
      id: 'delivery',
      title: '결과물 및 납품',
      icon: FileCheck,
      color: 'text-orange-600',
      description: '작업물 포맷, 수정, 납품 일정 관련 안내'
    },
    {
      id: 'technical',
      title: '기술 및 장비',
      icon: Settings,
      color: 'text-indigo-600',
      description: '드론 장비, 촬영 범위, 기술 스펙에 대한 정보'
    }
  ];

  const faqData = {
    general: [
      {
        question: '아이엠드론에서는 어떤 서비스를 제공하나요?',
        answer: '아이엠드론은 항공촬영 및 영상 제작, 건설·건축 모니터링, 에너지 설비 점검, 드론 관제 및 실시간 모니터링, 공공·해상안전관제, 스마트 농업(NDVI 분석), 수소 연료전지 솔루션, 홈페이지 및 디지털 콘텐츠 제작 등 다양한 드론 기반 솔루션을 제공합니다.'
      },
      {
        question: '드론 촬영이 처음인데, 어디서부터 시작해야 하나요?',
        answer: '먼저 전화(010-4790-6650) 또는 이메일(imdrone.site@gmail.com)로 문의해 주세요. 촬영 목적, 장소, 일정 등을 간단히 알려주시면 맞춤 상담과 견적을 제공해 드립니다. 포트폴리오 페이지에서 유사 프로젝트 사례도 확인하실 수 있습니다.'
      },
      {
        question: '상담과 견적은 무료인가요?',
        answer: '네, 초기 상담과 견적은 모두 무료입니다. 프로젝트 내용을 상세히 논의한 후 정확한 견적서를 제공해 드립니다.'
      },
      {
        question: '개인도 서비스를 이용할 수 있나요?',
        answer: '물론입니다. 기업, 공공기관뿐만 아니라 개인 고객(결혼식, 가족 행사, 부동산 촬영 등)도 서비스를 이용하실 수 있습니다.'
      },
      {
        question: '어떤 산업군과 주로 협업하시나요?',
        answer: '건설·토목, 부동산, 에너지(태양광·풍력), 농업, 관광·리조트, 골프장, 제조업, 공공기관, 방송·영상 제작사 등 다양한 산업과 협업하고 있습니다.'
      }
    ],
    pricing: [
      {
        question: '드론 촬영 비용은 얼마인가요?',
        answer: '프로젝트의 규모, 촬영 시간, 장소, 결과물의 종류(사진/영상/3D 모델링 등)에 따라 달라집니다. 기본 항공촬영은 수십만 원부터 시작하며, 정밀 3D 모델링이나 장기 모니터링 프로젝트는 별도 견적이 필요합니다.'
      },
      {
        question: '견적은 어떻게 받을 수 있나요?',
        answer: '전화, 이메일, 또는 SNS(Instagram, 블로그)를 통해 프로젝트 내용(목적, 장소, 일정, 예산 등)을 알려주시면 24시간 내로 맞춤 견적을 제공해 드립니다.'
      },
      {
        question: '추가 비용이 발생하는 경우는 언제인가요?',
        answer: '원거리 출장(교통비), 특수 장비 사용, 야간 촬영, 긴급 프로젝트, 추가 편집 요청 등의 경우 추가 비용이 발생할 수 있으며, 사전에 투명하게 안내해 드립니다.'
      },
      {
        question: '결제는 어떻게 진행되나요?',
        answer: '정식 견적 확정 후 계약서를 작성하며, 착수금(보통 총액의 50%)을 입금하신 후 작업을 시작합니다. 최종 결과물 전달 시 잔금을 정산합니다. 세금계산서 발행이 가능합니다.'
      },
      {
        question: '할인이나 패키지 상품이 있나요?',
        answer: '장기 계약(정기 모니터링, 시즌별 촬영 등)이나 대규모 프로젝트의 경우 협의를 통해 합리적인 가격을 제안해 드립니다. 문의 시 프로젝트 규모와 일정을 알려주세요.'
      }
    ],
    shooting: [
      {
        question: '촬영은 전국 어디든 가능한가요?',
        answer: '네, 전국 어디든 출장 촬영이 가능합니다. 제주도, 도서 지역도 가능하며, 원거리의 경우 교통비와 숙박비가 별도로 발생할 수 있습니다.'
      },
      {
        question: '촬영 소요 시간은 얼마나 되나요?',
        answer: '프로젝트에 따라 다르지만, 기본 항공촬영은 현장에서 1~3시간 정도 소요됩니다. 대규모 부지나 정밀 3D 모델링의 경우 하루 이상 걸릴 수 있습니다.'
      },
      {
        question: '날씨가 안 좋으면 어떻게 하나요?',
        answer: '드론 촬영은 날씨에 매우 민감합니다. 비, 강풍(초속 10m 이상), 안개 등의 경우 안전을 위해 연기하며, 대체 일정을 협의합니다. 취소 수수료는 발생하지 않습니다.'
      },
      {
        question: '긴급 프로젝트도 가능한가요?',
        answer: '일정에 따라 조율이 가능합니다. 긴급한 경우 먼저 전화로 문의해 주시면 최대한 빠르게 대응해 드리겠습니다. 긴급 프로젝트는 추가 비용이 발생할 수 있습니다.'
      },
      {
        question: '촬영 전에 준비해야 할 것이 있나요?',
        answer: '촬영 장소의 접근 권한(사유지인 경우 소유주 동의), 주변 장애물 정보(고압선, 건물 등), 원하는 구도나 샷 리스트 등을 미리 준비해 주시면 더욱 원활한 촬영이 가능합니다.'
      },
      {
        question: '야간 촬영도 가능한가요?',
        answer: '네, 야간 촬영이 가능합니다. 단, 조명 장비와 특수 촬영 기법이 필요하며, 비행 승인 절차가 까다로울 수 있어 사전 협의가 필수입니다.'
      }
    ],
    legal: [
      {
        question: '드론 비행 허가는 어떻게 진행되나요?',
        answer: '비행 승인이 필요한 지역(공항 인근, 통제구역 등)의 경우 국토교통부, 지방항공청 등에 비행 승인을 신청합니다. 저희가 모든 절차를 대행하며, 보통 3~7일 정도 소요됩니다.'
      },
      {
        question: '관제권이나 비행 금지 구역에서도 촬영 가능한가요?',
        answer: '공항 인근 관제권, 군사시설 주변, 청와대 등 비행 금지 구역은 원칙적으로 불가능하지만, 특별 허가를 통해 가능한 경우도 있습니다. 사전에 위치를 알려주시면 가능 여부를 확인해 드립니다.'
      },
      {
        question: '드론 보험에 가입되어 있나요?',
        answer: '네, 아이엠드론은 초경량비행장치 사용사업자로 정식 등록되어 있으며, 드론 배상책임보험에 가입되어 있습니다. 혹시 모를 사고에 대비하여 철저히 준비하고 있습니다.'
      },
      {
        question: '조종사 자격은 보유하고 있나요?',
        answer: '네, 국토교통부 인증 초경량비행장치 조종자 자격증(무인멀티콥터)을 보유한 전문 조종사가 모든 비행을 진행합니다. 교관 과정도 이수하여 안전하고 숙련된 비행이 가능합니다.'
      },
      {
        question: '안전 관리는 어떻게 하나요?',
        answer: '비행 전 현장 사전 답사, 기상 체크, 장비 점검을 필수로 진행하며, 비행 중에는 안전 거리 확보, 관제 소통, 비상 대응 체계를 갖추고 있습니다. 안전을 최우선으로 작업합니다.'
      }
    ],
    delivery: [
      {
        question: '결과물은 언제 받을 수 있나요?',
        answer: '기본 항공사진은 촬영 후 1~3일, 편집 영상은 7~14일, 정밀 3D 모델링은 2~4주 정도 소요됩니다. 긴급한 경우 일정 조율이 가능하며, 추가 비용이 발생할 수 있습니다.'
      },
      {
        question: '어떤 포맷으로 제공되나요?',
        answer: '사진은 JPG/RAW, 영상은 MP4/MOV, 3D 모델은 OBJ/FBX/LAS 등 다양한 포맷으로 제공 가능합니다. 원하시는 용도에 맞게 포맷을 선택하실 수 있습니다.'
      },
      {
        question: '원본 파일도 제공받을 수 있나요?',
        answer: '네, 계약 시 원본 파일 제공 여부를 협의합니다. 기본 계약에는 편집된 최종본이 포함되며, 원본 파일이 필요한 경우 추가 비용이나 저작권 계약이 필요할 수 있습니다.'
      },
      {
        question: '수정이 가능한가요?',
        answer: '기본 계약에 1~2회의 수정이 포함되어 있습니다. 간단한 색보정, 자막 수정 등은 무료이며, 대규모 재편집이나 추가 촬영이 필요한 경우 별도 협의합니다.'
      },
      {
        question: '저작권은 누구에게 있나요?',
        answer: '기본적으로 저작권은 아이엠드론에 있으며, 고객님은 계약된 용도 내에서 사용권을 갖습니다. 저작권 전체 양도가 필요한 경우 계약 시 협의 가능합니다.'
      },
      {
        question: '결과물을 웹사이트나 SNS에 사용해도 되나요?',
        answer: '네, 고객사의 마케팅 목적(웹사이트, SNS, 홍보 영상 등)으로 자유롭게 사용하실 수 있습니다. 단, 제3자에게 재판매하거나 라이선스를 부여하는 것은 불가합니다.'
      }
    ],
    technical: [
      {
        question: '어떤 드론 장비를 사용하나요?',
        answer: 'DJI Mavic 3 시리즈, Matrice 4 시리즈, Matrice M350 시리즈 등 엔터프라이즈급 드론을 사용하며, 프로젝트 특성에 따라 최적의 장비를 선택합니다. 4K 이상 고해상도 촬영이 가능합니다.'
      },
      {
        question: '최대 촬영 고도와 범위는 어느 정도인가요?',
        answer: '법적 허가 범위 내에서 최대 150m 고도까지 촬영 가능하며(특별 승인 시 더 높게 가능), 넓은 부지는 여러 비행으로 커버할 수 있습니다. 정밀 측량은 수백 헥타르까지 가능합니다.'
      },
      {
        question: '3D 모델링은 어떻게 진행되나요?',
        answer: '드론으로 다각도 항공사진을 촬영한 후, 포토그래메트리(Photogrammetry) 기법으로 3차원 모델을 생성합니다. 건물, 지형, 구조물 등을 정밀하게 디지털화할 수 있습니다.'
      },
      {
        question: '정사영상(Orthophoto)과 일반 항공사진의 차이는 무엇인가요?',
        answer: '일반 항공사진은 원근감이 있는 반면, 정사영상은 왜곡을 보정하여 지도처럼 정확한 측정이 가능한 이미지입니다. 건설 현장, 토지 측량 등에 주로 사용됩니다.'
      },
      {
        question: 'NDVI 분석이 무엇인가요?',
        answer: 'NDVI(Normalized Difference Vegetation Index)는 식생 지수로, 작물의 생육 상태, 스트레스, 병충해 등을 시각적으로 분석할 수 있는 기술입니다. 스마트 농업에서 정밀 농업을 위해 활용됩니다.'
      },
      {
        question: '열화상 촬영도 가능한가요?',
        answer: '네, 열화상(Thermal Imaging) 카메라를 탑재하여 태양광 패널 점검, 건물 단열 진단, 전력 설비 점검 등이 가능합니다. 별도 장비가 필요하므로 사전 문의 바랍니다.'
      }
    ]
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
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
            Frequently Asked Questions
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            자주 묻는 질문
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            고객님들이 자주 궁금해하시는 내용을 정리했습니다.<br />
            원하시는 카테고리를 선택하여 확인해보세요.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">FAQ Categories</Badge>
            <h2 className="text-4xl font-bold mb-4">카테고리별 질문</h2>
            <p className="text-xl text-muted-foreground">
              궁금하신 내용의 카테고리를 선택해주세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="group"
                >
                  <Card variant="hover-lg" className="h-full">
                    <CardHeader className="text-center space-y-4">
                      <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className={`h-8 w-8 ${category.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {category.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Badge variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                        {faqData[category.id as keyof typeof faqData].length}개의 질문
                      </Badge>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* FAQ Sections */}
      {categories.map((category, index) => {
        const IconComponent = category.icon;
        const isEven = index % 2 === 0;
        
        return (
          <div key={category.id}>
            <section 
              id={category.id}
              className={`py-20 scroll-mt-20 ${isEven ? 'bg-background' : 'bg-muted/50'}`}
            >
              <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center`}>
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h2 className="text-4xl font-bold">{category.title}</h2>
                  </div>
                  <p className="text-xl text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {faqData[category.id as keyof typeof faqData].map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${category.id}-${faqIndex}`}>
                          <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                            <div className="flex items-start gap-3">
                              <FileQuestion className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                              <span>{faq.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-base text-muted-foreground leading-relaxed pl-8">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </section>
            {index < categories.length - 1 && <Separator />}
          </div>
        );
      })}

      <Separator />

      {/* Quick Stats */}
      {/* <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="hover-sm" className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold mb-2">36+</div>
                <p className="text-muted-foreground">자주 묻는 질문</p>
              </CardContent>
            </Card>

            <Card variant="hover-sm" className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold mb-2">6</div>
                <p className="text-muted-foreground">카테고리</p>
              </CardContent>
            </Card>

            <Card variant="hover-sm" className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold mb-2">24h</div>
                <p className="text-muted-foreground">답변 제공</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Still Have Questions */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4">Need More Help?</Badge>
            <h2 className="text-4xl font-bold mb-4">
              궁금한 점이 해결되지 않으셨나요?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              FAQ에서 원하는 답변을 찾지 못하셨다면,<br />
              언제든지 문의해 주세요. 빠르고 정확하게 답변해 드리겠습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <Card variant="lift" className="group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold mb-1">전화 문의</h3>
                    <a 
                      href="tel:010-4790-6650"
                      className="text-sm text-primary hover:underline"
                    >
                      010-4790-6650
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="lift" className="group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold mb-1">이메일 문의</h3>
                    <a 
                      href="mailto:imdrone.site@gmail.com"
                      className="text-sm text-primary hover:underline truncate block"
                    >
                      imdrone.site@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button asChild size="lg" variant="primary-blue" className="text-lg px-8 py-6">
            <Link href="/contact">
              문의하기 페이지로 이동
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white dark:text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            지금 바로 프로젝트를 시작하세요
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 dark:text-white/90">
            전문가와 상담하고 견적을 받아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-white/90 text-lg px-8 py-6"
            >
              <a href="tel:010-4790-6650">
                <Phone className="mr-2 h-5 w-5" />
                무료 상담 신청
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <Link href="/projects">
                포트폴리오 보기
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

