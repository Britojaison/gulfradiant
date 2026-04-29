import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  const logos = [
    { src: "kumwell.png", brand: "Kumwell", link: "/product-kumwell" },
    { src: "pittas.jpg", brand: "Pittas" },
    { src: "CITEL LOGO.png", brand: "Citel" },
    { src: "OBSTA LOGO.png", brand: "Obsta" },
    { src: "PALAZZOLI GROUP LOGO.png", brand: "Palazzoli" },
    { src: "TIGO LOGO.png", brand: "Tigo" },
    { src: "graig-derricott.png", brand: "Craig & Derricott" },
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

    </>
  );
}
