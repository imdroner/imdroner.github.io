import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/config';
import { generalData } from '@/data/general';
import {
  ArrowRight,
  BarChart3,
  Building2,
  Camera,
  CheckCircle2,
  ClipboardList,
  FileText,
  Radar,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Wrench,
} from 'lucide-react';

const pageTitle = '도원씨엔씨 × 아이엠드론 드론 AI 외벽 진단 협업 제안';
const pageDescription =
  '아파트 외벽 크랙 보수·재도장·옥상 방수 공사를 위한 드론 고해상도 촬영, 열화상 점검, AI 이상 후보 탐지, Before & After 리포트 협업 제안입니다.';

export const metadata: Metadata = {
  title: `${pageTitle} | ${SITE_NAME}`,
  description: pageDescription,
  alternates: {
    canonical: '/proposals/dowon-cnc-drone-ai-diagnosis',
  },
  openGraph: {
    type: 'article',
    locale: 'ko_KR',
    url: `${SITE_URL}/proposals/dowon-cnc-drone-ai-diagnosis`,
    siteName: SITE_NAME,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: `${SITE_URL}/images/proposals/dowon-cnc/cover-facade.jpg`,
        width: 1600,
        height: 900,
        alt: '드론 AI 외벽 진단 협업 제안',
      },
    ],
  },
};

const proposalImages = {
  cover: '/images/proposals/dowon-cnc/cover-facade.jpg',
  construction: '/images/proposals/dowon-cnc/construction-service.jpg',
  energy: '/images/proposals/dowon-cnc/energy-service.jpg',
  publicSafety: '/images/proposals/dowon-cnc/public-safety-service.jpg',
  before: '/images/proposals/dowon-cnc/before-sample.jpg',
  after: '/images/proposals/dowon-cnc/after-sample.jpg',
  thermal: '/images/proposals/dowon-cnc/thermal-sample.jpg',
  matrice4t: '/images/proposals/dowon-cnc/matrice4t.jpg',
  mavic3Thermal: '/images/proposals/dowon-cnc/mavic3-thermal.jpg',
  report: '/images/proposals/dowon-cnc/report-sample.jpg',
  siteInspection: '/images/proposals/dowon-cnc/site-inspection.jpg',
};

const collaborationCards = [
  {
    title: '도원씨엔씨',
    description: '외벽 크랙 보수, 재도장, 옥상 방수, 폴리우레아·방수 공법, 시설물 유지관리 시공',
    icon: Wrench,
  },
  {
    title: '아이엠드론',
    description: '고해상도 드론 촬영, 열화상 점검, 위치 기반 이미지 기록, AI 이상 후보 탐지, 리포트 제공',
    icon: Radar,
  },
  {
    title: '공동 제안 상품',
    description: '공사 전 진단부터 보수 범위 합의, 공사 후 검증까지 연결하는 데이터 기반 보수공사 패키지',
    icon: Sparkles,
  },
];

const strengths = [
  {
    title: '드론 촬영·운용',
    description: '고해상도 사진·영상 촬영과 현장 목적에 맞춘 비행 계획을 수립합니다.',
    icon: Camera,
  },
  {
    title: '건설·건축 모니터링',
    description: '공정관리, 구조물·시설물 점검, 정사영상·3D 모델·포인트클라우드 제작 경험을 보유합니다.',
    icon: Building2,
  },
  {
    title: '에너지·열화상 점검',
    description: '태양광·플랜트 등 광역 설비를 열화상·고해상도 영상으로 비접촉 점검합니다.',
    icon: Thermometer,
  },
  {
    title: '데이터 기반 리포트',
    description: '위치 기반 이미지, 전후 비교, 보수 우선순위, 보고용 자료를 제작합니다.',
    icon: FileText,
  },
];

const applications = [
  {
    title: '외벽 크랙·도장 박리',
    description: '고층부와 접근 곤란 구간을 근접 촬영해 균열, 박리, 오염·변색 위치를 기록합니다.',
  },
  {
    title: '누수·습기 의심 구간',
    description: '열화상과 RGB 이미지를 함께 비교해 온도 이상, 습기 체류, 열교 후보를 선별합니다.',
  },
  {
    title: '옥상 방수·배수 상태',
    description: '방수층 들뜸, 균열, 배수 불량, 물고임 등 보수 전 확인이 필요한 구간을 촬영합니다.',
  },
  {
    title: '공사 전후 검증',
    description: '동일 위치·유사 각도 촬영으로 보수 전후 상태를 비교하고 하자·민원 대응 자료로 활용합니다.',
  },
];

const processSteps = [
  ['01', '상담·현장 분석', '단지 위치, 동 수, 외벽/옥상 범위, 보수 목적, 필요한 데이터 형식을 파악합니다.'],
  ['02', '비행 가능 검토', '비행 제한 구역, 고도 제한, 주변 장애물, 입주민 고지·안전 이슈를 확인합니다.'],
  ['03', '촬영 계획 수립', '동/라인/층 기준 촬영 순서, RGB·열화상 구간, 동일 위치 전후 비교 기준을 설계합니다.'],
  ['04', '현장 촬영', '사전 안전 브리핑 후 고해상도 RGB·열화상 데이터를 수집합니다.'],
  ['05', '분석·정리', '이상 후보 위치화, 유형 분류, 보수 우선순위 및 이미지 증거를 정리합니다.'],
  ['06', '리포트 납품', 'PDF 요약본, 원본 이미지, 전후 비교자료, 관리사무소 제출용 자료를 제공합니다.'],
];

const deliverables = [
  ['점검 위치도', '동·라인·층 기준으로 문제 후보 위치를 정리합니다.'],
  ['RGB/열화상 이미지 세트', '각 이상 지점의 고해상도 사진과 열화상 이미지를 제공합니다.'],
  ['분석 리포트', '유형별 분류, 심각도, 보수 우선순위, 조치 권고를 정리합니다.'],
  ['전후 비교자료', '공사 전·후 동일 구간 기록으로 결과를 검증합니다.'],
  ['원본 데이터', '고객사·시공사의 자체 보관 및 재분석용 이미지를 제공합니다.'],
  ['관리 이력화', '정기점검·하자 대응·민원 설명자료로 재활용할 수 있습니다.'],
];

const pilotPackages = [
  {
    name: 'A. 공사 수주 지원용 기본 점검',
    price: '300만~350만 원 + VAT',
    summary: 'RGB·열화상 동시 촬영 + 이상 후보 표시 + 제안용 요약 리포트',
    use: '단지 제안 / 보수공사 필요성 설명',
  },
  {
    name: 'B. 간이 3D 포함형',
    price: '350만~450만 원 + VAT',
    summary: '기본 점검 + 설명용 간이 3D 시각화 + 위치 이해 자료',
    use: '입주자대표회의·관리사무소 설득자료 강화',
  },
  {
    name: 'C. 공사 후 전후 비교 옵션',
    price: '별도 협의',
    summary: '보수 후 동일 구간 재촬영 + Before & After 비교자료',
    use: '시공 결과 검증 / 민원 대응',
  },
];


const caseImageBase = '/images/proposals/dowon-cnc/case-studies';

const thermalCaseStudies = [
  {
    id: 'CASE 01',
    title: '처마 하부·외벽 일부 온도 편차',
    target: '외벽/처마',
    thermal: `${caseImageBase}/dji_20230530135731_0035_t.jpg`,
    rgb: `${caseImageBase}/dji_20230530135731_0035_v.jpg`,
    finding: '처마 하부와 외벽 일부에서 주변과 다른 온도 분포가 확인되며, 외벽 중앙 세로형 저온 영역과 우측 하단 사선형 저온 영역이 나타났습니다.',
    cause: '외벽 내부 수분·습기 분포 차이, 보수·재도장 이력, 철근콘크리트 열교, 마감층 두께·재질 차이 가능성',
    action: '온도 이상 부위 중심 육안조사, 타진조사, 균열·누수 정밀 점검, 동일 부위 정기 모니터링',
  },
  {
    id: 'CASE 02',
    title: '처마 하부 연속 저온 및 세로형 저온 영역',
    target: '외벽/차양부',
    thermal: `${caseImageBase}/dji_20230530140020_0048_t.jpg`,
    rgb: `${caseImageBase}/dji_20230530140020_0048_v.jpg`,
    finding: '처마 하부와 외벽 상단을 따라 연속적인 저온 분포가 확인되고, 중앙부 세로 방향 저온 영역은 RGB 영상의 미세한 변색·보수 흔적과 일부 대응됩니다.',
    cause: '처마·슬라브 접합부 열교, 외벽 내부 수분, 보수·재도장 이력, 미장·도장층 재질 차이 가능성',
    action: '처마 하부와 세로형 저온 영역 현장 확인, 박리·들뜸 타진조사, 균열·누수 점검, 동일 조건 재촬영 비교',
  },
  {
    id: 'CASE 03',
    title: '원형 구조물 우측 세로형 저온 영역',
    target: '원형 외벽',
    thermal: `${caseImageBase}/dji_20230530140511_0077_t.jpg`,
    rgb: `${caseImageBase}/dji_20230530140511_0077_v.jpg`,
    finding: '원형 구조물 전반은 비교적 균일하나, 우측 외벽에 상부에서 하부로 이어지는 세로형 저온 영역이 뚜렷하게 확인됩니다.',
    cause: '외벽 내부 수분, 보수·재도장 이력, 구조체 또는 기둥부 열교, 외벽 마감재 두께·재질 차이 가능성',
    action: '세로형 이상 부위의 균열·백화·누수 흔적 확인, 타진조사, 함수율 측정 또는 누수 진단, 계절·시간대별 재촬영',
  },
  {
    id: 'CASE 04',
    title: '금속 지붕 표면 열화와 온도 편차',
    target: '금속 지붕',
    thermal: `${caseImageBase}/dji_20230530145937_0013_t.jpg`,
    rgb: `${caseImageBase}/dji_20230530145937_0013_v.jpg`,
    finding: '금속 지붕 일부 세로 패널에서 낮은 온도 영역이 반복 확인되며, RGB 영상에서는 광범위한 도막 박리와 노후화가 확인됩니다.',
    cause: '지붕 도막 노후화·박리, 산화·풍화에 따른 방사율 변화, 오염·부식 초기 단계, 표면 마감 상태 차이 가능성',
    action: '도막 박리 구간 부식 여부 점검, 국부 보수·재도장, 체결부·실링·누수 흔적 점검, 열화상 정기 모니터링',
  },
  {
    id: 'CASE 05',
    title: '외벽 패널 줄눈부 연속 저온',
    target: '패널 외벽',
    thermal: `${caseImageBase}/dji_20230530151712_0028_t.jpg`,
    rgb: `${caseImageBase}/dji_20230530151712_0028_v.jpg`,
    finding: '외벽 패널은 전반적으로 균일하나, 중앙부 세로 줄눈과 일부 수평 줄눈을 따라 주변보다 낮은 온도 영역이 연속적으로 나타납니다.',
    cause: '외벽 패널 접합부 열교, 줄눈 내부 구조재·고정부 열전도 차이, 실링재 노후화 또는 충진 상태 차이 가능성',
    action: '세로·수평 줄눈 실링재 균열·탈락·노후화 확인, 누수·접착 상태 점검, 동일 조건 재촬영, 필요 시 줄눈 보수',
  },
  {
    id: 'CASE 06',
    title: '태양광 모듈 스트링별 온도 불균형',
    target: '태양광 모듈',
    thermal: `${caseImageBase}/dji_20230531143627_0085_t.jpg`,
    rgb: `${caseImageBase}/dji_20230531143627_0085_v.jpg`,
    finding: '태양광 모듈 대부분은 균일하지만 일부 모듈과 스트링에서 국부적인 고온·저온 편차가 확인되며, 급격한 Hot Spot은 확인되지 않습니다.',
    cause: '모듈·셀 출력 불균형, 셀 열화 또는 제조 편차, 스트링별 부하 차이, 부분 음영·오염, 커넥터·바이패스 다이오드 초기 이상 가능성',
    action: 'IV Curve·발전량 점검, 스트링별 인버터 데이터 비교, 오염·음영·손상 확인, 커넥터·배선 점검, 정기 열화상 점검',
  },
  {
    id: 'CASE 07',
    title: '균열·도막 박리와 열적 이상 대응',
    target: '외벽 균열',
    thermal: `${caseImageBase}/dji_20230609122339_0097_t.jpg`,
    rgb: `${caseImageBase}/dji_20230609122339_0097_v.jpg`,
    finding: '외벽 중앙 사각형 온도 편차와 수평 균열 구간의 온도 차이가 확인되며, RGB 영상의 균열·도막 박리·보수 흔적과 공간적으로 연관됩니다.',
    cause: '외벽 마감재 균열·박리, 균열을 통한 우수·습기 침투, 보수 이력, 내부 공동 또는 마감재 들뜸, 구조체 열교 가능성',
    action: '균열·도막 박리 범위 육안조사, 타진조사, 함수율·누수 진단, 균열 보수·방수 보강·재도장, 보수 후 재촬영',
  },
  {
    id: 'CASE 08',
    title: '대형 세로형 저온 영역과 외벽 열화',
    target: '노후 외벽',
    thermal: `${caseImageBase}/dji_20230609122409_0102_t.jpg`,
    rgb: `${caseImageBase}/dji_20230609122409_0102_v.jpg`,
    finding: '외벽 중앙 상부에 대형 세로형 저온 영역이 확인되고, 수평·세로 균열 및 보수 흔적과 일부 대응되는 열적 이상이 나타납니다.',
    cause: '균열을 통한 우수 침투와 내부 습기 축적, 기존 보수·재도장, 마감층 박리 또는 내부 공동, 장기 노출에 따른 방수 성능 저하 가능성',
    action: '중앙부·균열 구간 육안조사, 타진조사, 함수율·누수 진단, 균열·도막 보수 및 방수 성능 점검, 보수 후 재촬영',
  },
  {
    id: 'CASE 09',
    title: '옹벽 표면 오염·풍화와 온도 불균일',
    target: '콘크리트 옹벽',
    thermal: `${caseImageBase}/dji_20230612154210_0002_t.jpg`,
    rgb: `${caseImageBase}/dji_20230612154210_0002_v.jpg`,
    finding: '옹벽 전면은 비교적 균일하지만 상부와 중앙부에 다수의 온도 불균일이 확인되며, RGB 영상의 오염·변색·풍화 상태와 일부 대응됩니다.',
    cause: '콘크리트 표면 풍화·오염, 우수 유입과 건조 상태 차이, 타설 이음부 또는 보수 이력, 표면 마감재 열화, 일사·음영 조건 영향 가능성',
    action: '옹벽 상부 및 온도 편차 구간 육안조사, 배수 상태 점검, 함수율·타진조사, 표면 세척 후 재점검, 정기 열화상 관리',
  },
  {
    id: 'CASE 10',
    title: '외벽 전면 도막 박리·부풀음과 불균일 열 분포',
    target: '노후 외벽',
    thermal: `${caseImageBase}/dji_20231121111917_0015_t.jpg`,
    rgb: `${caseImageBase}/dji_20231121111917_0015_v.jpg`,
    finding: '외벽 표면에 다수의 국부 온도 편차가 광범위하게 분포하며, RGB 영상의 도막 박리·부풀음·박락·풍화와 상당 부분 대응됩니다.',
    cause: '장기 노후화, 방수 성능 저하와 수분 침투, 마감재 접착력 저하, 반복 일사·온도 변화, 과거 보수 이력 가능성',
    action: '외벽 전면 손상 범위 조사, 타진조사, 함수율·누수 진단, 광범위 손상 구간 전체 재도장·방수 보강, 보수 후 열화상 재점검',
  },
  {
    id: 'CASE 11',
    title: '지붕 노후화와 일반적 열 분포',
    target: '지붕/처마',
    thermal: `${caseImageBase}/dji_20231122142416_0035_t.jpg`,
    rgb: `${caseImageBase}/dji_20231122142416_0035_v.jpg`,
    finding: '지붕면은 비교적 균일하며 국부 고온·저온 이상은 확인되지 않고, 처마 하부 저온 영역과 창호 주변 온도 차이는 구조·일사 조건에 따른 일반 패턴으로 판단됩니다.',
    cause: '처마 슬래브·보 구조부 열교, 처마부 일사·음영 차이, 지붕 마감재 장기 노후화와 표면 오염, 구조·단열 배치 영향 가능성',
    action: '지붕 체결·표면 손상·부식 정기 점검, 처마·창호 실링과 방수 상태 확인, 우천 후 누수 흔적 확인, 정기 열화상 모니터링',
  },
  {
    id: 'CASE 12',
    title: '타일 마감 외벽 저온 영역과 손상 의심',
    target: '타일 외벽',
    thermal: `${caseImageBase}/dji_20231122143352_0086_t.jpg`,
    rgb: `${caseImageBase}/dji_20231122143352_0086_v.jpg`,
    finding: '타일 마감 외벽 중앙부를 따라 광범위한 수평 저온 영역이 확인되며, RGB 영상의 균열·줄눈 손상·타일 박락·탈락 의심 부위와 일부 대응됩니다.',
    cause: '타일 줄눈 균열과 우수 침투, 타일 마감층 들뜸·박리, 내부 수분 축적, 접착력 저하, 반복 온도 변화와 수분 침투 가능성',
    action: '균열·타일 탈락 의심 부위 육안조사, 타진조사, 함수율·누수 진단, 위험 타일 긴급 보수, 줄눈 보수·방수 보강·재시공 검토',
  },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl dark:text-white">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p> : null}
    </div>
  );
}

export default function DowonCncDroneAiDiagnosisProposalPage() {
  return (
    <main className="bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={proposalImages.cover} alt="드론 AI 외벽 진단 제안 표지" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/90 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-sky-400/15 px-4 py-2 text-sm font-semibold text-sky-200 ring-1 ring-sky-300/30">
              도원씨엔씨 × 아이엠드론 협업 제안
            </span>
            <h1 className="mt-8 text-4xl font-black tracking-tight text-white md:text-6xl">
              아파트 외벽 보수공사를 위한<br className="hidden md:block" /> 드론 AI 진단·열화상 점검
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              외벽 크랙·도장 박리·누수 의심 구간을 촬영·분석하고, 공사 전후를 데이터로 기록하는 협업형 점검 서비스입니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-200">
              {['고해상도 외벽 촬영', '열화상 점검', 'AI 이상 후보 탐지', 'Before & After 리포트'].map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <p className="text-sm font-semibold text-sky-300">아이엠드론</p>
            <p className="mt-2 text-2xl font-bold">드론 기반 데이터 전문 기업</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg leading-8 text-slate-200">
              아이엠드론은 항공촬영·건설측량·에너지점검·스마트농업·드론관제 전문 서비스 역량을 기반으로, 시공사와 관리사무소가 실제로 필요한 데이터와 뷰포인트를 기준으로 촬영·분석·보고합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Collaboration"
            title="보수 시공 역량과 드론 데이터의 결합"
            description="도원씨엔씨의 외벽 보수·방수 시공 역량에 아이엠드론의 촬영·분석·기록 데이터를 결합합니다."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {collaborationCards.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <Icon className="h-10 w-10 text-sky-500" />
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [proposalImages.construction, '건설·건축 모니터링'],
              [proposalImages.energy, '열화상 기반 설비 점검'],
              [proposalImages.publicSafety, '시설물·공공 인프라 점검'],
            ].map(([src, label]) => (
              <figure key={label} className="overflow-hidden rounded-3xl bg-slate-100 shadow-sm dark:bg-slate-900">
                <img src={src} alt={label} className="h-56 w-full object-cover" />
                <figcaption className="px-5 py-4 text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why IMDRONE" title="아이엠드론 역량 요약" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
                <Icon className="h-9 w-9 text-sky-500" />
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Application"
            title="아파트 외벽·옥상 적용 범위"
            description="도원씨엔씨의 보수·방수 업무와 연결되는 점검 대상을 중심으로 구성했습니다."
          />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="grid gap-5 md:grid-cols-2">
              {applications.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 p-6 dark:border-slate-800">
                  <CheckCircle2 className="h-7 w-7 text-emerald-500" />
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl dark:bg-slate-900">
              <img src={proposalImages.siteInspection} alt="현장 점검 데이터 예시" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="진행 프로세스"
            description="건설·에너지 점검 프로세스를 아파트 외벽 보수 협업에 맞게 재구성했습니다."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(([number, title, description]) => (
              <div key={number} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <span className="text-sm font-bold text-sky-300">{number}</span>
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl bg-sky-400/10 p-6 ring-1 ring-sky-300/20">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 h-7 w-7 flex-none text-sky-300" />
              <div>
                <h3 className="text-lg font-bold">개인정보·사생활 보호 원칙</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  촬영 전 관리사무소 고지, 세대 창문·베란다 등 사생활 노출 구간 최소화 또는 블러 처리, 촬영 데이터의 진단·보수 목적 외 사용 금지를 기본 원칙으로 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technology"
            title="활용 장비·기술 스펙"
            description="홈페이지 제품 데이터 기준으로 외벽·열화상 점검에 적합한 장비 스펙을 반영했습니다."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-900">
              <img src={proposalImages.matrice4t} alt="DJI Matrice 4T" className="h-56 w-full rounded-2xl object-contain bg-white" />
              <h3 className="mt-5 text-xl font-bold">DJI Matrice 4T</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                광학 + 열화상 + 레이저 거리측정 기반 멀티센서 시스템, 640×512 열화상, 최대 49분 비행시간을 활용할 수 있습니다.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-900">
              <img src={proposalImages.mavic3Thermal} alt="DJI Mavic 3 Thermal" className="h-56 w-full rounded-2xl object-contain bg-white" />
              <h3 className="mt-5 text-xl font-bold">DJI Mavic 3 Thermal</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                640×512 열화상, 20MP 고해상도 촬영, RTK 모듈 지원, 최대 45분 비행시간으로 소규모·중규모 점검에 적합합니다.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 shadow-sm dark:bg-slate-900">
              <img src={proposalImages.thermal} alt="열화상 이상 패턴 해석 예시" className="h-56 w-full rounded-2xl object-cover" />
              <h3 className="mt-5 text-xl font-bold">열화상 + RGB 복합 분석</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                열화상은 균열 자체를 직접 판별하는 장비가 아니라, 누수·습기·열교 등으로 인한 온도 이상을 RGB 이미지와 함께 해석하는 보조 진단입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="actual-thermal-cases" className="bg-slate-50 py-20 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Actual Thermal Cases"
            title="실제 열화상·RGB 분석 사례"
            description="첨부된 열화상 분석 내용을 기준으로 외관상 확인이 어려운 이상 후보를 어떻게 선별하고, 현장조사 항목으로 연결하는지 보여주는 사례입니다."
          />

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
            <div className="overflow-x-auto">
              <table className="min-w-[920px] divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
                <thead className="bg-slate-100 text-xs uppercase tracking-[0.18em] text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-bold">사례</th>
                    <th scope="col" className="px-5 py-4 font-bold">대상</th>
                    <th scope="col" className="px-5 py-4 font-bold">주요 분석 결과</th>
                    <th scope="col" className="px-5 py-4 font-bold">권고 조치</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {thermalCaseStudies.map((item) => (
                    <tr key={item.id} className="align-top">
                      <td className="whitespace-nowrap px-5 py-4 font-bold text-sky-600 dark:text-sky-300">{item.id}</td>
                      <td className="px-5 py-4 font-semibold text-slate-800 dark:text-slate-100">{item.target}</td>
                      <td className="px-5 py-4 leading-7 text-slate-600 dark:text-slate-300">{item.finding}</td>
                      <td className="px-5 py-4 leading-7 text-slate-600 dark:text-slate-300">{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-amber-50 p-6 text-sm leading-7 text-amber-900 ring-1 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-100 dark:ring-amber-400/20">
            ※ 열화상 촬영은 외관상 확인이 어려운 이상 징후를 탐지하는 비파괴 진단 기법으로, 점검이 필요한 위치를 선정하기 위한 1차 진단 자료입니다. 열화상 결과만으로 결함을 확정할 수 없으며, 이상이 확인된 부위는 육안조사, 타진조사, 균열 및 누수 점검 등 추가 조사를 통해 종합적으로 판단하는 것이 바람직합니다.
          </div>

          <div className="mt-12 space-y-10">
            {thermalCaseStudies.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
                <div className="border-b border-slate-100 p-6 dark:border-slate-800 md:p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">{item.id} · {item.target}</p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                </div>
                <div className="grid gap-0 lg:grid-cols-2">
                  <figure className="border-b border-slate-100 bg-slate-950 p-4 dark:border-slate-800 lg:border-b-0 lg:border-r">
                    <img src={item.thermal} alt={`${item.title} 열화상 이미지`} className="h-80 w-full rounded-2xl object-contain" />
                    <figcaption className="px-2 pt-3 text-sm font-semibold text-sky-200">열화상 이미지</figcaption>
                  </figure>
                  <figure className="bg-slate-100 p-4 dark:bg-slate-900">
                    <img src={item.rgb} alt={`${item.title} RGB 이미지`} className="h-80 w-full rounded-2xl object-contain bg-white" />
                    <figcaption className="px-2 pt-3 text-sm font-semibold text-slate-700 dark:text-slate-200">RGB 이미지</figcaption>
                  </figure>
                </div>
                <div className="grid gap-5 p-6 md:grid-cols-3 md:p-8">
                  <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                    <h4 className="text-sm font-bold text-sky-600 dark:text-sky-300">분석 내용</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.finding}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                    <h4 className="text-sm font-bold text-sky-600 dark:text-sky-300">예상 원인</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.cause}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                    <h4 className="text-sm font-bold text-sky-600 dark:text-sky-300">권고 조치사항</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.action}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Before & After"
            title="보수 전후 비교자료 구성 예시"
            description="실제 현장에서는 동일 위치·동일 각도의 촬영 이미지를 기준으로 보수 전후를 비교합니다."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
              <img src={proposalImages.before} alt="외벽 점검 Before 예시" className="h-80 w-full object-cover" />
              <figcaption className="p-6">
                <p className="text-sm font-semibold text-red-500">BEFORE</p>
                <h3 className="mt-2 text-xl font-bold">이상 후보 위치 표시</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">균열·박리·누수 흔적 등 보수 협의가 필요한 구간을 이미지 위에 표시합니다.</p>
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
              <img src={proposalImages.after} alt="외벽 보수 After 예시" className="h-80 w-full object-cover" />
              <figcaption className="p-6">
                <p className="text-sm font-semibold text-emerald-500">AFTER</p>
                <h3 className="mt-2 text-xl font-bold">보수 완료 후 동일 구간 기록</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">시공 결과 검증, 하자 대응, 입주자대표회의 보고자료로 활용합니다.</p>
              </figcaption>
            </figure>
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm text-slate-500 dark:text-slate-400">
            위 이미지는 홈페이지/블로그 보유 이미지를 바탕으로 구성한 설명용 샘플입니다. 시범 현장 진행 시 실제 촬영 데이터로 교체합니다.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Deliverables" title="제공 산출물" />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="grid gap-5 md:grid-cols-2">
              {deliverables.map(([title, description]) => (
                <div key={title} className="rounded-3xl border border-slate-200 p-6 dark:border-slate-800">
                  <ClipboardList className="h-7 w-7 text-sky-500" />
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
                </div>
              ))}
            </div>
            <figure className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl dark:bg-slate-900">
              <img src={proposalImages.report} alt="리포트 예시" className="h-96 w-full object-cover" />
              <figcaption className="p-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
                이미지·위치·상태 정보를 축적하면 향후 보수 이력 관리와 민원 대응에 활용할 수 있습니다.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Value for Dawon C&C" title="도원씨엔씨 활용 가치" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['입주자대표회의 설득', '공사 필요성과 보수 범위를 사진·열화상·위치 정보로 설명합니다.'],
              ['보수 범위 합의', '누락 구간을 줄이고 우선순위를 사전에 공유합니다.'],
              ['공사 후 검증', 'Before & After 기록으로 결과 설명과 하자 대응 근거를 확보합니다.'],
              ['정기점검 상품화', '외벽·옥상·방수 상태를 주기적으로 추적하는 유지관리 서비스로 확장합니다.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <BarChart3 className="h-8 w-8 text-sky-300" />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
            <h3 className="text-2xl font-bold">공동 제안 패키지</h3>
            <p className="mt-4 text-slate-300">
              ① 공사 전 진단 촬영 → ② 보수 범위 협의 리포트 → ③ 공사 후 비교 촬영 → ④ 관리사무소 제출용 요약본
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pilot Package"
            title="공사 수주 지원용 기초 점검 패키지"
            description="정밀 안전진단이 아니라, 아파트 관계자에게 보수공사의 필요성을 설명하기 위한 제안용 시각자료 제작을 우선합니다."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {pilotPackages.map((item) => (
              <div key={item.name} className="rounded-3xl border border-slate-200 p-7 shadow-sm dark:border-slate-800">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="mt-4 text-2xl font-black text-sky-600 dark:text-sky-300">{item.price}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.summary}</p>
                <p className="mt-6 rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">활용: {item.use}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl bg-amber-50 p-6 text-sm leading-7 text-amber-900 ring-1 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-100 dark:ring-amber-400/20">
            열화상 결과는 누수 원인을 확정하는 정밀진단이 아니라, 습기·열교·방수층 이상 의심 구간을 선별하는 참고자료로 활용합니다.
          </div>
          <div className="mt-8 rounded-3xl bg-slate-50 p-8 dark:bg-slate-900">
            <h3 className="text-xl font-bold">견적 산정 기준</h3>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
              {['대상 동 수·라인 수·층수', '외벽/옥상/공용부 촬영 범위', '열화상 포함 여부와 촬영 시간대', '리포트 상세 수준', '공사 후 재촬영 포함 여부'].map((item) => (
                <span key={item} className="rounded-full bg-white px-4 py-2 ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm dark:bg-slate-950 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Next Step</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">시범 현장 1건으로 협업 구조를 검증합니다.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-4">
              {[
                ['1', '샘플 현장 선정'],
                ['2', '촬영 범위 확정'],
                ['3', '리포트 템플릿 확정'],
                ['4', '공동 제안 상품화'],
              ].map(([number, title]) => (
                <div key={number} className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
                  <span className="text-sm font-bold text-sky-600">{number}</span>
                  <p className="mt-2 font-bold">{title}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 rounded-3xl bg-slate-950 p-6 text-white md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-bold">아이엠드론</p>
                <p className="mt-1 text-sm text-slate-300">{generalData.about}</p>
                <p className="mt-2 text-sm text-slate-300">Email: imdrone.site@gmail.com · Instagram: @imdrone_official · YouTube: @imdrone6824</p>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-400">
                상담 문의하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
