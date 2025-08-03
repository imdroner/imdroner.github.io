import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectImages from '@/components/ProjectImages';
import Video360Player from '@/components/Video360Player';
import ModelViewer from '@/components/ModelViewer';

export function generateStaticParams() {
    return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);
    if (!project) return notFound();

    // 유튜브 embed 주소 변환
    const getYoutubeEmbedUrl = (url?: string) => {
        if (!url) return '';
        if (url.includes('youtu.be/')) {
            return url.replace('youtu.be/', 'www.youtube.com/embed/');
        }
        if (url.includes('watch?v=')) {
            return url.replace('watch?v=', 'embed/');
        }
        return url;
    };

    return (
        <main className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <div className="text-sm text-gray-400 mb-4">{project.date}</div>

            {/* 썸네일 */}
            <div className="w-full aspect-video rounded overflow-hidden mb-6 bg-gray-100 dark:bg-neutral-800">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <p className="mb-4 text-gray-100 dark:text-gray-200">{project.detailDesc}</p>

            {/* 태그 */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags?.map((tag) => (
                    <span key={tag} className="text-xs bg-transparent text-blue-700 dark:text-blue-200 rounded px-2 py-0.5 border border-blue-200 dark:border-blue-700">#{tag}</span>
                ))}
            </div>

            {/* 추가 이미지 (클라이언트 컴포넌트) */}
            {project.images && project.images.length > 0 && (
                <div className="mb-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">프로젝트 이미지</h3>
                    <ProjectImages
                        images={project.images}
                        title={project.title}
                    />
                </div>
            )}

            {/* 유튜브 영상 */}
            {project.video && (
                <div className="mb-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">프로젝트 영상</h3>
                    <div className="aspect-video">
                        <iframe
                            src={getYoutubeEmbedUrl(project.video)}
                            title={project.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded"
                        ></iframe>
                    </div>
                </div>
            )}

            {/* 3D 모델 뷰어 */}
            {project.model && (
                <div className="mb-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">3D 모델 뷰어</h3>
                    <div className="aspect-video">
                        <ModelViewer
                            src={project.model}
                            alt={project.title}
                            className="w-full h-full rounded"
                        />
                    </div>
                </div>
            )}

            {/* 360 비디오 */}
            {project.video360 && (
                <div className="mb-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">360° VR 영상</h3>
                    <Video360Player
                        videoUrl={project.video360}
                        title={project.title}
                    />
                </div>
            )}
        </main>
    );
} 