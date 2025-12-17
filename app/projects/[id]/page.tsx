import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectImages from '@/components/ProjectImages';
import Video360Player from '@/components/Video360Player';
import ModelViewer from '@/components/ModelViewer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Image, Video, Box, Glasses } from 'lucide-react';

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
            {/* 헤더 */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <Badge variant="outline">{project.date}</Badge>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.detailDesc}
                </p>
            </div>

            {/* 태그 */}
            <div className="flex flex-wrap gap-2 mb-8">
                {project.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary">
                        #{tag}
                    </Badge>
                ))}
            </div>

            <Separator className="my-8" />

            {/* 썸네일 */}
            <Card className="mb-8 overflow-hidden">
                <div className="w-full aspect-video bg-muted">
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </Card>

            {/* 추가 이미지 */}
            {project.images && project.images.length > 0 && (
                <>
                    <Separator className="my-8" />
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Image className="h-5 w-5 text-primary" />
                                프로젝트 이미지
                            </CardTitle>
                            <CardDescription>
                                총 {project.images.length}개의 이미지
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ProjectImages
                                images={project.images}
                                title={project.title}
                            />
                        </CardContent>
                    </Card>
                </>
            )}

            {/* 유튜브 영상 */}
            {project.video && (
                <>
                    <Separator className="my-8" />
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Video className="h-5 w-5 text-primary" />
                                프로젝트 영상
                            </CardTitle>
                            <CardDescription>
                                유튜브 영상으로 프로젝트를 자세히 확인하세요
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video rounded-lg overflow-hidden bg-black">
                                <iframe
                                    src={getYoutubeEmbedUrl(project.video)}
                                    title={project.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                </>
            )}

            {/* 3D 모델 뷰어 */}
            {project.model && (
                <>
                    <Separator className="my-8" />
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Box className="h-5 w-5 text-primary" />
                                3D 모델 뷰어
                            </CardTitle>
                            <CardDescription>
                                마우스로 드래그하여 3D 모델을 회전하고 확대/축소할 수 있습니다
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                                <ModelViewer
                                    src={project.model}
                                    alt={project.title}
                                    className="w-full h-full"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </>
            )}

            {/* 360° VR 영상 */}
            {project.video360 && (
                <>
                    <Separator className="my-8" />
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Glasses className="h-5 w-5 text-primary" />
                                360° VR 영상
                            </CardTitle>
                            <CardDescription>
                                360도 파노라마 영상으로 현장을 생생하게 체험하세요
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video rounded-lg overflow-hidden bg-black">
                                <iframe
                                    src={getYoutubeEmbedUrl(project.video360)}
                                    title={`${project.title} - 360° VR`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                </>
            )}
        </main>
    );
}
