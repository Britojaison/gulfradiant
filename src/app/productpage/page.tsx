import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  const logos = [
    { src: "/Images/product/Products/kumwell.png", brand: "Kumwell", link: "/product-kumwell" },
    { src: "/Images/product/Products/pittas.jpg", brand: "Pittas" },
    { src: "/Images/product/Products/CITEL LOGO.png", brand: "Citel", scale: 1.8 },
    { src: "/Images/product/Products/OBSTA LOGO.png", brand: "Obsta", scale: 2 },
    { src: "/Images/product/Products/PALAZZOLI GROUP LOGO.png", brand: "Palazzoli" },
    { src: "/Images/product/Products/TIGO LOGO.png", brand: "Tigo" },
    { src: "/Images/product/CRAIG AND DERRICOTT LOGO.png", brand: "Craig & Derricott", scale: 2 },
    { src: "/Images/product/Products/NVENT CADDY LOGO.svg", brand: "nVent Caddy", scale: 2 },
    { src: "/Images/product/Products/NVENT ERICO LOGO.svg", brand: "nVent Erico" },
    { src: "/Images/product/Products/WALLMAX LOGO.png", brand: "Wallmax" },
    { src: "/Images/product/siechem.png", brand: "Siechem", scale: 1.14 },
    { src: "/Images/product/Products/TUBIFOR LOGO.png", brand: "Tubifor" },
    { src: "/Images/product/dietzel.png", brand: "Dietzel" },
    { src: "/Images/product/Products/BAHRA CABLES.svg", brand: "Bahra Cables" },
    { src: "/Images/product/Products/TEKAB CABLES.png", brand: "Tekab Cables" },
    { src: "/Images/product/Products/NEELKANTH CABLE LOGO.png", brand: "Neelkanth Cables", scale: 2 },
    { src: "/Images/product/Products/PSI LOGO.png", brand: "PSI", scale: 2.5 },
    { src: "/Images/product/Products/EMI LOGO.png", brand: "EMI", dark: true },
    { src: "/Images/product/Products/LITETECH LOGO.webp", brand: "Litetech" },
    { src: "/Images/product/Products/HAUFF TECHNIK LOGO.png", brand: "Hauff Technik" },
    { src: "/Images/product/Products/CCG Logo.png", brand: "CCG", scale: 2 },
    // { src: "/Images/product/cabex.png", brand: "Cabex" },
    { src: "/Images/product/obo.png", brand: "OBO", scale: 2.5 },
    { src: "/Images/product/extras/BG ELECTRIC LOGO.svg", brand: "BG Electric", scale: 2.5 },
    { src: "/Images/product/extras/HELUKABEL LOGO.webp", brand: "HELUKABEL" },
    { src: "/Images/product/extras/NVENT ERIFLEX LOGO.svg", brand: "nVent Eriflex" },
    { src: "/Images/product/Products/ROSE LOGO.png", brand: "Rose", scale: 2 },
    { src: "/Images/product/Products/SIRENA LOGO.png", brand: "Sirena" },
    { src: "/Images/product/Products/FRATER1-LOGO.webp", brand: "Frater" },
    { src: "/Images/product/Products/COSMOPLAST LOGO.avif", brand: "Cosmoplast" },
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
                    src={logo.src}
                    alt={logo.brand}
                    fill
                    style={{
                      objectFit: "contain",
                      transform: logo.scale ? `scale(${logo.scale})` : undefined,
                    }}
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
