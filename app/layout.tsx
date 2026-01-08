import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MatrixBackground from "./components/MatrixBackground";
import CyberBackground from "./components/CyberBackground";
import TitleAnimation from "./components/TitleAnimation";
import CustomCursor from "./components/CustomCursor";
import CustomContextMenu from "./components/CustomContextMenu";
import ServiceWorkerRegister from "./components/ServiceWorkerRegister";
import StylesheetLoader from "./components/StylesheetLoader";
import dynamic from "next/dynamic";

// Lazy load heavy animation components
const MatrixBackgroundDynamic = dynamic(() => import("./components/MatrixBackground"), {
  ssr: false,
  loading: () => null,
});

const CyberBackgroundDynamic = dynamic(() => import("./components/CyberBackground"), {
  ssr: false,
  loading: () => null,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Kavindu - Cyber Security Portfolio",
  description: "Cyber Security Portfolio of Kavindu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <TitleAnimation />
        <div className="cyber-overlay"></div>
        <div className="matrix-pattern"></div>
        <MatrixBackgroundDynamic />
        <CyberBackgroundDynamic />
        <CustomCursor />
        <CustomContextMenu />
        <StylesheetLoader />
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}