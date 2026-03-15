import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: `팀 소개 | ${SITE_NAME}`,
  description: '아이엠드론을 이끌어가는 전문가들',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/team`,
    siteName: SITE_NAME,
    title: `팀 소개 | ${SITE_NAME}`,
    description: '아이엠드론을 이끌어가는 전문가들',
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
