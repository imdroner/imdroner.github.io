'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';
import { Camera, Building2, Zap, Radio, Shield, Sprout, Fuel, Film } from 'lucide-react';

const navItems = [
    { href: '/', label: '홈' },
    { href: '/about', label: '소개' },
    { href: '/projects', label: '포트폴리오' },
    { href: '/products', label: '제품 구매' },
    // { href: '/team', label: '팀' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: '문의' },
];

const iconMap: Record<string, any> = {
    Camera,
    Building2,
    Zap,
    Radio,
    Shield,
    Sprout,
    Fuel,
    Film,
};

export default function Navbar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isActive = (href: string) => pathname === href;
    const isServiceActive = pathname.startsWith('/services');

    if (!mounted) {
        return (
            <nav className="w-full bg-white dark:bg-black shadow-sm sticky top-0 z-50 backdrop-blur">
                <div className="max-w-7xl mx-auto flex items-center justify-center px-4 h-16">
                    <NavigationMenu>
                        <NavigationMenuList>
                        {navItems.slice(0, 2).map((item) => (
                            <NavigationMenuItem key={item.href}>
                                <NavigationMenuLink asChild>
                                    <Link href={item.href} className={cn(navigationMenuTriggerStyle(), "text-gray-900 dark:text-white")}>
                                        {item.label}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-900 dark:text-white">서비스</NavigationMenuTrigger>
                            </NavigationMenuItem>
                            {navItems.slice(2).map((item) => (
                                <NavigationMenuItem key={item.href}>
                                    <NavigationMenuLink asChild>
                                        <Link href={item.href} className={cn(navigationMenuTriggerStyle(), "text-gray-900 dark:text-white")}>
                                            {item.label}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </nav>
        );
    }

    return (
        <nav className="w-full bg-white dark:bg-black shadow-sm sticky top-0 z-50 backdrop-blur">
            <div className="max-w-7xl mx-auto flex items-center justify-center px-4 h-16">
                <NavigationMenu>
                    <NavigationMenuList>
                        {/* 홈, 소개 */}
                        {navItems.slice(0, 2).map((item) => (
                            <NavigationMenuItem key={item.href}>
                                <NavigationMenuLink asChild>
                                    <Link 
                                        href={item.href}
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "text-gray-900 dark:text-white",
                                            isActive(item.href) && "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}

                        {/* 서비스 드롭다운 */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger 
                                className={cn(
                                    "text-gray-900 dark:text-white",
                                    isServiceActive && "bg-blue-600 text-white hover:bg-blue-700 data-[state=open]:bg-blue-600 dark:bg-blue-500"
                                )}
                            >
                                서비스
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white dark:bg-black text-gray-900 dark:text-white">
                                    {services.map((service) => {
                                        const Icon = iconMap[service.icon];
                                        return (
                                            <li key={service.id}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={service.link}
                                                        className={cn(
                                                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200",
                                                            "hover:bg-blue-50 hover:shadow-sm dark:hover:bg-blue-950/50",
                                                            "focus:bg-blue-50 focus:shadow-sm dark:focus:bg-blue-950/50",
                                                            pathname === service.link && "bg-blue-100 shadow-md dark:bg-blue-900/70"
                                                        )}
                                                    >
                                                        <div className="flex items-center gap-2 mb-2">
                                                            {Icon && <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                                                            <div className="text-sm font-medium leading-none text-gray-900 dark:text-white">
                                                                {service.title}
                                                            </div>
                                                        </div>
                                                        <p className="line-clamp-2 text-xs leading-snug text-gray-600 dark:text-gray-300">
                                                            {service.description}
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* 포트폴리오, 프로필, 문의 */}
                        {navItems.slice(2).map((item) => (
                            <NavigationMenuItem key={item.href}>
                                <NavigationMenuLink asChild>
                                    <Link 
                                        href={item.href}
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "text-gray-900 dark:text-white",
                                            isActive(item.href) && "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
}
