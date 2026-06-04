"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";

const CATEGORIES = [
  "All",
  "Earthing Lightning & Surge Protection Systems",
  "Lighting / Aircraft Warning Light / Obstruction Lights / Signal Lights",
  "Control devices plugs, receptacles, switching accessories, isolators, explosion proof",
  "Cables",
  "Other products",
  "Industrial products/bulk material/oil and gas equipment"
];

const CATEGORY_MAP = [
  {
    id: "All",
    label: "All Products",
    image: "/Images/product/all.png",
    desc: "View our entire premium engineering catalogue"
  },
  {
    id: "Earthing Lightning & Surge Protection Systems",
    label: "Earthing Lightning & Surge Protection Systems",
    image: "/Images/product/earthing.png",
    desc: "Kumwell systems, lightning protection, & exothermic welding solutions"
  },
  {
    id: "Lighting / Aircraft Warning Light / Obstruction Lights / Signal Lights",
    label: "Lighting • Aircraft Warning Light • Obstruction Lights • Signal Lights",
    image: "/Images/product/obstruction.png",
    desc: "Safety tower hazard lighting, visual beacon indicators & structural aircraft warning lights"
  },
  {
    id: "Control devices plugs, receptacles, switching accessories, isolators, explosion proof",
    label: "Control Devices Plugs • Receptacles • Switching Accessories • Isolators • Explosion Proof",
    image: "/Images/product/control devices.png",
    desc: "Explosion-proof plugs, receptacles, switching accessories, & isolators"
  },
  {
    id: "Cables",
    label: "Cables",
    image: "/Images/product/cables.png",
    desc: "Siechem, Tekab, Helukabel, & high-performance electrical cables"
  },
  {
    id: "Other products",
    label: "Other Products",
    image: "/Images/product/other.png",
    desc: "Hauff Technik, Wallmax, Cosmoplast, & specialized sealing accessories"
  },
  {
    id: "Industrial products/bulk material/oil and gas equipment",
    label: "Industrial Products • Bulk Material • Oil And Gas Equipment",
    image: "/Images/product/industrial.png",
    desc: "Bulk materials, pipelines, refinery supply, & gas process equipment"
  }
];

const ALL_LOGOS = [
  { src: "/Images/product/kumwell.png", brand: "Kumwell", link: "/product/kumwell", categories: ["Earthing Lightning & Surge Protection Systems"] },
  { src: "/Images/product/pittas.png", brand: "Pittas", link: "/product/pittas", categories: ["Earthing Lightning & Surge Protection Systems"] },
  { src: "/Images/product/CITEL LOGO.png", brand: "Citel", link: "/product/citel", categories: ["Earthing Lightning & Surge Protection Systems"] },
  { src: "/Images/product/OBSTA LOGO.png", brand: "Obsta", link: "/product/obsta", categories: ["Lighting / Aircraft Warning Light / Obstruction Lights / Signal Lights"] },
  { src: "/Images/product/PALAZZOLI GROUP LOGO.png", brand: "Palazzoli", link: "/product/palazzoli", categories: ["Lighting / Aircraft Warning Light / Obstruction Lights / Signal Lights"] },
  { src: "/Images/product/lewden.png", brand: "Palazzoli Lewden", link: "/product/palazzolilewden", categories: ["Control devices plugs, receptacles, switching accessories, isolators, explosion proof"] },
  { src: "/Images/product/TIGO LOGO.png", brand: "Tigo", link: "/product/tigo", categories: ["Other products"] },
  { src: "/Images/product/CRAIG & DERRICOTT LOGO C & D.png", brand: "Craig & Dericott", link: "/product/craigandderricott", categories: ["Control devices plugs, receptacles, switching accessories, isolators, explosion proof"] },
  { src: "/Images/product/NVENT CADDY LOGO.svg", brand: "nVent Caddy", link: "/product/nventcaddy", categories: ["Other products"] },
  { src: "/Images/product/NVENT ERICO LOGO.svg", brand: "nVent Erico", link: "/product/nventerico", categories: ["Earthing Lightning & Surge Protection Systems"] },
  { src: "/Images/product/WALLMAX LOGO.png", brand: "Wallmax", link: "/product/wallmax", categories: ["Other products"] },
  { src: "/Images/product/siechem.png", brand: "Siechem", link: "/product/siechem", categories: ["Cables"] },
  { src: "/Images/product/TUBIFOR LOGO.png", brand: "Tubifor", link: "/product/tubifor", categories: ["Other products"] },
  { src: "/Images/product/dietzel.png", brand: "Dietzel", link: "/product/dietzelunivolt", categories: ["Other products"] },
  { src: "/Images/product/BAHRA CABLES.svg", brand: "Bahra Cables", link: "/product/bahraelectric", categories: ["Cables"] },
  { src: "/Images/product/TEKAB CABLES.png", brand: "Tekab Cables", link: "/product/tekabcable", categories: ["Cables"] },
  { src: "/Images/product/NEELKANTH CABLE LOGO.png", brand: "Neelkanth Cables", link: "/product/neelkanthcables", categories: ["Cables"] },
  { src: "/Images/product/extras/HELUKABEL LOGO.webp", brand: "Helukabel", link: "/product/helukabel", categories: ["Cables"] },
  { src: "/Images/product/PSI LOGO.png", brand: "PSI", link: "/product/psi", categories: ["Other products"] },
  { src: "/Images/product/EMI LOGO.png", brand: "EMI", link: "/product/emi", categories: ["Other products"] },
  { src: "/Images/product/LITETECH LOGO.webp", brand: "Litetech", link: "/product/litetech", categories: ["Lighting / Aircraft Warning Light / Obstruction Lights / Signal Lights"] },
  { src: "/Images/product/HAUFF TECHNIK LOGO.png", brand: "Hauff Technik", link: "/product/haufftechnik", categories: ["Other products"] },
  { src: "/Images/product/CCG Logo.png", brand: "CCG", link: "/product/ccg", categories: ["Other products"] },
  { src: "/Images/product/obo.png", brand: "OBO", link: "/product/obobettermann", categories: ["Other products"] },
  { src: "/Images/product/ROSE LOGO.png", brand: "Rose", link: "/product/rose", categories: ["Other products"] },
  { src: "/Images/product/SIRENA LOGO.png", brand: "Sirena", link: "/product/sirena", categories: ["Lighting / Aircraft Warning Light / Obstruction Lights / Signal Lights"] },
  { src: "/Images/product/FRATER1-LOGO.webp", brand: "Frater", link: "/product/frater", categories: ["Lighting / Aircraft Warning Light / Obstruction Lights / Signal Lights"] },
  { src: "/Images/product/COSMOPLAST LOGO.avif", brand: "Cosmoplast", link: "/product/cosmoplast", categories: ["Other products"] },
  { src: "/Images/product/extras/BG ELECTRIC LOGO.svg", brand: "BG Electric", link: "/product/bgelectric", categories: ["Control devices plugs, receptacles, switching accessories, isolators, explosion proof"] },
  { src: "/Images/product/HVTI.png", brand: "HVTI", link: "/product/hvti", categories: ["Other products"] },
  { src: "/Images/product/AVAIDS.png", brand: "Avaids", link: "/product/avaids", categories: ["Lighting / Aircraft Warning Light / Obstruction Lights / Signal Lights"] },
  // Industrial Category Images
  { src: "/Images/Industrial/Fasteners.png", brand: "Fasteners", categories: ["Industrial products/bulk material/oil and gas equipment"] },
  { src: "/Images/Industrial/Fittings.png", brand: "Fittings", categories: ["Industrial products/bulk material/oil and gas equipment"] },
  { src: "/Images/Industrial/Flanges.png", brand: "Flanges", categories: ["Industrial products/bulk material/oil and gas equipment"] },
  { src: "/Images/Industrial/Gaskets.png", brand: "Gaskets", categories: ["Industrial products/bulk material/oil and gas equipment"] },
  { src: "/Images/Industrial/Instrumentation and Bulk material.png", brand: "Instrumentation & Bulk Material", categories: ["Industrial products/bulk material/oil and gas equipment"] },
  { src: "/Images/Industrial/Pipes.png", brand: "Pipes", categories: ["Industrial products/bulk material/oil and gas equipment"] },
  { src: "/Images/Industrial/Structural Steel.png", brand: "Structural Steel", categories: ["Industrial products/bulk material/oil and gas equipment"] },
  { src: "/Images/Industrial/Tubes.png", brand: "Tubes", categories: ["Industrial products/bulk material/oil and gas equipment"] },
  { src: "/Images/Industrial/Valves.png", brand: "Valves", categories: ["Industrial products/bulk material/oil and gas equipment"] },
];

function ProductPageContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [activeSubcategory, setActiveSubcategory] = useState("All");
  const carouselRef = useRef<HTMLDivElement>(null);

  // Update category if URL param changes
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && CATEGORIES.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  useEffect(() => {
    setActiveSubcategory("All");
  }, [selectedCategory]);

  let filteredLogos = selectedCategory === "All"
    ? ALL_LOGOS.filter(logo => !logo.categories.includes("Industrial products/bulk material/oil and gas equipment"))
    : ALL_LOGOS.filter(logo => logo.categories.includes(selectedCategory));

  if (selectedCategory === "Lighting / Aircraft Warning Light / Obstruction Lights / Signal Lights" && activeSubcategory !== "All") {
    if (activeSubcategory === "AIRCRAFT WARNING LIGHTS / OBSTRUCTION LIGHTS / SIGNAL LIGHTS") {
      const allowedBrands = ["Obsta", "Avaids", "Sirena"];
      filteredLogos = filteredLogos.filter(logo => allowedBrands.includes(logo.brand));
    } else if (activeSubcategory === "LIGHTING") {
      const allowedBrands = ["Palazzoli", "Litetech", "Frater"];
      filteredLogos = filteredLogos.filter(logo => allowedBrands.includes(logo.brand));
    }
  }

  const isIndustrial = selectedCategory === "Industrial products/bulk material/oil and gas equipment";



  useEffect(() => {
    document.documentElement.classList.add("new-prod-page-active");
    return () => {
      document.documentElement.classList.remove("new-prod-page-active");
    };
  }, []);

  useEffect(() => {
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



  const activeCategoryData = CATEGORY_MAP.find(c => c.id === selectedCategory);

  return (
    <div className="new-prod-page">
      {/* 1ST SECTION: HERO & CATEGORIES */}
      <section className="new-prod-hero-section">
        <div className="new-prod-section-inner">
          <div className="new-prod-header-row">
            <h1 className="new-prod-title" style={{ fontFamily: "var(--font-degular), sans-serif", fontSize: "70px", fontWeight: "500" }}>Our Product Range</h1>
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
                    {cat.id !== "All" && (
                      <Image
                        src={cat.image}
                        alt={cat.label}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="260px"
                        priority={CATEGORY_MAP.indexOf(cat) < 4}
                      />
                    )}
                  </div>
                  {cat.id !== "All" && <div className="new-prod-cat-card-overlay" />}
                  <div className="new-prod-cat-card-content">
                    <h3 className="new-prod-cat-card-title">
                      {cat.label.includes('•') ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left', alignItems: 'flex-start' }}>
                          {cat.label.split('•').map((item, idx) => (
                            <span key={idx} style={{ display: 'block' }}>• {item.trim()}</span>
                          ))}
                        </div>
                      ) : (
                        cat.label
                      )}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2ND SECTION: ACTIVE CATEGORY & BRANDS */}
      <section className="new-prod-brands-section">
        <div className="new-prod-section-inner-wide">
          {/* ACTIVE CATEGORY HEADER - REMAIN STICKY / FIXED AT TOP */}
          <div className="new-prod-section-header">
            <div className="hp-dist-subtitle">
              <div className="hp-dist-subtitle-track">
                <span>PRODUCT RANGE • </span>
                <span>PRODUCT RANGE • </span>
                <span>PRODUCT RANGE • </span>
                <span>PRODUCT RANGE • </span>
              </div>
            </div>
            <h2 className="new-prod-section-title" style={{ fontFamily: "var(--font-degular), sans-serif", fontSize: "70px", fontWeight: "500" }}>
              {activeCategoryData ? activeCategoryData.label : selectedCategory}
            </h2>

            {selectedCategory === "Lighting / Aircraft Warning Light / Obstruction Lights / Signal Lights" && (
              <div className="new-prod-subcategory-tabs" style={{ display: "flex", gap: "12px", marginTop: "40px", justifyContent: "center", flexWrap: "wrap", maxWidth: "900px", margin: "40px auto 0 auto" }}>
                <button 
                  className={`subcat-tab ${activeSubcategory === "All" ? "active" : ""}`}
                  onClick={() => setActiveSubcategory("All")}
                  style={{ padding: "10px 24px", borderRadius: "30px", border: activeSubcategory === "All" ? "1px solid #FF5B05" : "1px solid rgba(0,0,0,0.15)", background: activeSubcategory === "All" ? "#FF5B05" : "transparent", color: activeSubcategory === "All" ? "#fff" : "#1a1a1a", cursor: "pointer", transition: "all 0.3s", fontSize: "15px", fontWeight: "500", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  All
                </button>
                <button 
                  className={`subcat-tab ${activeSubcategory === "AIRCRAFT WARNING LIGHTS / OBSTRUCTION LIGHTS / SIGNAL LIGHTS" ? "active" : ""}`}
                  onClick={() => setActiveSubcategory("AIRCRAFT WARNING LIGHTS / OBSTRUCTION LIGHTS / SIGNAL LIGHTS")}
                  style={{ padding: "10px 24px", borderRadius: "30px", border: activeSubcategory === "AIRCRAFT WARNING LIGHTS / OBSTRUCTION LIGHTS / SIGNAL LIGHTS" ? "1px solid #FF5B05" : "1px solid rgba(0,0,0,0.15)", background: activeSubcategory === "AIRCRAFT WARNING LIGHTS / OBSTRUCTION LIGHTS / SIGNAL LIGHTS" ? "#FF5B05" : "transparent", color: activeSubcategory === "AIRCRAFT WARNING LIGHTS / OBSTRUCTION LIGHTS / SIGNAL LIGHTS" ? "#fff" : "#1a1a1a", cursor: "pointer", transition: "all 0.3s", fontSize: "15px", fontWeight: "500", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  AIRCRAFT WARNING LIGHTS / OBSTRUCTION LIGHTS / SIGNAL LIGHTS
                </button>
                <button 
                  className={`subcat-tab ${activeSubcategory === "LIGHTING" ? "active" : ""}`}
                  onClick={() => setActiveSubcategory("LIGHTING")}
                  style={{ padding: "10px 24px", borderRadius: "30px", border: activeSubcategory === "LIGHTING" ? "1px solid #FF5B05" : "1px solid rgba(0,0,0,0.15)", background: activeSubcategory === "LIGHTING" ? "#FF5B05" : "transparent", color: activeSubcategory === "LIGHTING" ? "#fff" : "#1a1a1a", cursor: "pointer", transition: "all 0.3s", fontSize: "15px", fontWeight: "500", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  LIGHTING
                </button>
              </div>
            )}
          </div>

          <div className="new-prod-cards-container">
            {filteredLogos.length > 0 ? (
              <div className={`new-prod-brands-page ${isIndustrial ? "is-industrial" : ""}`}>
                {filteredLogos.map((logo, i) => {
                  const cardContent = (
                    <div className="new-prod-card-inner">
                      <div className="new-prod-card-logo">
                        <Image
                          src={logo.src}
                          alt={logo.brand}
                          fill
                          sizes="(max-width: 768px) 50vw, 250px"
                          style={{
                            objectFit: "contain",
                            filter: (logo.brand === "EMI" || logo.brand === "Avaids") ? "invert(1)" : "none"
                          }}
                        />
                      </div>
                      {selectedCategory === "Industrial products/bulk material/oil and gas equipment" && (
                        <div className="new-prod-card-caption">
                          {logo.brand}
                        </div>
                      )}
                    </div>
                  );

                  return logo.link ? (
                    <Link href={logo.link} className="new-prod-card" key={i}>
                      {cardContent}
                    </Link>
                  ) : (
                    <div className="new-prod-card" key={i}>
                      {cardContent}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="new-prod-set active">
                <div className="new-prod-no-results">
                  <p style={{ color: '#fff', fontSize: '20px', opacity: 0.7 }}>No products found in this category.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ProductPage() {
  return (
    <Suspense fallback={
      <div className="new-prod-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', color: '#fff' }}>
        <p style={{ fontSize: '20px', opacity: 0.7 }}>Loading Products...</p>
      </div>
    }>
      <ProductPageContent />
    </Suspense>
  );
}
