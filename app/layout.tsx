import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { generalData } from "@/data/general";
import Navbar from "@/components/navbar";
import FloatingLockIcon from "@/components/FloatingLockIcon";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${generalData.jobTitle}`,
  description: `${generalData.about}`,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://imdrone.site",
    siteName: `${generalData.name}`,
    title: `${generalData.name} | ${generalData.jobTitle}`,
    description: generalData.about,
    images: [
      {
        url: "https://imdrone.site/images/og-image.jpg", // 실제 존재하는 대표 이미지 경로로 수정
        width: 1024,
        height: 683,
        alt: `${generalData.name} - ${generalData.jobTitle}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer@^3.4.0/dist/model-viewer.min.js"
          crossOrigin="anonymous"
        ></script>
        <script
          noModule
          src="https://unpkg.com/@google/model-viewer@^3.4.0/dist/model-viewer-legacy.js"
          crossOrigin="anonymous"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // model-viewer 설정 및 텍스처 로딩 문제 해결
              window.addEventListener('load', function() {
                if (customElements.get('model-viewer')) {
                  console.log('model-viewer loaded successfully');
                  
                  // 텍스처 로딩 오류 처리
                  const originalConsoleError = console.error;
                  console.error = function(...args) {
                    const message = args[0];
                    if (typeof message === 'string' && message.includes('THREE.GLTFLoader: Couldn\\'t load texture')) {
                      console.warn('텍스처 로딩 오류 무시됨:', message);
                      return;
                    }
                    return originalConsoleError.apply(console, args);
                  };
                } else {
                  console.warn('model-viewer not loaded');
                }
              });
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-100 dark:bg-neutral-900`}
      >
        <Navbar />
        {/* <FloatingLockIcon /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
