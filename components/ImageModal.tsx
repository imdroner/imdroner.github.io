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
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-0"
            onClick={onClose}
        >
            <button
                className="absolute top-6 right-6 z-50 text-white text-3xl bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition"
                onClick={e => { e.stopPropagation(); onClose(); }}
                aria-label="닫기"
            >
                &times;
            </button>
            <img
                src={img}
                alt="확대 이미지"
                className="max-w-full max-h-[90vh] rounded shadow-lg object-contain bg-black"
                onClick={e => e.stopPropagation()}
            />
        </div>
    );
} 