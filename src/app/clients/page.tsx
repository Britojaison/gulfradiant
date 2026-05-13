"use client";

import Image from "next/image";
import Link from "next/link";

export default function ClientsPage() {
  const brandLogos = [
    "image 48.png", "image 49.png", "image 50.png", "image 51.png",
    "image 52.png", "image 53.png", "image 54.png", "image 55.png",
    "image 56.png", "image 57.png", "image 58.png", "image 59.png",
    "image 60.png", "image 61.png", "image 62.png", "image 63.png",
    "image 64.png", "image 65.png", "image 66.png", "image 67.png",
    "image 68.png", "image 69.png", "image 70.png", "image 71.png",
    "image 72.png", "image 73.png", "image 74.png", "image 75.png",
    "image 76.png", "image 77.png", "image 78.png", "image 79.png",
    "image 80.png", "image 81.png"
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="clients-hero">
        <Image
          src="/Images/Brand_partners/oil-refinery-evening 2.png"
          alt="Refinery at twilight"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="clients-hero-overlay"></div>
        <div className="clients-hero-content">
          <div className="clients-hero-text-wrapper">
            <h1 className="clients-hero-subtitle">Trusted Partners</h1>
            <h2 className="clients-hero-subheading">Working with Industry-Leading Brands</h2>
            <p className="clients-hero-description">We partner with globally recognized brands to deliver high-quality electrical products and solutions, ensuring reliability, performance, and long-term value across every project.</p>
          </div>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section className="clients-brands-section">
        <div className="clients-brands-header" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div className="hp-dist-subtitle">
            <div className="hp-dist-subtitle-track">
              <span>PARTNER NETWORK • </span>
              <span>PARTNER NETWORK • </span>
              <span>PARTNER NETWORK • </span>
              <span>PARTNER NETWORK • </span>
            </div>
          </div>
          <h2 style={{ fontFamily: "var(--font-degular), sans-serif", fontSize: "96px", fontWeight: "600", textAlign: "center", margin: "20px 0", lineHeight: "100%", color: "#1e1e1e", width: "100%" }}>
            Our Partnered Brands
          </h2>
        </div>

        <div className="clients-grid">
          {brandLogos.map((logo, i) => {
            return (
              <div 
                className="client-card" 
                key={i}
              >
                <div className="client-logo-wrapper">
                  <Image
                    src={`/Images/Brand_partners/${logo}`}
                    alt={`Partner Brand ${i + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <style jsx global>{`
        /* CLIENTS HERO */
        .clients-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          text-align: left;
          color: white;
          margin-top: 0;
        }
        .clients-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6) !important;
          z-index: 1;
        }
        .clients-hero-content {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: 2;
          width: 100%;
          padding: 0 80px;
        }
        .clients-hero-text-wrapper {
          max-width: 1200px;
        }
        .clients-hero-subheading {
          font-size: 36px;
          font-weight: 500;
          margin-bottom: 25px;
          color: #eee;
          font-family: var(--font-degular), sans-serif;
          white-space: nowrap;
        }
        .clients-hero-subtitle {
          font-size: 80px;
          font-weight: 600;
          margin-bottom: 5px;
          line-height: 1.1;
          font-family: var(--font-degular), sans-serif;
          white-space: nowrap;
        }
        .clients-hero-description {
          font-size: 15px;
          line-height: 1.6;
          color: #ddd;
          max-width: 90%;
          font-family: var(--font-neutiva), sans-serif;
        }

        /* CLIENTS BRANDS SECTION */
        .clients-brands-section {
          padding: 80px 0;
          max-width: 100%;
          margin: 0;
        }
        .clients-brands-header {
          text-align: center;
          margin-bottom: 60px;
          padding: 0 80px;
        }
        .clients-brands-header {
          text-align: center;
          margin-bottom: 60px;
          padding: 0 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .section-title-inline {
          font-family: var(--font-inter-tight), sans-serif;
          font-weight: 600;
          font-size: 48px;
          line-height: 100%;
          letter-spacing: 0;
          color: #1e1e1e;
          margin-top: 10px;
          vertical-align: middle;
        }
        .section-title-inline span {
          color: #FF5B05;
        }
        .orange-square {
          width: 8px;
          height: 8px;
          background: #FF5B05;
          flex-shrink: 0;
        }
        .clients-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #000000;
          border-left: 1px solid #000000;
        }
        .client-card {
          aspect-ratio: 16/9;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          background-color: #ffffff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-bottom: 1px solid #000000;
          border-right: 1px solid #000000;
        }
        .client-card:hover {
          transform: scale(1.02);
          z-index: 10;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .client-card:hover .client-logo-wrapper {
          filter: grayscale(0%) !important;
        }
        .client-logo-wrapper {
          position: relative;
          width: 75%;
          height: 75%;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        @media (max-width: 1024px) {
          .clients-hero-content { padding: 0 40px; }
          .clients-brands-header { padding: 0 40px; }
          .clients-hero-subtitle { font-size: 52px; }
          .clients-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 768px) {
          .clients-hero-content { padding: 0 20px; text-align: left; }
          .clients-hero-text-wrapper { text-align: left; }
          .clients-brands-header { padding: 0 20px; margin-bottom: 30px; text-align: left; }
          .clients-hero-subtitle { font-size: 40px; text-align: left; }
          .clients-hero-subheading { font-size: 20px; text-align: left; }
          .clients-hero-description { font-size: 14px; text-align: left; }
          .section-title-inline { font-size: 30px; }
          .clients-grid { grid-template-columns: repeat(2, 1fr); }
          .client-card { padding: 16px; }
        }
      `}</style>
    </>
  );
}
