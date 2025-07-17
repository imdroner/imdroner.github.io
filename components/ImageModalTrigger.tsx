'use client';
import React, { useState } from 'react';
import ImageModal from './ImageModal';

interface Props {
    thumbnail: string;
    images?: string[];
    children: React.ReactNode;
}

export default function ImageModalTrigger({ thumbnail, images, children }: Props) {
    const [modalImg, setModalImg] = useState<string | null>(null);

    // children(썸네일)과 images(추가 이미지) 모두 클릭 시 모달 오픈
    return (
        <div>
            <div onClick={() => setModalImg(thumbnail)} style={{ cursor: 'pointer' }}>
                {children}
            </div>
            {images && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 mt-0">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="aspect-video rounded overflow-hidden bg-gray-100 dark:bg-neutral-800 cursor-pointer"
                            onClick={() => setModalImg(img)}
                        >
                            <img
                                src={img}
                                alt={`프로젝트 이미지 ${idx + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}
            <ImageModal img={modalImg} onClose={() => setModalImg(null)} />
        </div>
    );
} 