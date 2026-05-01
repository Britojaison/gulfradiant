"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";

const navLinks = [
  { href: "/homepage", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/productpage", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/clients", label: "Clients" },
  { href: "/certifications", label: "Our Certifications" },
  { href: "/homepage#contact", label: "Contact" },
];

function getActivePage(pathname: string): string {
  if (pathname === "/homepage" || pathname === "/") return "Home";
  if (pathname === "/about") return "About";
  if (pathname.startsWith("/product")) return "Products";
  if (pathname === "/projects") return "Projects";
  if (pathname === "/clients") return "Clients";
  if (pathname === "/certifications") return "Our Certifications";
  return "";
}

function isActive(href: string, pathname: string): boolean {
  if (href === "/homepage") return pathname === "/homepage" || pathname === "/";
  if (href === "/productpage") return pathname === "/productpage" || pathname.startsWith("/product-");
  if (href === "/homepage#contact") return false;
  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();
  const activePage = getActivePage(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [animKey, setAnimKey] = useState(0);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" || pathname === "/homepage") {
      event.preventDefault();
      const hero = document.getElementById("home-hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", "/homepage#home-hero");
      }
    }
  };

  useEffect(() => {
    let wasAtTop = true;
    const onScroll = () => {
      const isTop = window.scrollY < 10;
      setScrolled(window.scrollY > window.innerHeight * 0.7);
      if (isTop && !wasAtTop) {
        setAnimKey((k) => k + 1);
      }
      wasAtTop = isTop;
      setAtTop(isTop);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      key={animKey}
      className={`hp-navbar${scrolled ? " hp-navbar-scrolled" : ""}${atTop ? " hp-navbar-at-top" : ""}`}
    >
      <Link
        href="/homepage#home-hero"
        className="hp-navbar-logo"
        aria-label="Go to homepage hero section"
        onClick={handleLogoClick}
      >
        <Image src="/Images/Brand_partners/Frame 76.png" alt="Gulf Radiant" width={560} height={120} style={{ objectFit: "contain" }} />
      </Link>
      <nav className="hp-navbar-nav">
        {navLinks.map((link) =>
          link.label === "Contact" ? (
            <a key={link.href} href={link.href}>Contact</a>
          ) : (
            <Link key={link.href} href={link.href} className={isActive(link.href, pathname) ? "active" : ""}>
              {link.label}
            </Link>
          )
        )}
      </nav>
      <MobileNav activePage={activePage} />
    </header>
  );
}
