'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { presentations } from '@/data/presentations';
import Link from 'next/link';

export default function ProtectedPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // 클라이언트 사이드에서 직접 비밀번호 확인
        if (password === 'secret123') {
            setIsAuthenticated(true);
            // 세션 스토리지에 인증 상태 저장 (페이지 새로고침시에도 유지)
            sessionStorage.setItem('isAuthenticated', 'true');
            sessionStorage.setItem('authTimestamp', Date.now().toString());
        } else {
            setError('비밀번호가 올바르지 않습니다.');
        }

        setIsLoading(false);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('isAuthenticated');
        sessionStorage.removeItem('authTimestamp');
    };

    // 페이지 로드시 세션 스토리지 확인 (클라이언트 사이드에서만 실행)
    useEffect(() => {
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
            }
        }
    }, []);

    // 난이도에 따른 색상 클래스
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'beginner':
                return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200';
            case 'intermediate':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200';
            case 'advanced':
                return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-200';
        }
    };

    // 프리젠테이션별 아이콘 생성 함수
    const getPresentationIcon = (presentationId: string) => {
        switch (presentationId) {
            case 'web-development-intro':
                return (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
                        <div className="text-6xl text-blue-600 dark:text-blue-400">
                            🌐
                        </div>
                    </div>
                );
            case 'react-fundamentals':
                return (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20">
                        <div className="text-6xl text-cyan-600 dark:text-cyan-400">
                            ⚛️
                        </div>
                    </div>
                );
            case 'nextjs-advanced':
                return (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-black dark:from-gray-900/20 dark:to-black/20">
                        <div className="text-6xl text-gray-800 dark:text-gray-200">
                            ⚡
                        </div>
                    </div>
                );
            case 'threejs-basics':
                return (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20">
                        <div className="text-6xl text-purple-600 dark:text-purple-400">
                            🎨
                        </div>
                    </div>
                );
            case 'ai-web-apps':
                return (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20">
                        <div className="text-6xl text-green-600 dark:text-green-400">
                            🤖
                        </div>
                    </div>
                );
            case 'performance-optimization':
                return (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20">
                        <div className="text-6xl text-orange-600 dark:text-orange-400">
                            🚀
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20">
                        <div className="text-6xl text-gray-400 dark:text-gray-600">
                            📊
                        </div>
                    </div>
                );
        }
    };

    if (isAuthenticated) {
        return (
            <main className="max-w-6xl mx-auto px-4 py-16">
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-center">🔒 보호된 페이지</h1>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                            로그아웃
                        </button>
                    </div>

                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <p className="text-green-800 dark:text-green-200 text-sm">
                            ✅ 인증되었습니다. 보호된 콘텐츠에 접근할 수 있습니다.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="text-gray-700 dark:text-gray-300">
                                    이곳에는 비밀번호를 알고 있는 사람만 볼 수 있는 보호된 콘텐츠가 표시됩니다.
                                    <br />
                                    <strong>보안 특징:</strong>
                                </p>
                                <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>• Next.js 라우팅을 통한 접근만 허용</li>
                                    <li>• 24시간 세션 자동 만료</li>
                                    <li>• 클라이언트 사이드 인증</li>
                                    <li>• 세션 스토리지 기반 상태 관리</li>
                                </ul>
                            </div>
                        </section>

                        {/* 프리젠테이션 목록 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">📊 프리젠테이션 목록</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {presentations.map((presentation) => (
                                    <Link
                                        key={presentation.id}
                                        href={`/presentations/${presentation.id}`}
                                        className="group block bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                    >
                                        {/* 썸네일 */}
                                        <div className="relative h-48">
                                            {getPresentationIcon(presentation.id)}
                                            {/* 난이도 배지 */}
                                            <div className="absolute top-3 right-3">
                                                <span className={`px-2 py-1 rounded-md text-xs font-medium ${getDifficultyColor(presentation.difficulty)}`}>
                                                    {presentation.difficulty === 'beginner' ? '초급' :
                                                        presentation.difficulty === 'intermediate' ? '중급' : '고급'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* 콘텐츠 */}
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {presentation.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 h-10 overflow-hidden">
                                                {presentation.description}
                                            </p>

                                            {/* 메타데이터 */}
                                            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                                <span>{presentation.category}</span>
                                                <span>{presentation.duration} • {presentation.slides}슬라이드</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">🔐 기타 보호된 콘텐츠</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <h3 className="text-lg font-semibold mb-2">📊 데이터 분석</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        민감한 데이터 분석 결과와 인사이트를 확인할 수 있습니다.
                                    </p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <h3 className="text-lg font-semibold mb-2">🔐 관리자 도구</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        시스템 관리 및 설정을 위한 도구에 접근할 수 있습니다.
                                    </p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <h3 className="text-lg font-semibold mb-2">📈 성능 모니터링</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        실시간 성능 지표와 시스템 상태를 모니터링할 수 있습니다.
                                    </p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <h3 className="text-lg font-semibold mb-2">👥 사용자 관리</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        사용자 계정 및 권한 관리를 위한 도구를 사용할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="max-w-md mx-auto px-4 py-16">
            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow p-8">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold mb-2">🔒 보호된 페이지</h1>
                    <p className="text-gray-600 dark:text-gray-400">이 페이지에 접근하려면 비밀번호가 필요합니다.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            비밀번호
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                            placeholder="비밀번호를 입력하세요"
                            required
                        />
                    </div>

                    {error && (
                        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                            <p className="text-red-800 dark:text-red-200 text-sm">{error}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {isLoading ? '확인 중...' : '접근하기'}
                    </button>
                </form>
            </div>
        </main>
    );
}
