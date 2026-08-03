"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const newsItems = [
  {
    title: "The Surge Protector Solution",
    meta: "Citel",
    image: "/Images/Blogs/Citel Sureg.png",
    link: "https://citel.fr/en/the-surge-protector-solution",
    alt: "Citel Surge Protector Solution",
  },
  {
    title: "Smart Lightning Warning System",
    meta: "Kumwell",
    image: "/Images/kumwell/Posters/6.Smart Lightning Warning System (SLWS).webp",
    link: "https://www.kumwell.com/en/smart-lightning-warning-system",
    alt: "Smart Lightning Warning System",
  },
  {
    title: "Isolating Spark Gaps Importance",
    meta: "Kumwell",
    image: "/Images/kumwell/Posters/3.Kumwell Isolating Spark Gap.webp",
    link: "https://www.kumwell.com/en/isolating-spark-gaps-importance",
    alt: "Isolating Spark Gaps",
  },
  {
    title: "ICAO Obstruction Lighting for Telecom, Broadcast Towers and Wind Masts",
    meta: "OBSTA",
    image: "/Images/Blogs/Obsta obstruction.png",
    link: "https://obsta.com/en/icao-obstruction-lighting-for-telecom-broadcast-towers-and-wind-masts",
    alt: "OBSTA ICAO Obstruction Lighting",
  },
  {
    title: "NVENT ERIFLEX",
    meta: "nVent",
    image: "https://img.youtube.com/vi/hEKrymXJv2U/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=hEKrymXJv2U",
    alt: "nVent ERIFLEX",
    externalImage: true,
  },
  {
    title: "Tigo Rapid Shutdown Solutions Brochure",
    meta: "Tigo",
    image: "/Images/Blogs/Tigo rapid shtdown.png",
    link: "https://cdn.prod.website-files.com/5fad551d7419c7a0e9e4aba4/689f93119162791afb35668c_Tigo%20Rapid%20Shutdown%20Solutions%20Brochure-4pg_spread-MG-2025.pdf",
    alt: "Tigo Rapid Shutdown Solutions",
  },
];

const ELECTRICAL_CATEGORIES = [
  {
    id: "Earthing • Lightning • Surge Protection Systems",
    label: "Earthing, Lightning & Surge Protection Systems",
    tag: "Earthing & Surge",
    desc: "Kumwell systems, lightning protection, & exothermic welding solutions",
  },
  {
    id: "Lighting • ACWL • Signal Lights",
    label: "Lighting , ACWL & Signal Lights",
    tag: "Warning & Obstruction",
    desc: "Safety tower hazard lighting, visual beacon indicators & structural aircraft warning lights",
  },
  {
    id: "Switching Accessories • Isolators Control Devices • Optimizers • Testing Equipments",
    label: "Isolators, Switching & Control devices",
    tag: "Control Devices",
    desc: "Explosion-proof plugs, receptacles, switching accessories, & isolators",
  },
  {
    id: "Cables & Cable Management Systems",
    label: "Cable & Cable management",
    tag: "Power Cables",
    desc: "Siechem, Tekab, Helukabel & high-performance electrical cables",
  },
  {
    id: "Industrial & Bulk Materials",
    label: "Industrial & Bulk Materials",
    tag: "Industrial",
    desc: "Comprehensive industrial solutions including fasteners, fittings, flanges, and mechanical equipment",
  }
];

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Holy See", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
  "Vanuatu", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

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
  const certRef = useRef<HTMLElement | null>(null);
  const certCardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const projectsRef = useRef<HTMLElement | null>(null);
  const projectsTrackRef = useRef<HTMLDivElement | null>(null);
  const projectsStickyRef = useRef<HTMLDivElement | null>(null);
  const cursorLinkRef = useRef<HTMLAnchorElement | null>(null);
  const projectsTopRef = useRef<HTMLDivElement | null>(null);
  const projectsViewportRef = useRef<HTMLDivElement | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    company: '',
    fullName: '',
    email: '',
    phone: '',
    industry: '',
    country: '',
    details: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus('success');
        setFormData({ company: '', fullName: '', email: '', phone: '', industry: '', country: '', details: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };
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
    { src: "/Images/Certificates/GR-iso.jpg", alt: "GR ISO 9001" },
    { src: "/Images/Certificates/dewa.jpg", alt: "DEWA Approval" },
    { src: "/Images/Certificates/civil aviation.jpg", alt: "Dubai Civil Aviation" },
    { src: "/Images/Certificates/cert-jsrs-logo.jpg", alt: "GR JSRS" },
    { src: "/Images/Certificates/cert-icv-logo.jpg", alt: "GR ICV" },
    { src: "/Images/Certificates/adnoc logo.svg", alt: "ADNOC" },
    { src: "/Images/Certificates/cert-addc-logo.jpg", alt: "ADDC" },
    { src: "/Images/Certificates/etihad we.webp", alt: "Etihad WE" },
  ];
  useEffect(() => {
    let rafId = 0;

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
      
      // Wrap around so items always come from the right or left
      if (d < -Math.floor(count / 2)) {
        d += count;
      }
      if (d > Math.floor(count / 2)) {
        d -= count;
      }

      // Show 3 certificates: d = -1, 0, 1
      const isVisible = Math.abs(d) <= 1;
      
      // Calculate responsive translate and scale
      const isMobileView = window.innerWidth <= 768;
      const offsetMultiplier = isMobileView ? 65 : 85; 
      const translateX = d * offsetMultiplier;
      
      const opacity = isVisible ? (Math.abs(d) === 1 ? 0.7 : 1) : 0;
      const scale = isVisible ? (Math.abs(d) === 1 ? 0.85 : 1) : 0.8;
      const zIndex = 5 - Math.abs(d);

      card.style.transform = `translate3d(-50%, -50%, 0) translate3d(${translateX}%, 0, 0) scale(${scale})`;
      card.style.opacity = `${opacity}`;
      card.style.zIndex = `${zIndex}`;
      card.style.pointerEvents = index === activeCertIndex ? "auto" : "none";
    });
  }, [activeCertIndex, certImages.length]);



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
    "kumwell.webp", "pittas.jpg", "obo.webp", "dietzel.webp", "siechem.webp",
    "BAHRA CABLES.svg", "CCG Logo.webp", "CITEL LOGO.webp", "COSMOPLAST LOGO.avif",
    "FRATER1-LOGO.webp",
    "HAUFF TECHNIK LOGO.webp", "LITETECH LOGO.webp", "NEELKANTH CABLE LOGO.webp",
    "NVENT CADDY LOGO.svg", "NVENT ERICO LOGO.svg", "logo-eriflex.svg", "OBSTA LOGO.webp",
    "PALAZZOLI GROUP LOGO.webp", "PSI LOGO.webp", "ROSE LOGO.webp",
    "SIRENA LOGO.webp", "TEKAB CABLES.webp", "TIGO LOGO.webp",
    "TUBIFOR LOGO.webp", "WALLMAX LOGO.webp", "HVTI.webp"
  ];

  const suppliedProjects = [
    {
      title: "Sea World Abu Dhabi",
      alt: "Sea World Abu Dhabi",
      image: "p1.webp",
      position: "center bottom",
    },
    {
      title: "Aldhafra PV2 Solar Power Plant",
      alt: "Aldhafra PV2 Solar Power Plant",
      image: "p2.webp",
      position: "center center",
    },
    {
      title: "Dubai Waste to Energy",
      alt: "Dubai Waste to Energy",
      image: "p3.webp",
      position: "center center",
    },
    {
      title: "Etihad Rail",
      alt: "Etihad Rail",
      image: "p4.webp",
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

  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [playCount, setPlayCount] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  const heroVideos = [
    {
      webm: "/Images/Home/hero video 2.webm",
      objectPosition: "top"
    },
    {
      webm: "/Images/Home/hero-video-optimized.webm",
      objectPosition: "center"
    }
  ];

  useEffect(() => {
    heroVideos.forEach((_, idx) => {
      const vid = videoRefs.current[idx];
      if (vid) {
        if (idx === activeHeroIndex) {
          vid.currentTime = 0;
          vid.play().catch(e => console.error("Video play failed:", e));
        } else {
          vid.pause();
        }
      }
    });
  }, [activeHeroIndex]);

  const handleVideoEnded = (idx: number) => {
    if (idx === 0 && playCount < 1) {
      setPlayCount(c => c + 1);
      const vid = videoRefs.current[idx];
      if (vid) {
        vid.currentTime = 0;
        vid.play().catch(e => console.error("Video replay failed:", e));
      }
    } else {
      setPlayCount(0);
      setActiveHeroIndex((idx + 1) % heroVideos.length);
    }
  };

  const featuredNews = newsItems[activeNewsIndex];
  const latestPosts = newsItems.filter((_, index) => index !== activeNewsIndex);

  return (
    <div className="homepage-wrapper">
      {/* HERO */}
      <section className="hp-hero-new" id="home-hero">
        {heroVideos.map((vid, idx) => (
          <video
            key={idx}
            ref={(el) => { videoRefs.current[idx] = el; }}
            className="hp-hero-video"
            autoPlay={idx === activeHeroIndex}
            muted
            playsInline
            preload="auto"
            onEnded={() => handleVideoEnded(idx)}
            style={{ 
              opacity: idx === activeHeroIndex ? 1 : 0, 
              transition: "opacity 1s ease",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: vid.objectPosition,
              zIndex: idx === activeHeroIndex ? 1 : 0
            }}
            aria-label="Gulf Radiant infrastructure hero video"
          >
            <source src={vid.webm} type="video/webm" />
          </video>
        ))}
        <div className="hp-hero-overlay-new"></div>
        <div className="hp-hero-content">
          <h1 className="hp-hero-title-desktop">
            <span className="hp-hero-title-nowrap">Give Your Projects</span><br /><span className="hp-hero-title-nowrap">the Right Connection</span>
          </h1>
        </div>
        
        <div className="hp-hero-metrics">
          <div className="hp-hero-metric">
            <span className="hp-hero-metric-number">750+</span>
            <span className="hp-hero-metric-text">Projects</span>
          </div>
          <div className="hp-hero-metric">
            <span className="hp-hero-metric-number">250+</span>
            <span className="hp-hero-metric-text">Clients</span>
          </div>
          <div className="hp-hero-metric">
            <span className="hp-hero-metric-number">25+</span>
            <span className="hp-hero-metric-text">Years of<br/>Professionalism</span>
          </div>
          <div className="hp-hero-metric">
            <span className="hp-hero-metric-number">30+</span>
            <span className="hp-hero-metric-text">Countries Served<br/>Worldwide</span>
          </div>
          <div className="hp-hero-metric">
            <span className="hp-hero-metric-number">99+</span>
            <span className="hp-hero-metric-text">Product<br/>Categories</span>
          </div>
        </div>

        <a href="#products-distribute" className="hp-hero-scroll" aria-label="Scroll to products" style={{ zIndex: 10 }}>
          <Image src="/Images/Home/arrow-bold.svg" alt="Scroll down" width={34} height={34} style={{ height: "auto" }} />
        </a>
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
          <h2 className="hp-divisions-main-title">Region's Leading Project Solutions Specialist</h2>{/* Force reload height removal */}

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
                    {cat.label}
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
            <h2>Our Brand Partners</h2>
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
            <h2>Why Choose Us?</h2>
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

      {/* CERTIFICATION */}{/* Force reload complete cert flex bypass */}
      <section className="hp-cert-section hp-cert-section-fix" ref={certRef}>
        <div className="hp-cert-content-inner hp-cert-content-inner-fix">
          <div className="hp-cert-left hp-cert-left-fix">
            <div className="hp-dist-subtitle" aria-label="Where we operate">
              <div className="hp-dist-subtitle-track" aria-hidden="true">
                <span>{"- WHERE\u00A0WE\u00A0OPERATE -"}</span>
                <span>{"- WHERE\u00A0WE\u00A0OPERATE -"}</span>
                <span>{"- WHERE\u00A0WE\u00A0OPERATE -"}</span>
                <span>{"- WHERE\u00A0WE\u00A0OPERATE -"}</span>
              </div>
            </div>
            <h2>Certified and Approved</h2>
            <div className="hp-cert-btn-container">
              <Link href="/certifications" className="hp-btn-orange-rect">View All Certificates</Link>
            </div>
          </div>

          <div className="hp-cert-right-container hp-cert-right-container-fix">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[800px] mx-auto" aria-label="Certification approvals">
              {certImages.map((cert, idx) => (
                <div className="relative w-full aspect-[3/2] bg-white rounded-lg flex justify-center items-center border border-white/70 shadow-[0_10px_30px_rgba(43,3,0,0.1),0_2px_10px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(43,3,0,0.15),0_4px_15px_rgba(0,0,0,0.1)]" key={`${cert.src}-${idx}`}>
                  <Image src={cert.src} alt={cert.alt} fill sizes="(max-width: 768px) 84vw, 315px" style={{ objectFit: "contain", padding: "12px" }} />
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
            <h2>Our Clients</h2>
          </div>
          <div className="hp-trusted-grid-inner">
            {[
              { src: "Rectangle 11 (1).webp", alt: "Occidental of Oman Inc.", folder: "Home" },
              { src: "Rectangle 12 (1).webp", alt: "Danieli", folder: "Home" },
              { src: "Rectangle 22.webp", alt: "Emirates Global Aluminium", folder: "Home" },
              { src: "sidem viola.svg", alt: "Sidem Veolia", folder: "Home" },
              { src: "drydock.webp", alt: "Drydocks World", folder: "Brand_partners" },
              { src: "voltas.svg", alt: "Voltas", folder: "Home" },
              { src: "Rectangle 20.webp", alt: "Dragon Oil", folder: "Home" },
              { src: "Rectangle 21.webp", alt: "Sharjah Electricity and Water Authority", folder: "Home" },
              { src: "Rectangle 16.webp", alt: "Energy China", folder: "Home" },
              { src: "Rectangle 17.webp", alt: "Port of Salalah", folder: "Home" },
              { src: "Rectangle 19.webp", alt: "DP World", folder: "Home" },
              { src: "dewa.webp", alt: "DEWA", folder: "Brand_partners" },
              { src: "samsung.webp", alt: "Samsung", folder: "Brand_partners" },
              { src: "Orascom.webp", alt: "Orascom", folder: "Brand_partners" },
              { src: "petrofac.webp", alt: "Petrofac", folder: "Brand_partners" },
              { src: "technip.webp", alt: "Technip", folder: "Brand_partners" },
              { src: "Saipem.webp", alt: "Saipem", folder: "Brand_partners" },
              { src: "L&T.webp", alt: "L&T", folder: "Brand_partners" },
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
            <h2>Our Projects</h2>
          </div>
          <div className="hp-projects-viewport" ref={projectsViewportRef}>
            <div className="hp-projects-track hp-projects-marquee">
              {suppliedProjects.map((project, idx) => (
                <div className="hp-project-card" key={`proj1-${idx}`}>
                  <Image
                    src={`/Images/our_projects/${project.image}`}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 767px) 65vw, (max-width: 1199px) 44vw, 520px"
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
                    sizes="(max-width: 767px) 65vw, (max-width: 1199px) 44vw, 520px"
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
              <span style={{ color: "#ff5b05", display: "block", marginTop: "-0.15em" }}>CEO</span>
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
            <h2>Latest News and Updates</h2>
            <style dangerouslySetInnerHTML={{ __html: `
              .hp-news-feature-info {
                background: rgba(0, 0, 0, 0.5) !important;
                backdrop-filter: blur(12px) !important;
                -webkit-backdrop-filter: blur(12px) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
              }
              @media (max-width: 991px) {
                .hp-news-feature-info {
                  left: 0 !important;
                  right: 0 !important;
                  bottom: 0 !important;
                  width: 100% !important;
                  border-radius: 0 0 16px 16px !important;
                  padding: 16px 20px !important;
                  height: auto !important;
                  max-height: none !important;
                }
              }
            `}} />
            <article className="hp-news-feature-card" style={{ position: "relative", cursor: "pointer" }} onClick={() => window.open(featuredNews.link, "_blank")}>
              {featuredNews.externalImage ? (
                <img
                  src={featuredNews.image}
                  alt={featuredNews.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", position: "absolute", top: 0, left: 0 }}
                />
              ) : (
                <Image
                  src={featuredNews.image.startsWith('/') ? featuredNews.image : `/Images/our_projects/${featuredNews.image}`}
                  alt={featuredNews.alt}
                  key={featuredNews.image}
                  fill
                  sizes="(max-width: 991px) 100vw, 760px"
                  style={{ objectFit: "cover", objectPosition: "center center" }}
                />
              )}
              <div className="hp-news-feature-info">
                <span className="hp-news-pill"><span></span>{featuredNews.meta}</span>
                <h3 style={{ color: "#ff5b05" }}>{featuredNews.title}</h3>
              </div>
            </article>
          </div>
          <aside className="hp-latest-posts" aria-label="Latest posts">
            <h3 style={{ fontWeight: 500 }}>Latest Posts</h3>
            <div className="hp-latest-list" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {latestPosts.map((post) => (
                <div
                  className="hp-latest-item"
                  key={post.title}
                  style={{ gridTemplateColumns: "180px 1fr", display: "grid", gap: "20px", cursor: "pointer" }}
                  onClick={() => window.open(post.link, "_blank")}
                >
                  <div className="hp-latest-thumb" style={{ position: "relative", width: "180px", height: "110px", borderRadius: "12px", overflow: "hidden" }}>
                    {post.externalImage ? (
                      <img
                        src={post.image}
                        alt={post.alt}
                        style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }}
                      />
                    ) : (
                      <Image
                        src={post.image.startsWith('/') ? post.image : `/Images/our_projects/${post.image}`}
                        alt={post.alt}
                        fill
                        sizes="180px"
                        style={{ objectFit: "cover" }}
                      />
                    )}
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
            <style>{`
              .hp-git-power-heading {
                font-size: clamp(60px, 6vw, 85px) !important;
              }
            `}</style>
            <h2 className="hp-git-power-heading" style={{ color: "#ffffff", marginBottom: "30px", lineHeight: "1.1" }}>Ready to Power<br />your Next Project?</h2>
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
            <h3 style={{ color: "#ffffff", marginBottom: "30px", fontSize: "32px" }}>Talk to an Expert</h3>
            <form className="hp-git-form" onSubmit={handleContactSubmit}>
              <div className="hp-git-field">
                <label htmlFor="git-company" style={{ color: "rgba(255, 255, 255, 0.9)" }}>Company</label>
                <input id="git-company" type="text" placeholder="Jhon Smith" required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
              </div>
              <div className="hp-git-field">
                <label htmlFor="git-fullname" style={{ color: "rgba(255, 255, 255, 0.9)" }}>Full Name</label>
                <input id="git-fullname" type="text" placeholder="Jhon Smith Comapny" required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} />
              </div>
              <div className="hp-git-row">
                <div className="hp-git-field">
                  <label htmlFor="git-email" style={{ color: "rgba(255, 255, 255, 0.9)" }}>Email Address</label>
                  <input id="git-email" type="email" placeholder="john@email.com" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="hp-git-field">
                  <label htmlFor="git-phone" style={{ color: "rgba(255, 255, 255, 0.9)" }}>Phone Number</label>
                  <input id="git-phone" type="tel" placeholder="+XX XXXXXXXXX" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
              <div className="hp-git-row">
                <div className="hp-git-field">
                  <label htmlFor="git-industry" style={{ color: "rgba(255, 255, 255, 0.9)" }}>Industry</label>
                  <div className="hp-git-select-wrap">
                    <select id="git-industry" value={formData.industry} onChange={e => setFormData({...formData, industry: e.target.value})} required>
                      <option value="" disabled style={{ color: "#000", backgroundColor: "#fff" }}>- None -</option>
                      <option value="infrastructure" style={{ color: "#000", backgroundColor: "#fff" }}>Infrastructure</option>
                      <option value="industrial" style={{ color: "#000", backgroundColor: "#fff" }}>Industrial</option>
                      <option value="commercial" style={{ color: "#000", backgroundColor: "#fff" }}>Commercial</option>
                      <option value="energy" style={{ color: "#000", backgroundColor: "#fff" }}>Energy</option>
                      <option value="other" style={{ color: "#000", backgroundColor: "#fff" }}>Other</option>
                    </select>
                  </div>
                </div>
                <div className="hp-git-field">
                  <label htmlFor="git-country" style={{ color: "rgba(255, 255, 255, 0.9)" }}>Country</label>
                  <div className="hp-git-select-wrap">
                    <select id="git-country" value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} required>
                      <option value="" disabled style={{ color: "#000", backgroundColor: "#fff" }}>- Select Country -</option>
                      {COUNTRIES.map(c => <option key={c} value={c} style={{ color: "#000", backgroundColor: "#fff" }}>{c}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div className="hp-git-field">
                <label htmlFor="git-details">Project Details (Optional)</label>
                <textarea id="git-details" rows={4} placeholder="Tell us about your project..." value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} />
              </div>
              <button type="submit" className="hp-git-submit-btn" disabled={formStatus === 'submitting'} style={{ opacity: formStatus === 'submitting' ? 0.7 : 1 }}>
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'success' && <p style={{ color: '#4ade80', marginTop: '16px', textAlign: 'center' }}>Message sent successfully!</p>}
              {formStatus === 'error' && <p style={{ color: '#f87171', marginTop: '16px', textAlign: 'center' }}>Failed to send message. Please try again.</p>}
            </form>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .hp-projects-section-new { min-height: auto !important; }
          .hp-projects-sticky { min-height: auto !important; height: auto !important; overflow: visible !important; }
          .hp-project-card { 
            flex: 0 0 calc((100vw - 40px) / 2.5) !important;
            width: calc((100vw - 40px) / 2.5) !important;
            min-width: 280px !important;
            aspect-ratio: 16 / 11;
            height: auto !important;
            min-height: 0 !important;
          }
          .hp-projects-viewport {
            height: auto !important;
            min-height: 0 !important;
          }
          .hp-projects-track { height: 100% !important; align-items: center !important; }
        }

        @media (max-width: 768px) {
          .hp-projects-section-new { min-height: auto !important; }
          .hp-projects-sticky { min-height: auto !important; height: auto !important; overflow: visible !important; }
          .hp-project-card { 
            flex: 0 0 65vw !important;
            width: 65vw !important;
            min-width: 240px !important;
            aspect-ratio: 16 / 11;
            height: auto !important;
            min-height: 0 !important;
          }
          .hp-projects-viewport {
            height: auto !important;
            min-height: 0 !important;
          }
          .hp-projects-track { height: 100% !important; align-items: center !important; }
        }
      `}</style>
    </div>
  );
}
