"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";

interface MobileNavProps {
  activePage?: string;
}

export default function MobileNav({ activePage }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/homepage", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/productpage", label: "Products" },
    { href: "/projects", label: "Projects" },
    { href: "/clients", label: "Clients" },
    { href: "/certifications", label: "Our Certifications" },
    { href: "/homepage#contact", label: "Contact" },
  ];

  const menu = open && portalRoot ? createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "flex-end",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          background: "#0d0d0d",
          width: 300,
          maxWidth: "85vw",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            flexShrink: 0,
          }}
        >
          <Image
            src="/Images/Brand_partners/Frame 76.png"
            alt="Gulf Radiant"
            width={140}
            height={40}
            style={{ objectFit: "contain" }}
          />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%",
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              cursor: "pointer",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav style={{ flex: 1, padding: "12px 0" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "16px 24px",
                color: activePage === link.label ? "#FF5B05" : "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                borderLeft: activePage === link.label ? "3px solid #FF5B05" : "3px solid transparent",
                background: activePage === link.label ? "rgba(255,91,5,0.08)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div
          style={{
            padding: "20px 24px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            flexShrink: 0,
          }}
        >
          <a href="mailto:info@gulfradiant.com" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 13 }}>
            info@gulfradiant.com
          </a>
          <a href="tel:+97142671662" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 13 }}>
            +971 4 2671662
          </a>
        </div>
      </div>
    </div>,
    portalRoot
  ) : null;

  return (
    <div className="mobile-nav-wrapper">
      <button
        className={`mobile-hamburger${open ? " is-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className="ham-line" />
        <span className="ham-line" />
        <span className="ham-line" />
      </button>
      {menu}
    </div>
  );
}
