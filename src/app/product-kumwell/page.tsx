import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function ProductKumwellPage() {
  return (
    <>
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
            <li><Link href="/productpage" className="active">Products</Link></li>
            <li><span className="nav-dropdown">Useful Information</span></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/clients">Clients</Link></li>
            <li><Link href="/certifications">Our Certifications</Link></li>
            <li><Link href="/homepage#contact">Contact</Link></li>
          </ul>
        </nav>
        <MobileNav activePage="Products" />
      </header>

      <section className="hero">
        <Image
          src="/Images/kumwell/H1.png"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Kumwell</h1>
          <p className="hero-subtitle">Earthing & Lightning Protection Systems</p>
          <p className="hero-description">
            Advanced grounding and lightning protection solutions for industrial safety and infrastructure.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Request a Quote</button>
            <a href="https://www.kumwell.com/en/about-us" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Visit Website 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="product-range">
        <h2 className="section-title">Product Range</h2>
        <div className="kumwell-product-grid">
          <div className="kumwell-product-card">
            <div className="kumwell-product-card-image">
              <Image src="/Images/kumwell/pr1.jpg" alt="Grounding Protection System" fill style={{ objectFit: "contain", padding: "0" }} />
            </div>
          </div>
          <div className="kumwell-product-card">
            <div className="kumwell-product-card-image">
              <Image src="/Images/kumwell/pr2.jpg" alt="Lightning Protection System" fill style={{ objectFit: "contain", padding: "0" }} />
            </div>
          </div>
          <div className="kumwell-product-card">
            <div className="kumwell-product-card-image">
              <Image src="/Images/kumwell/pr3.jpg" alt="Exothermic Welding Systems" fill style={{ objectFit: "contain", padding: "0" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="certified-section">
        <h2 className="section-title" style={{ marginBottom: "20px" }}>Certified & Approved</h2>
        <div className="certified-logos">
          <Image className="certified-logo" src="/Images/kumwell/image 33.png" alt="Etihad WE" width={180} height={60} style={{ objectFit: "contain" }} />
          <Image className="certified-logo" src="/Images/kumwell/image 34.png" alt="RTA" width={180} height={60} style={{ objectFit: "contain" }} />
          <Image className="certified-logo" src="/Images/kumwell/image 35.png" alt="TAQA" width={180} height={60} style={{ objectFit: "contain" }} />
          <Image className="certified-logo" src="/Images/kumwell/image 36.png" alt="IEEE" width={180} height={60} style={{ objectFit: "contain" }} />
        </div>
      </section>

      <section className="about-section">
        <div className="about-header">
          <h2>About <span>Kumwell</span></h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>Kumwell is a global manufacturer specializing in grounding, lightning protection, and surge protection systems. With decades of expertise and innovation, we deliver comprehensive solutions that ensure the safety and reliability of electrical infrastructure worldwide.</p>
            <p>Our products are trusted by major corporations and installed across 40+ countries, protecting critical infrastructure in power generation, telecommunications, transportation, and industrial sectors.</p>
            <div className="about-highlight">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--orange)" }}>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Exporting to 40+ Countries</span>
            </div>
          </div>
          <div className="about-image">
            <Image src="/Images/kumwell/Rectangle 81.png" alt="Kumwell HQ" fill style={{ objectFit: "cover" }} />
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
