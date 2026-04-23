"use client";

import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

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
      {/* NAVBAR */}
      <header className="navbar" id="navbar">
        <div className="navbar-logo">
          <Image
            src="/Images/Brand_partners/Frame 76.png"
            alt="Gulf Radiant Logo"
            width={240}
            height={67}
            style={{ objectFit: "contain" }}
          />
        </div>
        <nav>
          <ul className="navbar-nav" id="main-nav">
            <li><Link href="/homepage">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/productpage">Products</Link></li>
            <li><span className="nav-dropdown">Useful Information</span></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/clients" className="active">Clients</Link></li>
            <li><Link href="/certifications">Our Certifications</Link></li>
            <li><Link href="/homepage#contact">Contact</Link></li>
          </ul>
        </nav>
        <MobileNav activePage="Clients" />
      </header>

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

          </div>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section className="clients-brands-section">
        <div className="clients-brands-header">
          <div className="section-label">
            <span className="orange-square"></span> PARTNER NETWORK
          </div>
          <h2 className="section-title-inline">
            Our <span>Partnered Brands</span>
          </h2>
        </div>

        <div className="clients-grid">
          {brandLogos.map((logo, i) => {
            // Checkerboard logic for 4 columns:
            // Row 0 (0-3): gray, white, gray, white
            // Row 1 (4-7): white, gray, white, gray
            const rowIndex = Math.floor(i / 4);
            const colIndex = i % 4;
            const isGray = (rowIndex + colIndex) % 2 === 0;

            return (
              <div 
                className={`client-card ${isGray ? 'bg-gray' : 'bg-white'}`} 
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

      <footer className="hp-footer">
        <div className="hp-footer-content">
          <div className="hp-footer-grid">
            <div className="hp-footer-brand">
              <Image src="/Images/Brand_partners/Frame 76.png" alt="Gulf Radiant" width={240} height={67} style={{ objectFit: "contain", objectPosition: "left" }} />
              <div style={{ marginTop: "25px", display: "flex", gap: "15px", paddingLeft: "90px" }}>
                <a href="https://www.linkedin.com/company/gulf-radiant-llc-dubai/" target="_blank" rel="noopener noreferrer" className="hp-footer-linkedin">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
            <div className="hp-footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><Link href="/homepage">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/productpage">Products</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/homepage#contact">Contact</Link></li>
              </ul>
            </div>
            <div className="hp-footer-col">
              <h4>Information</h4>
              <ul>
                <li><Link href="#">Technical Charts</Link></li>
                <li><Link href="#">Product Guides</Link></li>
                <li><Link href="#">Resources</Link></li>
              </ul>
            </div>
            <div className="hp-footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">Dubai, UAE</a></li>
                <li><a href="mailto:info@gulfradiant.com">info@gulfradiant.com</a></li>
                <li><a href="tel:+97142671662">+971 4 2671662 / 882</a></li>
              </ul>
            </div>
          </div>
          <div className="hp-footer-bottom">
            <Link href="/privacy">Privacy Policy</Link>
            <span>© Gulf Radiant 2025. All rights reserved.</span>
          </div>
        </div>
      </footer>

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
          background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 100%);
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
          max-width: 700px;
        }
        .clients-hero-subheading {
          font-size: 32px;
          font-weight: 500;
          margin-bottom: 25px;
          color: #eee;
        }
        .clients-hero-subtitle {
          font-size: 72px;
          font-weight: 600;
          margin-bottom: 5px;
          line-height: 1.1;
          letter-spacing: 1px;
        }
        .clients-hero-description {
          font-size: 15px;
          line-height: 1.6;
          color: #ddd;
          max-width: 90%;
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
        .section-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: var(--font-geist-mono), monospace;
          font-size: 12px;
          font-weight: 500;
          color: #000000;
          text-transform: uppercase;
          letter-spacing: 0%;
          line-height: 100%;
          margin-bottom: 5px;
          vertical-align: middle;
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
          gap: 0;
        }
        .client-card {
          aspect-ratio: 16/9;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          transition: transform 0.3s ease;
        }
        .client-card:hover {
          transform: scale(1.05);
          z-index: 10;
          background: #fff !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .client-card.bg-gray {
          background-color: #f7f7f7;
        }
        .client-card.bg-white {
          background-color: #ffffff;
        }
        .client-logo-wrapper {
          position: relative;
          width: 75%;
          height: 75%;
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
