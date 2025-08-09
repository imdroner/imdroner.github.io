export interface Presentation {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    duration: string;
    tags: string[];
    slides: number;
}

export const presentations: Presentation[] = [
    {
        id: 'web-development-intro',
        title: '웹 개발 입문',
        description: 'HTML, CSS, JavaScript의 기본 개념과 웹 개발의 기초를 다지는 프리젠테이션입니다.',
        thumbnail: '/images/presentations/web-dev.jpg',
        category: '웹 개발',
        difficulty: 'beginner',
        duration: '15분',
        tags: ['HTML', 'CSS', 'JavaScript', '기초'],
        slides: 12
    },
    {
        id: 'react-fundamentals',
        title: 'React 기초',
        description: 'React의 핵심 개념인 컴포넌트, 상태, props를 이해하고 실습해보는 프리젠테이션입니다.',
        thumbnail: '/images/presentations/react.jpg',
        category: '프론트엔드',
        difficulty: 'intermediate',
        duration: '20분',
        tags: ['React', '컴포넌트', '상태관리', 'JSX'],
        slides: 18
    },
    {
        id: 'nextjs-advanced',
        title: 'Next.js 고급 기능',
        description: 'Next.js의 App Router, 서버 컴포넌트, API 라우트 등 고급 기능을 다루는 프리젠테이션입니다.',
        thumbnail: '/images/presentations/nextjs.jpg',
        category: '프론트엔드',
        difficulty: 'advanced',
        duration: '25분',
        tags: ['Next.js', 'App Router', '서버 컴포넌트', 'API'],
        slides: 22
    },
    {
        id: 'threejs-basics',
        title: 'Three.js 기초',
        description: 'Three.js를 사용한 3D 웹 그래픽의 기본 개념과 실습을 포함한 프리젠테이션입니다.',
        thumbnail: '/images/presentations/threejs.jpg',
        category: '3D 그래픽',
        difficulty: 'intermediate',
        duration: '18분',
        tags: ['Three.js', '3D', 'WebGL', '그래픽'],
        slides: 16
    },
    {
        id: 'ai-web-apps',
        title: 'AI 웹 애플리케이션',
        description: 'OpenAI API를 활용한 AI 기능을 웹 애플리케이션에 통합하는 방법을 다루는 프리젠테이션입니다.',
        thumbnail: '/images/presentations/ai-web.jpg',
        category: 'AI/ML',
        difficulty: 'advanced',
        duration: '30분',
        tags: ['AI', 'OpenAI', 'API', '챗봇'],
        slides: 25
    },
    {
        id: 'performance-optimization',
        title: '웹 성능 최적화',
        description: '웹 애플리케이션의 성능을 측정하고 최적화하는 다양한 기법들을 소개하는 프리젠테이션입니다.',
        thumbnail: '/images/presentations/performance.jpg',
        category: '성능',
        difficulty: 'advanced',
        duration: '22분',
        tags: ['성능', '최적화', 'Core Web Vitals', '번들링'],
        slides: 20
    }
];

export const getPresentationById = (id: string): Presentation | undefined => {
    return presentations.find(p => p.id === id);
};

export const getPresentationsByCategory = (category: string): Presentation[] => {
    return presentations.filter(p => p.category === category);
};

export const getPresentationsByDifficulty = (difficulty: string): Presentation[] => {
    return presentations.filter(p => p.difficulty === difficulty);
};
