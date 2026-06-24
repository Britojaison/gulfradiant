"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function InformationPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const downloads = [
    {
      brand: "Kumwell",
      title: "Kumwell Exothermic Welding Selection Chart",
      file: "/Images/information/OneDrive_3_13-05-2026/1-KUMWELL Exothermic Welding  Selection Chart.pdf",
    },
    {
      brand: "CITEL",
      title: "Citel AC DC Devices Transient Overvoltages Protection",
      file: "/Images/information/OneDrive_3_13-05-2026/2-CITEL_AC_DC_DEVICES_ TRANSIENT OVERVOLTAGES PROTECTION.pdf",
    },
    {
      brand: "CITEL",
      title: "Citel Surge Protection For Residential Buildings",
      file: "/Images/information/OneDrive_3_13-05-2026/3-CITEL_SURGE PROTECTION for RESIDENTIAL BUILDINGS.pdf",
    },
    {
      brand: "Obsta",
      title: "Obsta - Air-Craft Warning Obstruction Lights - Selection Guide",
      file: "/Images/information/OneDrive_3_13-05-2026/4-OBSTA -Air-Craft Warning Obstruction Lights- Selection guide.pdf",
    },
    {
      brand: "Gulf",
      title: "Impact Resistance Chart",
      file: "/Images/information/OneDrive_3_13-05-2026/5-Impact Resistance Chart.pdf",
    },
    {
      brand: "Gulf",
      title: "Cables Cross Section AWG To SQMM Chart",
      file: "/Images/information/OneDrive_3_13-05-2026/6-Cables Cross Section AWG_to_SQMM chart.pdf",
    },
    {
      brand: "Gulf",
      title: "Hazardous Area Classification Chart",
      file: "/Images/information/OneDrive_3_13-05-2026/7-Hazardous Area Classification Chart.pdf",
    },
    {
      brand: "Gulf",
      title: "Ingress Protection And Corrosivity Categories Chart",
      file: "/Images/information/OneDrive_3_13-05-2026/8-Ingress Protection and Corrosivity Categories Chart.pdf",
    },
    {
      brand: "Gulf",
      title: "Lux - Color Temperature Chart",
      file: "/Images/information/OneDrive_3_13-05-2026/9-Lux - Color Temperature chart.pdf",
    },
    {
      brand: "Gulf",
      title: "IEEE Guide - Types Of Earthing Systems",
      file: "/Images/information/OneDrive_3_13-05-2026/10-IEEE Guide - Types of EARTHING SYSTEMS.pdf",
    },
  ];

  return (
    <div className="info-page-wrapper">
      {/* BACKGROUND OVERLAY */}
      <div className="page-bg-overlay"></div>

      {/* HERO SECTION */}
      <section className="info-hero">
        <Image 
          src="/Images/information/bg10.svg" 
          alt="Technical Resources" 
          fill 
          sizes="100vw"
          style={{ objectFit: "cover" }} 
          priority 
        />
        <div className="info-hero-overlay"></div>
        <div className="info-hero-content">
          <div className="hp-dist-subtitle info-hero-subtitle-override" aria-label="Technical Resources">
            <div className="hp-dist-subtitle-track" aria-hidden="true">
              <span>{"- TECHNICAL\u00A0RESOURCES -"}</span>
              <span>{"- TECHNICAL\u00A0RESOURCES -"}</span>
              <span>{"- TECHNICAL\u00A0RESOURCES -"}</span>
              <span>{"- TECHNICAL\u00A0RESOURCES -"}</span>
            </div>
          </div>
          <h1 className="hero-glow-text">Useful Information. <br />Expert Guidance.</h1>
        </div>
      </section>

      {/* DOWNLOADS SECTION */}
      <section className="info-main-section">
        <div className="container-full">
          <div className="section-header-figma-centered">
            <h2>Technical <span className="text-orange">Charts & Guides</span></h2>
            <p className="section-description-centered">
              Access our comprehensive library of technical charts, selection guides, and reference materials to help you with your engineering projects.
            </p>
            <div className="download-all-right-wrapper">
              <button 
                className="info-download-all-btn-figma"
                onClick={() => {
                  downloads.forEach((item, index) => {
                    setTimeout(() => {
                      const link = document.createElement('a');
                      link.href = item.file;
                      link.download = item.title;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }, index * 200);
                  });
                }}
              >
                Download All Resources
              </button>
            </div>
          </div>

          <div className="info-grid-figma-tight">
            {downloads.map((item, i) => (
              <div 
                className={`info-card-figma-exact ${mounted ? 'animate-in' : ''}`} 
                key={i}
                style={{ "--index": i } as React.CSSProperties}
              >
                <div className="info-card-inner-exact">
                  <div className="brand-header-figma-exact">
                    <Image 
                      src={
                        item.brand.toLowerCase() === "kumwell" ? "/Images/product/kumwell.webp" :
                        item.brand.toLowerCase() === "citel" ? "/Images/product/CITEL LOGO.webp" :
                        item.brand.toLowerCase() === "obsta" ? "/Images/product/OBSTA LOGO.webp" :
                        "/Images/Brand_partners/Frame 76.webp"
                      } 
                      alt={item.brand}
                      width={130}
                      height={35}
                      style={{ 
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                        transform: item.brand.toLowerCase() === "obsta" ? "scale(2.0) translateY(5px)" : item.brand.toLowerCase() === "gulf" ? "scale(2.2)" : item.brand.toLowerCase() === "citel" ? "scale(1.3)" : "none",
                        filter: item.brand.toLowerCase() === "gulf" ? "invert(1) hue-rotate(180deg)" : "none"
                      }}
                    />
                  </div>
                  
                  <div className="card-content-exact">
                    <h3 className="info-card-title-figma-exact">{item.title}</h3>
                  </div>

                  <a
                    href={item.file}
                    download={item.title}
                    className="info-card-download-btn-exact"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .info-page-wrapper {
          font-family: var(--font-inter-tight), sans-serif;
          color: #ffffff;
          background-image: url('/Images/Home/bg4.svg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .page-bg-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
          pointer-events: none;
        }

        .container-full {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 30px;
          position: relative;
          z-index: 10;
        }

        .text-orange { color: #FF5B05 !important; }

        /* HERO */
        .info-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 30px;
          z-index: 5;
        }
        .info-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)) !important;
          z-index: 1;
        }
        .info-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }
        .info-hero-content h1 {
          font-family: var(--font-degular), sans-serif !important;
          font-size: 70px !important;
          font-weight: 500 !important;
          line-height: 1.1;
          margin-bottom: 32px;
          letter-spacing: -1px;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .info-hero-subtitle-override {
          margin: 0 0 30px 0 !important;
          color: #ffffff !important;
          width: 220px !important;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%) !important;
          mask-image: linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%) !important;
        }

        .info-hero-subtitle-override span {
          color: #ffffff !important;
        }

        /* MAIN CONTENT SECTION */
        .info-main-section {
          padding: 120px 0;
          position: relative;
          min-height: 100vh;
          background-image: url('/Images/Certifications/bg.webp');
          background-size: cover;
          background-position: center;
        }

        .section-header-figma-centered {
          text-align: center;
          max-width: 100%;
          margin: 0 auto 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .download-all-right-wrapper {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
        }

        .section-header-figma-centered h2 {
          font-family: var(--font-degular), sans-serif !important;
          font-size: 70px !important;
          font-weight: 500 !important;
          margin-bottom: 24px;
          letter-spacing: -1px;
          line-height: 1.1;
        }

        .section-description-centered {
          font-family: var(--font-neutiva), sans-serif;
          font-size: 20px !important;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          max-width: 800px;
          margin: 0 auto 40px;
        }

        .info-download-all-btn-figma {
          background: #FF5B05;
          color: #fff;
          border: none;
          width: 251px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-neutiva), sans-serif;
          white-space: nowrap;
        }

        .info-download-all-btn-figma:hover {
          background: #e04f00;
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255, 91, 5, 0.3);
        }

        /* GRID & CARDS FIGMA EXACT */
        .info-grid-figma-tight {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          justify-content: center;
          gap: 30px;
          width: 100%;
        }

        .info-card-figma-exact {
          width: 100%;
          max-width: 315px;
          margin: 0 auto;
          height: 282px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .info-card-figma-exact.animate-in {
          opacity: 1;
          transform: translateY(0);
          transition-delay: calc(var(--index) * 0.05s);
        }

        .info-card-inner-exact {
          background: rgba(217, 217, 217, 0.3);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 30px;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-degular), sans-serif;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .info-card-figma-exact:hover .info-card-inner-exact {
          background: rgba(217, 217, 217, 0.4);
          transform: translateY(-10px);
          border-color: rgba(255, 91, 5, 0.5);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .brand-header-figma-exact {
          background: #ffffff;
          padding: 5px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          height: 47px;
          width: 141px;
          overflow: hidden;
        }

        .info-card-title-figma-exact {
          font-size: 18px;
          font-weight: 500;
          color: #fff;
          line-height: 1.3;
          margin: 15px 0;
          text-align: center;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .info-card-download-btn-exact {
          background: #FF5B05;
          color: #fff;
          text-decoration: none;
          width: 100%;
          max-width: 255px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font-weight: 600;
          font-size: 24px;
          transition: all 0.3s ease;
          font-family: var(--font-degular), sans-serif;
        }

        .brand-text {
          font-weight: 800;
          text-transform: uppercase;
          font-size: 16px;
        }

        .brand-text.kumwell { color: #d62121; }
        .brand-text.citel { color: #004b93; }
        .brand-text.obsta { color: #000000; font-style: italic; }

        .info-card-title-figma {
          font-size: 18px;
          font-weight: 500;
          color: #fff;
          line-height: 1.4;
          margin: 20px 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .info-card-download-btn {
          background: #FF5B05;
          color: #fff;
          text-decoration: none;
          text-align: center;
          padding: 12px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .info-card-download-btn:hover {
          background: #ff742e;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1300px) {
          .info-grid-figma-tight { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 1024px) {
          .info-grid-figma-tight { grid-template-columns: repeat(2, 1fr) !important; }
          .section-header-figma-centered h2 { font-size: 36px !important; font-weight: 500 !important; }
          .section-description-centered { font-size: 18px !important; padding: 0 20px; }
          .info-hero-content h1 { font-size: 36px !important; font-weight: 500 !important; }
        }

        @media (max-width: 600px) {
          .info-grid-figma-tight { grid-template-columns: 1fr !important; }
          .container-full { padding: 0 20px; }
          .info-hero { padding-left: 20px; padding-right: 20px; height: 50vh !important; }
          .info-hero-content h1 { font-size: 42px !important; }
          .section-header-figma-centered h2 { font-size: 28px !important; }
          .section-description-centered { font-size: 16px !important; }
          .download-all-right-wrapper { justify-content: center; margin-top: 30px; }
        }
      `}</style>
    </div>
  );}
