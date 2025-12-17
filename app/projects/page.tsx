import { projects } from '@/data/projects';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ProjectsPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-10 text-center">포트폴리오</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projects/${project.id}`}
                        prefetch={false}
                        className="group"
                    >
                        <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div className="relative w-full h-48 overflow-hidden">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {project.date && (
                                    <div className="absolute top-2 right-2">
                                        <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
                                            {project.date}
                                        </Badge>
                                    </div>
                                )}
                            </div>
                            <CardHeader>
                                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-2">
                                    {project.shortDesc}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags?.map((tag) => (
                                        <Badge key={tag} variant="outline">
                                            #{tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </main>
    );
}
