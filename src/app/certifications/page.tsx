"use client";

import Image from "next/image";
import Link from "next/link";
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
    { image: "img1.svg", title: "Gulf Radiant - ISO 9001-2015", doc: "#", type: "pdf" as const },
    { image: "img2.svg", title: "Palazzoli - DEWA APPROVAL", doc: "#", type: "pdf" as const },
    { image: "img3.svg", title: "Sharjah Electricity & Water Authority", doc: "#", type: "pdf" as const },
    { image: "img4.svg", title: "Gulf Radiant - ISO 9001-2015", doc: "#", type: "pdf" as const },
    { image: "img5.svg", title: "Gulf Radiant - ISO 9001-2015", doc: "#", type: "pdf" as const },
    { image: "img6.svg", title: "Gulf Radiant - ISO 9001-2015", doc: "#", type: "pdf" as const },
    { image: "img2.svg", title: "Gulf Radiant - ISO 9001-2015", doc: "#", type: "pdf" as const },
    { image: "img7.svg", title: "Gulf Radiant - ISO 9001-2015", doc: "#", type: "pdf" as const },
    { image: "img8.svg", title: "Gulf Radiant - ISO 9001-2015", doc: "#", type: "pdf" as const },
    { image: "img8.svg", title: "Gulf Radiant - ISO 9001-2015", doc: "#", type: "pdf" as const },
    { image: "img7.svg", title: "Gulf Radiant - ISO 9001-2015", doc: "#", type: "pdf" as const },
    { image: "img7.svg", title: "Gulf Radiant - ISO 9001-2015", doc: "#", type: "pdf" as const },
  ];

  const getDocPath = (doc: string) => `/Images/Certificates/${doc}`;

  return (
    <>
      {/* HERO SECTION */}
      <section className="certs-hero">
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
        <div className="certs-header" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div className="hp-dist-subtitle">
            <div className="hp-dist-subtitle-track">
              <span style={{ color: "#ffffff" }}>QUALITY - CERTIFIED • </span>
              <span style={{ color: "#ffffff" }}>QUALITY - CERTIFIED • </span>
              <span style={{ color: "#ffffff" }}>QUALITY - CERTIFIED • </span>
              <span style={{ color: "#ffffff" }}>QUALITY - CERTIFIED • </span>
            </div>
          </div>
          <h2 style={{ fontFamily: "var(--font-degular), sans-serif", fontSize: "48px", fontWeight: "600", textAlign: "center", margin: "20px auto", color: "#ffffff", width: "100%" }}>
            Industry Certifications & Approvals
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
                    width={170}
                    height={170}
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
