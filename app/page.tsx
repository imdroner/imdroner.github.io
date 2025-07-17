import { generalData } from '@/data/general';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <img
        src={generalData.avatar}
        alt={generalData.name}
        className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg"
      />
      <h1 className="text-3xl font-bold mb-2">{generalData.name}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{generalData.jobTitle} / {generalData.position}</p>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
        {generalData.about.split('.')[0]}.
      </p>
      <div className="flex gap-4">
        <Link href="/projects" className="px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">프로젝트</Link>
        <Link href="/profile" className="px-5 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition">프로필</Link>
        <Link href="/contact" className="px-5 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition">문의</Link>
      </div>
    </main>
  );
}
