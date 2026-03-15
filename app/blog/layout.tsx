import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: `드론 인사이트 | ${SITE_NAME}`,
  description: '드론 기술·법규·현장 사례 전문 블로그',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    title: `드론 인사이트 | ${SITE_NAME}`,
    description: '드론 기술·법규·현장 사례 전문 블로그',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
