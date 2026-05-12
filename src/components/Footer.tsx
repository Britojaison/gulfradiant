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
          <div className="hp-footer-col">
            <h4>Contact</h4>
            <div className="hp-footer-map">
              <iframe
                src="https://www.google.com/maps?q=25.297965,55.385053&z=13&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gulf Radiant Dubai location"
              ></iframe>
            </div>
            <p>Gulf Radiant L.L.C Dubai, United Arab Emirates</p>
            <div className="hp-footer-contact-line">
              <a href="mailto:info@gulfradiant.com">info@gulfradiant.com</a>
              <a href="tel:+97142671662">+971 4 2671662</a>
            </div>
          </div>
        </div>
        <div className="hp-footer-bottom">
          <span>© Gulf Radiant 2025. All rights reserved.</span>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
      <div className="hp-footer-marquee" aria-hidden="true">
        <div className="hp-footer-marquee-track">
          <span>Gulf Radiant <span style={{ fontSize: "0.6em", verticalAlign: "middle" }}>▪</span> Gulf Radiant <span style={{ fontSize: "0.6em", verticalAlign: "middle" }}>▪</span> Gulf Radiant <span style={{ fontSize: "0.6em", verticalAlign: "middle" }}>▪</span></span>
          <span>Gulf Radiant <span style={{ fontSize: "0.6em", verticalAlign: "middle" }}>▪</span> Gulf Radiant <span style={{ fontSize: "0.6em", verticalAlign: "middle" }}>▪</span> Gulf Radiant <span style={{ fontSize: "0.6em", verticalAlign: "middle" }}>▪</span></span>
        </div>
      </div>
    </footer>
  );
}
