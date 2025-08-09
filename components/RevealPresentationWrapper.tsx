'use client';

import dynamic from 'next/dynamic';

// Reveal.js 컴포넌트를 동적으로 로드
const RevealPresentation = dynamic(() => import('@/components/RevealPresentation'), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center h-96">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
    )
});

interface RevealPresentationWrapperProps {
    presentationId: string;
}

export default function RevealPresentationWrapper({ presentationId }: RevealPresentationWrapperProps) {
    return <RevealPresentation presentationId={presentationId} />;
}
