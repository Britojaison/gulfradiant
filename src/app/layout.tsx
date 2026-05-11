import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "@/components/StaggeredMenu.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono-real",
  subsets: ["latin"],
  weight: ["500"],
});

const degular = localFont({
  variable: "--font-degular",
  src: [
    { path: "./fonts/DegularDisplayDemo-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/DegularDisplayDemo-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/DegularDisplayDemo-Semibold.otf", weight: "600", style: "normal" },
    { path: "./fonts/DegularDisplayDemo-Bold.otf", weight: "700", style: "normal" },
  ],
});

const neutiva = localFont({
  variable: "--font-neutiva",
  src: [
    { path: "./fonts/Neutiva-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Neutiva-Bold.otf", weight: "700", style: "normal" },
  ],
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
    <html lang="en" className={`${inter.variable} ${geistMono.variable} ${degular.variable} ${neutiva.variable}`}>
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
