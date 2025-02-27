import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // rewrite
  async rewrites() {
    return [
      {
        source: "/api/:post",
        destination: "https://jsonplaceholder.typicode.com/:posts",
      },
    ];
  },
};

export default nextConfig;
