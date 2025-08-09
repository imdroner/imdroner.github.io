'use client';

import { useRef, useState, useEffect } from 'react';

interface ModelViewerProps {
    src: string;
    alt: string;
    [key: string]: any;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ src, alt, ...props }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isModelViewerLoaded, setIsModelViewerLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const viewerRef = useRef<any>(null);

    // src가 유효한지 확인
    const isValidSrc = src && src.trim() !== '';

    useEffect(() => {
        setIsMounted(true);

        // model-viewer가 로드되었는지 확인
        const checkModelViewer = () => {
            if (customElements.get('model-viewer')) {
                setIsModelViewerLoaded(true);
            } else {
                setTimeout(checkModelViewer, 100);
            }
        };
        checkModelViewer();
    }, []);

    useEffect(() => {
        if (!viewerRef.current || !isModelViewerLoaded || !isValidSrc) return;

        const modelViewer = viewerRef.current;

        // 로딩 상태 초기화
        setIsLoading(true);
        setHasError(false);

        // 에러 핸들링
        const handleError = (event: any) => {
            console.warn('3D 모델 로딩 오류:', event);
            setHasError(true);
            setIsLoading(false);
        };

        // 로드 완료 핸들링
        const handleLoad = () => {
            console.log('3D 모델 로드 완료');
            setHasError(false);
            setIsLoading(false);
        };

        // 로딩 시작 핸들링
        const handleProgress = (event: any) => {
            console.log('3D 모델 로딩 시작');
            setIsLoading(true);

            // 진행률이 있으면 로그 출력
            if (event.detail && event.detail.totalProgress !== undefined) {
                const progress = event.detail.totalProgress;
                console.log(`3D 모델 로딩 진행률: ${(progress * 100).toFixed(1)}%`);
                if (progress >= 1) {
                    setIsLoading(false);
                }
            }
        };

        // 모델이 준비되었을 때
        const handleReady = () => {
            console.log('3D 모델 준비 완료');
            setIsLoading(false);
        };

        // 모델이 완전히 로드되었을 때
        const handleModelVisibility = () => {
            console.log('3D 모델 가시성 변경');
            // 모델이 보이는 상태라면 로딩 완료로 간주
            if (modelViewer.modelIsVisible) {
                setIsLoading(false);
            }
        };

        // 모델이 완전히 로드되었을 때 (추가 이벤트)
        const handleModelLoad = () => {
            console.log('3D 모델 완전 로드');
            setIsLoading(false);
        };

        // 모델이 완전히 로드되었을 때 (추가 이벤트)
        const handleModelVisibilityChanged = () => {
            console.log('3D 모델 가시성 변경됨');
            if (modelViewer.modelIsVisible) {
                setIsLoading(false);
            }
        };

        modelViewer.addEventListener('error', handleError);
        modelViewer.addEventListener('load', handleLoad);
        modelViewer.addEventListener('progress', handleProgress);
        modelViewer.addEventListener('ready', handleReady);
        modelViewer.addEventListener('model-visibility', handleModelVisibility);
        modelViewer.addEventListener('model-load', handleModelLoad);
        modelViewer.addEventListener('model-visibility-changed', handleModelVisibilityChanged);

        // 전체화면 이벤트 핸들링
        const handleFullscreenChange = () => {
            setIsFullscreen(
                document.fullscreenElement === modelViewer ||
                (typeof modelViewer.getRootNode === 'function' && document.fullscreenElement === modelViewer.getRootNode().host)
            );
        };

        modelViewer.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('fullscreenchange', handleFullscreenChange);

        // 모델이 로드되었는지 확인하는 함수
        const checkModelLoaded = () => {
            // model-viewer의 내부 상태 확인
            if (modelViewer.modelIsVisible || modelViewer.loaded || modelViewer.src === '') {
                setIsLoading(false);
                return;
            }

            // 추가적인 상태 확인
            if (modelViewer.readyState === 'complete' || modelViewer.readyState === 4) {
                setIsLoading(false);
                return;
            }

            // 모델이 실제로 로드되었는지 확인
            if (modelViewer.model && modelViewer.model.readyState === 'complete') {
                setIsLoading(false);
                return;
            }

            // 모델이 완전히 로드되었는지 확인
            if (modelViewer.modelIsVisible === true) {
                setIsLoading(false);
                return;
            }

            // 모델이 실제로 로드되었는지 확인 (추가 방법)
            if (modelViewer.model && modelViewer.model.readyState === 4) {
                setIsLoading(false);
                return;
            }
        };

        // 모델 로딩 상태 확인 (1초마다)
        const loadingCheckInterval = setInterval(checkModelLoaded, 1000);

        // 5초 후에도 로딩이 완료되지 않으면 강제로 로딩 상태 해제
        const loadingTimeout = setTimeout(() => {
            if (isLoading) {
                console.log('3D 모델 로딩 타임아웃 - 강제 완료');
                setIsLoading(false);
            }
        }, 5000);

        return () => {
            clearInterval(loadingCheckInterval);
            clearTimeout(loadingTimeout);
            modelViewer.removeEventListener('error', handleError);
            modelViewer.removeEventListener('load', handleLoad);
            modelViewer.removeEventListener('progress', handleProgress);
            modelViewer.removeEventListener('ready', handleReady);
            modelViewer.removeEventListener('model-visibility', handleModelVisibility);
            modelViewer.removeEventListener('model-load', handleModelLoad);
            modelViewer.removeEventListener('model-visibility-changed', handleModelVisibilityChanged);
            modelViewer.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, [isModelViewerLoaded, src, isValidSrc]);

    const handleFullscreen = () => {
        if (viewerRef.current) {
            if (typeof viewerRef.current.enterFullscreen === 'function') {
                viewerRef.current.enterFullscreen();
            } else if (viewerRef.current.requestFullscreen) {
                viewerRef.current.requestFullscreen();
            }
        }
    };

    const handleExitFullscreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    };

    if (!isMounted || !isModelViewerLoaded) {
        return (
            <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600 mx-auto mb-4"></div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">3D 뷰어 로딩 중...</p>
                </div>
            </div>
        );
    }

    // src가 유효하지 않은 경우
    if (!isValidSrc) {
        return (
            <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                <div className="text-center">
                    <div className="text-yellow-500 mb-4">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">3D 모델 파일이 없습니다</p>
                </div>
            </div>
        );
    }

    if (hasError) {
        return (
            <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-500 mb-4">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">3D 모델을 로드할 수 없습니다</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">파일을 확인해주세요</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full relative">
            {!isFullscreen && (
                <button
                    type="button"
                    onClick={handleFullscreen}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/80 text-white rounded hover:bg-black/90 transition-colors"
                    title="전체화면"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                    </svg>
                </button>
            )}
            {isFullscreen && (
                <button
                    type="button"
                    onClick={handleExitFullscreen}
                    className="fixed top-4 right-4 z-[10000] p-2 bg-black/80 text-white rounded hover:bg-black/90 transition-colors"
                    title="전체화면 닫기"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </button>
            )}

            {isLoading && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-blue-600 mx-auto mb-4"></div>
                        <p className="text-sm text-white">3D 모델 로딩 중...</p>
                    </div>
                </div>
            )}

            {/* @ts-ignore */}
            <model-viewer
                ref={viewerRef}
                src={src}
                alt={alt}
                ar
                shadow-intensity="1"
                camera-controls
                auto-rotate
                touch-action="pan-y"
                style={{ width: '100%', height: '100%', border: 'none' }}
                camera-orbit="0deg 75deg 75%"
                min-camera-orbit="auto auto 50%"
                max-camera-orbit="auto auto 150%"
                field-of-view="30deg"
                exposure="1"
                loading="eager"
                reveal="auto"
                {...props}
            />
        </div>
    );
};

export default ModelViewer; 