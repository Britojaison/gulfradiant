"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "@/components/MobileNav";

export default function Homepage() {
  const [certIndex, setCertIndex] = useState(0);

  const certImages = [
    { src: "/Images/Certificates/cert-dewa-logo.jpg", alt: "Kumwell - DEWA APPROVAL" },
    { src: "/Images/Certificates/cert-icv-logo.jpg", alt: "GR AD ICV Certificate" },
    { src: "/Images/Certificates/cert-icv-logo.jpg", alt: "GR ICV Certificate" },
    { src: "/Images/Certificates/cert-dewa-logo.jpg", alt: "Palazzoli - DEWA APPROVAL" },
    { src: "/Images/Certificates/cert-jsrs-logo.jpg", alt: "JSRS CERTIFICATE" },
    { src: "/Images/Certificates/cert-addc-logo.jpg", alt: "PITTAS - ADDC Pre-Qualification" },
    { src: "/Images/Certificates/cert-addc-logo.jpg", alt: "KUMWELL - ADDC Pre-Qualification" },
    { src: "/Images/Certificates/cert-addc-logo.jpg", alt: "Gulf Radiant Electricals - ADDC Pre-Qualification" },
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
    "kumwell.png", "pittas.jpg", "obo.png", "dietzel.png", "siechem.png", "cabex.png",
    "BAHRA CABLES.svg", "CCG Logo.png", "CITEL LOGO.png", "COSMOPLAST LOGO.avif",
    "FRATER1-LOGO.webp",
    "HAUFF TECHNIK LOGO.png", "LITETECH LOGO.webp", "NEELKANTH CABLE LOGO.png",
    "NVENT CADDY LOGO.svg", "NVENT ERICO LOGO.svg", "OBSTA LOGO.png",
    "PALAZZOLI GROUP LOGO.png", "PSI LOGO.png", "ROSE LOGO.png",
    "SIRENA LOGO.png", "TEKAB CABLES.png", "TIGO LOGO.png",
    "TUBIFOR LOGO.png", "WALLMAX LOGO.png"
  ];

  return (
    <div className="homepage-wrapper">
      {/* HEADER */}
      <header className="hp-navbar">
        <div className="hp-navbar-logo">
          <Image src="/Images/Brand_partners/Frame 76.png" alt="Gulf Radiant" width={240} height={67} style={{ objectFit: "contain" }} />
        </div>
        <nav className="hp-navbar-nav">
          <Link href="/homepage" className="active">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/productpage">Products</Link>
          <span className="dropdown">Useful Information</span>
          <Link href="/projects">Projects</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/certifications">Our Certifications</Link>
          <a href="#contact">Contact</a>
        </nav>
        <MobileNav activePage="Home" />
      </header>

      {/* HERO */}
      <section className="hp-hero-new">
        <Image src="/Images/Home/herobanner.png" alt="Hero Background" fill style={{ objectFit: "cover" }} priority />
        <div className="hp-hero-overlay-new"></div>
        <div className="hp-hero-content">
          <div className="hp-hero-subtitle">
            <span className="hp-dot"></span> TRUSTED SUPPLIER &bull; INDUSTRIAL PROJECTS &bull; GCC WIDE
          </div>
          <h1>Powering Infrastructure <br />That Delivers</h1>

          <a href="#contact" className="hp-btn-hero-quote">
            Request a Quote <span className="arrow">&rarr;</span>
          </a>
        </div>
      </section>

      {/* PRODUCTS & STATS (FULL SCROLL) */}
      <div className="hp-full-scroll-section">
        <section className="hp-products-dist">
          <div className="hp-dist-header">
            <div className="hp-dist-subtitle"><span className="hp-dot"></span> WHERE WE OPERATE</div>
            <h2><span>Products</span> We Distribute</h2>
          </div>

          <div className="hp-dist-content-container">
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
          </div>

          <div className="hp-dist-btn-container">
            <Link href="/productpage" className="hp-btn-orange-rect">
              View All
            </Link>
          </div>
        </section>

        {/* STATS */}
        <section className="hp-stats-container">
          <div className="hp-stat-block">
            <h3>25<span>+</span></h3>
            <h4>Years of professionalism</h4>
            <p>Delivering reliable electrical solutions<br />with proven industry expertise</p>
          </div>
          <div className="hp-stat-divider"></div>
          <div className="hp-stat-block">
            <h3>30<span>+</span></h3>
            <h4>Countries served worldwide</h4>
            <p>Supporting projects across global<br />markets with a strong supply network</p>
          </div>
          <div className="hp-stat-divider"></div>
          <div className="hp-stat-block">
            <h3>100<span>+</span></h3>
            <h4>Product categories</h4>
            <p>Offering a wide range of specialized<br />products for diverse industrial needs</p>
          </div>
        </section>
      </div>

      {/* VIDEO BANNER */}
      <section className="hp-video-banner">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hp-video-element"
        >
          <source src="/Images/Home/video.mp4" type="video/mp4" />
        </video>
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
                    <Image src={cert.src} alt={cert.alt} fill style={{ objectFit: "contain", padding: "20px" }} />
                  </div>
                ))}
              </div>
              <span className="hp-cert-arrow" onClick={nextCert} style={{ cursor: "pointer", userSelect: "none" }}>&gt;</span>
            </div>

            <div className="hp-cert-btn-container">
              <Link href="/certifications" className="hp-btn-orange-rect" style={{ width: "213px" }}>View All Certificates</Link>
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
            <Link href="/clients" className="hp-btn-orange-rect" style={{ width: "213px", marginTop: "30px" }}>View All Clients</Link>
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
        <div className="hp-projects-top-fixed">
          <div className="hp-projects-subtitle"><span className="hp-dot"></span> PROJECTS</div>
          <h2><span>Projects</span> We've Supplied</h2>
        </div>
        <div className="hp-projects-masonry">
          <div className="hp-projects-col">
            <div className="hp-project-card">
              <Image src="/Images/Home/Rectangle 23 (1).png" alt="Waste to Energy" fill style={{ objectFit: "cover" }} />
              <div className="hp-project-overlay">
                <div className="hp-project-info">
                  <h4>Dubai Waste to Energy</h4>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
            <div className="hp-project-card">
              <Image src="/Images/Home/Rectangle 24.png" alt="Solar Power Plant" fill style={{ objectFit: "cover" }} />
              <div className="hp-project-overlay">
                <div className="hp-project-info">
                  <h4>Al-dhafra solar power plant</h4>
                  <p>Abu Dhabi, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hp-projects-col">
            <Link href="/projects" className="hp-projects-link">Explore more Projects &#x2197;</Link>
            <div className="hp-project-card">
              <Image src="/Images/Home/Rectangle 23.png" alt="Uptown Tower" fill style={{ objectFit: "cover" }} />
              <div className="hp-project-overlay">
                <div className="hp-project-info">
                  <h4>Dubai Uptown Tower</h4>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
            <div className="hp-project-card">
              <Image src="/Images/Home/Rectangle 24 (1).png" alt="Etihad Rail" fill style={{ objectFit: "cover" }} />
              <div className="hp-project-overlay">
                <div className="hp-project-info">
                  <h4>Etihad Rail</h4>
                  <p>Abu Dhabi, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="hp-quote-banner-new">
        <p><i>"Our strength lies in trusted global partnerships and a deep understanding<br />of regional market needs, ensuring every product meets the highest<br />standards of quality and reliability."</i></p>
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
            <div className="hp-news-img"><Image src="/Images/Home/Rectangle 35.png" alt="News" fill style={{ objectFit: "cover" }} /></div>
            <div className="hp-news-content">
              <h4>Industry Expo 2025: Showcasing Advanced Electrical Solutions for Modern Infrastructure</h4>
            </div>
          </div>
          <div className="hp-news-card">
            <div className="hp-news-img"><Image src="/Images/Home/Rectangle 36.png" alt="News" fill style={{ objectFit: "cover" }} /></div>
            <div className="hp-news-content">
              <h4>Delivering Reliable Electrical Solutions for Large-Scale Projects</h4>
            </div>
          </div>
          <div className="hp-news-card">
            <div className="hp-news-img"><Image src="/Images/Home/Rectangle 37.png" alt="News" fill style={{ objectFit: "cover" }} /></div>
            <div className="hp-news-content">
              <h4>Introducing Advanced Electrical Solutions for Modern Infrastructure</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="hp-contact-banner-new" id="contact">
        <div className="hp-contact-bg"><Image src="/Images/Home/git.jpg" alt="Contact BG" fill style={{ objectFit: "cover" }} /></div>
        <div className="hp-contact-overlay"></div>
        <div className="hp-contact-content">
          <div className="hp-contact-left">
            <h2>Ready to Power Your Next Project?<br />With Reliable Electrical Solutions</h2>
            <p>Explore our range of trusted electrical products and<br />solutions designed for infrastructure, industrial, and<br />commercial projects.</p>

            {/* Location 1 - Abu Dhabi */}
            <div className="hp-location-row">
              <div className="hp-location-map">
                <iframe
                  src="https://www.google.com/maps?q=24.380814,54.510216&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gulf Radiant - Abu Dhabi Office"
                ></iframe>
              </div>
              <div className="hp-location-info">
                <h4>Abu Dhabi Office</h4>
                <p>GULF RADIANT ELECTRICALS L.L.C</p>
                <p>P.O. Box: 91366, M-9,<br />Abu Dhabi, U.A.E</p>
                <div className="hp-location-contact">
                  <a href="mailto:infoabu@gulfradiant.com">infoabu@gulfradiant.com</a>
                  <a href="tel:+97124488449">+971 2 4488449</a>
                  <a href="tel:+971506409192">+971 50 6409192</a>
                </div>
              </div>
            </div>

            {/* Location 2 - Dubai */}
            <div className="hp-location-row">
              <div className="hp-location-map">
                <iframe
                  src="https://www.google.com/maps?q=25.297965,55.385053&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gulf Radiant - Dubai Office"
                ></iframe>
              </div>
              <div className="hp-location-info">
                <h4>Dubai Office</h4>
                <p>GULF RADIANT L.L.C</p>
                <p>P.O. Box: 26426, Amman Street,<br />Al Qusais Industrial Area - 3,<br />Dubai, United Arab Emirates</p>
                <div className="hp-location-contact">
                  <a href="mailto:info@gulfradiant.com">info@gulfradiant.com</a>
                  <a href="tel:+97142671662">+971 4 2671662 / 882</a>
                  <span>Fax: +971 4 2671883</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hp-contact-right" id="contact-form">
            <div className="hp-contact-formbox">
              <h3>Get in touch</h3>
              <form>
                <div className="hp-form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Jhon Smith" />
                </div>
                <div className="hp-form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Jhon Smith" suppressHydrationWarning />
                </div>
                <div className="hp-form-row">
                  <div className="hp-form-group hp-form-half">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@email.com" suppressHydrationWarning />
                  </div>
                  <div className="hp-form-group hp-form-half">
                    <label>Phone Number</label>
                    <input type="text" placeholder="+91 XXXXXXXXX" suppressHydrationWarning />
                  </div>
                </div>
                <div className="hp-form-group">
                  <label>Country</label>
                  <select>
                    <option>-None-</option>
                    <option>United Arab Emirates</option>
                    <option>Saudi Arabia</option>
                    <option>Oman</option>
                    <option>Qatar</option>
                    <option>Bahrain</option>
                    <option>Kuwait</option>
                    <option>India</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="hp-form-group">
                  <label>Industry</label>
                  <select>
                    <option>-None-</option>
                    <option>Electrical Engineering</option>
                    <option>Electro-Mechanical</option>
                    <option>Building Materials / Construction</option>
                    <option>Oil & Gas / Oil-field</option>
                    <option>Industrial Engineering</option>
                    <option>Infrastructure Projects</option>
                    <option>Petrochemical / Refinery</option>
                    <option>Real Estate / Housing</option>
                    <option>Aviation / Airports</option>
                    <option>Ports / Marine</option>
                  </select>
                </div>
                <div className="hp-form-group">
                  <label>Project Details (Optional)</label>
                  <textarea placeholder="Tell us about your project..." rows={4} suppressHydrationWarning></textarea>
                </div>
                <button type="submit" className="hp-btn-orange-full" style={{ marginTop: "5px" }} suppressHydrationWarning>Send Message</button>
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
                <li><a href="#contact">Contact</a></li>
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
    </div>
  );
}
