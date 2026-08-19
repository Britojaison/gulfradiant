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

interface CategoryItem {
  id: string;
  label: string;
  image: string;
  desc: string;
  objectFit?: "cover" | "contain" | "fill";
  filter?: string;
}

const CATEGORY_MAP: CategoryItem[] = [
  {
    id: "All",
    label: "All Projects",
    image: "/Images/our_projects/img7.svg",
    desc: "Explore all our completed projects across industries"
  },
  {
    id: "LIGHTNING & EXOTHERMIC WELDING  PROTECTION",
    label: "Earthing Lightning & Exothermic Welding Systems",
    image: "/Images/our_projects/LIGHTNING & EXOTHERMIC WELDING  PROTECTION/Dubai-Waste-to-Energy.webp",
    desc: "Earthing, lightning protection, and exothermic welding solutions"
  },
  {
    id: "aircraft warning lights",
    label: "Aircraft Warning Lights",
    image: "/Images/our_projects/aircraft warning lights/Dubai Uptown Tower.jpg",
    desc: "Aviation obstruction lights and warning system projects",
    objectFit: "fill" as const
  },
  {
    id: "high ampherage pluug and sockets ",
    label: "High Amperage Plugs & Sockets",
    image: "/Images/our_projects/p6.webp",
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

const UPCOMING_PROJECTS = [
  {
    category: "aircraft warning lights",
    title: "Burj Binghatti",
    location: "Dubai, UAE",
    description: "Upcoming installation of cutting-edge aircraft warning lights and obstruction lighting systems for this ultra-luxury architectural masterpiece.",
    img: "/Images/our_projects/aircraft warning lights/BURJ BINGHATTI.jpg"
  },
  {
    category: "aircraft warning lights",
    title: "DAMAC Aykon Safa 2",
    location: "Dubai, UAE",
    description: "Advanced aviation safety lighting systems to be deployed, ensuring top-tier visibility and compliance for this prestigious high-rise development.",
    img: "/Images/our_projects/aircraft warning lights/DAMAC AYKON SAFA 2.jpg"
  },
  {
    category: "aircraft warning lights",
    title: "DAMAC Bay 1",
    location: "Dubai, UAE",
    description: "Future implementation of high-performance aircraft warning and obstruction lighting for this premium waterfront residential tower.",
    img: "/Images/our_projects/aircraft warning lights/DAMAC BAY 1.jpg"
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
      const timer = requestAnimationFrame(() => setSelectedCategory(cat));
      return () => cancelAnimationFrame(timer);
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

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedCategory);

  const filteredUpcomingProjects = selectedCategory === "All"
    ? UPCOMING_PROJECTS
    : UPCOMING_PROJECTS.filter(project => project.category === selectedCategory);

  return (
    <main className="projects-page-wrapper">
      {/* 1ST SECTION: HERO & CATEGORIES */}
      <section className="new-prod-hero-section" style={{ backgroundImage: "url('/Images/Certifications/bg.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>

        <div className="new-prod-section-inner">
          <div className="new-prod-header-row">
            <h1 className="new-prod-title projects-main-heading" style={{ fontFamily: "var(--font-degular), sans-serif", fontWeight: "500" }}>Our Project Portfolio</h1>
          </div>

          {/* CATEGORY CAROUSEL */}
          <div className="new-prod-cat-grid" ref={carouselRef}>
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
                      style={{ 
                        objectFit: cat.objectFit || "cover",
                        filter: cat.filter || "none" 
                      }}
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
            margin: 0 auto !important;
            width: max-content !important;
            max-width: 100% !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .new-prod-cat-card {
            flex: 0 0 320px !important;
            width: 320px !important;
          }
        }
      `}</style>

      {/* TRUSTED BAR */}
      <div className="projects-trusted-bar" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", textAlign: "center", padding: "40px 20px", background: "#ffffff" }}>
        <h2 className="projects-main-heading" style={{ color: "#000000", margin: "0", fontFamily: "var(--font-degular), sans-serif", fontWeight: "500", maxWidth: "1600px", lineHeight: "1.2", fontSize: "48px" }}>
          {selectedCategory === "All" && "UAE's Leading Solutions Provider for Oil & Gas, Energy, Infrastructural & Industrial Projects."}
          {selectedCategory === "LIGHTNING & EXOTHERMIC WELDING  PROTECTION" && "The GCC's Trusted Leader in EARTHING & LIGHTNING Protection Solutions"}
          {selectedCategory === "aircraft warning lights" && "Lighting the Skyline — Some of the UAE's Most Iconic Landmarks Trust our AIRCRAFT WARNING LIGHTS"}
          {selectedCategory === "high ampherage pluug and sockets " && "Powering Heavy Industry with High-Amperage Switching Systems and Heavy-Duty Industrial Connectivity Solutions."}
        </h2>
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
            .flip-card {
              background-color: transparent;
              perspective: 1200px;
              height: 340px;
              cursor: pointer;
            }
            .flip-card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              text-align: center;
              transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
              transform-style: preserve-3d;
            }
            .flip-card:hover .flip-card-inner {
              transform: rotateY(180deg);
            }
            .flip-card-front, .flip-card-back {
              position: absolute;
              width: 100%;
              height: 100%;
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              border-radius: 28px;
              padding: 36px 36px 32px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-shadow: 0 4px 20px rgba(0,0,0,0.04);
            }
            .flip-card-front {
              background-color: #eaecef;
              color: #222222;
            }
            .flip-card-back {
              background-color: #1a1a1a;
              color: #ffffff;
              transform: rotateY(180deg);
            }
          `}</style>
          <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
            {/* Project cards grid */}
            <div className="palazzoli-project-grid">
              {PALAZZOLI_PROJECTS.map((item, idx) => (
                <div
                  key={idx}
                  className="flip-card"
                  style={{
                    animation: "cardFlipIn 0.55s cubic-bezier(0.23,1,0.32,1) both",
                    animationDelay: `${idx * 50}ms`
                  }}
                >
                  <div className="flip-card-inner">
                    {/* Front Face */}
                    <div className="flip-card-front">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                        {/* Country Badge */}
                        <div style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "10px",
                          background: "#ffffff",
                          padding: "6px 20px 6px 14px",
                          borderRadius: "30px",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
                        }}>
                          <span style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            background: "#ff5b05",
                            display: "inline-block",
                            flexShrink: 0
                          }} />
                          <span style={{
                            fontFamily: "var(--font-degular), sans-serif",
                            fontSize: "18px",
                            fontWeight: "700",
                            color: "#222222",
                            letterSpacing: "0.5px"
                          }}>{item.country}</span>
                        </div>

                        {/* Index Badge */}
                        <div style={{
                          width: "44px",
                          height: "44px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#ffffff",
                          borderRadius: "50%",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                          fontFamily: "var(--font-degular), sans-serif",
                          fontSize: "18px",
                          fontWeight: "700",
                          color: "#222222"
                        }}>
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                      </div>

                      {/* Client Name as Title on Front */}
                      <h3 style={{
                        fontFamily: "var(--font-degular), sans-serif",
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#222222",
                        lineHeight: "1.25",
                        margin: "12px 0 8px 0",
                        textAlign: "left"
                      }}>
                        {item.client}
                      </h3>

                      {/* Hint Footer */}
                      <div style={{
                        fontFamily: "var(--font-neutiva), sans-serif",
                        fontSize: "12px",
                        color: "#888c91",
                        textAlign: "left",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px"
                      }}>
                        <span>Hover to view project details</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className="flip-card-back">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                        {/* Country Badge */}
                        <div style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "10px",
                          background: "rgba(255, 255, 255, 0.08)",
                          padding: "6px 20px 6px 14px",
                          borderRadius: "30px",
                          border: "1px solid rgba(255, 255, 255, 0.1)"
                        }}>
                          <span style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            background: "#ff5b05",
                            display: "inline-block",
                            flexShrink: 0
                          }} />
                          <span style={{
                            fontFamily: "var(--font-degular), sans-serif",
                            fontSize: "18px",
                            fontWeight: "700",
                            color: "#ffffff",
                            letterSpacing: "0.5px"
                          }}>{item.country}</span>
                        </div>

                        {/* Index Badge */}
                        <div style={{
                          width: "44px",
                          height: "44px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#ff5b05",
                          borderRadius: "50%",
                          fontFamily: "var(--font-degular), sans-serif",
                          fontSize: "18px",
                          fontWeight: "700",
                          color: "#ffffff"
                        }}>
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                      </div>

                      {/* Project Details as Title on Back */}
                      <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "8px", margin: "10px 0" }}>
                        <span style={{
                          fontFamily: "var(--font-neutiva), sans-serif",
                          fontSize: "11px",
                          fontWeight: "700",
                          color: "#ff5b05",
                          textTransform: "uppercase",
                          letterSpacing: "1.5px"
                        }}>PROJECT NAME</span>
                        <h3 style={{
                          fontFamily: "var(--font-degular), sans-serif",
                          fontSize: "24px",
                          fontWeight: "700",
                          color: "#ffffff",
                          lineHeight: "1.25",
                          margin: "0"
                        }}>
                          {item.project}
                        </h3>
                      </div>

                      {/* Card Bottom Branding */}
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                        paddingTop: "16px"
                      }}>
                        <span style={{
                          fontFamily: "var(--font-neutiva), sans-serif",
                          fontSize: "12px",
                          color: "#888c91"
                        }}>High Amperage Project</span>
                        <span style={{
                          fontFamily: "var(--font-degular), sans-serif",
                          fontSize: "12px",
                          fontWeight: "700",
                          color: "#ff5b05"
                        }}>PALAZZOLI</span>
                      </div>
                    </div>
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
                    loading="lazy"
                    decoding="async"
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

          {/* Upcoming Projects Section */}
          {filteredUpcomingProjects.length > 0 && (
            <div style={{ padding: "40px 20px", textAlign: "left", borderTop: "1px solid #eaeaea", marginTop: "20px" }}>
              <h2 style={{ color: "#000000", fontFamily: "var(--font-degular), sans-serif", fontWeight: "600", fontSize: "36px", marginBottom: "40px", textAlign: "center" }}>Upcoming Projects</h2>
              <div className="projects-grid-container" style={{ background: "#ffffff", padding: "10px 0 60px 0" }}>
                {filteredUpcomingProjects.map((project, index) => (
                  <div className="project-detail-card" key={index} style={{ background: "#ffffff" }}>
                    <div className="project-card-image">
                      <img 
                        src={project.img} 
                        alt={project.title} 
                        loading="lazy"
                        decoding="async"
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
