'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

interface RevealPresentationProps {
    presentationId: string;
}

declare global {
    interface Window {
        Reveal: any;
        hljs: any;
    }
}

const RevealPresentation: React.FC<RevealPresentationProps> = ({ presentationId }) => {
    const presentationRef = useRef<HTMLDivElement>(null);
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

    useEffect(() => {
        if (!presentationRef.current || !isAuthenticated) return;

        let revealInstance: any = null;

        const loadRevealJS = async () => {
            try {
                // 이미 로드된 CSS와 스크립트가 있는지 확인
                const existingRevealCSS = document.querySelector('link[href*="reveal.css"]');
                const existingRevealJS = document.querySelector('script[src*="reveal.js"]');

                // CSS 로드 (이미 있으면 건너뛰기)
                if (!existingRevealCSS) {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css';
                    document.head.appendChild(link);
                }

                // 테마 CSS 로드
                const existingThemeCSS = document.querySelector('link[href*="theme/white.css"]');
                if (!existingThemeCSS) {
                    const themeLink = document.createElement('link');
                    themeLink.rel = 'stylesheet';
                    themeLink.href = 'https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/white.css';
                    document.head.appendChild(themeLink);
                }

                // 코드 하이라이팅 CSS 로드
                const existingHighlightCSS = document.querySelector('link[href*="highlight.js"]');
                if (!existingHighlightCSS) {
                    const highlightLink = document.createElement('link');
                    highlightLink.rel = 'stylesheet';
                    highlightLink.href = 'https://cdn.jsdelivr.net/npm/highlight.js@11.8.0/styles/github.min.css';
                    document.head.appendChild(highlightLink);
                }

                // JavaScript 로드 (이미 있으면 건너뛰기)
                if (!existingRevealJS) {
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js';

                    script.onload = () => {
                        // 코드 하이라이팅 플러그인 로드
                        const existingHighlightJS = document.querySelector('script[src*="highlight.min.js"]');
                        if (!existingHighlightJS) {
                            const highlightScript = document.createElement('script');
                            highlightScript.src = 'https://cdn.jsdelivr.net/npm/highlight.js@11.8.0/lib/highlight.min.js';

                            highlightScript.onload = () => {
                                initializeReveal();
                            };
                            document.head.appendChild(highlightScript);
                        } else {
                            initializeReveal();
                        }
                    };

                    document.head.appendChild(script);
                } else {
                    // 이미 로드된 경우 바로 초기화
                    initializeReveal();
                }
            } catch (error) {
                console.error('Reveal.js 로드 실패:', error);
            }
        };

        const initializeReveal = () => {
            if (window.Reveal && presentationRef.current) {
                // 기존 Reveal 인스턴스가 있다면 제거
                if (revealInstance) {
                    revealInstance.destroy();
                }

                // 새로운 Reveal 인스턴스 생성
                revealInstance = new window.Reveal(presentationRef.current, {
                    hash: true,
                    transition: 'slide',
                    controls: true,
                    progress: true,
                    center: true,
                    touch: true,
                    fragments: true,
                    help: true,
                    width: 960,
                    height: 700,
                    margin: 0.1,
                    minScale: 0.2,
                    maxScale: 1.5,
                    embedded: false,
                    showNotes: false
                });

                revealInstance.initialize();

                // 코드 하이라이팅 초기화
                if (window.hljs) {
                    window.hljs.highlightAll();
                }

                // Reveal.js가 제대로 초기화되었는지 확인
                setTimeout(() => {
                    if (revealInstance && presentationRef.current) {
                        // 강제로 첫 번째 슬라이드로 이동
                        revealInstance.slide(0);
                    }
                }, 100);
            }
        };

        loadRevealJS();

        return () => {
            // 클린업
            if (revealInstance) {
                revealInstance.destroy();
            }
        };
    }, [presentationId, isAuthenticated]);

    // 프리젠테이션 내용을 동적으로 로드
    const getPresentationContent = () => {
        switch (presentationId) {
            case 'web-development-intro':
                return (
                    <div className="slides">
                        <section>
                            <h1>웹 개발 입문</h1>
                            <h3>HTML, CSS, JavaScript 기초</h3>
                            <p>
                                <small>Created by <a href="#">imdrone</a></small>
                            </p>
                        </section>

                        <section>
                            <h2>목차</h2>
                            <ul>
                                <li>웹 개발이란?</li>
                                <li>HTML 기초</li>
                                <li>CSS 스타일링</li>
                                <li>JavaScript 프로그래밍</li>
                                <li>실습 예제</li>
                            </ul>
                        </section>

                        <section>
                            <h2>웹 개발이란?</h2>
                            <p>웹사이트와 웹 애플리케이션을 만드는 과정</p>
                            <ul>
                                <li className="fragment">프론트엔드 (Frontend)</li>
                                <li className="fragment">백엔드 (Backend)</li>
                                <li className="fragment">데이터베이스 (Database)</li>
                            </ul>
                        </section>

                        <section>
                            <h2>HTML 기초</h2>
                            <p>HyperText Markup Language</p>
                            <pre><code className="html">
                                {`<!DOCTYPE html>
<html>
<head>
    <title>제목</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>이것은 문단입니다.</p>
</body>
</html>`}
                            </code></pre>
                        </section>

                        <section>
                            <h2>CSS 스타일링</h2>
                            <p>Cascading Style Sheets</p>
                            <pre><code className="css">
                                {`body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

h1 {
    color: #333;
    text-align: center;
}

.button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
}`}
                            </code></pre>
                        </section>

                        <section>
                            <h2>JavaScript 프로그래밍</h2>
                            <p>웹페이지에 동적 기능 추가</p>
                            <pre><code className="javascript">
                                {`// 변수 선언
let name = "홍길동";
const age = 25;

// 함수 정의
function greet(name) {
    return "안녕하세요, " + name + "님!";
}

// 이벤트 처리
document.getElementById("button").addEventListener("click", function() {
    alert("버튼이 클릭되었습니다!");
});`}
                            </code></pre>
                        </section>

                        <section>
                            <h2>실습 예제: 계산기</h2>
                            <p>HTML, CSS, JavaScript를 모두 사용한 간단한 계산기</p>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <div>
                                    <h4>HTML</h4>
                                    <pre><code className="html">
                                        {`<input type="number" id="num1">
<input type="number" id="num2">
<button onclick="add()">더하기</button>
<p id="result"></p>`}
                                    </code></pre>
                                </div>
                                <div>
                                    <h4>JavaScript</h4>
                                    <pre><code className="javascript">
                                        {`function add() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = result;
}`}
                                    </code></pre>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2>다음 단계</h2>
                            <ul>
                                <li className="fragment">프레임워크 학습 (React, Vue, Angular)</li>
                                <li className="fragment">백엔드 개발 (Node.js, Python, PHP)</li>
                                <li className="fragment">데이터베이스 (MySQL, MongoDB)</li>
                                <li className="fragment">배포 및 호스팅</li>
                                <li className="fragment">성능 최적화</li>
                            </ul>
                        </section>
                    </div>
                );

            default:
                return (
                    <div className="slides">
                        <section>
                            <h1>프리젠테이션을 찾을 수 없습니다</h1>
                            <p>요청하신 프리젠테이션이 존재하지 않습니다.</p>
                        </section>
                    </div>
                );
        }
    };

    // 로딩 중
    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    // 인증되지 않은 경우 (리다이렉트 중)
    if (!isAuthenticated) {
        return (
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
        );
    }

    return (
        <div
            className="reveal presentation-container"
            ref={presentationRef}
            style={{
                height: '600px',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#fff',
                color: '#333'
            }}
        >
            <style jsx>{`
                .reveal {
                    font-family: "Source Sans Pro", Helvetica, sans-serif;
                    font-size: 42px;
                    font-weight: normal;
                    color: #333;
                }
                .reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6 {
                    margin: 0 0 20px 0;
                    color: #333;
                    font-family: "Source Sans Pro", Helvetica, sans-serif;
                    font-weight: 600;
                    line-height: 1.2;
                    letter-spacing: normal;
                    text-transform: uppercase;
                    text-shadow: none;
                    word-wrap: break-word;
                }
                .reveal h1 {
                    font-size: 2.5em;
                }
                .reveal h2 {
                    font-size: 1.6em;
                }
                .reveal h3 {
                    font-size: 1.3em;
                }
                .reveal p {
                    margin: 0 0 20px 0;
                    line-height: 1.3;
                }
                .reveal ul {
                    display: block;
                    margin-left: 40px;
                }
                .reveal ol {
                    display: block;
                    margin-left: 40px;
                }
                .reveal li {
                    margin: 0.2em 0;
                }
                .reveal pre {
                    display: block;
                    position: relative;
                    width: 90%;
                    margin: 15px auto;
                    text-align: left;
                    font-size: 0.55em;
                    font-family: monospace;
                    line-height: 1.2em;
                    word-wrap: break-word;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                .reveal code {
                    font-family: monospace;
                    text-transform: none;
                }
                .reveal pre code {
                    display: block;
                    padding: 5px;
                    overflow: auto;
                    max-height: 400px;
                    word-wrap: normal;
                }
            `}</style>
            {getPresentationContent()}
        </div>
    );
};

export default RevealPresentation;
