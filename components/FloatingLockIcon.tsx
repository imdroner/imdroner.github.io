'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FloatingLockIcon() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="fixed top-4 right-4 z-50 pointer-events-auto">
            <Button
                variant={pathname === '/protected' ? 'default' : 'outline'}
                size="icon"
                className={cn(
                    "rounded-full shadow-lg hover:shadow-xl transition-all duration-200",
                    pathname === '/protected' 
                        ? "bg-primary text-primary-foreground" 
                        : "text-foreground dark:text-white"
                )}
                asChild
            >
                <Link href="/protected" title="보호된 페이지" prefetch={false}>
                    <Lock className="h-4 w-4" />
                </Link>
            </Button>
        </div>
    );
}
