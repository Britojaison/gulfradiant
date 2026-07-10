import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hp-footer">
      <div className="hp-footer-content">
        <div className="hp-footer-grid">
          <div className="hp-footer-brand">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
              <div style={{ marginLeft: "-28px" }}>
                <Image 
                  src="/Images/Brand_partners/Frame 76.webp" 
                  alt="Gulf Radiant Logo" 
                  width={260} 
                  height={82} 
                  style={{ objectFit: "contain", objectPosition: "left" }}
                />
              </div>
              
              <div style={{ display: "flex", gap: "16px", alignItems: "center", paddingLeft: "16px", marginTop: "-35px" }}>
                <a 
                  href="https://www.linkedin.com/company/gulf-radiant-llc-dubai/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:info@gulfradiant.com" 
                  aria-label="Email"
                  style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/971561122110?text=I'm%20interested%20in%20your%20products"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="WhatsApp"
                  style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </a>
              </div>

              <a 
                href="https://portal.us.bn.cloud.ariba.com/dashboard/public/appext/company-profile#/?sourceApplication=SBN&bnoId=BNO-100000058264945" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: "inline-block", paddingLeft: "10px" }}
              >
                <Image 
                  src="/Images/footer ariba.webp" 
                  alt="SAP Ariba Business Network" 
                  width={160} 
                  height={40} 
                  style={{ objectFit: "contain", clipPath: "inset(5px)" }}
                />
              </a>
            </div>

          </div>
          <div className="hp-footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/homepage">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/productpage">Products</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/certifications">Certifications</Link></li>
              <li><a href="/homepage#contact">Contact</a></li>
            </ul>
          </div>
          <div className="hp-footer-col" style={{ paddingLeft: "40px" }}>
            <h4>Information</h4>
            <ul>
              <li><Link href="/productpage">Our Partnered Brands</Link></li>
              <li><Link href="/certifications">Industry Certifications</Link></li>
              <li><Link href="/projects">Project Portfolio</Link></li>
              <li><a href="/homepage#useful-information">Latest Updates</a></li>
              <li><a href="/homepage#contact">Leadership Message</a></li>
            </ul>
          </div>
          <div className="hp-footer-col hp-footer-locations-col" style={{ paddingLeft: "80px" }}>
            <div className="hp-footer-locations" style={{ display: "flex", gap: "60px", flexWrap: "nowrap" }}>
              <div className="hp-footer-location" style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                <h4>Dubai</h4>
                <a 
                  href="https://www.google.com/maps?q=25.297965,55.385053" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: "block", marginBottom: "16px", lineHeight: "1.4" }}
                >
                  <div style={{ marginBottom: "4px" }}>GULF RADIANT L.L.C</div>
                  <div>P.O. Box: 26426, Amman Street,<br/>Al Qusais Industrial Area - 3, Dubai, U.A.E</div>
                </a>
                <div className="hp-footer-contact-line" style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <a href="mailto:info@gulfradiant.com">info@gulfradiant.com</a>
                  <a href="tel:+97142671662">+971 4 2671662</a>
                </div>
              </div>

              <div className="hp-footer-location" style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                <h4>Abu Dhabi</h4>
                <a 
                  href="https://www.google.com/maps?q=24.380814,54.510216" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: "block", marginBottom: "16px", lineHeight: "1.4" }}
                >
                  <div style={{ marginBottom: "4px" }}>GULF RADIANT ELECTRICALS L.L.C</div>
                  <div>P.O. Box: 91366, M-9,<br/>Abu Dhabi, U.A.E</div>
                </a>
                <div className="hp-footer-contact-line" style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <a href="mailto:infoabu@gulfradiant.com">infoabu@gulfradiant.com</a>
                  <a href="tel:+97124488449">+971 2 4488449</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hp-footer-bottom">
          <span>© Gulf Radiant 2026. All rights reserved.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
