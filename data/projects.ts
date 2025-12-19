export type Project = {
    id: string;
    title: string;
    thumbnail: string;
    shortDesc: string;
    detailDesc: string;
    images?: string[];
    video?: string;
    video360?: string; // 360 비디오 URL 또는 파일 경로
    model?: string; // 3D 모델 파일 경로
    tags?: string[];
    date?: string;
};

export const projects: Project[] = [
    // 추가 프로젝트는 여기에...
    {
        id: 'gochang-digital-twin',
        title: '고창 고인돌공원 디지털 트윈과 항공 VR 영상',
        thumbnail: '/images/portfolios/gochang-dolmen/gochang_dolmen2443.webp',
        shortDesc: '드론으로 만든 3D 고인돌공원, 디지털 트윈과 항공 VR 영상을 제작하였습니다.',
        detailDesc: '세계유산도시 고창의 고인돌공원을 3D 모델링하여 디지털 트윈으로 구현하였습니다. 고인돌공원의 모든 부분을 3D 모델링하여 디지털 트윈으로 구현하였습니다. 항공 VR영상으로 고인돌공원을 360도 시점으로 감상해보세요.',
        images: ['/images/portfolios/gochang-dolmen/gochang_dolmen2406.webp', '/images/portfolios/gochang-dolmen/gochang_dolmen2406_model.webp', '/images/portfolios/gochang-dolmen/gochang_dolmen2433.webp', '/images/portfolios/gochang-dolmen/gochang_dolmen2433_model.webp', '/images/portfolios/gochang-dolmen/gochang_dolmen2443.webp', '/images/portfolios/gochang-dolmen/gochang_dolmen2443_model.webp'],
        video: 'https://youtu.be/Ly4w88UTTgk',
        video360: 'https://youtu.be/Gw60HheweiQ', // 로컬 360 비디오 파일
        model: '/models/gochang_dolmen2443.glb',
        tags: ['고인돌공원', '항공VR', '세계유산도시', '디지털투어', '3D모델링', '디지털트윈'],
        date: '2025-07',
    },
    {
        id: 'geobukseon-digital-twin',
        title: '거북선 모형 디지털 트윈',
        thumbnail: '/images/portfolios/geobukseon-digital-twin/project2-1.webp',
        shortDesc: '드론으로 만든 3D 거북선! 여수 거북선 모형을 디지털 트윈으로 제작하였습니다',
        detailDesc: '전라남도 여수시의 거북선 모형을 디지털 트윈으로 구현하였습니다. 거북선 모형의 모든 부분을 3D 모델링하여 디지털 트윈으로 구현하였습니다.',
        images: ['/images/portfolios/geobukseon-digital-twin/project2-1.webp', '/images/portfolios/geobukseon-digital-twin/project2-2.webp', '/images/portfolios/geobukseon-digital-twin/project2-3.webp', '/images/portfolios/geobukseon-digital-twin/project2-4.webp', '/images/portfolios/geobukseon-digital-twin/project2-5.webp', '/images/portfolios/geobukseon-digital-twin/project2-6.webp', '/images/portfolios/geobukseon-digital-twin/project2-7.webp', '/images/portfolios/geobukseon-digital-twin/project2-8.webp', '/images/portfolios/geobukseon-digital-twin/project2-9.webp'],
        video: 'https://youtu.be/tX5jBvwOt0U',
        model: '/models/geobukseon.glb',
        tags: ['디지털 트윈', '3D 모델링', '거북선', '드론촬영', '문화유산', '디지털문화재'],
        date: '2025-07',
    },
    {
        id: 'lee-su-sin-statue',
        title: '이순신 장군 동상 디지털 트윈',
        thumbnail: '/images/portfolios/lee-su-sin-statue/project3-4.webp',
        shortDesc: '전라남도 여수시의 이순신 장군 동상을 디지털 트윈으로 구현하였습니다.',
        detailDesc: '드론으로 촬영한 이순신 장군 동상을 디지털 트윈으로 구현하였습니다. 동상의 모든 부분을 3D 모델링하여 디지털 트윈으로 구현하였습니다.',
        images: ['/images/portfolios/lee-su-sin-statue/project3-1.webp', '/images/portfolios/lee-su-sin-statue/project3-2.webp', '/images/portfolios/lee-su-sin-statue/project3-3.webp', '/images/portfolios/lee-su-sin-statue/project3-4.webp'],
        video: 'https://youtu.be/e11n_fCiVlE',
        model: '/models/leesunsin.glb',
        tags: ['디지털 트윈', '3D 모델링', '이순신 장군'],
        date: '2025-07',
    },
    {
        id: 'suncheonman-botanical-garden',
        title: '순천만 국가정원 식물원 3D 가상투어',
        thumbnail: '/images/portfolios/botanical-garden/botanical-garden-1.webp',
        shortDesc: '순천만 국가정원 식물원을 3D 가상투어로 구현하였습니다.',
        detailDesc: '순천만 국가정원 식물원을 3D 가상환경에서 즐겨보세요. 식물원의 모든 부분을 3D 모델링하여 가상투어로 구현하였습니다.',
        images: ['/images/portfolios/botanical-garden/botanical-garden-1.webp', '/images/portfolios/botanical-garden/botanical-garden-2.webp', '/images/portfolios/botanical-garden/botanical-garden-3.webp', '/images/portfolios/botanical-garden/botanical-garden-4.webp', '/images/portfolios/botanical-garden/botanical-garden-5.webp', '/images/portfolios/botanical-garden/botanical-garden-6.webp'],
        video: 'https://youtu.be/6PpQ1kTG_iA',
        tags: ['3D 가상투어', '순천만국가정원', '식물원', '메타포트', 'VR', '디지털투어'],
        date: '2024-05',
    },
    {
        id: 'suncheonman-ocheon-green-square',
        title: '순천만 국가정원 오천 그린스퀘어 3D 가상투어',
        thumbnail: '/images/portfolios/suncheonman-ocheon-green-square/greensquare.webp',
        shortDesc: '순천만 국가정원 오천 그린스퀘어를 3D 가상투어로 구현하였습니다.',
        detailDesc: '순천만 국가정원 오천 그린스퀘어를 3D 가상환경에서 즐겨보세요. 그린스퀘어의 모든 부분을 3D 모델링하여 가상투어로 구현하였습니다.',
        images: ['/images/portfolios/suncheonman-ocheon-green-square/greensquare1.webp', '/images/portfolios/suncheonman-ocheon-green-square/greensquare2.webp', '/images/portfolios/suncheonman-ocheon-green-square/greensquare3.webp', '/images/portfolios/suncheonman-ocheon-green-square/greensquare4.webp', '/images/portfolios/suncheonman-ocheon-green-square/greensquare5.webp', '/images/portfolios/suncheonman-ocheon-green-square/greensquare6.webp'],
        video: 'https://youtu.be/Rflm48dLh60',
        tags: ['3D 가상투어', '순천만국가정원', '오천그린스퀘어', '메타포트', 'VR', '디지털투어'],
        date: '2024-04',
    }
    
]; 