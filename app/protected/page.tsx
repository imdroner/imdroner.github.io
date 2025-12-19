'use client';

import { useState, useEffect } from 'react';
import { presentations } from '@/data/presentations';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lock, CheckCircle, BarChart3, Shield, Activity, Users, Globe, Code2, Sparkles, Zap } from 'lucide-react';

export default function ProtectedPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        if (password === 'secret123') {
            setIsAuthenticated(true);
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
        }
    }, []);

    const getDifficultyVariant = (difficulty: string): "default" | "secondary" | "destructive" => {
        switch (difficulty) {
            case 'beginner':
                return 'secondary';
            case 'intermediate':
                return 'default';
            case 'advanced':
                return 'destructive';
            default:
                return 'default';
        }
    };

    const getPresentationIcon = (presentationId: string) => {
        const icons = {
            'web-development-intro': <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
            'react-fundamentals': <Code2 className="h-12 w-12 text-cyan-600 dark:text-cyan-400" />,
            'nextjs-advanced': <Zap className="h-12 w-12 text-gray-800 dark:text-gray-200" />,
            'threejs-basics': <Sparkles className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
            'ai-web-apps': <Activity className="h-12 w-12 text-green-600 dark:text-green-400" />,
            'performance-optimization': <BarChart3 className="h-12 w-12 text-orange-600 dark:text-orange-400" />,
        };
        return icons[presentationId as keyof typeof icons] || <BarChart3 className="h-12 w-12 text-gray-400" />;
    };

    if (isAuthenticated) {
        return (
            <main className="max-w-6xl mx-auto px-4 py-16">
                <Card>
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-3xl flex items-center gap-2">
                                <Lock className="h-6 w-6" />
                                보호된 페이지
                            </CardTitle>
                            <Button variant="destructive" onClick={handleLogout}>
                                로그아웃
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                            <p className="text-green-800 dark:text-green-200 text-sm">
                                ✅ 인증되었습니다. 보호된 콘텐츠에 접근할 수 있습니다.
                            </p>
                        </div>

                        <Card className="bg-muted/50">
                            <CardContent className="pt-6">
                                <p className="text-muted-foreground">
                                    이곳에는 비밀번호를 알고 있는 사람만 볼 수 있는 보호된 콘텐츠가 표시됩니다.
                                    <br />
                                    <strong>보안 특징:</strong>
                                </p>
                                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                                    <li>• Next.js 라우팅을 통한 접근만 허용</li>
                                    <li>• 24시간 세션 자동 만료</li>
                                    <li>• 클라이언트 사이드 인증</li>
                                    <li>• 세션 스토리지 기반 상태 관리</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* 프리젠테이션 목록 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">📊 프리젠테이션 목록</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {presentations.map((presentation) => (
                                    <Link
                                        key={presentation.id}
                                        href={`/presentations/${presentation.id}`}
                                        className="group"
                                    >
                                        <Card variant="lift" className="h-full">
                                            <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-muted to-background">
                                                {getPresentationIcon(presentation.id)}
                                                <div className="absolute top-3 right-3">
                                                    <Badge variant={getDifficultyVariant(presentation.difficulty)}>
                                                        {presentation.difficulty === 'beginner' ? '초급' :
                                                            presentation.difficulty === 'intermediate' ? '중급' : '고급'}
                                                    </Badge>
                                                </div>
                                            </div>

                                            <CardHeader>
                                                <CardTitle className="group-hover:text-primary transition-colors">
                                                    {presentation.title}
                                                </CardTitle>
                                                <CardDescription className="line-clamp-2">
                                                    {presentation.description}
                                                </CardDescription>
                                            </CardHeader>

                                            <CardFooter className="flex justify-between text-xs text-muted-foreground">
                                                <span>{presentation.category}</span>
                                                <span>{presentation.duration} • {presentation.slides}슬라이드</span>
                                            </CardFooter>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* 기타 보호된 콘텐츠 */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4">🔐 기타 보호된 콘텐츠</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <BarChart3 className="h-5 w-5 text-primary" />
                                            데이터 분석
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            민감한 데이터 분석 결과와 인사이트를 확인할 수 있습니다.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Shield className="h-5 w-5 text-primary" />
                                            관리자 도구
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            시스템 관리 및 설정을 위한 도구에 접근할 수 있습니다.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Activity className="h-5 w-5 text-primary" />
                                            성능 모니터링
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            실시간 성능 지표와 시스템 상태를 모니터링할 수 있습니다.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Users className="h-5 w-5 text-primary" />
                                            사용자 관리
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            사용자 계정 및 권한 관리를 위한 도구를 사용할 수 있습니다.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>
                    </CardContent>
                </Card>
            </main>
        );
    }

    return (
        <main className="max-w-md mx-auto px-4 py-16">
            <Card>
                <CardHeader>
                    <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="h-8 w-8 text-destructive" />
                    </div>
                    <CardTitle className="text-2xl text-center">🔒 보호된 페이지</CardTitle>
                    <CardDescription className="text-center">
                        이 페이지에 접근하려면 비밀번호가 필요합니다.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">
                                비밀번호
                            </label>
                            <Input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="비밀번호를 입력하세요"
                                required
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                                <p className="text-destructive text-sm">{error}</p>
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full"
                        >
                            {isLoading ? '확인 중...' : '접근하기'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
}
