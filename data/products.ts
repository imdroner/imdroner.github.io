export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    detailDescription?: string;
    price: number; // 0이면 '견적 문의', 숫자면 해당 가격 표시
    image: string; // 썸네일 (목록, Hero 슬라이더용 - 최적화된 작은 이미지)
    images?: string[]; // 제품 갤러리 이미지들
    features: string[];
    specifications?: { label: string; value: string }[];
    hasDetailedPage?: boolean; // 개별 페이지 존재 여부
    featured?: boolean; // 메인 페이지 추천 제품
    hero?: boolean; // Hero 슬라이드 대상 제품
    tags?: string[]; // 검색 및 관련 상품 추천용 태그
    createdAt: string; // 상품 등록일 (YYYY-MM-DD 형식)
}

export const products: Product[] = [
    {
        id: 'dji-dock-3',
        name: 'DJI Dock 3',
        category: '자동화 시스템',
        description: '차량 탑재 지원, 24/7 원격 무인 운영을 위한 혁신적인 드론 도킹 스테이션',
        detailDescription: 'DJI Dock 3는 Matrice 4D 또는 Matrice 4TD 고성능 드론과 함께 작동하여 24/7 원격 운영을 지원하는 차세대 자동화 시스템입니다. 업계 최초로 차량 탑재 배치를 지원하여 다양한 환경에 유연하게 적응할 수 있습니다. DJI FlightHub 2의 지능형 기능과 통합되어 작업 시간 및 인건비를 대폭 절감하며, 완전 무인 자동 이착륙, 배터리 충전, 실시간 데이터 전송을 통해 효율성을 극대화합니다.',
        price: 17853000,
        image: '/images/products/dji-dock-3/dji-dock-3.webp',
        images: [
            '/images/products/dji-dock-3/dji-dock-3.webp',
            '/images/products/dji-dock-3/dock3-1.webp',
            '/images/products/dji-dock-3/dock3-2.webp',
            '/images/products/dji-dock-3/dock3-3.webp',
            '/images/products/dji-dock-3/dock3-4.webp'
        ],
        hasDetailedPage: true,
        hero: true,
        featured: true,
        tags: ['자동화', '무인운영', 'Matrice', 'FlightHub2', '원격관리', '드론스테이션'],
        createdAt: '2025-11-15',
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
        id: 'dji-matrice-30t-combo',
        name: 'DJI Matrice 30T Combo',
        category: '산업용 드론',
        description: '열화상 카메라 탑재로 야간 점검 및 수색 작업에 최적화',
        detailDescription: 'DJI Matrice 30T는 열화상 센서를 탑재한 올인원 솔루션입니다. 640×512 열화상 센서와 48MP 광각 카메라, 200배 하이브리드 줌을 하나의 기체에 통합하여 야간 작업, 수색 구조, 시설물 점검 등 다양한 임무를 수행할 수 있습니다.',
        price: 11353000,
        image: '/images/products/dji-matrice-30t-combo/dji-matrice-30t-combo.webp',
        images: [
            '/images/products/dji-matrice-30t-combo/dji-matrice-30t-combo.webp',
            '/images/products/dji-matrice-30t-combo/dji-matrice-30t-combo-1.webp',
            '/images/products/dji-matrice-30t-combo/dji-matrice-30t-combo-2.webp',
            '/images/products/dji-matrice-30t-combo/dji-matrice-30t-combo-3.webp',
        ],
        hasDetailedPage: true,
        hero: true,
        featured: true,
        tags: ['열화상', '야간작업', '수색구조', '점검', 'Matrice', '레이저거리측정'],
        createdAt: '2025-11-10',
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
        image: '/images/products/dji-matrice-350-rtk/dji-matrice-350-rtk.webp',  
        images: [
            '/images/products/dji-matrice-350-rtk/dji-matrice-350-rtk.webp',
            '/images/products/dji-matrice-350-rtk/dji-matrice-350-rtk-1.webp',
            '/images/products/dji-matrice-350-rtk/dji-matrice-350-rtk-2.webp',
            '/images/products/dji-matrice-350-rtk/dji-matrice-350-rtk-3.webp',
            '/images/products/dji-matrice-350-rtk/dji-matrice-350-rtk-4.webp',
            '/images/products/dji-matrice-350-rtk/dji-matrice-350-rtk-5.webp',
            '/images/products/dji-matrice-350-rtk/dji-matrice-350-rtk-6.webp',
            '/images/products/dji-matrice-350-rtk/dji-matrice-350-rtk-7.webp',
        ],
        hasDetailedPage: true,
        hero: true,
        featured: true,
        tags: ['RTK', 'Matrice', '페이로드', 'O3Enterprise', '측량', '점검', 'IP55', '장시간비행'],
        createdAt: '2025-11-11',
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
        price: 7520100,
        image: '/images/products/dji-mavic-3-thermal/dji-mavic-3-thermal.webp',
        images: [
            '/images/products/dji-mavic-3-thermal/dji-mavic-3-thermal-5.webp',
            '/images/products/dji-mavic-3-thermal/dji-mavic-3-thermal.webp',
            '/images/products/dji-mavic-3-thermal/dji-mavic-3-thermal-1.webp',
            '/images/products/dji-mavic-3-thermal/dji-mavic-3-thermal-2.webp',
            '/images/products/dji-mavic-3-thermal/dji-mavic-3-thermal-3.webp',
            '/images/products/dji-mavic-3-thermal/dji-mavic-3-thermal-4.webp',
            '/images/products/dji-mavic-3-thermal/dji-mavic-3-thermal-6.webp',
        ],
        tags: ['열화상', 'RTK', '점검', 'Mavic', '태양광점검'],
        createdAt: '2025-10-15',
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
        id: 'dji-mavic-3-enterprise',
        name: 'DJI Mavic 3 Enterprise',
        category: '기업용 드론',
        description: '산업용 촬영 및 점검에 최적화된 전문가급 드론',
        detailDescription: 'DJI Mavic 3 Enterprise는 휴대성과 성능을 완벽하게 결합한 기업용 드론입니다. 4/3 CMOS 센서와 56배 하이브리드 줌을 탑재하여 산업 현장에서 필요한 모든 촬영을 수행할 수 있습니다. RTK 모듈을 통한 정밀 측위와 45분의 긴 비행시간으로 효율적인 작업이 가능합니다.',
        price: 5513800,
        image: '/images/products/mavic3-enterprise/mavic3-enterprise.webp',
        images: [
            '/images/products/mavic3-enterprise/mavic3-enterprise.webp',
            '/images/products/mavic3-enterprise/mavic3-enterprise-1.webp',
            '/images/products/mavic3-enterprise/mavic3-enterprise-2.webp',
            '/images/products/mavic3-enterprise/mavic3-enterprise-3.webp',
            '/images/products/mavic3-enterprise/mavic3-enterprise-4.webp',
            '/images/products/mavic3-enterprise/mavic3-enterprise-5.webp',
            '/images/products/mavic3-enterprise/mavic3-enterprise-6.webp',
        ],
        hasDetailedPage: true,
        hero: true,
        featured: true,
        tags: ['RTK', '점검', '촬영', '측량', '휴대성', '기업용', 'Mavic3'],
        createdAt: '2025-11-04',
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
        id: 'dji-zenmuse-l2',
        name: 'DJI Zenmuse L2',
        category: '페이로드',
        description: '고정밀 3D 데이터 수집을 위한 차세대 LiDAR 시스템',
        detailDescription: 'DJI Zenmuse L2는 프레임 LiDAR, 자체 개발 고정밀 IMU 시스템, 그리고 4/3 CMOS RGB 매핑 카메라를 통합한 고정밀 항공 LiDAR 시스템입니다. 수직 4cm, 수평 5cm의 정확도로 더욱 정밀하고 효율적인 지리 공간 데이터 수집을 제공합니다. 단일 비행으로 최대 2.5km²의 면적을 커버하며, 5회 반사 지원으로 복잡한 지형에서도 정확한 데이터를 제공합니다.',
        price: 20020000,
        image: '/images/products/dji-zenmuse-l2/dji-zenmuse-l2.webp',
        images: [
            '/images/products/dji-zenmuse-l2/dji-zenmuse-l2.webp',
            '/images/products/dji-zenmuse-l2/dji-zenmuse-l2-1.webp',
            '/images/products/dji-zenmuse-l2/dji-zenmuse-l2-2.webp',
            '/images/products/dji-zenmuse-l2/dji-zenmuse-l2-3.webp',
            '/images/products/dji-zenmuse-l2/dji-zenmuse-l2-4.webp'
        ],
        hasDetailedPage: true,
        tags: ['페이로드', 'LiDAR', '측량', '3D모델링', 'Matrice', 'RTK'],
        createdAt: '2025-08-20',
        features: [
            '수직 4cm, 수평 5cm 고정밀도',
            '단일 비행으로 최대 2.5km² 커버',
            '최대 450m 탐지 거리 (50% 반사율)',
            '5회 반사 지원',
            '4/3 CMOS RGB 매핑 카메라',
            'DJI Terra 턴키 솔루션'
        ],
        specifications: [
            { label: '탐지 범위', value: '250m @10% 반사율, 450m @50% 반사율' },
            { label: '수직 정확도', value: '4cm @ 50m AGL' },
            { label: '수평 정확도', value: '5cm @ 50m AGL' },
            { label: '반사 횟수', value: '5회 반사 지원' },
            { label: 'RGB 카메라', value: '20MP, 4/3" CMOS' },
            { label: '시야각(FOV)', value: '70.4°' },
            { label: '커버리지', value: '최대 2.5km² / 단일 비행' },
            { label: '호환 기체', value: 'Matrice 400/350/300 RTK' },
            { label: '레이저 파장', value: '905nm (Class 1)' },
            { label: '무게', value: '약 1,300g' }
        ]
    },
    {
        id: 'dji-zenmuse-p1',
        name: 'DJI Zenmuse P1',
        category: '페이로드',
        description: '항공 측량을 위한 풀프레임 카메라 시스템',
        detailDescription: 'DJI Zenmuse P1은 항공 측량 전용 풀프레임 카메라입니다. 45MP 고해상도 센서와 기계식 셔터로 비행 중 왜곡 없는 이미지를 촬영할 수 있습니다. 3cm GSD(100m 고도)의 정확도로 정밀 측량과 3D 모델링이 가능합니다.',
        price: 7025000,
        image: '/images/products/dji-zenmuse-p1/dji-zenmuse-p1.webp',
        images: [
            '/images/products/dji-zenmuse-p1/dji-zenmuse-p1.webp',
            '/images/products/dji-zenmuse-p1/dji-zenmuse-p1-1.webp',
            '/images/products/dji-zenmuse-p1/dji-zenmuse-p1-2.webp',
            '/images/products/dji-zenmuse-p1/dji-zenmuse-p1-3.webp',
        ],
        tags: ['페이로드', '측량', 'RTK', '3D모델링', 'Matrice', '45MP', '풀프레임'],
        createdAt: '2025-08-20',
        features: [
            '45MP 풀프레임 센서',
            '3cm GSD (100m 고도)',
            '고정밀 타임싱크',
            'RTK 모듈 통합',
            '다양한 렌즈 지원',
            '기계식 셔터'
        ]
    },



];

// Hero 슬라이드에 표시할 제품들 (3개)
export const heroProducts: Product[] = products.filter(p => p.hero === true);

// 추천 제품 (featured products) - 4개
export const featuredProducts: Product[] = products.filter(p => p.featured === true);

/**
 * 특정 제품과 관련된 상품을 추천합니다
 * 우선순위:
 * 1. 같은 태그를 가진 상품 (태그 매칭 수가 많을수록 우선)
 * 2. 같은 카테고리의 상품
 * 3. 최근에 등록된 상품
 * 
 * @param productId 현재 제품 ID
 * @param limit 반환할 관련 상품 수 (기본값: 3)
 * @returns 관련 상품 배열
 */
export function getRelatedProducts(productId: string, limit: number = 3): Product[] {
    const currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return [];

    // 현재 제품을 제외한 모든 제품
    const otherProducts = products.filter(p => p.id !== productId);

    // 각 제품에 점수를 매깁니다
    const scoredProducts = otherProducts.map(product => {
        let score = 0;

        // 1. 태그 매칭 점수 (태그당 10점)
        if (currentProduct.tags && product.tags) {
            const commonTags = currentProduct.tags.filter(tag => 
                product.tags?.includes(tag)
            );
            score += commonTags.length * 10;
        }

        // 2. 같은 카테고리 점수 (5점)
        if (product.category === currentProduct.category) {
            score += 5;
        }

        // 3. 최신 상품 점수 (날짜가 최근일수록 높은 점수, 최대 3점)
        const daysSinceCreation = Math.floor(
            (new Date().getTime() - new Date(product.createdAt).getTime()) / (1000 * 60 * 60 * 24)
        );
        score += Math.max(0, 3 - daysSinceCreation / 100);

        return { product, score };
    });

    // 점수순으로 정렬하고 상위 N개 반환
    return scoredProducts
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(item => item.product);
}
