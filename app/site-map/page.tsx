import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { projects } from '@/data/projects';
import { products } from '@/data/products';
import {
  Home,
  Building2,
  Users,
  Drone,
  FolderOpen,
  HelpCircle,
  Mail,
  FileText,
  Scale,
  Map,
  ExternalLink,
  Calendar,
  ShoppingBag
} from 'lucide-react';

export const metadata = {
  title: '사이트맵 | 아이엠드론',
  description: '아이엠드론 웹사이트의 모든 페이지를 한눈에 확인하세요. 회사 소개, 서비스, 포트폴리오, 고객 지원 페이지 목록.',
  keywords: ['사이트맵', '페이지 목록', '아이엠드론', '드론 서비스', '항공촬영', '포트폴리오'],
  openGraph: {
    title: '사이트맵 | 아이엠드론',
    description: '아이엠드론 웹사이트의 모든 페이지를 한눈에 확인하세요.',
    type: 'website',
    locale: 'ko_KR',
  },
  alternates: {
    canonical: 'https://imdrone.site/site-map',
  },
};

export default function SitemapPage() {
  const lastUpdated = '2025년 12월 19일';
  
  // JSON-LD 구조화 데이터
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: 'https://imdrone.site',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '사이트맵',
        item: 'https://imdrone.site/site-map',
      },
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '아이엠드론',
    url: 'https://imdrone.site',
    description: '드론 전문 서비스 - 항공촬영, 건설 모니터링, 에너지 점검, 3D 모델링',
    inLanguage: 'ko-KR',
  };
  
  const sitemapData = [
    {
      category: '메인',
      icon: Home,
      color: 'text-blue-600',
      pages: [
        { title: '홈', url: '/', description: '아이엠드론 메인 페이지' }
      ]
    },
    {
      category: '회사 소개',
      icon: Building2,
      color: 'text-green-600',
      pages: [
        { title: '회사 소개', url: '/about', description: '아이엠드론의 비전, 미션, 연혁 및 자격사항' },
        { title: '팀 소개', url: '/team', description: '전문가 팀원 소개 및 프로필' },
        { title: '팀원 프로필', url: '/team/youngjin-park', description: '박영진 대표이사 상세 프로필' }
      ]
    },
    {
      category: '서비스',
      icon: Drone,
      color: 'text-purple-600',
      pages: [
        { title: '항공촬영 & 프리미엄 영상', url: '/services/aerial', description: '4K 드론 촬영 및 시네마급 영상 제작' },
        { title: '건설·건축 모니터링', url: '/services/construction', description: '현장 진척도 관리 및 항공측량' },
        { title: '에너지 설비 드론 점검', url: '/services/energy', description: '태양광·풍력 발전소 점검 및 진단' },
        { title: '드론 관제 & 실시간 모니터링', url: '/services/control', description: '통합 관제 시스템 및 실시간 영상 전송' },
        { title: '공공·해상안전관제', url: '/services/public-safety', description: '재난 대응 및 해양 안전 관리' },
        { title: '스마트 농업 & NDVI 분석', url: '/services/smart-agri', description: '정밀 농업 및 작물 생육 분석' },
        { title: '수소 연료전지 솔루션', url: '/services/hydrogen', description: '친환경 에너지 공급 시스템' },
        { title: '홈페이지 & 콘텐츠 제작', url: '/services/contents', description: '웹사이트 구축 및 디지털 미디어 제작' }
      ]
    },
    {
      category: '포트폴리오',
      icon: FolderOpen,
      color: 'text-orange-600',
      pages: [
        { title: '프로젝트 목록', url: '/projects', description: '완료된 프로젝트 포트폴리오' },
        // 실제 프로젝트 데이터에서 최대 5개만 표시
        ...projects.slice(0, 5).map(project => ({
          title: project.title,
          url: `/projects/${project.id}`,
          description: project.shortDesc
        })),
        // 프로젝트가 5개보다 많으면 "더보기" 표시
        ...(projects.length > 5 ? [
          { 
            title: `외 ${projects.length - 5}개 프로젝트`, 
            url: '/projects', 
            description: '나머지 프로젝트는 포트폴리오 페이지에서 확인하세요' 
          }
        ] : [])
      ]
    },
    {
      category: '제품 구매',
      icon: ShoppingBag,
      color: 'text-cyan-600',
      pages: [
        { title: '제품 목록', url: '/products', description: '엔터프라이즈급 드론 및 장비 구매' },
        // 프리미엄 제품 (개별 페이지 있음)
        ...products
          .filter(product => product.hasDetailedPage)
          .map(product => ({
            title: `${product.name} ⭐`, // 프리미엄 표시
            url: `/products/${product.id}`,
            description: product.description
          })),
        // 일반 제품 일부
        ...products
          .filter(product => !product.hasDetailedPage)
          .slice(0, 3)
          .map(product => ({
            title: product.name,
            url: `/products/${product.id}`,
            description: product.description
          })),
        // 나머지 제품
        { 
          title: `외 ${products.filter(p => !p.hasDetailedPage).length - 3}개 제품`, 
          url: '/products', 
          description: '나머지 제품은 제품 구매 페이지에서 확인하세요' 
        }
      ]
    },
    {
      category: '고객 지원',
      icon: HelpCircle,
      color: 'text-red-600',
      pages: [
        { title: '자주 묻는 질문', url: '/faq', description: '서비스, 견적, 촬영, 법규 관련 FAQ' },
        { title: '문의하기', url: '/contact', description: '견적 문의 및 상담 신청' },
        { title: '개인정보처리방침', url: '/privacy', description: '개인정보 수집 및 이용 안내' },
        { title: '서비스 이용약관', url: '/terms', description: '서비스 제공 조건 및 이용 규정' },
        { title: '사이트맵', url: '/site-map', description: '전체 페이지 목록 (현재 페이지)' }
      ]
    }
  ];

  // 총 페이지 수 계산
  const totalPages = sitemapData.reduce((sum, section) => sum + section.pages.length, 0);

  return (
    <>
      {/* JSON-LD 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="relative z-10 text-center px-4 py-20">
          <Badge variant="hero" className="mb-6 text-base px-6 py-2">
            <Map className="h-4 w-4 mr-2" />
            Sitemap
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            사이트맵
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            아이엠드론 웹사이트의 모든 페이지를 한눈에 확인하세요.<br />
            원하시는 정보로 빠르게 이동할 수 있습니다.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">{totalPages}</div>
                <p className="text-muted-foreground">전체 페이지</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">{sitemapData.length}</div>
                <p className="text-muted-foreground">카테고리</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">최종 업데이트</div>
                    <div className="text-sm">{lastUpdated}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Sitemap Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sitemapData.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={index} variant="hover-sm" className="h-fit">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center`}>
                        <IconComponent className={`h-5 w-5 ${section.color}`} />
                      </div>
                      {section.category}
                    </CardTitle>
                    <CardDescription>
                      {section.pages.length}개의 페이지
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <nav aria-label={`${section.category} 페이지`}>
                      <ul className="space-y-3">
                        {section.pages.map((page, pageIndex) => (
                          <li key={pageIndex}>
                            <Link
                              href={page.url}
                              className="group block p-3 rounded-lg hover:bg-muted transition-colors"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1">
                                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                                    {page.title}
                                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                    {page.description}
                                  </p>
                                </div>
                              </div>
                              <div className="text-xs text-muted-foreground mt-2 font-mono">
                                {page.url}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* SEO & XML Sitemap Info */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">SEO</Badge>
            <h2 className="text-3xl font-bold mb-4">검색 엔진 최적화</h2>
            <p className="text-lg text-muted-foreground">
              아이엠드론은 검색 엔진 최적화를 위해 XML 사이트맵을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  HTML 사이트맵
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  사용자를 위한 시각적 페이지 목록입니다. 원하는 페이지로 빠르게 이동할 수 있습니다.
                </p>
                <Badge variant="secondary">현재 페이지</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  XML 사이트맵
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  검색 엔진 크롤러를 위한 구조화된 데이터입니다. Google, Naver 등의 검색 엔진에 제출됩니다.
                </p>
                <Link 
                  href="/sitemap.xml" 
                  className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                  target="_blank"
                >
                  sitemap.xml 보기
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Quick Links */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">빠른 링크</h2>
          <p className="text-lg text-muted-foreground mb-8">
            자주 찾는 페이지로 바로 이동하세요
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/about" className="group">
              <Card variant="hover-lg" className="h-full">
                <CardContent className="pt-6 pb-6">
                  <Building2 className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                  <p className="font-semibold">회사 소개</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/aerial" className="group">
              <Card variant="hover-lg" className="h-full">
                <CardContent className="pt-6 pb-6">
                  <Drone className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                  <p className="font-semibold">서비스</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/projects" className="group">
              <Card variant="hover-lg" className="h-full">
                <CardContent className="pt-6 pb-6">
                  <FolderOpen className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                  <p className="font-semibold">포트폴리오</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/contact" className="group">
              <Card variant="hover-lg" className="h-full">
                <CardContent className="pt-6 pb-6">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                  <p className="font-semibold">문의하기</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

