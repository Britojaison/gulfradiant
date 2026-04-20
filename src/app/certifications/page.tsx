import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function CertificationsPage() {
  const certs = [
    { image: "Ellipse 13.png", title: "Gulf Radiant - ISO 9001-2015" },
    { image: "Ellipse 37.png", title: "Palazzoli - DEWA APPROVAL" },
    { image: "Ellipse 38.png", title: "Sharjah Electricity & Water Authority" },
    { image: "Ellipse 39.png", title: "Gulf Radiant - ISO 9001-2015" },
    { image: "Ellipse 40.png", title: "Gulf Radiant - ISO 9001-2015" },
    { image: "Ellipse 41.png", title: "Gulf Radiant - ISO 9001-2015" },
    { image: "Ellipse 42.png", title: "Gulf Radiant - ISO 9001-2015" },
    { image: "Ellipse 43.png", title: "Gulf Radiant - ISO 9001-2015" },
    { image: "Ellipse 44.png", title: "Gulf Radiant - ISO 9001-2015" },
    { image: "Ellipse 45.png", title: "Gulf Radiant - ISO 9001-2015" },
    { image: "Ellipse 13-1.png", title: "Gulf Radiant - ISO 9001-2015" },
    { image: "Ellipse 13-2.png", title: "Gulf Radiant - ISO 9001-2015" }
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
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/productpage">Products</Link></li>
            <li><span className="nav-dropdown">Useful Information</span></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/clients">Clients</Link></li>
            <li><Link href="/certifications" className="active">Our Certifications</Link></li>
            <li><Link href="/homepage#contact">Contact</Link></li>
          </ul>
        </nav>
        <MobileNav activePage="Our Certifications" />
      </header>

      {/* HERO SECTION */}
      <section className="certs-hero">
        <Image
          src="/Images/Certificates/image 38.png"
          alt="Worker verifying electrical certifications"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className="certs-hero-overlay"></div>
        <div className="certs-hero-content">
          <h1 className="certs-hero-title">Our Certifications</h1>
          <p className="certs-hero-subtitle">
            Accredited by top UAE authorities — our certifications reflect two decades of trust, quality, and compliance excellence
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS GRID SECTION */}
      <section className="certs-section-bg">
        <div className="certs-header">
          <div className="certs-section-label">
            <span className="certs-orange-square"></span> CERTIFIED QUALITY
          </div>
          <h2 className="certs-title-inline">
            Industry <span>Certifications & Approvals</span>
          </h2>
        </div>

        <div className="certs-container">
          <div className="certs-grid">
            {certs.map((cert, i) => (
              <div className="cert-card" key={i}>
                <div className="cert-logo-circle">
                  <Image
                    src={`/Images/Certificates/${cert.image}`}
                    alt={cert.title}
                    width={140}
                    height={140}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h3 className="cert-card-title">{cert.title}</h3>
                <div className="cert-card-actions">
                  <Link href="#" className="cert-view-link">View Certificate</Link>
                  <Link href="#" className="cert-download-btn">Download</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="hp-footer">
        <div className="hp-footer-content">
          <div className="hp-footer-grid">
            <div className="hp-footer-brand">
              <Image src="/Images/Brand_partners/Frame 76.png" alt="Gulf Radiant" width={240} height={67} style={{ objectFit: "contain", objectPosition: "left" }} />
              <div style={{ marginTop: "25px", display: "flex", gap: "15px", paddingLeft: "90px" }}>
                <a href="https://linkedin.com/company/gulf-radiant" target="_blank" rel="noopener noreferrer" className="hp-footer-linkedin">
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
    </>
  );
}
