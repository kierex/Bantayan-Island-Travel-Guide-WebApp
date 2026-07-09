import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
  // Ensure TypeScript errors fail the build
  typescript: {
    ignoreBuildErrors: false,
  },
  // Ensure ESLint errors fail the build
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
