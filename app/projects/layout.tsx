import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '포트폴리오 | 아이엠드론',
  description: '항공촬영·3D모델링·디지털트윈 프로젝트 사례',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://imdrone.site/projects',
    siteName: '아이엠드론',
    title: '포트폴리오 | 아이엠드론',
    description: '항공촬영·3D모델링·디지털트윈 프로젝트 사례',
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
