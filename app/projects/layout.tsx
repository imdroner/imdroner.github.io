import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: `포트폴리오 | ${SITE_NAME}`,
  description: '항공촬영·3D모델링·디지털트윈 프로젝트 사례',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: `${SITE_URL}/projects`,
    siteName: SITE_NAME,
    title: `포트폴리오 | ${SITE_NAME}`,
    description: '항공촬영·3D모델링·디지털트윈 프로젝트 사례',
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
