import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectImages from '@/components/ProjectImages';

interface Props {
    params: { id: string };
}

export function generateStaticParams() {
    return projects.map((project) => ({ id: project.id }));
}

export default function ProjectDetailPage({ params }: Props) {
    const project = projects.find((p) => p.id === params.id);
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
            {/* 추가 이미지 */}
            {project.images && project.images.length > 0 && (
                <ProjectImages
                    images={project.images}
                    title={project.title}
                />
            )}
            {/* 유튜브 영상 */}
            {project.video && (
                <div className="aspect-video mb-6">
                    <iframe
                        src={getYoutubeEmbedUrl(project.video)}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded"
                    ></iframe>
                </div>
            )}
        </main>
    );
} 