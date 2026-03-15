import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import Link from 'next/link';
import { services } from '@/data/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Phone } from 'lucide-react';
import { serviceIconMap } from '@/lib/service-icons';

export const metadata: Metadata = {
  title: `드론 서비스 | ${SITE_NAME}`,
  description: '항공촬영·건설측량·에너지점검·스마트농업·드론관제 등 아이엠드론의 전문 드론 서비스를 소개합니다.',
  alternates: { canonical: '/services' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/services`,
    siteName: SITE_NAME,
    title: `드론 서비스 | ${SITE_NAME}`,
    description: '항공촬영·건설측량·에너지점검·스마트농업·드론관제 등 아이엠드론의 전문 드론 서비스를 소개합니다.',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/aerial-hero.jpg"
            alt="아이엠드론 서비스"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <Badge variant="hero" className="mb-6">Services</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white">드론 서비스</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            항공촬영부터 스마트농업까지, 아이엠드론의 전문 드론 솔루션을 확인하세요.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <Link key={service.id} href={service.link} className="group">
                  <Card variant="lift" className="h-full flex flex-col">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4 flex-1">
                      <CardDescription className="text-sm leading-relaxed flex-1">
                        {service.description}
                      </CardDescription>
                      <div className="flex items-center text-primary text-sm font-medium">
                        자세히 보기
                        <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">서비스 문의</h2>
          <p className="text-xl mb-8 opacity-90">
            원하시는 서비스가 없거나 맞춤 상담이 필요하신가요?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="primary-blue" asChild>
              <Link href="/contact">
                문의하기 <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="tel:010-4790-6650">
                <Phone className="mr-2 h-5 w-5" /> 010-4790-6650
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
