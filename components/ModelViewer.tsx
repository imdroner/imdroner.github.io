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
    const viewerRef = useRef<any>(null);

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
        if (!viewerRef.current) return;
        const el = viewerRef.current;
        const handleFullscreenChange = () => {
            setIsFullscreen(
                document.fullscreenElement === el ||
                (typeof el.getRootNode === 'function' && document.fullscreenElement === el.getRootNode().host)
            );
        };
        el.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            el.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, [viewerRef]);

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
                    <p className="text-sm text-gray-600 dark:text-gray-400">3D 모델 로딩 중...</p>
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
            <div
                ref={viewerRef}
                style={{ width: '100%', height: '100%', border: 'none' }}
                dangerouslySetInnerHTML={{
                    __html: `<model-viewer src="${src}" alt="${alt}" ar shadow-intensity="1" camera-controls auto-rotate touch-action="pan-y" style="width: 100%; height: 100%; border: none;"></model-viewer>`
                }}
            />
        </div>
    );
};

export default ModelViewer; 