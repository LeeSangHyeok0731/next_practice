import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // rewrite
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://jsonplaceholder.typicode.com/:path*",
      },
    ];
  },
};

export default nextConfig;
