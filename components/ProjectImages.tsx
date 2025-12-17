'use client';

import { useState } from 'react';
import ImageModal from './ImageModal';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectImagesProps {
    images: string[];
    title: string;
}

export default function ProjectImages({ images, title }: ProjectImagesProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                        <ImageModal
                            src={image}
                            alt={`${title} - 이미지 ${index + 1}`}
                            allImages={images}
                            currentIndex={currentIndex}
                            onNavigate={setCurrentIndex}
                        >
                            <button 
                                className="w-full h-48 overflow-hidden cursor-zoom-in"
                                onClick={() => setCurrentIndex(index)}
                            >
                                <img
                                    src={image}
                                    alt={`${title} - 이미지 ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                    loading="lazy"
                                />
                            </button>
                        </ImageModal>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
