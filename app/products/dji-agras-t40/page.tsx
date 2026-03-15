'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// 존재하지 않는 제품 → 제품 목록으로 리다이렉트
export default function RedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/products');
  }, []);
  return null;
}
