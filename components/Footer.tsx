import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 칼럼 1: 회사 정보 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">아이엠드론</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              드론 기술과 시각화 역량을 기반으로, 건설·에너지·농업·공공안전 현장을 데이터로 관리합니다.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://www.facebook.com/imdrone.site" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://www.instagram.com/imdrone_official" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://www.youtube.com/@imdrone6824" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </Button>

            </div>
          </div>

          {/* 칼럼 2: 서비스 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/aerial" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  항공촬영 & 프리미엄 영상
                </Link>
              </li>
              <li>
                <Link href="/services/construction" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  건설·건축 모니터링
                </Link>
              </li>
              <li>
                <Link href="/services/energy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  에너지 설비 드론 점검
                </Link>
              </li>
              <li>
                <Link href="/services/control" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  드론 관제 & 모니터링
                </Link>
              </li>
              <li>
                <Link href="/services/public-safety" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  공공·해상안전관제
                </Link>
              </li>
              <li>
                <Link href="/services/smart-agri" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  스마트 농업 & NDVI
                </Link>
              </li>
              <li>
                <Link href="/services/hydrogen" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  수소 연료전지 & 응용 솔루션
                </Link>
              </li>
              <li>
                <Link href="/services/contents" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  홈페이지 & 미디어 콘텐츠
                </Link>
              </li>
            </ul>
          </div>

          {/* 칼럼 3: 고객지원 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">고객지원</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  포트폴리오
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  제품 구매
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  견적 문의
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  블로그
                </Link>
              </li>
            </ul>
          </div>

          {/* 칼럼 4: 연락처 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">연락처</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">전화</p>
                  <a href="tel:010-4790-6650" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    010-4790-6650
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">이메일</p>
                  <a href="mailto:imdrone.site@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    imdrone.site@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-sm font-medium min-w-[4.5rem] inline-block">본사</span>
                    <span className="text-sm text-muted-foreground">전남 여수시 성산5길 37</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm font-medium min-w-[4.5rem] inline-block">순천지사</span>
                    <span className="text-sm text-muted-foreground">전남 순천시 충효로 138 3층</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm font-medium min-w-[4.5rem] inline-block">비행장</span>
                    <span className="text-sm text-muted-foreground">전남 여수시 화양면 장수리 711</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* 하단 저작권 및 법적 정보 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} 아이엠드론(IMDRONE). All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              이용약관
            </Link>
            <Link href="/site-map" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              사이트맵
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

