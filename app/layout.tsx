import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { generalData } from "@/data/general";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${generalData.name}l ${generalData.jobTitle}`,
  description: `${generalData.about}`,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://imdrone.site",
    siteName: `${generalData.name}`,
    title: generalData.about,
    description: generalData.about,
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-100 dark:bg-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
