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
    const viewerRef = useRef<any>(null);

    useEffect(() => {
        setIsMounted(true);
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

    if (!isMounted) return null;

    const ModelViewerTag = 'model-viewer' as any;

    return (
        <div className="w-full h-full relative">
            {!isFullscreen && (
                <button
                    type="button"
                    onClick={handleFullscreen}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/80 text-white rounded hover:bg-black/90"
                    title="전체화면"
                    style={{ fontSize: 0 }}
                >
                    <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 32, color: 'white', lineHeight: 1 }}
                        aria-hidden="true"
                    >
                        fullscreen
                    </span>
                </button>
            )}
            {isFullscreen && (
                <button
                    type="button"
                    onClick={handleExitFullscreen}
                    className="fixed top-4 right-4 z-[10000] p-2 bg-black text-white rounded opacity-80 hover:opacity-100 transition-colors"
                    title="전체화면 닫기"
                    style={{ fontSize: 0 }}
                >
                    <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 32, color: 'white', lineHeight: 1 }}
                        aria-hidden="true"
                    >
                        close
                    </span>
                </button>
            )}
            <ModelViewerTag
                ref={viewerRef}
                src={src}
                alt={alt}
                ar
                shadow-intensity="1"
                camera-controls
                auto-rotate
                touch-action="pan-y"
                style={{ width: '100%', height: '100%', border: 'none' }}
                {...props}
            ></ModelViewerTag>
        </div>
    );
};

export default ModelViewer; 