'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// 구버전 슬러그 dji-matrice-30t → dji-matrice-30t-combo 리다이렉트
export default function RedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/products/dji-matrice-30t-combo');
  }, []);
  return null;
}
