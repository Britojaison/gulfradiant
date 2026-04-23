"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface MobileNavProps {
  activePage?: string;
}

export default function MobileNav({ activePage }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/homepage", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/productpage", label: "Products" },
    { href: "/projects", label: "Projects" },
    { href: "/clients", label: "Clients" },
    { href: "/certifications", label: "Our Certifications" },
    { href: "/homepage#contact", label: "Contact" },
  ];

  return (
    <div className="mobile-nav-wrapper">
      <button
        className="mobile-hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className={`ham-line ${open ? "open" : ""}`}></span>
        <span className={`ham-line ${open ? "open" : ""}`}></span>
        <span className={`ham-line ${open ? "open" : ""}`}></span>
      </button>

      {open && (
        <div className="mobile-menu-overlay" onClick={() => setOpen(false)}>
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <Image
                src="/Images/Brand_partners/Frame 76.png"
                alt="Gulf Radiant"
                width={240}
                height={67}
                style={{ objectFit: "contain" }}
              />
              <button className="mobile-menu-close" onClick={() => setOpen(false)} aria-label="Close menu">
                ✕
              </button>
            </div>
            <ul className="mobile-menu-links">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={activePage === link.label ? "active" : ""}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
