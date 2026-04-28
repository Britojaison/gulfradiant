import type { Metadata } from "next";
import { Inter, Inter_Tight, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Gulf Radiant – Kumwell Earthing & Lightning Protection Systems",
  description:
    "Gulf Radiant is a leading distributor of Kumwell earthing, grounding, lightning protection and exothermic welding systems in the UAE and Middle East.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        <div className="page-content-wrapper">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
