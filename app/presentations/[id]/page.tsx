import { notFound } from 'next/navigation';
import { getPresentationById, presentations } from '@/data/presentations';

interface PageProps {
    params: Promise<{ id: string }>;
}

// 정적 사이트 생성을 위한 경로 생성
export async function generateStaticParams() {
    return presentations.map((presentation) => ({
        id: presentation.id,
    }));
}

// 메타데이터 생성
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const presentation = getPresentationById(id);

    if (!presentation) {
        return {
            title: '프리젠테이션을 찾을 수 없습니다',
        };
    }

    return {
        title: `${presentation.title} - 프리젠테이션`,
        description: presentation.description,
    };
}

export default async function PresentationPage({ params }: PageProps) {
    const { id } = await params;
    const presentation = getPresentationById(id);

    if (!presentation) {
        notFound();
    }

    // 프리젠테이션 HTML 파일의 경로
    const presentationPath = `/slides/${id}.html`;

    // 난이도에 따른 색상 클래스
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'beginner':
                return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200';
            case 'intermediate':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200';
            case 'advanced':
                return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-200';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    {/* 프리젠테이션 정보 섹션 */}
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div className="flex-1">
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {presentation.title}
                                </h1>
                                <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                                    {presentation.description}
                                </p>

                                {/* 메타데이터 */}
                                <div className="flex flex-wrap gap-4 items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">카테고리:</span>
                                        <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200 rounded-md text-sm">
                                            {presentation.category}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">난이도:</span>
                                        <span className={`px-2 py-1 rounded-md text-sm font-medium ${getDifficultyColor(presentation.difficulty)}`}>
                                            {presentation.difficulty === 'beginner' ? '초급' :
                                                presentation.difficulty === 'intermediate' ? '중급' : '고급'}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">소요시간:</span>
                                        <span className="text-sm text-gray-700 dark:text-gray-300">
                                            {presentation.duration}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">슬라이드:</span>
                                        <span className="text-sm text-gray-700 dark:text-gray-300">
                                            {presentation.slides}개
                                        </span>
                                    </div>
                                </div>

                                {/* 태그 */}
                                {presentation.tags.length > 0 && (
                                    <div className="mt-4">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-2">태그:</span>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {presentation.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-md text-xs"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* 프리젠테이션 뷰어 */}
                    <div className="relative" style={{ height: '80vh' }}>
                        <iframe
                            src={presentationPath}
                            className="w-full h-full border-0"
                            title={presentation.title}
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
