"use client";

import Image from "next/image";
import { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";

const CATEGORIES = [
  "All",
  "LIGHTNING & EXOTHERMIC WELDING  PROTECTION",
  "aircraft warning lights",
  "high ampherage pluug and sockets "
];

const CATEGORY_MAP = [
  {
    id: "All",
    label: "All Projects",
    image: "/Images/our_projects/img7.svg",
    desc: "Explore all our completed projects across industries"
  },
  {
    id: "LIGHTNING & EXOTHERMIC WELDING  PROTECTION",
    label: "Lightning & Exothermic Welding",
    image: "/Images/our_projects/LIGHTNING & EXOTHERMIC WELDING  PROTECTION/Dubai-Waste-to-Energy.webp",
    desc: "Earthing, lightning protection, and exothermic welding solutions"
  },
  {
    id: "aircraft warning lights",
    label: "Aircraft Warning Lights",
    image: "/Images/our_projects/aircraft warning lights/Dubai Uptown Tower.jpg",
    desc: "Aviation obstruction lights and warning system projects"
  },
  {
    id: "high ampherage pluug and sockets ",
    label: "High Amperage Plugs & Sockets",
    image: "/Images/our_projects/p6.png",
    desc: "Heavy industrial plugs, receptacles, and power sockets"
  }
];

const PROJECTS = [
  // LIGHTNING & EXOTHERMIC WELDING PROTECTION
  {
    category: "LIGHTNING & EXOTHERMIC WELDING  PROTECTION",
    title: "ADNOC’s Upper Zakum Oil Field",
    location: "Abu Dhabi, UAE",
    description: "Exothermic welding and lightning protection systems for one of the world's largest offshore oil fields, ensuring robust safety and grounding solutions.",
    img: "/Images/our_projects/LIGHTNING & EXOTHERMIC WELDING  PROTECTION/ADNOC’s Upper Zakum Oil Field.jpg"
  },
  {
    category: "LIGHTNING & EXOTHERMIC WELDING  PROTECTION",
    title: "Al Dhafra PV2 Solar Power Plant",
    location: "Abu Dhabi, UAE",
    description: "Supplied advanced grounding, earthing, and lightning protection systems for the world's largest single-site solar power plant.",
    img: "/Images/our_projects/LIGHTNING & EXOTHERMIC WELDING  PROTECTION/Al-Dhafra-PV2-Solar-project-in-Abu-Dhabi.jpg"
  },
  {
    category: "LIGHTNING & EXOTHERMIC WELDING  PROTECTION",
    title: "Dubai Waste to Energy",
    location: "Dubai, UAE",
    description: "Specialized lightning protection and earthing systems for the world's largest waste-to-energy facility, supporting green and safe power generation.",
    img: "/Images/our_projects/LIGHTNING & EXOTHERMIC WELDING  PROTECTION/Dubai-Waste-to-Energy.webp"
  },
  {
    category: "LIGHTNING & EXOTHERMIC WELDING  PROTECTION",
    title: "Dubai Hassyan Clean Coal Power Plant",
    location: "Dubai, UAE",
    description: "Delivered comprehensive earthing and lightning protection solutions to guarantee electrical safety and system reliability for the power plant.",
    img: "/Images/our_projects/LIGHTNING & EXOTHERMIC WELDING  PROTECTION/Dubai Hassyan Clean Coal Power  Plant.avif"
  },
  {
    category: "LIGHTNING & EXOTHERMIC WELDING  PROTECTION",
    title: "Etihad Rail",
    location: "UAE",
    description: "High-performance grounding and lightning protection systems across the national railway network, protecting key transportation infrastructure.",
    img: "/Images/our_projects/LIGHTNING & EXOTHERMIC WELDING  PROTECTION/Etihad Rail.jpg"
  },

  // AIRCRAFT WARNING LIGHTS
  {
    category: "aircraft warning lights",
    title: "Dubai Uptown Tower",
    location: "Dubai, UAE",
    description: "High-intensity and medium-intensity LED aircraft warning light systems, ensuring reliable visibility and compliance for high-rise aviation safety.",
    img: "/Images/our_projects/aircraft warning lights/Dubai Uptown Tower.jpg"
  },
  {
    category: "aircraft warning lights",
    title: "Aykon Tower",
    location: "Dubai, UAE",
    description: "Structural aircraft warning lights and obstruction lighting systems installed to meet aviation safety regulations for this landmark high-rise development.",
    img: "/Images/our_projects/aircraft warning lights/Aykon Tower.jpg"
  },
  {
    category: "aircraft warning lights",
    title: "DEWA Head Quarters (Al-Shera'a)",
    location: "Dubai, UAE",
    description: "Integrated obstruction lighting and aircraft warning systems tailored for DEWA's highly sustainable new headquarters building.",
    img: "/Images/our_projects/aircraft warning lights/Dewa Head Quarters.jpg"
  },
  {
    category: "aircraft warning lights",
    title: "Binghatti Phantom",
    location: "Dubai, UAE",
    description: "State-of-the-art aircraft warning lights and obstruction lighting systems installed to guarantee safety and compliance for this modern architectural tower.",
    img: "/Images/our_projects/aircraft warning lights/Binghatti Phantom.webp"
  },
  {
    category: "aircraft warning lights",
    title: "Sky Hills Residence",
    location: "Dubai, UAE",
    description: "Premium obstruction lighting and aircraft warning solutions supplied to meet high safety standards for luxury residential high-rise towers.",
    img: "/Images/our_projects/aircraft warning lights/SKY HILLS RESIDENCE.jpg"
  }
];

const PALAZZOLI_PROJECTS = [
  { client: "Samsung C&T", project: "ADNOC - HVDC Lightning Project", country: "UAE" },
  { client: "Spaceage General Contracting Co.W.L.L.", project: "2 nos of 33 kV ADDC Substation", country: "UAE" },
  { client: "Danway Electrical & Mechanical Engineering L.L.C.", project: "33 kV ADDC Substation", country: "UAE" },
  { client: "Electro Mechanical Company LLC", project: "132 kV Kizad Substation - TRANSCO", country: "UAE" },
  { client: "Larsen & Toubro Limited - Construction", project: "132kV Badiya Substation - DEWA", country: "UAE" },
  { client: "Larsen & Toubro Limited - Construction", project: "DEWA 1,800MW Phase VI of MBR Solar Park in Dubai", country: "UAE" },
  { client: "Extra High Voltage Electromechanical LLC", project: "400/132kV Mahawi STATCOM Capital Grid Station - TRANSCO", country: "UAE" },
  { client: "GECO Mechanical & Electrical LTD", project: "SEWA - 132 KV Substation", country: "UAE" },
  { client: "TEMCO - Sole Proprietorship. LLC.", project: "1102 - Mussfah Tunnel ICAD", country: "UAE" },
  { client: "Metromac Automation LLC", project: "Emirates Steel Plant", country: "UAE" },
  { client: "Voltas LTD", project: "DEWA - Hatta Pumped Storage Hydro Powerplant", country: "UAE" },
  { client: "AG PCS Switchgear Manufacturing LLC", project: "NEOM Green Hydrogen Project - Load Substation", country: "KSA" },
  { client: "AG PCS Switchgear Manufacturing LLC", project: "Jafurah Cogen Field Development - ACS", country: "KSA" },
  { client: "AG PCS Switchgear Manufacturing LLC", project: "Construction of YNB Wind 380/110kV BSP", country: "KSA" },
  { client: "Danway Electrical & Mechanical Engineering L.L.C.", project: "DEWA - 132/11 KV Mostwdat Substation", country: "UAE" },
  { client: "Danway Electrical & Mechanical Engineering L.L.C.", project: "DEWA - Khernhbia 132/11kV Substation", country: "UAE" },
  { client: "AG PCS Switchgear Manufacturing LLC", project: "NEOM Green Hydrogen Project - PV Plant Switching Station", country: "KSA" },
  { client: "National Contracting Company Ltd (NCC)", project: "Transco - Shuweihat Grid Station Extension & Borouge 4", country: "UAE" },
  { client: "Extra High Voltage Electromechanical LLC", project: "Transco - 220/33kV Al Faqaa Substation", country: "UAE" },
  { client: "Bahrain & Emirates Electrical & Mechanical", project: "BAPS Mandir Project", country: "UAE" },
  { client: "Larsen & Toubro Limited - Construction", project: "DEWA - Nadhessa 132/11kV Substation", country: "UAE" },
  { client: "Lindenberg-Emirates LLC", project: "Etihad WE - Alaqah & Fujairah Airport Substation", country: "UAE" },
  { client: "National Contracting Co Ltd - AD", project: "Transco - Shamkha 400/132/33kV Grid Station", country: "UAE" },
  { client: "Atlas Industries Equp & Spare Parts Trading LLC", project: "Al Aweer H4 Power Plant DEWA", country: "UAE" },
  { client: "Voltas LTD", project: "Fujairah Airport", country: "UAE" },
  { client: "Voltas Ltd", project: "Mina Zayed Tunnel Project", country: "UAE" },
  { client: "Extra High Voltage Electromechanical LLC", project: "Transco - Al Dhafra Solar Power Plant", country: "UAE" },
  { client: "National Contracting Company Ltd (NCC)", project: "Assiut Supercritical Power Plant 1x650 MW Steam Power Station", country: "Egypt" }
];

function ProjectsPageContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Update category if URL param changes
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && CATEGORIES.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  useEffect(() => {
    // Scroll smoothly to top when category changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory]);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    const url = new URL(window.location.href);
    url.searchParams.set("category", cat);
    window.history.pushState({}, "", url.toString());
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedCategory);

  const activeCategoryData = CATEGORY_MAP.find(c => c.id === selectedCategory);

  return (
    <main className="projects-page-wrapper">
      {/* 1ST SECTION: HERO & CATEGORIES */}
      <section className="new-prod-hero-section">
        <div className="new-prod-section-bg">
          <Image
            src="/Images/our_projects/img7.svg"
            alt="Hero Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="new-prod-overlay" />
        </div>

        <div className="new-prod-section-inner">
          <div className="new-prod-header-row">
            <h1 className="new-prod-title">Our Projects</h1>
            <div className="new-prod-carousel-controls">
              <button onClick={scrollLeft} className="carousel-control-btn" aria-label="Scroll left">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"></path>
                </svg>
              </button>
              <button onClick={scrollRight} className="carousel-control-btn" aria-label="Scroll right">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l6 6-6 6"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* CATEGORY CAROUSEL */}
          <div className="new-prod-cat-grid" ref={carouselRef} style={{ justifyContent: "center" }}>
            {CATEGORY_MAP.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`new-prod-cat-card ${isActive ? "active" : ""}`}
                  onClick={() => handleCategorySelect(cat.id)}
                >
                  <div className="new-prod-cat-card-img-wrapper">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="260px"
                    />
                  </div>
                  <div className="new-prod-cat-card-overlay" />
                  <div className="new-prod-cat-card-content">
                    <h3 className="new-prod-cat-card-title">{cat.label}</h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* STYLE INJECTION TO CENTER CARDS AND REDUCE SPACE */}
      <style>{`
        @media (min-width: 1024px) {
          .new-prod-cat-grid {
            justify-content: center !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .new-prod-cat-card {
            flex: 0 0 280px !important;
            width: 280px !important;
          }
        }
      `}</style>

      {/* TRUSTED BAR */}
      <div className="projects-trusted-bar" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", textAlign: "center", padding: "40px 0 40px 0", background: "#ffffff" }}>
        <h2 style={{ color: "#000000", margin: "0" }}>Trusted by Clients Across Industries</h2>
      </div>

      {/* 2ND SECTION: PROJECTS GRID / TEXT TABLE */}
      {selectedCategory === "high ampherage pluug and sockets " ? (
        <div style={{ background: "#ffffff", padding: "10px 40px 60px", width: "100%" }}>
          <style>{`
            @keyframes cardFlipIn {
              0%   { opacity: 0; transform: perspective(600px) rotateY(-90deg) scale(0.9); }
              60%  { opacity: 1; transform: perspective(600px) rotateY(8deg) scale(1.02); }
              80%  { transform: perspective(600px) rotateY(-4deg) scale(0.99); }
              100% { opacity: 1; transform: perspective(600px) rotateY(0deg) scale(1); }
            }
          `}</style>
          <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
            {/* Project cards grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "20px" }}>
              {PALAZZOLI_PROJECTS.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #eaeaea",
                    borderRadius: "16px",
                    padding: "28px 28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    position: "relative",
                    overflow: "hidden",
                    animation: "cardFlipIn 0.55s cubic-bezier(0.23,1,0.32,1) both",
                    animationDelay: `${idx * 50}ms`,
                    transition: "box-shadow 0.25s ease, border-color 0.25s ease"
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "0 12px 40px rgba(249,85,5,0.12)";
                    el.style.transform = "translateY(-4px)";
                    el.style.borderColor = "#ff5b05";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                    el.style.transform = "translateY(0)";
                    el.style.borderColor = "#eaeaea";
                  }}
                >
                  {/* Index number accent */}
                  <div style={{ position: "absolute", top: "20px", right: "22px", fontFamily: "var(--font-degular), sans-serif", fontSize: "13px", fontWeight: "700", color: "#ff5b05", opacity: 0.5 }}>
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  {/* Country badge */}
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", width: "fit-content" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ff5b05", display: "inline-block", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-neutiva), sans-serif", fontSize: "11px", fontWeight: "700", color: "#ff5b05", textTransform: "uppercase", letterSpacing: "1.2px" }}>{item.country}</span>
                  </div>

                  {/* Project name */}
                  <h3 style={{ fontFamily: "var(--font-degular), sans-serif", fontSize: "18px", fontWeight: "600", color: "#0a0a0a", lineHeight: "1.3", margin: 0, paddingRight: "28px" }}>
                    {item.project}
                  </h3>

                  {/* Divider */}
                  <div style={{ height: "1px", background: "#f0f0f0", margin: "4px 0" }} />

                  {/* Client */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "2px", flexShrink: 0 }}>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span style={{ fontFamily: "var(--font-neutiva), sans-serif", fontSize: "13px", color: "#777", lineHeight: "1.4" }}>{item.client}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "40px", textAlign: "center", color: "#999", fontSize: "13px", fontFamily: "var(--font-neutiva), sans-serif", letterSpacing: "0.3px" }}>
              Supplied with Palazzoli (Italy) high amperage plugs, receptacles, and power distribution systems.
            </div>
          </div>
        </div>
      ) : (
        <div style={{ background: "#ffffff" }}>
          {/* Projects Grid for All, Lightning, and Aircraft Categories */}
          <div className="projects-grid-container" style={{ background: "#ffffff", padding: "10px 0 60px 0" }}>
            {filteredProjects.map((project, index) => (
              <div className="project-detail-card" key={index} style={{ background: "#ffffff" }}>
                <div className="project-card-image">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                </div>
                <div className="project-card-info" style={{ background: "#ffffff" }}>
                  <h3 style={{ color: "#000000" }}>{project.title}</h3>
                  <p className="project-location" style={{ color: "#ff5b05" }}>{project.location}</p>
                  <p className="project-desc" style={{ color: "#555555" }}>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={
      <div className="new-prod-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', color: '#fff' }}>
        <p style={{ fontSize: '20px', opacity: 0.7 }}>Loading Projects...</p>
      </div>
    }>
      <ProjectsPageContent />
    </Suspense>
  );
}
