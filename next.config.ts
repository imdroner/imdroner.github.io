import type { NextConfig } from "next";

const repoName = 'imdroner.github.io'; // 본인 저장소명으로 수정

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : "",
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  images: { unoptimized: true },
};

export default nextConfig;
