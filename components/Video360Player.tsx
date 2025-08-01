'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Video360PlayerProps {
    videoUrl: string;
    title: string;
}

export default function Video360Player({ videoUrl, title }: Video360PlayerProps) {
    // 비디오 URL 유효성 검사
    if (!videoUrl || typeof videoUrl !== 'string' || videoUrl.trim() === '') {
        return (
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-neutral-800 mb-6 flex items-center justify-center">
                <div className="text-center">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-400">360도 비디오 URL이 제공되지 않았습니다.</p>
                </div>
            </div>
        );
    }

    const wrapperRef = useRef<HTMLDivElement>(null); // 전체 컨테이너 ref
    const containerRef = useRef<HTMLDivElement>(null); // Three.js 캔버스용 ref
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sphereRef = useRef<THREE.Mesh | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const isMouseDownRef = useRef(false);
    const mousePositionRef = useRef({ x: 0, y: 0 });
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [zoom, setZoom] = useState(75); // FOV 값 (줌 레벨)
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isVRMode, setIsVRMode] = useState(false);
    const [isVRSupported, setIsVRSupported] = useState(false);
    const isInitializedRef = useRef(false);
    const vrSessionRef = useRef<any>(null);

    // VR 지원 여부 확인
    useEffect(() => {
        const checkVRSupport = async () => {
            try {
                if ('xr' in navigator && navigator.xr) {
                    const supported = await navigator.xr.isSessionSupported('immersive-vr');
                    setIsVRSupported(!!supported);
                } else {
                    setIsVRSupported(false);
                }
            } catch (error) {
                console.log('VR 지원 확인 실패:', error);
                setIsVRSupported(false);
            }
        };

        checkVRSupport();
    }, []);

    useEffect(() => {
        if (!containerRef.current || isInitializedRef.current) return;

        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // Scene 생성
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera 생성 (줌 기능을 위해 FOV를 동적으로 조정)
        const camera = new THREE.PerspectiveCamera(zoom, width / height, 0.1, 1000);
        camera.position.set(0, 0, 0.1);
        cameraRef.current = camera;

        // Renderer 생성 (VR 지원을 위해 WebXR 활성화)
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        });

        try {
            renderer.setSize(width, height);
            renderer.setClearColor(0x000000);
            renderer.xr.enabled = true; // WebXR 활성화
            container.appendChild(renderer.domElement);
            rendererRef.current = renderer;
        } catch (error) {
            console.error('Three.js 렌더러 초기화 실패:', error);
            return;
        }

        // 비디오 요소 생성
        const video = document.createElement('video');
        video.crossOrigin = 'anonymous'; // CORS 설정
        video.loop = true;
        video.muted = isMuted;
        video.volume = volume;
        video.playsInline = true;
        video.preload = 'metadata'; // 메타데이터만 먼저 로드

        // 비디오 URL 설정 전 유효성 검사
        if (!videoUrl || typeof videoUrl !== 'string' || videoUrl.trim() === '') {
            console.error('유효하지 않은 비디오 URL:', videoUrl);
            return;
        }

        console.log('비디오 URL:', videoUrl);

        // 로컬 파일만 처리
        video.src = videoUrl;
        videoRef.current = video;

        // 비디오 로딩 상태 표시
        const loadingMessage = document.createElement('div');
        loadingMessage.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-blue-600 px-4 py-2 rounded';
        loadingMessage.innerHTML = `
            <div class="flex items-center gap-2">
                <svg class="animate-spin w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>360도 비디오 로딩 중...</span>
            </div>
        `;
        container.appendChild(loadingMessage);

        // 비디오 에러 처리 (더 자세한 에러 정보)
        video.addEventListener('error', (event) => {
            console.error('비디오 로드 에러:', event);
            console.error('비디오 URL:', videoUrl);
            console.error('비디오 에러 코드:', video.error?.code);
            console.error('비디오 에러 메시지:', video.error?.message);
            console.error('비디오 네트워크 상태:', video.networkState);
            console.error('비디오 준비 상태:', video.readyState);
            console.error('비디오 현재 시간:', video.currentTime);
            console.error('비디오 지속 시간:', video.duration);

            // 로딩 메시지 제거
            if (loadingMessage && loadingMessage.parentNode) {
                loadingMessage.parentNode.removeChild(loadingMessage);
            }

            let errorText = '비디오를 로드할 수 없습니다';
            let errorDetails = '파일이 존재하는지 확인해주세요';

            // 에러 코드에 따른 메시지
            if (video.error) {
                switch (video.error.code) {
                    case 1: // MEDIA_ERR_ABORTED
                        errorText = '비디오 로딩이 중단되었습니다';
                        errorDetails = '네트워크 연결을 확인해주세요';
                        break;
                    case 2: // MEDIA_ERR_NETWORK
                        errorText = '네트워크 에러가 발생했습니다';
                        errorDetails = '인터넷 연결을 확인해주세요';
                        break;
                    case 3: // MEDIA_ERR_DECODE
                        errorText = '비디오 파일을 재생할 수 없습니다';
                        errorDetails = '파일 형식이 지원되지 않습니다';
                        break;
                    case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
                        errorText = '지원되지 않는 비디오 형식입니다';
                        errorDetails = '다른 형식의 비디오를 사용해주세요';
                        break;
                    default:
                        errorText = '비디오 로드 중 에러가 발생했습니다';
                        errorDetails = 'URL을 확인해주세요';
                }
            }

            // 네트워크 상태에 따른 추가 정보
            if (video.networkState === 3) { // NETWORK_NO_SOURCE
                errorText = '비디오 소스를 찾을 수 없습니다';
                errorDetails = 'URL이 올바른지 확인해주세요';
            }

            const errorMessage = document.createElement('div');
            errorMessage.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-red-600 px-4 py-2 rounded max-w-md';
            errorMessage.innerHTML = `
                <div class="mb-2">
                    <svg class="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <p class="font-semibold">${errorText}</p>
                </div>
                <p class="text-sm opacity-90">URL: ${videoUrl}</p>
                <p class="text-xs opacity-75 mt-1">${errorDetails}</p>
                <p class="text-xs opacity-75 mt-1">에러 코드: ${video.error?.code || '알 수 없음'}</p>
            `;
            container.appendChild(errorMessage);
        });

        // 비디오 로드 진행률 표시
        video.addEventListener('loadstart', () => {
            console.log('비디오 로딩 시작');
        });

        video.addEventListener('progress', () => {
            if (video.buffered.length > 0) {
                const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                const duration = video.duration;
                if (duration > 0) {
                    const progress = (bufferedEnd / duration) * 100;
                    console.log(`비디오 로딩 진행률: ${progress.toFixed(1)}%`);
                }
            }
        });

        // 비디오 텍스처 생성
        const videoTexture = new THREE.VideoTexture(video);
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        videoTexture.format = THREE.RGBFormat;

        // 텍스처 유효성 검사
        if (!videoTexture.image) {
            console.error('비디오 텍스처 생성 실패');
            return;
        }

        // 구체 지오메트리 생성 (360도 영상을 위한 구면)
        const geometry = new THREE.SphereGeometry(500, 60, 40);
        geometry.scale(-1, 1, 1); // 텍스처를 안쪽으로 뒤집기

        // 구체 머티리얼 생성
        const material = new THREE.MeshBasicMaterial({ map: videoTexture });

        // 머티리얼 유효성 검사
        if (!material.map) {
            console.error('머티리얼 텍스처 생성 실패');
            return;
        }

        // 구체 메시 생성
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        sphereRef.current = sphere;

        // 마우스 이벤트 처리
        const handleMouseDown = (event: MouseEvent) => {
            if (isVRMode) return; // VR 모드에서는 마우스 조작 비활성화
            isMouseDownRef.current = true;
            mousePositionRef.current = { x: event.clientX, y: event.clientY };
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (!isMouseDownRef.current || isVRMode) return;

            const deltaX = event.clientX - mousePositionRef.current.x;
            const deltaY = event.clientY - mousePositionRef.current.y;

            // 카메라 회전 (360도 시점 조작)
            const rotationSpeed = 0.01;
            sphere.rotation.y -= deltaX * rotationSpeed;
            sphere.rotation.x -= deltaY * rotationSpeed;

            // 수직 회전 제한
            sphere.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, sphere.rotation.x));

            mousePositionRef.current = { x: event.clientX, y: event.clientY };
        };

        const handleMouseUp = () => {
            isMouseDownRef.current = false;
        };

        // 휠 이벤트로 줌 기능
        const handleWheel = (event: WheelEvent) => {
            if (isVRMode) return; // VR 모드에서는 줌 비활성화
            event.preventDefault();
            const zoomSpeed = 2;
            // 현재 카메라의 FOV 값을 직접 사용하여 클로저 문제 해결
            const currentFOV = cameraRef.current?.fov || 75;
            const newZoom = Math.max(30, Math.min(120, currentFOV + (event.deltaY > 0 ? zoomSpeed : -zoomSpeed)));
            setZoom(newZoom);

            if (cameraRef.current) {
                cameraRef.current.fov = newZoom;
                cameraRef.current.updateProjectionMatrix();
            }
        };

        // 이벤트 리스너 추가
        renderer.domElement.addEventListener('mousedown', handleMouseDown);
        renderer.domElement.addEventListener('mousemove', handleMouseMove);
        renderer.domElement.addEventListener('mouseup', handleMouseUp);
        renderer.domElement.addEventListener('mouseleave', handleMouseUp);
        renderer.domElement.addEventListener('wheel', handleWheel);

        // 렌더링 루프
        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            if (renderer && scene && camera && renderer.domElement) {
                try {
                    // WebGL 컨텍스트 상태 확인
                    const gl = renderer.getContext();
                    if (gl && !gl.isContextLost()) {
                        renderer.render(scene, camera);
                    } else {
                        console.warn('WebGL 컨텍스트가 손실되었습니다.');
                        cancelAnimationFrame(animationId);
                    }
                } catch (error) {
                    console.error('Three.js 렌더링 에러:', error);
                    cancelAnimationFrame(animationId);
                }
            }
        };

        // 비디오 로드 후 재생 시작
        video.addEventListener('loadeddata', () => {
            // 로딩 메시지 제거
            if (loadingMessage && loadingMessage.parentNode) {
                loadingMessage.parentNode.removeChild(loadingMessage);
            }

            // 비디오 유효성 검사
            if (video.readyState < 2) {
                console.error('비디오가 완전히 로드되지 않았습니다.');
                return;
            }

            video.play().then(() => {
                setIsPlaying(true);
                // 렌더링 시작 전 추가 검사
                if (renderer && scene && camera) {
                    animate();
                }
            }).catch((error) => {
                console.log('비디오 자동 재생 실패:', error);
                // 사용자 상호작용 후 재생 시도
                const playButton = document.createElement('button');
                playButton.textContent = '재생';
                playButton.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded';
                playButton.onclick = () => {
                    video.play().then(() => {
                        setIsPlaying(true);
                        if (renderer && scene && camera) {
                            animate();
                        }
                    });
                    playButton.remove();
                };
                container.appendChild(playButton);
            });
        });

        isInitializedRef.current = true;

        // 컴포넌트 언마운트 시 정리
        return () => {
            // VR 세션 종료
            if (vrSessionRef.current) {
                vrSessionRef.current.end();
                vrSessionRef.current = null;
            }

            // 애니메이션 루프 정지
            if (animationId) {
                cancelAnimationFrame(animationId);
            }

            // 비디오 정리
            if (video) {
                video.pause();
                video.removeEventListener('loadeddata', () => { });
                video.remove();
            }

            // 이벤트 리스너 제거
            if (renderer && renderer.domElement) {
                renderer.domElement.removeEventListener('mousedown', handleMouseDown);
                renderer.domElement.removeEventListener('mousemove', handleMouseMove);
                renderer.domElement.removeEventListener('mouseup', handleMouseUp);
                renderer.domElement.removeEventListener('mouseleave', handleMouseUp);
                renderer.domElement.removeEventListener('wheel', handleWheel);

                // DOM에서 제거
                if (container.contains(renderer.domElement)) {
                    container.removeChild(renderer.domElement);
                }
            }

            // Three.js 리소스 정리
            if (geometry) geometry.dispose();
            if (material) material.dispose();
            if (videoTexture) videoTexture.dispose();
            if (renderer) {
                renderer.dispose();
                renderer.forceContextLoss();
            }

            // 참조 정리
            sceneRef.current = null;
            cameraRef.current = null;
            rendererRef.current = null;
            sphereRef.current = null;
            videoRef.current = null;
            isInitializedRef.current = false;
        };
    }, [videoUrl, isVRMode]); // isVRMode 의존성 추가

    // 줌 변경 시 카메라 업데이트
    useEffect(() => {
        if (cameraRef.current && !isVRMode) {
            cameraRef.current.fov = zoom;
            cameraRef.current.updateProjectionMatrix();
        }
    }, [zoom, isVRMode]);

    // 전체화면 변경 시 렌더러 크기 업데이트
    useEffect(() => {
        if (rendererRef.current && cameraRef.current && containerRef.current) {
            const container = containerRef.current;
            const width = container.clientWidth;
            const height = container.clientHeight;

            rendererRef.current.setSize(width, height);
            if (!isVRMode) {
                cameraRef.current.aspect = width / height;
                cameraRef.current.updateProjectionMatrix();
            }
        }
    }, [isFullscreen, isVRMode]);

    // VR 모드 토글 함수
    const toggleVRMode = async () => {
        if (!isVRSupported) {
            alert('이 브라우저는 VR을 지원하지 않습니다.');
            return;
        }

        if (isVRMode) {
            // VR 모드 종료
            if (vrSessionRef.current) {
                try {
                    await vrSessionRef.current.end();
                } catch (error) {
                    console.log('VR 세션 종료 중 에러:', error);
                }
                vrSessionRef.current = null;
            }
            setIsVRMode(false);

            // 일반 렌더링 루프로 복귀
            if (rendererRef.current) {
                rendererRef.current.setAnimationLoop(null);
            }
        } else {
            // VR 모드 시작
            try {
                // navigator.xr이 존재하는지 확인
                if (!navigator.xr) {
                    throw new Error('WebXR API가 지원되지 않습니다.');
                }

                // 비디오 URL이 유효한지 확인
                if (!videoUrl || typeof videoUrl !== 'string' || videoUrl.trim() === '') {
                    throw new Error('유효하지 않은 비디오 URL입니다.');
                }

                const session = await navigator.xr.requestSession('immersive-vr', {
                    optionalFeatures: ['local-floor', 'bounded-floor']
                });

                if (session && rendererRef.current && sceneRef.current && cameraRef.current) {
                    vrSessionRef.current = session;
                    setIsVRMode(true);

                    // VR 렌더링 루프 설정
                    rendererRef.current.setAnimationLoop((time, frame) => {
                        if (frame && sceneRef.current && cameraRef.current && rendererRef.current) {
                            try {
                                rendererRef.current.render(sceneRef.current, cameraRef.current);
                            } catch (error) {
                                console.log('VR 렌더링 에러:', error);
                                // VR 렌더링 에러 시 VR 모드 종료
                                setIsVRMode(false);
                                if (rendererRef.current) {
                                    rendererRef.current.setAnimationLoop(null);
                                }
                            }
                        }
                    });

                    // VR 세션 종료 이벤트
                    session.addEventListener('end', () => {
                        setIsVRMode(false);
                        vrSessionRef.current = null;
                        if (rendererRef.current) {
                            rendererRef.current.setAnimationLoop(null);
                        }
                    });

                    // VR 세션 에러 이벤트
                    session.addEventListener('error', (event) => {
                        console.log('VR 세션 에러:', event);
                        setIsVRMode(false);
                        vrSessionRef.current = null;
                        if (rendererRef.current) {
                            rendererRef.current.setAnimationLoop(null);
                        }
                    });
                } else {
                    throw new Error('VR 세션 또는 렌더러가 초기화되지 않았습니다.');
                }
            } catch (error) {
                console.log('VR 세션 시작 실패:', error);
                alert('VR 모드 시작에 실패했습니다. 브라우저가 VR을 지원하는지 확인해주세요.');
                setIsVRMode(false);
            }
        }
    };

    // 전체화면 토글 함수
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            // 전체화면 진입
            wrapperRef.current?.requestFullscreen().then(() => {
                setIsFullscreen(true);
            }).catch((err) => {
                console.log('전체화면 진입 실패:', err);
            });
        } else {
            // 전체화면 종료
            document.exitFullscreen().then(() => {
                setIsFullscreen(false);
            }).catch((err) => {
                console.log('전체화면 종료 실패:', err);
            });
        }
    };

    // 전체화면 변경 이벤트 리스너
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    // 사운드 제어 함수들
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const handleVolumeChange = (newVolume: number) => {
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            setVolume(newVolume);
            if (newVolume > 0 && isMuted) {
                setIsMuted(false);
                videoRef.current.muted = false;
            }
        }
    };

    const handleZoomChange = (newZoom: number) => {
        if (!isVRMode) {
            setZoom(newZoom);
        }
    };

    return (
        <div ref={wrapperRef} className="w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-neutral-800 mb-6 relative">
            <div
                ref={containerRef}
                className="w-full h-full cursor-grab active:cursor-grabbing"
                style={{ minHeight: '400px' }}
            />

            {/* 컨트롤 패널 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                        {/* 재생/일시정지 버튼 */}
                        <button
                            onClick={togglePlay}
                            className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition"
                        >
                            {isPlaying ? (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>

                        {/* 음량 컨트롤 */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleMute}
                                className="w-6 h-6 flex items-center justify-center"
                            >
                                {isMuted || volume === 0 ? (
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.414 0zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.414 0zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={volume}
                                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                                className="w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        {/* 줌 컨트롤 (VR 모드에서는 비활성화) */}
                        {!isVRMode && (
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                                <input
                                    type="range"
                                    min="30"
                                    max="120"
                                    step="5"
                                    value={zoom}
                                    onChange={(e) => handleZoomChange(parseInt(e.target.value))}
                                    className="w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        )}

                        {/* VR 모드 버튼 */}
                        {isVRSupported && (
                            <button
                                onClick={toggleVRMode}
                                className={`w-8 h-8 flex items-center justify-center rounded-full transition ${isVRMode
                                    ? 'bg-red-600 hover:bg-red-700'
                                    : 'bg-white/20 hover:bg-white/30'
                                    }`}
                                title={isVRMode ? 'VR 모드 종료' : 'VR 모드 시작'}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                                </svg>
                            </button>
                        )}

                        {/* 전체화면 버튼 */}
                        <button
                            onClick={toggleFullscreen}
                            className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition"
                        >
                            {isFullscreen ? (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="text-xs opacity-75">
                        {isVRMode ? 'VR 모드' : `줌: ${zoom}°`}
                    </div>
                </div>
            </div>

            <div className="p-4 bg-white dark:bg-neutral-900">
                <h3 className="text-lg font-semibold mb-2">{title} - 360° 비디오</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    마우스로 드래그하여 360도 시점을 조작하고, 마우스 휠로 줌인/줌아웃할 수 있습니다.
                    {isVRSupported && ' VR 헤드셋이 있다면 VR 모드로 몰입감 있는 경험을 즐겨보세요.'}
                </p>
            </div>
        </div>
    );
} 