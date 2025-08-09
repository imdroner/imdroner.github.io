'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RevealPresentation from './RevealPresentation';
import { Presentation } from '@/data/presentations';

interface AuthenticatedPresentationProps {
    presentation: Presentation;
}

export default function AuthenticatedPresentation({ presentation }: AuthenticatedPresentationProps) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    // 인증 상태 확인
    useEffect(() => {
        const checkAuth = () => {
            const auth = sessionStorage.getItem('isAuthenticated');
            const authTimestamp = sessionStorage.getItem('authTimestamp');

            if (auth === 'true' && authTimestamp) {
                // 24시간(86400000ms) 후 자동 로그아웃
                const now = Date.now();
                const timestamp = parseInt(authTimestamp);

                if (now - timestamp < 86400000) {
                    setIsAuthenticated(true);
                } else {
                    // 세션이 만료되었으면 로그아웃
                    sessionStorage.removeItem('isAuthenticated');
                    sessionStorage.removeItem('authTimestamp');
                    setIsAuthenticated(false);
                    // 로그아웃 후 보호된 페이지로 리다이렉트
                    router.push('/protected');
                }
            } else {
                setIsAuthenticated(false);
                // 인증되지 않은 경우 보호된 페이지로 리다이렉트
                router.push('/protected');
            }
            setIsLoading(false);
        };

        checkAuth();
    }, [router]);

    // 로딩 중
    if (isLoading) {
        return (
            <main className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex items-center justify-center h-96">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
                </div>
            </main>
        );
    }

    // 인증되지 않은 경우 (리다이렉트 중)
    if (!isAuthenticated) {
        return (
            <main className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col items-center justify-center h-96 space-y-4">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">접근 권한이 없습니다</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
                        이 프리젠테이션을 보려면 인증이 필요합니다.
                        <br />
                        보호된 페이지로 리다이렉트됩니다...
                    </p>
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
            </main>
        );
    }

    // 인증된 경우 프레젠테이션 표시
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold">{presentation.title}</h1>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>🔒 보호된 콘텐츠</span>
                        <span>•</span>
                        <span>{presentation.duration}</span>
                        <span>•</span>
                        <span>{presentation.slides}슬라이드</span>
                    </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{presentation.description}</p>
                <div className="flex flex-wrap gap-2">
                    {presentation.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-8">
                <RevealPresentation presentationId={presentation.id} />
            </div>
        </main>
    );
}
