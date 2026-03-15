import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  // basePath/assetPrefix 불필요: imdroner.github.io는 user pages 저장소이므로
  // 커스텀 도메인(imdrone.site)과 함께 루트(/)에서 서빙됨
  images: { unoptimized: true },
};

export default nextConfig;
