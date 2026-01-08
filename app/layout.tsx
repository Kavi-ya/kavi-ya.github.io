import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MatrixBackground from "./components/MatrixBackground";
import CyberBackground from "./components/CyberBackground";
import TitleAnimation from "./components/TitleAnimation";
import CustomCursor from "./components/CustomCursor";
import CustomContextMenu from "./components/CustomContextMenu";
import ServiceWorkerRegister from "./components/ServiceWorkerRegister";
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
        
        {/* Font Awesome - deferred loading to reduce render blocking */}
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" as="style" onLoad={(e) => {if(e.target) (e.target as any).rel = 'stylesheet'}} />
        <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" /></noscript>
        
        {/* AOS CSS - deferred loading */}
        <link rel="preload" href="https://unpkg.com/aos@2.3.1/dist/aos.css" as="style" onLoad={(e) => {if(e.target) (e.target as any).onload = null; (e.target as any).rel = 'stylesheet'}} />
        <noscript><link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" /></noscript>
      </head>
      <body className={inter.className}>
        <TitleAnimation />
        <div className="cyber-overlay"></div>
        <div className="matrix-pattern"></div>
        <MatrixBackgroundDynamic />
        <CyberBackgroundDynamic />
        <CustomCursor />
        <CustomContextMenu />
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}