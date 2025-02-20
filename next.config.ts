import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // rewrite
  async rewrites() {
    return [
      {
        source: "/api/post",
        destination: "/https://jsonplaceholder.typicode.com",
      },
    ];
  },
  // redirect
  async redirects() {
    return [
      {
        source: "/api",
        destination: "/guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
