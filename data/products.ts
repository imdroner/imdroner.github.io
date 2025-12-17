export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    price: string;
    image: string;
    features: string[];
    link: string;
}

export const featuredProducts: Product[] = [
    {
        id: 'dji-mavic-3-enterprise',
        name: 'DJI Mavic 3 Enterprise',
        category: '기업용 드론',
        description: '산업용 촬영 및 점검에 최적화된 전문가급 드론',
        price: '견적 문의',
        image: '/images/products/mavic3-enterprise.png',
        features: [
            '4/3 CMOS 센서',
            '56배 하이브리드 줌',
            'RTK 모듈 지원',
            '45분 비행시간'
        ],
        link: '/products/dji-mavic-3-enterprise'
    },
    {
        id: 'dji-matrice-300-rtk',
        name: 'DJI Matrice 300 RTK',
        category: '산업용 드론',
        description: '건설·점검·측량 등 산업 현장을 위한 고성능 드론',
        price: '견적 문의',
        image: '/images/products/matrice-300.png',
        features: [
            '최대 55분 비행',
            '듀얼 페이로드',
            'IP45 방진방수',
            '고정밀 RTK'
        ],
        link: '/products/dji-matrice-300-rtk'
    },
    {
        id: 'thermal-camera',
        name: 'FLIR 열화상 카메라',
        category: '점검 장비',
        description: '태양광·건물·시설물 열화상 점검용 전문 카메라',
        price: '견적 문의',
        image: '/images/products/thermal-camera.png',
        features: [
            '640×512 해상도',
            '온도 측정 범위: -20℃~1500℃',
            'MSX 이미지 향상',
            '실시간 데이터 전송'
        ],
        link: '/products/thermal-camera'
    },
    {
        id: 'rtk-base-station',
        name: 'RTK 기준국 시스템',
        category: '측량 장비',
        description: '정밀 항공측량을 위한 고정밀 RTK 기준국',
        price: '견적 문의',
        image: '/images/products/rtk-station.png',
        features: [
            'cm급 정확도',
            '반경 10km 커버리지',
            '실시간 보정 데이터',
            '쉬운 설치 및 운영'
        ],
        link: '/products/rtk-base-station'
    }
];

