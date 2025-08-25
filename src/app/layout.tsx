import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PageLoader from "@/components/page-loader";
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageLoader duration={2.5}>
          {children}
        </PageLoader>
      </body>
    </html>
  );
}
