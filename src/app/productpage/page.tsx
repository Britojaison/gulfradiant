import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function ProductPage() {
  const logos = [
    { src: "kumwell.png", brand: "Kumwell", link: "/product-kumwell" },
    { src: "pittas.jpg", brand: "Pittas" },
    { src: "CITEL LOGO.png", brand: "Citel" },
    { src: "OBSTA LOGO.png", brand: "Obsta" },
    { src: "PALAZZOLI GROUP LOGO.png", brand: "Palazzoli" },
    { src: "TIGO LOGO.png", brand: "Tigo" },
    { src: "graig&derricott.png", brand: "Craig & Derricott" },
    { src: "NVENT CADDY LOGO.svg", brand: "nVent Caddy" },
    { src: "NVENT ERICO LOGO.svg", brand: "nVent Erico" },
    { src: "WALLMAX LOGO.png", brand: "Wallmax" },
    { src: "siechem.png", brand: "Siechem" },
    { src: "TUBIFOR LOGO.png", brand: "Tubifor" },
    { src: "dietzel.png", brand: "Dietzel" },
    { src: "BAHRA CABLES.svg", brand: "Bahra Cables" },
    { src: "TEKAB CABLES.png", brand: "Tekab Cables" },
    { src: "NEELKANTH CABLE LOGO.png", brand: "Neelkanth Cables" },
    { src: "PSI LOGO.png", brand: "PSI" },
    { src: "EMI LOGO.png", brand: "EMI", dark: true },
    { src: "LITETECH LOGO.webp", brand: "Litetech" },
    { src: "HAUFF TECHNIK LOGO.png", brand: "Hauff Technik" },
    { src: "CCG Logo.png", brand: "CCG" },
    { src: "cabex.png", brand: "Cabex" },
    { src: "obo.png", brand: "OBO" },
    { src: "ROSE LOGO.png", brand: "Rose" },
    { src: "SIRENA LOGO.png", brand: "Sirena" },
    { src: "FRATER1-LOGO.webp", brand: "Frater" },
    { src: "COSMOPLAST LOGO.avif", brand: "Cosmoplast" },
  ];

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

      {/* HERO */}
      <section className="prod-hero">
        <Image
          src="/Images/product/close-up-electric-router-spindle-moulder-furniture-assembly-shop 1.png"
          alt="Industrial products"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="prod-hero-overlay"></div>
        <div className="prod-hero-content">
          <div className="prod-hero-tag">
            <span className="prod-orange-sq"></span>
            OUR PARTNERS
          </div>
          <h1>Products We<br /><span>Distribute</span></h1>
          <p>We represent globally recognized manufacturers, delivering certified products for infrastructure, industrial, and commercial projects.</p>
        </div>
      </section>

      {/* BRANDS GRID */}
      <section className="prod-grid-section">
        <div className="prod-grid-header">
          <div className="prod-grid-tag">
            <span className="prod-orange-sq"></span>
            BRAND PORTFOLIO
          </div>
          <h2>Trusted <span>Brands</span></h2>
        </div>

        <div className="prod-brands-grid">
          {logos.map((logo, i) => {
            const inner = (
              <>
                <div className={`prod-card-logo${logo.dark ? " prod-card-logo-dark" : ""}`}>
                  <Image
                    src={`/Images/product/${logo.src}`}
                    alt={logo.brand}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="prod-card-name">
                  <span>{logo.brand}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                  </svg>
                </div>
              </>
            );
            return logo.link ? (
              <Link href={logo.link} className="prod-card" key={i}>{inner}</Link>
            ) : (
              <div className="prod-card" key={i}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="prod-cta">
        <h2>Need Help Choosing<br />the Right Product?</h2>
        <p>Our engineers can help you find the right solution for your project requirements.</p>
        <Link href="/homepage#contact" className="prod-cta-btn">Get in Touch</Link>
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
    </>
  );
}
