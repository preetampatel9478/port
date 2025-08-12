import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // enables static export in Next.js 13+
  images: {
    unoptimized: true, // prevents image optimization issues on static hosting
  },
  basePath: '/port', // repository name for GitHub Pages
  assetPrefix: '/port/', // same here
};

export default nextConfig;
