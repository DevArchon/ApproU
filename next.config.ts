import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Optimize for production
  poweredByHeader: false,
  compress: true,
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
