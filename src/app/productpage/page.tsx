import Image from "next/image";
import Link from "next/link";

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
            src="/Images/logo.png"
            alt="Gulf Radiant Logo"
            width={180}
            height={64}
            style={{ height: "auto", width: "180px" }}
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
               <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="product-page-wrapper">
        <div className="product-page-bg"></div>
        <div className="product-page-content">
          <h1 className="product-page-title">Our Product Range</h1>
          
          <div className="product-brands-grid">
            {logos.map((logo, i) => (
              <div className="product-brand-card" key={i}>
                <Image
                  src={`/Images/product/${logo}`}
                  alt={`Product Brand ${i + 1}`}
                  fill
                  style={{ objectFit: "contain", padding: "24px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer" id="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="/Images/logo.png"
              alt="Gulf Radiant Logo"
              width={150}
              height={54}
              style={{ height: "auto", width: "150px" }}
            />
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
            <h4>Resources</h4>
            <ul>
              <li><Link href="/technical-charts">Technical Charts</Link></li>
              <li><Link href="/product-guides">Product Guides</Link></li>
              <li><Link href="/resources">Resources</Link></li>
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
