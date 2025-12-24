import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Download, Share2, Cpu, Moon, Eye, Shield, BarChart, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeatureCard, SpecHeaderRow, SpecRow } from '@/components/SpecificationComponents';

export const metadata: Metadata = {
  title: 'DJI Matrice 4T 규격서 | 아이엠드론',
  description: 'DJI Matrice 4T의 상세 제품 사양 및 규격 정보를 확인하세요.',
  openGraph: {
    title: 'DJI Matrice 4T 규격서 | 아이엠드론',
    description: 'DJI Matrice 4T의 상세 제품 사양 및 규격 정보',
  },
};

export default function Matrice4TSpecPage() {
  return (
    <div className="min-h-screen ">
      {/* 헤더 */}
      <div className="border-b ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/products">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  제품으로 돌아가기
                </Button>
              </Link>
            </div>
            {/* <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                PDF 다운로드
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                공유
              </Button>
            </div> */}
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 제품 헤더 */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
            {/* 좌측 칼럼 (7) - 제품명 + 이미지 */}
            <div className="lg:col-span-7">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 ">
                DJI MATRICE 4T
              </h1>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/products/dji-matrice-4t/dji-matrice-4t.webp"
                  alt="DJI Matrice 4T"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>

            {/* 우측 칼럼 (3) - 기능 아이콘 2x3 그리드 */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 gap-4 rounded-2xl p-4 shadow-lg h-full">
                <FeatureCard 
                  icon={Cpu} 
                  title="스마트 작업" 
                  description="AI 기반 자동 임무"
                />
                <FeatureCard 
                  icon={Moon} 
                  title="야간 작업" 
                  description="강화된 야간 성능"
                />
                <FeatureCard 
                  icon={Eye} 
                  title="안정적 시야" 
                  description="선명한 화질"
                />
                <FeatureCard 
                  icon={Shield} 
                  title="안전한 기계" 
                  description="향상된 장애물 감지"
                />
                <FeatureCard 
                  icon={BarChart} 
                  title="정밀 측량" 
                  description="고효율 데이터 수집"
                />
                <FeatureCard 
                  icon={Wrench} 
                  title="업그레이드" 
                  description="전면 개선된 액세서리"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 스펙 테이블 */}
        <div className="rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-2xl font-bold text-gray-900">
              DJI MATRICE 4 THERMAL - 제품 사양
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                {/* 카메라 섹션 */}
                <SpecHeaderRow title="카메라" />
                <SpecRow 
                  label="광각 카메라" 
                  value='1/1.3" CMOS, 48 MP 유효 픽셀, f/1.7, 환산 초점 거리: 24 mm' 
                />
                <SpecRow 
                  label="미디엄 망원 카메라" 
                  value='1/1.3" CMOS, 48 MP 유효 픽셀, f/2.8, 환산 초점 거리: 70 mm' 
                />
                <SpecRow 
                  label="망원 카메라" 
                  value='1/1.5" CMOS, 48 MP 유효 픽셀, f/2.8, 환산 초점 거리: 168 mm' 
                />
                <SpecRow 
                  label="레이저 거리측정기" 
                  value={
                    <>
                      측정 범위: 1,800 m (1 Hz), 정사 입사 범위 (1:5 경사 거리): 600 m (1 Hz)<br/>
                        사각지대: 1 m, 범위 정확도(m): ± (0.2 + 0.0015 × D)
                    </>
                  }
                />
                <SpecRow 
                  label="적외선 열화상 카메라" 
                  value={
                    <>
                      해상도 640 × 512, f/1.0, 환산 초점 거리: 53 mm,<br/>
                      비냉각식 산화바나듐(VOx) 마이크로볼로미터, 고해상도 모드 지원<br/>
                      온도측정범위: -20~150°C(하이게인), 0~550°C(로우게인)<br/>
                      사진촬영간격: JPEG: 0.7/1/2/3/5/7/10/15/20/30/60 초
                    </>
                  }
                />
                <SpecRow 
                  label="NIR 보조등" 
                  value="FOV: 6°, 조사 거리: 100 m" 
                />

                {/* 기체 사양 */}
                <SpecHeaderRow title="기체 사양" />
                <SpecRow 
                  label="무게" 
                  value={
                    <>
                      1,219g<br/>
                      <span className="text-sm text-gray-600">
                        *기체 표준 무게(배터리, 프로펠러, microSD 카드 포함)
                      </span>
                    </>
                  }
                />
                <SpecRow 
                  label="크기" 
                  value={
                    <>
                      <div className="space-y-1">
                        <div>접었을 때: <span className="font-mono">260.6×113.7×138.4 mm</span> (L×W×H)</div>
                        <div>펼쳤을 때: <span className="font-mono">307.0×387.5×149.5 mm</span> (L×W×H)</div>
                        <span className="text-sm text-gray-600">
                          *대각선 길이 438.8mm, 프로펠러 제외 최대 크기
                        </span>
                      </div>
                    </>
                  }
                  highlight
                />
                <SpecRow 
                  label="최대 이륙 무게" 
                  value="표준 프로펠러: 1,420 g / 저소음 프로펠러: 1,430 g" 
                />
                <SpecRow 
                  label="GNSS" 
                  value={
                    <>
                      GPS + Galileo + BeiDou + GLONASS<br/>
                      <span className="text-sm text-gray-600">
                        *GLONASS는 RTK 모듈이 활성화된 경우에만 지원
                      </span>
                    </>
                  }
                />
                <SpecRow 
                  label="최대 비행 시간" 
                  value="49분 (표준 프로펠러, 무풍)" 
                  highlight
                />
                <SpecRow 
                  label="최대 상승 / 하강 속도" 
                  value="10 m/s  /  8 m/s" 
                />
                <SpecRow 
                  label="내풍 가능 풍속" 
                  value="12 m/s" 
                />
                <SpecRow 
                  label="작동 온도" 
                  value="-10 ~ 40 °C" 
                />

                {/* 조종기 */}
                <SpecHeaderRow title="조종기" />
                <SpecRow 
                  label="모델명" 
                  value="DJI RC Plus 2 Enterprise" 
                />
                <SpecRow 
                  label="전송 시스템" 
                  value="O4 Enterprise" 
                  highlight
                />
                <SpecRow 
                  label="최대 전송 거리" 
                  value="25 km (FCC) / 12 km (CE / SRRC / MIC)" 
                />
                <SpecRow 
                  label="이미지 전송 작동 대역" 
                  value={
                    <div className="space-y-1">
                      <div>2.4000~2.4835 GHz</div>
                      <div>5.725~5.850 GHz</div>
                      <div>5.1GHz (수신 전용)</div>
                    </div>
                  }
                />

                {/* 앱 */}
                <SpecHeaderRow title="소프트웨어" />
                <SpecRow 
                  label="앱" 
                  value="DJI Pilot 2" 
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* 푸터 정보 */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-sm text-gray-600 mb-1">웹사이트</div>
              <a 
                href="https://imdrone.site" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                www.imdrone.site
              </a>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">이메일</div>
              <a 
                href="mailto:imdrone.site@gmail.com"
                className="text-blue-600 hover:underline font-medium"
              >
                imdrone.site@gmail.com
              </a>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">전화</div>
              <a 
                href="tel:010-4790-6650"
                className="text-blue-600 hover:underline font-medium"
              >
                010-4790-6650
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/contact">
            <Button size="lg" className="text-lg px-8 py-6">
              제품 문의하기
            </Button>
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            상세한 견적 및 데모 시연은 문의 부탁드립니다
          </p>
        </div>
      </div>
    </div>
  );
}
