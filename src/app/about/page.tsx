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
    "kumwell.png", "pittas.jpg", "obo.png", "dietzel.png", "siechem.png", "cabex.png",
    "BAHRA CABLES.svg", "CCG Logo.png", "CITEL LOGO.png", "COSMOPLAST LOGO.avif",
    "FRATER1-LOGO.webp",
    "HAUFF TECHNIK LOGO.png", "LITETECH LOGO.webp", "NEELKANTH CABLE LOGO.png",
    "NVENT CADDY LOGO.svg", "NVENT ERICO LOGO.svg", "OBSTA LOGO.png",
    "PALAZZOLI GROUP LOGO.png", "PSI LOGO.png", "ROSE LOGO.png",
    "SIRENA LOGO.png", "TEKAB CABLES.png", "TIGO LOGO.png",
    "TUBIFOR LOGO.png", "WALLMAX LOGO.png"
  ];

  const certificates = [
    "image 82.png", "image 85.png", "image 86.png", "image 88.png", "image 89.png",
    "Rectangle 10.png", "Rectangle 11.png", "Rectangle 12.png"
  ];

  return (
    <div className="about-page-wrapper">
      {/* HERO SECTION */}
      <section className="about-hero">
        <Image 
          src="/Images/About/aboutimg.jpg" 
          alt="Engineering Reliability" 
          fill 
          sizes="100vw"
          style={{ objectFit: "cover" }} 
          priority 
        />
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <div className="about-tag">
            <span className="orange-square"></span>
            ABOUT THE COMPANY
          </div>
          <h1>Engineering <br />Reliability. <br />Delivering Scale.</h1>

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

      {/* DIVISIONS SECTION */}
      <section className="divisions-section">
        <div className="container">
          <div className="division-card">
            <div className="div-header">
              <div className="div-icon">
                <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#FF5B05" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 22L12 2l4 20"/><path d="M3 14h18"/><path d="M5 9h14"/><path d="M10 22l-2-8"/><path d="M14 22l2-8"/><circle cx="3" cy="14" r="1"/><circle cx="21" cy="14" r="1"/><circle cx="5" cy="9" r="1"/><circle cx="19" cy="9" r="1"/></svg>
              </div>
              <h3>Electrical Division</h3>
            </div>
            <p>We are authorized distributors & stockists of many reputed Electrical Engineering Products which fully comply with all engineering norms and standards. With years of cumulative experience covering markets spanning various countries, our Electrical Division has the confidence & capability to meet all our clients' requirements & deadlines promptly & efficiently..</p>
          </div>
          
          <div className="division-card">
            <div className="div-header">
              <div className="div-icon">
                <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#FF5B05" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 22H2"/><path d="M4 22V10l3 2V8l4 3V6l4 3V4h3v18"/><path d="M16 14h2"/><path d="M16 18h2"/><path d="M10 18h2"/><path d="M6 3c.5 0 2-2 3-2"/></svg>
              </div>
              <h3>Industrial Division</h3>
            </div>
            <p>The Industrial division of Gulf Radiant caters to a wide range of products & solutions suited for various industries, viz.., Metallurgical, Manufacturing, Oil&Gas, Infrastructure & allied fields, with specialization in Hydraulics, Pneumatics, Instrumentation, Industrial Automation, Welding, Cutting, Metal alloys, Industrial tools etc...</p>
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
                   <Image src={`/Images/product/${logo}`} alt="Brand Logo" fill sizes="(max-width: 768px) 210px, 280px" style={{ objectFit: "contain" }} />
                </div>
              ))}
              {/* Duplicate for infinite scroll effect */}
              {productLogos.map((logo, i) => (
                <div className="hp-dist-logo-item" key={`logo-2-${i}`}>
                   <Image src={`/Images/product/${logo}`} alt="Brand Logo" fill sizes="(max-width: 768px) 210px, 280px" style={{ objectFit: "contain" }} />
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
            <Link href="/homepage#contact" className="btn-orange">Contact </Link>
            <Link href="#" className="btn-outline-dark">Download Profile</Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .about-page-wrapper {
          font-family: 'Inter', sans-serif;
          color: #1a1a1a;
          overflow-x: hidden;
        }
        .container {
          max-width: 100%;
          margin: 0;
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
          background: #FF5B05;
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
          background: rgba(0,0,0,0.25) !important;
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
          display: flex;
          align-items: center;
          vertical-align: middle;
        }
        .about-hero-content h1 {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 80px;
          font-weight: 500;
          line-height: 100%;
          margin-bottom: 32px;
          letter-spacing: 1px;
        }
        .about-hero-content p {
          color: rgba(255,255,255,0.9);
          font-size: 16px;
          line-height: 1.6;
        }

        /* MAIN INFO */
        .about-main-info { padding: 100px 0 0px; background: #fff; }
        .about-info-container {
          max-width: 100%;
          margin: 0;
          display: flex;
          gap: 80px;
          align-items: flex-start;
          padding: 0 80px;
        }
        .about-image-side { 
          flex: 0 0 600px; 
          position: relative;
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

        /* DIVISIONS CONTENT */
        .divisions-section { padding: 80px 0 60px; background: #fff; }
        .divisions-section .container { display: flex; gap: 40px; }
        .division-card {
          flex: 1;
          background: white;
          border: 1px solid #FF5B05;
          border-radius: 6px;
          padding: 60px 50px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          transition: transform 0.3s;
          min-height: 420px;
        }
        .division-card:hover { transform: translateY(-5px); }
        .div-header { display: flex; align-items: center; margin-bottom: 30px; gap: 20px; }
        .div-icon { flex-shrink: 0; }
        .div-header h3 { 
          font-family: var(--font-inter-tight), sans-serif; 
          font-size: 34px; 
          font-weight: 600; 
          color: #FF5B05; 
          margin: 0; 
        }
        .division-card p { 
          font-family: var(--font-inter-tight), sans-serif; 
          font-weight: 400;
          font-style: normal;
          font-size: 20px; 
          line-height: 1.6; 
          letter-spacing: 0.5px;
          vertical-align: middle;
          color: #555; 
          margin: 0; 
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
        .capabilities .container { max-width: 100%; }
        .capabilities .section-header h2 { font-size: 52px; font-weight: 600; letter-spacing: -1.5px; }
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin: 40px 0 0;
          width: 100%;
          max-width: 100%;
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
          font-size: 15px;
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
          margin: 60px 0 0;
          width: 100%;
          max-width: 100%;
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
          width: 184px;
          height: 66px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 30px;
          background: #FF5B05;
          color: white;
          border-radius: 0;
          border: 1px solid #FF5B05;
          font-family: var(--font-inter-tight), sans-serif;
          font-weight: 500;
          font-size: 25px;
          line-height: 100%;
          letter-spacing: 0;
          text-align: center;
          text-decoration: none;
          opacity: 1;
          box-sizing: border-box;
          transition: background 0.3s;
        }
        .btn-orange:hover { background: #d05303; border-color: #d05303; }
        .btn-outline-dark {
          height: 66px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 30px;
          background: white;
          color: #000;
          border-radius: 0;
          font-family: var(--font-inter-tight), sans-serif;
          font-weight: 500;
          font-size: 25px;
          line-height: 100%;
          letter-spacing: 0;
          text-align: center;
          text-decoration: none;
          border: 1px solid #000;
          box-sizing: border-box;
          transition: all 0.3s;
        }
        .btn-outline-dark:hover { background: #000; color: #fff; }

        @media (max-width: 1024px) {
          .container { padding: 0 40px; }
          .hp-navbar { padding: 30px 40px; }
          .about-hero { padding-left: 40px; }
          .about-hero-content h1 { font-size: 52px; }
          .about-info-container { flex-direction: column; gap: 50px; padding: 0 40px; }
          .about-image-side { flex: 0 0 auto; width: 100%; aspect-ratio: 16/9; }
          .about-text-side { padding-top: 0; }
          .about-main-title { font-size: 38px; margin-bottom: 30px; }
          .why-gr-grid { grid-template-columns: repeat(2, 1fr); background: none; border: 1px solid #eeeeee; }
          .why-gr-item { border: 1px solid #eeeeee; }
          .capabilities-grid { grid-template-columns: repeat(2, 1fr); height: auto; }
          .cap-column { border-bottom: 1px solid #eeeeee; }
          .clientele-content { flex-direction: column; height: auto; }
          .clientele-tabs { flex: 0 0 auto; border-right: none; border-bottom: 1px solid #eeeeee; }
          .segment-tab { padding: 20px; }
          .clientele-info-side { flex: 0 0 auto; }
          .info-box { padding: 40px; }
          .timeline-labels { flex-direction: column; gap: 40px; padding-top: 0; padding-left: 20px; }
          .timeline-line { width: 1px; height: 100%; left: 0; top: 0; }
          .time-dot { top: 10px; left: -24px; }
          .timeline-item { padding-right: 0; }
          .trusted-title { font-size: 38px; }
          .cta-section h2 { font-size: 42px; }
          .btn-orange, .btn-outline-dark { font-size: 20px; height: 56px; }
        }

        @media (max-width: 768px) {
          .container { padding: 0 20px; }
          .hp-navbar { padding: 15px 20px; }
          .hp-navbar-logo img { width: 140px !important; height: auto !important; }
          .about-hero { padding-left: 20px; height: 100vh; }
          .about-hero-content { width: 100%; padding-right: 20px; }
          .about-hero-content h1 { font-size: 32px; text-align: left; line-height: 1.2; margin-top: 10px; }
          .about-hero-content h1 br { display: none; }
          .about-tag { margin-bottom: 5px !important; }
          .about-info-container { padding: 0 20px; gap: 30px; }
          .about-main-info { padding: 50px 0 20px; }
          .about-main-title { font-size: 32px; text-align: left; }
          .why-gr { padding: 20px 0 50px; }
          .why-gr-grid { grid-template-columns: 1fr; margin-top: 30px; }
          .why-gr-item { padding: 30px 20px; }
          .capabilities { padding: 50px 0; }
          .capabilities .section-header h2 { font-size: 32px; text-align: left; }
          .capabilities-grid { grid-template-columns: 1fr; border-right: 1px solid #eeeeee; margin-top: 20px; }
          .timeline-section { padding: 50px 0; }
          .timeline-title { font-size: 30px; margin-bottom: 30px; text-align: left; }
          .clientele { padding: 50px 0; }
          .info-box { padding: 30px 20px; }
          .trusted-leaders { padding: 40px 0; }
          .trusted-title { font-size: 30px; text-align: left; }
          .cta-section { padding: 60px 0; }
          .cta-section h2 { font-size: 32px; text-align: center; }
          .cta-btns { flex-direction: column; align-items: center; gap: 15px; }
          .btn-orange, .btn-outline-dark { width: 100%; max-width: 280px; }
        }
      `}</style>
    </div>
  );
}
