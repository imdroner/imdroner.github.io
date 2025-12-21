export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    detailDescription?: string;
    price: number; // 0이면 '견적 문의', 숫자면 해당 가격 표시
    image: string;
    features: string[];
    specifications?: { label: string; value: string }[];
    hasDetailedPage?: boolean; // 개별 페이지 존재 여부
    featured?: boolean; // 메인 페이지 추천 제품
    hero?: boolean; // Hero 슬라이드 대상 제품
}

export const products: Product[] = [
    {
        id: 'dji-dock-3',
        name: 'DJI Dock 3',
        category: '자동화 시스템',
        description: '차량 탑재 지원, 24/7 원격 무인 운영을 위한 혁신적인 드론 도킹 스테이션',
        detailDescription: 'DJI Dock 3는 Matrice 4D 또는 Matrice 4TD 고성능 드론과 함께 작동하여 24/7 원격 운영을 지원하는 차세대 자동화 시스템입니다. 업계 최초로 차량 탑재 배치를 지원하여 다양한 환경에 유연하게 적응할 수 있습니다. DJI FlightHub 2의 지능형 기능과 통합되어 작업 시간 및 인건비를 대폭 절감하며, 완전 무인 자동 이착륙, 배터리 충전, 실시간 데이터 전송을 통해 효율성을 극대화합니다.',
        price: 17853000,
        image: '/images/products/dji-dock-3.webp',
        hasDetailedPage: true,
        featured: true,
        features: [
            'Matrice 4D/4TD 드론 탑재',
            '차량 탑재 배치 지원 (업계 최초)',
            '24/7 완전 무인 자동 운영',
            'DJI FlightHub 2 지능형 통합',
            '초장거리 전송 지원',
            '날씨 대응 시스템',
            'IP56 방진방수 등급',
            '클라우드 실시간 데이터 전송'
        ],
        specifications: [
            { label: '호환 드론', value: 'Matrice 4D Series, Matrice 4TD Series' },
            { label: '배치 방식', value: '고정 설치 / 차량 탑재' },
            { label: '방진방수', value: 'IP56' },
            { label: '작동 온도', value: '-35°C ~ 50°C' },
            { label: '풍속 저항', value: '최대 15m/s (이착륙 시)' },
            { label: '전송 시스템', value: 'O3 Enterprise' },
            { label: '관리 플랫폼', value: 'DJI FlightHub 2' },
            { label: '자동화 기능', value: '자동 이착륙, 충전, 데이터 전송' }
        ]
    },
    {
        id: 'dji-mavic-3-enterprise',
        name: 'DJI Mavic 3 Enterprise',
        category: '기업용 드론',
        description: '산업용 촬영 및 점검에 최적화된 전문가급 드론',
        detailDescription: 'DJI Mavic 3 Enterprise는 휴대성과 성능을 완벽하게 결합한 기업용 드론입니다. 4/3 CMOS 센서와 56배 하이브리드 줌을 탑재하여 산업 현장에서 필요한 모든 촬영을 수행할 수 있습니다. RTK 모듈을 통한 정밀 측위와 45분의 긴 비행시간으로 효율적인 작업이 가능합니다.',
        price: 5513800,
        image: '/images/products/mavic3-enterprise.jpg',
        hasDetailedPage: true,
        hero: true,
        featured: true,
        features: [
            '4/3 CMOS 센서로 20MP 고해상도 촬영',
            '56배 하이브리드 줌으로 원거리 점검',
            'RTK 모듈 지원으로 cm급 정확도',
            '최대 45분 비행시간',
            '15km 전송 거리',
            '시각적 및 적외선 센서 동시 지원'
        ],
        specifications: [
            { label: '무게', value: '915g (배터리 포함)' },
            { label: '최대 비행시간', value: '45분' },
            { label: '최대 전송거리', value: '15km (FCC)' },
            { label: '센서', value: '4/3 CMOS, 20MP' },
            { label: '렌즈', value: '24mm, f/2.8-f/11' },
            { label: '줌', value: '56배 하이브리드 줌' },
            { label: 'RTK', value: '수평: 1cm+1ppm, 수직: 1.5cm+1ppm' },
            { label: '작동 온도', value: '-20°C ~ 50°C' }
        ]
    },

    {
        id: 'dji-matrice-30t-combo',
        name: 'DJI Matrice 30T Combo',
        category: '산업용 드론',
        description: '열화상 카메라 탑재로 야간 점검 및 수색 작업에 최적화',
        detailDescription: 'DJI Matrice 30T는 열화상 센서를 탑재한 올인원 솔루션입니다. 640×512 열화상 센서와 48MP 광각 카메라, 200배 하이브리드 줌을 하나의 기체에 통합하여 야간 작업, 수색 구조, 시설물 점검 등 다양한 임무를 수행할 수 있습니다.',
        price: 11353000,
        image: '/images/products/dji-matrice-30t-combo.jpg',
        hasDetailedPage: true,
        hero: true,
        featured: true,
        features: [
            '640×512 열화상 센서',
            '48MP 광각 카메라',
            '200배 하이브리드 줌',
            '41분 비행시간',
            'IP55 방진방수',
            '레이저 거리 측정기 내장'
        ],
        specifications: [
            { label: '무게', value: '약 3.77kg (배터리 포함)' },
            { label: '최대 비행시간', value: '41분' },
            { label: '최대 전송거리', value: '15km (FCC)' },
            { label: '열화상', value: '640×512, 30Hz' },
            { label: '광각 카메라', value: '48MP, 1/2" CMOS' },
            { label: '줌 카메라', value: '12MP, 200배 줌' },
            { label: '방진방수', value: 'IP55' },
            { label: '작동 온도', value: '-20°C ~ 50°C' }
        ]
    },
    {
        id: 'dji-matrice-350-rtk',
        name: 'DJI Matrice 350 RTK',
        category: '산업용 드론',
        description: '차세대 산업용 드론 플랫폼, 향상된 성능과 안전성',
        detailDescription: 'DJI Matrice 350 RTK는 M300 RTK의 뒤를 잇는 차세대 산업용 드론입니다. O3 Enterprise 전송 시스템으로 최대 20km 전송 거리를 지원하며, 트리플 페이로드와 향상된 장애물 감지로 더욱 안전하고 효율적인 작업이 가능합니다.',
        price: 11000000,
        image: '/images/products/dji-matrice-350-rtk.jpg',
        hasDetailedPage: true,
        hero: true,
        featured: true,
        features: [
            '최대 55분 비행시간',
            '트리플 페이로드 지원',
            'O3 Enterprise 전송',
            '최대 20km 전송거리',
            '향상된 장애물 감지',
            'IP55 방진방수'
        ],
        specifications: [
            { label: '무게', value: '약 6.47kg (배터리 포함)' },
            { label: '최대 비행시간', value: '55분' },
            { label: '최대 전송거리', value: '20km (FCC)' },
            { label: '페이로드', value: '트리플 마운트' },
            { label: '최대 탑재 중량', value: '2.73kg' },
            { label: 'RTK', value: 'cm급 정확도' },
            { label: '방진방수', value: 'IP55' },
            { label: '작동 온도', value: '-20°C ~ 50°C' }
        ]
    },
    {
        id: 'dji-mavic-3-thermal',
        name: 'DJI Mavic 3 Thermal',
        category: '기업용 드론',
        description: '휴대성과 열화상 기능을 겸비한 점검 전문 드론',
        detailDescription: 'DJI Mavic 3 Thermal은 컴팩트한 폼 팩터에 열화상 센서를 탑재한 점검 전문 드론입니다. 640×512 열화상 센서와 4/3 CMOS 카메라, 56배 하이브리드 줌을 통해 태양광 패널, 전력 시설, 건물 등의 열화상 점검을 효율적으로 수행할 수 있습니다.',
        price: 0,
        image: '/images/products/dji-mavic-3-thermal.jpg',
        features: [
            '640×512 열화상 센서',
            '4/3 CMOS 광각 카메라',
            '56배 하이브리드 줌',
            '45분 비행시간',
            'RTK 정밀 측위',
            '15km 전송 거리'
        ],
        specifications: [
            { label: '무게', value: '약 920g (배터리 포함)' },
            { label: '최대 비행시간', value: '45분' },
            { label: '최대 전송거리', value: '15km (FCC)' },
            { label: '열화상', value: '640×512, 30Hz' },
            { label: '광각 카메라', value: '20MP, 4/3" CMOS' },
            { label: '줌', value: '56배 하이브리드 줌' },
            { label: 'RTK', value: 'cm급 정확도' },
            { label: '작동 온도', value: '-20°C ~ 50°C' }
        ]
    },

    {
        id: 'dji-zenmuse-h20n',
        name: 'DJI Zenmuse H20N',
        category: '페이로드',
        description: '야간 작업을 위한 하이브리드 센서 페이로드',
        detailDescription: 'DJI Zenmuse H20N은 야간 작업에 특화된 하이브리드 센서 페이로드입니다. 스타라이트 센서, 열화상 카메라, 200배 하이브리드 줌, 레이저 거리 측정기를 하나의 짐벌에 통합하여 야간 수색, 구조, 점검 작업을 완벽하게 수행할 수 있습니다.',
        price: 0,
        image: '',
        features: [
            '스타라이트 센서',
            '640×512 열화상',
            '200배 하이브리드 줌',
            '레이저 거리 측정',
            '듀얼 비전 시스템',
            '1200m 측정 거리'
        ]
    },
    {
        id: 'dji-zenmuse-l2',
        name: 'DJI Zenmuse L2',
        category: '페이로드',
        description: '고정밀 3D 데이터 수집을 위한 LiDAR 센서',
        detailDescription: 'DJI Zenmuse L2는 항공 측량을 위한 고성능 LiDAR 센서입니다. 최대 250m 탐지 거리와 초당 240,000 포인트의 점군 데이터 수집으로 정밀한 3D 모델링이 가능합니다. RGB 카메라 통합으로 컬러 정보도 함께 수집할 수 있습니다.',
        price: 0,
        image: '',
        hasDetailedPage: true,
        features: [
            '최대 250m 탐지 거리',
            '초당 240,000 포인트',
            '5cm 수직 정확도',
            '10cm 수평 정확도',
            'RGB 카메라 통합',
            '다중 반사 지원'
        ]
    },
    {
        id: 'dji-zenmuse-p1',
        name: 'DJI Zenmuse P1',
        category: '페이로드',
        description: '항공 측량을 위한 풀프레임 카메라 시스템',
        detailDescription: 'DJI Zenmuse P1은 항공 측량 전용 풀프레임 카메라입니다. 45MP 고해상도 센서와 기계식 셔터로 비행 중 왜곡 없는 이미지를 촬영할 수 있습니다. 3cm GSD(100m 고도)의 정확도로 정밀 측량과 3D 모델링이 가능합니다.',
        price: 0,
        image: '',
        features: [
            '45MP 풀프레임 센서',
            '3cm GSD (100m 고도)',
            '고정밀 타임싱크',
            'RTK 모듈 통합',
            '다양한 렌즈 지원',
            '기계식 셔터'
        ]
    },
    {
        id: 'thermal-camera',
        name: 'FLIR 열화상 카메라',
        category: '점검 장비',
        description: '태양광·건물·시설물 열화상 점검용 전문 카메라',
        detailDescription: 'FLIR 열화상 카메라는 산업 현장에서 신뢰받는 전문 점검 장비입니다. 640×512 해상도와 넓은 온도 측정 범위로 태양광 패널의 핫스팟, 건물의 단열 결함, 전기 설비의 과열 등을 정확하게 진단할 수 있습니다.',
        price: 0,
        image: '',
        features: [
            '640×512 해상도',
            '온도 측정 범위: -20℃~1500℃',
            'MSX 이미지 향상',
            '실시간 데이터 전송',
            '±2°C 측정 정확도',
            'Wi-Fi 연결'
        ]
    },
    {
        id: 'rtk-base-station',
        name: 'RTK 기준국 시스템',
        category: '측량 장비',
        description: '정밀 항공측량을 위한 고정밀 RTK 기준국',
        detailDescription: 'RTK 기준국 시스템은 cm급 정확도의 항공측량을 위한 필수 장비입니다. 반경 10km 범위에서 실시간 보정 데이터를 전송하여 드론의 위치 정확도를 극대화합니다. 쉬운 설치와 안정적인 운영으로 현장에서 즉시 사용할 수 있습니다.',
        price: 0,
        image: '',
        features: [
            'cm급 정확도',
            '반경 10km 커버리지',
            '실시간 보정 데이터',
            '쉬운 설치 및 운영',
            '다중 드론 지원',
            '4G/5G 연결'
        ]
    },
    {
        id: 'dji-smart-controller',
        name: 'DJI RC Plus',
        category: '조종 장비',
        description: '기업용 드론을 위한 고성능 스마트 조종기',
        detailDescription: 'DJI RC Plus는 기업용 드론 운영을 위한 프로페셔널 조종기입니다. 7인치 고휘도 디스플레이로 야외에서도 선명한 화면을 제공하며, OcuSync 3.0 통합으로 안정적인 전송을 보장합니다. -20°C~50°C의 넓은 작동 온도 범위로 극한 환경에서도 사용 가능합니다.',
        price: 0,
        image: '',
        features: [
            '7인치 고휘도 디스플레이',
            '통합 OcuSync 3.0',
            '6시간 배터리',
            '-20℃~50℃ 작동',
            'HDMI 출력 지원',
            '듀얼 제어 모드'
        ]
    },
    {
        id: 'dji-battery-station',
        name: 'DJI BS65 배터리 스테이션',
        category: '충전 장비',
        description: '산업 현장을 위한 고속 배터리 충전 솔루션',
        detailDescription: 'DJI BS65 배터리 스테이션은 산업 현장에서 효율적인 배터리 관리를 위한 필수 장비입니다. 최대 8개의 배터리를 동시에 충전하고, 65분 고속 충전으로 작업 중단 시간을 최소화합니다. 자동 가열 기능으로 저온 환경에서도 안정적인 충전이 가능합니다.',
        price: 0,
            image: '',
        features: [
            '최대 8개 배터리 동시 충전',
            '65분 고속 충전',
            '자동 가열 기능',
            '스마트 배터리 관리',
            '현장 이동 가능',
            '2400W 출력'
        ]
    }
];

// Hero 슬라이드에 표시할 제품들 (3개)
export const heroProducts: Product[] = products.filter(p => p.hero === true);

// 추천 제품 (featured products) - 4개
export const featuredProducts: Product[] = products.filter(p => p.featured === true);
