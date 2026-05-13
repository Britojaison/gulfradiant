import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ProductKumwellPage() {
  return (
    <>
      <section className="hero kumwell-hero">
        <Image
          src="/Images/kumwell/H1.png"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Kumwell</h1>
          <p className="hero-subtitle">Earthing & Lightning Protection Systems</p>
          <p className="hero-description">
            Advanced grounding and lightning protection solutions for industrial safety and infrastructure.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Request a Quote</button>
            <a href="https://www.kumwell.com/en/about-us" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Visit Website 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="product-range" style={{ padding: "60px 0", background: "#ffffff" }}>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "80px", fontSize: "48px", fontWeight: "600", fontFamily: "var(--font-degular), sans-serif" }}>Product Range</h2>
        <div className="kumwell-product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", maxWidth: "1690px", margin: "0 auto", padding: "0 20px" }}>
          
          <div className="kumwell-product-item" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="kumwell-product-card" style={{ width: "550px", height: "650px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: "28px" }}>
              <div className="kumwell-product-card-image" style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image src="/Images/kumwell/pr1.jpg" alt="Grounding Protection System" fill style={{ objectFit: "contain" }} />
              </div>
            </div>
          </div>

          <div className="kumwell-product-item" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="kumwell-product-card" style={{ width: "550px", height: "650px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: "28px" }}>
              <div className="kumwell-product-card-image" style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image src="/Images/kumwell/pr2.jpg" alt="Lightning Protection System" fill style={{ objectFit: "contain" }} />
              </div>
            </div>
          </div>

          <div className="kumwell-product-item" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="kumwell-product-card" style={{ width: "550px", height: "650px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: "28px" }}>
              <div className="kumwell-product-card-image" style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image src="/Images/kumwell/pr3.jpg" alt="Exothermic Welding Systems" fill style={{ objectFit: "contain" }} />
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="certified-section" style={{ padding: "80px 0", background: "#ffffff" }}>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "60px", fontSize: "48px", fontWeight: "600", fontFamily: "var(--font-degular), sans-serif" }}>Certified & Approved</h2>
        <div className="certified-logos" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "100px", flexWrap: "wrap" }}>
          <Image className="certified-logo" src="/Images/kumwell/image 33.png" alt="Etihad WE" width={280} height={90} style={{ objectFit: "contain" }} />
          <Image className="certified-logo" src="/Images/kumwell/image 34.png" alt="RTA" width={280} height={90} style={{ objectFit: "contain" }} />
          <Image className="certified-logo" src="/Images/kumwell/image 35.png" alt="TAQA" width={280} height={90} style={{ objectFit: "contain" }} />
          <Image className="certified-logo" src="/Images/kumwell/image 36.png" alt="IEEE" width={280} height={90} style={{ objectFit: "contain" }} />
        </div>
      </section>

      <section className="about-section" style={{ position: "relative", minHeight: "500px", display: "flex", alignItems: "center", justifyContent: "center", margin: "60px 0 0 0" }}>
        <Image src="/Images/kumwell/bg7.svg" alt="About Background" fill style={{ objectFit: "cover" }} />
        <div className="about-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)" }}></div>
        <div className="about-content-card" style={{ position: "relative", zIndex: 1, background: "rgba(31, 31, 31, 0.1)", backdropFilter: "blur(10px)", padding: "40px", borderRadius: "16px", width: "1184px", height: "441px", color: "#ffffff", textAlign: "center", border: "1px solid rgba(255,255,255,0.2)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <h2 style={{ fontSize: "48px", marginBottom: "20px", fontWeight: "700" }}>About <span style={{ color: "#E04F35" }}>Kumwell</span></h2>
          <p style={{ marginBottom: "15px", fontSize: "20px", lineHeight: "1.6" }}>Kumwell is a global manufacturer specializing in grounding, lightning protection, and surge protection systems. With decades of expertise and innovation, we deliver comprehensive solutions that ensure the safety and reliability of electrical infrastructure worldwide.</p>
          <p style={{ marginBottom: "25px", fontSize: "20px", lineHeight: "1.6" }}>Our products are trusted by major corporations and installed across 40+ countries, protecting critical infrastructure in power generation, telecommunications, transportation, and industrial sectors.</p>
          <div className="about-highlight" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(0, 0, 0, 0.2)", padding: "10px 25px", borderRadius: "30px", fontWeight: "600" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#E04F35" }}>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Exporting to 40+ Countries</span>
          </div>
        </div>
      </section>
    </>
  );
}
