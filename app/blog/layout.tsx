import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '드론 인사이트 | 아이엠드론',
  description: '드론 기술·법규·현장 사례 전문 블로그',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://imdrone.site/blog',
    siteName: '아이엠드론',
    title: '드론 인사이트 | 아이엠드론',
    description: '드론 기술·법규·현장 사례 전문 블로그',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
