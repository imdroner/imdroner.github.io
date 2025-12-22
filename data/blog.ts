export interface BlogPost {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  author: string;
  authorId: string;
  category: string;
  tags: string[];
  readTime: string;
}

export const blogCategories = [
  '전체',
  '드론 기술',
  '법규/규정',
  '프로젝트 사례',
  '산업 동향',
  '교육/가이드',
] as const;

export const blogPosts: BlogPost[] = [
  {
    id: 'solar-farm-drone-guide',
    title: '태양광 발전소 관리를 위한 최적의 드론 선택 가이드',
    description: 'Mavic 3T, Matrice 4T, Matrice 4TD를 비교 분석하여 태양광 발전소 점검에 가장 적합한 드론을 선택하는 방법을 알아봅니다. 열화상 성능, 운영 효율성, 비용 효율을 중심으로 상세 비교합니다.',
    thumbnail: '/images/blog/solar-farm-drone-guide.webp',
    date: '2025-12-22',
    author: '박영진',
    authorId: 'youngjin-park',
    category: '교육/가이드',
    tags: ['태양광', '열화상', 'Mavic 3T', 'Matrice 4T', 'DJI Dock', '시설물점검'],
    readTime: '14분',
  },
  {
    id: 'drone-regulations-2025',
    title: '2025년 개정된 드론 법규 완벽 가이드',
    description: '최신 드론 관련 법규와 준수사항을 상세히 알아봅니다. 드론 조종자 자격증, 비행 승인 절차, 금지 구역 등 필수 정보를 제공합니다.',
    thumbnail: '/images/blog/drone-regulations-2025.webp',
    date: '2025-12-15',
    author: '박영진',
    authorId: 'youngjin-park',
    category: '법규/규정',
    tags: ['드론법규', '항공법', '2025', '자격증', '비행승인'],
    readTime: '8분',
  },
  {
    id: '3d-modeling-guide',
    title: '드론 촬영 데이터로 3D 모델 제작하기',
    description: '드론으로 수집한 이미지 데이터를 활용하여 정밀한 3D 모델을 제작하는 방법을 단계별로 설명합니다.',
    thumbnail: '/images/blog/3d-modeling-guide.webp',
    date: '2025-12-10',
    author: '박영진',
    authorId: 'youngjin-park',
    category: '교육/가이드',
    tags: ['3D모델링', '포토그라메트리', '드론촬영', '디지털트윈'],
    readTime: '12분',
  },
  {
    id: 'agriculture-drone-future',
    title: '농업용 드론의 미래: 스마트 팜 혁명',
    description: '농업 분야에서 드론이 가져올 혁신적인 변화와 최신 기술 동향을 살펴봅니다. 방제, 파종, 생육 모니터링까지.',
    thumbnail: '/images/blog/agriculture-drone-future.webp',
    date: '2025-12-05',
    author: '박영진',
    authorId: 'youngjin-park',
    category: '산업 동향',
    tags: ['농업드론', '스마트팜', 'DJI Agras', '정밀농업'],
    readTime: '10분',
  },
  {
    id: 'thermal-camera-inspection',
    title: '열화상 카메라를 활용한 시설물 점검',
    description: '드론 열화상 카메라를 이용한 건물 외벽, 태양광 패널, 송전선 점검 사례와 노하우를 공유합니다.',
    thumbnail: '/images/blog/thermal-camera-inspection.webp',
    date: '2025-11-28',
    author: '박영진',
    authorId: 'youngjin-park',
    category: '프로젝트 사례',
    tags: ['열화상', '시설물점검', '안전진단', 'Zenmuse'],
    readTime: '9분',
  },
  {
    id: 'lidar-mapping-technology',
    title: 'LiDAR 매핑 기술의 현재와 미래',
    description: 'DJI Zenmuse L2를 중심으로 LiDAR 드론 매핑 기술의 원리, 활용 분야, 그리고 발전 방향을 탐구합니다.',
    thumbnail: '/images/blog/lidar-mapping-technology.webp',
    date: '2025-11-20',
    author: '박영진',
    authorId: 'youngjin-park',
    category: '드론 기술',
    tags: ['LiDAR', '3D스캔', '지형측량', 'Zenmuse L2'],
    readTime: '11분',
  },
  {
    id: 'enterprise-drone-comparison',
    title: '엔터프라이즈 드론 기종 비교: Mavic 3E vs Matrice 30T',
    description: 'DJI의 대표 엔터프라이즈 드론 두 기종을 실사용 경험을 바탕으로 상세 비교 분석합니다.',
    thumbnail: '/images/blog/enterprise-drone-comparison.webp',
    date: '2025-11-15',
    author: '박영진',
    authorId: 'youngjin-park',
    category: '교육/가이드',
    tags: ['Mavic 3 Enterprise', 'Matrice 30T', '드론 비교', '구매 가이드'],
    readTime: '15분',
  },
];

