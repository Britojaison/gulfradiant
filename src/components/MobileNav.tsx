"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface MobileNavProps {
  activePage?: string;
  open?: boolean;
  onToggle?: () => void;
}

export default function MobileNav({ activePage, open: controlledOpen, onToggle }: MobileNavProps) {
  const pathname = usePathname();
  const [internalOpen, setInternalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const closeTimer = useRef<number | null>(null);
  const open = controlledOpen ?? internalOpen;
  const setOpen = (value: boolean) => {
    if (onToggle) {
      if (value !== open) onToggle();
      return;
    }
    setInternalOpen(value);
  };

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    if (open) {
      if (closeTimer.current) {
        window.clearTimeout(closeTimer.current);
      }
      setMounted(true);
      return;
    }

    closeTimer.current = window.setTimeout(() => {
      setMounted(false);
    }, 480);

    return () => {
      if (closeTimer.current) {
        window.clearTimeout(closeTimer.current);
      }
    };
  }, [open]);

  useEffect(() => {
    if (onToggle) return;

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (pathname === "/" || pathname === "/homepage") {
      event.preventDefault();
      const hero = document.getElementById("home-hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", "/homepage#home-hero");
      }
    }
  };

  const links = [
    { href: "/homepage", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/productpage", label: "Products" },
    { href: "/homepage#useful-information", label: "Useful Information" },
    { href: "/projects", label: "Projects" },
    { href: "/clients", label: "Clients" },
    { href: "/certifications", label: "Our Certifications" },
    { href: "/homepage#contact", label: "Contact" },
  ];

  const menu = mounted && portalRoot ? createPortal(
    <div
      className={`mobile-menu-overlay${open ? " is-open" : ""}`}
      onClick={() => setOpen(false)}
    >
      <div
        className="mobile-menu-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-menu-header">
          <Link
            href="/homepage#home-hero"
            onClick={handleLogoClick}
            aria-label="Go to homepage hero section"
            className="mobile-menu-logo"
          >
            <Image
              src="/Images/Brand_partners/Frame 76.png"
              alt="Gulf Radiant"
              width={140}
              height={40}
              style={{ objectFit: "contain" }}
            />
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="mobile-menu-close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="mobile-menu-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={activePage === link.label ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <a href="mailto:info@gulfradiant.com">
            info@gulfradiant.com
          </a>
          <a href="tel:+97142671662">
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
      {onToggle ? null : menu}
    </div>
  );
}
