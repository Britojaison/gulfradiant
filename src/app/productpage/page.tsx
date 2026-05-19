"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense, useRef } from "react";
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
    id: "Lighting aircraft warning lights/signal lights",
    label: "Lighting aircraft warning lights/signal lights",
    image: "/Images/product/lighting.png",
    desc: "Industrial lights, hazard signaling, & visual beacon indicators"
  },
  {
    id: "Control devices plugs, receptacles, switching accessories, isolators, explosion proof",
    label: "Control devices plugs, receptacles, switching accessories, isolators, explosion proof",
    image: "/Images/product/control devices.png",
    desc: "Explosion-proof plugs, receptacles, switching accessories, & isolators"
  },
  {
    id: "Obstruction lights/aircraft warning lights",
    label: "Obstruction lights / Aircraft warning lights",
    image: "/Images/product/obstruction.png",
    desc: "Safety tower hazard lighting & structural aircraft warning lights"
  },
  {
    id: "Cables",
    label: "Cables",
    image: "/Images/product/cables.png",
    desc: "Siechem, Tekab, Helukabel, & high-performance electrical cables"
  },
  {
    id: "Other products",
    label: "Other products",
    image: "/Images/product/other.png",
    desc: "Hauff Technik, Wallmax, Cosmoplast, & specialized sealing accessories"
  },
  {
    id: "Industrial products/bulk material/oil and gas equipment",
    label: "Industrial products/bulk material/oil and gas equipment",
    image: "/Images/product/industrial.png",
    desc: "Bulk materials, pipelines, refinery supply, & gas process equipment"
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
  { src: "/Images/product/NVENT CADDY LOGO.svg", brand: "nVent Caddy", link: "/product/nventcaddy", categories: ["Other products"] },
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
  { src: "/Images/product/ROSE LOGO.png", brand: "Rose", link: "/product/rose", categories: ["Other products"] },
  { src: "/Images/product/SIRENA LOGO.png", brand: "Sirena", link: "/product/sirena", categories: ["Obstruction lights/aircraft warning lights"] },
  { src: "/Images/product/FRATER1-LOGO.webp", brand: "Frater", link: "/product/frater", categories: ["Lighting aircraft warning lights/signal lights"] },
  { src: "/Images/product/COSMOPLAST LOGO.avif", brand: "Cosmoplast", link: "/product/cosmoplast", categories: ["Other products"] },
  { src: "/Images/product/extras/BG ELECTRIC LOGO.svg", brand: "BG Electric", link: "/product/bgelectric", categories: ["Control devices plugs, receptacles, switching accessories, isolators, explosion proof"] },
  { src: "/Images/product/HVTI.png", brand: "HVTI", link: "/product/hvti", categories: ["Other products"] },
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
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isTransitioningRef = useRef(false);

  // Update category if URL param changes
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && CATEGORIES.includes(cat)) {
      setSelectedCategory(cat);
      setCurrentPage(0);
    }
  }, [searchParams]);

  const filteredLogos = selectedCategory === "All" 
    ? ALL_LOGOS.filter(logo => !logo.categories.includes("Industrial products/bulk material/oil and gas equipment"))
    : ALL_LOGOS.filter(logo => logo.categories.includes(selectedCategory));

  const isIndustrial = selectedCategory === "Industrial products/bulk material/oil and gas equipment";

  // Group filtered logos into pages of 8 cards
  const chunkSize = 8;
  const logoPages: (typeof ALL_LOGOS)[] = [];
  for (let i = 0; i < filteredLogos.length; i += chunkSize) {
    logoPages.push(filteredLogos.slice(i, i + chunkSize));
  }

  const totalPages = Math.max(1, logoPages.length);

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentPage]);

  useEffect(() => {
    document.documentElement.classList.add("new-prod-page-active");
    return () => {
      document.documentElement.classList.remove("new-prod-page-active");
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(0);
  }, [selectedCategory]);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(0);
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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;

      // Section 2 occupies the middle of the screen
      const isOccupyingCenter = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;

      if (!isOccupyingCenter) {
        return;
      }

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      const shouldPin = 
        (scrollingDown && currentPage < totalPages - 1) ||
        (scrollingUp && currentPage > 0);

      if (shouldPin) {
        e.preventDefault();

        if (isTransitioningRef.current) return;
        isTransitioningRef.current = true;

        window.scrollTo({ top: sectionTop, behavior: 'instant' });

        if (scrollingDown) {
          setCurrentPage(prev => prev + 1);
        } else {
          setCurrentPage(prev => prev - 1);
        }

        setTimeout(() => {
          isTransitioningRef.current = false;
        }, 2200);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentPage, totalPages]);

  const activeCategoryData = CATEGORY_MAP.find(c => c.id === selectedCategory);

  return (
    <div className="new-prod-page">
      {/* 1ST SECTION: HERO & CATEGORIES */}
      <section className="new-prod-hero-section">
        <div className="new-prod-section-bg">
          <Image
            src="/Images/product/img1.svg"
            alt="Hero Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="new-prod-overlay" />
        </div>

        <div className="new-prod-section-inner">
          <div className="new-prod-header-row">
            <h1 className="new-prod-title">Our Product Range</h1>
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

      {/* 2ND SECTION: ACTIVE CATEGORY & BRANDS */}
      <section className="new-prod-brands-section" ref={sectionRef}>
        <div className="new-prod-section-bg">
          <Image
            src="/Images/product/img2.svg"
            alt="Brands Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="new-prod-overlay" />
        </div>

        <div className="new-prod-section-inner-wide">
          {/* ACTIVE CATEGORY HEADER - REMAIN STICKY / FIXED AT TOP */}
          <div className="new-prod-section-header">
            <h2 className="new-prod-section-title">
              {activeCategoryData ? activeCategoryData.label : selectedCategory}
            </h2>
          </div>

          <div className="new-prod-cards-container">
            {filteredLogos.length > 0 ? (
              <div className={`new-prod-brands-scroll-container ${isIndustrial ? "is-industrial" : ""}`}>
                <div 
                  className="new-prod-brands-track"
                  style={{ 
                    transform: `translateY(calc(-1 * ${currentPage} * (var(--brands-page-height) + var(--brands-page-gap))))`
                  }}
                >
                  {logoPages.map((pageLogos, pageIdx) => (
                    <div className={`new-prod-brands-page ${isIndustrial ? "is-industrial" : ""}`} key={pageIdx}>
                      {pageLogos.map((logo, i) => {
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
                                  filter: logo.brand === "EMI" ? "invert(1)" : "none"
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
                  ))}
                </div>
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
