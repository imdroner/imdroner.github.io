'use client';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useSwipeable } from 'react-swipeable';
import { useState, useEffect } from 'react';

interface ImageModalProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
  allImages?: string[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

export default function ImageModal({ 
  src, 
  alt, 
  children,
  allImages,
  currentIndex,
  onNavigate 
}: ImageModalProps) {
  // 애니메이션 상태
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | null>(null);

  const handlePrevious = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (onNavigate && currentIndex !== undefined && currentIndex > 0) {
      setAnimationDirection('right');
      setIsAnimating(true);
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (onNavigate && currentIndex !== undefined && allImages && currentIndex < allImages.length - 1) {
      setAnimationDirection('left');
      setIsAnimating(true);
      onNavigate(currentIndex + 1);
    }
  };

  // 애니메이션 완료 후 상태 리셋
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setAnimationDirection(null);
      }, 300); // 애니메이션 지속 시간과 동일
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // 스와이프 제스처 핸들러
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    preventScrollOnSwipe: true,
    trackMouse: true, // 마우스 드래그도 지원
  });

  // currentIndex가 있으면 allImages에서 현재 이미지를 가져오고, 없으면 src 사용
  const currentImage = allImages && currentIndex !== undefined 
    ? allImages[currentIndex] 
    : src;
  
  // alt 텍스트도 동적으로 생성
  const currentAlt = allImages && currentIndex !== undefined
    ? `${alt.split(' - 이미지')[0]} - 이미지 ${currentIndex + 1}`
    : alt;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <button className="cursor-zoom-in transition-transform hover:scale-105 w-full h-full">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0">
        <VisuallyHidden>
          <DialogTitle>{currentAlt}</DialogTitle>
        </VisuallyHidden>
        <div 
          {...swipeHandlers}
          className="relative w-full h-full flex items-center justify-center bg-black/90"
        >
          <img
            key={currentIndex} // 키 변경으로 애니메이션 트리거
            src={currentImage}
            alt={currentAlt}
            className={`max-w-full max-h-[90vh] object-contain transition-all duration-100 ${
              isAnimating 
                ? animationDirection === 'left' 
                  ? 'opacity-0 -translate-x-10' 
                  : 'opacity-0 translate-x-10'
                : 'opacity-100 translate-x-0'
            }`}
          />
          
          {/* 네비게이션 버튼 */}
          {allImages && allImages.length > 1 && onNavigate && currentIndex !== undefined && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={handleNext}
                disabled={currentIndex === allImages.length - 1}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              
              {/* 이미지 카운터 */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {currentIndex + 1} / {allImages.length}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
