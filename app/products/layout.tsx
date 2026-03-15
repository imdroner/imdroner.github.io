import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: `드론 제품 | ${SITE_NAME}`,
  description: 'DJI 드론 및 전문 장비 라인업',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/products`,
    siteName: SITE_NAME,
    title: `드론 제품 | ${SITE_NAME}`,
    description: 'DJI 드론 및 전문 장비 라인업',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
