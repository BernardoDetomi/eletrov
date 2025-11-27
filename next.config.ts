import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              // Scripts permitidos
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "https://www.googletagmanager.com",
              "https://www.google-analytics.com",
              "https://tagmanager.google.com",
              "https://googleads.g.doubleclick.net",
              "https://www.googleadservices.com",
              "https://googletagmanager.com",
              "https://google-analytics.com",
              "https://*.google.com",
              "https://*.googlesyndication.com",
              "https://*.doubleclick.net",
              "https://*.google.com.br",
              
              // Conexões permitidas
              "; connect-src 'self'",
              "https://www.googletagmanager.com",
              "https://www.google-analytics.com",
              "https://tagmanager.google.com",
              "https://analytics.google.com",
              "https://stats.g.doubleclick.net",
              "https://www.googleadservices.com",
              "https://googleads.g.doubleclick.net",
              "https://*.google.com",
              "https://*.google-analytics.com",
              "https://*.analytics.google.com",
              "https://*.googletagmanager.com",
              "https://*.doubleclick.net",
              
              // Imagens permitidas
              "; img-src 'self' data: https: http:",
              "https://www.googletagmanager.com",
              "https://www.google-analytics.com",
              "https://ssl.gstatic.com",
              "https://www.gstatic.com",
              "https://googleads.g.doubleclick.net",
              "https://*.google.com",
              "https://*.doubleclick.net",
              
              // Frames permitidos
              "; frame-src 'self'",
              "https://www.googletagmanager.com",
              "https://td.doubleclick.net",
              "https://bid.g.doubleclick.net",
              
              // Estilos e fontes
              "; style-src 'self' 'unsafe-inline'",
              "https://www.googletagmanager.com",
              "https://tagmanager.google.com",
              "https://fonts.googleapis.com",
              
              "; font-src 'self' data:",
              "https://fonts.gstatic.com",
            ].join(" "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
