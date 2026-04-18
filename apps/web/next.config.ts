import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["ui"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

