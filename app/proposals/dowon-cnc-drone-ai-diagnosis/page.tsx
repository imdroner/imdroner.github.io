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
    finding: [
      "열화상 영상에서 처마 하부와 외벽 일부에 주변과 다른 온도 분포가 확인됨.",
      "외벽 중앙의 세로형 저온 영역과 우측 하단의 사선형 저온 영역에서 국부적인 온도 편차가 나타남.",
      "RGB 영상에서는 뚜렷한 균열이나 박리 등 외관상 이상은 확인되지 않음.",
    ],
    cause: [
      "외벽 내부 수분 또는 습기 분포 차이",
      "균열 보수 또는 재도장 등 보수 이력에 따른 열 특성 차이",
      "철근콘크리트 구조체의 열교(Heat Bridge)",
      "마감재 또는 미장층의 두께·재질 차이",
    ],
    action: [
      "온도 이상이 확인된 부위를 중심으로 현장 육안조사 실시",
      "타진조사를 통한 외벽 박리 및 들뜸 여부 확인",
      "균열 및 누수 여부에 대한 정밀 점검 실시",
      "동일 부위에 대한 정기 모니터링을 통해 온도 변화 추이 관리",
    ],
  },
  {
    id: 'CASE 02',
    title: '처마 하부 연속 저온 및 세로형 저온 영역',
    target: '외벽/차양부',
    thermal: `${caseImageBase}/dji_20230530140020_0048_t.jpg`,
    rgb: `${caseImageBase}/dji_20230530140020_0048_v.jpg`,
    finding: [
      "열화상 영상에서 처마 하부(차양부)와 외벽 상단을 따라 연속적인 저온 분포가 확인됨.",
      "외벽 중앙부에 세로 방향의 국부적인 저온 영역이 확인되며, RGB 영상에서도 동일 위치에 미세한 변색 또는 보수 흔적으로 추정되는 자국이 관찰됨.",
      "외벽 전반의 온도 분포는 비교적 균일하나, 처마 하부와 세로형 저온 영역에서 주변 대비 온도 편차가 나타남.",
      "RGB 영상에서는 구조적 균열이나 박리 등 뚜렷한 외관상 결함은 확인되지 않음.",
    ],
    cause: [
      "처마 및 슬라브 접합부의 열교(Heat Bridge) 현상",
      "외벽 내부 수분 또는 습기 분포 차이",
      "균열 보수 또는 재도장 이력에 따른 마감재 열 특성 차이",
      "미장층 또는 도장층의 두께·재질 차이에 따른 표면 온도 편차",
    ],
    action: [
      "처마 하부와 세로형 저온 영역을 중심으로 현장 육안조사 실시",
      "타진조사를 통한 외벽 박리 및 들뜸 여부 확인",
      "세로형 저온 영역의 균열 및 누수 여부에 대한 정밀 점검 실시",
      "동일 조건에서 열화상 재촬영을 실시하여 온도 변화 여부를 비교·분석하고 지속적인 모니터링 수행",
    ],
  },
  {
    id: 'CASE 03',
    title: '원형 구조물 우측 세로형 저온 영역',
    target: '원형 외벽',
    thermal: `${caseImageBase}/dji_20230530140511_0077_t.jpg`,
    rgb: `${caseImageBase}/dji_20230530140511_0077_v.jpg`,
    finding: [
      "열화상 영상에서 원형 구조물 전반은 비교적 균일한 온도 분포를 보이나, 우측 외벽에 상부에서 하부로 이어지는 세로형 저온 영역이 뚜렷하게 확인됨.",
      "해당 저온 영역은 주변 외벽과 비교하여 연속적인 온도 편차를 나타내며, 국부적인 열적 이상으로 판단됨.",
      "창호 부위는 내부 공간의 영향으로 상대적으로 높은 온도를 나타내는 것으로 확인됨.",
      "RGB 영상에서는 열화상 이상 부위와 대응되는 위치에 뚜렷한 균열이나 박리 흔적은 확인되지 않으나, 미세한 색상 차이 및 보수 흔적이 일부 관찰되어 외관만으로 이상 여부를 판단하기는 어려움.",
    ],
    cause: [
      "외벽 내부로 유입된 수분 또는 습기에 의한 국부적인 열 특성 변화",
      "균열 보수 또는 재도장 등 보수 이력에 따른 마감층의 열전도 특성 차이",
      "철근콘크리트 구조체 또는 기둥부의 열교(Heat Bridge) 영향",
      "외벽 마감재의 두께 또는 재질 차이에 따른 온도 편차",
    ],
    action: [
      "세로형 온도 이상 부위를 중심으로 현장 육안조사를 실시하여 균열, 백화, 누수 흔적 여부 확인",
      "타진조사를 통해 외벽 마감재의 박리 및 들뜸 여부를 점검",
      "함수율 측정 또는 누수 진단을 실시하여 내부 수분 유입 여부 확인",
      "동일 부위에 대해 계절 및 시간대를 달리한 열화상 촬영을 실시하여 이상 패턴의 지속성을 확인",
      "온도 이상이 반복적으로 확인될 경우 외벽 보수 및 방수 상태에 대한 정밀 안전진단을 권장",
    ],
  },
  {
    id: 'CASE 04',
    title: '금속 지붕 표면 열화와 온도 편차',
    target: '금속 지붕',
    thermal: `${caseImageBase}/dji_20230530145937_0013_t.jpg`,
    rgb: `${caseImageBase}/dji_20230530145937_0013_v.jpg`,
    finding: [
      "열화상 영상에서 금속 지붕 전반은 비교적 균일한 온도 분포를 보이나, 일부 세로 방향 패널에서 주변보다 낮은 온도 영역이 반복적으로 확인됨.",
      "처마부(하단)에서는 상대적으로 높은 온도가 나타나며, 이는 일사 축열 또는 구조체의 열 축적 영향으로 판단됨.",
      "RGB 영상에서는 지붕 마감재 표면에 광범위한 도막 박리(도장 탈락) 및 노후화가 확인되며, 열화상에서 나타난 온도 편차와 일부 위치가 유사하게 대응됨.",
      "현재 열화상에서는 구조적 결함을 의심할 정도의 급격한 국부 온도 이상은 확인되지 않으며, 주된 특징은 표면 열화에 따른 열 분포 차이로 판단됨.",
    ],
    cause: [
      "지붕 도장(도막)의 장기 노후화 및 박리",
      "마감재 표면의 산화 및 풍화에 따른 열흡수율(방사율) 변화",
      "강판 표면의 오염 또는 부식 초기 단계에 따른 열 특성 차이",
      "일사 조건과 표면 마감 상태 차이로 인한 국부적인 온도 편차",
    ],
    action: [
      "도막 박리가 진행된 구간을 중심으로 지붕 표면의 부식 발생 여부를 육안 점검",
      "도막 손상 부위에 대한 국부 보수 또는 재도장을 실시하여 부식 진행을 방지",
      "연결부 및 체결부 주변의 누수 흔적과 실링 상태를 함께 점검",
      "향후 동일 조건에서 열화상 촬영을 실시하여 온도 이상 확대 여부를 지속적으로 모니터링",
      "부식이 진행된 부위가 확인될 경우 방청 처리 후 전면 재도장을 검토",
    ],
  },
  {
    id: 'CASE 05',
    title: '외벽 패널 줄눈부 연속 저온',
    target: '패널 외벽',
    thermal: `${caseImageBase}/dji_20230530151712_0028_t.jpg`,
    rgb: `${caseImageBase}/dji_20230530151712_0028_v.jpg`,
    finding: [
      "열화상 영상에서 외벽 패널은 전반적으로 균일한 온도 분포를 나타내고 있으나, 중앙부 세로 줄눈(Line Joint)을 따라 주변보다 낮은 온도 영역이 연속적으로 확인됨.",
      "수평 줄눈 부위에서도 미세한 온도 편차가 관찰되며, 패널 접합부를 중심으로 열적 특성이 다르게 나타남.",
      "옥상 파라펫 및 상부 마감 부위는 일사 및 구조체의 영향으로 상대적으로 높은 온도를 나타냄.",
      "RGB 영상에서는 외벽 패널의 균열, 박리, 변형 등 뚜렷한 외관상 이상은 확인되지 않으며, 줄눈 실링 상태도 육안상 양호한 것으로 보임.",
    ],
    cause: [
      "외벽 패널 접합부(줄눈)의 열교(Heat Bridge) 현상",
      "줄눈 내부 구조재 또는 고정부의 열전도 특성 차이",
      "줄눈 실링재의 노후화 또는 충진 상태 차이에 따른 국부적인 열 분포 변화",
      "패널 접합부의 미세한 틈 또는 내부 공기층에 의한 열 특성 차이",
    ],
    action: [
      "온도 편차가 확인된 세로 및 수평 줄눈을 중심으로 실링재의 균열, 탈락 및 노후화 여부를 육안 점검",
      "필요 시 줄눈 부위의 누수 여부 및 실링 접착 상태를 확인",
      "동일 조건에서 열화상 재촬영을 실시하여 온도 이상 패턴의 지속성 여부를 확인",
      "온도 편차가 확대되거나 누수 흔적이 확인될 경우 줄눈 보수 및 실링 교체를 검토",
    ],
  },
  {
    id: 'CASE 06',
    title: '태양광 모듈 스트링별 온도 불균형',
    target: '태양광 모듈',
    thermal: `${caseImageBase}/dji_20230531143627_0085_t.jpg`,
    rgb: `${caseImageBase}/dji_20230531143627_0085_v.jpg`,
    finding: [
      "열화상 영상에서 태양광 모듈 대부분은 비교적 균일한 온도 분포를 나타내고 있으나, 일부 모듈에서 주변보다 높은 온도(고온) 또는 낮은 온도(저온)를 보이는 국부적인 온도 편차가 확인됨.",
      "특히 좌측 및 중앙 일부 스트링에서 세로 방향으로 연속적인 온도 편차가 나타나며, 일부 셀 또는 모듈 단위의 이상 징후가 관찰됨.",
      "태양광 어레이 전체에 걸쳐 급격한 과열(Hot Spot)은 확인되지 않으나, 일부 모듈은 주변 모듈과 비교하여 상대적인 온도 불균형을 보임.",
      "RGB 영상에서는 모듈의 파손, 오염, 탈락 및 외관상 뚜렷한 이상은 확인되지 않으며, 설치 상태도 전반적으로 양호한 것으로 보임.",
    ],
    cause: [
      "일부 태양광 모듈 또는 셀의 출력 불균형",
      "모듈 내부 셀 열화(Aging) 또는 제조 편차",
      "스트링별 발전 부하 차이 또는 전기적 접속 상태 차이",
      "부분 음영, 표면 오염 또는 일사 조건의 영향",
      "커넥터 또는 바이패스 다이오드의 초기 이상 가능성",
    ],
    action: [
      "온도 편차가 확인된 모듈을 대상으로 전기적 성능(IV Curve, 발전량) 점검 실시",
      "스트링별 발전량 비교 및 인버터 모니터링 데이터를 확인하여 출력 이상 여부 분석",
      "모듈 표면 오염, 손상 및 부분 음영 발생 여부를 현장에서 점검",
      "커넥터 체결 상태 및 배선 이상 여부를 확인",
      "동일한 일사 조건에서 정기적인 열화상 점검을 실시하여 온도 편차의 확대 여부를 지속적으로 모니터링",
    ],
  },
  {
    id: 'CASE 07',
    title: '균열·도막 박리와 열적 이상 대응',
    target: '외벽 균열',
    thermal: `${caseImageBase}/dji_20230609122339_0097_t.jpg`,
    rgb: `${caseImageBase}/dji_20230609122339_0097_v.jpg`,
    finding: [
      "열화상 영상에서 외벽 중앙부에 사각형 형태의 국부적인 온도 편차가 확인되며, 주변 외벽과 비교하여 열 분포가 불균일하게 나타남.",
      "외벽의 수평 균열이 발생한 구간을 따라 일부 온도 편차가 확인되며, 균열 부위와 열화상 이상 부위가 일부 일치하는 것으로 나타남.",
      "좌측 외벽 모서리 부위는 주변보다 낮은 온도를 나타내며, 구조체 접합부 또는 일사 조건에 따른 열교 현상으로 판단됨.",
      "RGB 영상에서는 외벽에 수평 및 사선 방향의 균열, 도막 박리, 보수 흔적이 명확하게 확인되며, 열화상에서 확인된 이상 부위와 공간적으로 연관성을 보임.",
      "외관 손상과 열적 이상이 동시에 확인되어 단순 표면 온도 차이보다는 외벽 마감층의 열화 가능성이 높은 것으로 판단됨.",
    ],
    cause: [
      "외벽 마감재의 균열 및 박리에 따른 내부 열 특성 변화",
      "균열을 통한 우수 또는 습기의 침투로 인한 국부적인 함수 상태 변화",
      "보수 이력에 따른 마감재 두께 및 재질 차이",
      "외벽 내부 공동(Void) 또는 마감재 들뜸(박리) 발생 가능성",
      "구조체 접합부의 열교(Heat Bridge) 영향",
    ],
    action: [
      "균열 및 도막 박리 구간을 중심으로 현장 육안조사를 실시하여 손상 범위를 확인",
      "타진조사를 실시하여 마감재의 박리 및 들뜸 여부를 확인",
      "함수율 측정 또는 누수 진단을 실시하여 내부 수분 침투 여부를 점검",
      "균열 부위는 적절한 균열 보수 및 방수 보강을 실시하고, 손상된 도막은 재도장을 검토",
      "보수 완료 후 동일 조건에서 열화상 재촬영을 실시하여 이상 부위의 개선 여부를 확인",
    ],
  },
  {
    id: 'CASE 08',
    title: '대형 세로형 저온 영역과 외벽 열화',
    target: '노후 외벽',
    thermal: `${caseImageBase}/dji_20230609122409_0102_t.jpg`,
    rgb: `${caseImageBase}/dji_20230609122409_0102_v.jpg`,
    finding: [
      "열화상 영상에서 외벽 중앙 상부에 주변보다 낮은 온도를 나타내는 대형 세로형 저온 영역이 확인되며, 외벽의 온도 분포가 국부적으로 불균일하게 나타남.",
      "외벽 중간의 수평 균열 부위와 일부 세로 균열 구간에서도 미세한 온도 편차가 확인되어 균열 부위와 열적 이상이 일부 일치하는 것으로 나타남.",
      "외벽 상단(파라펫) 부위는 주변보다 상대적으로 높은 온도를 나타내며, 일사 및 구조체의 축열 영향으로 판단됨.",
      "RGB 영상에서는 수평 및 세로 방향의 균열, 도막 열화 및 오염, 균열 보수 흔적이 확인되며, 열화상에서 확인된 이상 부위와 공간적으로 대응되는 양상을 보임.",
      "외벽 중앙의 저온 영역은 단순 표면 오염보다는 내부 수분 분포 변화 또는 보수 이력에 따른 열적 특성 차이의 가능성이 높은 것으로 판단됨.",
    ],
    cause: [
      "외벽 균열을 통한 우수 침투 및 내부 습기 축적",
      "기존 균열 보수 또는 재도장에 따른 마감재의 열전도 특성 차이",
      "외벽 마감층의 박리 또는 내부 공동(Void) 발생 가능성",
      "철근콘크리트 구조체의 열교(Heat Bridge)",
      "장기간 외부 노출에 따른 마감재 열화 및 방수 성능 저하",
    ],
    action: [
      "열화상 이상이 확인된 중앙부 및 균열 구간을 중심으로 현장 육안조사를 실시하여 균열 진행 여부를 확인",
      "타진조사를 실시하여 마감재의 박리 및 들뜸 여부를 점검",
      "함수율 측정 및 누수 진단을 실시하여 내부 수분 침투 여부를 확인",
      "균열 및 열화된 도막에 대한 보수와 함께 외벽 방수 성능을 점검하고 필요 시 재도장을 실시",
      "보수 완료 후 동일 조건에서 열화상 재촬영을 실시하여 보수 효과 및 온도 이상 해소 여부를 확인",
    ],
  },
  {
    id: 'CASE 09',
    title: '옹벽 표면 오염·풍화와 온도 불균일',
    target: '콘크리트 옹벽',
    thermal: `${caseImageBase}/dji_20230612154210_0002_t.jpg`,
    rgb: `${caseImageBase}/dji_20230612154210_0002_v.jpg`,
    finding: [
      "열화상 영상에서 옹벽 전면은 전반적으로 비교적 균일한 온도 분포를 보이나, 상부와 중앙부를 중심으로 주변과 다른 불균일한 온도 분포가 다수 확인됨.",
      "옹벽 상단부를 따라 상대적으로 높은 온도 영역이 연속적으로 나타나며, 중앙부에는 국부적인 저온 및 고온 영역이 혼재되어 분포함.",
      "RGB 영상에서는 옹벽 표면의 오염, 변색, 도장 열화 및 풍화가 광범위하게 확인되나, 구조적인 대형 균열이나 변형은 확인되지 않음.",
      "열화상에서 확인되는 온도 편차는 RGB 영상의 오염 및 표면 상태 변화와 일부 대응되며, 일부 구간에서는 내부 수분 분포 차이 가능성도 배제할 수 없음.",
    ],
    cause: [
      "장기간 노출에 따른 콘크리트 표면의 풍화 및 오염",
      "우수 유입 및 건조 상태 차이에 따른 국부적인 함수율 변화",
      "콘크리트 타설 이음부 또는 보수 이력에 따른 열 특성 차이",
      "표면 도장 또는 마감재의 열화로 인한 방사율 차이",
      "일사량 및 음영 조건에 따른 표면 온도 변화",
    ],
    action: [
      "옹벽 상부 및 온도 편차가 확인된 구간을 중심으로 육안조사를 실시하여 균열, 박리 및 누수 흔적 여부를 확인",
      "우수 배수시설 및 옹벽 상부 배수 상태를 점검하여 지속적인 수분 유입 여부를 확인",
      "필요 시 함수율 측정 및 타진조사를 실시하여 내부 공동(공극) 또는 박리 여부를 점검",
      "표면 오염이 심한 구간은 세척 후 재점검하고, 열화가 진행된 경우 표면 보호 및 보수공법 적용을 검토",
      "동일 조건에서 정기적인 열화상 촬영을 실시하여 온도 이상 범위의 변화 여부를 지속적으로 관리",
    ],
  },
  {
    id: 'CASE 10',
    title: '외벽 전면 도막 박리·부풀음과 불균일 열 분포',
    target: '노후 외벽',
    thermal: `${caseImageBase}/dji_20231121111917_0015_t.jpg`,
    rgb: `${caseImageBase}/dji_20231121111917_0015_v.jpg`,
    finding: [
      "열화상 영상에서 외벽 전반은 비교적 균일한 온도 분포를 보이나, 외벽 표면에 다수의 국부적인 온도 편차가 광범위하게 분포하는 것이 확인됨.",
      "창호 주변은 실내의 영향으로 주변보다 높은 온도를 나타내며, 창틀과 외벽 접합부에서도 일부 온도 차이가 확인됨.",
      "외벽 상부 파라펫 및 슬래브 접합부에서는 선형의 온도 편차가 나타나며, 구조체 접합부의 열교 현상으로 판단됨.",
      "RGB 영상에서는 도막 박리, 부풀음(Blistering), 표면 박락 및 풍화가 외벽 전면에 광범위하게 발생한 것이 확인되며, 특히 창호 상부와 외벽 상단에서 손상이 심한 상태임.",
      "열화상에서 나타나는 불균일한 온도 분포는 외관상 손상 부위와 상당 부분 대응되며, 마감층의 열화 또는 일부 박리 가능성을 시사함.",
    ],
    cause: [
      "장기간 노후화에 따른 외벽 도막 및 마감재의 열화",
      "방수 성능 저하로 인한 수분 침투 및 함수율 증가",
      "마감재와 구조체 간 접착력 저하에 따른 박리 및 들뜸",
      "반복적인 일사 및 온도 변화에 의한 마감재 열화",
      "과거 보수 이력에 따른 마감재 두께 및 열전도 특성 차이",
    ],
    action: [
      "외벽 전면에 대한 육안조사를 실시하여 도막 박리, 균열 및 박락 범위를 상세 조사",
      "타진조사를 통해 마감재의 들뜸 및 박리 여부를 확인하고 위험 구간을 파악",
      "함수율 측정 및 누수 진단을 실시하여 내부 수분 침투 여부를 점검",
      "손상 범위가 넓은 구간은 부분 보수보다는 외벽 전체 재도장 및 방수 보강을 검토",
      "보수 완료 후 열화상 재점검을 실시하여 이상 부위 개선 여부를 확인하고 정기적인 유지관리를 실시",
    ],
  },
  {
    id: 'CASE 11',
    title: '지붕 노후화와 일반적 열 분포',
    target: '지붕/처마',
    thermal: `${caseImageBase}/dji_20231122142416_0035_t.jpg`,
    rgb: `${caseImageBase}/dji_20231122142416_0035_v.jpg`,
    finding: [
      "열화상 영상에서 지붕면은 전반적으로 비교적 균일한 온도 분포를 나타내며, 국부적인 고온 또는 저온 이상은 확인되지 않음.",
      "처마 하부를 따라 연속적인 저온 영역이 확인되며, 이는 일정한 형태로 분포하고 있어 국부적인 결함보다는 처마 구조부의 열교(Heat Bridge) 및 일사 조건에 따른 일반적인 온도 분포로 판단됨.",
      "창호는 실내의 영향으로 주변 외벽보다 상대적으로 높은 온도를 나타내며, 창틀 및 개구부 주변에서도 일반적인 열 손실 패턴이 확인됨.",
      "RGB 영상에서는 지붕 마감재의 전반적인 변색 및 오염이 확인되며, 경년열화가 진행된 상태로 판단됨. 다만 지붕 마감재의 탈락, 처짐 또는 구조적인 변형은 확인되지 않음.",
      "열화상 영상에서도 외관 노후화와 대응되는 국부적인 열 이상이나 누수, 단열 결함을 의심할 만한 뚜렷한 온도 이상은 확인되지 않음.",
    ],
    cause: [
      "처마 슬래브 및 보(Beam) 구조부의 열교(Heat Bridge)",
      "처마부의 일사량 차이 및 음영에 따른 표면 온도 편차",
      "지붕 마감재의 장기 사용에 따른 자연적인 노후화 및 표면 오염",
      "건축물 구조 및 단열재 배치에 따른 정상적인 열 분포",
    ],
    action: [
      "지붕 마감재의 노후화 상태를 고려하여 체결 상태, 표면 손상 및 부식 여부를 정기적으로 점검",
      "처마부 및 창호 주변의 실링재와 방수 상태를 확인하여 장기적인 누수 발생 가능성에 대비",
      "우천 후 실내 천장 및 처마 하부의 누수 흔적 여부를 확인",
      "동일한 기상 조건에서 정기적인 열화상 촬영을 실시하여 국부적인 온도 이상 발생 여부를 지속적으로 모니터링",
    ],
  },
  {
    id: 'CASE 12',
    title: '타일 마감 외벽 저온 영역과 손상 의심',
    target: '타일 외벽',
    thermal: `${caseImageBase}/dji_20231122143352_0086_t.jpg`,
    rgb: `${caseImageBase}/dji_20231122143352_0086_v.jpg`,
    finding: [
      "열화상 영상에서 타일 마감 외벽 중앙부를 따라 수평 방향의 광범위한 저온 영역이 확인됨.",
      "저온 영역은 좌우로 연속적으로 분포하며, 일부 구간에서는 국부적인 온도 불균일이 함께 나타남.",
      "RGB 영상에서는 중앙부 세로 방향의 균열, 줄눈 손상, 타일 표면 박락 및 일부 탈락 의심 부위가 확인됨.",
      "하부 좌측 및 중앙부에는 백화, 오염, 변색과 함께 타일 마감층 손상 흔적이 관찰됨.",
      "열화상 이상 부위와 RGB 영상의 손상 부위가 일부 대응되어, 단순 표면 오염보다는 타일 마감층의 박리 또는 내부 수분 영향 가능성이 있음.",
    ],
    cause: [
      "타일 줄눈 균열 및 열화에 따른 우수 침투",
      "타일 마감층과 바탕 모르타르층 사이의 들뜸 또는 박리",
      "내부 수분 축적에 따른 함수율 증가",
      "장기간 외부 노출에 따른 타일 접착력 저하",
      "반복적인 온도 변화와 수분 침투에 따른 마감재 열화",
    ],
    action: [
      "균열 및 타일 탈락 의심 부위를 중심으로 현장 육안조사 실시",
      "타진조사를 통해 타일 들뜸 및 박리 범위 확인",
      "함수율 측정 또는 누수 진단을 통해 내부 수분 침투 여부 확인",
      "탈락 위험이 있는 타일은 우선 제거 또는 긴급 보수 실시",
      "줄눈 보수, 방수 보강 및 필요 시 타일 재시공 검토",
    ],
  }
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
                <div className="space-y-4 p-6 md:p-8">
                  {[
                    ['분석 내용', item.finding],
                    ['예상 원인', item.cause],
                    ['권고 조치사항', item.action],
                  ].map(([heading, lines]) => (
                    <div key={heading as string} className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                      <h4 className="text-sm font-bold text-sky-600 dark:text-sky-300">{heading}</h4>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {(lines as string[]).map((line) => (
                          <li key={line} className="flex gap-2">
                            <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
