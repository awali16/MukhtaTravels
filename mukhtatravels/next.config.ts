import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'www.adaptivewfs.com',
      pathname: '**',
    },
    {
      protocol: 'https',
      hostname: 'img.icons8.com',
      pathname: '**',
    },],
  },
  devIndicators: false
};

export default nextConfig;