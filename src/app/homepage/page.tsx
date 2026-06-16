"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const newsItems = [
  {
    title: "Delivering Reliable Electrical Solutions Across Infrastructure & Industrial Projects",
    meta: "Aug 10 · 6 min read",
    image: "news1.jpg",
    alt: "Industrial facility campus",
  },
  {
    title: "Gulf Radiant Expands Product Portfolio",
    meta: "Aug 10 · 5 min read",
    image: "news2.png",
    alt: "Industrial product facility",
  },
  {
    title: "Participation in Industry Expo 2025",
    meta: "Aug 08 · 4 min read",
    image: "news4.png",
    alt: "Port cranes and industrial infrastructure",
  },
  {
    title: "Successful Supply for Infrastructure Development",
    meta: "Aug 05 · 6 min read",
    image: "news5.png",
    alt: "Industrial energy facility at sunset",
  },
  {
    title: "New Engineering Product Solutions Introduced",
    meta: "Aug 02 · 5 min read",
    image: "news6.png",
    alt: "Urban rail infrastructure",
  },
];

const ELECTRICAL_CATEGORIES = [
  {
    id: "Earthing Lightning • Surge Protection Systems",
    tag: "Earthing & Surge",
    desc: "Kumwell systems, lightning protection, & exothermic welding solutions",
  },
  {
    id: "Lighting • ACWL • Signal Lights",
    tag: "Warning & Obstruction",
    desc: "Safety tower hazard lighting, visual beacon indicators & structural aircraft warning lights",
  },
  {
    id: "Switching Accessories • Control Devices • Isolators",
    tag: "Control Devices",
    desc: "Explosion-proof plugs, receptacles, switching accessories, & isolators",
  },
  {
    id: "Cables & Other Products",
    tag: "Power Cables",
    desc: "Siechem, Tekab, Helukabel & high-performance electrical cables",
  },
  {
    id: "Industrial & Bulk Materials",
    tag: "Industrial",
    desc: "Comprehensive industrial solutions including fasteners, fittings, flanges, and mechanical equipment",
  }
];

const statTargets = [25, 30, 100];

const getCategoryIcon = (tag: string) => {
  switch (tag) {
    case "Earthing & Surge":
      return (
        <svg className="hp-cat-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          <path d="M17 21H7M15 18H9M13 15h-2" />
        </svg>
      );
    case "Warning & Obstruction":
      return (
        <svg className="hp-cat-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M5 5l2.2 2.2M19 5l-2.2 2.2M2 12h3M22 12h-3" />
          <path d="M12 16v6M9 22h6" />
        </svg>
      );
    case "Control Devices":
      return (
        <svg className="hp-cat-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 12L16 8" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
        </svg>
      );
    case "Power Cables":
      return (
        <svg className="hp-cat-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" />
        </svg>
      );
    case "Special Sealing":
      return (
        <svg className="hp-cat-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          <path d="M2 7v10M12 12v10M22 7v10" />
        </svg>
      );
    case "Industrial":
      return (
        <svg className="hp-cat-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Homepage() {
  const router = useRouter();
  const statsRef = useRef<HTMLElement | null>(null);
  const statCardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const statNumberRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const certRef = useRef<HTMLElement | null>(null);
  const certCardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const projectsRef = useRef<HTMLElement | null>(null);
  const projectsTrackRef = useRef<HTMLDivElement | null>(null);
  const projectsStickyRef = useRef<HTMLDivElement | null>(null);
  const cursorLinkRef = useRef<HTMLAnchorElement | null>(null);
  const projectsTopRef = useRef<HTMLDivElement | null>(null);
  const projectsViewportRef = useRef<HTMLDivElement | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCertIndex, setActiveCertIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (diffX > threshold) {
      setActiveCertIndex((prev) => Math.min(prev + 1, certImages.length - 1));
    } else if (diffX < -threshold) {
      setActiveCertIndex((prev) => Math.max(prev - 1, 0));
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const certImages = [
    { src: "/Images/Certificates/dewa.jpg", alt: "Kumwell - DEWA APPROVAL" },
    { src: "/Images/Certificates/cert-icv-logo.jpg", alt: "GR AD ICV Certificate" },
    { src: "/Images/Certificates/cert-jsrs-logo.jpg", alt: "JSRS CERTIFICATE" },
    { src: "/Images/Certificates/cert-addc-logo.jpg", alt: "PITTAS - ADDC Pre-Qualification" },
  ];
  useEffect(() => {
    let rafId = 0;

    const updateStatsCards = () => {
      if (!statsRef.current) return;

      const rect = statsRef.current.getBoundingClientRect();
      const viewport = window.innerHeight || 1;

      // Start animating when the top of the section enters the bottom part of the screen
      const startTrigger = viewport * 0.65;
      // Finish animating when the top of the section is near the top of the screen
      const endTrigger = viewport * 0.2;

      const progress = Math.max(0, Math.min(1, (startTrigger - rect.top) / (startTrigger - endTrigger)));

      const easeOut = (v: number) => 1 - Math.pow(1 - v, 3);
      const easedProgress = easeOut(progress);

      statCardsRef.current.forEach((card, index) => {
        if (!card) return;
        const number = statNumberRefs.current[index];
        if (number) {
          number.textContent = String(Math.round(statTargets[index] * easedProgress));
        }
      });
    };

    const updateCertCards = () => {
      // Logic removed as desktop and mobile now share the auto-carousel via useEffect
    };

    const updateProjects = () => {
      // Scroll logic removed. Carousel is now auto-played via useEffect.
    };

    let lastMouseX = 0;
    let lastMouseY = 0;

    const onScroll = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(() => {
        updateStatsCards();
        updateCertCards();
        updateProjects();

        // Check mouse position relative to projects viewport on scroll
        const viewport = projectsViewportRef.current;
        if (viewport && cursorLinkRef.current) {
          const rect = viewport.getBoundingClientRect();
          if (lastMouseX >= rect.left && lastMouseX <= rect.right &&
            lastMouseY >= rect.top && lastMouseY <= rect.bottom) {
            cursorLinkRef.current.style.opacity = '1';
            cursorLinkRef.current.style.visibility = 'visible';
            cursorLinkRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
          } else {
            cursorLinkRef.current.style.opacity = '0';
            cursorLinkRef.current.style.transform = `translate(-50%, -50%) scale(0)`;
          }
        }
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!cursorLinkRef.current) return;
      cursorLinkRef.current.style.left = `${e.clientX}px`;
      cursorLinkRef.current.style.top = `${e.clientY}px`;

      lastMouseX = e.clientX;
      lastMouseY = e.clientY;

      const viewport = projectsViewportRef.current;
      if (viewport) {
        const rect = viewport.getBoundingClientRect();

        // If section is scrolled out of view, hide circle
        if (rect.top > window.innerHeight || rect.bottom < 0) {
          cursorLinkRef.current.style.opacity = '0';
          cursorLinkRef.current.style.transform = `translate(-50%, -50%) scale(0)`;
          return;
        }

        // Check if mouse is inside the horizontal slider viewport
        if (e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom) {
          cursorLinkRef.current.style.opacity = '1';
          cursorLinkRef.current.style.visibility = 'visible';
          cursorLinkRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
        } else {
          cursorLinkRef.current.style.opacity = '0';
          cursorLinkRef.current.style.transform = `translate(-50%, -50%) scale(0)`;
        }
      }
    };

    const onClick = () => {
      router.push('/projects');
    };

    const projectsSticky = projectsStickyRef.current;
    const projectsViewport = projectsViewportRef.current;

    // Attach mousemove to window to prevent circle getting stuck during fast scroll
    window.addEventListener("mousemove", onMouseMove);

    if (projectsViewport) {
      projectsViewport.addEventListener("click", onClick);
    }

    updateStatsCards();
    updateCertCards();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      if (projectsViewport) {
        projectsViewport.removeEventListener("click", onClick);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCertIndex((prev) => (prev + 1) % certImages.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [certImages.length]);

  useEffect(() => {
    certCardsRef.current.forEach((card, index) => {
      if (!card) return;
      const count = certImages.length;
      let d = index - activeCertIndex;
      
      // Wrap around so items always come from the right
      if (d < -1) {
        d += count;
      }
      if (d > count - 2) {
        d -= count;
      }

      const translateX = d * 110;
      const opacity = index === activeCertIndex ? 1 : 0;
      const scale = index === activeCertIndex ? 1 : 0.9;
      const zIndex = index === activeCertIndex ? 5 : 1;

      card.style.transform = `translate3d(-50%, -50%, 0) translate3d(${translateX}%, 0, 0) scale(${scale})`;
      card.style.opacity = `${opacity}`;
      card.style.zIndex = `${zIndex}`;
      card.style.pointerEvents = index === activeCertIndex ? "auto" : "none";
    });
  }, [activeCertIndex]);



  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          // 800ms delay gives GSAP and other dynamic layout resizing time to stabilize page height
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 800);
        }
      }
    };

    handleHashScroll();

    window.addEventListener("hashchange", handleHashScroll);
    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveNewsIndex((index) => (index + 1) % newsItems.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  const productLogos = [
    "kumwell.png", "pittas.jpg", "obo.png", "dietzel.png", "siechem.png",
    "BAHRA CABLES.svg", "CCG Logo.png", "CITEL LOGO.png", "COSMOPLAST LOGO.avif",
    "FRATER1-LOGO.webp",
    "HAUFF TECHNIK LOGO.png", "LITETECH LOGO.webp", "NEELKANTH CABLE LOGO.png",
    "NVENT CADDY LOGO.svg", "NVENT ERICO LOGO.svg", "OBSTA LOGO.png",
    "PALAZZOLI GROUP LOGO.png", "PSI LOGO.png", "ROSE LOGO.png",
    "SIRENA LOGO.png", "TEKAB CABLES.png", "TIGO LOGO.png",
    "TUBIFOR LOGO.png", "WALLMAX LOGO.png", "HVTI.png"
  ];

  const suppliedProjects = [
    {
      title: "Sea World Abu Dhabi",
      alt: "Sea World Abu Dhabi",
      image: "p1.png",
      position: "center bottom",
    },
    {
      title: "Aldhafra PV2 Solar Power Plant",
      alt: "Aldhafra PV2 Solar Power Plant",
      image: "p2.png",
      position: "center center",
    },
    {
      title: "Dubai Waste to Energy",
      alt: "Dubai Waste to Energy",
      image: "p3.png",
      position: "center center",
    },
    {
      title: "Etihad Rail",
      alt: "Etihad Rail",
      image: "p4.png",
      position: "center center",
    },

    {
      title: "Dubai Uptown Tower",
      alt: "Dubai Uptown Tower",
      image: "aircraft warning lights/Dubai Uptown Tower.jpg",
      position: "center center",
    },
    {
      title: "Sky Hills Residence",
      alt: "Sky Hills Residence",
      image: "aircraft warning lights/SKY HILLS RESIDENCE.jpg",
      position: "center center",
    },
  ];

  const featuredNews = newsItems[activeNewsIndex];
  const latestPosts = newsItems.filter((_, index) => index !== activeNewsIndex);

  return (
    <div className="homepage-wrapper">
      {/* HERO */}
      <section className="hp-hero-new" id="home-hero">
        <video
          className="hp-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Gulf Radiant infrastructure hero video"
        >
          <source src="/Images/Home/hero-video-optimized.mp4" type="video/mp4" />
        </video>
        <div className="hp-hero-overlay-new"></div>
        <div className="hp-hero-content">
          <h1 className="hp-hero-title-desktop">
            <span className="hp-hero-title-nowrap">Powering Infrastructure</span><br />That Delivers
          </h1>
          <a href="#products-distribute" className="hp-hero-scroll" aria-label="Scroll to products">
            <Image src="/Images/Home/arrow.svg" alt="Scroll down" width={34} height={34} style={{ height: "auto" }} />
          </a>
        </div>
      </section>

      {/* PRODUCT DIVISIONS - FORCE REBUILD */}
      <section className="hp-divisions-section">
        <div className="hp-divisions-inner">
          <div className="hp-dist-subtitle" aria-label="Our Expertise">
            <div className="hp-dist-subtitle-track" aria-hidden="true">
              <span>{"- OUR EXPERTISE -"}</span>
              <span>{"- OUR EXPERTISE -"}</span>
              <span>{"- OUR EXPERTISE -"}</span>
              <span>{"- OUR EXPERTISE -"}</span>
            </div>
          </div>
          <h2 className="hp-divisions-main-title">Pioneers of Lighting and Electrical Systems</h2>

          <div className="hp-divisions-grid-v4">
            {ELECTRICAL_CATEGORIES.map((cat) => (
              <Link
                key={cat.tag}
                href={`/productpage?category=${encodeURIComponent(cat.id)}`}
                className="hp-cat-card"
              >
                <div className="hp-cat-card-body">
                  <div className="hp-cat-card-icon-wrapper">
                    {getCategoryIcon(cat.tag)}
                  </div>
                  <h3 className="hp-cat-card-title">
                    {cat.id.includes('•') ? (
                      <div className="hp-cat-card-title-bullet-wrap">
                        {cat.id.split('•').map((item, idx) => (
                          <span key={idx} className="hp-cat-card-title-bullet-item">• {item.trim()}</span>
                        ))}
                      </div>
                    ) : (
                      cat.id
                    )}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS & STATS (FULL SCROLL) */}
      <div className="hp-full-scroll-section">

        <section className="hp-products-dist" id="products-distribute">
          <div className="hp-dist-header">
            <div className="hp-dist-subtitle" aria-label="Where we operate">
              <div className="hp-dist-subtitle-track" aria-hidden="true">
                <span>{"- WHERE\u00A0WE\u00A0OPERATE -"}</span>
                <span>{"- WHERE\u00A0WE\u00A0OPERATE -"}</span>
                <span>{"- WHERE\u00A0WE\u00A0OPERATE -"}</span>
                <span>{"- WHERE\u00A0WE\u00A0OPERATE -"}</span>
              </div>
            </div>
            <h2><span>Products</span> We Distribute</h2>
          </div>

          <div className="hp-dist-content-container">
            <div className="hp-dist-marquee-wrapper">
              <div className="hp-dist-logos">
                {productLogos.map((logo, i) => (
                  <div className="hp-dist-logo-item" key={`logo-1-${i}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/Images/product/${logo}`} alt="Brand Logo" className="hp-dist-logo-img" loading="lazy" decoding="async" />
                  </div>
                ))}
                {/* Duplicate for infinite scroll effect */}
                {productLogos.map((logo, i) => (
                  <div className="hp-dist-logo-item" key={`logo-2-${i}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/Images/product/${logo}`} alt="Brand Logo" className="hp-dist-logo-img" loading="lazy" decoding="async" />
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
        <section className="hp-stats-container" ref={statsRef}>
          <div className="hp-stats-stage">
            <h2 className="hp-stats-main-title">Give Your Projects the Right Connection</h2>
            <div className="hp-stats-bg hp-stats-bg-orange-bottom" aria-hidden="true"></div>
            <div className="hp-stat-block hp-stat-card-one" ref={(node) => { statCardsRef.current[0] = node; }}>
              <h3><span ref={(node) => { statNumberRefs.current[0] = node; }}>0</span><span>+</span></h3>
              <h4>Years of Professionalism</h4>
              <p>Delivering reliable electrical solutions<br />with proven industry expertise</p>
            </div>
            <div className="hp-stat-block hp-stat-card-two" ref={(node) => { statCardsRef.current[1] = node; }}>
              <h3><span ref={(node) => { statNumberRefs.current[1] = node; }}>0</span><span>+</span></h3>
              <h4>Countries Served Worldwide</h4>
              <p>Supporting projects across global<br />markets with a strong supply network</p>
            </div>
            <div className="hp-stat-block hp-stat-card-three" ref={(node) => { statCardsRef.current[2] = node; }}>
              <h3><span ref={(node) => { statNumberRefs.current[2] = node; }}>0</span><span>+</span></h3>
              <h4>Product Categories</h4>
              <p>Offering a wide range of specialized<br />products for diverse industrial needs</p>
            </div>
          </div>
        </section>
      </div>

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
              <p>25+ years of specialized<br />engineering knowledge</p>
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

      {/* CERTIFICATION */}
      <section className="hp-cert-section" ref={certRef}>
        <div className="hp-cert-content-inner">
          <div className="hp-cert-left">
            <div className="hp-dist-subtitle" aria-label="Where we operate">
              <div className="hp-dist-subtitle-track" aria-hidden="true">
                <span>{"- WHERE\u00A0WE\u00A0OPERATE -"}</span>
                <span>{"- WHERE\u00A0WE\u00A0OPERATE -"}</span>
                <span>{"- WHERE\u00A0WE\u00A0OPERATE -"}</span>
                <span>{"- WHERE\u00A0WE\u00A0OPERATE -"}</span>
              </div>
            </div>
            <h2>Certification &amp; Approvals</h2>
            <div className="hp-cert-btn-container">
              <Link href="/certifications" className="hp-btn-orange-rect">View All Certificates</Link>
            </div>
          </div>

          <div className="hp-cert-right-container">
            <div
              className="hp-cert-scroll-window"
              aria-label="Certification approvals"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {certImages.map((cert, idx) => (
                <div
                  className="hp-cert-box"
                  key={`${cert.src}-${idx}`}
                  ref={(node) => { certCardsRef.current[idx] = node; }}
                >
                  <Image src={cert.src} alt={cert.alt} fill sizes="(max-width: 768px) 84vw, 315px" style={{ objectFit: "contain", padding: "12px" }} />
                </div>
              ))}
            </div>
            {isMobile && (
              <div className="hp-cert-carousel-dots">
                {certImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`hp-cert-carousel-dot ${activeCertIndex === idx ? "active" : ""}`}
                    onClick={() => setActiveCertIndex(idx)}
                    aria-label={`Go to certificate ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TRUSTED LEADERS */}
      <section className="hp-trusted-section">
        <div className="hp-trusted-content">
          <div className="hp-trusted-header">
            <h2>Trusted by Industry Leaders</h2>
          </div>
          <div className="hp-trusted-grid-inner">
            {[
              { src: "Rectangle 11 (1).png", alt: "Occidental of Oman Inc.", folder: "Home" },
              { src: "Rectangle 12 (1).png", alt: "Danieli", folder: "Home" },
              { src: "Rectangle 22.png", alt: "Emirates Global Aluminium", folder: "Home" },
              { src: "sidem viola.svg", alt: "Sidem Veolia", folder: "Home" },
              { src: "drydock.png", alt: "Drydocks World", folder: "Brand_partners" },
              { src: "voltas.svg", alt: "Voltas", folder: "Home" },
              { src: "Rectangle 20.png", alt: "Dragon Oil", folder: "Home" },
              { src: "Rectangle 21.png", alt: "Sharjah Electricity and Water Authority", folder: "Home" },
              { src: "Rectangle 16.png", alt: "Energy China", folder: "Home" },
              { src: "Rectangle 17.png", alt: "Port of Salalah", folder: "Home" },
              { src: "Rectangle 19.png", alt: "DP World", folder: "Home" },
              { src: "dewa.png", alt: "DEWA", folder: "Brand_partners" },
              { src: "sewa.png", alt: "SEWA", folder: "Brand_partners" },
              { src: "dpworld.png", alt: "DP World", folder: "Brand_partners" },
              { src: "petrofac.png", alt: "Petrofac", folder: "Brand_partners" },
              { src: "technip.png", alt: "Technip", folder: "Brand_partners" },
              { src: "Saipem.png", alt: "Saipem", folder: "Brand_partners" },
              { src: "L&T.png", alt: "L&T", folder: "Brand_partners" },
            ].map((client) => (
              <div className="hp-trusted-logo-box" key={client.src}>
                <Image src={`/Images/${client.folder}/${client.src}`} alt={client.alt} fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px" style={{ objectFit: "contain" }} />
              </div>
            ))}
          </div>
          <Link href="/clients" className="hp-btn-orange-rect hp-trusted-cta">View All Clients</Link>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="hp-projects-section-new" ref={projectsRef}>
        <div className="hp-projects-sticky" ref={projectsStickyRef}>
          <div className="hp-projects-top-fixed" ref={projectsTopRef}>
            <div className="hp-dist-subtitle" aria-label="Our projects">
              <div className="hp-dist-subtitle-track" aria-hidden="true">
                <span>{"- OUR\u00A0PROJECTS -"}</span>
                <span>{"- OUR\u00A0PROJECTS -"}</span>
                <span>{"- OUR\u00A0PROJECTS -"}</span>
                <span>{"- OUR\u00A0PROJECTS -"}</span>
              </div>
            </div>
            <h2>Our Project Portfolio</h2>
          </div>
          <div className="hp-projects-viewport" ref={projectsViewportRef}>
            <div className="hp-projects-track hp-projects-marquee">
              {suppliedProjects.map((project, idx) => (
                <div className="hp-project-card" key={`proj1-${idx}`}>
                  <Image
                    src={`/Images/our_projects/${project.image}`}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 767px) 82vw, (max-width: 1199px) 44vw, 520px"
                    style={{ objectFit: "cover", objectPosition: project.position }}
                  />
                  <span className="hp-project-label">{project.title}</span>
                </div>
              ))}
              {suppliedProjects.map((project, idx) => (
                <div className="hp-project-card" key={`proj2-${idx}`}>
                  <Image
                    src={`/Images/our_projects/${project.image}`}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 767px) 82vw, (max-width: 1199px) 44vw, 520px"
                    style={{ objectFit: "cover", objectPosition: project.position }}
                  />
                  <span className="hp-project-label">{project.title}</span>
                </div>
              ))}
            </div>
          </div>
          <Link href="/projects" className="hp-projects-link" ref={cursorLinkRef} aria-label="View all projects">
            View All Projects
          </Link>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="hp-quote-banner-new">
        {/* GIANT ORANGE QUOTES (BEHIND CARD) */}
        <div className="hp-leadership-comma-wrapper">
          <Image
            src="/Images/Home/comma.svg"
            alt="Quotes"
            width={378}
            height={436}
            style={{ pointerEvents: "none", height: "auto" }}
          />
        </div>
        <div className="hp-leadership-card" style={{ position: "relative", zIndex: 2 }}>
          <div className="hp-leadership-left">
            <div className="hp-dist-subtitle" aria-label="Leadership message">
              <div className="hp-dist-subtitle-track" aria-hidden="true">
                <span>{"- LEADERSHIP\u00A0MESSAGE -"}</span>
                <span>{"- LEADERSHIP\u00A0MESSAGE -"}</span>
                <span>{"- LEADERSHIP\u00A0MESSAGE -"}</span>
                <span>{"- LEADERSHIP\u00A0MESSAGE -"}</span>
              </div>
            </div>
            <h3>
              <span style={{ color: "#ffffff", display: "block", whiteSpace: "nowrap" }}>Message from the</span>
              <span style={{ color: "#ff5b05", display: "block" }}>CEO</span>
            </h3>
          </div>
          <div className="hp-leadership-copy" style={{ fontSize: "clamp(18px, 1.4vw, 22px)" }}>
            <p style={{ marginBottom: "28px" }}>
              "At Gulf Radiant, we believe that reliable engineering solutions are built through trust, quality, and long-term partnerships. For over two decades, we have proudly supported infrastructure, industrial, and energy projects across the GCC with globally trusted electrical solutions.
            </p>
            <p style={{ marginBottom: "28px" }}>
              Our commitment remains focused on delivering performance-driven products, technical expertise, and dependable service that meet the evolving needs of modern industries."
            </p>

          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="hp-news-section-new" id="useful-information">
        <div className="hp-news-inner">
          <div className="hp-news-feature">
            <div className="hp-dist-subtitle" aria-label="Insights">
              <div className="hp-dist-subtitle-track" aria-hidden="true">
                <span>{"- INSIGHTS -"}</span>
                <span>{"- INSIGHTS -"}</span>
                <span>{"- INSIGHTS -"}</span>
                <span>{"- INSIGHTS -"}</span>
              </div>
            </div>
            <h2>Latest News &amp; Industry Updates</h2>
            <article className="hp-news-feature-card" style={{ position: "relative" }}>
              <Image
                src={`/Images/our_projects/${featuredNews.image}`}
                alt={featuredNews.alt}
                key={featuredNews.image}
                fill
                sizes="(max-width: 991px) 100vw, 760px"
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
              <div className="hp-news-feature-info">
                <span className="hp-news-pill"><span></span>Industry News</span>
                <h3>{featuredNews.title}</h3>
              </div>
            </article>
          </div>
          <aside className="hp-latest-posts" aria-label="Latest posts">
            <h3 style={{ fontWeight: 500 }}>Latest Posts</h3>
            <div className="hp-latest-list" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {latestPosts.map((post) => (
                <div
                  className="hp-latest-item"
                  key={post.image}
                  style={{ gridTemplateColumns: "180px 1fr", display: "grid", gap: "20px", cursor: "pointer" }}
                >
                  <div className="hp-latest-thumb" style={{ position: "relative", width: "180px", height: "110px" }}>
                    <Image
                      src={`/Images/our_projects/${post.image}`}
                      alt={post.alt}
                      fill
                      sizes="180px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="hp-latest-copy">
                    <h4>{post.title}</h4>
                    <p>{post.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section id="contact" className="hp-contact-banner-new">
        <div className="hp-contact-inner-new">
          {/* LEFT - TEXT */}
          <div style={{ maxWidth: "800px", width: "100%", position: "relative", zIndex: 2 }}>
            <div className="hp-dist-subtitle" aria-label="Book a call" style={{ marginBottom: "20px" }}>
              <div className="hp-dist-subtitle-track" aria-hidden="true">
                <span>{"- BOOK\u00A0A\u00A0CALL -"}</span>
                <span>{"- BOOK\u00A0A\u00A0CALL -"}</span>
                <span>{"- BOOK\u00A0A\u00A0CALL -"}</span>
                <span>{"- BOOK\u00A0A\u00A0CALL -"}</span>
              </div>
            </div>
            <h2 style={{ color: "#ffffff", marginBottom: "30px", lineHeight: "1.1" }}>Ready to Power<br />Your Next Project?</h2>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "20px", lineHeight: "1.6", maxWidth: "600px" }}>
              Let's discuss how Gulf Radiant can support your infrastructure, industrial, and engineering requirements with reliable electrical solutions tailored to your needs.
            </p>
          </div>

          {/* RIGHT - FORM */}
          <div
            className="hp-git-form-card"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "24px",
              width: "100%",
              maxWidth: "600px",
              position: "relative",
              zIndex: 2
            }}
          >
            <h3 style={{ color: "#ffffff", marginBottom: "30px", fontSize: "32px" }}>Get in touch</h3>
            <form className="hp-git-form" onSubmit={(e) => e.preventDefault()}>
              <div className="hp-git-field">
                <label htmlFor="git-company" style={{ color: "rgba(255, 255, 255, 0.9)" }}>Company</label>
                <input id="git-company" type="text" placeholder="Jhon Smith" />
              </div>
              <div className="hp-git-field">
                <label htmlFor="git-fullname" style={{ color: "rgba(255, 255, 255, 0.9)" }}>Full Name</label>
                <input id="git-fullname" type="text" placeholder="Jhon Smith Comapny" />
              </div>
              <div className="hp-git-row">
                <div className="hp-git-field">
                  <label htmlFor="git-email" style={{ color: "rgba(255, 255, 255, 0.9)" }}>Email Address</label>
                  <input id="git-email" type="email" placeholder="john@email.com" />
                </div>
                <div className="hp-git-field">
                  <label htmlFor="git-phone" style={{ color: "rgba(255, 255, 255, 0.9)" }}>Phone Number</label>
                  <input id="git-phone" type="tel" placeholder="+XX XXXXXXXXX" />
                </div>
              </div>
              <div className="hp-git-field">
                <label htmlFor="git-industry" style={{ color: "rgba(255, 255, 255, 0.9)" }}>Industry</label>
                <div className="hp-git-select-wrap">
                  <select id="git-industry" defaultValue="">
                    <option value="" disabled>- None -</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="industrial">Industrial</option>
                    <option value="commercial">Commercial</option>
                    <option value="energy">Energy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="hp-git-field">
                <label htmlFor="git-details">Project Details (Optional)</label>
                <textarea id="git-details" rows={4} placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="hp-git-submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .hp-projects-section-new { min-height: auto !important; }
          .hp-projects-sticky { min-height: auto !important; height: auto !important; overflow: visible !important; }
          .hp-project-card { 
            flex: 0 0 65vw !important;
            width: 65vw !important;
            height: calc(65vw * 11 / 16) !important;
            min-height: 300px !important;
          }
          .hp-projects-viewport {
            height: calc(65vw * 11 / 16) !important;
            min-height: 300px !important;
          }
          .hp-projects-track { height: 100% !important; align-items: center !important; }
        }

        @media (max-width: 768px) {
          .hp-projects-section-new { min-height: auto !important; }
          .hp-projects-sticky { min-height: auto !important; height: auto !important; overflow: visible !important; }
          .hp-project-card { 
            flex: 0 0 90vw !important;
            width: 90vw !important;
            height: 110vw !important;
            min-height: 400px !important;
          }
          .hp-projects-viewport {
            height: 110vw !important;
            min-height: 400px !important;
          }
          .hp-projects-track { height: 100% !important; align-items: center !important; }
        }
      `}</style>
    </div>
  );
}
