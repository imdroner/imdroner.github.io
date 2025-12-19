import Link from 'next/link';
import { generalData } from '@/data/general';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Mail, 
  Phone, 
  Instagram, 
  Youtube, 
  FileText,
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle2,
  Send,
  Headphones,
  ChevronRight
} from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: '전화 문의',
      description: '빠른 상담이 필요하신 경우',
      value: '010-4790-6650',
      href: 'tel:010-4790-6650',
      color: 'text-blue-600',
      available: '평일 09:00 - 18:00'
    },
    {
      icon: Mail,
      title: '이메일 문의',
      description: '상세한 내용 전달 시',
      value: 'imdrone.site@gmail.com',
      href: 'mailto:imdrone.site@gmail.com',
      color: 'text-green-600',
      available: '24시간 접수 가능'
    },
    {
      icon: MessageSquare,
      title: 'SNS 문의',
      description: '간편하게 소통하기',
      value: 'Instagram DM',
      href: 'https://instagram.com/imdrone_official',
      color: 'text-pink-600',
      available: '실시간 답변'
    }
  ];

  const inquiryTypes = [
    {
      title: '프로젝트 견적 요청',
      description: '서비스 내용, 촬영 일정, 예산 등을 알려주시면 맞춤 견적을 제공해 드립니다.',
      icon: FileText
    },
    {
      title: '기술 상담',
      description: '드론 촬영, 3D 모델링, 디지털 트윈 등 기술적인 사항에 대해 상담해 드립니다.',
      icon: Headphones
    },
    {
      title: '포트폴리오 요청',
      description: '유사 프로젝트 사례와 상세 포트폴리오를 제공해 드립니다.',
      icon: CheckCircle2
    },
    {
      title: '파트너십 제안',
      description: '협력 제안, 제휴 문의 등 비즈니스 파트너십에 대해 논의합니다.',
      icon: Send
    }
  ];

  const faqs = [
    {
      question: '견적은 어떻게 받을 수 있나요?',
      answer: '전화, 이메일, SNS 중 편한 방법으로 문의해 주세요. 프로젝트 내용(촬영 장소, 목적, 일정 등)을 알려주시면 24시간 내로 맞춤 견적을 제공해 드립니다.'
    },
    {
      question: '긴급 프로젝트도 가능한가요?',
      answer: '가능합니다. 일정에 따라 조율이 필요할 수 있으니 먼저 전화로 문의해 주시면 빠르게 대응해 드리겠습니다.'
    },
    {
      question: '전국 어디든 촬영 가능한가요?',
      answer: '네, 전국 어디든 출장 촬영이 가능합니다. 원거리의 경우 교통비가 별도로 발생할 수 있습니다.'
    },
    {
      question: '촬영 허가는 어떻게 진행되나요?',
      answer: '비행 승인이 필요한 지역의 경우 저희가 대행하여 진행해 드립니다. 사전에 필요한 서류와 절차를 안내해 드립니다.'
    },
    {
      question: '결과물 수정이 가능한가요?',
      answer: '기본 계약에 1~2회의 수정이 포함되어 있으며, 추가 수정이 필요한 경우 협의하여 진행합니다.'
    },
    {
      question: '계약 및 결제는 어떻게 진행되나요?',
      answer: '정식 견적 확정 후 계약서를 작성하며, 착수금(50%) 입금 후 작업을 시작합니다. 최종 결과물 전달 시 잔금을 정산합니다.'
    }
  ];

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
            Contact Us
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            문의하기
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            프로젝트에 대한 문의사항이나 상담이 필요하신가요?<br />
            언제든지 편하게 연락주세요.
          </p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Contact Methods</Badge>
            <h2 className="text-4xl font-bold mb-4">빠른 문의 방법</h2>
            <p className="text-xl text-muted-foreground">
              프로젝트 특성에 맞는 방법으로 편하게 연락주세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} variant="hover-lg" className="text-center">
                  <CardHeader className="space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className={`h-8 w-8 ${method.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{method.title}</CardTitle>
                      <CardDescription className="text-base">
                        {method.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a 
                      href={method.href}
                      className="block text-lg font-bold text-primary hover:underline"
                      target={method.icon === MessageSquare ? '_blank' : undefined}
                      rel={method.icon === MessageSquare ? 'noopener noreferrer' : undefined}
                    >
                      {method.value}
                    </a>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{method.available}</span>
                    </div>
                    <Button asChild className="w-full" variant="primary-blue">
                      <a 
                        href={method.href}
                        target={method.icon === MessageSquare ? '_blank' : undefined}
                        rel={method.icon === MessageSquare ? 'noopener noreferrer' : undefined}
                      >
                        {method.title}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Inquiry Types */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Inquiry Guide</Badge>
            <h2 className="text-4xl font-bold mb-4">문의 유형별 안내</h2>
            <p className="text-xl text-muted-foreground">
              목적에 맞는 문의를 선택하시면 더욱 빠르고 정확한 답변을 받으실 수 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {inquiryTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} variant="hover-sm">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {type.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Social Networks */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Social Network</Badge>
            <h2 className="text-4xl font-bold mb-4">소셜 네트워크</h2>
            <p className="text-xl text-muted-foreground">
              다양한 채널을 통해 아이엠드론과 소통하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {generalData.contacts.map((contact) => (
              <Card key={contact.label} variant="lift" className="group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {contact.label === 'Email' && <Mail className="h-7 w-7 text-primary" />}
                      {contact.label === 'Instagram' && <Instagram className="h-7 w-7 text-pink-500" />}
                      {contact.label === 'Youtube' && <Youtube className="h-7 w-7 text-red-500" />}
                      {contact.label === 'Blog' && <FileText className="h-7 w-7 text-green-600" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{contact.label}</h3>
                      <a 
                        href={contact.href} 
                        className="text-primary hover:underline text-sm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {contact.value}
                      </a>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold mb-4">자주 묻는 질문</h2>
            <p className="text-xl text-muted-foreground">
              고객님들이 자주 문의하시는 내용을 정리했습니다
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Business Hours & Location */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Business Info</Badge>
            <h2 className="text-4xl font-bold mb-4">업무 안내</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="hover-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">영업 시간</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">평일</span>
                  <span className="text-muted-foreground">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">토요일</span>
                  <span className="text-muted-foreground">예약 시 가능</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">일요일/공휴일</span>
                  <span className="text-muted-foreground">휴무</span>
                </div>
                <p className="text-sm text-muted-foreground pt-4">
                  ※ 긴급 프로젝트의 경우 시간 외에도 대응 가능합니다
                </p>
              </CardContent>
            </Card>

            <Card variant="hover-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">오시는 길</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">사업장 소재지</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    전라남도 여수시 성산5길 37<br />
                    
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">방문 상담</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    사전 예약 후 방문해 주시면<br />
                    더욱 자세한 상담이 가능합니다
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white dark:text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            지금 바로 문의하세요
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 dark:text-white/90">
            전문가와 상담하고 프로젝트를 시작하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-white/90 text-lg px-8 py-6"
            >
              <a href="tel:010-4790-6650">
                <Phone className="mr-2 h-5 w-5" />
                전화 상담하기
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <a href="mailto:imdrone.site@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                이메일 문의
              </a>
            </Button>
          </div>
          <p className="text-sm text-white/80 dark:text-white/80 mt-8">
            영업시간: 평일 09:00 - 18:00 | 이메일 문의는 24시간 접수 가능
          </p>
        </div>
      </section>
    </main>
  );
}
