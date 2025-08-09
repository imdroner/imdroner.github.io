'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { presentations } from '@/data/presentations';

// 난이도별 색상 함수
const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
        case 'beginner':
            return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
        case 'intermediate':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
        case 'advanced':
            return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
};

// 난이도 텍스트 함수
const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
        case 'beginner':
            return '초급';
        case 'intermediate':
            return '중급';
        case 'advanced':
            return '고급';
        default:
            return '기타';
    }
};

// 카테고리 아이콘 함수
const getCategoryIcon = (category: string) => {
    switch (category) {
        case '웹 개발':
            return '🌐';
        case '프론트엔드':
            return '⚛️';
        case '3D 그래픽':
            return '🎨';
        case 'AI/ML':
            return '🤖';
        case '성능':
            return '⚡';
        default:
            return '📚';
    }
};

export default function PresentationList() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // 인증 상태 확인
    useEffect(() => {
        const auth = sessionStorage.getItem('isAuthenticated');
        const authTimestamp = sessionStorage.getItem('authTimestamp');

        if (auth === 'true' && authTimestamp) {
            const now = Date.now();
            const timestamp = parseInt(authTimestamp);

            if (now - timestamp < 86400000) {
                setIsAuthenticated(true);
            } else {
                sessionStorage.removeItem('isAuthenticated');
                sessionStorage.removeItem('authTimestamp');
                setIsAuthenticated(false);
            }
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">📊 Reveal.js 프리젠테이션</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    다양한 기술 주제에 대한 인터랙티브 프리젠테이션을 확인해보세요
                </p>
                {isAuthenticated && (
                    <div className="mt-2 p-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <p className="text-green-800 dark:text-green-200 text-sm">
                            🔒 인증된 사용자 - 프리젠테이션에 접근할 수 있습니다
                        </p>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {presentations.map((presentation) => (
                    <Link
                        key={presentation.id}
                        href={isAuthenticated ? `/presentations/${presentation.id}` : '/protected'}
                        className="group block bg-white dark:bg-neutral-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
                    >
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-2xl">{getCategoryIcon(presentation.category)}</span>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(presentation.difficulty)}`}>
                                    {getDifficultyText(presentation.difficulty)}
                                </span>
                                {!isAuthenticated && (
                                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                                        🔒 보호됨
                                    </span>
                                )}
                            </div>

                            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {presentation.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                {presentation.description}
                            </p>

                            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                <span>{presentation.duration}</span>
                                <span>{presentation.slides}슬라이드</span>
                            </div>

                            <div className="flex flex-wrap gap-1 mt-3">
                                {presentation.tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                                {presentation.tags.length > 3 && (
                                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                                        +{presentation.tags.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
