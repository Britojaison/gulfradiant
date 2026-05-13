"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function ProductPage() {
  const logos = [
    { src: "/Images/product/Products/kumwell.png", brand: "Kumwell", link: "/product-kumwell" },
    { src: "/Images/product/Products/pittas.jpg", brand: "Pittas" },
    { src: "/Images/product/Products/CITEL LOGO.png", brand: "Citel" },
    { src: "/Images/product/Products/OBSTA LOGO.png", brand: "Obsta" },
    { src: "/Images/product/Products/PALAZZOLI GROUP LOGO.png", brand: "Palazzoli" },
    { src: "/Images/product/Products/TIGO LOGO.png", brand: "Tigo" },
    { src: "/Images/product/CRAIG AND DERRICOTT LOGO.png", brand: "Craig & Derricott" },
    { src: "/Images/product/Products/NVENT CADDY LOGO.svg", brand: "nVent Caddy" },
    { src: "/Images/product/Products/NVENT ERICO LOGO.svg", brand: "nVent Erico" },
    { src: "/Images/product/Products/WALLMAX LOGO.png", brand: "Wallmax" },
    { src: "/Images/product/siechem.png", brand: "Siechem" },
    { src: "/Images/product/Products/TUBIFOR LOGO.png", brand: "Tubifor" },
    { src: "/Images/product/dietzel.png", brand: "Dietzel" },
    { src: "/Images/product/Products/BAHRA CABLES.svg", brand: "Bahra Cables" },
    { src: "/Images/product/Products/TEKAB CABLES.png", brand: "Tekab Cables" },
    { src: "/Images/product/Products/NEELKANTH CABLE LOGO.png", brand: "Neelkanth Cables" },
    { src: "/Images/product/Products/PSI LOGO.png", brand: "PSI" },
    { src: "/Images/product/Products/EMI LOGO.png", brand: "EMI" },
    { src: "/Images/product/Products/LITETECH LOGO.webp", brand: "Litetech" },
    { src: "/Images/product/Products/HAUFF TECHNIK LOGO.png", brand: "Hauff Technik" },
    { src: "/Images/product/Products/CCG Logo.png", brand: "CCG" },
    { src: "/Images/product/cabex.png", brand: "Cabex" },
    { src: "/Images/product/obo.png", brand: "OBO" },
    { src: "/Images/product/Products/ROSE LOGO.png", brand: "Rose" },
    { src: "/Images/product/Products/SIRENA LOGO.png", brand: "Sirena" },
    { src: "/Images/product/Products/FRATER1-LOGO.webp", brand: "Frater" },
    { src: "/Images/product/Products/COSMOPLAST LOGO.avif", brand: "Cosmoplast" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Split logos into sets of 8
  const sets = [];
  for (let i = 0; i < logos.length; i += 8) {
    sets.push(logos.slice(i, i + 8));
  }

  useEffect(() => {
    document.documentElement.classList.add("new-prod-page-active");
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate active index based on scroll position
      const index = Math.min(
        Math.floor(scrollY / (windowHeight * 1.5)), // Increased divisor to make it slower
        sets.length - 1
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.documentElement.classList.remove("new-prod-page-active");
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sets.length]);

  return (
    <div className="new-prod-page">
      {/* FIXED BACKGROUND */}
      <div className="new-prod-bg">
        <Image
          src="/Images/Home/bg6.svg"
          alt="Background"
          fill
          style={{ objectFit: "cover", filter: "brightness(0.7) contrast(2)" }}
          priority
        />
      </div>

      {/* TALL TRACK FOR SCROLLING */}
      <div className="new-prod-scroll-track" style={{ height: `${sets.length * 150}vh` }}>
        <div className="new-prod-content">
          <h1 className="new-prod-title">Our Product Range</h1>
          
          <div className="new-prod-cards-container">
            {sets.map((set, setIndex) => (
              <div 
                className={`new-prod-set ${setIndex === activeIndex ? "active" : ""}`} 
                key={setIndex}
              >
                <div className="new-prod-grid">
                  {set.map((logo, i) => {
                    const cardContent = (
                      <div className="new-prod-card-inner">
                        <div className={`new-prod-card-logo${logo.dark ? " prod-card-logo-dark" : ""}`}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
