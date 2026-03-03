import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '드론 제품 | 아이엠드론',
  description: 'DJI 드론 및 전문 장비 라인업',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://imdrone.site/products',
    siteName: '아이엠드론',
    title: '드론 제품 | 아이엠드론',
    description: 'DJI 드론 및 전문 장비 라인업',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
