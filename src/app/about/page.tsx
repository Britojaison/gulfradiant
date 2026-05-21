"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AboutLoading from "./loading";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("Oil & Gas");
  const [heroSlide, setHeroSlide] = useState(0);
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageReady(true);
    }, 700); // Deliberate delay to allow initial layout setup and preloading
    return () => clearTimeout(timer);
  }, []);

  const heroSlides = [
    {
      src: "/Images/About/aboutimg.jpg",
      alt: "Engineering Reliability",
      heading: <>Engineering <br />Reliability. <br />Delivering Scale.</>,
      sub: "One-stop solution provider for electrical, electro-mechanical, and industrial engineering — since 2001."
    },
    {
      src: "/Images/About/img2.jpg",
      alt: "Our Identity",
      heading: <>Our <br />Identity.</>,
      sub: "Since 2001, Gulf Radiant has built a reputation of professionalism and trust as a one-stop solution provider for electrical, electro-mechanical, building material, oil field, industrial and allied technical engineering products."
    },
    {
      src: "/Images/About/img7.jpg",
      alt: "Where We Operate",
      heading: <>Where We <br />Operate.</>,
      sub: "Based in UAE (Dubai & Abu Dhabi), we cater to the GCC, Middle East, Africa, Indian Sub-continent and other emerging markets across 15+ countries."
    },
    {
      src: "/Images/About/img8.jpg",
      alt: "Our Strength",
      heading: <>Our <br />Strength.</>,
      sub: "Dedicated & qualified engineers with in-depth product knowledge and vast experience in providing prompt solutions to all our clientele."
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide(prev => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
    "TUBIFOR LOGO.png", "WALLMAX LOGO.png", "HVTI.png"
  ];

  const certificates = [
    "dewa.jpg", "cert-addc-logo.jpg", "cert-sewa-logo.jpg", "cert-rta-logo.jpg", "cert-icv-logo.jpg", "cert-jsrs-logo.jpg"
  ];

  if (!isPageReady) {
    return <AboutLoading />;
  }

  return (
    <div className="about-page-wrapper page-fade-in">
      {/* HERO SECTION - CAROUSEL */}
      <section className="about-hero">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`about-hero-slide ${heroSlide === i ? "active" : ""}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority={i === 0}
            />
          </div>
        ))}
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 key={heroSlide} className="hero-slide-heading">{heroSlides[heroSlide].heading}</h1>
          <p key={`p-${heroSlide}`} className="hero-slide-sub">{heroSlides[heroSlide].sub}</p>
        </div>
        <div className="about-hero-dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`about-hero-dot ${heroSlide === i ? "active" : ""}`}
              onClick={() => setHeroSlide(i)}
            />
          ))}
        </div>
      </section>

      {/* DIVISIONS SECTION */}
      <section className="divisions-section-new">
        <Image 
          src="/Images/About/img3.jpg" 
          alt="Divisions" 
          fill 
          sizes="100vw"
          style={{ objectFit: "cover" }} 
        />
        <div className="divisions-overlay"></div>
        <div className="divisions-content-wrapper">
          <div className="division-block-left">
            <h2>Electrical Division</h2>
            <p>
              We are authorized distributors & stockists of many reputed Electrical Engineering Products which fully comply with all engineering norms and standards. With years of cumulative experience covering markets spanning various countries, our Electrical Division has the confidence & capability to meet all our clients' requirements & deadlines promptly & efficiently.
            </p>
          </div>
          <div className="division-block-right">
            <h2>Industrial Division</h2>
            <p>
              The Industrial division of Gulf Radiant caters to a wide range of products & solutions suited for various industries, viz.., Metallurgical, Manufacturing, Oil&Gas, Infrastructure & allied fields, with specialization in Hydraulics, Pneumatics, Instrumentation, Industrial Automation, Welding, Cutting, Metal alloys, Industrial tools etc...
            </p>
          </div>
        </div>
      </section>

      {/* WHY GULF RADIANT SECTION */}
      <section className="why-gr">
        <div className="container">
          <div className="section-header why-gr-header">
            <div className="hp-dist-subtitle" aria-label="Why Choose Us" style={{ maxWidth: "300px", margin: "0 auto 15px auto" }}>
              <div className="hp-dist-subtitle-track" aria-hidden="true" style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#000" }}>
                <span>WHY CHOOSE US &bull;&nbsp;</span>
                <span>WHY CHOOSE US &bull;&nbsp;</span>
                <span>WHY CHOOSE US &bull;&nbsp;</span>
                <span>WHY CHOOSE US &bull;&nbsp;</span>
              </div>
            </div>
            <h2>Why Gulf Radiant?</h2>
          </div>

          <div className="why-gr-grid">
            <div className="why-gr-item">
              <div className="feature-icon">
                <Image src="/Images/About/lightning.svg" alt="Total MEP Solutions" width={28} height={28} />
              </div>
              <h4>Total MEP Solutions</h4>
              <p>Complete electrical & plumbing<br />from one source</p>
            </div>
            <div className="why-gr-item">
              <div className="feature-icon">
                <Image src="/Images/About/time.svg" alt="Fast Response Time" width={28} height={28} />
              </div>
              <h4>Fast Response Time</h4>
              <p>Prompt delivery meeting the<br />tightest project deadlines</p>
            </div>
            <div className="why-gr-item">
              <div className="feature-icon">
                <Image src="/Images/About/precision.svg" alt="Precision Execution" width={28} height={28} />
              </div>
              <h4>Precision Execution</h4>
              <p>Quality-first approach on every<br />single project</p>
            </div>
            <div className="why-gr-item">
              <div className="feature-icon">
                <Image src="/Images/About/badge.svg" alt="Certified Quality" width={28} height={28} />
              </div>
              <h4>Certified Quality</h4>
              <p>ISO certified with international<br />standards compliance</p>
            </div>
            <div className="why-gr-item">
              <div className="feature-icon">
                <Image src="/Images/About/tool.svg" alt="Technical Expertise" width={28} height={28} />
              </div>
              <h4>Technical Expertise</h4>
              <p>20+ years of specialized<br />engineering knowledge</p>
            </div>
            <div className="why-gr-item">
              <div className="feature-icon">
                <Image src="/Images/About/globe.svg" alt="Regional Reach" width={28} height={28} />
              </div>
              <h4>Regional Reach</h4>
              <p>Quality-first approach on every<br />single project</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY CAPABILITIES */}
      <section className="capabilities-new">
        <Image 
          src="/Images/About/img4.jpg" 
          alt="Company Capabilities Background" 
          fill 
          sizes="100vw"
          style={{ objectFit: "cover" }} 
          className="capabilities-bg"
        />
        <div className="capabilities-overlay"></div>
        
        <div className="capabilities-content">
          {/* Left Column */}
          <div className="cap-column-side">
            <div className="cap-glass-card">
              <h4>Electrical</h4>
              <ul>
                <li>LV/MV Switchgear & Panels</li>
                <li>Power & Distribution Transformers</li>
                <li>Cables & Cable Management</li>
                <li>Lighting & Emergency Systems</li>
              </ul>
            </div>
            <div className="cap-glass-card">
              <h4>Automation</h4>
              <ul>
                <li>PLC & SCADA Systems</li>
                <li>Variable Frequency Drives</li>
                <li>Motor Control Centers</li>
                <li>Building Management Systems</li>
              </ul>
            </div>
          </div>

          {/* Center Title */}
          <div className="capabilities-center-text">
            <h2>Company<br />Capabilities</h2>
          </div>

          {/* Right Column */}
          <div className="cap-column-side">
            <div className="cap-glass-card">
              <h4>Instrumentation</h4>
              <ul>
                <li>Process Control Instruments</li>
                <li>Flow & Level Measurement</li>
                <li>Pressure & Temperature Gauges</li>
                <li>Calibration Equipment</li>
              </ul>
            </div>
            <div className="cap-glass-card">
              <h4>Mechanical Supply</h4>
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
      <section className="timeline-section-new">
        <Image 
          src="/Images/About/img6.jpg" 
          alt="Timeline Background" 
          fill 
          sizes="100vw"
          style={{ objectFit: "cover" }} 
        />
        <div className="timeline-overlay"></div>
        
        <div className="timeline-content">
          <h2 className="timeline-title-new">Since 2001 &rarr; Today</h2>

          <div className="timeline-labels-new">
            <div className="timeline-line-new"></div>
            <div className="timeline-item-new">
              <div className="time-dot-new"></div>
              <div className="time-year-new">2001</div>
              <h4>Founded</h4>
              <p>Established in Dubai,<br />UAE</p>
            </div>
            <div className="timeline-item-new">
              <div className="time-dot-new"></div>
              <div className="time-year-new">2006</div>
              <h4>Regional Expansion</h4>
              <p>Extended operations across<br />GCC</p>
            </div>
            <div className="timeline-item-new">
              <div className="time-dot-new"></div>
              <div className="time-year-new">2012</div>
              <h4>500+ Projects</h4>
              <p>Major milestone in<br />project delivery</p>
            </div>
            <div className="timeline-item-new">
              <div className="time-dot-new"></div>
              <div className="time-year-new">2018</div>
              <h4>ISO Certified</h4>
              <p>Achieved international<br />quality standards</p>
            </div>
            <div className="timeline-item-new">
              <div className="time-dot-new"></div>
              <div className="time-year-new">Today</div>
              <h4>15+ Countries</h4>
              <p>Serving clients across the<br />globe</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED & CERTIFIED SECTION */}
      <section className="trusted-cert-section">
        <div className="container">
          <h2 className="trusted-cert-title">Trusted by Industry Leaders</h2>
          <div className="marquee-wrapper">
            <div className="marquee-track" style={{ animationDuration: "160s" }}>
              {productLogos.map((logo, i) => (
                <div className="logo-item" key={`product-1-${i}`}>
                  <Image src={`/Images/product/${logo}`} alt="Brand Logo" fill sizes="(max-width: 768px) 150px, 200px" style={{ objectFit: "contain" }} />
                </div>
              ))}
              {productLogos.map((logo, i) => (
                <div className="logo-item" key={`product-2-${i}`}>
                  <Image src={`/Images/product/${logo}`} alt="Brand Logo" fill sizes="(max-width: 768px) 150px, 200px" style={{ objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>

          <h2 className="trusted-cert-title" style={{ marginTop: "100px" }}>Certified &amp; Approved</h2>
          <div className="marquee-wrapper">
            <div className="marquee-track" style={{ animationDuration: "40s" }}>
              {certificates.map((cert, i) => (
                <div className="logo-item" key={`cert-1-${i}`}>
                  <Image src={`/Images/Certificates/${cert}`} alt="Certificate Logo" fill sizes="(max-width: 768px) 150px, 200px" style={{ objectFit: "contain" }} />
                </div>
              ))}
              {certificates.map((cert, i) => (
                <div className="logo-item" key={`cert-2-${i}`}>
                  <Image src={`/Images/Certificates/${cert}`} alt="Certificate Logo" fill sizes="(max-width: 768px) 150px, 200px" style={{ objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pageFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .page-fade-in {
          animation: pageFadeIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
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
          background: rgba(0,0,0,0.4) !important;
          z-index: 1;
        }
        .about-hero-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          z-index: 0;
        }
        .about-hero-slide.active {
          opacity: 1;
        }
        .about-hero-dots {
          position: absolute;
          bottom: 32px;
          left: 80px;
          display: flex;
          gap: 10px;
          z-index: 3;
        }
        .about-hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          border: none;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
          padding: 0;
        }
        .about-hero-dot.active {
          background: #FF5B05;
          transform: scale(1.3);
        }
        .about-hero-content {
          position: relative;
          z-index: 2;
          color: white;
          max-width: 700px;
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-slide-heading {
          animation: heroFadeUp 0.7s ease forwards;
        }
        .hero-slide-sub {
          animation: heroFadeUp 0.7s ease 0.15s forwards;
          opacity: 0;
          animation-fill-mode: forwards;
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
          font-size: 20px;
          line-height: 1.5;
        }

        /* ABOUT MAIN INFO NEW */
        .about-main-info-new {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: flex-end;
          padding: 80px 80px 140px;
        }
        .about-main-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
          z-index: 1;
        }
        .about-main-content-new {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
        }
        .about-main-text {
          max-width: 600px;
        }
        .about-main-text h2 {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 80px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 24px;
          line-height: 1.1;
        }
        .about-main-text p {
          font-family: var(--font-neutiva), sans-serif;
          font-size: 17px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          line-height: 140%;
        }
        .about-main-carousel {
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: flex-end;
          padding-bottom: 5px;
        }
        .carousel-numbers {
          display: flex;
          gap: 20px;
        }
        .carousel-numbers span {
          font-family: var(--font-geist-mono), monospace;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s;
        }
        .carousel-numbers span.active, .carousel-numbers span:hover {
          color: #ffffff;
        }
        .carousel-bar {
          width: 140px;
          height: 2px;
          background: rgba(255, 255, 255, 0.3);
          position: relative;
        }
        .carousel-progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: #FF5B05;
          transition: width 0.3s ease;
        }

        /* DIVISIONS CONTENT NEW */
        .divisions-section-new {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .divisions-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.3); /* Slight darkening for readability */
          z-index: 1;
        }
        .divisions-content-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          padding: 80px;
          display: flex;
          justify-content: space-between;
        }
        .division-block-left {
          max-width: 586px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-bottom: 160px;
        }
        .division-block-right {
          max-width: 750px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          text-align: right;
          padding-bottom: 160px;
        }
        .division-block-left h2, .division-block-right h2 {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 56px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 20px;
        }
        .division-block-left p, .division-block-right p {
          font-family: var(--font-neutiva), sans-serif;
          font-size: 20px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        /* WHY GR NEW */
        .why-gr { 
          min-height: 100vh;
          padding: 100px 0 80px; 
          background: #fff; 
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .why-gr-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 60px;
        }
        .why-gr-header h2 {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 80px;
          font-weight: 600;
          color: #000;
        }
        .why-gr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          position: relative;
          background-image: 
            linear-gradient(to bottom, rgba(26,26,26,0) 2%, #1a1a1a 15%, #1a1a1a 85%, rgba(26,26,26,0) 98%),
            linear-gradient(to bottom, rgba(26,26,26,0) 2%, #1a1a1a 15%, #1a1a1a 85%, rgba(26,26,26,0) 98%),
            linear-gradient(to right, rgba(26,26,26,0) 2%, #1a1a1a 15%, #1a1a1a 85%, rgba(26,26,26,0) 98%);
          background-size: 
            1px 100%, 
            1px 100%, 
            100% 1px;
          background-position: 
            33.333% 0, 
            66.666% 0, 
            0 50%;
          background-repeat: no-repeat;
        }
        .why-gr-item {
          padding: 50px 40px;
          position: relative;
          background: transparent;
          transition: all 0.3s ease;
        }
        .why-gr-item:hover {
          background: #fff;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          z-index: 5;
        }
        .why-gr-item .feature-icon { margin-bottom: 25px; }
        .why-gr-item h4 { 
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 28px; 
          font-weight: 500; 
          color: #000;
          margin-bottom: 12px; 
        }
        .why-gr-item p { 
          font-family: var(--font-neutiva), sans-serif;
          font-size: 20px; 
          color: #666; 
          line-height: 1.5; 
        }
        /* CAPABILITIES NEW */
        .capabilities-new { 
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          z-index: 1;
        }
        .capabilities-bg {
          /* Relies on DOM order */
        }
        .capabilities-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
        }
        .capabilities-content {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 60px 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .capabilities-center-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        .capabilities-center-text h2 {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 80px;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -1px;
        }
        .cap-column-side {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          width: 460px;
          gap: 80px;
        }
        .cap-glass-card {
          width: 460px;
          height: 340px;
          background: rgba(171, 171, 171, 0.15);
          backdrop-filter: blur(80px) saturate(180%);
          -webkit-backdrop-filter: blur(80px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-top: 1px solid rgba(255, 255, 255, 0.5);
          border-left: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        .cap-glass-card h4 {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 40px;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 25px;
        }
        .cap-glass-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .cap-glass-card ul li {
          font-family: var(--font-neutiva), sans-serif;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 12px;
          line-height: 1.5;
        }
        /* TIMELINE NEW */
        .timeline-section-new { 
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }
        .timeline-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
        }
        .timeline-content {
          position: relative;
          z-index: 1;
          height: 100%;
          width: 100%;
          padding: 80px 10%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .timeline-title-new { 
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 80px; 
          font-weight: 600; 
          color: #ffffff;
          letter-spacing: -1px; 
          margin-bottom: 120px; 
          text-align: center;
        }
        .timeline-labels-new {
          width: 100%;
          display: flex;
          justify-content: space-between;
          position: relative;
          padding-top: 30px;
        }
        .timeline-line-new {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(255, 255, 255, 0.3);
          z-index: 1;
        }
        .timeline-item-new {
          flex: 1;
          position: relative;
          z-index: 2;
          text-align: left;
          padding-right: 20px;
        }
        .time-dot-new {
          width: 10px;
          height: 10px;
          background: #FF5B05;
          position: absolute;
          top: -65px;
          left: 0;
        }
        .time-year-new { 
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 30px; 
          font-weight: 800; 
          color: #FF5B05; 
          margin-bottom: 10px; 
        }
        .timeline-item-new h4 { 
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 24px; 
          font-weight: 500; 
          margin-bottom: 2px; 
          color: #ffffff; 
        }
        .timeline-item-new p { 
          font-family: var(--font-neutiva), sans-serif;
          font-size: 16px; 
          color: rgba(255, 255, 255, 0.8); 
          line-height: 1.5; 
          margin: 0; 
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

        /* TRUSTED & CERTIFIED */
        .trusted-cert-section { 
          padding: 100px 0 150px 0; 
          background: #ffffff; 
        }
        .trusted-cert-title { 
          font-family: var(--font-inter-tight), sans-serif;
          font-size: 48px; 
          font-weight: 600; 
          color: #000000;
          text-align: center;
          margin-bottom: 60px;
          letter-spacing: -1px;
        }
        .marquee-wrapper {
          display: flex;
          overflow: hidden;
          width: 100%;
        }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 140px;
          animation: marquee 40s linear infinite;
          padding-right: 140px;
          width: max-content;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-item {
          position: relative;
          width: 200px;
          height: 100px;
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
        }

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
