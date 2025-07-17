'use client';
import React, { useState } from 'react';
import ImageModal from '@/components/ImageModal';

export default function ProjectImages({
    thumbnail,
    images,
    title,
}: {
    thumbnail?: string;
    images?: string[];
    title: string;
}) {
    const [modalImg, setModalImg] = useState<string | null>(null);

    return (
        <>
            {thumbnail && (
                <div className="w-full aspect-video rounded overflow-hidden mb-6 bg-gray-100 dark:bg-neutral-800">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => setModalImg(thumbnail)}
                    />
                </div>
            )}
            {images && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="aspect-video rounded overflow-hidden bg-gray-100 dark:bg-neutral-800 cursor-pointer"
                            onClick={() => setModalImg(img)}
                        >
                            <img
                                src={img}
                                alt={title + ' image ' + (idx + 1)}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}
            <ImageModal img={modalImg} onClose={() => setModalImg(null)} />
        </>
    );
}
