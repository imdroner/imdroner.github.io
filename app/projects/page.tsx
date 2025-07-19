import { projects } from '@/data/projects';
import Link from 'next/link';

export default function ProjectsPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-10 text-center">포트폴리오</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projects/${project.id}`}
                        className="group block border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow bg-white dark:bg-neutral-900 hover:-translate-y-1 duration-200"
                        prefetch={false}
                    >
                        <div className="relative w-full h-48 overflow-hidden">
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute top-2 right-2 bg-white/80 dark:bg-neutral-800/80 text-xs px-2 py-0.5 rounded shadow">
                                {project.date}
                            </div>
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">{project.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{project.shortDesc}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags?.map((tag) => (
                                    <span key={tag} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded px-2 py-0.5 font-medium">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
} 