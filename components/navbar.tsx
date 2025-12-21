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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';
import { Camera, Building2, Zap, Radio, Shield, Sprout, Fuel, Film, Menu, ChevronDown, X } from 'lucide-react';
import { useIsMobile } from '@/app/hooks/use-mobile';

const navItems = [
    { href: '/', label: '홈' },
    { href: '/about', label: '소개' },
    // 서비스는 드롭다운으로 별도 처리
    { href: '/projects', label: '포트폴리오' },
    { href: '/products', label: '제품' },
    { href: '/blog', label: '뉴스' },
    { href: '/contact', label: '문의' },
    { href: '/faq', label: 'FAQ' },
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
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        setMounted(true);
    }, []);

    const isActive = (href: string) => {
        // 하위 경로를 포함하는 페이지들
        if (href === '/blog' || href === '/projects' || href === '/products') {
            return pathname.startsWith(href);
        }
        return pathname === href;
    };
    const isServiceActive = pathname.startsWith('/services');

    if (!mounted) {
        return (
            <nav className="w-full bg-white dark:bg-black shadow-sm sticky top-0 z-50 backdrop-blur">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
                    <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                        아이엠드론
                    </Link>
                </div>
            </nav>
        );
    }

    // 모바일 메뉴
    if (isMobile) {
        return (
            <nav className="w-full bg-white dark:bg-black shadow-sm sticky top-0 z-50 backdrop-blur">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
                    <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                        아이엠드론
                    </Link>
                    <Drawer open={isOpen} onOpenChange={setIsOpen} >
                        <DrawerTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent className="max-h-[85vh] bg-white dark:bg-black">
                            <DrawerHeader className="flex items-center justify-between">
                                <DrawerTitle className="text-gray-900 dark:text-white">메뉴</DrawerTitle>
                                <DrawerClose asChild>
                                    <Button variant="ghost" size="icon">
                                        <X className="h-4 w-4 text-gray-900 dark:text-white" />
                                    </Button>
                                </DrawerClose>
                            </DrawerHeader>

                            <Separator className="my-2 bg-gray-100 dark:bg-gray-800" />

                            <div className="overflow-y-auto px-4 pb-8">
                                <div className="flex flex-col gap-2">
                                    {/* 홈, 소개 */}
                                    {navItems.slice(0, 2).map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                                                isActive(item.href)
                                                    ? "bg-blue-600 text-white"
                                                    : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}

                                    {/* 서비스 */}
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                            className={cn(
                                                "w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors",
                                                isServiceActive
                                                    ? "bg-blue-600 text-white"
                                                    : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                            )}
                                        >
                                            서비스
                                            <ChevronDown className={cn(
                                                "h-4 w-4 transition-transform duration-200",
                                                servicesOpen && "rotate-180"
                                            )} />
                                        </button>
                                        {servicesOpen && (
                                            <div className="ml-2 flex flex-col gap-1 border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                                                {services.map((service) => {
                                                    const Icon = iconMap[service.icon];
                                                    return (
                                                        <Link
                                                            key={service.id}
                                                            href={service.link}
                                                            onClick={() => setIsOpen(false)}
                                                            className={cn(
                                                                "flex items-start gap-3 px-3 py-2.5 rounded-md transition-colors",
                                                                pathname === service.link
                                                                    ? "bg-blue-100 dark:bg-blue-900/70"
                                                                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                                            )}
                                                        >
                                                            {Icon && <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />}
                                                            <div className="flex-1 min-w-0">
                                                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                                    {service.title}
                                                                </div>
                                                                {/* <div className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mt-0.5">
                                                                    {service.description}
                                                                </div> */}
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        )}
                                        {servicesOpen && <Separator className="my-2" />}
                                        
                                    </div>

                                    

                                    {/* 포트폴리오, 제품, 뉴스, 문의, FAQ */}
                                    {navItems.slice(2).map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                                                isActive(item.href)
                                                    ? "bg-blue-600 text-white"
                                                    : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </nav>
        );
    }

    // 데스크톱 메뉴
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

                        {/* 포트폴리오, 제품, 뉴스, 문의, FAQ */}
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
