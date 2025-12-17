'use client';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onNavigate && currentIndex !== undefined && currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onNavigate && currentIndex !== undefined && allImages && currentIndex < allImages.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

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
        <div className="relative w-full h-full flex items-center justify-center bg-black/90">
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain"
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
