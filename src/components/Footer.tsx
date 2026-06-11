import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hp-footer">
      <div className="hp-footer-content">
        <div className="hp-footer-grid">
          <div className="hp-footer-brand">
            <h2>Powering industries<br />with reliability.</h2>
            <p>Delivering trusted electrical and engineering solutions across infrastructure, industrial, and energy sectors with a commitment to quality, safety, and long-term performance.</p>
            <div className="hp-footer-newsletter">
              <label htmlFor="footer-email">Newsletter</label>
              <div>
                <input id="footer-email" type="email" placeholder="Enter your email" />
                <button type="button" aria-label="Subscribe">→</button>
              </div>
            </div>
            <div style={{ marginTop: "0px", marginLeft: "-28px" }}>
              <Image 
                src="/Images/Brand_partners/Frame 76.png" 
                alt="Gulf Radiant Logo" 
                width={260} 
                height={82} 
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
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
          <div className="hp-footer-col">
            <h4>Information</h4>
            <ul>
              <li><Link href="/productpage">Our Partnered Brands</Link></li>
              <li><Link href="/certifications">Industry Certifications</Link></li>
              <li><Link href="/projects">Project Portfolio</Link></li>
              <li><a href="/homepage#useful-information">Latest Updates</a></li>
              <li><a href="/homepage#contact">Leadership Message</a></li>
            </ul>
          </div>
          <div className="hp-footer-col hp-footer-locations-col">
            <div className="hp-footer-locations">
              <div className="hp-footer-location">
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
                <div className="hp-footer-contact-line">
                  <a href="mailto:info@gulfradiant.com">info@gulfradiant.com</a>
                  <a href="tel:+97142671662">+971 4 2671662</a>
                </div>
              </div>

              <div className="hp-footer-location abu-dhabi-loc">
                <h4>Abu Dhabi</h4>
                <a 
                  href="https://www.google.com/maps?q=24.380814,54.510216" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: "block", marginBottom: "16px", lineHeight: "1.4" }}
                >
                  <div style={{ marginBottom: "4px" }}>GULF RADIANT ELECTRICALS L.L.C</div>
                  <div>P.O. Box: 91366, M-9, Abu Dhabi, U.A.E</div>
                </a>
                <div className="hp-footer-contact-line">
                  <a href="mailto:infoabu@gulfradiant.com">infoabu@gulfradiant.com</a>
                  <a href="tel:+97124488449">+971 2 4488449</a>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <a 
                    href="https://portal.us.bn.cloud.ariba.com/dashboard/public/appext/company-profile#/?sourceApplication=SBN&bnoId=BNO-100000058264945" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: "inline-block" }}
                  >
                    <Image 
                      src="/Images/footer ariba.png" 
                      alt="SAP Ariba Business Network" 
                      width={240} 
                      height={60} 
                      style={{ objectFit: "contain" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hp-footer-bottom">
          <span>© Gulf Radiant 2025. All rights reserved.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a 
              href="https://www.linkedin.com/company/gulf-radiant-llc-dubai/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="hp-footer-social-link"
              style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
