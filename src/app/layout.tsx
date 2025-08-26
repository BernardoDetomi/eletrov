import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PageLoader from "@/components/page-loader";
import MobileOptimizer from "@/components/mobile-optimizer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EletroV",
  description: "O site está quase pronto. Em breve estará disponível.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MobileOptimizer />
        <PageLoader duration={2.5}>
          {children}
        </PageLoader>
      </body>
    </html>
  );
}
