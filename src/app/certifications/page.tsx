"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import MobileNav from "@/components/MobileNav";

export default function CertificationsPage() {
  const [viewingCert, setViewingCert] = useState<{
    title: string;
    doc: string | null;
    type: "pdf" | "image";
  } | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (viewingCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [viewingCert]);

  const certs = [
    {
      image: "cert-dewa-logo.jpg",
      title: "Palazzoli - DEWA APPROVAL",
      doc: "dewa-approval-palazzoli.pdf",
      type: "pdf" as const,
    },
    {
      image: "cert-dewa-logo.jpg",
      title: "Kumwell - DEWA APPROVAL",
      doc: "dewa-approval-kumwell.pdf",
      type: "pdf" as const,
    },
    {
      image: "cert-jsrs-logo.jpg",
      title: "JSRS CERTIFICATE",
      doc: "gr-jsrs-certificate.pdf",
      type: "pdf" as const,
    },
    {
      image: "cert-icv-logo.jpg",
      title: "GR AD ICV Certificate",
      doc: "gr-auh-icv-certificate.pdf",
      type: "pdf" as const,
    },
    {
      image: "cert-icv-logo.jpg",
      title: "GR ICV Certificate",
      doc: "gr-dxb-icv-certificate.pdf",
      type: "pdf" as const,
    },
    {
      image: "cert-addc-logo.jpg",
      title: "PITTAS - ADDC Pre-Qualification",
      doc: "pittas-addc-taqa-approval.pdf",
      type: "pdf" as const,
    },
    {
      image: "cert-addc-logo.jpg",
      title: "KUMWELL - ADDC Pre-Qualification",
      doc: "kumwell-addc-taqa-approval.pdf",
      type: "pdf" as const,
    },
    {
      image: "cert-addc-logo.jpg",
      title: "Gulf Radiant Electricals - ADDC Pre-Qualification",
      doc: "gulf-radiant-addc-taqa-approval.pdf",
      type: "pdf" as const,
    },
  ];

  const getDocPath = (doc: string) => `/Images/Certificates/${doc}`;

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar" id="navbar">
        <div className="navbar-logo">
          <Image
            src="/Images/Brand_partners/Frame 76.png"
            alt="Gulf Radiant Logo"
            width={240}
            height={67}
            style={{ objectFit: "contain" }}
          />
        </div>
        <nav>
          <ul className="navbar-nav" id="main-nav">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/productpage">Products</Link></li>
            <li><span className="nav-dropdown">Useful Information</span></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/clients">Clients</Link></li>
            <li><Link href="/certifications" className="active">Our Certifications</Link></li>
            <li><Link href="/homepage#contact">Contact</Link></li>
          </ul>
        </nav>
        <MobileNav activePage="Our Certifications" />
      </header>

      {/* HERO SECTION */}
      <section className="certs-hero">
        <Image
          src="/Images/Certificates/image 38.png"
          alt="Worker verifying electrical certifications"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className="certs-hero-overlay"></div>
        <div className="certs-hero-content">
          <h1 className="certs-hero-title">Our Certifications</h1>
          <p className="certs-hero-subtitle">
            Accredited by top UAE authorities — our certifications reflect two
            decades of trust, quality, and compliance excellence
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS GRID SECTION */}
      <section className="certs-section-bg">
        <div className="certs-header">
          <div className="certs-section-label">
            <span className="certs-orange-square"></span> CERTIFIED QUALITY
          </div>
          <h2 className="certs-title-inline">
            Industry <span>Certifications & Approvals</span>
          </h2>
        </div>

        <div className="certs-container">
          <div className="certs-grid">
            {certs.map((cert, i) => (
              <div className="cert-card" key={i}>
                <div className="cert-logo-circle">
                  <Image
                    src={`/Images/Certificates/${cert.image}`}
                    alt={cert.title}
                    width={140}
                    height={140}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h3 className="cert-card-title">{cert.title}</h3>
                <div className="cert-card-actions">
                  <button
                    className="cert-view-link"
                    onClick={() =>
                      setViewingCert({
                        title: cert.title,
                        doc: cert.doc,
                        type: cert.type,
                      })
                    }
                  >
                    View Certificate
                  </button>
                  <a
                    href={getDocPath(cert.doc)}
                    download={cert.doc}
                    className="cert-download-btn"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATE POPUP MODAL */}
      {viewingCert && viewingCert.doc && (
        <div
          className="cert-modal-overlay"
          onClick={() => setViewingCert(null)}
        >
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <h3>{viewingCert.title}</h3>
              <button
                className="cert-modal-close"
                onClick={() => setViewingCert(null)}
                aria-label="Close certificate viewer"
              >
                ✕
              </button>
            </div>
            <div className="cert-modal-body">
              {viewingCert.type === "pdf" ? (
                <object
                  data={getDocPath(viewingCert.doc)}
                  type="application/pdf"
                  className="cert-modal-pdf"
                >
                  <div className="cert-modal-fallback">
                    <p>Your browser cannot display this PDF inline.</p>
                    <a
                      href={getDocPath(viewingCert.doc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-modal-open-btn"
                    >
                      Open PDF in New Tab
                    </a>
                  </div>
                </object>
              ) : (
                <div className="cert-modal-image-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getDocPath(viewingCert.doc)}
                    alt={viewingCert.title}
                    className="cert-modal-image"
                  />
                </div>
              )}
            </div>
            <div className="cert-modal-footer">
              <a
                href={getDocPath(viewingCert.doc)}
                download={viewingCert.doc}
                className="cert-modal-download-btn"
              >
                Download Certificate
              </a>
            </div>
          </div>
        </div>
      )}

      <footer className="hp-footer">
        <div className="hp-footer-content">
          <div className="hp-footer-grid">
            <div className="hp-footer-brand">
              <Image
                src="/Images/Brand_partners/Frame 76.png"
                alt="Gulf Radiant"
                width={175}
                height={59}
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
            </div>
            <div className="hp-footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><Link href="/homepage">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/productpage">Products</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/homepage#contact">Contact</Link></li>
              </ul>
            </div>
            <div className="hp-footer-col">
              <h4>Information</h4>
              <ul>
                <li><Link href="#">Technical Charts</Link></li>
                <li><Link href="#">Product Guides</Link></li>
                <li><Link href="#">Resources</Link></li>
              </ul>
            </div>
            <div className="hp-footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">Dubai, UAE</a></li>
                <li><a href="mailto:info@gulfradiant.com">info@gulfradiant.com</a></li>
                <li><a href="tel:+97142671662">+971 4 2671662 / 882</a></li>
              </ul>
            </div>
          </div>
          <div className="hp-footer-bottom">
            <Link href="/privacy">Privacy Policy</Link>
            <span>© Gulf Radiant 2025. All rights reserved.</span>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        /* CERTIFICATE MODAL */
        .cert-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          animation: certFadeIn 0.2s ease;
        }

        @keyframes certFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cert-modal {
          background: #fff;
          border-radius: 12px;
          width: 90%;
          max-width: 900px;
          height: 85vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
          animation: certSlideUp 0.25s ease;
        }

        @keyframes certSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .cert-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 28px;
          border-bottom: 1px solid #eee;
          flex-shrink: 0;
        }

        .cert-modal-header h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.3;
          padding-right: 20px;
        }

        .cert-modal-close {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #e0e0e0;
          background: #fff;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .cert-modal-close:hover {
          background: #f5f5f5;
          color: #000;
          border-color: #ccc;
        }

        .cert-modal-body {
          flex: 1;
          overflow: hidden;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-modal-pdf {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .cert-modal-fallback {
          text-align: center;
          padding: 40px;
        }

        .cert-modal-fallback p {
          font-size: 16px;
          color: #555;
          margin-bottom: 20px;
        }

        .cert-modal-open-btn {
          display: inline-block;
          padding: 12px 28px;
          background: #FF5B05;
          color: #fff;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s;
        }

        .cert-modal-open-btn:hover {
          background: #e04f00;
        }

        .cert-modal-image-wrapper {
          width: 100%;
          height: 100%;
          overflow: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .cert-modal-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .cert-modal-footer {
          display: flex;
          justify-content: flex-end;
          padding: 16px 28px;
          border-top: 1px solid #eee;
          flex-shrink: 0;
        }

        .cert-modal-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: #FF5B05;
          color: #fff;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s;
        }

        .cert-modal-download-btn:hover {
          background: #e04f00;
        }

        /* View Certificate button styling */
        .cert-view-link {
          background: none;
          border: none;
          color: #FF5B05;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
          font-family: inherit;
          transition: color 0.2s;
        }

        .cert-view-link:hover {
          color: #e04f00;
        }

        @media (max-width: 768px) {
          .cert-modal-overlay {
            padding: 10px;
          }
          .cert-modal {
            width: 100%;
            height: 92vh;
            border-radius: 8px;
          }
          .cert-modal-header {
            padding: 16px 20px;
          }
          .cert-modal-header h3 {
            font-size: 15px;
          }
          .cert-modal-footer {
            padding: 12px 20px;
          }
        }
      `}</style>
    </>
  );
}
