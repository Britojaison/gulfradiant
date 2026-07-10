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
    if (isPageReady && window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150); // Wait a tiny bit for DOM paint after isPageReady
    }
  }, [isPageReady]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageReady(true);
    }, 700); // Deliberate delay to allow initial layout setup and preloading
    return () => clearTimeout(timer);
  }, []);

  const heroSlides = [
    {
      src: "/Images/About/img1.jpg",
      alt: "Engineering Reliability",
      heading: <>Engineering Reliability.</>,
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
    }, 8000);
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
    "kumwell.webp", "pittas.jpg", "obo.webp", "dietzel.webp", "siechem.webp",
    "BAHRA CABLES.svg", "CCG Logo.webp", "CITEL LOGO.webp", "COSMOPLAST LOGO.avif",
    "FRATER1-LOGO.webp",
    "HAUFF TECHNIK LOGO.webp", "LITETECH LOGO.webp", "NEELKANTH CABLE LOGO.webp",
    "NVENT CADDY LOGO.svg", "NVENT ERICO LOGO.svg", "OBSTA LOGO.webp",
    "PALAZZOLI GROUP LOGO.webp", "PSI LOGO.webp", "ROSE LOGO.webp",
    "SIRENA LOGO.webp", "TEKAB CABLES.webp", "TIGO LOGO.webp",
    "TUBIFOR LOGO.webp", "WALLMAX LOGO.webp", "HVTI.webp"
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
        
        <a href="#next-section" className="hp-hero-scroll" aria-label="Scroll down">
          <Image src="/Images/Home/arrow-bold.svg" alt="Scroll down" width={34} height={34} style={{ height: "auto" }} />
        </a>
      </section>

      {/* TRUSTED & CERTIFIED SECTION */}
      <section id="next-section" className="trusted-cert-section">
        <div className="container">
          <h2 className="trusted-cert-title">Trusted by Industry Leaders</h2>
          <div className="marquee-wrapper">
            <div className="marquee-track" style={{ animationDuration: "60s" }}>
              {productLogos.map((logo, i) => (
                <div className="logo-item" key={`product-1-${i}`}>
                  <img src={`/Images/product/${logo}`} alt="Brand Logo" className="trusted-brand-logo" loading="lazy" decoding="async" style={{ height: "80px", width: "auto", objectFit: "contain", mixBlendMode: "multiply" }} />
                </div>
              ))}
              {productLogos.map((logo, i) => (
                <div className="logo-item" key={`product-2-${i}`}>
                  <img src={`/Images/product/${logo}`} alt="Brand Logo" className="trusted-brand-logo" loading="lazy" decoding="async" style={{ height: "80px", width: "auto", objectFit: "contain", mixBlendMode: "multiply" }} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* DIVISIONS SECTION */}
      <section className="divisions-section-new">
        <Image 
          src="/Images/About/bg.webp" 
          alt="Divisions" 
          fill 
          sizes="100vw"
          style={{ objectFit: "cover" }} 
        />
        <div className="divisions-overlay"></div>
        <div className="divisions-heading">
          <h2>Our Capabilities</h2>
        </div>
        <div className="divisions-content-wrapper">
          <div className="division-column">
            <div className="division-block-left">
              <h2>Electrical Division</h2>
              <p>
                We are authorized distributors & stockists of many reputed Electrical Engineering Products which fully comply with all engineering norms and standards. With years of cumulative experience covering markets spanning various countries, our Electrical Division has the confidence & capability to meet all our clients' requirements & deadlines promptly & efficiently.
              </p>
            </div>
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
          </div>
          <div className="division-column">
            <div className="division-block-right">
              <h2>Industrial Division</h2>
              <p>
                The Industrial division of Gulf Radiant caters to a wide range of products & solutions suited for various industries, viz.., Metallurgical, Manufacturing, Oil&Gas, Infrastructure & allied fields, with specialization in Hydraulics, Pneumatics, Instrumentation, Industrial Automation, Welding, Cutting, Metal alloys, Industrial tools etc...
              </p>
            </div>
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
        </div>
      </section>
      {/* TIMELINE SECTION */}
      <section id="timeline" className="timeline-section-new">
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
              <div className="time-year-new">2021</div>
              <h4>ICV Certification</h4>
              <p>In-Country Value<br />Achieved</p>
            </div>
            <div className="timeline-item-new">
              <div className="time-dot-new"></div>
              <div className="time-year-new">2022</div>
              <h4>Abu Dhabi Branch</h4>
              <p>Licensed Branch<br />Office</p>
            </div>
            <div className="timeline-item-new">
              <div className="time-dot-new"></div>
              <div className="time-year-new">2026</div>
              <h4>25 Years</h4>
              <p>Celebrating 25 Years<br />of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFIED & APPROVED SECTION */}
      <section className="trusted-cert-section">
        <div className="container">
          <h2 className="trusted-cert-title">Certified &amp; Approved</h2>
          <div className="marquee-wrapper">
            <div className="marquee-track" style={{ animationDuration: "25s" }}>
              {certificates.map((cert, i) => (
                <div className="logo-item" key={`cert-1-${i}`}>
                  <img src={`/Images/Certificates/${cert}`} alt="Certificate Logo" className="trusted-cert-logo" loading="lazy" decoding="async" style={{ height: "100px", width: "auto", objectFit: "contain" }} />
                </div>
              ))}
              {certificates.map((cert, i) => (
                <div className="logo-item" key={`cert-2-${i}`}>
                  <img src={`/Images/Certificates/${cert}`} alt="Certificate Logo" className="trusted-cert-logo" loading="lazy" decoding="async" style={{ height: "100px", width: "auto", objectFit: "contain" }} />
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
          font-family: var(--font-degular), sans-serif !important;
          font-size: 70px !important;
          font-weight: 500 !important;
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
          min-height: 100vh;
          height: auto;
          overflow: hidden;
          background: #000;
        }
        .divisions-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.1); 
          z-index: 1;
        }
        .divisions-heading {
          position: relative;
          z-index: 2;
          width: 100%;
          text-align: center;
          padding-top: 100px;
        }
        .divisions-heading h2 {
          font-family: var(--font-degular), sans-serif !important;
          font-size: 70px !important;
          font-weight: 500 !important;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -1px;
        }
        .divisions-content-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          min-height: 100vh;
          height: auto;
          padding: 60px 80px 120px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: stretch;
          gap: 40px;
        }
        .division-column {
          display: flex;
          flex-direction: column;
          flex: 1;
          max-width: 720px;
          gap: 40px;
        }
        .division-block-left, .division-block-right {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 30px 40px;
          width: 100%;
          min-height: 230px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .division-block-left {
          text-align: left;
        }
        .division-block-right {
          text-align: left;
        }
        .division-block-left h2, .division-block-right h2 {
          font-family: inherit;
          font-size: 36px;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 20px;
        }
        .division-block-left p, .division-block-right p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
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
          font-family: var(--font-degular), sans-serif !important;
          font-size: 70px !important;
          font-weight: 500 !important;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -1px;
        }
        .cap-column-side {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
          gap: 40px;
        }
        .cap-glass-card {
          width: 100%;
          min-height: 280px;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(40px) saturate(150%);
          -webkit-backdrop-filter: blur(40px) saturate(150%);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-top: 1px solid rgba(255, 255, 255, 0.25);
          border-left: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
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
          font-family: var(--font-degular), sans-serif !important;
          font-size: 70px !important; 
          font-weight: 500 !important; 
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
          font-family: var(--font-degular), sans-serif !important;
          font-size: 70px !important; 
          font-weight: 500 !important; 
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
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
        }

        /* ── TABLET (≤1024px) ── */
        @media (max-width: 1024px) {
          .container { padding: 0 40px; }

          /* Hero */
          .about-hero { padding-left: 40px; }
          .about-hero-dots { left: 40px; }
          .about-hero-content h1 { font-size: 36px !important; font-weight: 500 !important; }
          .about-hero-content p { font-size: 17px; }

          /* Divisions */
          .divisions-heading h2 { font-size: 42px !important; }
          .divisions-content-wrapper { padding: 80px 40px; gap: 40px; flex-direction: column; justify-content: flex-start; height: auto; }
          .division-column { width: 100%; max-width: none; align-self: stretch; }
          .division-block-left, .division-block-right {
            width: 100%;
            max-width: none;
            height: auto;
            padding: 32px;
            align-self: center;
          }

          /* Capabilities — 2-column grid */
          .capabilities-new { height: auto; }
          .capabilities-content {
            flex-direction: column !important;
            padding: 60px 40px;
            align-items: stretch;
            justify-content: flex-start;
          }
          .capabilities-center-text {
            position: static;
            transform: none;
            text-align: center;
            order: -1;
            margin-bottom: 24px;
          }
          .capabilities-center-text h2 { font-size: 36px !important; font-weight: 500 !important; }
          /* Stack both cap-column-sides side by side in a 2-col grid */
          .capabilities-content .cap-column-side {
            width: 100%;
            height: auto;
            display: contents;
          }
          .capabilities-content {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            gap: 20px;
          }
          .capabilities-center-text {
            grid-column: 1 / -1;
            order: 0;
          }
          .cap-glass-card {
            width: 100%;
            height: auto;
            padding: 28px;
            border-radius: 16px;
          }
          .cap-glass-card h4 { font-size: 26px; margin-bottom: 14px; }
          .cap-glass-card ul li { font-size: 14px; margin-bottom: 10px; }

          /* Timeline — horizontal, 50vh */
          .timeline-section-new { height: 50vh; min-height: 320px; }
          .timeline-content {
            padding: 40px 40px 50px;
            justify-content: center;
          }
          .timeline-title-new { font-size: 36px !important; font-weight: 500 !important; margin-bottom: 50px; }
          .timeline-labels-new { padding-top: 20px; }
          .time-year-new { font-size: 22px; }
          .timeline-item-new h4 { font-size: 18px; }
          .timeline-item-new p { font-size: 13px; }
          .time-dot-new { top: -50px; }

          /* Trusted section */
          .trusted-cert-title { font-size: 36px !important; font-weight: 500 !important; }
          .trusted-brand-logo { height: 56px !important; }
          .trusted-cert-logo { height: 70px !important; }
          .marquee-track { gap: 100px !important; padding-right: 100px !important; }
        }

        /* ── MOBILE (≤768px) ── */
        @media (max-width: 768px) {
          .container { padding: 0 20px; }

          /* Hero */
          .about-hero {
            padding-left: 20px;
            padding-right: 20px;
            height: 100svh;
            align-items: flex-end;
            padding-bottom: 80px;
          }
          .about-hero-dots { left: 20px; bottom: 24px; }
          .about-hero-content { max-width: 100%; }
          .about-hero-content h1 {
            font-size: 26px !important;
            line-height: 1.15 !important;
            margin-bottom: 16px;
            font-weight: 500 !important;
          }
          .about-hero-content h1 br { display: none; }
          .about-hero-content p { font-size: 14px; }

          /* Divisions — stack vertically */
          .divisions-section-new { height: auto; }
          .divisions-heading h2 { font-size: 32px !important; }
          .divisions-content-wrapper {
            padding: 80px 20px 60px;
            height: auto;
            gap: 20px;
          }
          .division-block-left, .division-block-right {
            width: 100% !important;
            height: auto;
            padding: 24px 20px;
            align-self: auto !important;
            text-align: left !important;
            border-radius: 16px;
          }
          .division-block-left h2, .division-block-right h2 {
            font-size: 26px;
            margin-bottom: 12px;
          }
          .division-block-left p, .division-block-right p { font-size: 14px; }

          /* Capabilities — stack layout */
          .capabilities-new { height: auto; }
          .capabilities-content {
            flex-direction: column !important;
            padding: 80px 20px 60px;
            gap: 24px;
            align-items: stretch;
            justify-content: flex-start;
          }
          .capabilities-center-text {
            position: static;
            transform: none;
            text-align: center;
            order: -1;
            margin-bottom: 8px;
          }
          .capabilities-center-text h2 {
            font-size: 26px !important;
            font-weight: 500 !important;
            color: #ffffff;
            white-space: nowrap;
          }
          .capabilities-center-text h2 br { display: none; }
          .cap-column-side {
            width: 100%;
            height: auto;
            flex-direction: column;
            gap: 16px;
          }
          .cap-glass-card {
            width: 100%;
            height: auto;
            padding: 20px;
            border-radius: 14px;
          }
          .cap-glass-card h4 { font-size: 22px; margin-bottom: 12px; }
          .cap-glass-card ul li { font-size: 14px; margin-bottom: 8px; }

          /* Timeline — stack items vertically */
          .timeline-section-new { height: auto; }
          .timeline-content {
            padding: 80px 20px 60px;
            align-items: flex-start;
          }
          .timeline-title-new {
            font-size: 26px !important;
            font-weight: 500 !important;
            margin-bottom: 50px;
            text-align: left;
          }
          .timeline-labels-new {
            flex-direction: column;
            gap: 40px;
            padding-top: 0;
            padding-left: 24px;
            border-left: 1px solid rgba(255,255,255,0.3);
          }
          .timeline-line-new { display: none; }
          .timeline-item-new {
            padding-right: 0;
            padding-top: 0;
          }
          .time-dot-new {
            top: 4px;
            left: -30px;
            width: 8px;
            height: 8px;
          }
          .time-year-new { font-size: 20px; margin-bottom: 6px; }
          .timeline-item-new h4 { font-size: 18px; margin-bottom: 4px; }
          .timeline-item-new p { font-size: 14px; }

          /* Trusted & Certified */
          .trusted-cert-section { padding: 60px 0 80px; }
          .trusted-cert-title { font-size: 26px !important; font-weight: 500 !important; margin-bottom: 40px; }
          .trusted-brand-logo { height: 40px !important; }
          .trusted-cert-logo { height: 50px !important; }
          .marquee-track { gap: 60px !important; padding-right: 60px !important; }
        }

        /* ── TABLET TIMELINE OVERRIDE (must come AFTER mobile to win cascade) ── */
        @media (min-width: 600px) and (max-width: 1024px) {
          /* Force timeline horizontal on tablet and exact same styles as laptop, just 50vh height */
          .timeline-section-new {
            height: 50vh !important;
            min-height: 400px !important;
          }
          /* We clear out all the smaller font/padding overrides so it naturally inherits the laptop CSS */
          .timeline-content {
            padding: 80px 10% !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .timeline-title-new {
            text-align: center !important;
            margin-bottom: 120px !important;
          }
          .timeline-labels-new {
            flex-direction: row !important;
            border-left: none !important;
            padding-left: 0 !important;
            padding-top: 30px !important;
            gap: 0 !important;
          }
          .timeline-line-new {
            display: block !important;
          }
          .timeline-item-new {
            padding-right: 20px !important;
            padding-top: 0 !important;
          }
          .time-dot-new {
            top: -65px !important;
            left: 0 !important;
            width: 10px !important;
            height: 10px !important;
          }
          .time-year-new {
            font-size: 24px !important;
          }
          .timeline-item-new h4 {
            font-size: 16px !important;
            font-weight: 400 !important;
            margin-bottom: 4px !important;
          }
          .timeline-item-new p {
            font-size: 13px !important;
            line-height: 1.4 !important;
            font-weight: 300 !important;
          }
        }
      `}</style>
    </div>
  );
}
