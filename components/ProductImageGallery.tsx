'use client';

import { useState } from 'react';
import { Package } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // 이미지가 없을 경우 플레이스홀더
  const displayImages = images.length > 0 ? images : [''];

  // 모든 썸네일을 고정 크기로 설정 (한 화면에 4개가 보이도록)
  const thumbnailBasis = 'basis-1/5';

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-white rounded-lg overflow-hidden border">
        {displayImages[selectedImageIndex] ? (
          <img
            src={displayImages[selectedImageIndex]}
            alt={`${productName} - Image ${selectedImageIndex + 1}`}
            className="w-full h-full object-contain p-8"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package className="h-32 w-32 text-muted-foreground/30" />
          </div>
        )}
      </div>

      {/* Thumbnail Carousel */}
      {displayImages.length > 1 && (
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {displayImages.map((image, index) => (
              <CarouselItem key={index} className={cn(thumbnailBasis, "pl-1")}>
                <div className="p-1">
                  <button
                    onClick={() => setSelectedImageIndex(index)}
                    className={cn(
                      "aspect-square rounded-lg overflow-hidden border-2 transition-all hover:border-primary/50 w-full",
                      selectedImageIndex === index
                        ? "border-blue-500 ring-2 ring-blue-700/20"
                        : "border-border"
                    )}
                  >
                    {image ? (
                      <img
                        src={image}
                        alt={`${productName} thumbnail ${index + 1}`}
                        className="w-full h-full object-contain p-2 bg-white"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-white">
                        <Package className="h-8 w-8 text-muted-foreground/30" />
                      </div>
                    )}
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </div>
  );
}

