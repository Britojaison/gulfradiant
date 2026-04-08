import Image from "next/image";
import Link from "next/link";

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
            src="/Images/logo.png"
            alt="Gulf Radiant Logo"
            width={180}
            height={64}
            style={{ height: "auto", width: "180px" }}
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
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
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

      {/* STANDARD FOOTER */}
      <footer className="footer" id="footer" style={{marginTop:0}}>
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/Images/logo.png" alt="Gulf Radiant Logo" width={150} height={54} />
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/productpage">Products</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Information</h4>
            <ul>
              <li><Link href="#">Technical Charts</Link></li>
              <li><Link href="#">Product Guides</Link></li>
              <li><Link href="#">Resources</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">Dubai, UAE</a></li>
              <li><a href="mailto:info@gulfradiant.com">info@gulfradiant.com</a></li>
              <li><a href="tel:+97143579062">+971 4 357 9062</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <Link href="/privacy">Privacy Policy</Link>
          <span>© Gulf Radiant 2025. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
