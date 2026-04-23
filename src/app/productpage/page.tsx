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
            width={180}
            height={50}
            style={{ objectFit: "contain" }}
          />
        </div>
        <nav>
          <ul className="navbar-nav" id="main-nav">
            <li>
              <Link href="/homepage">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/productpage" className="active">
                Products
              </Link>
            </li>
            <li>
              <span className="nav-dropdown">Useful Information</span>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/clients">Clients</Link>
            </li>
            <li>
              <Link href="/certifications">Our Certifications</Link>
            </li>
            <li>
               <Link href="/homepage#contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <MobileNav activePage="Products" />
      </header>

      <main className="product-page-wrapper">
        <div className="product-page-bg"></div>
        <div className="product-page-content">
          <h1 className="product-page-title">Our <span>Product Range</span></h1>
          
          <div className="product-brands-grid">
            {logos.map((logo, i) => {
              const cardClass = `product-brand-card${logo.dark ? " product-brand-card-dark" : ""}`;
              const card = (
                <Image
                  src={`/Images/product/${logo.src}`}
                  alt={logo.brand}
                  fill
                  style={{ objectFit: "contain" }}
                />
              );
              return logo.link ? (
                <Link href={logo.link} className={cardClass} key={i}>
                  {card}
                </Link>
              ) : (
                <div className={cardClass} key={i}>
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="hp-footer">
        <div className="hp-footer-content">
          <div className="hp-footer-grid">
            <div className="hp-footer-brand">
              <Image src="/Images/Brand_partners/Frame 76.png" alt="Gulf Radiant" width={175} height={59} style={{ objectFit: "contain", objectPosition: "left" }} />
            </div>
            <div className="hp-footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><Link href="/homepage">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/productpage">Products</Link></li>
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
                <li><a href="tel:+97143579062">+971 4 357 9062</a></li>
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
