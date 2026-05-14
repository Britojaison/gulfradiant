"use client";

import Image from "next/image";
import Link from "next/link";

export default function InformationPage() {
  const downloads = [
    {
      title: "KUMWELL Exothermic Welding Selection Chart",
      file: "/Images/information/OneDrive_3_13-05-2026/1-KUMWELL Exothermic Welding  Selection Chart.pdf",
    },
    {
      title: "CITEL AC DC DEVICES TRANSIENT OVERVOLTAGES PROTECTION",
      file: "/Images/information/OneDrive_3_13-05-2026/2-CITEL_AC_DC_DEVICES_ TRANSIENT OVERVOLTAGES PROTECTION.pdf",
    },
    {
      title: "CITEL SURGE PROTECTION for RESIDENTIAL BUILDINGS",
      file: "/Images/information/OneDrive_3_13-05-2026/3-CITEL_SURGE PROTECTION for RESIDENTIAL BUILDINGS.pdf",
    },
    {
      title: "OBSTA - Air-Craft Warning Obstruction Lights - Selection Guide",
      file: "/Images/information/OneDrive_3_13-05-2026/4-OBSTA -Air-Craft Warning Obstruction Lights- Selection guide.pdf",
    },
    {
      title: "Impact Resistance Chart",
      file: "/Images/information/OneDrive_3_13-05-2026/5-Impact Resistance Chart.pdf",
    },
    {
      title: "Cables Cross Section AWG to SQMM Chart",
      file: "/Images/information/OneDrive_3_13-05-2026/6-Cables Cross Section AWG_to_SQMM chart.pdf",
    },
    {
      title: "Hazardous Area Classification Chart",
      file: "/Images/information/OneDrive_3_13-05-2026/7-Hazardous Area Classification Chart.pdf",
    },
    {
      title: "Ingress Protection and Corrosivity Categories Chart",
      file: "/Images/information/OneDrive_3_13-05-2026/8-Ingress Protection and Corrosivity Categories Chart.pdf",
    },
    {
      title: "Lux - Color Temperature Chart",
      file: "/Images/information/OneDrive_3_13-05-2026/9-Lux - Color Temperature chart.pdf",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="info-hero">
        <div className="info-hero-overlay"></div>
        <div className="info-hero-content">
          <h1 className="info-hero-title">Useful Information</h1>
          <p className="info-hero-subtitle">
            Download our technical charts, selection guides, and reference materials.
          </p>
        </div>
      </section>

      {/* DOWNLOADS SECTION */}
      <section className="info-section-bg">
        <div className="info-container">
          <div className="info-download-all-container">
            <button 
              className="info-download-all-btn"
              onClick={() => {
                downloads.forEach(item => {
                  const link = document.createElement('a');
                  link.href = item.file;
                  link.download = item.title;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                });
              }}
            >
              📥 Download All Resources
            </button>
          </div>
          <div className="info-grid">
            {downloads.map((item, i) => (
              <div className="info-card" key={i}>
                <div className="info-card-content">
                  <div className="info-icon">
                    {item.file.endsWith('.pdf') ? '📄' : '🖼️'}
                  </div>
                  <h3 className="info-card-title">{item.title}</h3>
                </div>
                <a
                  href={item.file}
                  download={item.title}
                  className="info-download-btn"
                >
                  Download File
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .info-hero {
          position: relative;
          height: 400px;
          background: url('/Images/Home/bg3.svg') no-repeat center center;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #ffffff;
        }

        .info-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
        }

        .info-hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          padding: 0 20px;
        }

        .info-hero-title {
          font-family: var(--font-degular), sans-serif;
          font-size: 64px;
          font-weight: 700;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .info-hero-subtitle {
          font-family: var(--font-neutiva), sans-serif;
          font-size: 18px;
          opacity: 0.9;
        }

        .info-section-bg {
          background: #101010;
          padding: 80px 0;
          min-height: 500px;
        }

        .info-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .info-download-all-container {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 30px;
        }

        .info-download-all-btn {
          background: transparent;
          border: 2px solid #ff5b05;
          color: #ff5b05;
          padding: 12px 24px;
          border-radius: 8px;
          font-family: var(--font-neutiva), sans-serif;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .info-download-all-btn:hover {
          background: #ff5b05;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 91, 5, 0.3);
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 220px;
          backdrop-filter: blur(12px);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 91, 5, 0.4);
          background: rgba(255, 255, 255, 0.08);
        }

        .info-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .info-card-title {
          font-family: var(--font-degular), sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.3;
          margin: 0;
        }

        .info-download-btn {
          display: inline-block;
          margin-top: auto;
          padding: 12px;
          background: #ff5b05;
          color: #ffffff;
          text-align: center;
          border-radius: 8px;
          font-family: var(--font-neutiva), sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .info-download-btn:hover {
          background: #e04f00;
        }

        @media (max-width: 768px) {
          .info-hero-title {
            font-size: 40px;
          }
          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
