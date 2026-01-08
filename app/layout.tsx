import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MatrixBackground from "./components/MatrixBackground";
import CyberBackground from "./components/CyberBackground";
import TitleAnimation from "./components/TitleAnimation";
import CustomCursor from "./components/CustomCursor";
import CustomContextMenu from "./components/CustomContextMenu";

const inter = Inter({ subsets: ["latin"] });

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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <TitleAnimation />
        <div className="cyber-overlay"></div>
        <div className="matrix-pattern"></div>
        <MatrixBackground />
        <CyberBackground />
        <CustomCursor />
        <CustomContextMenu />
        {children}
      </body>
    </html>
  );
}