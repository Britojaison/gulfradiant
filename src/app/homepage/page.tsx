"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Homepage() {
  const [certIndex, setCertIndex] = useState(0);

  const certImages = [
    "image 82.png", "image 85.png", "image 86.png", "image 88.png", "image 89.png",
    "Rectangle 10.png", "Rectangle 11.png", "Rectangle 12.png"
  ];

  const nextCert = () => {
    setCertIndex((prev) => (prev + 1) % certImages.length);
  };

  const prevCert = () => {
    setCertIndex((prev) => (prev === 0 ? certImages.length - 1 : prev - 1));
  };

  const visibleCerts = [
    certImages[certIndex % certImages.length],
    certImages[(certIndex + 1) % certImages.length],
    certImages[(certIndex + 2) % certImages.length]
  ];

  const productLogos = [
    "image 3.png", "image 4.png", "image 6.png", "image 7.png", "image 9.png", "image 10.png",
    "image 11.png", "image 12.png", "image 13.png", "image 14.png", "image 15.png",
    "image 16.png", "image 17.png", "image 18.png", "image 19.png", "image 20.png",
    "image 21.png", "image 22.png", "image 23.png", "image 24.png", "image 25.png",
    "image 26.png", "image 27.png", "image 28.png", "image 29.png", "image 30.png",
    "image 31.png"
  ];

  return (
    <div className="homepage-wrapper">
      {/* HEADER */}
      <header className="hp-navbar">
        <div className="hp-navbar-logo">
          <Image src="/Images/logo.png" alt="Gulf Radiant" width={180} height={50} style={{ objectFit: "contain" }} />
        </div>
        <nav className="hp-navbar-nav">
          <Link href="/" className="active">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/productpage">Products</Link>
          <span className="dropdown">Useful Information</span>
          <Link href="/projects">Projects</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/certifications">Our Certifications</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="hp-hero-new">
        <Image src="/Images/Home/f6b8aed5ae226daa7b778061ebc1bdb0aaa5cd56.jpg" alt="Hero Background" fill style={{ objectFit: "cover" }} priority />
        <div className="hp-hero-overlay-new"></div>
        <div className="hp-hero-content-new">
          <h1>Powering Infrastructure<br />That Delivers</h1>
          <p>
            Gulf Radiant is an international trade partner.<br />
            We specialise in supplying a wide range of electrical items and<br />
            equipment to major infrastructure projects.
          </p>
          <Link href="/productpage" className="hp-btn-white-hero">
            Our Products <span style={{ marginLeft: "8px" }}>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* PRODUCTS & STATS (FULL SCROLL) */}
      <div className="hp-full-scroll-section">
        <section className="hp-products-dist">
          <h2>Products We Distribute</h2>

          <div className="hp-dist-marquee-wrapper">
            <div className="hp-dist-logos">
              {productLogos.map((logo, i) => (
                <div className="hp-dist-logo-item" key={`logo-1-${i}`}>
                  <Image src={`/Images/product/${logo}`} alt="Brand Logo" fill style={{ objectFit: "contain" }} />
                </div>
              ))}
              {/* Duplicate for infinite scroll effect */}
              {productLogos.map((logo, i) => (
                <div className="hp-dist-logo-item" key={`logo-2-${i}`}>
                  <Image src={`/Images/product/${logo}`} alt="Brand Logo" fill style={{ objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>

          <Link href="/productpage" className="hp-btn-orange" style={{ display: "inline-block", textAlign: "center" }}>
            View All
          </Link>
        </section>

        {/* STATS */}
        <section className="hp-stats-container">
          <div className="hp-stat-block">
            <h3>25<span>+</span></h3>
            <h4>Premium Quality Brands</h4>
            <p>We only stock products that<br />adhere to international safety<br />standards.</p>
          </div>
          <div className="hp-stat-divider"></div>
          <div className="hp-stat-block">
            <h3>30<span>+</span></h3>
            <h4>Years of Industry Experience</h4>
            <p>We only stock products that<br />adhere to international safety<br />standards.</p>
          </div>
          <div className="hp-stat-divider"></div>
          <div className="hp-stat-block">
            <h3>100<span>+</span></h3>
            <h4>Global Partners</h4>
            <p>We only stock products that<br />adhere to international safety<br />standards.</p>
          </div>
        </section>
      </div>

      {/* VIDEO BANNER */}
      <section className="hp-video-banner">
        <Image src="/Images/Home/video.jpg" alt="Video Placeholder" fill style={{ objectFit: "cover" }} />
        <div className="hp-play-btn">
          <div className="hp-play-triangle"></div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="hp-cert-section">
        <div className="hp-cert-content-inner">
          <div className="hp-cert-left">
            <div className="hp-cert-subtitle"><span className="hp-dot"></span> INDUSTRY CERTIFICATIONS</div>
            <h2>Certification<br />& Approvals</h2>
          </div>

          <div className="hp-cert-right-container">
            <div className="hp-cert-carousel">
              <span className="hp-cert-arrow" onClick={prevCert} style={{ cursor: "pointer", userSelect: "none" }}>&lt;</span>
              <div className="hp-cert-logos">
                {visibleCerts.map((cert, idx) => (
                  <div className="hp-cert-box" key={idx}>
                    <Image src={`/Images/Home/${cert}`} alt="Cert" fill style={{ objectFit: "contain", padding: "10px" }} />
                  </div>
                ))}
              </div>
              <span className="hp-cert-arrow" onClick={nextCert} style={{ cursor: "pointer", userSelect: "none" }}>&gt;</span>
            </div>

            <div className="hp-cert-btn-container">
              <button className="hp-btn-orange" style={{ fontSize: "14px", padding: "12px 24px" }}>View All Certificates</button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED LEADERS */}
      <section className="hp-trusted-section">
        <div className="hp-trusted-content">
          <div className="hp-trusted-left">
            <h2>Trusted by Industry<br />Leaders</h2>
            <p>We proudly distribute certified products from globally<br />recognized manufacturers serving infrastructure,<br />commercial, and industrial sectors.</p>
            <button className="hp-btn-orange" style={{ marginTop: "30px", padding: "14px 28px", fontSize: "14px" }}>View All Brand Partners</button>
          </div>
          <div className="hp-trusted-right">
            <div className="hp-trusted-grid-inner">
              {[
                "Rectangle 11 (1).png", "Rectangle 12 (1).png", "Rectangle 22.png",
                "Rectangle 20.png", "Rectangle 21.png", "Rectangle 16.png",
                "Rectangle 17.png", "Rectangle 18.png", "Rectangle 19.png"
              ].map((img, idx) => (
                <div className="hp-trusted-logo-box" key={idx}>
                  <Image src={`/Images/Home/${img}`} alt="Client Logo" fill style={{ objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS (MASONRY) */}
      <section className="hp-projects-section-new">
        <div className="hp-projects-top">
          <div className="hp-projects-title-area">
            <div className="hp-projects-subtitle"><span className="hp-dot"></span> PROJECTS</div>
            <h2>Projects We've Supplied</h2>
          </div>
          <Link href="/projects" className="hp-projects-link">Explore more Projects &#x2197;</Link>
        </div>
        <div className="hp-projects-masonry">
          <div className="hp-projects-col">
            <div className="hp-project-card">
              <Image src="/Images/Home/Rectangle 24.png" alt="Solar Power Plant" fill style={{ objectFit: "cover" }} />
              <div className="hp-project-overlay">
                <div className="hp-project-info">
                  <h4>Al-dhafra solar power plant</h4>
                  <p>Abu Dhabi, United Arab Emirates</p>
                </div>
              </div>
            </div>
            <div className="hp-project-card">
              <Image src="/Images/Home/Rectangle 23.png" alt="Uptown Tower" fill style={{ objectFit: "cover" }} />
              <div className="hp-project-overlay">
                <div className="hp-project-info">
                  <h4>Dubai Uptown Tower</h4>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hp-projects-col">
            <div className="hp-project-card">
              <Image src="/Images/Home/Rectangle 24 (1).png" alt="Etihad Rail" fill style={{ objectFit: "cover" }} />
              <div className="hp-project-overlay">
                <div className="hp-project-info">
                  <h4>Etihad Rail</h4>
                  <p>Abu Dhabi, United Arab Emirates</p>
                </div>
              </div>
            </div>
            <div className="hp-project-card">
              <Image src="/Images/Home/Rectangle 23 (1).png" alt="Waste to Energy" fill style={{ objectFit: "cover" }} />
              <div className="hp-project-overlay">
                <div className="hp-project-info">
                  <h4>Dubai Waste to Energy</h4>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="hp-quote-banner-new">
        <p><i>"Our strength lies in trusted global partnerships and a deep understanding of regional market needs. We are<br />committed to ensuring that every product we distribute meets the highest standards of quality, compliance,<br />and reliability."</i></p>
        <div className="hp-quote-author">
          <div className="hp-quote-avatar">
            <Image src="/Images/Home/Ellipse 3.png" alt="Author" fill style={{ objectFit: "cover" }} />
          </div>
          <span>Madhusudan Mathilakath</span>
        </div>
      </section>

      {/* NEWS */}
      <section className="hp-news-section-new">
        <div className="hp-news-header">
           <h2>News <span>&</span> Announcements</h2>
        </div>
        <div className="hp-news-grid">
           <div className="hp-news-card">
              <div className="hp-news-img"><Image src="/Images/Home/Rectangle 35.png" alt="News" fill style={{objectFit:"cover"}} /></div>
              <div className="hp-news-content">
                 <h4>Industry Expo 2025: Showcasing Advanced Electrical Solutions for Modern Infrastructure</h4>
                 <p>We participated in Industry Expo 2025, showcasing our electrical solutions and connecting with industry leaders to explore new opportunities and innovations.</p>
                 <div className="hp-news-meta">by Admin • 2025 • 2 Comments</div>
              </div>
           </div>
           <div className="hp-news-card">
              <div className="hp-news-img"><Image src="/Images/Home/Rectangle 36.png" alt="News" fill style={{objectFit:"cover"}} /></div>
              <div className="hp-news-content">
                 <h4>Delivering Reliable Electrical Solutions for Large-Scale Projects</h4>
                 <p>We participated in Industry Expo 2025, showcasing our electrical solutions and connecting with industry leaders to explore new opportunities and innovations.</p>
                 <div className="hp-news-meta">by Admin • 2025 • 2 Comments</div>
              </div>
           </div>
           <div className="hp-news-card">
              <div className="hp-news-img"><Image src="/Images/Home/Rectangle 37.png" alt="News" fill style={{objectFit:"cover"}} /></div>
              <div className="hp-news-content">
                 <h4>Introducing Advanced Electrical Solutions for Modern Infrastructure</h4>
                 <p>Expanding our product range, we are introducing a new lineup of high-quality electrical solutions to meet the growing demands of infrastructure and industrial projects.</p>
                 <div className="hp-news-meta">by Admin • 2025 • 3 Comments</div>
              </div>
           </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="hp-contact-banner-new">
        <div className="hp-contact-bg"><Image src="/Images/Home/git.jpg" alt="Contact BG" fill style={{ objectFit: "cover" }} /></div>
        <div className="hp-contact-overlay"></div>
        <div className="hp-contact-content">
          <div className="hp-contact-left">
            <h2>Ready to Power Your Next Project?<br />With Reliable Electrical Solutions</h2>
            <p>Explore our range of trusted electrical products and<br />solutions designed for infrastructure, industrial, and<br />commercial projects.</p>
            <button className="hp-btn-orange" style={{ marginTop: "15px", padding: "14px 28px" }}>Request a Quote</button>
          </div>
          <div className="hp-contact-right">
            <div className="hp-contact-formbox">
              <h3>Get in touch</h3>
              <form>
                <div className="hp-form-group">
                   <label>Full Name</label>
                   <input type="text" placeholder="Jhon Smith" />
                </div>
                <div className="hp-form-row">
                   <div className="hp-form-group hp-form-half">
                      <label>Email Address</label>
                      <input type="email" placeholder="john@email.com" />
                   </div>
                   <div className="hp-form-group hp-form-half">
                      <label>Phone Number</label>
                      <input type="text" placeholder="+91 XXXXXXXXX" />
                   </div>
                </div>
                <div className="hp-form-group">
                   <label>Project Details (Optional)</label>
                   <textarea placeholder="Tell us about your project..." rows={4}></textarea>
                </div>
                <button type="submit" className="hp-btn-orange-full" style={{marginTop: "5px"}}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* STANDARD FOOTER */}
      <footer className="hp-footer">
        <div className="hp-footer-content">
          <div className="hp-footer-grid">
            <div className="hp-footer-brand">
              <Image src="/Images/logo.png" alt="Gulf Radiant Logo" width={150} height={54} />
            </div>
            <div className="hp-footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/productpage">Products</Link></li>
                <li><Link href="/contact">Contact</Link></li>
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
    </div>
  );
}
