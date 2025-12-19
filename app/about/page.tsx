import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Award, 
  CheckCircle2, 
  Database, 
  ShoppingBag,
  Target,
  Eye,
  Lightbulb,
  ChevronRight
} from 'lucide-react';
import { teamMembers } from '@/data/team';
import { generalData } from '@/data/general';
import { experienceData } from '@/data/experience';
import { certificateData } from '@/data/certificate';

export default function AboutPage() {
  // 연혁 데이터를 연도별로 그룹화
  const experiencesByYear = experienceData[0].items.reduce((acc, item) => {
    const year = item.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {} as Record<string, typeof experienceData[0]['items']>);

  // 연도별로 정렬 (최신순)
  const sortedYears = Object.keys(experiencesByYear).sort((a, b) => {
    const yearA = parseInt(a.split(' - ')[0]);
    const yearB = parseInt(b.split(' - ')[0]);
    return yearB - yearA;
  });

  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative py-20 lg:py-32">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about/imdrone-bout-hero-bg.jpg"
            alt="아이엠드론 소개 배경"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="hero" className="mb-6">About Us</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              아이엠드론
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {generalData.about}
            </p>
          </div>
        </div>
      </section>

      {/* 회사 소개 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Our Strengths</Badge>
            <h2 className="text-4xl font-bold mb-4">아이엠드론을 선택해야 하는 이유</h2>
            <p className="text-xl text-muted-foreground">
              전문성과 신뢰성을 갖춘 드론 솔루션 파트너
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 좌측 이미지 */}
            <div className="relative h-[500px] rounded-lg overflow-hidden bg-muted">
              <img
                src="/images/about/imdrone-intro.jpg"
                alt="아이엠드론 소개"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 우측 4개 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="hover-xl">
                <CardHeader>
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Certified Drone Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    국가자격보유, 보험 가입을 완료한 전문 조종 인력이 직접 운용합니다.
                  </p>
                </CardContent>
              </Card>

              <Card variant="hover-xl">
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Industry-Proven Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    건설·에너지·농업·공공안전 등 다양한 산업 현장에서 검증된 프로젝트 경험을 보유하고 있습니다.
                  </p>
                </CardContent>
              </Card>

              <Card variant="hover-xl">
                <CardHeader>
                  <Database className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Data-Driven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    촬영·점검·관제 데이터를 리포트·지도·3D 모델로 제공해 실제 의사결정에 활용할 수 있습니다.
                  </p>
                </CardContent>
              </Card>

              <Card variant="hover-xl">
                <CardHeader>
                  <ShoppingBag className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>One-Stop Service & Store</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    드론 서비스 상담·운영부터 드론·장비 구매까지, 홈페이지와 쇼핑몰에서 한 번에 이용할 수 있습니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* 비전/미션 */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Vision & Mission</Badge>
            <h2 className="text-4xl font-bold mb-4">비전과 미션</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="hover-xl">
              <CardHeader>
                <Eye className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">비전</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  드론 기술로 대한민국 산업 현장의 디지털 전환을 선도하며, 
                  데이터 기반 의사결정 문화를 확산시키는 혁신적인 드론 솔루션 기업
                </p>
              </CardContent>
            </Card>

            <Card variant="hover-xl">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">미션</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>건설·에너지·농업·공공 분야에 최적화된 드론 서비스 제공</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>정확하고 신뢰할 수 있는 데이터 수집과 분석</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>고객의 비즈니스 가치를 극대화하는 원스톱 솔루션</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="hover-xl">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">핵심 가치</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>안전:</strong> 모든 비행의 최우선 가치</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>전문성:</strong> 검증된 기술과 경험</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>혁신:</strong> 지속적인 기술 발전</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* 회사 연혁 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">History</Badge>
            <h2 className="text-4xl font-bold mb-4">회사 연혁</h2>
            <p className="text-xl text-muted-foreground">
              아이엠드론의 성장 과정을 소개합니다
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full" defaultValue="year-0">
            {sortedYears.map((year, index) => (
              <AccordionItem key={year} value={`year-${index}`}>
                <AccordionTrigger className="text-xl font-bold hover:text-primary">
                  {year}년
                  {/* <Badge variant="secondary" className="ml-3">
                    {experiencesByYear[year].length}개 프로젝트
                  </Badge> */}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="space-y-4 pt-4">
                    {experiencesByYear[year].map((item, idx) => (
                      <Card key={idx} variant="hover-sm">
                        <CardHeader>
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 w-16 text-center">
                              <Badge variant="outline" className="text-base font-bold">
                                {item.month}월
                              </Badge>
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg font-normal">{item.title}</CardTitle>
                              <CardDescription>{item.client}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Separator />

      {/* 팀 소개 */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Our Team</Badge>
            <h2 className="text-4xl font-bold mb-4">팀 소개</h2>
            <p className="text-xl text-muted-foreground">
              아이엠드론을 이끌어가는 전문가들을 만나보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col items-center text-center p-8 space-y-6">
                  {/* 프로필 이미지 */}
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-2xl">{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  
                  {/* 정보 */}
                  <div className="space-y-3">
                    <Badge className="mb-2">{member.role}</Badge>
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-base text-muted-foreground">{member.position}</p>
                  </div>
                  
                  {/* 설명 */}
                  <p className="text-muted-foreground leading-relaxed">
                    {member.shortBio}
                  </p>

                  {/* 전문 분야 태그 */}
                  {member.tags && member.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* 버튼 */}
                  <Button asChild className="w-full">
                    <Link href={`/team/${member.id}`}>
                      프로필 보기
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* 팀 페이지로 이동 */}
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/team">
                전체 팀원 보기
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* 기술과 자격 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4">Skills & Certifications</Badge>
            <h2 className="text-4xl font-bold mb-4">보유 기술 및 자격</h2>
            <p className="text-xl text-muted-foreground">
              전문성을 입증하는 기술력과 자격증
            </p>
          </div>

          {/* 보유 기술 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">{certificateData[0].title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificateData[0].items.map((skill, index) => (
                <Card key={index} variant="hover-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">{skill.title}</CardTitle>
                    <CardDescription>{skill.subTitle}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* 자격사항 (회사) */}
          <div>
            <h3 className="text-2xl font-bold mb-6">자격사항</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: '초경량비행장치 사용사업 등록증', image: '/images/about/certificates/business-registration.jpg' },
                { name: '초경량비행장치 신고증명서', image: '/images/about/certificates/aircraft-declaration.jpg' },
                { name: '보험가입인증서', image: '/images/about/certificates/insurance-certificate.jpg' },
                { name: '교관과정훈련이수증명서', image: '/images/about/certificates/instructor-certificate.jpg' },
                { name: '소프트웨어사업자', image: '/images/about/certificates/software-business.jpg' },
              ].map((cert, index) => (
                <Card key={index} variant="lift" className="group overflow-hidden">
                  <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm font-medium leading-tight line-clamp-2">
                      {cert.name}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

