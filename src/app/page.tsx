import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  const distributeLogos = [
    "image 4.png", "Rectangle 38.png", "image 3.png", 
    "image 6.png", "image 7.png", "image 10.png"
  ];
  // Wait, I should use the correct encoded logos:
  const productLogos = [
    "image 3.png", "image 4.png", "image 7.png", "image 6.png", "image 9.png", "image 10.png"
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
            <li><Link href="/certifications">Our Certifications</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hp-hero">
        <Image
          src="/Images/Home/f6b8aed5ae226daa7b778061ebc1bdb0aaa5cd56.jpg"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="hp-hero-overlay"></div>
        <div className="hp-hero-content">
          <h1 className="hp-hero-title">Powering Infrastructure<br/>That Delivers</h1>
          <p className="hp-hero-subtitle">
            Gulf Radiant powers infrastructure with robust electrical solutions.<br/>
            Trusted globally for seamless energy management.
          </p>
          <Link href="/productpage" className="hp-btn-white">
            View Products &rarr;
          </Link>
        </div>
      </section>

      {/* PRODUCTS WE DISTRIBUTE (Aligned Left) */}
      <section className="hp-distribute-section">
        <div className="hp-distribute-header">
          <h2><span>Products</span> We Distribute</h2>
        </div>
        <div className="hp-distribute-logos">
          {productLogos.map((logo, i) => (
            <div className="hp-logo-item" key={i}>
              <Image src={`/Images/product/${logo}`} alt="Brand Logo" fill style={{ objectFit: "contain" }} />
            </div>
          ))}
        </div>
        <div style={{ width: "100%", textAlign: "center", marginTop: "30px" }}>
          <button className="btn-primary">View All</button>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="hp-stats-section">
        <div className="hp-stat">
          <h3>25+</h3>
          <p>Years of Experience</p>
          <span>Delivering excellence since 1999 with proven reliability.</span>
        </div>
        <div className="hp-stat divider">
          <h3>30+</h3>
          <p>Global Partners</p>
          <span>Working alongside industry leading manufacturers.</span>
        </div>
        <div className="hp-stat">
          <h3>100+</h3>
          <p>Projects Completed</p>
          <span>Major infrastructure developments successfully powered.</span>
        </div>
      </section>

      {/* VIDEO BANNER SECTION */}
      <section className="hp-video-section">
        <Image src="/Images/Home/video.jpg" alt="Video Placeholder" fill style={{ objectFit: "cover" }} />
        <div className="hp-play-button">
          <div className="play-triangle"></div>
        </div>
      </section>

      {/* CERTIFICATION SECTION */}
      <section className="hp-certification-section">
        <div className="hp-cert-left">
          <h2>Certification<br/>& Approvals</h2>
        </div>
        <div className="hp-cert-right">
          <div className="cert-box"><Image src="/Images/image 34.png" alt="Cert 1" fill style={{objectFit:"contain"}}/></div>
          <div className="cert-box"><Image src="/Images/image 35.png" alt="Cert 2" fill style={{objectFit:"contain"}}/></div>
          <div className="cert-box"><Image src="/Images/image 36.png" alt="Cert 3" fill style={{objectFit:"contain"}}/></div>
        </div>
      </section>

      {/* TRUSTED BY INDUSTRY LEADERS */}
      <section className="hp-trusted-section">
        <h2>Trusted by Industry<br/>Leaders</h2>
        <p>We partner with the best to deliver excellence across the UAE.<br/>Long-standing relationships built on trust.</p>
        <button className="btn-primary" style={{marginTop:"20px"}}>View All Partners</button>
        
        <div className="hp-trusted-grid">
          {[16,17,18,19,20,21,22].map(num => (
            <div className="hp-trusted-logo" key={num}>
              <Image src={`/Images/Home/Rectangle ${num}.png`} alt="Trusted Logo" fill style={{objectFit:"contain"}} />
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS WE'VE SUPPLIED */}
      <section className="hp-projects-section">
        <div className="projects-header">
          <h2>Projects We've Supplied</h2>
          <Link href="/projects" className="explore-link">Explore All Projects &rarr;</Link>
        </div>
        <div className="projects-grid">
          <div className="project-item large">
            <Image src="/Images/Home/Rectangle 23.png" alt="Project 1" fill style={{objectFit:"cover"}} />
            <div className="project-info">Solar Power Generation<br/><span>Abu Dhabi, UAE</span></div>
          </div>
          <div className="project-item small-top">
            <Image src="/Images/Home/Rectangle 24.png" alt="Project 2" fill style={{objectFit:"cover"}} />
          </div>
          <div className="project-item small-bottom-left">
            <Image src="/Images/Home/Rectangle 35.png" alt="Project 3" fill style={{objectFit:"cover"}} />
          </div>
          <div className="project-item small-bottom-right">
            <Image src="/Images/Home/Rectangle 36.png" alt="Project 4" fill style={{objectFit:"cover"}} />
          </div>
        </div>
      </section>

      {/* DOWNLOAD PROFILE BANNER */}
      <section className="hp-download-banner">
        <p>Our commitment to constant global partnerships and continuous technological advancement lets us<br/>communicate across multiple industries and distribution levels to deliver excellence and strict compliance.<br/>Without compromise.</p>
        <button className="hp-btn-dark-globe">
          <span className="globe-icon">🌍</span> Download Our Company Profile
        </button>
      </section>

      {/* NEWS & ANNOUNCEMENTS */}
      <section className="hp-news-section">
        <h2>News <span>&</span> Announcements</h2>
        <div className="news-cards">
          <div className="news-card">
            <div className="news-img"><Image src="/Images/Home/Rectangle 10.png" alt="News 1" fill style={{objectFit:"cover"}}/></div>
            <h4>Gulf Radiant Showcases New Tech at Middle East Energy 2025</h4>
            <p>We are proud to announce our successful exhibition at...</p>
          </div>
          <div className="news-card">
            <div className="news-img"><Image src="/Images/Home/Rectangle 11.png" alt="News 2" fill style={{objectFit:"cover"}}/></div>
            <h4>New Partnership with Palazzoli for UAE Distribution</h4>
            <p>Gulf Radiant has signed an exclusive agreement...</p>
          </div>
          <div className="news-card">
            <div className="news-img"><Image src="/Images/Home/Rectangle 12.png" alt="News 3" fill style={{objectFit:"cover"}}/></div>
            <h4>Expanding our Warehouse Facilities in Jafza</h4>
            <p>To better serve our growing client base we have...</p>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH / FOOTER TOP */}
      <section className="hp-contact-banner">
        <Image src="/Images/Home/Rectangle 37.png" alt="Contact BG" fill style={{objectFit:"cover", zIndex:0}} />
        <div className="hp-contact-overlay"></div>
        <div className="hp-contact-content">
          <div className="contact-text">
            <h2>Ready to Power Your Next Project?<br/>With Reliable Electrical Solutions</h2>
            <p>Get in touch with our experts today to discuss your requirements and get a quote.</p>
            <button className="btn-primary">Request a Quote</button>
          </div>
          <div className="contact-form-box">
            <h3>Get in Touch</h3>
            <form>
              <input type="text" placeholder="Full Name *" required />
              <div className="form-row">
                <input type="email" placeholder="Email *" required />
                <input type="text" placeholder="Phone *" required />
              </div>
              <textarea placeholder="Your Message Here..." rows={4}></textarea>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
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
