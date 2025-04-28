import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['www.adaptivewfs.com'],
  },
};

export default withFlowbiteReact(nextConfig);