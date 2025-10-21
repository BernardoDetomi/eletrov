import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://tagmanager.google.com; connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://tagmanager.google.com; img-src 'self' data: https: http:; style-src 'self' 'unsafe-inline'; font-src 'self' data:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
