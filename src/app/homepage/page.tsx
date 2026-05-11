"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

export default function Homepage() {
  const statsRef = useRef<HTMLElement | null>(null);
  const statCardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const certRef = useRef<HTMLElement | null>(null);
  const certCardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);

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
  useEffect(() => {
    let rafId = 0;

    const updateStatsCards = () => {
      if (!statsRef.current) return;

      const rect = statsRef.current.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const scrollRange = Math.max(rect.height - viewport, 1);
      const progress = Math.min(Math.max(-rect.top / scrollRange, 0), 1);
      const centeredY = Math.max((viewport - 344) / 2, 0);
      const startY = viewport + 80;
      const clamp01 = (value: number) => Math.min(Math.max(value, 0), 1);
      const easeOut = (value: number) => 1 - Math.pow(1 - value, 3);
      const moveBetween = (from: number, to: number, start: number, duration: number) => {
        const easedProgress = easeOut(clamp01((progress - start) / duration));
        return from + (to - from) * easedProgress;
      };

      statCardsRef.current.forEach((card, index) => {
        if (!card) return;

        let translateY = startY;

        if (index === 0) {
          translateY = moveBetween(startY, centeredY, 0.25, 0.18);
        } else if (index === 1) {
          translateY = moveBetween(startY, centeredY, 0.50, 0.18);
        } else if (index === 2) {
          translateY = moveBetween(startY, centeredY, 0.75, 0.18);
        }

        card.style.transform = `translate3d(0, ${translateY}px, 0)`;
      });
    };

    const updateCertCards = () => {
      if (!certRef.current) return;

      const rect = certRef.current.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const scrollRange = Math.max(rect.height - viewport, 1);
      const progress = Math.min(Math.max(-rect.top / scrollRange, 0), 1);
      const count = certCardsRef.current.length || 1;
      const loopProgress = progress * count;
      const activeIndex = Math.min(Math.floor(loopProgress), count - 1);
      const activeProgress = loopProgress - activeIndex;

      certCardsRef.current.forEach((card, index) => {
        if (!card) return;

        const isActive = index === activeIndex;
        const t = isActive ? activeProgress : 0;
        const ease = 1 - Math.pow(1 - t, 3);
        const translateX = Math.round(Math.sin(t * Math.PI) * 44);
        const startY = -Math.min(Math.max(viewport * 0.30, 230), 330);
        const endY = Math.min(Math.max(viewport * 0.42, 320), 470);
        const translateY = Math.round(startY + (endY - startY) * ease);
        const opacityIn = Math.min(Math.max(t / 0.10, 0), 1);
        const opacityOut = Math.min(Math.max((1 - t) / 0.12, 0), 1);
        const opacity = isActive ? opacityIn * opacityOut : 0;

        card.style.transform = `translate3d(-50%, -50%, 0) translate3d(${translateX}px, ${translateY}px, 0)`;
        card.style.opacity = `${opacity}`;
      });
    };

    const onScroll = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(() => {
        updateStatsCards();
        updateCertCards();
      });
    };

    updateStatsCards();
    updateCertCards();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveNewsIndex((index) => (index + 1) % newsItems.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

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
      title: "Meydan One Mall",
      alt: "Meydan One Mall",
      image: "p5.png",
      position: "center center",
    },
    {
      title: "Logistics Infrastructure",
      alt: "Logistics Infrastructure",
      image: "p6.png",
      position: "center center",
    },
    {
      title: "Dubai Uptown Tower",
      alt: "Dubai Uptown Tower",
      image: "p7.png",
      position: "center center",
    },
    {
      title: "DMCC Tower",
      alt: "DMCC Tower",
      image: "p8.png",
      position: "center center",
    },
  ];

  const featuredNews = newsItems[activeNewsIndex];
  const latestPosts = newsItems.filter((_, index) => index !== activeNewsIndex);

  return (
    <div className="homepage-wrapper">
      {/* HERO */}
      <section className="hp-hero-new" id="home-hero">
        <video className="hp-hero-video" autoPlay muted loop playsInline preload="auto" aria-label="Gulf Radiant infrastructure hero video">
          <source src="/Images/Home/hero video.mp4" type="video/mp4" />
        </video>
        <div className="hp-hero-overlay-new"></div>
        <div className="hp-hero-content">
          <h1>Powering Infrastructure <br />That Delivers</h1>
          <a href="#products-distribute" className="hp-hero-scroll" aria-label="Scroll to products">
            <span></span>
          </a>
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
        <section className="hp-stats-container" ref={statsRef}>
          <div className="hp-stats-stage">
            <div className="hp-stats-bg hp-stats-bg-orange-bottom" aria-hidden="true"></div>
            <div className="hp-stat-block hp-stat-card-one" ref={(node) => { statCardsRef.current[0] = node; }}>
              <h3>25<span>+</span></h3>
              <h4>Years of professionalism</h4>
              <p>Delivering reliable electrical solutions<br />with proven industry expertise</p>
            </div>
            <div className="hp-stat-block hp-stat-card-two" ref={(node) => { statCardsRef.current[1] = node; }}>
              <h3>30<span>+</span></h3>
              <h4>Countries served worldwide</h4>
              <p>Supporting projects across global<br />markets with a strong supply network</p>
            </div>
            <div className="hp-stat-block hp-stat-card-three" ref={(node) => { statCardsRef.current[2] = node; }}>
              <h3>100<span>+</span></h3>
              <h4>Product categories</h4>
              <p>Offering a wide range of specialized<br />products for diverse industrial needs</p>
            </div>
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
      <section className="hp-cert-section" ref={certRef}>
        <div className="hp-cert-content-inner">
          <div className="hp-cert-left">
            <div className="hp-cert-subtitle">- WHERE WE OPERATE -</div>
            <h2>Certification<br />& Approvals</h2>
            <div className="hp-cert-btn-container">
              <Link href="/certifications" className="hp-btn-orange-rect">View All Certificates</Link>
            </div>
          </div>

          <div className="hp-cert-right-container">
            <div className="hp-cert-scroll-window" aria-label="Certification approvals">
              {certImages.map((cert, idx) => (
                <div
                  className="hp-cert-box"
                  key={`${cert.src}-${idx}`}
                  ref={(node) => { certCardsRef.current[idx] = node; }}
                >
                  <Image src={cert.src} alt={cert.alt} fill style={{ objectFit: "contain", padding: "12px" }} />
                </div>
              ))}
            </div>
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
              { src: "Rectangle 11 (1).png", alt: "Occidental of Oman Inc." },
              { src: "Rectangle 12 (1).png", alt: "Danieli" },
              { src: "Rectangle 22.png", alt: "Emirates Global Aluminium" },
              { src: "Rectangle 20.png", alt: "Dragon Oil" },
              { src: "Rectangle 21.png", alt: "Sharjah Electricity and Water Authority" },
              { src: "Rectangle 16.png", alt: "Energy China" },
              { src: "Rectangle 17.png", alt: "Port of Salalah" },
              { src: "Rectangle 18.png", alt: "Julphar Gulf Pharmaceutical Industries" },
              { src: "Rectangle 19.png", alt: "DP World" },
            ].map((client) => (
              <div className="hp-trusted-logo-box" key={client.src}>
                <Image src={`/Images/Home/${client.src}`} alt={client.alt} fill style={{ objectFit: "contain" }} />
              </div>
            ))}
          </div>
          <Link href="/clients" className="hp-btn-orange-rect hp-trusted-cta">View All Clients</Link>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="hp-projects-section-new">
        <div className="hp-projects-sticky">
          <div className="hp-projects-top-fixed">
            <div className="hp-projects-subtitle">- OUR PROJECTS -</div>
            <h2>Projects We've Supplied</h2>
          </div>
          <div className="hp-projects-viewport">
            <div className="hp-projects-track">
              {suppliedProjects.map((project, index) => (
                <div className="hp-project-card" key={project.title}>
                  <Image
                    src={`/Images/Our Projects/${project.image}`}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 767px) 82vw, (max-width: 1199px) 44vw, 520px"
                    style={{ objectFit: "cover", objectPosition: project.position }}
                  />
                  <span className="hp-project-label">{project.title}</span>
                  {index === 0 && (
                    <Link href="/projects" className="hp-projects-link" aria-label="View all projects">
                      View All Projects
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="hp-quote-banner-new">
        <div className="hp-leadership-card">
          <div className="hp-leadership-left">
            <div className="hp-leadership-eyebrow">- LEADERSHIP MESSAGE -</div>
            <h3>Madhusudan<br />Mathilakath</h3>
            <p>(CEO)</p>
          </div>
          <div className="hp-leadership-copy">
            <p className="hp-leadership-main">
              "At Gulf Radiant, we believe that reliable engineering solutions are built through trust, quality, and long-term partnerships. For over two decades, we have proudly supported infrastructure, industrial, and energy projects across the GCC with globally trusted electrical solutions.
            </p>
            <div>
              <p>Our commitment remains focused on delivering performance-driven products, technical expertise, and dependable service that meet the evolving needs of modern industries."</p>
              <p>Thank you.</p>
            </div>
          </div>
        </div>
        <Image
          src="/Images/Our Projects/quote2.svg"
          alt=""
          width={271}
          height={200}
          className="hp-leadership-quote hp-leadership-quote-glow"
          aria-hidden="true"
        />
        <Image
          src="/Images/Our Projects/quote2.svg"
          alt=""
          width={271}
          height={200}
          className="hp-leadership-quote"
          aria-hidden="true"
        />
      </section>

      {/* NEWS */}
      <section className="hp-news-section-new" id="useful-information">
        <div className="hp-news-inner">
          <div className="hp-news-feature">
            <div className="hp-news-eyebrow">- INSIGHTS -</div>
            <h2>Latest News &amp; Industry Updates</h2>
            <article className="hp-news-feature-card">
              <Image
                src={`/Images/Our Projects/${featuredNews.image}`}
                alt={featuredNews.alt}
                key={featuredNews.image}
                fill
                sizes="(max-width: 991px) 100vw, 760px"
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
              <div className="hp-news-feature-info">
                <span className="hp-news-pill"><span></span>Industry News</span>
                <h3>{featuredNews.title}</h3>
                <p>{featuredNews.meta}</p>
              </div>
            </article>
          </div>
          <aside className="hp-latest-posts" aria-label="Latest posts">
            <h3>Latest Posts</h3>
            <div className="hp-latest-list">
              {latestPosts.map((post) => (
                <button
                  className="hp-latest-item"
                  key={post.title}
                  type="button"
                  onClick={() => setActiveNewsIndex(newsItems.findIndex((item) => item.title === post.title))}
                >
                  <div className="hp-latest-thumb">
                    <Image
                      src={`/Images/Our Projects/${post.image}`}
                      alt={post.alt}
                      fill
                      sizes="100px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="hp-latest-copy">
                    <h4>{post.title}</h4>
                    <p>{post.meta}</p>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="hp-contact-banner-new" id="contact">
        <Image src="/Images/Our Projects/nextpr.png" alt="" fill sizes="100vw" className="hp-contact-bg-img" />
        <div className="hp-contact-card">
          <div className="hp-contact-kicker">- BOOK A CALL -</div>
          <h2>READY TO POWER<br />YOUR NEXT PROJECT?</h2>
          <p>Let's discuss how Gulf Radiant can support your infrastructure, industrial, and engineering requirements with reliable electrical solutions tailored to your needs.</p>
          <div className="hp-contact-action">
            <Link href="mailto:info@gulfradiant.com" className="hp-contact-quote-btn">Request a quote</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
