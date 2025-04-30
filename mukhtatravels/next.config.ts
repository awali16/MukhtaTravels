import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'www.adaptivewfs.com',
      pathname: '**', // allow all images from this domain
    }],
  },
};

export default nextConfig;