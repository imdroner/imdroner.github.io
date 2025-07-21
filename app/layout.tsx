import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { generalData } from "@/data/general";
import Navbar from "@/components/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${generalData.name} | ${generalData.jobTitle}`,
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
        <Script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
          strategy="beforeInteractive"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-100 dark:bg-neutral-900`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
