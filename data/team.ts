import { generalData } from './general';
import { personalData } from './personal';
import { educationData } from './education';
import { certificateData } from './certificate';
import { experienceData } from './experience';
import { activityData } from './activity';

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  position: string;
  avatar: string;
  thumbnail: string; // 팀 페이지 카드용
  bio: string;
  shortBio: string; // 목록 페이지용 짧은 소개
  email?: string;
  phone?: string;
  website?: string;
  
  // 소셜 미디어
  contacts?: {
    label: string;
    value: string;
    href: string;
  }[];
  
  // 상세 정보 참조
  hasProfile: boolean; // 상세 프로필 데이터 사용 여부
  
  tags?: string[]; // 전문 분야 태그
  joinDate?: string;
};

// 팀원 데이터
export const teamMembers: TeamMember[] = [
  {
    id: 'youngjin-park',
    name: generalData.name,
    role: '대표이사',
    position: generalData.position,
    avatar: generalData.avatar,
    thumbnail: generalData.avatar, // 동일 이미지 사용
    bio: generalData.about,
    shortBio: '드론 전문가 · 국가자격 보유 · 다양한 산업 현장 검증 실적',
    email: personalData[0]?.items?.find(item => item.label === '이메일')?.title,
    phone: personalData[0]?.items?.find(item => item.label === '연락처')?.title,
    website: generalData.website,
    contacts: generalData.contacts,
    hasProfile: true, // 기존 프로필 데이터 사용
    tags: ['드론조종', '항공촬영', '3D모델링', '디지털트윈', '프로젝트관리'],
    joinDate: '2014'
  },
  // 향후 팀원 추가 예시:
  // {
  //   id: 'jane-kim',
  //   name: '김지은',
  //   role: '기술이사',
  //   position: 'CTO',
  //   avatar: '/images/team/jane-kim.jpg',
  //   thumbnail: '/images/team/jane-kim-card.jpg',
  //   bio: '드론 기술 개발 및 시스템 구축 전문가',
  //   shortBio: '드론 시스템 개발 · 10년+ 경력',
  //   email: 'jane.kim@imdrone.site',
  //   phone: '010-1234-5678',
  //   hasProfile: false,
  //   tags: ['시스템개발', '드론제어', 'AI'],
  //   joinDate: '2020'
  // }
];

// 기존 데이터 export (하위 호환성)
export { generalData, personalData, educationData, certificateData, experienceData, activityData };

