"use client";
// Force rebuild to fix Next.js HMR mismatch

import Image from "next/image";
import { useState, useEffect } from "react";

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
    { image: "GR-iso.jpg", title: "GR ISO 9001-2015", doc: "Certifications/OneDrive_1_20-05-2026/GR ISO 9001-2015.pdf", type: "pdf" as const },
    { image: "dewa.jpg", title: "DEWA-Approval-Palazzoli", doc: "Certifications/OneDrive_1_20-05-2026/DEWA-Approval-Palazzoli.pdf", type: "pdf" as const },
    { image: "dewa.jpg", title: "DEWA-Approval-Kumwell", doc: "Certifications/OneDrive_1_20-05-2026/DEWA-Approval-Kumwell.pdf", type: "pdf" as const },
    { image: "civil aviation.jpg", title: "Dubai Civil Aviation Authority Certificate", doc: "Certifications/OneDrive_1_20-05-2026/Dubai Civil Aviation Authority Certificate.pdf", type: "pdf" as const },
    { image: "cert-jsrs-logo.jpg", title: "GR_JSRS AE100307 - Certificate _ 2029", doc: "Certifications/OneDrive_1_20-05-2026/GR_JSRS AE100307 - Certificate _ 2029.pdf", type: "pdf" as const },
    { image: "cert-icv-logo.jpg", title: "GR AUH - ICV CERTIFICATE 2025-2026", doc: "Certifications/OneDrive_1_20-05-2026/GR AUH - ICV CERTIFICATE 2025-2026.pdf", type: "pdf" as const },
    { image: "cert-icv-logo.jpg", title: "GR DXB ICV 2026", doc: "Certifications/OneDrive_1_20-05-2026/GR DXB ICV 2026.pdf", type: "pdf" as const },
    { image: "adnoc logo.svg", title: "ADNOC APPROVAL _ KUMWELL ID - 20032385", doc: "Certifications/OneDrive_1_20-05-2026/ADNOC APPROVAL _ KUMWELL ID - 20032385.pdf", type: "pdf" as const },
    { image: "cert-addc-logo.jpg", title: "GULF RADIANT APPROVAL_ADDC_TAQA_ADWEA_TRANSCO_AL MIRFA", doc: "Certifications/OneDrive_1_20-05-2026/GULF RADIANT APPROVAL_ADDC_TAQA_ADWEA_TRANSCO_AL MIRFA.pdf", type: "pdf" as const },
    { image: "cert-addc-logo.jpg", title: "KUMWELL APPROVAL _ADDC_TAQA_ADWEA_TRANSCO_AL MIRFA", doc: "Certifications/OneDrive_1_20-05-2026/KUMWELL APPROVAL _ADDC_TAQA_ADWEA_TRANSCO_AL MIRFA.pdf", type: "pdf" as const },
    { image: "cert-addc-logo.jpg", title: "PITTAS APPROVAL _ADDC_TAQA_ADWEA_TRANSCO_AL MIRFA", doc: "Certifications/OneDrive_1_20-05-2026/PITTAS APPROVAL _ADDC_TAQA_ADWEA_TRANSCO_AL MIRFA.pdf", type: "pdf" as const },
    { image: "etihad we.webp", title: "ETIHAD WE-KUMWELL-EARTHING PROTECTION SYSTEM-Dec 2028 -APPROVAL", doc: "Certifications/OneDrive_1_20-05-2026/ETIHAD WE-KUMWELL-EARTHING PROTECTION SYSTEM-Dec 2028 -APPROVAL.pdf", type: "pdf" as const },
    { image: "etihad we.webp", title: "ETIHAD WE-KUMWELL-LIGHTNING PROTECTION SYSTEM-Dec 2028 APPROVAL", doc: "Certifications/OneDrive_1_20-05-2026/ETIHAD WE-KUMWELL-LIGHTNING PROTECTION SYSTEM-Dec 2028 APPROVAL.pdf", type: "pdf" as const },
    { image: "etihad we.webp", title: "GR _FEWA REG CARD 2026-27", doc: "Certifications/OneDrive_1_20-05-2026/GR _FEWA REG CARD 2026-27.jpg", type: "image" as const },
  ];

  const getDocPath = (doc: string) => `/Images/${doc}`;

  const formatTitle = (title: string) => {
    return title
      .replace(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*[-_ ]?20\d{2}\b/gi, '')
      .replace(/\b20\d{2}(?:-\d{2,4})?\b/g, '')
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toUpperCase();
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="certs-hero">
        <div className="certs-hero-overlay"></div>
        <div className="certs-hero-content">
          <h1 className="certs-hero-title">Certifications</h1>
          <p className="certs-hero-subtitle">
            Accredited by top UAE authorities, our certifications reflect two
            decades of trust, quality, and compliance excellence
          </p>
        </div>
        
        <a href="#next-section" className="hp-hero-scroll" aria-label="Scroll down">
          <Image src="/Images/Home/arrow-bold.svg" alt="Scroll down" width={34} height={34} style={{ height: "auto" }} />
        </a>
      </section>

      {/* CERTIFICATIONS GRID SECTION */}
      <section id="next-section" className="certs-section-bg">
        <div className="certs-header" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div className="hp-dist-subtitle">
            <div className="hp-dist-subtitle-track">
              <span style={{ color: "#ffffff" }}>QUALITY - CERTIFIED • </span>
              <span style={{ color: "#ffffff" }}>QUALITY - CERTIFIED • </span>
              <span style={{ color: "#ffffff" }}>QUALITY - CERTIFIED • </span>
              <span style={{ color: "#ffffff" }}>QUALITY - CERTIFIED • </span>
            </div>
          </div>
          <h2 className="certs-main-heading" style={{ fontFamily: "var(--font-degular), sans-serif", fontWeight: "600", textAlign: "center", margin: "20px auto", color: "#ffffff", width: "100%" }}>
            Certifications & Approvals
          </h2>
        </div>

        <div className="certs-container">
          <div className="certs-grid">
            {certs.map((cert, i) => (
              <div className="cert-card" key={i}>
                <div className="cert-logo-circle">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/Images/Certificates/${cert.image}`}
                    alt={cert.title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
                <h3 className="cert-card-title" style={{ textTransform: "uppercase" }}>{formatTitle(cert.title)}</h3>
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

      <style jsx global>{`
        /* GRID & CARDS LAYOUT */
        .certs-grid {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 40px !important;
          justify-content: center !important;
        }

        /* HERO FONT SIZES */
        .certs-hero-title {
          font-size: 96px !important;
        }
        .certs-hero-subtitle {
          font-size: 18px !important;
        }
        .certs-section-title {
          font-family: var(--font-degular), sans-serif;
          font-size: 48px !important;
          font-weight: 600;
          text-align: center;
          margin: 20px auto;
          color: #ffffff;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .certs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
          }
          .certs-hero {
            height: auto !important;
            min-height: 50vh !important;
            display: flex !important;
            align-items: center !important;
            justify-content: flex-start !important;
            padding-top: 100px !important;
            padding-bottom: 40px !important;
          }
          .certs-hero-content {
            position: relative !important;
            top: auto !important;
            transform: none !important;
            left: 40px !important;
            max-width: 100% !important;
            padding-top: 0 !important;
          }
          .certs-hero-title {
            font-size: 36px !important;
            font-weight: 500 !important;
          }
          .certs-hero-subtitle {
            font-size: 16px !important;
          }
          .certs-section-title {
            font-size: 36px !important;
            font-weight: 500 !important;
          }
        }

        @media (max-width: 768px) {
          .certs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          .cert-card {
            padding: 24px 16px !important;
          }
          .cert-logo-circle {
            width: 120px !important;
            height: 120px !important;
            margin-bottom: 20px !important;
          }
          .certs-hero {
            height: auto !important;
            min-height: 50vh !important;
            display: flex !important;
            align-items: center !important;
            justify-content: flex-start !important;
            padding-top: 100px !important;
            padding-bottom: 40px !important;
          }
          .certs-hero-content {
            position: relative !important;
            top: auto !important;
            transform: none !important;
            left: 20px !important;
            right: 20px !important;
            max-width: 100% !important;
            padding-top: 0 !important;
          }
          .certs-hero-title {
            font-size: 28px !important;
          }
          .certs-hero-subtitle {
            font-size: 14px !important;
          }
          .certs-section-title {
            font-size: 28px !important;
          }
        }

        @media (max-width: 480px) {
          .certs-grid {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
        }

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
          color: #000000;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
          font-family: inherit;
          transition: color 0.2s;
        }

        .cert-view-link:hover {
          color: #FF5B05;
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
