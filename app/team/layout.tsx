import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '팀 소개 | 아이엠드론',
  description: '아이엠드론을 이끌어가는 전문가들',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://imdrone.site/team',
    siteName: '아이엠드론',
    title: '팀 소개 | 아이엠드론',
    description: '아이엠드론을 이끌어가는 전문가들',
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
