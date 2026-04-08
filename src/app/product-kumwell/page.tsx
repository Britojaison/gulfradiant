import Image from "next/image";
import Link from "next/link";

export default function ProductKumwellPage() {
  return (
    <>
      <header className="navbar" id="navbar">
        <div className="navbar-logo">
          <Image
            src="/Images/product_kumwell%20images/logo.png"
            alt="Gulf Radiant Logo"
            width={150}
            height={54}
            style={{ height: "auto", width: "150px" }}
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
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <Image
          src="/Images/product_kumwell%20images/H1.png"
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
            <a href="#" className="btn-outline">
              Visit Website 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-carousel-indicators">
          <div className="indicator active"></div>
          <div className="indicator"></div>
          <div className="indicator"></div>
          <div className="indicator"></div>
        </div>
      </section>

      <section className="product-range">
        <h2 className="section-title">Product Range</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-card-image">
              <Image src="/Images/product_kumwell%20images/pr1.jpg" alt="Grounding Protection System" fill style={{ objectFit: "contain", padding: "20px" }} />
            </div>
            <div className="product-card-title">Grounding Protection <br/> System</div>
          </div>
          <div className="product-card">
            <div className="product-card-image">
              <Image src="/Images/product_kumwell%20images/pr2.jpg" alt="Lightning Protection System" fill style={{ objectFit: "contain", padding: "20px" }} />
            </div>
            <div className="product-card-title">Lightning Protection <br/> System</div>
          </div>
          <div className="product-card">
            <div className="product-card-image">
              <Image src="/Images/product_kumwell%20images/pr3.jpg" alt="Exothermic Welding Systems" fill style={{ objectFit: "contain", padding: "20px" }} />
            </div>
            <div className="product-card-title">Exothermic Welding <br/> Systems</div>
          </div>
        </div>
      </section>

      <section className="certified-section">
        <h2 className="section-title" style={{ marginBottom: "20px" }}>Certified & Approved</h2>
        <div className="certified-logos">
          <Image className="certified-logo" src="/Images/product_kumwell%20images/image 33.png" alt="Etihad WE" width={180} height={60} style={{ objectFit: "contain" }} />
          <Image className="certified-logo" src="/Images/product_kumwell%20images/image 34.png" alt="RTA" width={180} height={60} style={{ objectFit: "contain" }} />
          <Image className="certified-logo" src="/Images/product_kumwell%20images/image 35.png" alt="TAQA" width={180} height={60} style={{ objectFit: "contain" }} />
          <Image className="certified-logo" src="/Images/product_kumwell%20images/image 36.png" alt="IEEE" width={180} height={60} style={{ objectFit: "contain" }} />
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
            <Image src="/Images/product_kumwell%20images/Rectangle 81.png" alt="Kumwell HQ" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <footer className="footer" id="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/Images/product_kumwell%20images/logo.png" alt="Gulf Radiant Logo" width={150} height={54} />
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/homepage">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/productpage">Products</Link></li>
              <li><Link href="/projects">Projects</Link></li>
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
