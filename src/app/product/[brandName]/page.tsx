"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import React from "react";

// Brand Database Interface
interface ProductItem {
  image: string;
  caption: string;
  subHeading?: string;
  download?: string;
  link?: string;
}

interface BrandData {
  name: string;
  heroBg: string;
  subtitle: string;
  description: string;
  website: string;
  productRange?: ProductItem[];
  certifiedLogos: string[];
  aboutP1: string;
  aboutP2: string;
  aboutBg: string;
  aboutHighlight: string;
  categoryStyle?: "cards" | "tabs" | "carousel-list";
  categories?: {
    name: string;
    thumbnail?: string;
    icon?: React.ReactNode;
    products: ProductItem[];
    catalogue?: string;
  }[];
}

const BRAND_DATABASE: Record<string, BrandData> = {
  kumwell: {
    name: "Kumwell",
    heroBg: "/Images/kumwell/kumwell hero banner.jpeg",
    subtitle: "Earthing & Lightning Protection Systems",
    description: "Advanced grounding and lightning protection solutions for industrial safety and infrastructure.",
    website: "https://www.kumwell.com/en/about-us",
    categoryStyle: "carousel-list",
    categories: [
      {
        name: "Earthing Protection System",
        products: [
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/GBDL.png", caption: "GBDL" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/GBPGSS.png", caption: "GBPGSS" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/GGC3XC~C.PNG", caption: "GGC3XC~C" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/GRCBUT.png", caption: "GRCBUT" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/GRSC.png", caption: "GRSC" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/GRSS.png", caption: "GRSS" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/GWV1CV~O.PNG", caption: "GWV1CV~O" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/GXCIP.png", caption: "GXCIP" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/GXCT.png", caption: "GXCT" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/GXEP1.png", caption: "GXEP1" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/GXEP2.png", caption: "GXEP2" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/GXEP4.png", caption: "GXEP4" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/GXFIP.png", caption: "GXFIP" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/GYPTB.png", caption: "GYPTB" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/LCATT.png", caption: "LCATT" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/EARTHING PROTECTION SYSTEM/MEG.png", caption: "MEG" }
        ]
      },
      {
        name: "Lightning Protection System",
        products: [
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/LIGHTNING PROTECTION SYSTEM/CCC(1).png", caption: "CCC(1)" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/LIGHTNING PROTECTION SYSTEM/CCC(2).png", caption: "CCC(2)" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/LIGHTNING PROTECTION SYSTEM/COBCT.png", caption: "COBCT" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/LIGHTNING PROTECTION SYSTEM/KOH.png", caption: "KOH" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/LIGHTNING PROTECTION SYSTEM/KOL.png", caption: "KOL" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/LIGHTNING PROTECTION SYSTEM/KTH.png", caption: "KTH" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/LIGHTNING PROTECTION SYSTEM/LCAS.png", caption: "LCAS" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/LIGHTNING PROTECTION SYSTEM/LCRT.png", caption: "LCRT" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/LIGHTNING PROTECTION SYSTEM/LCTT.png", caption: "LCTT" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/LIGHTNING PROTECTION SYSTEM/LROS.png", caption: "LROS" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/LIGHTNING PROTECTION SYSTEM/LSQS.png", caption: "LSQS" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/LIGHTNING PROTECTION SYSTEM/LTAS (2).png", caption: "LTAS (2)" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/LIGHTNING PROTECTION SYSTEM/LTAS.png", caption: "LTAS" },
          { image: "/Images/kumwell/Categories/EARTHING  & LIGHTNING PROTECTION/LIGHTNING PROTECTION SYSTEM/LTAT.png", caption: "LTAT" }
        ]
      },
      {
        name: "Exothermic Welding Systems",
        products: [
          { image: "/Images/kumwell/Categories/EXOTHERMIC WELDING SYSTEMS/Graphite-MOuld-300x300.jpg", caption: "Graphite-MOuld-300x300" },
          { image: "/Images/kumwell/Categories/EXOTHERMIC WELDING SYSTEMS/Necessary-Tools-300x300.jpg", caption: "Necessary-Tools-300x300" },
          { image: "/Images/kumwell/Categories/EXOTHERMIC WELDING SYSTEMS/tape-conductors-3-300x300.png", caption: "tape-conductors-3-300x300" },
          { image: "/Images/kumwell/Categories/EXOTHERMIC WELDING SYSTEMS/tool-box-300x300.jpg", caption: "tool-box-300x300" }
        ]
      },
      {
        name: "Oil & Gas Products",
        products: [
          { image: "/Images/kumwell/Categories/OIL & GAS PRODUCTS/ISOLATING  SPARK GAP.png", caption: "ISOLATING SPARK GAP" },
          { image: "/Images/kumwell/Categories/OIL & GAS PRODUCTS/STATIC EARTH REEL -GERA 15ME.png", caption: "STATIC EARTH REEL -GERA 15ME" }
        ]
      },
      {
        name: "Smart Lightning Management & Warning System",
        products: [
          { image: "/Images/kumwell/Categories/SMART LIGHTNING MANAGEMENT & WARNING SYSTEM/SMART LIGHT MANAGEMENT SYSTEM.png", caption: "SMART LIGHT MANAGEMENT SYSTEM" },
          { image: "/Images/kumwell/Categories/SMART LIGHTNING MANAGEMENT & WARNING SYSTEM/SMART LIGHT WARNING SYSTEM.png", caption: "SMART LIGHT WARNING SYSTEM" }
        ]
      }
    ],
    certifiedLogos: [
      "/Images/Certificates/adnoc logo.svg",
      "/Images/Certificates/dewa.jpg",
      "/Images/Certificates/etihad we.png",
      "/Images/Certificates/taqa group.png",
      "/Images/Certificates/cert-rta-logo.jpg"
    ],
    aboutP1: "Kumwell Corporation public company Limited is a manufacturer and distributor of products in grounding systems such as grounding rods, grounding conductors, exothermic welding equipment, ground enhancement materials, inspection pits and etc. Lightning protection system compose of air terminals, lightning conductors, connectors & fasteners and etc. Surge protection system, lightning detection and warning system are compiled for international standards under Kumwell brand.",
    aboutP2: "Kumwell products export to over 40 countries around the world through our distributors. Our vision is a leader with total solution in lightning protection system and safety innovation with the strongest brand and sustainable growth.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Exporting to 40+ Countries"
  },
  citel: {
    name: "Citel",
    heroBg: "/Images/Citel/Citel home banner.jpg",
    subtitle: "Surge Protection Solutions",
    description: "Professional surge protection devices safeguarding high-voltage power networks, solar PV installations, telecom lines, and LED lighting systems.",
    website: "https://citel.fr/en",
    categoryStyle: "carousel-list",
    categories: [
      {
        name: "AC Power",
        icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" /><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" /></svg>,
        products: [
          { image: "/Images/Citel/AC DC POWER SPD/AC POWER TYPE 1+2+3-13VGS-31-275_pic.png", caption: "AC POWER TYPE 1+2+3-13VGS-31-275" },
          { image: "/Images/Citel/AC DC POWER SPD/AC POWER Type 2 (or 3)_DACF15S-10_275_pic.png", caption: "AC POWER Type 2 (or 3)_DACF15S-10_275" },
          { image: "/Images/Citel/AC DC POWER SPD/AC POWER Type 2 AC_DAC50S-10-320_pic.png", caption: "AC POWER Type 2 AC_DAC50S-10-320" },
          { image: "/Images/Citel/AC DC POWER SPD/AC POWER Type 2 AC_DAC50S-11-275_pic.png", caption: "AC POWER Type 2 AC_DAC50S-11-275" },
          { image: "/Images/Citel/AC DC POWER SPD/AC POWER _Type 1 + 2+3 AC_DACN1-25CVGS-31-320-SC.png", caption: "AC POWER _Type 1 + 2+3 AC_DACN1-25CVGS-31-320-SC" },
          { image: "/Images/Citel/AC DC POWER SPD/AC POWER _Type 1+2+3 2756_DS254VG-300-G_pic.png", caption: "AC POWER _Type 1+2+3 2756_DS254VG-300-G" },
          { image: "/Images/Citel/AC DC POWER SPD/AC POWER _Type 2 (or 3)821310242_DACF15S-11-275__pic.png", caption: "AC POWER _Type 2 (or 3)821310242_DACF15S-11-275" },
          { image: "/Images/Citel/AC DC POWER SPD/AC POWER _Type 2 (or 3)821310244_DACF15S-31-275_pic.png", caption: "AC POWER _Type 2 (or 3)821310244_DACF15S-31-275" },
          { image: "/Images/Citel/AC DC POWER SPD/AC POWER-Type 1 + 2 AC  _DAC1-13S-40-440_pic.png", caption: "AC POWER-Type 1 + 2 AC  _DAC1-13S-40-440" },
          { image: "/Images/Citel/AC DC POWER SPD/DC POWER _70124042_DDCN03S-21YG-30.webp", caption: "DC POWER _70124042_DDCN03S-21YG-30" },
          { image: "/Images/Citel/AC DC POWER SPD/DC POWER _828511563_DDC50S-21Y-1200.png", caption: "DC POWER _828511563_DDC50S-21Y-1200" },
          { image: "/Images/Citel/AC DC POWER SPD/DC POWER _DDC20CS-20-24.webp", caption: "DC POWER _DDC20CS-20-24" }
        ]
      },
      {
        name: "Photovoltaic",
        icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l3-12h14l-3 12H3z" /><path d="M6 15h13.5" /><path d="M9 9l-2 12" /><path d="M15 9l-2 12" /></svg>,
        products: [
          { image: "/Images/Citel/PHOTOVOLTAIC/PHOTOVOLTAIC _ DPVN1-6CVGS-21Y-1200-Kamera+Kopie.png", caption: "PHOTOVOLTAIC _ DPVN1-6CVGS-21Y-1200" },
          { image: "/Images/Citel/PHOTOVOLTAIC/PHOTOVOLTAIC _Type 2 DS50PVS-1000.png", caption: "PHOTOVOLTAIC _Type 2 DS50PVS-1000" },
          { image: "/Images/Citel/PHOTOVOLTAIC/PHOTOVOLTAIC _Type 2+3_DPVN40CVGS-21Y-1200_pic.png", caption: "PHOTOVOLTAIC _Type 2+3_DPVN40CVGS-21Y-1200" },
          { image: "/Images/Citel/PHOTOVOLTAIC/PHOTOVOLTAIC_Type 1+2_DS60VGPV-1000-G-51-pic.png", caption: "PHOTOVOLTAIC_Type 1+2_DS60VGPV-1000-G-51" }
        ]
      },
      {
        name: "LED",
        icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2v1" /><path d="M5.6 5.6l.7.7" /><path d="M18.4 5.6l-.7.7" /><path d="M12 7a5 5 0 1 0 5 5c0 1.5-1.5 3-1.5 6h-7C8.5 15 7 13.5 7 12a5 5 0 0 1 5-5z" /></svg>,
        products: [
          { image: "/Images/Citel/LED/LED Type 2 (or 3)_MLPC1-230L-R_pic.png", caption: "LED Type 2 (or 3)_MLPC1-230L-R" },
          { image: "/Images/Citel/LED/LED _STANDARD SURGE PROTECTION _MLPX1-230L-W_pic.png", caption: "LED _STANDARD SURGE PROTECTION _MLPX1-230L-W" },
          { image: "/Images/Citel/LED/LED _STANDARD SURGE PROTECTION _Type 2 (or 3)_MLPM1-230L-R_pic.png", caption: "LED _STANDARD SURGE PROTECTION _Type 2 (or 3)_MLPM1-230L-R" }
        ]
      },
      {
        name: "Telecom",
        icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
        products: [
          { image: "/Images/Citel/TELECOM/TELECOM _DIN RAIL _ 640211_DLA2-12D3_pic.png", caption: "TELECOM _DIN RAIL _ 640211_DLA2-12D3" },
          { image: "/Images/Citel/TELECOM/TELECOM_DIN RAIL _DLA-24D3_pic.png", caption: "TELECOM_DIN RAIL _DLA-24D3" }
        ]
      },
      {
        name: "Dataline",
        icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="6" rx="2" ry="2" /><rect x="2" y="9" width="20" height="6" rx="2" ry="2" /><rect x="2" y="16" width="20" height="6" rx="2" ry="2" /><path d="M6 5h.01M6 12h.01M6 19h.01" /></svg>,
        products: [
          { image: "/Images/Citel/DATALINE/DATALINE  SPD -CRMJ8-POE-C6A.png", caption: "DATALINE  SPD -CRMJ8-POE-C6A" },
          { image: "/Images/Citel/DATALINE/DATALINE SPD_CXC06_pic.png", caption: "DATALINE SPD_CXC06" },
          { image: "/Images/Citel/DATALINE/DATALINE _CWMJ8-POE-C6A_pic.png", caption: "DATALINE _CWMJ8-POE-C6A" },
          { image: "/Images/Citel/DATALINE/DATALINE_MJ8-POE.png", caption: "DATALINE_MJ8-POE" }
        ]
      },
      {
        name: "Radiocom",
        icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12 A10 10 0 0 1 22 12" /><path d="M6 12 A6 6 0 0 1 18 12" /><path d="M10 12 A2 2 0 0 1 14 12" /><path d="M12 12 L12 22" /><path d="M10 22 L14 22" /></svg>,
        products: [
          { image: "/Images/Citel/ACCESSORIES & OTHER PRODUCTS/RADIOCOMMUNICATION_60014_P8AX25-N-FF_pic.png", caption: "RADIOCOMMUNICATION_60014_P8AX25-N-FF" }
        ]
      },
      {
        name: "Wind Turbine",
        icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12v10" /><path d="M9 22h6" /><path d="M12 12L12 2" /><path d="M12 12L3.3 17" /><path d="M12 12L20.7 17" /><circle cx="12" cy="12" r="2" /></svg>,
        products: [
          { image: "/Images/Citel/ACCESSORIES & OTHER PRODUCTS/WIND TURBINE SPD_DS44S-280-G_pic.png", caption: "WIND TURBINE SPD_DS44S-280-G" }
        ]
      },
      {
        name: "Accessories",
        icon: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M12 11v6" /><path d="M9 14h6" /></svg>,
        products: [
          { image: "/Images/Citel/ACCESSORIES & OTHER PRODUCTS/ACCESSORIES _790121_LSC_A.png", caption: "ACCESSORIES _790121_LSC_A" }
        ]
      }
    ],
    certifiedLogos: [
    ],
    aboutP1: "Since 1937, CITEL has been keeping the world's critical networks and equipment protected from transient overvoltages. Whether a large magnitude lightning strike or the relentless barrage of switching events, our surge protectors keep sensitive electronics safe and operations uninterrupted. CITEL's thorough understanding of local standards and regulations, along with a continuous investment in R&D, inspire us to design, manufacture and supply millions of SPD’s each year to our clients who are conscious of the danger transients pose and actively take steps to eliminate the threat.",
    aboutP2: "CITEL develops many of our critical surge protection components internally including gas discharge tubes, thermally protected varistors and high-energy varistor assemblies. This means that CITEL has expertise into every minute detail of the parts that make up an SPD. Our teams all over the globe are proud to bring our clients a comprehensive product range of surge protectors that is unmatched in customer service and product quality.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Over 85 Years of Surge Expertise"
  },
  pittas: {
    name: "Pittas",
    heroBg: "/Images/Home/Rectangle 24.png",
    subtitle: "Earthing & Structural Protection",
    description: "High-conductive earthing accessories, copper tapes, and premium grounding conductors certified to absolute international standards.",
    website: "https://pittas.gr/en/",
    productRange: [
      { image: "/Images/pittas/Tape Conductor hot dip galvanized steel.png", caption: "Tape conductor hot dip galvanized steel (St/tZn)" },
      { image: "/Images/pittas/Connectors,clamps,fasteners in various materials .png", caption: "Connectors/clamps/fasteners in various materials (St/tZn, Cu, Cu/eSn, Stainless Steel) and sizes" },
      { image: "/Images/pittas/Lightning conductor E.S.E. TESLA-S.jpg", caption: "Lightning conductor E.S.E. TESLA-S" },
      { image: "/Images/pittas/DSC_5628cx .jpg", caption: "" },
      { image: "/Images/pittas/Screenshot from 2026-05-18 12-54-44.png", caption: "" }
    ],
    certifiedLogos: [
      "/Images/Certificates/taqa group.png"
    ],
    aboutP1: "PITTAS-DRAGNIS is a highly specialized Greek company operating for more than 30 years in the field of Lightning - Surge Protection and Grounding Systems. For every project, regardless its size, offers a quality, personalized solution. From the design and manufacturing parts to proper installation and maintenance.",
    aboutP2: "The aim of PITTAS-DRAGNIS is the excellent cooperation and the establishment of a trust relationship with their customers. The instructed staff of the company is always ready to offer support and valid information. The high quality - competitive products that offered comply with the International, European and National standards. The range of products continues to expand and includes, among others: Early Streamer Emission arrestors TESLA-S, materials and accessories of lightning - grounding system.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Pure Electrolytic Copper Conductors"
  },
  palazzoli: {
    name: "Palazzoli",
    heroBg: "/Images/Home/Rectangle 24 (1).png",
    subtitle: "Explosion Proof & Industrial Switchgear",
    description: "Heavy-duty electrical connections, switch disconnectors, and IEC 309 plugs and sockets engineered for safety in explosive atmospheres.",
    website: "https://www.palazzoli.com/en/",
    productRange: [
      // Lighting
      { image: "/Images/palazolli/Lighting/IMG_3326.png", caption: "Industrial LED Lighting" },
      { image: "/Images/palazolli/Lighting/META Lighting.png", caption: "META Lighting" },
      { image: "/Images/palazolli/Lighting/Rino lighting.png", caption: "Rino Lighting" },
      { image: "/Images/palazolli/Lighting/Tigua.png", caption: "Tigua" },
      { image: "/Images/palazolli/Lighting/Tigua_led.png", caption: "Tigua LED" },
      { image: "/Images/palazolli/Lighting/X-Tigua.png", caption: "X-Tigua" },
      { image: "/Images/palazolli/Lighting/X-Tigua_Floodlight_suspension.jpg", caption: "X-Tigua Floodlight Suspension" },
      { image: "/Images/palazolli/Lighting/X-Tigua_Floodlight_tunnel.jpg", caption: "X-Tigua Floodlight Tunnel" },
      { image: "/Images/palazolli/Lighting/X-Tigua_Floodlight_wall_mounted.jpg", caption: "X-Tigua Floodlight Wall Mounted" }
    ],
    certifiedLogos: [
    ],
    aboutP1: "Palazzoli was established in 1904, founded by Knight of Labor Federico Palazzoli, as a company specializing in electrical equipment for industrial plants for the supply of energy. For more than a century, unmatched high standards of safety and durability still remain our top priority. This commitment has made the Palazzoli brand synonymous with reliability in the electrotechnical industry, also challenged in the lighting sector with our first illuminated submarine in 1927.",
    aboutP2: "Now Palazzoli covers an area of 84,000 square meters with 210 workers and 70 graduates and skilled workers. Its headquarters and production plant are in Brescia and its sales network is covering the main European and worldwide countries. Palazzoli is the parent company of a group composed of: Lewden in Braintree (UK), Stral in Brescia and Palazzoli Middle East in Dubai. Its catalogue, including over 5,000 products, is among the largest and most complete offer and meets, with specific solutions, all the needs of the Industry, Atex, Infrastructure and Marine sectors both for the electrical systems division and for the lighting division.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "ATEX & Hazardous Zone Certified"
  },
  siechem: {
    name: "Siechem",
    heroBg: "/Images/Home/Rectangle 23.png",
    subtitle: "Specialty & High-Performance Cables",
    description: "Advanced solar, marine, rolling stock, and heat-resistant industrial cables engineered to withstand extreme environment stresses.",
    website: "https://www.siechem.com/",
    productRange: [],
    categoryStyle: "tabs",
    categories: [
      { name: "BUILDING WIRES", catalogue: "https://www.siechem.com/catalogue/", products: [] },
      { name: "POWER CABLES", catalogue: "https://www.siechem.com/catalogue/", products: [] },
      { name: "RUBBER CABLES", catalogue: "https://www.siechem.com/catalogue/", products: [] },
      { name: "TELECOMMUNICATION CABLES", catalogue: "https://www.siechem.com/catalogue/", products: [] },
      { name: "SOLAR CABLES", catalogue: "https://www.siechem.com/catalogue/", products: [] },
      { name: "WELDING CABLES", catalogue: "https://www.siechem.com/catalogue/", products: [] }
    ],
    certifiedLogos: [
    ],
    aboutP1: "Siechem’s In-house cable design studio can design and develop any type of cable with its expertise supported by R&D team to make insulating, sheathing and jacketing compounds that any competitor can offer.",
    aboutP2: "The company’s current production capacity is about 3000 kms of wires and cables a day of assorted sizes of wires & cables. Siechem has more than 22 million part numbers for 34 different segments/markets.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Operating from -60°C to +250°C"
  },
  helukabel: {
    name: "Helukabel",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Industrial Wires & Control Cable Systems",
    description: "Flexible control cables, drag-chain cables, data networking lines, and plug-and-play customized cable assembly systems.",
    website: "https://www.helukabel.com/",
    productRange: [],
    categoryStyle: "tabs",
    categories: [
      { name: "CONTROL CABLE", catalogue: "https://www.helu.com/us-en/products-solutions/industrial-machine-cables/control-connection-cables/", products: [] },
      { name: "SINGLE CONDUCTOR WIRES", catalogue: "https://www.helu.com/us-en/products-solutions/industrial-machine-cables/single-conductor-cables/", products: [] }
    ],
    certifiedLogos: [
    ],
    aboutP1: "HELUKABEL is one of Germany's leading cable companies, distributing an extensive range of wires, cables, special cables, media technology, cable accessories, and network components.",
    aboutP2: "Our advanced testing laboratories simulate millions of flex cycles inside energy drag chains, certifying our cables for maximum reliability inside high-speed robotic systems and modern automation lines.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "German Engineered Drag-Chain Flex"
  },
  obobettermann: {
    name: "OBO Bettermann",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Cable Management & Lightning Protection Systems",
    description: "Premium German-engineered cable trays, transient surge protectors, and connection systems for state-of-the-art building installations.",
    website: "https://www.obo-bettermann.com/en-wo/",
    productRange: [],
    categoryStyle: "carousel-list",
    categories: [
      {
        name: "CONNECTION & ROUTING SYSTEMS",
        products: [
          { image: "/Images/OBO/CONNECTION & ROUTING SYSTEMS/DISTRIBUTORS.jpg", caption: "DISTRIBUTORS" },
          { image: "/Images/OBO/CONNECTION & ROUTING SYSTEMS/GLANDS.jpg", caption: "GLANDS" },
          { image: "/Images/OBO/CONNECTION & ROUTING SYSTEMS/JUNCTION BOXES.jpg", caption: "JUNCTION BOXES" },
          { image: "/Images/OBO/CONNECTION & ROUTING SYSTEMS/SURFACE MOUNTED SYSTEMS.jpg", caption: "SURFACE MOUNTED SYSTEMS" },
          { image: "/Images/OBO/CONNECTION & ROUTING SYSTEMS/TERMINALS.jpg", caption: "TERMINALS" }
        ]
      },
      {
        name: "U CLAMPS FOR CABLE CONNECTIONS & FASTENING MATERIALS",
        products: [
          { image: "/Images/OBO/U CLAMPS FOR CABLE CONNECTIONS & FASTENING MATERIALS/ANCHOR.jpg", caption: "ANCHOR" },
          { image: "/Images/OBO/U CLAMPS FOR CABLE CONNECTIONS & FASTENING MATERIALS/CABLE & PIPE FASTENINGS.jpg", caption: "CABLE & PIPE FASTENINGS" },
          { image: "/Images/OBO/U CLAMPS FOR CABLE CONNECTIONS & FASTENING MATERIALS/CABLE CLIPS.jpg", caption: "CABLE CLIPS" },
          { image: "/Images/OBO/U CLAMPS FOR CABLE CONNECTIONS & FASTENING MATERIALS/QUICK PIPE CLIPS.jpg", caption: "QUICK PIPE CLIPS" }
        ]
      },
      {
        name: "Beam Clamp Systems",
        products: [
          { image: "/Images/OBO/Junction box A8.jpg", caption: "Junction box A8" },
          { image: "/Images/OBO/cap nut cable gland.jpg", caption: "cap nut cable gland" },
          { image: "/Images/OBO/clamp clip.jpg", caption: "clamp clip" },
          { image: "/Images/OBO/clamping lug.jpg", caption: "clamping lug" },
          { image: "/Images/OBO/distribution box.jpg", caption: "distribution box" },
          { image: "/Images/OBO/double trough.jpg", caption: "double trough" },
          { image: "/Images/OBO/fastening clip.jpg", caption: "fastening clip" },
          { image: "/Images/OBO/grip collection clamp.jpg", caption: "grip collection clamp" },
          { image: "/Images/OBO/injection anchor.jpg", caption: "injection anchor" },
          { image: "/Images/OBO/junction_boxes.png", caption: "junction boxes" },
          { image: "/Images/OBO/nail finishing.jpg", caption: "nail finishing" },
          { image: "/Images/OBO/quick clip.jpg", caption: "quick clip" },
          { image: "/Images/OBO/screwless terminal .jpg", caption: "screwless terminal" },
          { image: "/Images/OBO/single push fit.jpg", caption: "single push fit" },
          { image: "/Images/OBO/surface mounted housing.jpg", caption: "surface mounted housing" },
          { image: "/Images/OBO/u_clamps.png", caption: "u clamps" },
          { image: "/Images/OBO/wall_brackets.png", caption: "wall brackets" }
        ]
      }
    ],
    certifiedLogos: [
    ],
    aboutP1: "OBO are one of the leading manufacturers of installation systems for the electrical infrastructure of buildings and systems.",
    aboutP2: "",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "30,000+ German Engineered Components"
  },
  obsta: {
    name: "Obsta",
    heroBg: "/Images/Obsta/obsta hero banner.jpg",
    subtitle: "Obstruction Lighting & Aircraft Warning Systems",
    description: "Professional aircraft warning lights, medium and high-intensity neon and LED obstruction beacons certified to ICAO and FAA standards.",
    website: "https://www.obsta.com/en/",
    productRange: [],
    categoryStyle: "carousel-list",
    categories: [
      {
        name: "Accessories",
        thumbnail: "/Images/Obsta/ACCESSORIES/ACCESSORIES THUMBNAIL.jpg",
        products: [
          { image: "/Images/Obsta/ACCESSORIES/113625LA.png", caption: "113625LA" },
          { image: "/Images/Obsta/ACCESSORIES/ACCESSORIES - 114803-SITE MONITORING.png", caption: "114803-SITE MONITORING" },
          { image: "/Images/Obsta/ACCESSORIES/ACCESSORIES-113176 MONITORING & CONTROL BOX.png", caption: "113176 MONITORING & CONTROL BOX" },
          { image: "/Images/Obsta/ACCESSORIES/ACCESSORIES-PHOTOCELL.png", caption: "PHOTOCELL" },
          { image: "/Images/Obsta/ACCESSORIES/ACCESSORIES-POWER SUPPLY CABINET -114100.png", caption: "POWER SUPPLY CABINET -114100" }
        ]
      },
      {
        name: "Conductor Warning Light",
        thumbnail: "/Images/Obsta/CONDUCTOR WARNING LIGHT/THUMBNAIL.jpg",
        products: [
          { image: "/Images/Obsta/CONDUCTOR WARNING LIGHT/BALISOR LAMP.png", caption: "BALISOR LAMP" },
          { image: "/Images/Obsta/CONDUCTOR WARNING LIGHT/BALISOR LED SYSTEM _HV LITE 15-114600_redlight.webp", caption: "BALISOR LED SYSTEM HV LITE 15-114600 redlight" }
        ]
      },
      {
        name: "High Intensity",
        thumbnail: "/Images/Obsta/HIGH INTENSITY/HIGH INTENSITY THUMBNAIL.jpg",
        products: [
          { image: "/Images/Obsta/HIGH INTENSITY/HIGH INTENSITY -113780U_L-856.webp", caption: "113780U L-856" },
          { image: "/Images/Obsta/HIGH INTENSITY/HIGH INTENSITY -TYPE  B-113780B.webp", caption: "TYPE B-113780B" },
          { image: "/Images/Obsta/HIGH INTENSITY/HIGH INTENSITY -TYPE A-113780B.webp", caption: "TYPE A-113780B" },
          { image: "/Images/Obsta/HIGH INTENSITY/HIGH INTENSITY _114601.png", caption: "114601" }
        ]
      },
      {
        name: "High Voltage Day Markers",
        thumbnail: "/Images/Obsta/HIGH VOLTAGE DAY MARKERS/THUMBNAIL.jpg",
        products: [
          { image: "/Images/Obsta/HIGH VOLTAGE DAY MARKERS/BIRD DIVERTERS.jpg", caption: "BIRD DIVERTERS" },
          { image: "/Images/Obsta/HIGH VOLTAGE DAY MARKERS/WARNING SPHERES.webp", caption: "WARNING SPHERES" }
        ]
      },
      {
        name: "Low Intensity",
        thumbnail: "/Images/Obsta/LOW INTENSITY/LOW INTENSITY _THUMBNAIL IMAGE.jpg",
        products: [
          { image: "/Images/Obsta/LOW INTENSITY/LOW INTENSITY -NAVILITE-113908-KIT.png", caption: "NAVILITE-113908-KIT" },
          { image: "/Images/Obsta/LOW INTENSITY/LOW INTENSITY NAVILITE-IR-FAA-KIT.png", caption: "NAVILITE-IR-FAA-KIT" },
          { image: "/Images/Obsta/LOW INTENSITY/LOW INTENSITY _ 113905_cable-Red fixed low intensity type A and B.png", caption: "113905 cable-Red fixed low intensity type A and B" },
          { image: "/Images/Obsta/LOW INTENSITY/LOW INTENSITY-113969 (1).png", caption: "113969" },
          { image: "/Images/Obsta/LOW INTENSITY/LOW INTENSITY-Monitoring box-113912.png", caption: "Monitoring box-113912" },
          { image: "/Images/Obsta/LOW INTENSITY/LOW INTENSITY-NAVILITE-F-120-240V-DUAL.png", caption: "NAVILITE-F-120-240V-DUAL" },
          { image: "/Images/Obsta/LOW INTENSITY/LOW INTENSITY-NAVILITE-IR-048V-DUAL.png", caption: "NAVILITE-IR-048V-DUAL" }
        ]
      },
      {
        name: "Medium Intensity",
        thumbnail: "/Images/Obsta/MEDIUM INTENSITY/MEDIUM INTENSITY _THUMBNAIL IMAGE.jpg",
        products: [
          { image: "/Images/Obsta/MEDIUM INTENSITY/MEDIUM INTENSITY _ OFC-Red medium intensity.png", caption: "OFC-Red medium intensity" },
          { image: "/Images/Obsta/MEDIUM INTENSITY/MEDIUM INTENSITY-Balise_180°_1.png", caption: "Balise 180° 1" },
          { image: "/Images/Obsta/MEDIUM INTENSITY/MEDIUM INTENSITY-Balise_Integrée.png", caption: "Balise Integrée" },
          { image: "/Images/Obsta/MEDIUM INTENSITY/MEDIUM INTENSITY-Dual color medium intensity NVG compatible - OFD.png", caption: "Dual color medium intensity NVG compatible - OFD" },
          { image: "/Images/Obsta/MEDIUM INTENSITY/OBSTAFLASH120 ou 180 dual color medium intensity-113747JB.webp", caption: "OBSTAFLASH120 ou 180 dual color medium intensity-113747JB" },
          { image: "/Images/Obsta/MEDIUM INTENSITY/OFP-180-RW-JB-113738.webp", caption: "OFP-180-RW-JB-113738" }
        ]
      }
    ],
    certifiedLogos: [
      "/Images/Certificates/civil aviation.jpg"
    ],
    aboutP1: "OBSTA, a subsidiary of CITEL group is part of an industrial group that engineers, manufactures and sells obstruction lights for transmission lines, telecom and broadcast towers and all kind of obstacle to air navigation.",
    aboutP2: "Our obstruction lights are manufactured by us based on ICAO annex and the FAA (Federal Aviation Administration).",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "ICAO & FAA Certified Solutions"
  },
  dietzelunivolt: {
    name: "Dietzel Univolt",
    heroBg: "/Images/Home/Rectangle 24.png",
    subtitle: "Cable Protection & Conduit Systems",
    description: "Premium Austrian-engineered PVC and halogen-free plastic conduits, fittings, and cable management enclosures built for heavy-duty industrial installations.",
    website: "https://www.dietzel-univolt.com/",
    productRange: [
      { image: "/Images/Dietzel/HFX-Turbo_hgrau_XL_MD02.jpg", caption: "HFX-Turbo hgrau XL MD02" },
      { image: "/Images/Dietzel/HFXP X_104830_MD02.jpg", caption: "HFXP X 104830 MD02" },
      { image: "/Images/Dietzel/HFXP-HT_sw_XL_MD02.jpg", caption: "HFXP-HT sw XL MD02" },
      { image: "/Images/Dietzel/HFXP_Turbo_PRO_schwarz_XL_MD02.jpg", caption: "HFXP Turbo PRO schwarz XL MD02" },
      { image: "/Images/Dietzel/HFXS_gr_XL_MD02.jpg", caption: "HFXS gr XL MD02" },
      { image: "/Images/Dietzel/HFXS_sw_XL_MD02.jpg", caption: "HFXS sw XL MD02" },
      { image: "/Images/Dietzel/HFXX_HFXPXpro_MD02.jpg", caption: "HFXX HFXPXpro MD02" },
      { image: "/Images/Dietzel/HFXX_XL_MD02.jpg", caption: "HFXX XL MD02" },
      { image: "/Images/Dietzel/HFX_ws_XL_MD02.jpg", caption: "HFX ws XL MD02" }
    ],
    certifiedLogos: [
    ],
    aboutP1: "Dietzel Univolt is an international pioneer in plastic cable protection systems, manufacturing high-performance conduits, cable trunks, and installation accessories. Operating since 1938 in Austria, Dietzel's systems offer superior chemical and flame resistance, safeguarding complex electrical networks.",
    aboutP2: "Our Univolt ranges encompass light to heavy-gauge halogen-free conduits, corrosion-proof distribution boxes, and quick-mount clips. Trusted in tunnels, power stations, airports, and industrial centers around the globe.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Austrian Quality Since 1938"
  },
  haufftechnik: {
    name: "Hauff Technik",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Cable & Pipe Sealing Systems",
    description: "Innovative German-engineered press seals, wall sleeves, and gas-tight entry portals for absolute safety and structural waterproofing.",
    website: "https://www.hauff-technik.de/en",
    productRange: [
      { image: "/Images/Hauff/B1_HRD100_SG_1X24-52_B40.TIF.1920.jpg", caption: "B1 HRD100 SG 1X24-52 B40" },
      { image: "/Images/Hauff/B1_HRD100_SG_2X8-30_3X4-16_5_B40.TIF.1920.jpg", caption: "B1 HRD100 SG 2X8-30 3X4-16 5 B40" },
      { image: "/Images/Hauff/B1_HRD100_SG_4X8-30_B40.TIF.1920.jpg", caption: "B1 HRD100 SG 4X8-30 B40" },
      { image: "/Images/Hauff/B1_HRD100_SG_8X4-16_5_B40.TIF.1920.jpg", caption: "B1 HRD100 SG 8X4-16 5 B40" },
      { image: "/Images/Hauff/B1_HRD150_SG_1X75-110_B40.TIF.1920.jpg", caption: "B1 HRD150 SG 1X75-110 B40" },
      { image: "/Images/Hauff/B1_HRD150_SG_6X8-35_B40.TIF.1920.jpg", caption: "B1 HRD150 SG 6X8-35 B40" },
      { image: "/Images/Hauff/B1_HRD150_SG_9X6-25_B40.TIF.1920.jpg", caption: "B1 HRD150 SG 9X6-25 B40" },
      { image: "/Images/Hauff/B1_HRD200_SG_3X6-54_4X6-26_B40.TIF.1920.jpg", caption: "B1 HRD200 SG 3X6-54 4X6-26 B40" },
      { image: "/Images/Hauff/B1_HRD200_SG_7X10-32_8X3_5-16_5_B40.TIF.1920.jpg", caption: "B1 HRD200 SG 7X10-32 8X3 5-16 5 B40" }
    ],
    certifiedLogos: [
      "/Images/Certificates/dewa.jpg"
    ],
    aboutP1: "One of Europe's leading manufacturers of sealing systems for cables, pipes and building entries.",
    aboutP2: "Our innovative sealing systems protect your building from penetrating water, gas, fire, dirt and vermin.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Gas-Tight & Watertight Sealing"
  },
  palazzolilewden: {
    name: "Palazzoli Lewden",
    heroBg: "/Images/Home/Rectangle 24 (1).png",
    subtitle: "Industrial Electrical & Connection Solutions",
    description: "Sleek industrial-grade distribution boards, customized enclosures, lighting systems, XCEE switches, and heavy-duty plugs manufactured to supreme safety standards.",
    website: "https://www.lewden.com/",
    productRange: [],
    categoryStyle: "carousel-list",
    categories: [
      {
        name: "ATEX - EXPLOSION PROOF PLUGS & SOCKET RANGE",
        products: [
          { image: "/Images/PalazolliLewden/ATEX -EXPLOSION PROOF PLUGS SOCKET RANGE/BOXES AND CABLE GLANDS.png", caption: "Boxes and Cable Glands", link: "https://www.palazzoli.com/en/products/electrical-systems#boards-and-boxes" },
          { image: "/Images/PalazolliLewden/ATEX -EXPLOSION PROOF PLUGS SOCKET RANGE/INTERLOCKED SOCKET OUTLET.png", caption: "Interlocked Socket Outlet", link: "https://www.palazzoli.com/en/products/electrical-systems#boards-and-boxes" },
          { image: "/Images/PalazolliLewden/ATEX -EXPLOSION PROOF PLUGS SOCKET RANGE/MOBILE PLUGS.png", caption: "Mobile Plugs", link: "https://www.palazzoli.com/en/products/electrical-systems#boards-and-boxes" },
          { image: "/Images/PalazolliLewden/ATEX -EXPLOSION PROOF PLUGS SOCKET RANGE/RESTRICTED BREATHING EQUIPMENT.png", caption: "Restricted Breathing Equipment", link: "https://www.palazzoli.com/en/products/electrical-systems#boards-and-boxes" },
          { image: "/Images/PalazolliLewden/ATEX -EXPLOSION PROOF PLUGS SOCKET RANGE/SMALL CONTROL AND SIGNALLING DEVICES.png", caption: "Small Control And Signalling Devices", link: "https://www.palazzoli.com/en/products/electrical-systems#boards-and-boxes" }
        ]
      },
      {
        name: "INDUSTRY",
        products: [
          { image: "/Images/PalazolliLewden/INDUSTRY/BOARDS & BOXES.png", caption: "Boards & Boxes", link: "https://www.palazzoli.com/en/products/electrical-systems#interlocked-socket-outlets" },
          { image: "/Images/PalazolliLewden/INDUSTRY/CONTROL AND PROTECTION.png", caption: "Control And Protection", link: "https://www.palazzoli.com/en/products/electrical-systems#interlocked-socket-outlets" },
          { image: "/Images/PalazolliLewden/INDUSTRY/INTERLOCKED SOCKET OUTLETS.png", caption: "Interlocked Socket Outlets", link: "https://www.palazzoli.com/en/products/electrical-systems#interlocked-socket-outlets" },
          { image: "/Images/PalazolliLewden/INDUSTRY/PLUGS & SOCKETS.png", caption: "Plugs & Sockets", link: "https://www.palazzoli.com/en/products/electrical-systems#interlocked-socket-outlets" },
          { image: "/Images/PalazolliLewden/INDUSTRY/PRE WIRED BOARDS FOR STANDARD AND HEAVY DUTY APPLICATIONS.png", caption: "Pre Wired Boards For Standard And Heavy Duty Applications", link: "https://www.palazzoli.com/en/products/electrical-systems#interlocked-socket-outlets" }
        ]
      },
      {
        name: "INFRASTRUCTURE",
        products: [
          { image: "/Images/PalazolliLewden/INFRASTRUCTURE/LIGHTING SIGN SYSTEMS.png", caption: "Lighting Sign Systems", link: "https://www.palazzoli.com/en/products/electrical-systems#mobile-plugs" },
          { image: "/Images/PalazolliLewden/INFRASTRUCTURE/VENTILATION SYSTEMS.png", caption: "Ventilation Systems", link: "https://www.palazzoli.com/en/products/electrical-systems#mobile-plugs" }
        ]
      },
      {
        name: "MARINE",
        products: [
          { image: "/Images/PalazolliLewden/MARINE/CONTAINER SOCKETS.png", caption: "Container Sockets", link: "https://www.palazzoli.com/en/products/electrical-systems#distribution-turrets" },
          { image: "/Images/PalazolliLewden/MARINE/DISTRIBUTION TURRETS.png", caption: "Distribution Turrets", link: "https://www.palazzoli.com/en/products/electrical-systems#distribution-turrets" },
          { image: "/Images/PalazolliLewden/MARINE/ON BOARD SHIP CONTROL WITHDRAWAL AND SIGNALLING DEVICES.png", caption: "On Board Ship Control Withdrawal And Signalling Devices", link: "https://www.palazzoli.com/en/products/electrical-systems#distribution-turrets" },
          { image: "/Images/PalazolliLewden/MARINE/UNAV CONTROL WITHDRAWAL AND SIGNALLING DEVICE.png", caption: "Unav Control Withdrawal And Signalling Device", link: "https://www.palazzoli.com/en/products/electrical-systems#distribution-turrets" }
        ]
      }
    ],
    certifiedLogos: [
      "/Images/Certificates/dewa.jpg"
    ],
    aboutP1: "Palazzoli Lewden (Lewden) is a major UK and European designer of bespoke power distribution systems, robust metal-clad accessories, and specialized connection couplers. Powered by Palazzoli's industrial-grade components, Lewden delivers unparalleled durability inside challenging environments.",
    aboutP2: "Our tailored solutions range from custom consumer units to heavy-duty power clusters for commercial construction, marine docks, and transport terminals globally.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Tailored UK & European Distribution"
  },
  litetech: {
    name: "Litetech",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Professional LED Lighting Solutions",
    description: "Innovative and high-efficiency LED indoor, street lighting, floodlights, and custom linear lighting systems designed for premium building architectural specifications.",
    website: "http://www.litetech.ae/",
    productRange: [
      // led economic light fixtures
      { image: "/Images/Litetech/led economic light fixtures/75-bulkhead.webp", caption: "Bulkhead Light" },
      { image: "/Images/Litetech/led economic light fixtures/75-downlight-1a.webp", caption: "LED Downlight" },
      { image: "/Images/Litetech/led economic light fixtures/75-floodlight-1-a.webp", caption: "LED Floodlight" },
      { image: "/Images/Litetech/led economic light fixtures/75-mirrorlight.webp", caption: "Mirrorlight" },
      { image: "/Images/Litetech/led economic light fixtures/75-spotlight.webp", caption: "LED Spotlight" },
      { image: "/Images/Litetech/led economic light fixtures/75-striplight.webp", caption: "LED Striplight" },
      { image: "/Images/Litetech/led economic light fixtures/75-weatherproof.webp", caption: "Weatherproof Light" },
      { image: "/Images/Litetech/led economic light fixtures/75-downlight-1a.webp", caption: "DL-P1 Downlight" },
      { image: "/Images/Litetech/led economic light fixtures/89-HB_A.webp", caption: "HB High Bay Light" },
      // led floodlight
      { image: "/Images/Litetech/led floodlight/113f2.webp", caption: "Floodlight 113F2" },
      { image: "/Images/Litetech/led floodlight/114F0-1.webp", caption: "Floodlight 114F0" },
      { image: "/Images/Litetech/led floodlight/114F5-1.webp", caption: "Floodlight 114F5" },
      { image: "/Images/Litetech/led floodlight/128s1-1.webp", caption: "128S1 Floodlight" },
      { image: "/Images/Litetech/led floodlight/FLOODSTAR-210.webp", caption: "Floodstar 210" },
      { image: "/Images/Litetech/led floodlight/FLOODSTAR-FL02.webp", caption: "Floodstar FL02" },
      { image: "/Images/Litetech/led floodlight/Floodstar-8.webp", caption: "Floodstar 8" },
      { image: "/Images/Litetech/led floodlight/TREELED-500.webp", caption: "Treeled 500" },
      { image: "/Images/Litetech/led floodlight/floodstar-6.webp", caption: "Floodstar 6" },
      { image: "/Images/Litetech/led floodlight/variflood-400w-1.webp", caption: "Variflood 400W" },
      { image: "/Images/Litetech/led floodlight/variflood-600w-1.webp", caption: "Variflood 600W" },
      // led indoor
      { image: "/Images/Litetech/led indoor/ECLIPSE.webp", caption: "Eclipse LED" },
      { image: "/Images/Litetech/led indoor/LUKAS-LILI.webp", caption: "Lukas Lili LED" },
      { image: "/Images/Litetech/led indoor/archled-500.webp", caption: "Archled 500" },
      { image: "/Images/Litetech/led indoor/archled-slim-5001.webp", caption: "Archled Slim 5001" },
      { image: "/Images/Litetech/led indoor/galina-500.webp", caption: "Galina 500" },
      { image: "/Images/Litetech/led indoor/galina-diffuser-500.webp", caption: "Galina Diffuser 500" },
      { image: "/Images/Litetech/led indoor/lukas-500.webp", caption: "Lukas 500" },
      { image: "/Images/Litetech/led indoor/luxlite_new.webp", caption: "Luxlite New" },
      { image: "/Images/Litetech/led indoor/med-eco.webp", caption: "Med Eco LED" },
      { image: "/Images/Litetech/led indoor/medica-500-1.webp", caption: "Medica 500" },
      { image: "/Images/Litetech/led indoor/simoled-500x500.webp", caption: "Simoled 500x500" },
      { image: "/Images/Litetech/led indoor/snowplan1.webp", caption: "Snowplan 1" },
      { image: "/Images/Litetech/led indoor/snowpro-500.webp", caption: "Snowpro 500" },

      // led roadlight
      { image: "/Images/Litetech/led roadlight/roadstar-ld5.webp", caption: "Roadstar LD5" },
      { image: "/Images/Litetech/led roadlight/streetstar.webp", caption: "Streetstar" },
      // led striplight
      { image: "/Images/Litetech/led striplight/FLEXISTRIP-COB.webp", caption: "Flexistrip COB" },
      { image: "/Images/Litetech/led striplight/LTNEONFLEX_F16.webp", caption: "LT Neonflex F16" },
      { image: "/Images/Litetech/led striplight/LTNEONFLEX_F21.webp", caption: "LT Neonflex F21" },
      { image: "/Images/Litetech/led striplight/flexistrip-FES.webp", caption: "Flexistrip FES" },
      { image: "/Images/Litetech/led striplight/flexistrip-FSS.webp", caption: "Flexistrip FSS" }
    ],
    certifiedLogos: [
    ],
    aboutP1: "LITETECH will supply lighting fixtures and associated spares and accessories meeting the quality standards and requirements.",
    aboutP2: "",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "High Efficiency & Bespoke Luminaires"
  },
  sirena: {
    name: "Sirena",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Visual & Acoustic Signaling Devices",
    description: "Premium visual beacons, industrial warning sirens, and state-of-the-art signaling systems for industrial safety and automation.",
    website: "https://www.sirena.it/en/",
    productRange: [
      { image: "/Images/Sierna/INDUSTRIA-Segnalatori-acustici-350x350.jpg", caption: "Acoustic Signalers" },
      { image: "/Images/Sierna/INDUSTRIA-Segnalatori-acustico-luminosi-350x350.jpg", caption: "Acoustic & Luminous Signalers" },
      { image: "/Images/Sierna/INDUSTRIA-Segnalatori-luminosi-350x350.jpg", caption: "Luminous Signalers" },
      { image: "/Images/Sierna/INDUSTRIA_Basi-Ricambi-e-accessori-350x350.jpg", caption: "Bases & Accessories" },
      { image: "/Images/Sierna/INDUSTRIA_Colonne-di-segnalazione-350x350.jpg", caption: "Signaling Columns" }
    ],
    certifiedLogos: [
    ],
    aboutP1: "design and manufacture acoustic and optical devices for different fields of applications: mobility, industrial, and evacuation",
    aboutP2: "",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Italian Engineering Excellence"
  },
  frater: {
    name: "Frater",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Professional LED & Industrial Lighting Systems",
    description: "High-efficiency LED panel lights, linear systems, highbay fixtures, and weatherproof luminaires engineered for premium building and industrial specifications.",
    website: "https://fraterlighting.com",
    productRange: [
      { image: "/Images/frater/Ceiling lights.png", caption: "Ceiling Lights" },
      { image: "/Images/frater/Highbay lights.png", caption: "Highbay Lights" },
      { image: "/Images/frater/Linear lights.png", caption: "Linear Lights" },
      { image: "/Images/frater/Panel Lights.png", caption: "Panel Lights" },
      { image: "/Images/frater/weatherproff lights.png", caption: "Weatherproof Lights" }
    ],
    certifiedLogos: [
    ],
    aboutP1: "Frater is a premium manufacturer specializing in cutting-edge LED lighting technology and customized luminaire solutions. Engineered for maximum luminous efficacy and superior thermal management, Frater products provide robust and energy-efficient lighting for complex industrial and commercial spaces.",
    aboutP2: "With an extensive range covering highbays, panels, weatherproof linear fixtures, and customized architectural elements, Frater is dedicated to bringing durable and state-of-the-art illumination to offices, warehouses, retail centers, and outdoor installations.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "High-Efficacy LED Lighting Systems"
  },
  bgelectric: {
    name: "BG Electrical",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Premium Wiring Accessories & Electrical Solutions",
    description: "High-performance wiring accessories, British-standard switches, junction boxes, and IP55/IP66 weatherproof fittings designed for residential, commercial, and industrial installations.",
    website: "https://www.bgelectrical.uk/",
    productRange: [
      { image: "/Images/BG/Ceiling%20accessories/CEILING%20ROSES.webp", caption: "Ceiling Roses" },
      { image: "/Images/BG/Ceiling%20accessories/CEILING%20SWITCHES.webp", caption: "Ceiling Switches" },
      { image: "/Images/BG/Ceiling%20accessories/DECORATIVE%20CEILING%20ROSES%20AND%20SWITCHES.webp", caption: "Decorative Ceiling Roses & Switches" },
      { image: "/Images/BG/Ceiling%20accessories/FLUORESCENT%20STARTERS.webp", caption: "Fluorescent Starters" },
      { image: "/Images/BG/Ceiling%20accessories/LUMINAIRE%20SUPPORT%20CONNECTORS.webp", caption: "Luminaire Support Connectors" },
      { image: "/Images/BG/Ceiling%20accessories/T2%20BATTEN%20HOLDERS.webp", caption: "T2 Batten Holders" },
      { image: "/Images/BG/Ceiling%20accessories/T2%20ENCLOSED%20BATTERN%20HOLDERS.webp", caption: "T2 Enclosed Batten Holders" },
      { image: "/Images/BG/Ceiling%20accessories/T2%20HEAT%20RESISTANT%20LAMP%20HOLDERS.webp", caption: "T2 Heat Resistant Lamp Holders" },
      { image: "/Images/BG/Ceiling%20accessories/T2%20PENDANT%20SETS.webp", caption: "T2 Pendant Sets" },
      { image: "/Images/BG/Junction%20boxes/CONNECTION%20COVER.webp", caption: "Connection Cover" },
      { image: "/Images/BG/Junction%20boxes/DRY%20LINING%20BOX.webp", caption: "Dry Lining Box" },
      { image: "/Images/BG/Junction%20boxes/FIRE%20AND%20ACOUSTIC%20METAL%20MOUNTING%20BOX.webp", caption: "Fire & Acoustic Metal Mounting Box" },
      { image: "/Images/BG/Junction%20boxes/JUNCTION%20BOX%20-KNOCKOUT%20ENTRY.webp", caption: "Junction Box - Knockout Entry" },
      { image: "/Images/BG/Junction%20boxes/JUNCTION%20BOX%20-LIGHTING.webp", caption: "Junction Box - Lighting" },
      { image: "/Images/BG/Junction%20boxes/JUNCTION%20BOX%20_HEAVY%20DUTY.webp", caption: "Junction Box - Heavy Duty" },
      { image: "/Images/BG/Junction%20boxes/JUNCTION%20BOX%20_SELECTIVE%20ENTRY.webp", caption: "Junction Box - Selective Entry" },
      { image: "/Images/BG/Junction%20boxes/JUNCTION%20BOXES%20SUMMARY%20.jpg", caption: "Junction Boxes Summary" },
      { image: "/Images/BG/Junction%20boxes/STEEL%20MOUNTING%20BOX.webp", caption: "Steel Mounting Box" },
      { image: "/Images/BG/Weatherproff%20switch%20accessories/13AMP%20SOCKETS.webp", caption: "13AMP Sockets" },
      { image: "/Images/BG/Weatherproff%20switch%20accessories/20AMP%2010AX%20SWITCHES.webp", caption: "20AMP 10AX Switches" },
      { image: "/Images/BG/Weatherproff%20switch%20accessories/COMPACT%20JUNCTION%20BOXES.webp", caption: "Compact Junction Boxes" },
      { image: "/Images/BG/Weatherproff%20switch%20accessories/FUSED%20CONNECTION%20UNIT.webp", caption: "Fused Connection Unit" },
      { image: "/Images/BG/Weatherproff%20switch%20accessories/INLINE%20CONNECTORS.webp", caption: "Inline Connectors" },
      { image: "/Images/BG/Weatherproff%20switch%20accessories/IP%2055%20%20WEATHERPROOF%20ACCESSORIES%20.jpg", caption: "IP55 Weatherproof Accessories" },
      { image: "/Images/BG/Weatherproff%20switch%20accessories/JUNCTION%20BOXES.webp", caption: "Weatherproof Junction Boxes" }
    ],
    certifiedLogos: [
    ],
    aboutP1: "BG Electrical (British General) is a global leader and a household name in premium wiring accessories, switches, junction boxes, and weatherproof electrical products. With a rich history of engineering excellence, BG Electrical delivers highly reliable, British Standard-compliant components that ensure absolute electrical safety and aesthetic appeal.",
    aboutP2: "Our products are trusted by contractors, builders, and MEP professionals across 50+ countries. Engineered with robust thermoplastic, flame-retardant enclosures, and sleek modern designs, BG Electrical continues to set industry standards for residential, commercial, and heavy-duty industrial projects.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "British Standard Certified Quality"
  },
  hvti: {
    name: "HVTI",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "High Voltage Test Instruments",
    description: "Precision-engineered safety testing equipment, high voltage probes, and robust dielectric test systems for industrial electrical verification.",
    website: "https://hvti.in/",
    productRange: [
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Hand Held High Voltage detector high qulaity pictures/Accessories for Voltage detector.png", caption: "Accessories for Voltage detector" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Hand Held High Voltage detector high qulaity pictures/HV detector HOTSTICK operation-Photoroom.jpg", caption: "HV detector HOTSTICK operation-Photoroom" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Hand Held High Voltage detector high qulaity pictures/HV detector Hand operation-Photoroom.jpg", caption: "HV detector Hand operation-Photoroom" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Hand Held High Voltage detector high qulaity pictures/High Voltage live line Detectors.png", caption: "High Voltage live line Detectors" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/AE-150 Partial Discharge Pinpointing System for Large Transformers.png", caption: "AE-150 Partial Discharge Pinpointing System for Large Transformers" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/Automatic Transformers Turns radio Testers.png", caption: "Automatic Transformers Turns radio Testers" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/Current Transformers Testers.png", caption: "Current Transformers Testers" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/D-300 Mid Range Infrared Camera.png", caption: "D-300 Mid Range Infrared Camera" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/D600 - Advanced Level Infrared Camera.png", caption: "D600 - Advanced Level Infrared Camera" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/G-96 Professional Infrared Camers.png", caption: "G-96 Professional Infrared Camers" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/Helmet Mounted Voltage Detector.png", caption: "Helmet Mounted Voltage Detector" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/High Voltage AC Testing Kits.png", caption: "High Voltage AC Testing Kits" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/High Voltage Dc Testing Kits.png", caption: "High Voltage Dc Testing Kits" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/Micro Ohm Meter MM100.png", caption: "Micro Ohm Meter MM100" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/Micro Ohm Meter MM200.png", caption: "Micro Ohm Meter MM200" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/Micro Ohm Meter MM600.png", caption: "Micro Ohm Meter MM600" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/PD Annuciator.png", caption: "PD Annuciator" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/PK80 - Entry Level Infrared Camera.png", caption: "PK80 - Entry Level Infrared Camera" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/Portable Partial Discharge Detector.png", caption: "Portable Partial Discharge Detector" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/Primary Current Injection Testing sets.png", caption: "Primary Current Injection Testing sets" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/SA-100 Series Advanced Circuit Breaker Analyser .png", caption: "SA-100 Series Advanced Circuit Breaker Analyser " },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/Secondary Current Injecting Testing sets.png", caption: "Secondary Current Injecting Testing sets" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/Test bench.png", caption: "Test bench" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/Ultrasonic Corona And Arching Detector .png", caption: "Ultrasonic Corona And Arching Detector " },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/V Series- SF6 Gas Leakage Detection camera.png", caption: "V Series- SF6 Gas Leakage Detection camera" },
      { image: "/Images/HVTI/Product Pictures-20260416T072240Z-3-001/Product Pictures/Labeled Product Catalogues/Vaccum circuit Breaker Bottle test Sets.png", caption: "Vaccum circuit Breaker Bottle test Sets" }
    ],
    certifiedLogos: [
    ],
    aboutP1: "HVTI is a premier brand specializing in high-voltage testing instrumentation and diagnostic systems. We deliver top-tier testing tools and systems designed to monitor, measure, and analyze high-voltage electrical assets such as transformers, generators, cables, and circuit breakers.",
    aboutP2: "Our state-of-the-art products are engineered to meet the highest safety and accuracy standards, supporting power transmission, distribution networks, and industrial facilities globally to ensure operation reliability and safety.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Advanced High-Voltage Diagnosis"
  },
  tigo: {
    name: "Tigo",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Module-Level Power Electronics (MLPE)",
    description: "Innovative solar optimizer and rapid shutdown solutions maximizing safety and energy output of photovoltaic installations.",
    website: "https://www.tigoenergy.com/",
    productRange: [],
    categoryStyle: "carousel-list",
    categories: [
      {
        name: "TS4 Flex MLPE",
        products: [
          { image: "/Images/TIGO/TS4 Flex MLPE/TS4-X-O.png", caption: "TS4-X-O" },
          { image: "/Images/TIGO/TS4 Flex MLPE/TS4-X-S.avif", caption: "TS4-X-S" },
          { image: "/Images/TIGO/TS4 Flex MLPE/TS4-X-F.avif", caption: "TS4-X-F" },
          { image: "/Images/TIGO/TS4 Flex MLPE/TS4-A-O (725W).avif", caption: "TS4-A-O (725W)" },
          { image: "/Images/TIGO/TS4 Flex MLPE/TS4-A-S (725W).avif", caption: "TS4-A-S (725W)" },
          { image: "/Images/TIGO/TS4 Flex MLPE/TS4-A-F (725W).avif", caption: "TS4-A-F (725W)" },
          { image: "/Images/TIGO/TS4 Flex MLPE/TS4-A-O.avif", caption: "TS4-A-O" },
          { image: "/Images/TIGO/TS4 Flex MLPE/TS4-A-S.avif", caption: "TS4-A-S" },
          { image: "/Images/TIGO/TS4 Flex MLPE/TS4-A-F.avif", caption: "TS4-A-F" },
          { image: "/Images/TIGO/TS4 Flex MLPE/TS4-A-2F.avif", caption: "TS4-A-2F" }
        ]
      },
      {
        name: "EI Residential",
        products: [
          { image: "/Images/TIGO/EI Residential/50A ATS (US).avif", caption: "50A ATS (US)" },
          { image: "/Images/TIGO/EI Residential/EI Battery (US).avif", caption: "EI Battery (US)" },
          { image: "/Images/TIGO/EI Residential/EI Inverter (US).avif", caption: "EI Inverter (US)" }
        ]
      },
      {
        name: "Accessories",
        products: [
          { image: "/Images/TIGO/Accessories/CCA (Cloud Connect Advanced).avif", caption: "CCA (Cloud Connect Advanced)" },
          { image: "/Images/TIGO/Accessories/TAP (Tigo Access Point).avif", caption: "TAP (Tigo Access Point)" }
        ]
      }
    ],
    certifiedLogos: [
    ],
    aboutP1: "Tigo is the worldwide leader in Flex MLPE (Module Level Power Electronics) with innovative solutions that increase energy production, enhance safety, and decrease operating costs of solar installations. Tigo’s TS4 platform maximizes the benefit of PV systems and provides customers with the most scalable, versatile, and reliable MLPE solution available.",
    aboutP2: "Tigo was founded in Silicon Valley, California in 2007 to accelerate the adoption of solar energy worldwide",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "World-Class Solar Optimization"
  },
  craigandderricott: {
    name: "Craig & Derricott",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Industrial Switchgear & Safety Isolators",
    description: "High-reliability British safety isolators, rotary switches, control stations, and bespoke railway traction equipment engineered for supreme durability.",
    website: "https://www.craigandderricott.com/",
    productRange: [],
    categoryStyle: "carousel-list",
    categories: [
      {
        name: "F400",
        catalogue: "/Images/Craig and Derricott/F400/F400 Fire Rated Datasheet 2023 v12.pdf",
        products: [
          { image: "/Images/Craig and Derricott/F400/THUMBNAIL IMAGE _ F400 Fire Rated Switchgear-Die Cast- Sheet Steel Enclosures.png", caption: "F400 Series Overview" },
          { image: "/Images/Craig and Derricott/F400/F400 125A Fire Rated Enclosed Assembly.png", caption: "F400 125A Fire Rated Enclosed Assembly" },
          { image: "/Images/Craig and Derricott/F400/F400 20-25-32-40A 2P-3P-4P Fire Rated Enclosure.png", caption: "F400 20-25-32-40A Fire Rated Enclosure" }
        ]
      },
      {
        name: "EDG",
        catalogue: "/Images/Craig and Derricott/EDG/EDG Sheet Steel Hinged Door Range 2023 v14.pdf",
        products: [
          { image: "/Images/Craig and Derricott/EDG/Thumbnail Image _EDG 32-1000A Sheet Steel Hinged Door Range.png", caption: "EDG Series Overview" },
          { image: "/Images/Craig and Derricott/EDG/EDG 32A-80A.png", caption: "EDG 32A-80A" },
          { image: "/Images/Craig and Derricott/EDG/EDG 630A-1000A.png", caption: "EDG 630A-1000A" }
        ]
      },
      {
        name: "Flush Mount & Stainless Steel Range",
        catalogue: "/Images/Craig and Derricott/Flush Mount+  Stainless Steel Range/Stainless Steel SDS Range 2021 v3.pdf",
        products: [
          { image: "/Images/Craig and Derricott/Flush Mount+  Stainless Steel Range/THUMBNAIL _ MERGE _Stainless Steel Enclosures.png", caption: "Stainless Steel Enclosures Overview" },
          { image: "/Images/Craig and Derricott/Flush Mount+  Stainless Steel Range/Flush Mounting.jpg", caption: "Flush Mounting" },
          { image: "/Images/Craig and Derricott/Flush Mount+  Stainless Steel Range/SDFLL80.447.png", caption: "SDFLL80.447" },
          { image: "/Images/Craig and Derricott/Flush Mount+  Stainless Steel Range/stainless steel enc b.png", caption: "Stainless Steel Enclosure" }
        ]
      },
      {
        name: "EDDKG",
        catalogue: "/Images/Craig and Derricott/EDDKG/EDDKG Series Range 2026 V1.pdf",
        products: [
          { image: "/Images/Craig and Derricott/EDDKG/Thumbnail Image_ EDDKG Series Range Die-Cast Aluminium 20A-100A.png", caption: "EDDKG Series Overview" },
          { image: "/Images/Craig and Derricott/EDDKG/EDDKG2.png", caption: "EDDKG2" }
        ]
      },
      {
        name: "EDMP",
        catalogue: "/Images/Craig and Derricott/EDMP/EDMP Range 2025.pdf",
        products: [
          { image: "/Images/Craig and Derricott/EDMP/Thumbnail Image__EDMP 4P -25A to 100A Moulded Plastic Enclosed Isolators.png", caption: "EDMP Series Overview" },
          { image: "/Images/Craig and Derricott/EDMP/EDMP Size 1 LHS.558.png", caption: "EDMP Size 1 LHS" },
          { image: "/Images/Craig and Derricott/EDMP/EDMP Size 2 LHS.559.png", caption: "EDMP Size 2 LHS" }
        ]
      }
    ],
    certifiedLogos: [
    ],
    aboutP1: "Over the past 100 years, British manufacturing company Craig & Derricott have earned a strong reputation for customer service excellence and delivery of high-quality handmade products.",
    aboutP2: "Established in 1922, Craig & Derricott specialise in the design, manufacture and overhaul of low voltage electrical control and switchgear, rail rolling stock components and LED lighting supplying to customers large and small around the world.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "British Engineered Safety Switchgear"
  },
  wallmax: {
    name: "Wallmax",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Cable Trays & Supports",
    description: "Robust metallic cable management systems, heavy-duty ladders, and integrated structural supports for intense industrial environments.",
    website: "https://www.wallmax.it/applications/maritime-offshore/",
    productRange: [
      { image: "/Images/Wallmax/Modules.png", caption: "Modules" },
      { image: "/Images/Wallmax/Round Frames.png", caption: "Round Frames" },
      { image: "/Images/Wallmax/Wm Mini Top and Back Frames.png", caption: "Wm Mini Top and Back Frames" }
    ],
    certifiedLogos: [
    ],
    aboutP1: "WallMax® ingress Protection Solutions are a system of modules and frames used to perfectly seal points of entry of cables and pipes through passages in walls or shelters’ partitions, so as to prevent the infiltration of dust, water, flames and other environmental elements.",
    aboutP2: "",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "High-Safety Modular Sealing"
  },
  tubifor: {
    name: "Tubifor",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Conduits & Cable Protection Systems",
    description: "High-quality PVC and metal conduits and cable protection systems for electrical installations in civil and industrial projects.",
    website: "https://www.tubifor.it/",
    productRange: [
      {
        image: "/Images/Tubifor/Product.png",
        caption: "Product",
        link: "https://www.tubifor.it/prodottiDett.asp?id=115"
      }
    ],
    certifiedLogos: [
    ],
    aboutP1: "Tubifor manufactures advanced conduits and cable protection accessories designed to meet the strict quality standards of modern electrical installations.",
    aboutP2: "Our products guarantee high mechanical protection and electrical isolation, ensuring safety and efficiency in residential and commercial buildings.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Reliable Conduit Protection"
  },
  bahraelectric: {
    name: "Bahra Cables",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Advanced Electrical Cable Systems",
    description: "High, medium, and low-voltage cables and wires manufactured to international standards for power grids and infrastructure.",
    website: "https://www.bahra-cables.com/",
    productRange: [],
    categoryStyle: "tabs",
    categories: [
      { name: "BUILDING WIRES", catalogue: "https://bahra-electric.com/product-category/wires-and-cables/building-wires/", products: [] },
      { name: "Fire Resistance Wires & Cables", catalogue: "https://bahra-electric.com/product-category/wires-and-cables/fire-resistance-wires-cables/", products: [] },
      { name: "CONTROL CABLES", catalogue: "https://bahra-electric.com/products/control-cables/", products: [] }
    ],
    certifiedLogos: [
    ],
    aboutP1: "Bahra Cables Company, with headquarters located in the industrial city of Bahra, has become one of the leading companies operating in the Kingdom of Saudi Arabia, and has rapidly built a fine reputation for manufacturing its high quality wiring and cabling products. The company which started from humble beginnings since its inception in 2008 has grown to become one of the largest independent maker and distributors of industrial Wires and Power Cable products including Cable accessories. The quality products and services it offers have made the company known and recognized highly by all its customers for their exceptional quality assurance, outstanding products and excellence in customer service.",
    aboutP2: "The main markets serviced by Bahra Cables Company are Saudi Arabia and the countries belonging to the Gulf Cooperating Council (GCC). The company serves the needs of many industrial companies engaged in the field of real estate construction, electric utilities, transport, petro-chemical and marine industries, oil and gas, aero and shipbuilding industries, telecommunications, medical, automotive industries and supplies a wide selection from standard to Power Cables, Wire products and accessories. The Cables produced are compliant to American standards (UL, ANSI and ICEA) and European standards (IEC, BS, NF and VDE specifications).",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Power Grid Certified Cabling"
  },
  tekabcable: {
    name: "Tekab Cables",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Specialty & Control Cable Solutions",
    description: "Instrumentation, control, and specialty cables designed for optimal signal transmission and safety under heavy industrial conditions.",
    website: "https://tekab.com/",
    productRange: [],
    categoryStyle: "tabs",
    categories: [
      { name: "FLAME RETARDANT FIRE RESISTANT CABLE", catalogue: "https://tekab.com/products.php?id=674&prdtcat_id=9&subcat_id=78", products: [] },
      { name: "PVC INSULATED SCREENED/UNSCREENED CABLE", catalogue: "https://tekab.com/products.php?id=350&prdtcat_id=1&subcat_id=10", products: [] },
      { name: "MULTICORE CONTROL CABLE", catalogue: "https://tekab.com/products.php?id=474&prdtcat_id=4&subcat_id=34", products: [] }
    ],
    certifiedLogos: [
    ],
    aboutP1: "Tekab Cables is a premium manufacturer of specialty control cables, instrumentation cables, and custom fire-resistant wiring solutions.",
    aboutP2: "Our cables are engineered to provide maximum reliability in oil & gas, marine, and power generation facilities where continuous signal integrity is vital.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "High-Integrity Signal Cables"
  },
  neelkanthcables: {
    name: "Neelkanth Cables",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Industrial & Power Cabling",
    description: "High-performance low voltage cables, building wires, and specialty conductors designed for efficiency and safety.",
    website: "http://neelkanthcables.com/",
    productRange: [],
    categoryStyle: "tabs",
    categories: [
      { name: "LV POWER CABLE", catalogue: "https://neelkanthcables.com/products.html", products: [] },
      { name: "MV POWER CABLES", catalogue: "https://neelkanthcables.com/products.html", products: [] },
      { name: "NETWORKING CABLES", catalogue: "https://neelkanthcables.com/products.html", products: [] }
    ],
    certifiedLogos: [
    ],
    aboutP1: "Neelkanth Cables is a modern cable manufacturing company producing high-quality electrical conductors and wires for building construction and electrical grids.",
    aboutP2: "With state-of-the-art extrusion lines and stringent quality control, our cables deliver safety and longevity in electrical power distribution systems.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Quality Extruded Wires"
  },
  emi: {
    name: "EMI",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Electrical Metallic Tubing",
    description: "Durable EMT conduits, galvanized steel pipings, and robust structural fittings for unyielding cable protection.",
    website: "https://emiuae.ae/",
    productRange: [
      { image: "/Images/EMI/Cable-Ladder-Fittings.png", caption: "Cable Ladder Fittings" },
      { image: "/Images/EMI/Cable-Trunking-Fittings.png", caption: "Cable Trunking Fittings" },
      { image: "/Images/EMI/cable-trays-Fitting-.jpg", caption: "Cable Trays Fitting" }
    ],
    certifiedLogos: [
    ],
    aboutP1: "EMI (Emirates Metal Industries) is a premier manufacturer of low-voltage switchgear enclosures, cable trays, and precision fabricated sheet metal products.",
    aboutP2: "Engineered to withstand extreme environmental stress, our cabinets and containment systems protect sensitive electrical equipment in major infrastructure and industrial sites.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Precision Metal Enclosures"
  },
  cosmoplast: {
    name: "Cosmoplast",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Industrial Plastic & Conduit Solutions",
    description: "High-grade plastic uPVC and LSF conduits, trunking, and fittings designed to protect electrical cables in civil and industrial projects.",
    website: "https://shop.cosmoplast.com/",
    productRange: [
      {
        image: "/Images/Cosmoplast/Polyethlene pipeline.png",
        caption: "PE Polyethylene Pipes and Fittings for Water",
        download: "/Images/Cosmoplast/PE-Polyethylene-Pipes-and-Fittings-for-Water-Cosmoplast-2024-18-07-2024.pdf"
      },
      {
        image: "/Images/Cosmoplast/uPVC pipes .png",
        caption: "uPVC Pressure Pipes and Fittings",
        download: "/Images/Cosmoplast/UPVC-Pressure-Pipes-and-Fittings-Cosmoplast-18-07-2024.pdf"
      },
      {
        image: "/Images/Cosmoplast/uPVC WELL Casing.png",
        caption: "uPVC Well Casing",
        download: "/Images/Cosmoplast/Well_Casing2016-16-04-2016.pdf"
      }
    ],
    certifiedLogos: [
    ],
    aboutP1: "Cosmoplast is a leading plastics manufacturer that incorporates its values of service and reliability with quality products.",
    aboutP2: "",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Flame Retardant Conduits"
  },
  ccg: {
    name: "CCG",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Industrial Cable Glands & Accessories",
    description: "High-quality armoured and unarmoured cable glands designed for diverse and demanding global environments.",
    website: "https://www.ccgcablegland.co.za/",
    productRange: [
      { image: "/Images/ccg/industrial cable glands .png", caption: "industrial cable glands .png" },
      { image: "/Images/ccg/hazardous-area-cable-glands.jpg", caption: "hazardous-area-cable-glands.jpg" },
      { image: "/Images/ccg/industrial junction box.png", caption: "industrial junction box.png" },
      { image: "/Images/ccg/hazardous-areas-junction-boxes.jpg", caption: "hazardous-areas-junction-boxes.jpg" },
      { image: "/Images/ccg/cable-cleats.jpg", caption: "cable-cleats.jpg" },
      { image: "/Images/ccg/thread-converters-and-plugs.png", caption: "thread-converters-and-plugs.png" },
      { image: "/Images/ccg/north-american-nec-cec.jpg", caption: "north-american-nec-cec.jpg" },
      { image: "/Images/ccg/Accessories.png", caption: "Accessories.png" }
    ],
    certifiedLogos: [
    ],
    aboutP1: "The CCG industrial cable glands range is extensive and covers just about every size and type of armoured and unarmoured cables for every kind of cable gland installation.",
    aboutP2: "Our range of armoured and compression cable glands are designed for installation in diverse and demanding environments such as those found in the power generation, mining, industrial, construction, rail, defence and marine industries.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Armoured & Compression Glands"
  },
  nventcaddy: {
    name: "nVent CADDY",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Fixing, Fastening & Support Solutions",
    description: "Premium fixing, fastening and support products for electrical installation, seismic bracing, conduit and cable support, and beam clamps.",
    website: "https://www.nvent.com/en-us/caddy",
    productRange: [
      { image: "/Images/nventcaddy/Screenshot 2026-05-19 at 3.09.20 PM.png", caption: "Screenshot 2026-05-19 at 3.09.20 PM.png" },
      { image: "/Images/nventcaddy/Screenshot 2026-05-19 at 3.09.26 PM.png", caption: "Screenshot 2026-05-19 at 3.09.26 PM.png" },
      { image: "/Images/nventcaddy/Screenshot 2026-05-19 at 3.09.31 PM.png", caption: "Screenshot 2026-05-19 at 3.09.31 PM.png" },
      { image: "/Images/nventcaddy/Screenshot 2026-05-19 at 3.09.41 PM.png", caption: "Screenshot 2026-05-19 at 3.09.41 PM.png" },
      { image: "/Images/nventcaddy/Screenshot 2026-05-19 at 3.09.54 PM.png", caption: "Screenshot 2026-05-19 at 3.09.54 PM.png" },
      { image: "/Images/nventcaddy/Screenshot 2026-05-19 at 3.10.15 PM.png", caption: "Screenshot 2026-05-19 at 3.10.15 PM.png" },
      { image: "/Images/nventcaddy/Screenshot 2026-05-19 at 3.10.21 PM.png", caption: "Screenshot 2026-05-19 at 3.10.21 PM.png" },
      { image: "/Images/nventcaddy/Screenshot 2026-05-19 at 3.10.51 PM.png", caption: "Screenshot 2026-05-19 at 3.10.51 PM.png" },
      { image: "/Images/nventcaddy/Screenshot 2026-05-19 at 3.10.55 PM.png", caption: "Screenshot 2026-05-19 at 3.10.55 PM.png" },
      { image: "/Images/nventcaddy/Screenshot 2026-05-19 at 3.11.17 PM.png", caption: "Screenshot 2026-05-19 at 3.11.17 PM.png" },
      { image: "/Images/nventcaddy/Screenshot 2026-05-19 at 3.11.39 PM.png", caption: "Screenshot 2026-05-19 at 3.11.39 PM.png" }
    ],
    certifiedLogos: [
    ],
    aboutP1: "nVent CADDY brand offers premium fixing, fastening and support products for electrical installation, seismic bracing, conduit and cable support, beam clamps, and hangers.",
    aboutP2: "Designed to help contractors install systems faster and more efficiently, nVent CADDY products are trusted worldwide for commercial, industrial, and utility infrastructure applications.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Fast, Safe & Reliable Fastening"
  },
  nventerico: {
    name: "nVent ERICO",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Grounding & Lightning Protection Systems",
    description: "Premium electrical protection solutions, including grounding, bonding, and lightning protection systems for infrastructure.",
    website: "https://www.nvent.com/en-us/erico",
    productRange: [
      { image: "/Images/nventerico/nvent/nVent ERICO Cadweld Plus Welding Material, F20.webp", caption: "Cadweld Plus Welding Material, F20" },
      { image: "/Images/nventerico/nvent/nVent ERICO Cadweld Tool Kit.webp", caption: "Cadweld Tool Kit" },
      { image: "/Images/nventerico/nvent/nVent ERICO Cadweld Welding Material, F20.webp", caption: "Cadweld Welding Material, F20" },
      { image: "/Images/nventerico/nvent/GEM Ground Enhancement Material.png.webp", caption: "GEM Ground Enhancement Material" },
      { image: "/Images/nventerico/nvent/Grounding Busbar.png.webp", caption: "Grounding Busbar" },
      { image: "/Images/nventerico/nvent/High Amperage Plugs & Sockets Project.webp", caption: "High Amperage Plugs & Sockets Project" },
      { image: "/Images/nventerico/nvent/erico_system3000.png.webp", caption: "ERICO System 3000" },
      { image: "/Images/nventerico/nvent/nVent ERICO Cadweld Plus Impulse Exothermic Welding Control Unit.png.webp", caption: "Cadweld Exothermic Welding Unit" }
    ],
    certifiedLogos: [
    ],
    aboutP1: "nVent ERICO offers a comprehensive range of grounding, equipotential bonding, surge protection, and lightning protection solutions.",
    aboutP2: "Our products ensure personnel safety and equipment reliability, designed to meet or exceed international electrical safety standards across commercial and industrial infrastructure.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Advanced Electrical Protection"
  },
  rose: {
    name: "Rose",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Industrial Enclosures & Console Systems",
    description: "High-quality industrial enclosures made of aluminium, stainless steel, polyester, and plastics for demanding environmental conditions.",
    website: "https://www.rose-systemtechnik.com/en/",
    productRange: [
      { image: "/Images/Rose/ABS Enclosures.png", caption: "ABS Enclosures.png" },
      { image: "/Images/Rose/Aluminium Enclosures.png", caption: "Aluminium Enclosures.png" },
      { image: "/Images/Rose/Compact Enclosures ECO : PCI.png", caption: "Compact Enclosures ECO : PCI.png" },
      { image: "/Images/Rose/Polycarbonate Enclosures.png", caption: "Polycarbonate Enclosures.png" },
      { image: "/Images/Rose/Polyester Enclosures.png", caption: "Polyester Enclosures.png" },
      { image: "/Images/Rose/Stainless Steel Enclosures.png", caption: "Stainless Steel Enclosures.png" }
    ],
    certifiedLogos: [
    ],
    aboutP1: "Rose is a global leader in the development and manufacture of high-quality industrial enclosures and system solutions.",
    aboutP2: "Our enclosures are designed to protect sensitive components in automation, mechanical engineering, environmental technology, and hazardous explosive areas.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Robust Enclosure Technology"
  },
  avaids: {
    name: "Avaids",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Aviation Obstruction Lighting",
    description: "High-quality aviation obstruction lights and warning systems for tall structures and infrastructure.",
    website: "https://www.avaids.com/",
    productRange: [
      {
        image: "/Images/AVAIDS/TASS-MI-LED-DN-I_card.jpg",
        caption: "Aviation Warning Light",
        link: "https://www.avaids.com/aviation/li-obstruction-light.html"
      }
    ],
    certifiedLogos: [],
    aboutP1: "Avaids Technovators is a renowned manufacturer of professional aviation obstruction lights and warning systems, ensuring air traffic safety around high-rise buildings and towers.",
    aboutP2: "",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Aviation Safety Systems"
  },
  psi: {
    name: "PSI",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Cable Management Systems",
    description: "High-quality cable management solutions including cable trays, ladders, and trunking systems.",
    website: "https://www.powersolutionme.com/",
    productRange: [
      { image: "/Images/PSI/Cable-Tray-Sysyem.jpg", caption: "Cable Tray System" },
      { image: "/Images/PSI/Cable_Ladder_Systems_resizedFile.jpg", caption: "Cable Ladder Systems" },
      { image: "/Images/PSI/Cable_Trunking_Systems_resizedFile.jpg-copy.jpg", caption: "Cable Trunking Systems" },
      { image: "/Images/PSI/Floor Trunking Systems.jpg", caption: "Floor Trunking Systems" },
      { image: "/Images/PSI/GRP-Cable-Management-Systems.jpg", caption: "GRP Cable Management Systems" },
      { image: "/Images/PSI/Strut_Metal_Framing_Systems.jpg", caption: "Strut Metal Framing Systems" }
    ],
    certifiedLogos: [],
    aboutP1: "Power Solution Industries (PSI) is a renowned manufacturer of comprehensive cable management systems.",
    aboutP2: "We specialize in delivering robust metallic and non-metallic cable containment solutions for industrial and commercial projects.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Advanced Cable Containment"
  }
};

interface DynamicBrandPageProps {
  brandOverride?: string;
}

export default function DynamicBrandPage({ brandOverride }: DynamicBrandPageProps) {
  const params = useParams();

  // Resolve brand name from override parameter or dynamic slug
  const resolvedBrandSlug = brandOverride || (params?.brandName as string) || "";
  const brandKey = resolvedBrandSlug.toLowerCase();

  // Retrieve brand data, default to Kumwell as fallback
  const brandData = BRAND_DATABASE[brandKey] || BRAND_DATABASE.kumwell;

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const activeProducts = selectedCategory
    ? brandData.categories?.find(c => c.name === selectedCategory)?.products || []
    : (brandData.productRange || []);

  return (
    <>
      {brandKey === 'citel' || brandKey === 'obsta' || brandKey === 'kumwell' ? (
        <section className="brand-custom-hero-section">
          <img
            src={brandData.heroBg}
            alt={`${brandData.name} Hero`}
            className="brand-custom-hero-img"
          />
          <div className="brand-hero-buttons-wrapper">
            <div className="hero-buttons" style={{ pointerEvents: "auto", display: "flex", gap: "20px" }}>
              <a 
                href={`https://wa.me/971561122110?text=${encodeURIComponent(`Hi Gulf Radiant, I'm interested in the products under your brand: ${brandData.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ borderRadius: "15px" }}
              >
                Request a Quote
              </a>
              <a href={brandData.website} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderRadius: "15px" }}>
                Visit Website
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      ) : (
        <section className="hero kumwell-hero">
          <Image
            src={brandData.heroBg}
            alt={`${brandData.name} Hero`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">{brandData.name}</h1>
            <p className="hero-subtitle">{brandData.subtitle}</p>
            <p className="hero-description">{brandData.description}</p>
            <div className="hero-buttons">
              <a 
                href={`https://wa.me/971561122110?text=${encodeURIComponent(`Hi Gulf Radiant, I'm interested in the products under your brand: ${brandData.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ borderRadius: "15px" }}
              >
                Request a Quote
              </a>
              <a href={brandData.website} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderRadius: "15px" }}>
                Visit Website
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      )}

      {brandKey === 'obsta' && !selectedCategory && (
        <section style={{ maxWidth: "1690px", margin: "0 auto", padding: "60px 40px 20px 40px" }}>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "40px", fontSize: "48px", fontWeight: "600", fontFamily: "var(--font-degular), sans-serif", color: "#111111" }}>
            OBSTA
          </h2>
          <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.6", marginBottom: "20px", fontFamily: "var(--font-inter), sans-serif", maxWidth: "1330px", margin: "0 auto 20px auto", textAlign: "left" }}>
            OBSTA is part of an industrial group that develops and manufactures obstruction lights for transmission lines, broadcasting towers and all kind of obstacles to air navigation. Its products are in compliance with International Civil Aviation Organization ICAO Annex 14 Chapter 6 Federal Aviation Administration (FAA) and the Civil Aviation Authority of Malaysia recommendations.
          </p>
          <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.6", marginBottom: "40px", fontFamily: "var(--font-inter), sans-serif", maxWidth: "1330px", margin: "0 auto 40px auto", textAlign: "left" }}>
            OBSTA neon xenon and LED type lights have been developed to meet the highest standards, in respect of the customer demands and also in line with the latest ICAO and FAA international standards. Products include low intensity L-810, medium intensity L-865/L-864 and high intensity obstruction lights. The complete spectrum range makes OBSTA ideal for broadcasting towers, telecom mast, transmission lines, stacks and wind turbines.
          </p>

          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "40px", fontSize: "48px", fontWeight: "600", fontFamily: "var(--font-degular), sans-serif", color: "#111111" }}>
            Test Facilities
          </h2>
          <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.6", marginBottom: "20px", fontFamily: "var(--font-inter), sans-serif", maxWidth: "1330px", margin: "0 auto 20px auto", textAlign: "left" }}>
            In order to test its products internally for standards compliance and to evolve toward greater reliability OBSTA has several test sites (France, USA) equipped with :
          </p>
          <div style={{ maxWidth: "1330px", margin: "0 auto 40px auto" }}>
            <ul style={{ fontSize: "18px", color: "#333", lineHeight: "1.6", fontFamily: "var(--font-inter), sans-serif", paddingLeft: "20px", textAlign: "left", margin: 0 }}>
              <li style={{ marginBottom: "5px" }}>Photometric band with visible and infrared capability</li>
              <li style={{ marginBottom: "5px" }}>1.2/50-8/20µs hybrid wave generators up to 20 kV/10 kA</li>
              <li style={{ marginBottom: "5px" }}>HT digital Oscilloscope fast</li>
              <li style={{ marginBottom: "5px" }}>Material for test environment (damp heat, climate, shock)</li>
            </ul>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", margin: "0 auto 80px auto" }}>
            <button
              className="carousel-arrow"
              onClick={(e) => {
                const wrapper = e.currentTarget.parentElement?.querySelector('.test-facilities-wrapper');
                if (wrapper) wrapper.scrollBy({ left: -450, behavior: 'smooth' });
              }}
              style={{ flexShrink: 0, width: "56px", height: "56px", borderRadius: "50%", background: "#fff", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", marginRight: "20px", color: "#333", fontSize: "28px", fontWeight: "300", transition: "all 0.2s", zIndex: 2 }}
              aria-label="Scroll left"
              onMouseEnter={(e) => e.currentTarget.style.background = "#f9f9f9"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
            >
              &lt;
            </button>
            <div className="test-facilities-wrapper citel-carousel-wrapper" style={{ overflowX: "auto", display: "flex", gap: "20px", paddingBottom: "20px", minWidth: 0, maxWidth: "1330px" }}>
              {/* Displaying posters 1 to 10 from the test facilities folder */}
              {[...Array(10)].map((_, i) => (
                <div key={i} style={{ flex: "0 0 auto", width: "430px", height: "591px", position: "relative" }}>
                  <Image src={`/Images/Obsta/test facilities/${i + 1}.jpg`} alt={`Test Facility Poster ${i + 1}`} fill style={{ objectFit: "contain" }} />
                </div>
              ))}
            </div>
            <button
              className="carousel-arrow"
              onClick={(e) => {
                const wrapper = e.currentTarget.parentElement?.querySelector('.test-facilities-wrapper');
                if (wrapper) wrapper.scrollBy({ left: 450, behavior: 'smooth' });
              }}
              style={{ flexShrink: 0, width: "56px", height: "56px", borderRadius: "50%", background: "#fff", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", marginLeft: "20px", color: "#333", fontSize: "28px", fontWeight: "300", transition: "all 0.2s", zIndex: 2 }}
              aria-label="Scroll right"
              onMouseEnter={(e) => e.currentTarget.style.background = "#f9f9f9"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
            >
              &gt;
            </button>
          </div>

          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "60px", fontSize: "48px", fontWeight: "600", fontFamily: "var(--font-degular), sans-serif", color: "#111111" }}>
            OBSTA Videos
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px", marginBottom: "40px" }}>
            <div style={{ flex: "1 1 500px", minWidth: 0, maxWidth: "800px" }}>
              <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", background: "#000" }}>
                <iframe
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                  src="https://www.youtube.com/embed/UiEXrWBNoPo"
                  title="OBSTA Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 style={{ color: "#0066cc", fontSize: "22px", fontWeight: "bold", marginTop: "20px", fontFamily: "var(--font-inter), sans-serif", textAlign: "center" }}>
                OBSTA : Obstruction lighting
              </h3>
            </div>
          </div>
        </section>
      )}

      {brandKey === 'kumwell' && !selectedCategory && (
        <section style={{ maxWidth: "1690px", margin: "0 auto", padding: "60px 40px 20px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", margin: "0 auto 40px auto" }}>
            <button
              className="carousel-arrow"
              onClick={(e) => {
                const wrapper = e.currentTarget.parentElement?.querySelector('.kumwell-posters-wrapper');
                if (wrapper) wrapper.scrollBy({ left: -wrapper.clientWidth, behavior: 'smooth' });
              }}
              style={{ flexShrink: 0, width: "56px", height: "56px", borderRadius: "50%", background: "#fff", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", marginRight: "20px", color: "#333", fontSize: "28px", fontWeight: "300", transition: "all 0.2s", zIndex: 2 }}
              aria-label="Scroll left"
              onMouseEnter={(e) => e.currentTarget.style.background = "#f9f9f9"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
            >
              &lt;
            </button>
            <div className="kumwell-posters-wrapper citel-carousel-wrapper" style={{ overflowX: "auto", display: "flex", gap: "20px", paddingBottom: "20px", width: "100%", scrollSnapType: "x mandatory" }}>
              {[
                { img: "1.Kumwell Exothermic Welding.png", doc: "1.Kumwell Exothermic Welding TEXT.docx", title: "Kumwell Exothermic Welding" },
                { img: "2.Kumwell Grounding Components.png", doc: "2.Kumwell Grounding Components TEXT.docx", title: "Kumwell Grounding Components" },
                { img: "3.Kumwell Isolating Spark Gap.png", doc: "3.Kumwell Isolating Spark Gap TEXT.docx", title: "Kumwell Isolating Spark Gap" },
                { img: "4.Kumwell Static Earth Reels Monitor and Remote Interlock Controlled.png", doc: "4.Kumwell Static Earth Reels  and Remote Interlock Controlled TEXT.docx", title: "Kumwell Static Earth Reels" },
                { img: "5.Smart Lightning Management System (SLMS).png", doc: "5.Kumwell Smart Lightning Management System TEXT.docx", title: "Smart Lightning Management System" },
                { img: "6.Smart Lightning Warning System (SLWS).png", doc: "6.Kumwell Smart Lightning Warning System TEXT.docx", title: "Smart Lightning Warning System" },
                { img: "7.Lightning Protection Components.png", doc: "7.Kumwell Lighnting Protection System Components (TEXT).docx", title: "Lightning Protection Components" },
                { img: "AI_Poster_Air_Termination_System.png", doc: "Kumwell Air Termination System TEXT.docx", title: "Kumwell Air Termination System" },
                { img: "AI_Poster_Ground_Rod.png", doc: "Kumwell Ground Rod & Accessories TEXT.docx", title: "Kumwell Ground Rod & Accessories" },
                { img: "AI_Poster_MEG.png", doc: "Kumwell More Effective Grounding (MEG) TEXT.docx", title: "Kumwell More Effective Grounding" }
              ].map((poster, i) => (
                <a key={i} href={`/Images/kumwell/Posters/${poster.doc}`} download className="kumwell-poster-item" style={{ display: "block", aspectRatio: "430/591", position: "relative", overflow: "hidden", borderRadius: "12px", border: "1px solid #333", background: "#111" }}>
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                    padding: "18px 20px 36px 20px",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "var(--font-inter), sans-serif",
                    zIndex: 2,
                    textAlign: "center",
                    lineHeight: "1.3"
                  }}>
                    {poster.title}
                  </div>
                  <Image src={`/Images/kumwell/Posters/${poster.img}`} alt={poster.title} fill style={{ objectFit: "contain" }} />
                  <div style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    background: "#ff5b05",
                    color: "#fff",
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    transition: "transform 0.2s",
                    zIndex: 2
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
            <button
              className="carousel-arrow"
              onClick={(e) => {
                const wrapper = e.currentTarget.parentElement?.querySelector('.kumwell-posters-wrapper');
                if (wrapper) wrapper.scrollBy({ left: 450, behavior: 'smooth' });
              }}
              style={{ flexShrink: 0, width: "56px", height: "56px", borderRadius: "50%", background: "#fff", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", marginLeft: "20px", color: "#333", fontSize: "28px", fontWeight: "300", transition: "all 0.2s", zIndex: 2 }}
              aria-label="Scroll right"
              onMouseEnter={(e) => e.currentTarget.style.background = "#f9f9f9"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
            >
              &gt;
            </button>
          </div>
        </section>
      )}

      <section className="product-range" style={{ padding: "60px 0", background: "#ffffff", overflow: "hidden" }}>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "80px", fontSize: "48px", fontWeight: "600", fontFamily: "var(--font-degular), sans-serif" }}>
          {brandData.categories && !selectedCategory && brandKey !== 'citel' ? "Product Categories" : "Product Range"}
        </h2>
        <style dangerouslySetInnerHTML={{
          __html: `
          .citel-tabs-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
            padding: 0 40px;
          }
          .citel-tab-item {
            flex: 0 1 280px;
            width: 100%;
            display: flex;
          }
          .kumwell-poster-item {
            flex: 0 0 calc((100% - 60px) / 4);
            scroll-snap-align: start;
          }
          .citel-carousel-wrapper::-webkit-scrollbar {
            display: none;
          }
          .citel-carousel-wrapper {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          @media (max-width: 1024px) {
            .carousel-arrow {
              display: none !important;
            }
            .kumwell-poster-item {
              flex: 0 0 calc((100% - 40px) / 3) !important;
            }
            .citel-carousel-wrapper {
              justify-content: flex-start !important;
              padding-left: 20px !important;
              padding-right: 20px !important;
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
            }
            .citel-carousel-wrapper > div, .citel-carousel-wrapper > a {
              scroll-snap-align: center;
            }
            .categories-grid[style] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 20px !important;
              padding: 0 40px !important;
            }
            .categories-grid .obsta-category-card {
              height: 350px !important;
            }
            .citel-tabs-grid {
              padding: 0 40px !important;
            }
            .citel-tab-item {
              flex: 1 1 calc(50% - 16px);
              min-width: 200px;
            }
          }
          @media (max-width: 640px) {
            .kumwell-poster-item {
              flex: 0 0 100% !important;
            }
            .categories-grid[style] {
              grid-template-columns: repeat(1, 1fr) !important;
              gap: 20px !important;
              padding: 0 20px !important;
            }
            .categories-grid .obsta-category-card {
              height: 300px !important;
            }
            .categories-grid .obsta-category-card > div:first-child {
              font-size: 16px !important;
              padding: 12px 10px !important;
            }
            .citel-tabs-grid {
              padding: 0 20px !important;
              gap: 12px;
            }
            .citel-tab-item {
              flex: 1 1 100%;
            }
            .citel-tabs-grid button {
              padding: 12px 8px !important;
              font-size: 14px !important;
            }
          }
        `}} />
        {brandData.categories && selectedCategory && (
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <button
              onClick={() => setSelectedCategory(null)}
              style={{
                background: "transparent",
                border: "1px solid #111",
                padding: "10px 20px",
                borderRadius: "30px",
                cursor: "pointer",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5"></path>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Categories
            </button>
          </div>
        )}

        <div
          className={(brandData.categoryStyle === "tabs" || brandData.categoryStyle === "carousel-list") && !selectedCategory ? "" : `kumwell-product-grid ${!selectedCategory && brandData.categories ? "categories-grid" : ""}`}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
            maxWidth: "1690px",
            margin: "0 auto",
            padding: "0 20px",
            width: "100%"
          }}
        >
          {brandData.categoryStyle === "carousel-list" && !selectedCategory ? (
            <div className="citel-custom-layout" style={{ width: "100%" }}>
              {/* Categories with Carousels */
                (() => {
                  const groups = brandData.name.toLowerCase() === "citel" && brandData.categories
                    ? [
                      [brandData.categories[0]], // AC Power
                      [brandData.categories[1]], // PV
                      [brandData.categories[4]], // Dataline
                      [brandData.categories[2], brandData.categories[3]], // LED, Telecom
                      [brandData.categories[5], brandData.categories[6], brandData.categories[7]] // Radiocom, Wind Turbine, Accessories
                    ]
                    : brandData.name.toLowerCase() === "obsta" && brandData.categories
                      ? [
                        [brandData.categories[0]], // Accessories
                        [brandData.categories[1], brandData.categories[3]], // Conductor Warning Light, High Voltage Day Markers
                        [brandData.categories[2]], // High Intensity
                        [brandData.categories[4]], // Low Intensity
                        [brandData.categories[5]]  // Medium Intensity
                      ]
                      : brandData.name.toLowerCase() === "kumwell" && brandData.categories
                        ? [
                          [brandData.categories[0]], // Earthing Protection System
                          [brandData.categories[1]], // Lightning Protection System
                          [brandData.categories[2]], // Exothermic Welding Systems
                          [brandData.categories[3], brandData.categories[4]] // Oil & Gas Products + Smart Lightning
                        ]
                        : brandData.categories?.map(c => [c]) || [];

                  return groups.map((group, gIdx) => (
                    <div key={gIdx} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "80px", width: "100%", margin: "0 auto 60px auto" }}>
                      {group.filter(Boolean).map((cat, cIdx) => (
                        <div key={cIdx} style={{ flex: "0 1 auto", minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <h3 style={{ color: "#0066cc", fontSize: "22px", fontWeight: "500", marginBottom: "30px", fontFamily: "var(--font-inter), sans-serif", textAlign: "center" }}>
                            {cat.name}
                            {cat.catalogue && (
                              <a href={cat.catalogue} target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "14px", marginTop: "8px", color: "#E04F35", textDecoration: "underline", fontWeight: "normal" }}>
                                View Catalogue
                              </a>
                            )}
                          </h3>
                          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", width: "100%" }}>
                            {cat.name === "TS4 Flex MLPE" ? (
                              <div style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "20px",
                                justifyContent: "center",
                                width: "100%",
                                maxWidth: "1330px"
                              }}>
                                {cat.products.map((prod, pIdx) => (
                                  <div key={pIdx} style={{ flex: "0 0 250px", display: "flex", flexDirection: "column", alignItems: "center", cursor: prod.link ? "pointer" : "default" }} onClick={() => prod.link && window.open(prod.link, "_blank")}>
                                    <div style={{ width: "250px", height: "250px", position: "relative", marginBottom: "20px", background: "#fff", borderRadius: "8px", border: "1px solid #e0e0e0", padding: "10px" }}>
                                      <Image src={prod.image} alt={prod.caption} fill style={{ objectFit: "contain", padding: "20px" }} />
                                    </div>
                                    <p style={{ fontSize: "15px", color: "#111111", fontWeight: "500", textAlign: "center", fontFamily: "var(--font-inter), sans-serif", lineHeight: "1.4", textTransform: "uppercase" }}>
                                      {prod.caption}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <>
                                {cat.products.length > 5 && (
                                  <button
                                    className="carousel-arrow"
                                    onClick={(e) => {
                                      const wrapper = e.currentTarget.parentElement?.querySelector('.citel-carousel-wrapper');
                                      if (wrapper) wrapper.scrollBy({ left: -270, behavior: 'smooth' });
                                    }}
                                    style={{ flexShrink: 0, width: "56px", height: "56px", borderRadius: "50%", background: "#fff", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", marginRight: "20px", color: "#333", fontSize: "28px", fontWeight: "300", marginTop: "125px", transform: "translateY(-50%)", transition: "all 0.2s" }}
                                    aria-label="Scroll left"
                                    onMouseEnter={(e) => e.currentTarget.style.background = "#f9f9f9"}
                                    onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
                                  >
                                    &lt;
                                  </button>
                                )}
                                <div className="citel-carousel-wrapper" style={{ overflowX: "auto", display: "flex", gap: "20px", paddingBottom: "20px", minWidth: 0, maxWidth: "1330px" }}>
                                  {cat.products.map((prod, pIdx) => (
                                    <div key={pIdx} style={{ flex: "0 0 250px", display: "flex", flexDirection: "column", alignItems: "center", cursor: prod.link ? "pointer" : "default" }} onClick={() => prod.link && window.open(prod.link, "_blank")}>
                                      <div style={{ width: "250px", height: "250px", position: "relative", marginBottom: "20px", background: "#fff", borderRadius: "8px", border: "1px solid #e0e0e0", padding: "10px" }}>
                                        <Image src={prod.image} alt={prod.caption} fill style={{ objectFit: "contain", padding: prod.caption === "ISOLATING SPARK GAP" ? "5px" : "20px" }} />
                                      </div>
                                      <p style={{ fontSize: "15px", color: "#111111", fontWeight: "500", textAlign: "center", fontFamily: "var(--font-inter), sans-serif", lineHeight: "1.4", textTransform: "uppercase" }}>
                                        {prod.caption}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                                {cat.products.length > 5 && (
                                  <button
                                    className="carousel-arrow"
                                    onClick={(e) => {
                                      const wrapper = e.currentTarget.parentElement?.querySelector('.citel-carousel-wrapper');
                                      if (wrapper) wrapper.scrollBy({ left: 270, behavior: 'smooth' });
                                    }}
                                    style={{ flexShrink: 0, width: "56px", height: "56px", borderRadius: "50%", background: "#fff", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", marginLeft: "20px", color: "#333", fontSize: "28px", fontWeight: "300", marginTop: "125px", transform: "translateY(-50%)", transition: "all 0.2s" }}
                                    aria-label="Scroll right"
                                    onMouseEnter={(e) => e.currentTarget.style.background = "#f9f9f9"}
                                    onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
                                  >
                                    &gt;
                                  </button>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ));
                })()}
            </div>
          ) : brandData.categoryStyle === "tabs" && !selectedCategory ? (
            <div className="citel-tabs-grid">
              {brandData.categories?.map((category, index) => (
                <div key={index} className="citel-tab-item">
                  <button
                    onClick={() => {
                      if (category.catalogue && (!category.products || category.products.length === 0)) {
                        window.open(category.catalogue, "_blank");
                      } else {
                        setSelectedCategory(category.name);
                      }
                    }}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                      padding: "14px 20px", background: "#fff",
                      border: "1px solid #d1d5db", borderRadius: "12px",
                      fontSize: "16px", fontWeight: "600", cursor: "pointer",
                      color: "#1f2937", transition: "all 0.3s",
                      fontFamily: "var(--font-inter), sans-serif",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      width: "100%"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#111";
                      e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#d1d5db";
                      e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <span style={{ color: "#4b5563", display: "flex", alignItems: "center" }}>
                      {category.icon}
                    </span>
                    {category.name}
                  </button>
                </div>
              ))}
            </div>
          ) : brandData.categoryStyle !== "tabs" && brandData.categories && !selectedCategory ? (
            brandData.categories.map((category, index) => (
              <div
                key={index}
                className="kumwell-product-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "100%"
                }}
                onClick={() => {
                  if (category.catalogue && (!category.products || category.products.length === 0)) {
                    window.open(category.catalogue, "_blank");
                  } else {
                    setSelectedCategory(category.name);
                  }
                }}
              >
                <div className="obsta-category-card" style={{
                  width: "100%",
                  maxWidth: "480px",
                  height: "400px",
                  borderRadius: "16px",
                  border: "1px solid #e0e0e0",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  background: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  margin: "0 auto"
                }}>
                  <div style={{
                    padding: "20px 10px",
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#333",
                    background: "#fff",
                    fontFamily: "var(--font-neutiva), sans-serif",
                    borderBottom: "1px solid #f0f0f0",
                    position: "relative",
                    zIndex: 2
                  }}>
                    {category.name}
                  </div>
                  <div style={{
                    flex: 1,
                    position: "relative",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <Image src={category.thumbnail || ""} alt={category.name} fill style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            activeProducts.map((product, index) => {
              const CardContent = (
                <>
                  <div className="kumwell-product-card" style={{ width: "280px", height: "285px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: "20px", border: "1px solid #e0e0e0" }}>
                    <div className="kumwell-product-card-image" style={{ position: "relative", width: "100%", height: "100%" }}>
                      <Image src={product.image} alt={product.caption || `${brandData.name} Product`} fill style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                  {product.caption && (
                    <p className="kumwell-product-caption" style={{ marginTop: "24px", fontSize: "15px", fontWeight: "500", color: "#111111", textAlign: "center", fontFamily: "var(--font-inter), sans-serif", maxWidth: "260px", lineHeight: "1.4", textTransform: "uppercase" }}>
                      {product.caption}
                    </p>
                  )}
                </>
              );

              return product.download ? (
                <a
                  key={index}
                  href={product.download}
                  download
                  className="kumwell-product-item"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}
                >
                  {CardContent}
                </a>
              ) : product.link ? (
                <a
                  key={index}
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kumwell-product-item"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}
                >
                  {CardContent}
                </a>
              ) : (
                <div
                  key={index}
                  className="kumwell-product-item"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  {CardContent}
                </div>
              );
            })
          )}
        </div>
      </section>

      {brandData.certifiedLogos.length > 0 && (
        <section className="certified-section" style={{ padding: "80px 0", background: "#ffffff" }}>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "60px", fontSize: "48px", fontWeight: "600", fontFamily: "var(--font-degular), sans-serif" }}>Certified & Approved</h2>
          <div className="certified-logos">
            {brandData.certifiedLogos.map((logo, index) => (
              <Image key={index} className="certified-logo" src={logo} alt="Approved Partner Logo" width={280} height={90} style={{ objectFit: "contain" }} />
            ))}
          </div>
        </section>
      )}

      <section className="about-section" style={{ position: "relative", minHeight: "500px", display: "flex", alignItems: "center", justifyContent: "center", margin: "60px 0 0 0", padding: "80px 20px" }}>
        <Image src={brandData.aboutBg} alt={`${brandData.name} About Backdrop`} fill style={{ objectFit: "cover" }} />
        <div className="about-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)" }}></div>
        <div className="about-content-card" style={{ position: "relative", zIndex: 1, background: "rgba(31, 31, 31, 0.1)", backdropFilter: "blur(10px)", padding: "40px 30px", borderRadius: "16px", width: "100%", maxWidth: "1184px", minHeight: "441px", height: "auto", color: "#ffffff", textAlign: "center", border: "1px solid rgba(255,255,255,0.2)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <h2 style={{ fontSize: "48px", marginBottom: "20px", fontWeight: "700" }}>About <span style={{ color: "#E04F35" }}>{brandData.name}</span></h2>
          {brandData.aboutP1 && <p style={{ marginBottom: "15px", fontSize: "18px", lineHeight: "1.6", maxWidth: "1000px" }}>{brandData.aboutP1}</p>}
          {brandData.aboutP2 && <p style={{ marginBottom: "25px", fontSize: "18px", lineHeight: "1.6", maxWidth: "1000px" }}>{brandData.aboutP2}</p>}
          {brandData.aboutHighlight && (
            <div className="about-highlight" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(0, 0, 0, 0.2)", padding: "10px 25px", borderRadius: "30px", fontWeight: "600" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#E04F35" }}>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>{brandData.aboutHighlight}</span>
            </div>
          )}
        </div>
      </section>

      <style jsx global>{`
        @media (min-width: 1025px) {
          .categories-grid {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 24px !important;
            width: 100% !important;
          }
          .categories-grid .kumwell-product-item {
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
}
