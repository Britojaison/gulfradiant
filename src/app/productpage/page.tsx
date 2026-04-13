import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function ProductPage() {
  // Ordered roughly matching the visual grid from the reference image
  const logos = [
    "image 3.png", "image 4.png", "image 7.png", "image 6.png",
    "image 9.png", "image 10.png", "image 11.png", "image 12.png",
    "image 13.png", "image 14.png", "image 15.png", "image 16.png",
    "image 17.png", "image 18.png", "image 19.png", "image 20.png",
    "image 21.png", "image 22.png", "image 23.png", "image 24.png",
    "image 25.png", "image 26.png", "image 27.png", "image 28.png",
    "image 29.png", "image 30.png", "image 31.png"
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
              const isKumwell = logo === "image 3.png";
              return isKumwell ? (
                <Link href="/product-kumwell" className="product-brand-card" key={i}>
                  <Image
                    src={`/Images/product/${logo}`}
                    alt={`Product Brand ${i + 1}`}
                    fill
                    style={{ objectFit: "contain", padding: "80px" }}
                  />
                </Link>
              ) : (
                <div className="product-brand-card" key={i}>
                  <Image
                    src={`/Images/product/${logo}`}
                    alt={`Product Brand ${i + 1}`}
                    fill
                    style={{ objectFit: "contain", padding: "80px" }}
                  />
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
