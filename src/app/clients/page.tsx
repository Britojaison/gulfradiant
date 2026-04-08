import Image from "next/image";
import Link from "next/link";

export default function ClientsPage() {
  const brandLogos = [
    "image 48.png", "image 49.png", "image 50.png", "image 51.png",
    "image 52.png", "image 53.png", "image 54.png", "image 55.png",
    "image 56.png", "image 57.png", "image 58.png", "image 59.png",
    "image 60.png", "image 61.png", "image 62.png", "image 63.png",
    "image 64.png", "image 65.png", "image 66.png", "image 67.png",
    "image 68.png", "image 69.png", "image 70.png", "image 71.png",
    "image 72.png", "image 73.png", "image 74.png", "image 75.png",
    "image 76.png", "image 77.png", "image 78.png", "image 79.png",
    "image 80.png", "image 81.png"
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
            <li><Link href="/clients" className="active">Clients</Link></li>
            <li><Link href="/certifications">Our Certifications</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="clients-hero">
        <Image
          src="/Images/Brand_partners/oil-refinery-evening 2.png"
          alt="Refinery at twilight"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="clients-hero-overlay"></div>
        <div className="clients-hero-content">
          <h1 className="clients-hero-title">Trusted Partners</h1>
          <h2 className="clients-hero-subtitle">Working with Industry-Leading Brands</h2>
          <p className="clients-hero-description">
            We partner with globally recognized brands to deliver high-quality electrical products and solutions, ensuring reliability, performance, and long-term value across every project.
          </p>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section className="clients-brands-section">
        <div className="clients-brands-header">
          <div className="section-label">
            <span className="orange-square"></span> PARTNER NETWORK
          </div>
          <h2 className="section-title-inline">
            Our <span>Partnered Brands</span>
          </h2>
        </div>

        <div className="clients-grid">
          {brandLogos.map((logo, i) => {
            // Checkerboard logic for 4 columns:
            // Row 0 (0-3): gray, white, gray, white
            // Row 1 (4-7): white, gray, white, gray
            const rowIndex = Math.floor(i / 4);
            const colIndex = i % 4;
            const isGray = (rowIndex + colIndex) % 2 === 0;

            return (
              <div 
                className={`client-card ${isGray ? 'bg-gray' : 'bg-white'}`} 
                key={i}
              >
                <div className="client-logo-wrapper">
                  <Image
                    src={`/Images/Brand_partners/${logo}`}
                    alt={`Partner Brand ${i + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            );
          })}
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
