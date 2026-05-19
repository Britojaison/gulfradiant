"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const CATEGORIES = [
  "All",
  "Earthing Lightning & Surge Protection Systems",
  "Lighting aircraft warning lights/signal lights",
  "Obstruction lights/aircraft warning lights",
  "Control devices plugs, receptacles, switching accessories, isolators, explosion proof",
  "Cables",
  "Other products",
  "Industrial products/bulk material/oil and gas equipment"
];

const CATEGORY_MAP = [
  {
    id: "All",
    label: "All Products",
    desc: "View our entire premium engineering catalogue",
    division: "Overview",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    )
  },
  {
    id: "Earthing Lightning & Surge Protection Systems",
    label: "Earthing & Surge Protection",
    desc: "Kumwell systems, lightning protection, & exothermic welding solutions",
    division: "Electrical Division",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    )
  },
  {
    id: "Lighting aircraft warning lights/signal lights",
    label: "Lighting & Signal Lights",
    desc: "Industrial lights, hazard signaling, & visual beacon indicators",
    division: "Electrical Division",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    )
  },
  {
    id: "Obstruction lights/aircraft warning lights",
    label: "Obstruction Lights",
    desc: "Safety tower hazard lighting & structural aircraft warning lights",
    division: "Electrical Division",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    )
  },
  {
    id: "Control devices plugs, receptacles, switching accessories, isolators, explosion proof",
    label: "Control & Switch Devices",
    desc: "Explosion-proof plugs, receptacles, switching accessories, & isolators",
    division: "Electrical Division",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
        <line x1="18" y1="6" x2="18.01" y2="6"></line>
        <line x1="18" y1="18" x2="18.01" y2="18"></line>
      </svg>
    )
  },
  {
    id: "Cables",
    label: "Cables & Wiring",
    desc: "Siechem, Tekab, Helukabel, & high-performance electrical cables",
    division: "Electrical Division",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"></path>
        <path d="M12 2v8"></path>
        <path d="M12 18v4"></path>
      </svg>
    )
  },
  {
    id: "Other products",
    label: "Engineering Products",
    desc: "Hauff Technik, Wallmax, Cosmoplast, & specialized sealing accessories",
    division: "Electrical Division",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    )
  },
  {
    id: "Industrial products/bulk material/oil and gas equipment",
    label: "Industrial, Oil & Gas",
    desc: "Bulk materials, pipelines, refinery supply, & gas process equipment",
    division: "Industrial Division",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 7L13.5 2L5 7L13.5 12L22 7Z"></path>
        <path d="M5 17L13.5 22L22 17"></path>
        <path d="M5 12L13.5 17L22 12"></path>
      </svg>
    )
  }
];

const ALL_LOGOS = [
  { src: "/Images/product/kumwell.png", brand: "Kumwell", link: "/product/kumwell", categories: ["Earthing Lightning & Surge Protection Systems"] },
  { src: "/Images/product/pittas.jpg", brand: "Pittas", link: "/product/pittas", categories: ["Earthing Lightning & Surge Protection Systems"] },
  { src: "/Images/product/CITEL LOGO.png", brand: "Citel", link: "/product/citel", categories: ["Earthing Lightning & Surge Protection Systems"] },
  { src: "/Images/product/OBSTA LOGO.png", brand: "Obsta", link: "/product/obsta", categories: ["Obstruction lights/aircraft warning lights"] },
  { src: "/Images/product/PALAZZOLI GROUP LOGO.png", brand: "Palazzoli", link: "/product/palazzoli", categories: ["Lighting aircraft warning lights/signal lights", "Control devices plugs, receptacles, switching accessories, isolators, explosion proof"] },
  { src: "/Images/product/PALAZZOLI GROUP LOGO.png", brand: "Palazzoli Lewden", link: "/product/palazzolilewden", categories: ["Lighting aircraft warning lights/signal lights", "Control devices plugs, receptacles, switching accessories, isolators, explosion proof", "Other products"] },
  { src: "/Images/product/TIGO LOGO.png", brand: "Tigo", link: "/product/tigo", categories: ["Other products"] },
  { src: "/Images/product/CRAIG AND DERRICOTT LOGO.png", brand: "Craig & Dericott", link: "/product/craigandderricott", categories: ["Control devices plugs, receptacles, switching accessories, isolators, explosion proof"] },
  { src: "/Images/product/NVENT CADDY LOGO.svg", brand: "nVent Caddy", categories: ["Other products"] },
  { src: "/Images/product/NVENT ERICO LOGO.svg", brand: "nVent Erico", categories: ["Earthing Lightning & Surge Protection Systems"] },
  { src: "/Images/product/WALLMAX LOGO.png", brand: "Wallmax", link: "/product/wallmax", categories: ["Other products"] },
  { src: "/Images/product/siechem.png", brand: "Siechem", link: "/product/siechem", categories: ["Cables"] },
  { src: "/Images/product/TUBIFOR LOGO.png", brand: "Tubifor", link: "/product/tubifor", categories: ["Other products"] },
  { src: "/Images/product/dietzel.png", brand: "Dietzel", link: "/product/dietzelunivolt", categories: ["Other products"] },
  { src: "/Images/product/BAHRA CABLES.svg", brand: "Bahra Cables", link: "/product/bahraelectric", categories: ["Cables"] },
  { src: "/Images/product/TEKAB CABLES.png", brand: "Tekab Cables", link: "/product/tekabcable", categories: ["Cables"] },
  { src: "/Images/product/NEELKANTH CABLE LOGO.png", brand: "Neelkanth Cables", link: "/product/neelkanthcables", categories: ["Cables"] },
  { src: "/Images/product/extras/HELUKABEL LOGO.webp", brand: "Helukabel", link: "/product/helukabel", categories: ["Cables"] },
  { src: "/Images/product/PSI LOGO.png", brand: "PSI", categories: ["Other products"] },
  { src: "/Images/product/EMI LOGO.png", brand: "EMI", link: "/product/emi", categories: ["Other products"] },
  { src: "/Images/product/LITETECH LOGO.webp", brand: "Litetech", link: "/product/litetech", categories: ["Lighting aircraft warning lights/signal lights"] },
  { src: "/Images/product/HAUFF TECHNIK LOGO.png", brand: "Hauff Technik", link: "/product/haufftechnik", categories: ["Other products"] },
  { src: "/Images/product/CCG Logo.png", brand: "CCG", link: "/product/ccg", categories: ["Other products"] },
  { src: "/Images/product/cabex.png", brand: "Cabex", categories: ["Other products"] },
  { src: "/Images/product/obo.png", brand: "OBO", link: "/product/obobettermann", categories: ["Other products"] },
  { src: "/Images/product/ROSE LOGO.png", brand: "Rose", categories: ["Other products"] },
  { src: "/Images/product/SIRENA LOGO.png", brand: "Sirena", link: "/product/sirena", categories: ["Obstruction lights/aircraft warning lights"] },
  { src: "/Images/product/FRATER1-LOGO.webp", brand: "Frater", link: "/product/frater", categories: ["Lighting aircraft warning lights/signal lights"] },
  { src: "/Images/product/COSMOPLAST LOGO.avif", brand: "Cosmoplast", link: "/product/cosmoplast", categories: ["Other products"] },
  { src: "/Images/product/extras/BG ELECTRIC LOGO.svg", brand: "BG Electric", link: "/product/bgelectric", categories: ["Control devices plugs, receptacles, switching accessories, isolators, explosion proof"] },
  { src: "/Images/product/HVTI.png", brand: "HVTI", link: "/product/hvti", categories: ["Other products"] },
];

function ProductPageContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Update category if URL param changes
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && CATEGORIES.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredLogos = selectedCategory === "All" 
    ? ALL_LOGOS 
    : ALL_LOGOS.filter(logo => logo.categories.includes(selectedCategory));

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

  const activeCategoryData = CATEGORY_MAP.find(c => c.id === selectedCategory);

  return (
    <div className="new-prod-page">
      {/* FIXED BACKGROUND */}
      <div className="new-prod-bg">
        <Image
          src="/Images/Home/bg6.svg"
          alt="Background"
          fill
          style={{ objectFit: "cover", filter: "brightness(0.65) contrast(1.1)" }}
          priority
        />
        <div className="new-prod-overlay" />
      </div>

      <div className="new-prod-content">
        <div className="new-prod-header-section">
          <h1 className="new-prod-title">Our Product Range</h1>
        </div>

        {/* CATEGORY SQUARE CARDS */}
        <div className="new-prod-cat-grid">
          {CATEGORY_MAP.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`new-prod-cat-card ${isActive ? "active" : ""}`}
                onClick={() => handleCategorySelect(cat.id)}
              >
                <div className="new-prod-cat-icon">{cat.icon}</div>
                <div className="new-prod-cat-info">
                  <span className="new-prod-cat-division">{cat.division}</span>
                  <h3 className="new-prod-cat-label">{cat.label}</h3>
                  <p className="new-prod-cat-desc">{cat.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ACTIVE CATEGORY HEADER */}
        <div className="new-prod-section-header">
          <h2 className="new-prod-section-title">
            {activeCategoryData ? activeCategoryData.label : selectedCategory}
          </h2>
          <p className="new-prod-section-desc">
            {activeCategoryData ? activeCategoryData.desc : ""}
          </p>
        </div>

        <div className="new-prod-cards-container">
          {filteredLogos.length > 0 ? (
            <div className="new-prod-grid">
              {filteredLogos.map((logo, i) => {
                const cardContent = (
                  <div className="new-prod-card-inner">
                    <div className="new-prod-card-logo">
                      <Image
                        src={logo.src}
                        alt={logo.brand}
                        fill
                        sizes="(max-width: 768px) 50vw, 250px"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
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
