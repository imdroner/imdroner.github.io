export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    image: string;
    link: string;
}

export const services: Service[] = [
    {
        id: 'aerial',
        title: '항공촬영 & 프리미엄 영상',
        description: '부동산·골프장·요트·행사장·광고 촬영까지, 드론으로 하늘에서 담는 고해상도 사진·영상 서비스를 제공합니다.',
        icon: 'Camera',
        image: '/images/services/aerial.webp',
        link: '/services/aerial'
    },
    {
        id: 'construction',
        title: '건설·건축 모니터링 & 항공측량',
        description: '공정관리, 토공량 분석, 구조물·문화재 점검을 위한 항공사진·3D 모델링·정사영상을 제공합니다.',
        icon: 'Building2',
        image: '/images/services/construction.webp',
        link: '/services/construction'
    },
    {
        id: 'energy',
        title: '에너지 설비 드론 점검',
        description: '태양광 패널, 윈드터빈, 산업 플랜트 등 에너지 시설을 열화상·고해상도 영상으로 안전하게 점검합니다.',
        icon: 'Zap',
        image: '/images/services/energy.webp',
        link: '/services/energy'
    },
    {
        id: 'control',
        title: '드론 관제 & 실시간 모니터링',
        description: '드론 영상과 센서 데이터를 실시간으로 수집·관제하여 현장 상황을 즉시 파악할 수 있는 시스템을 제공합니다.',
        icon: 'Radio',
        image: '/images/services/control.webp',
        link: '/services/control'
    },
    {
        id: 'public-safety',
        title: '공공·해상안전관제 & 시설점검',
        description: '시설물·교량·문화재·항만·해상 등 공공 인프라를 드론으로 점검하고, 불법어선 단속 등 안전관제에 활용합니다.',
        icon: 'Shield',
        image: '/images/services/public-safety.webp',
        link: '/services/public-safety'
    },
    {
        id: 'smart-agri',
        title: '스마트 농업 & NDVI 필드 분석',
        description: 'NDVI 등 식생지수 분석으로 작물·잔디·골프장 필드의 건강 상태를 수치로 진단합니다.',
        icon: 'Sprout',
        image: '/images/services/smart-agri.webp',
        link: '/services/smart-agri'
    },
    {
        id: 'hydrogen',
        title: '수소 연료전지 & 응용 솔루션',
        description: '산업용·모빌리티용 수소 연료전지 시스템을 공급하고, 드론·발전·비상전원 등 다양한 영역에 적용합니다.',
        icon: 'Fuel',
        image: '/images/services/hydrogen.webp',
        link: '/services/hydrogen'
    },
    {
        id: 'contents',
        title: '홈페이지 & 미디어 콘텐츠',
        description: '드론으로 촬영한 데이터와 영상을 기반으로 홈페이지, 소개영상, 홍보 영상 등 브랜드 콘텐츠를 제작합니다.',
        icon: 'Film',
        image: '/images/services/contents.webp',
        link: '/services/contents'
    }
];

