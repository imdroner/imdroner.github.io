export type Project = {
    id: string;
    title: string;
    thumbnail: string;
    shortDesc: string;
    detailDesc: string;
    images?: string[];
    video?: string;
    tags?: string[];
    date?: string;
};

export const projects: Project[] = [
    {
        id: 'drone-shooting',
        title: '드론 항공 촬영',
        thumbnail: '/images/project1.jpg',
        shortDesc: '항공 촬영 및 영상 편집 프로젝트',
        detailDesc: '최신 드론을 활용한 고화질 항공 촬영과 영상 편집을 진행하였습니다. 다양한 환경에서의 촬영 경험과 후반 작업 노하우를 바탕으로 고객의 니즈에 맞는 결과물을 제공하였습니다.',
        images: ['/images/project1-1.jpg', '/images/project1-2.jpg', '/images/project1-3.jpg'],
        video: 'https://youtu.be/f21v-XBDO74',
        tags: ['드론', '촬영', '영상'],
        date: '2023-05',
    },
    {
        id: 'mapping-service',
        title: '드론 맵핑 서비스',
        thumbnail: '/images/project2.jpg',
        shortDesc: '드론을 활용한 3D 맵핑 및 데이터 분석',
        detailDesc: '드론으로 촬영한 데이터를 바탕으로 3D 맵핑 및 지형 분석 서비스를 제공하였습니다. 정밀한 데이터 처리와 시각화 기술을 적용하였습니다.',
        images: ['/images/project2-1.jpg', '/images/project2-2.jpg'],
        tags: ['드론', '맵핑', '3D'],
        date: '2022-11',
    },
    // 추가 프로젝트는 여기에...
]; 