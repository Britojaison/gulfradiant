"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("Oil & Gas");

  const segmentsData: { [key: string]: string[] } = {
    "Oil & Gas": [
      "Oil & Gas Fields — Offshore & Onshore",
      "Hydro-carbon & Petro-chemical Projects",
      "Refineries & Processing Plants"
    ],
    "Infrastructure": [
      "Roads, Bridges & Tunnels",
      "Railway & Metro Projects",
      "Large Scale Housing Development",
      "Civil Construction Projects"
    ],
    "Power & Utilities": [
      "Power Plants & Sub-stations",
      "Transmission & Distribution",
      "Water & Desalination Plants",
      "Sewage Treatment Plants",
      "District Cooling Plants"
    ],
    "Aviation & Marine": [
      "Airports & Aircraft Hangars",
      "Civil Aviation Projects",
      "Seaports & Reefer Platforms",
      "Container Terminals & Ship Chandlers"
    ],
    "Industrial": [
      "Cement, Sugar & Paper Plants",
      "Steel & Aluminium Plants",
      "Chemical & Fertilizer Plants",
      "Golf Courses & Landscaping"
    ]
  };

  const brandPartners = [
    "image 48.png", "image 49.png", "image 50.png", "image 51.png",
    "image 52.png", "image 53.png", "image 54.png"
  ];

  const productLogos = [
    "image 3.png", "image 4.png", "image 6.png", "image 7.png", "image 9.png", "image 10.png",
    "image 11.png", "image 12.png", "image 13.png", "image 14.png", "image 15.png",
    "image 16.png", "image 17.png", "image 18.png", "image 19.png", "image 20.png",
    "image 21.png", "image 22.png", "image 23.png", "image 24.png", "image 25.png",
    "image 26.png", "image 27.png", "image 28.png", "image 29.png", "image 30.png",
    "image 31.png"
  ];

  const certificates = [
    "image 82.png", "image 85.png", "image 86.png", "image 88.png", "image 89.png",
    "Rectangle 10.png", "Rectangle 11.png", "Rectangle 12.png"
  ];

  return (
    <div className="about-page-wrapper">
      {/* HEADER */}
      <header className="hp-navbar">
        <div className="hp-navbar-logo">
          <Image src="/Images/logo.png" alt="Gulf Radiant" width={180} height={50} style={{ objectFit: "contain" }} />
        </div>
        <nav className="hp-navbar-nav">
          <Link href="/homepage">Home</Link>
          <Link href="/about" className="active">About</Link>
          <Link href="/productpage">Products</Link>
          <span className="dropdown">Useful Information</span>
          <Link href="/projects">Projects</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/certifications">Our Certifications</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="about-hero">
        <Image 
          src="/Images/About/aboutimg.jpg" 
          alt="Engineering Reliability" 
          fill 
          style={{ objectFit: "cover" }} 
          priority 
        />
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <div className="about-tag">GULF RADIANT</div>
          <h1>Engineering <br />Reliability. <br />Delivering Scale.</h1>
          <p>
            Gulf Radiant is an international trade partner.<br />
            We specialise in supplying a wide range of electrical items and<br />
            equipment to major infrastructure projects.
          </p>
        </div>
      </section>

      {/* ABOUT GULF RADIANT SECTION */}
      <section className="about-main-info">
        <div className="about-info-container">
          <div className="about-image-side">
            <Image 
              src="/Images/About/about-facility 1.jpg" 
              alt="Facility" 
              width={600} 
              height={550} 
              className="about-facility-img"
              style={{ objectFit: "cover", borderRadius: "2px" }}
            />
          </div>
          <div className="about-text-side">
            <div className="section-subtitle">
              <span className="orange-square"></span> WHO WE ARE
            </div>
            
            <h2 className="about-main-title">
              ABOUT <span className="text-orange">GULF RADIANT</span>
            </h2>

            <div className="info-blocks-wrapper">
              <div className="info-block">
                <h3>Our Identity</h3>
                <p>
                  Since 2001, Gulf Radiant has built a reputation of professionalism and trust as a one-stop solution provider for electrical, electro-mechanical, building material, oil field, industrial and allied technical engineering products.
                </p>
              </div>

              <div className="info-block">
                <h3>Where We Operate</h3>
                <p>
                  Based in UAE (Dubai & Abu Dhabi), we cater to the GCC, Middle East, Africa, Indian Sub-continent and other emerging markets across 15+ countries.
                </p>
              </div>

              <div className="info-block">
                <h3>Our Strength</h3>
                <p>
                  Dedicated & qualified engineers with in-depth product knowledge and vast experience in providing prompt solutions to all our clientele.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY GULF RADIANT SECTION */}
      <section className="why-gr">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">
              <span className="orange-square"></span> WHY CHOOSE US
            </div>
            <h2>Why <span className="text-orange">Gulf Radiant?</span></h2>
          </div>

          <div className="why-gr-grid">
            <div className="why-gr-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF5B05" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h4>Total MEP Solutions</h4>
              <p>Complete electrical, mechanical & plumbing from one source</p>
            </div>
            <div className="why-gr-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF5B05" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4>Fast Response Time</h4>
              <p>Prompt delivery meeting the tightest project deadlines</p>
            </div>
            <div className="why-gr-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF5B05" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg>
              </div>
              <h4>Precision Execution</h4>
              <p>Quality-first approach on every single project</p>
            </div>
            <div className="why-gr-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF5B05" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Certified Quality</h4>
              <p>ISO certified with international standards compliance</p>
            </div>
            <div className="why-gr-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF5B05" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h4>Technical Expertise</h4>
              <p>20+ years of specialized engineering knowledge</p>
            </div>
            <div className="why-gr-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF5B05" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h4>Regional Reach</h4>
              <p>Quality-first approach on every single project</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY CAPABILITIES */}
      <section className="capabilities">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">
              <span className="orange-square"></span> What We Handle
            </div>
            <h2>Company <span className="text-orange">Capabilities</span></h2>
          </div>

          <div className="capabilities-grid">
            <div className="cap-column">
              <div className="cap-num">01</div>
              <h4>Electrical</h4>
              <div className="cap-line"></div>
              <ul>
                <li>LV/MV Switchgear & Panels</li>
                <li>Power & Distribution Transformers</li>
                <li>Cables & Cable Management</li>
                <li>Lighting & Emergency Systems</li>
              </ul>
            </div>
            <div className="cap-column">
              <div className="cap-num">02</div>
              <h4>Instrumentation</h4>
              <div className="cap-line"></div>
              <ul>
                <li>Process Control Instruments</li>
                <li>Flow & Level Measurement</li>
                <li>Pressure & Temperature Gauges</li>
                <li>Calibration Equipment</li>
              </ul>
            </div>
            <div className="cap-column">
              <div className="cap-num">03</div>
              <h4>Automation</h4>
              <div className="cap-line"></div>
              <ul>
                <li>PLC & SCADA Systems</li>
                <li>Variable Frequency Drives</li>
                <li>Motor Control Centers</li>
                <li>Building Management Systems</li>
              </ul>
            </div>
            <div className="cap-column">
              <div className="cap-num">04</div>
              <h4>Mechanical Supply</h4>
              <div className="cap-line"></div>
              <ul>
                <li>Valves & Actuators</li>
                <li>Pumps & Compressors</li>
                <li>Hydraulic & Pneumatic Systems</li>
                <li>Piping & Fittings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-subtitle">
            <span className="orange-square"></span> Our Journey
          </div>
          <h2 className="timeline-title">Since 2001 &rarr; <span className="text-orange">Today</span></h2>

          <div className="timeline-labels">
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="time-dot"></div>
              <div className="time-year">2001</div>
              <h4>Founded</h4>
              <p>Established in Dubai, UAE</p>
            </div>
            <div className="timeline-item">
              <div className="time-dot"></div>
              <div className="time-year">2006</div>
              <h4>Regional Expansion</h4>
              <p>Extended operations across GCC</p>
            </div>
            <div className="timeline-item">
              <div className="time-dot"></div>
              <div className="time-year">2012</div>
              <h4>500+ Projects</h4>
              <p>Major milestone in project delivery</p>
            </div>
            <div className="timeline-item">
              <div className="time-dot"></div>
              <div className="time-year">2018</div>
              <h4>ISO Certified</h4>
              <p>Achieved international quality standards</p>
            </div>
            <div className="timeline-item">
              <div className="time-dot"></div>
              <div className="time-year">Today</div>
              <h4>15+ Countries</h4>
              <p>Serving clients across the globe</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTELE SECTION */}
      <section className="clientele">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">
              <span className="orange-square"></span> Our Reach
            </div>
            <h2>Clientele & <span className="text-orange">Target Segments</span></h2>
          </div>

          <div className="clientele-content">
            <div className="clientele-tabs">
              {Object.keys(segmentsData).map((tab) => (
                <button 
                  key={tab}
                  className={`segment-tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="clientele-info-side">
              <div className="info-box">
                <h4>{activeTab}</h4>
                <ul>
                  {segmentsData[activeTab].map((item, idx) => (
                    <li key={idx}>
                      <span className="orange-dash">&mdash;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY LEADERS */}
      <section className="trusted-leaders">
        <div className="container">
          <h2 className="trusted-title">Trusted by <span className="text-orange">Industry Leaders</span></h2>
          
          <div className="hp-dist-marquee-wrapper" style={{ marginTop: "30px", overflow: "hidden", display: "flex", width: "100%" }}>
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
      </section>



      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <h2>Let's Build Your <br /><span className="text-orange">Next Project</span></h2>
          <div className="cta-btns">
            <Link href="/contact" className="btn-orange">Contact </Link>
            <Link href="#" className="btn-outline-dark">Download Profile</Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="hp-footer">
        <div className="hp-footer-content">
          <div className="hp-footer-grid">
            <div className="hp-footer-brand">
              <Image src="/Images/logo.png" alt="Gulf Radiant Logo" width={150} height={54} />
            </div>
            <div className="hp-footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><Link href="/homepage">Home</Link></li>
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

      <style jsx global>{`
        .about-page-wrapper {
          font-family: 'Inter', sans-serif;
          color: #1a1a1a;
          overflow-x: hidden;
        }
        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 80px;
        }
        .text-center { text-align: center; }
        .justify-center { justify-content: center; }
        .flex { display: flex; }
        
        .section-header { margin-bottom: 30px; }
        .section-subtitle {
          font-family: var(--font-geist-mono), monospace;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0%;
          line-height: 100%;
          text-transform: uppercase;
          color: #000000;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          vertical-align: middle;
        }
        .text-orange { color: #FF5B05 !important; }
        .orange-square {
          width: 8px;
          height: 8px;
          background: #B43E00;
          margin-right: 12px;
          display: inline-block;
          flex-shrink: 0;
        }
        h2 { font-size: 42px; font-weight: 700; line-height: 1.1; letter-spacing: -0.5px; }
        h3 { font-size: 32px; font-weight: 700; margin-bottom: 25px; letter-spacing: -0.5px; }
        p { color: #555; line-height: 1.7; font-size: 15px; }

        /* HERO */
        .about-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          padding-left: 80px;
        }
        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%);
          z-index: 1;
        }
        .about-hero-content {
          position: relative;
          z-index: 2;
          color: white;
          max-width: 700px;
        }
        .about-tag {
          font-family: var(--font-geist-mono), monospace;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 2px;
          line-height: 100%;
          margin-bottom: 25px;
          color: rgba(255, 255, 255, 0.8);
        }
        .about-hero-content h1 {
          font-size: 64px;
          font-weight: 700;
          line-height: 1.05;
          margin-bottom: 30px;
          letter-spacing: -1px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        .about-hero-content p {
          color: rgba(255,255,255,0.9);
          font-size: 16px;
          line-height: 1.6;
        }

        /* MAIN INFO */
        .about-main-info { padding: 100px 0 0px; background: #fff; }
        .about-info-container {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          gap: 80px;
          align-items: flex-start;
          padding: 0 80px;
        }
        .about-image-side { 
          flex: 0 0 630px; 
          position: relative;
          aspect-ratio: 630 / 730;
        }
        .about-facility-img { 
          object-fit: cover; 
          border-radius: 2px;
        }
        .about-text-side { flex: 1; padding-top: 20px; }
        .about-main-title {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 48px;
          font-weight: 600;
          line-height: 100%;
          margin-bottom: 50px;
          letter-spacing: 0%;
          color: #000000;
          vertical-align: middle;
        }
        .info-blocks-wrapper {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .info-block { 
          border-left: 2px solid #FF5B05;
          padding-left: 30px;
        }
        .info-block h3 { 
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 30px; 
          font-weight: 500; 
          margin-bottom: 12px; 
          color: #1a1a1a; 
          line-height: 100%;
          letter-spacing: 0%;
        }
        .info-block p { 
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 17px; 
          color: #555; 
          line-height: 100%; 
          font-weight: 400;
          letter-spacing: 0%;
        }

        /* WHY GR NEW */
        .why-gr { padding: 0px 0 80px; background: #fff; }
        .why-gr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          position: relative;
          background-image: 
            linear-gradient(to bottom, rgba(0,0,0,0) 2%, #cccccc 15%, #cccccc 85%, rgba(0,0,0,0) 98%),
            linear-gradient(to bottom, rgba(0,0,0,0) 2%, #cccccc 15%, #cccccc 85%, rgba(0,0,0,0) 98%),
            linear-gradient(to right, rgba(0,0,0,0) 2%, #cccccc 15%, #cccccc 85%, rgba(0,0,0,0) 98%);
          background-size: 
            1px 100%, 
            1px 100%, 
            100% 1px;
          background-position: 
            33.333% 0, 
            66.666% 0, 
            0 50%;
          background-repeat: no-repeat;
          margin-top: 50px;
        }
        .why-gr-item {
          padding: 50px 40px;
          border: none;
          transition: all 0.4s ease;
          position: relative;
          background: transparent;
          border-radius: 4px;
        }
        .why-gr-item:hover {
          z-index: 5;
          background: #FF5B05;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(255, 91, 5, 0.25);
          border-color: transparent;
        }
        .why-gr-item:hover h4, 
        .why-gr-item:hover p {
          color: white;
        }
        .why-gr-item:hover .feature-icon svg {
          stroke: white;
        }
        .why-gr-item .feature-icon { margin-bottom: 30px; }
        .why-gr-item h4 { 
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 26px; 
          font-weight: 500; 
          margin-bottom: 15px; 
          letter-spacing: 0%; 
          line-height: 100%;
          vertical-align: middle;
        }
        .why-gr-item p { 
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 20px; 
          color: #777; 
          line-height: 100%; 
          font-weight: 400;
          letter-spacing: 0%;
          vertical-align: middle;
        }

        /* CAPABILITIES */
        .capabilities { padding: 80px 0; background: #fff; }
        .capabilities .container { max-width: 1360px; }
        .capabilities .section-header h2 { font-size: 52px; font-weight: 600; letter-spacing: -1.5px; }
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin: 40px auto 0;
          width: 100%;
          max-width: 1280px;
          height: 308px;
          border: 1px solid #eeeeee;
          border-right: none;
        }
        .cap-column {
          padding: 40px 30px;
          height: 100%;
          border-right: 1px solid #eeeeee;
          background: white;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .cap-column:hover {
          background: #000000;
          border-right-color: #000000;
        }
        .cap-num {
          font-size: 11px;
          font-family: monospace;
          color: #999;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .cap-column h4 { 
          font-size: 20px; 
          font-weight: 500; 
          color: #1a1a1a;
          margin-bottom: 18px;
          transition: color 0.3s;
        }
        .cap-column:hover h4 {
          color: #FF5B05;
        }
        .cap-line {
          width: 35px;
          height: 2px;
          background: #FF5B05;
          margin-bottom: 26px;
        }
        .cap-column ul { list-style: none; }
        .cap-column ul li {
          font-size: 12px;
          color: #777;
          margin-bottom: 14px;
          padding-left: 16px;
          position: relative;
          transition: color 0.3s;
          white-space: nowrap;
        }
        .cap-column:hover ul li {
          color: #999;
        }
        .cap-column ul li::before {
          content: '';
          width: 4px;
          height: 4px;
          background: #FF5B05;
          position: absolute;
          left: 0;
          top: 7px;
        }

        /* TIMELINE */
        .timeline-section { padding: 100px 0; background: #fff; }
        .timeline-title { font-size: 48px; letter-spacing: -1px; margin-bottom: 60px; }
        .timeline-labels {
          display: flex;
          justify-content: space-between;
          position: relative;
          padding-top: 25px;
        }
        .timeline-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: #e0e0e0;
          z-index: 1;
        }
        .timeline-item {
          flex: 1;
          position: relative;
          z-index: 2;
          text-align: left;
          padding-right: 30px;
        }
        .time-dot {
          width: 8px;
          height: 8px;
          background: #FF5B05;
          position: absolute;
          top: -38px;
          left: 0;
        }
        .time-year { font-size: 24px; font-weight: 600; color: #FF5B05; margin-bottom: 10px; }
        .timeline-item h4 { font-size: 18px; font-weight: 500; margin-bottom: 8px; color: #1a1a1a; }
        .timeline-item p { font-size: 14px; color: #777; line-height: 1.5; margin: 0; }

        /* CLIENTELE */
        .clientele { padding: 100px 0; background: #fff; }
        .clientele-content {
          display: flex;
          margin: 60px auto 0;
          width: 100%;
          max-width: 1280px;
          height: 321px;
          border: 1px solid #eeeeee;
        }
        .clientele-tabs { 
          flex: 0 0 35%;
          border-right: 1px solid #eeeeee;
          display: flex;
          flex-direction: column;
        }
        .segment-tab {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          background: #fff;
          color: #000;
          padding: 0;
          border: none;
          border-bottom: 1px solid #eeeeee;
          font-weight: 500;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .segment-tab:last-child {
          border-bottom: none;
        }
        .segment-tab:hover {
          background: #fdfdfd;
        }
        .segment-tab.active {
          background: #000;
          color: #fff;
        }
        .clientele-info-side { 
          flex: 1; 
          background: #fff;
        }
        .info-box {
          padding: 50px 80px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .info-box h4 { font-size: 20px; font-weight: 500; margin-bottom: 30px; color: #000; }
        .info-box ul { list-style: none; }
        .info-box ul li {
          font-size: 15px;
          color: #777;
          margin-bottom: 20px;
          position: relative;
          padding-left: 25px;
        }
        .orange-dash {
          color: #FF5B05;
          position: absolute;
          left: 0;
        }

        /* TRUSTED */
        .trusted-leaders { padding: 60px 0; background: #fff; overflow: hidden; }
        .trusted-title { font-size: 48px; letter-spacing: -1px; text-align: left; margin-bottom: 0px; }
        
        .hp-dist-marquee-wrapper {
          display: flex;
          overflow: hidden;
          width: 100%;
        }
        .hp-dist-logos {
          display: flex;
          align-items: center;
          gap: 35px;
          animation: marquee 80s linear infinite;
          padding-right: 35px;
          width: max-content;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hp-dist-logo-item {
          position: relative;
          width: 150px;
          height: 65px;
          flex-shrink: 0;
          opacity: 0.8;
          transition: 0.3s;
        }
        .hp-dist-logo-item:hover {
          opacity: 1;
        }



        /* CTA */
        .cta-section {
          padding: 100px 0;
          background: #fff;
          text-align: center;
        }
        .cta-section h2 { font-size: 56px; margin-bottom: 40px; line-height: 1.1; letter-spacing: -2px; }
        .cta-btns { display: flex; justify-content: center; gap: 20px; }
        .btn-orange {
          background: #FF5B05;
          color: white;
          padding: 18px 45px;
          border-radius: 2px;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          transition: background 0.3s;
        }
        .btn-orange:hover { background: #d05303; }
        .btn-outline-dark {
          background: white;
          color: #000;
          padding: 18px 45px;
          border-radius: 2px;
          font-weight: 700;
          text-decoration: none;
          border: 1px solid #000;
          display: inline-block;
          transition: all 0.3s;
        }
        .btn-outline-dark:hover { background: #000; color: #fff; }

        @media (max-width: 1024px) {
          .about-hero-content h1 { font-size: 52px; }
          .about-info-container { flex-direction: column; gap: 60px; }
          .about-image-side { flex: 0 0 auto; width: 100%; }
          .why-gr-grid { grid-template-columns: repeat(2, 1fr); }
          .capabilities-grid { grid-template-columns: repeat(2, 1fr); }
          .clientele-content { flex-direction: column; }
          .clientele-tabs { flex: 0 0 auto; }
          .trusted-grid { gap: 30px; }
          .certified-approvals .certs-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 600px) {
          .why-gr-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
