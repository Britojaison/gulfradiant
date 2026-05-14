"use client";

import { usePathname } from "next/navigation";
import StaggeredMenu from "./StaggeredMenu";

const navLinks = [
  { link: "/homepage", label: "Home", ariaLabel: "Go to home page" },
  { link: "/about", label: "About", ariaLabel: "Learn about Gulf Radiant" },
  { link: "/productpage", label: "Products", ariaLabel: "View products" },
  { link: "/information", label: "Useful Information", ariaLabel: "View useful information" },
  { link: "/projects", label: "Projects", ariaLabel: "View projects" },
  { link: "/clients", label: "Clients", ariaLabel: "View clients" },
  { link: "/certifications", label: "Our Certifications", ariaLabel: "View certifications" },
  { link: "/homepage#contact", label: "Contact", ariaLabel: "Contact Gulf Radiant" },
];

const socialItems = [
  { label: "LinkedIn", link: "https://www.linkedin.com/company/gulf-radiant-llc-dubai/" },
  { label: "Email", link: "mailto:info@gulfradiant.com" },
  { label: "Call", link: "tel:+97142671662" },
];

export default function Navbar() {
  const pathname = usePathname();

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

  return (
    <StaggeredMenu
      isFixed
      position="right"
      items={navLinks}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      closeOnClickAway={false}
      colors={["#151923", "#FF5B05"]}
      logoUrl="/Images/Brand_partners/Frame 76.png"
      logoHref="/homepage#home-hero"
      menuButtonColor="#ffffff"
      openMenuButtonColor="#ffffff"
      accentColor="#FF5B05"
      onLogoClick={handleLogoClick}
    />
  );
}
