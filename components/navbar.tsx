'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { href: '/', label: '홈' },
    { href: '/projects', label: '포트폴리오' },
    { href: '/profile', label: '프로필' },
    { href: '/contact', label: '문의' },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="w-full bg-white/80 dark:bg-neutral-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-50 backdrop-blur">
            <div className="max-w-3xl mx-auto flex items-center px-4 h-14">
                <div className="flex gap-4 w-full justify-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-3 py-1 rounded font-medium transition-colors duration-150 ${pathname === item.href ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900'}`}
                            prefetch={false}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
} 