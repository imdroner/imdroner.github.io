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
    {
        id: 'gochang-digital-twin',
        title: '고창 고인돌공원 디지털 트윈과 항공 VR 영상',
        thumbnail: '/images/gochang_dolmen.jpg',
        shortDesc: '드론으로 만든 3D 고인돌공원, 디지털 트윈과 항공 VR 영상을 제작하였습니다.',
        detailDesc: '세계유산도시 고창의 고인돌공원을 3D 모델링하여 디지털 트윈으로 구현하였습니다. 고인돌공원의 모든 부분을 3D 모델링하여 디지털 트윈으로 구현하였습니다. 항공 VR영상으로 고인돌공원을 360도 시점으로 감상해보세요.',
        images: ['/images/gochang_dolmen2406.jpg', '/images/gochang_dolmen2406_model.jpg', '/images/gochang_dolmen2433.jpg', '/images/gochang_dolmen2433_model.jpg', '/images/gochang_dolmen2443.jpg', '/images/gochang_dolmen2443_model.jpg'],
        video: 'https://youtu.be/Ly4w88UTTgk',
        video360: '/videos/gochang360.mp4', // 로컬 360 비디오 파일
        model: '/models/gochang_dolmen2443.glb',
        tags: ['고인돌공원', '항공VR', '세계유산도시', '디지털투어', '3D모델링', '디지털트윈'],
        date: '2025-07',
    },
    {
        id: 'geobukseong-digital-twin',
        title: '거북선 모형 디지털 트윈',
        thumbnail: '/images/project2.jpg',
        shortDesc: '드론으로 만든 3D 거북선! 여수 거북선 모형을 디지털 트윈으로 제작하였습니다',
        detailDesc: '전라남도 여수시의 거북선 모형을 디지털 트윈으로 구현하였습니다. 거북선 모형의 모든 부분을 3D 모델링하여 디지털 트윈으로 구현하였습니다.',
        images: ['/images/project2-1.jpg', '/images/project2-2.jpg', '/images/project2-3.jpg', '/images/project2-4.jpg', '/images/project2-5.jpg', '/images/project2-6.jpg', '/images/project2-7.jpg', '/images/project2-8.jpg', '/images/project2-9.jpg', '/images/project2-10.jpg'],
        video: 'https://youtu.be/tX5jBvwOt0U',
        model: '/models/geobukseon.glb',
        tags: ['디지털 트윈', '3D 모델링', '거북선', '드론촬영', '문화유산', '디지털문화재'],
        date: '2025-07',
    },
    {
        id: 'lee-su-sin-statue',
        title: '이순신 장군 동상 디지털 트윈',
        thumbnail: '/images/project3.jpg',
        shortDesc: '전라남도 여수시의 이순신 장군 동상을 디지털 트윈으로 구현하였습니다.',
        detailDesc: '드론으로 촬영한 이순신 장군 동상을 디지털 트윈으로 구현하였습니다. 동상의 모든 부분을 3D 모델링하여 디지털 트윈으로 구현하였습니다.',
        images: ['/images/project3-1.jpg', '/images/project3-2.jpg', '/images/project3-3.jpg', '/images/project3-4.jpg'],
        video: 'https://youtu.be/e11n_fCiVlE',
        model: '/models/leesunsin.glb',
        tags: ['디지털 트윈', '3D 모델링', '이순신 장군'],
        date: '2025-07',
    },
    {
        id: 'suncheonman-ocheon-green-square',
        title: '순천만 국가정원 오천 그린스퀘어 3D 가상투어',
        thumbnail: '/images/greensquare.jpg',
        shortDesc: '순천만 국가정원 오천 그린스퀘어를 3D 가상투어로 구현하였습니다.',
        detailDesc: '순천만 국가정원 오천 그린스퀘어를 3D 가상환경에서 즐겨보세요. 그린스퀘어의 모든 부분을 3D 모델링하여 가상투어로 구현하였습니다.',
        images: ['/images/greensquare1.jpg', '/images/greensquare2.jpg', '/images/greensquare3.jpg', '/images/greensquare4.jpg', '/images/greensquare5.jpg', '/images/greensquare6.jpg'],
        video: 'https://youtu.be/Rflm48dLh60',
        tags: ['3D 가상투어', '순천만국가정원', '오천그린스퀘어', '드론촬영', '디지털투어'],
        date: '2024-04',
    }
    // 추가 프로젝트는 여기에...
]; 