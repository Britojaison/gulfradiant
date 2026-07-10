"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";

const CATEGORIES = [
  "All",
  "Earthing • Lightning • Surge Protection Systems",
  "Lighting • ACWL • Signal Lights",
  "Switching Accessories • Isolators Control Devices • Optimizers • Testing Equipments",
  "Cables & Cable Management Systems",
  "Industrial & Bulk Materials"
];

const CATEGORY_MAP = [
  {
    id: "All",
    label: "All Products",
    image: "/Images/product/all_products.webp",
    desc: "View our entire premium engineering catalogue"
  },
  {
    id: "Earthing • Lightning • Surge Protection Systems",
    label: "Earthing Lightning & Surge Protection Systems",
    image: "/Images/product/earthing.webp",
    desc: "Kumwell systems, lightning protection, & exothermic welding solutions"
  },
  {
    id: "Lighting • ACWL • Signal Lights",
    label: "Lighting , ACWL & Signal Lights",
    image: "/Images/product/obstruction.webp",
    desc: "Safety tower hazard lighting, visual beacon indicators & structural aircraft warning lights"
  },
  {
    id: "Switching Accessories • Isolators Control Devices • Optimizers • Testing Equipments",
    label: "Isolators, Switching & Control devices",
    image: "/Images/product/control devices.webp",
    desc: "Explosion-proof plugs, receptacles, switching accessories, & isolators"
  },
  {
    id: "Cables & Cable Management Systems",
    label: "Cable & Cable management",
    image: "/Images/product/cables.webp",
    desc: "High-performance electrical cables and specialized sealing accessories"
  },
  {
    id: "Industrial & Bulk Materials",
    label: "Industrial & Bulk Materials",
    image: "/Images/product/industrial.webp",
    desc: "Bulk materials, pipelines, refinery supply, & gas process equipment"
  }
];

const ALL_LOGOS = [
  { src: "/Images/product/kumwell.webp", brand: "Kumwell", link: "/product/kumwell", categories: ["Earthing • Lightning • Surge Protection Systems"] },
  { src: "/Images/product/pittas.webp", brand: "Pittas", link: "/product/pittas", categories: ["Earthing • Lightning • Surge Protection Systems"] },
  { src: "/Images/product/CITEL LOGO.webp", brand: "Citel", link: "/product/citel", categories: ["Earthing • Lightning • Surge Protection Systems"] },
  { src: "/Images/product/NVENT ERICO LOGO.svg", brand: "nVent Erico", link: "/product/nventerico", categories: ["Earthing • Lightning • Surge Protection Systems"] },
  { src: "/Images/product/OBSTA LOGO.webp", brand: "Obsta", link: "/product/obsta", categories: ["Lighting • ACWL • Signal Lights"] },
  { src: "/Images/product/PALAZZOLI GROUP LOGO.webp", brand: "Palazzoli", link: "/product/palazzoli", categories: ["Lighting • ACWL • Signal Lights", "Switching Accessories • Isolators Control Devices • Optimizers • Testing Equipments"] },
  { src: "/Images/product/LITETECH LOGO.webp", brand: "Litetech", link: "/product/litetech", categories: ["Lighting • ACWL • Signal Lights"] },
  { src: "/Images/product/SIRENA LOGO.webp", brand: "Sirena", link: "/product/sirena", categories: ["Lighting • ACWL • Signal Lights"] },
  { src: "/Images/product/FRATER1-LOGO.webp", brand: "Frater", link: "/product/frater", categories: ["Lighting • ACWL • Signal Lights"] },
  { src: "/Images/product/AVAIDS.webp", brand: "Avaids", link: "/product/avaids", categories: ["Lighting • ACWL • Signal Lights"] },
  { src: "/Images/product/lewden.webp", brand: "Palazzoli Lewden", link: "/product/palazzolilewden", categories: ["Switching Accessories • Isolators Control Devices • Optimizers • Testing Equipments"] },
  { src: "/Images/product/CRAIG & DERRICOTT LOGO C & D.webp", brand: "Craig & Dericott", link: "/product/craigandderricott", categories: ["Switching Accessories • Isolators Control Devices • Optimizers • Testing Equipments"] },
  { src: "/Images/product/extras/BG ELECTRIC LOGO.svg", brand: "BG Electric", link: "/product/bgelectric", categories: ["Switching Accessories • Isolators Control Devices • Optimizers • Testing Equipments"] },
  { src: "/Images/product/HVTI.webp", brand: "HVTI", link: "/product/hvti", categories: ["Switching Accessories • Isolators Control Devices • Optimizers • Testing Equipments"] },
  { src: "/Images/product/TIGO LOGO.webp", brand: "Tigo", link: "/product/tigo", categories: ["Switching Accessories • Isolators Control Devices • Optimizers • Testing Equipments"] },
  { src: "/Images/product/extras/HELUKABEL LOGO.webp", brand: "Helukabel", link: "/product/helukabel", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/NEELKANTH CABLE LOGO.webp", brand: "Neelkanth Cables", link: "/product/neelkanthcables", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/TEKAB CABLES.webp", brand: "Tekab Cables", link: "/product/tekabcable", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/siechem.webp", brand: "Siechem", link: "/product/siechem", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/BAHRA CABLES.svg", brand: "Bahra Cables", link: "/product/bahraelectric", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/HAUFF TECHNIK LOGO.webp", brand: "Hauff Technik", link: "/product/haufftechnik", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/WALLMAX LOGO.webp", brand: "Wallmax", link: "/product/wallmax", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/CCG Logo.webp", brand: "CCG", link: "/product/ccg", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/obo.webp", brand: "OBO", link: "/product/obobettermann", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/ROSE LOGO.webp", brand: "Rose", link: "/product/rose", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/PSI LOGO.webp", brand: "PSI", link: "/product/psi", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/EMI LOGO.webp", brand: "EMI", link: "/product/emi", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/dietzel.webp", brand: "Dietzel", link: "/product/dietzelunivolt", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/TUBIFOR LOGO.webp", brand: "Tubifor", link: "/product/tubifor", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/NVENT CADDY LOGO.svg", brand: "nVent Caddy", link: "/product/nventcaddy", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/product/COSMOPLAST LOGO.avif", brand: "Cosmoplast", link: "/product/cosmoplast", categories: ["Cables & Cable Management Systems"] },
  { src: "/Images/Industrial/ppt/Industrial_1.webp", brand: "", categories: ["Industrial & Bulk Materials"] },
  { src: "/Images/Industrial/ppt/Industrial_2.webp", brand: "", categories: ["Industrial & Bulk Materials"] },
  { src: "/Images/Industrial/ppt/Industrial_3.webp", brand: "", categories: ["Industrial & Bulk Materials"] },
  { src: "/Images/Industrial/ppt/Industrial_4.webp", brand: "", categories: ["Industrial & Bulk Materials"] },
  { src: "/Images/Industrial/ppt/Industrial_5.webp", brand: "", categories: ["Industrial & Bulk Materials"] },
  { src: "/Images/Industrial/ppt/Industrial_6.webp", brand: "", categories: ["Industrial & Bulk Materials"] },
  { src: "/Images/Industrial/ppt/Industrial_7.webp", brand: "", categories: ["Industrial & Bulk Materials"] },
  { src: "/Images/Industrial/ppt/Industrial_8.webp", brand: "", categories: ["Industrial & Bulk Materials"] },
  { src: "/Images/Industrial/ppt/Industrial_9.webp", brand: "", categories: ["Industrial & Bulk Materials"] },
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
    ? ALL_LOGOS.filter(logo => !logo.categories.includes("Industrial & Bulk Materials"))
    : ALL_LOGOS.filter(logo => logo.categories.includes(selectedCategory));

  if (selectedCategory === "Lighting • ACWL • Signal Lights" && activeSubcategory !== "All") {
    if (activeSubcategory === "AIRCRAFT WARNING LIGHTS / OBSTRUCTION LIGHTS / SIGNAL LIGHTS") {
      const allowedBrands = ["Obsta", "Avaids", "Sirena"];
      filteredLogos = filteredLogos.filter(logo => allowedBrands.includes(logo.brand));
    } else if (activeSubcategory === "LIGHTING") {
      const allowedBrands = ["Palazzoli", "Litetech", "Frater"];
      filteredLogos = filteredLogos.filter(logo => allowedBrands.includes(logo.brand));
    }
  }

  const isIndustrial = selectedCategory === "Industrial & Bulk Materials";



  useEffect(() => {
    document.documentElement.classList.add("new-prod-page-active");
    return () => {
      document.documentElement.classList.remove("new-prod-page-active");
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const el = document.getElementById("brands-section");
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
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
      <style dangerouslySetInnerHTML={{__html: `
        .new-prod-page .new-prod-hero-section {
          padding-top: 140px !important;
          padding-bottom: 140px !important;
          height: auto !important;
          min-height: auto !important;
          position: relative !important;
        }
        .new-prod-page .new-prod-brands-section {
          margin-top: -140px !important;
          padding-top: 60px !important;
          background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.3) 50px, rgba(255,255,255,0.8) 100px, #ffffff 140px, #ffffff 100%) !important;
          content-visibility: visible !important;
          position: relative !important;
          z-index: 3 !important;
        }
        .new-prod-page .new-prod-brands-page {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          border-top: 1px solid #000000 !important;
          border-left: 1px solid #000000 !important;
          gap: 0 !important;
          padding: 0 !important;
        }
        .new-prod-page .new-prod-card {
          aspect-ratio: 16/9 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 30px !important;
          background-color: #ffffff !important;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
          border-bottom: 1px solid #000000 !important;
          border-right: 1px solid #000000 !important;
          border-top: none !important;
          border-left: none !important;
          position: relative !important;
          overflow: hidden !important;
        }
        .new-prod-page .new-prod-card::before {
          content: '' !important;
          position: absolute !important;
          top: 0 !important; left: -100% !important;
          width: 100% !important; height: 100% !important;
          background: linear-gradient(120deg, transparent, rgba(255, 91, 5, 0.05), transparent) !important;
          transition: left 0.6s ease !important;
          z-index: 0 !important;
        }
        .new-prod-page .new-prod-card:hover::before {
          left: 100% !important;
        }
        .new-prod-page .new-prod-card:hover {
          transform: scale(1.05) !important;
          z-index: 10 !important;
          box-shadow: 0 15px 40px rgba(0,0,0,0.12) !important;
        }
        .new-prod-page .new-prod-section-header {
          margin-bottom: 20px !important;
        }
        .new-prod-page .new-prod-section-header:empty {
          display: none !important;
          margin-bottom: 0px !important;
        }
        @media (min-width: 601px) and (max-width: 1024px) {
          .new-prod-page .new-prod-brands-page {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .new-prod-page .new-prod-card {
            aspect-ratio: 16/9 !important;
          }
        }
        @media (max-width: 600px) {
          .new-prod-page .new-prod-brands-page {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .new-prod-page .new-prod-card {
            aspect-ratio: 1 !important;
            padding: 15px !important;
          }
        }
      `}} />
      {/* 1ST SECTION: HERO & CATEGORIES */}
      <section className="new-prod-hero-section">
        <div className="new-prod-section-inner">
          <div className="new-prod-header-row">
            <h1 className="new-prod-title" style={{ fontFamily: "var(--font-degular), sans-serif", fontSize: "70px", fontWeight: "500" }}>Our Brand Partners</h1>
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
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      style={{ 
                        objectFit: "cover",
                        filter: (cat.id === "All" || cat.id === "Cables & Cable Management Systems") ? "brightness(1.6)" : "none"
                      }}
                      sizes="260px"
                      priority={CATEGORY_MAP.indexOf(cat) < 4}
                    />
                  </div>
                  <div className="new-prod-cat-card-overlay" />
                  <div className="new-prod-cat-card-content">
                    <h3 className="new-prod-cat-card-title">
                      {cat.label}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2ND SECTION: ACTIVE CATEGORY & BRANDS */}{/* Force reload border removal */}
      <section id="brands-section" className="new-prod-brands-section new-prod-brands-section-fade-fix">
        <div className="new-prod-section-inner-wide">
          {/* ACTIVE CATEGORY HEADER - REMAIN STICKY / FIXED AT TOP */}
          <div className="new-prod-section-header">
            {selectedCategory === "Lighting • ACWL • Signal Lights" && (
              <div className="new-prod-subcategory-tabs" style={{ display: "flex", gap: "12px", marginTop: "10px", justifyContent: "center", flexWrap: "wrap", maxWidth: "900px", margin: "10px auto 0 auto" }}>
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
              <div 
                className={`new-prod-brands-page ${isIndustrial ? "is-industrial" : ""}`}
              >
                {isIndustrial && (
                  <style dangerouslySetInnerHTML={{__html: `
                    .new-prod-brands-page.is-industrial {
                      grid-template-columns: repeat(3, 1fr) !important;
                      max-width: 1920px !important;
                      margin: 0 auto !important;
                    }
                    @media (max-width: 1024px) {
                      .new-prod-brands-page.is-industrial {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 30px !important;
                        padding: 20px 40px !important;
                      }
                    }
                    @media (max-width: 768px) {
                      .new-prod-brands-page.is-industrial {
                        grid-template-columns: repeat(1, 1fr) !important;
                        gap: 20px !important;
                        padding: 20px !important;
                      }
                    }
                  `}} />
                )}
                {filteredLogos.map((logo, i) => {
                  const cardContent = (
                    <div className="new-prod-card-inner">
                      <div className="new-prod-card-logo">
                        <Image
                          src={logo.src}
                          alt={logo.brand}
                          fill
                          quality={isIndustrial ? 100 : 75}
                          sizes={isIndustrial ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" : "(max-width: 768px) 50vw, 250px"}
                          style={{
                            objectFit: "contain",
                            filter: (logo.brand === "EMI" || logo.brand === "Avaids") ? "invert(1)" : "none"
                          }}
                        />
                      </div>
                      {selectedCategory === "Industrial & Bulk Materials" && logo.brand && (
                        <div className="new-prod-card-caption">
                          {logo.brand}
                        </div>
                      )}
                    </div>
                  );

                  return logo.link ? (
                    <Link href={`${logo.link}?source=${encodeURIComponent(selectedCategory)}`} className="new-prod-card" key={i}>
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
