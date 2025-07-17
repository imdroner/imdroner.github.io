'use client';

import React from 'react';

interface ImageModalProps {
    img: string | null;
    onClose: () => void;
}

export default function ImageModal({ img, onClose }: ImageModalProps) {
    if (!img) return null;
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={onClose}
        >
            <img
                src={img}
                alt="확대 이미지"
                className="max-w-3xl max-h-[90vh] rounded shadow-lg border-4 border-white"
                onClick={e => e.stopPropagation()}
            />
        </div>
    );
} 