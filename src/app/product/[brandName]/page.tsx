"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// Brand Database Interface
interface ProductItem {
  image: string;
  caption: string;
}

interface BrandData {
  name: string;
  heroBg: string;
  subtitle: string;
  description: string;
  website: string;
  productRange: ProductItem[];
  certifiedLogos: string[];
  aboutP1: string;
  aboutP2: string;
  aboutBg: string;
  aboutHighlight: string;
}

const BRAND_DATABASE: Record<string, BrandData> = {
  kumwell: {
    name: "Kumwell",
    heroBg: "/Images/kumwell/H1.png",
    subtitle: "Earthing & Lightning Protection Systems",
    description: "Advanced grounding and lightning protection solutions for industrial safety and infrastructure.",
    website: "https://www.kumwell.com/en/about-us",
    productRange: [
      { image: "/Images/kumwell/LSQS.png", caption: "LSQS" },
      { image: "/Images/kumwell/KTH.png", caption: "KTH" },
      { image: "/Images/kumwell/GYATB.png", caption: "GYATB" },
      { image: "/Images/kumwell/LCATT.png", caption: "LCATT" },
      { image: "/Images/kumwell/LCRT.png", caption: "LCRT" },
      { image: "/Images/kumwell/MEG.png", caption: "MEG" },
      { image: "/Images/kumwell/KOL.png", caption: "KOL" },
      { image: "/Images/kumwell/GXEP4.png", caption: "GXEP4" },
      { image: "/Images/kumwell/GRTTR.png", caption: "GRTTR" },
      { image: "/Images/kumwell/GRSC (2).png", caption: "GRSC" },
      { image: "/Images/kumwell/GRSSCO.png", caption: "GRSSCO" },
      { image: "/Images/kumwell/LROS.png", caption: "LROS" },
      { image: "/Images/kumwell/GBDL.png", caption: "GBDL" },
      { image: "/Images/kumwell/GERA 15ME.png", caption: "GERA 15ME" },
      { image: "/Images/kumwell/LCTT.png", caption: "LCTT" },
      { image: "/Images/kumwell/GXCT.png", caption: "GXCT" },
      { image: "/Images/kumwell/GXC.png", caption: "GXC" },
      { image: "/Images/kumwell/LCAS.png", caption: "LCAS" },
      { image: "/Images/kumwell/GRDSR.png", caption: "GRDSR" },
      { image: "/Images/kumwell/LTAS.png", caption: "LTAS" },
      { image: "/Images/kumwell/GRBDH.png", caption: "GRBDH" },
      { image: "/Images/kumwell/CCC(1).png", caption: "CCC(1)" },
      { image: "/Images/kumwell/GXFIP.png", caption: "GXFIP" },
      { image: "/Images/kumwell/GRBCO.png", caption: "GRBCO" },
      { image: "/Images/kumwell/LTAT.png", caption: "LTAT" },
      { image: "/Images/kumwell/GBPGSS (2).png", caption: "GBPGSS (2)" },
      { image: "/Images/kumwell/COBCT.png", caption: "COBCT" },
      { image: "/Images/kumwell/GXEP1.png", caption: "GXEP1" },
      { image: "/Images/kumwell/GRSC.png", caption: "GRSC" },
      { image: "/Images/kumwell/GBPGSS.png", caption: "GBPGSS" },
      { image: "/Images/kumwell/GRCBUT.png", caption: "GRCBUT" },
      { image: "/Images/kumwell/GRSDH.png", caption: "GRSDH" },
      { image: "/Images/kumwell/GYPTB.png", caption: "GYPTB" },
      { image: "/Images/kumwell/GRBCO (2).png", caption: "GRBCO (2)" },
      { image: "/Images/kumwell/GXEP2.png", caption: "GXEP2" },
      { image: "/Images/kumwell/GRSS.png", caption: "GRSS" },
      { image: "/Images/kumwell/LTAS (2).png", caption: "LTAS (2)" },
      { image: "/Images/kumwell/GYATB_Cover.png", caption: "GYATB Cover" },
      { image: "/Images/kumwell/GXCIP.png", caption: "GXCIP" },
      { image: "/Images/kumwell/KOH.png", caption: "KOH" }
    ],
    certifiedLogos: [
      "/Images/Certificates/adnoc logo.svg",
      "/Images/Certificates/dewa.jpg",
      "/Images/Certificates/etihad we.png",
      "/Images/Certificates/taqa group.png"
    ],
    aboutP1: "Kumwell Corporation public company Limited is a manufacturer and distributor of products in grounding systems such as grounding rods, grounding conductors, exothermic welding equipment, ground enhancement materials, inspection pits and etc. Lightning protection system compose of air terminals, lightning conductors, connectors & fasteners and etc. Surge protection system, lightning detection and warning system are compiled for international standards under Kumwell brand.",
    aboutP2: "Kumwell products export to over 40 countries around the world through our distributors. Our vision is a leader with total solution in lightning protection system and safety innovation with the strongest brand and sustainable growth.",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "Exporting to 40+ Countries"
  },
  citel: {
    name: "Citel",
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Surge Protection Solutions",
    description: "Professional surge protection devices safeguarding high-voltage power networks, solar PV installations, telecom lines, and LED lighting systems.",
    website: "https://citel.fr/en",
    productRange: [
      { image: "/Images/Citel/2756_DS254VG-300-G_pic.png", caption: "DS254VG-300-G" },
      { image: "/Images/Citel/60014_P8AX25-N-FF_pic.png", caption: "P8AX25-N-FF" },
      { image: "/Images/Citel/640211_DLA2-12D3_pic.png", caption: "DLA2-12D3" },
      { image: "/Images/Citel/790121_LSC_A.png", caption: "LSC A" },
      { image: "/Images/Citel/821310242_DACF15S-11-275__pic.png", caption: "DACF15S-11-275" },
      { image: "/Images/Citel/821310244_DACF15S-31-275_pic.png", caption: "DACF15S-31-275" },
      { image: "/Images/Citel/CXC06_pic.png", caption: "CXC06" },
      { image: "/Images/Citel/DLA-24D3_pic.png", caption: "DLA-24D3" },
      { image: "/Images/Citel/DPVN1-6CVGS-21Y-1200-Kamera+Kopie.png", caption: "DPVN1-6CVGS-21Y-1200" },
      { image: "/Images/Citel/DS44S-280-G_pic.png", caption: "DS44S-280-G" },
      { image: "/Images/Citel/DS50PVS-1000.png", caption: "DS50PVS-1000" },
      { image: "/Images/Citel/Gamme_MJ8-POE.png-d9a204e31-shaved.png", caption: "MJ8-POE" },
      { image: "/Images/Citel/_CWMJ8-POE-C6A_pic.png", caption: "CWMJ8-POE-C6A" },
      { image: "/Images/Citel/_DAC1-13S-40-440_pic.png", caption: "DAC1-13S-40-440" },
      { image: "/Images/Citel/_DAC1-13VGS-31-275_pic.png", caption: "DAC1-13VGS-31-275" },
      { image: "/Images/Citel/_DAC50S-10-320_pic.png", caption: "DAC50S-10-320" },
      { image: "/Images/Citel/_DAC50S-11-275_pic.png", caption: "DAC50S-11-275" },
      { image: "/Images/Citel/_DACF15S-10_275_pic.png", caption: "DACF15S-10-275" },
      { image: "/Images/Citel/_DACN1-25CVGS-31-320-SC_pic.png", caption: "DACN1-25CVGS-31-320-SC" },
      { image: "/Images/Citel/_DPVN40CVGS-21Y-1200_pic.png", caption: "DPVN40CVGS-21Y-1200" },
      { image: "/Images/Citel/_DS60VGPV-1000-G-51-pic.png", caption: "DS60VGPV-1000-G" },
      { image: "/Images/Citel/_MLPC1-230L-R_pic.png", caption: "MLPC1-230L-R" },
      { image: "/Images/Citel/_MLPM1-230L-R_pic.png", caption: "MLPM1-230L-R" },
      { image: "/Images/Citel/_MLPX1-230L-W_pic.png", caption: "MLPX1-230L-W" },
      { image: "/Images/Citel/unnamed.png", caption: "Surge Protector" }
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
    website: "https://www.pittas.com/",
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
      { image: "/Images/product/Rectangle 39.png", caption: "ATEX Explosion Proof Plugs & Sockets" },
      { image: "/Images/product/Rectangle 39.png", caption: "Heavy Duty Industrial Switch disconnectors" },
      { image: "/Images/product/Rectangle 39.png", caption: "IEC 309 Watertight Connector Assemblies" }
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
    productRange: [
      { image: "/Images/Siechem/cable1.webp", caption: "cable1" },
      { image: "/Images/Siechem/cables2.webp", caption: "cables2" },
      { image: "/Images/Siechem/cables3.webp", caption: "cables3" },
      { image: "/Images/Siechem/cables4.webp", caption: "cables4" }
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
    productRange: [
      { image: "/Images/Siechem/cable1.webp", caption: "cable1" },
      { image: "/Images/Siechem/cables2.webp", caption: "cables2" },
      { image: "/Images/Siechem/cables3.webp", caption: "cables3" },
      { image: "/Images/Siechem/cables4.webp", caption: "cables4" }
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
    productRange: [
      { image: "/Images/OBO/I support.jpg", caption: "I support" },
      { image: "/Images/OBO/Junction box A8.jpg", caption: "Junction box A8" },
      { image: "/Images/OBO/OBO anchor.jpg", caption: "OBO anchor" },
      { image: "/Images/OBO/UP flush mounted electronic box.jpg", caption: "UP flush mounted electronic box" },
      { image: "/Images/OBO/cap nut cable gland.jpg", caption: "cap nut cable gland" },
      { image: "/Images/OBO/cavity wall device connection box.jpg", caption: "cavity wall device connection box" },
      { image: "/Images/OBO/clamp clip.jpg", caption: "clamp clip" },
      { image: "/Images/OBO/clamping lug.jpg", caption: "clamping lug" },
      { image: "/Images/OBO/connector I support.jpg", caption: "connector I support" },
      { image: "/Images/OBO/distribution box.jpg", caption: "distribution box" },
      { image: "/Images/OBO/double trough.jpg", caption: "double trough" },
      { image: "/Images/OBO/end cap.jpg", caption: "end cap" },
      { image: "/Images/OBO/fastening clip.jpg", caption: "fastening clip" },
      { image: "/Images/OBO/grip collection clamp.jpg", caption: "grip collection clamp" },
      { image: "/Images/OBO/hovercube.jpg", caption: "hovercube" },
      { image: "/Images/OBO/hovercubes.png", caption: "hovercubes" },
      { image: "/Images/OBO/industrial pole.jpg", caption: "industrial pole" },
      { image: "/Images/OBO/injection anchor.jpg", caption: "injection anchor" },
      { image: "/Images/OBO/junction_boxes.png", caption: "junction boxes" },
      { image: "/Images/OBO/knock in anchor.jpg", caption: "knock in anchor" },
      { image: "/Images/OBO/monitor connection column.jpg", caption: "monitor connection column" },
      { image: "/Images/OBO/mounting set.jpg", caption: "mounting set" },
      { image: "/Images/OBO/nail finishing.jpg", caption: "nail finishing" },
      { image: "/Images/OBO/pressing gun.jpg", caption: "pressing gun" },
      { image: "/Images/OBO/pressure clip.jpg", caption: "pressure clip" },
      { image: "/Images/OBO/quick clip.jpg", caption: "quick clip" },
      { image: "/Images/OBO/screwless terminal .jpg", caption: "screwless terminal" },
      { image: "/Images/OBO/single push fit.jpg", caption: "single push fit" },
      { image: "/Images/OBO/slot nut.jpg", caption: "slot nut" },
      { image: "/Images/OBO/spacer.jpg", caption: "spacer" },
      { image: "/Images/OBO/support bracket.jpg", caption: "support bracket" },
      { image: "/Images/OBO/surface mounted housing.jpg", caption: "surface mounted housing" },
      { image: "/Images/OBO/tension spring.jpg", caption: "tension spring" },
      { image: "/Images/OBO/u_clamps.png", caption: "u clamps" },
      { image: "/Images/OBO/wall_brackets.png", caption: "wall brackets" }
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
    heroBg: "/Images/Home/Rectangle 23 (1).png",
    subtitle: "Obstruction Lighting & Aircraft Warning Systems",
    description: "Professional aircraft warning lights, medium and high-intensity neon and LED obstruction beacons certified to ICAO and FAA standards.",
    website: "https://www.obsta.com/en/",
    productRange: [
      { image: "/Images/Obsta/113625LA (1).png", caption: "113625LA (1)" },
      { image: "/Images/Obsta/113625LA.png", caption: "113625LA" },
      { image: "/Images/Obsta/113905_cable.png", caption: "113905 cable" },
      { image: "/Images/Obsta/113908-KIT.png", caption: "113908-KIT" },
      { image: "/Images/Obsta/113912.png", caption: "113912" },
      { image: "/Images/Obsta/113969 (1).png", caption: "113969 (1)" },
      { image: "/Images/Obsta/114100.png", caption: "114100" },
      { image: "/Images/Obsta/114601.png", caption: "114601" },
      { image: "/Images/Obsta/120_integrated_cable_nu2.png", caption: "120 integrated cable nu2" },
      { image: "/Images/Obsta/NAVILITE-IR-FAA-KIT.png", caption: "NAVILITE-IR-FAA-KIT" },
      { image: "/Images/Obsta/Navilite_double_grande_(1).png", caption: "Navilite double grande (1)" },
      { image: "/Images/Obsta/Navilite_double_petite.png", caption: "Navilite double petite" },
      { image: "/Images/Obsta/OFC+rouge_redlight.png", caption: "OFC rouge redlight" },
      { image: "/Images/Obsta/OFD.png", caption: "OFD" },
      { image: "/Images/Obsta/balise_180°_1_etage_002b.png", caption: "balise 180° 1 etage 002b" },
      { image: "/Images/Obsta/balise_integrée.png", caption: "balise integrée" },
      { image: "/Images/Obsta/cellule_photoéléctrique_B.png", caption: "cellule photoéléctrique B" },
      { image: "/Images/Obsta/coffret113176.png", caption: "coffret113176" }
    ],
    certifiedLogos: [
      "/Images/Certificates/civil aviation.jpg"
    ],
    aboutP1: "OBSTA, a subsidiary of CITEL groupis part of an industrial group that engineers, manufactures and sells obstruction lights for transmission lines, telecom and broadcast towers and all kind of obstacle to air navigation.",
    aboutP2: "Our obstruction lights are manufactured by us based on ICAO annex 14 chapter 6 (In",
    aboutBg: "/Images/kumwell/bg7.svg",
    aboutHighlight: "ICAO & FAA Certified Solutions"
  },
  dietzelunivolt: {
    name: "Dietzel Univolt",
    heroBg: "/Images/Home/Rectangle 24.png",
    subtitle: "Cable Protection & Conduit Systems",
    description: "Premium Austrian-engineered PVC and halogen-free plastic conduits, fittings, and cable management enclosures built for heavy-duty industrial installations.",
    website: "https://www.univolt.com/",
    productRange: [
      { image: "/Images/Dietzel/107257_J100BF AP-ABZWEIGDOSE_MD01.jpg", caption: "107257 J100BF AP-ABZWEIGDOSE MD01" },
      { image: "/Images/Dietzel/CB1_sw_XL_MD02.jpg", caption: "CB1 sw XL MD02" },
      { image: "/Images/Dietzel/CB2-U_sw_XL_MD02.jpg", caption: "CB2-U sw XL MD02" },
      { image: "/Images/Dietzel/CB3Y_sw_XL_MD02.jpg", caption: "CB3Y sw XL MD02" },
      { image: "/Images/Dietzel/CB4-H_sw_XL_MD02.jpg", caption: "CB4-H sw XL MD02" },
      { image: "/Images/Dietzel/CBL_sw_XL_MD02.jpg", caption: "CBL sw XL MD02" },
      { image: "/Images/Dietzel/DCX_MD02.jpg", caption: "DCX MD02" },
      { image: "/Images/Dietzel/DSC_3-13_HG_MD01.jpg", caption: "DSC 3-13 HG MD01" },
      { image: "/Images/Dietzel/DSD_XL_MD01.jpg", caption: "DSD XL MD01" },
      { image: "/Images/Dietzel/DSL35_HG_MD01.jpg", caption: "DSL35 HG MD01" },
      { image: "/Images/Dietzel/FPE_hg_XL_MD02.jpg", caption: "FPE hg XL MD02" },
      { image: "/Images/Dietzel/FPE_sw_XL_MD02.jpg", caption: "FPE sw XL MD02" },
      { image: "/Images/Dietzel/HFAFT_AFT_MBS_sw_XL_MD02.jpg", caption: "HFAFT AFT MBS sw XL MD02" },
      { image: "/Images/Dietzel/HFAFT_AFT_MBS_ws_XL_MD02.jpg", caption: "HFAFT AFT MBS ws XL MD02" },
      { image: "/Images/Dietzel/HFAMT_AMT_LN_sw_XL_MD02.jpg", caption: "HFAMT AMT LN sw XL MD02" },
      { image: "/Images/Dietzel/HFAMT_AMT_LR_sw_XL_MD02.jpg", caption: "HFAMT AMT LR sw XL MD02" },
      { image: "/Images/Dietzel/HFBS_Turbo_sw_XL_MD02.jpg", caption: "HFBS Turbo sw XL MD02" },
      { image: "/Images/Dietzel/HFCB2_CB2_sw_XL_MD02.jpg", caption: "HFCB2 CB2 sw XL MD02" },
      { image: "/Images/Dietzel/HFCB3_CB3_sw_XL_MD02.jpg", caption: "HFCB3 CB3 sw XL MD02" },
      { image: "/Images/Dietzel/HFCB4_CB4_sw_XL_MD02.jpg", caption: "HFCB4 CB4 sw XL MD02" },
      { image: "/Images/Dietzel/HFCBA_CBA_sw_XL_MD02.jpg", caption: "HFCBA CBA sw XL MD02" },
      { image: "/Images/Dietzel/HFCLB_CLB_hg_XL_MD02.jpg", caption: "HFCLB CLB hg XL MD02" },
      { image: "/Images/Dietzel/HFCLB_CLB_sw_XL_MD02.jpg", caption: "HFCLB CLB sw XL MD02" },
      { image: "/Images/Dietzel/HFCL_CL_hg_XL_MD02.jpg", caption: "HFCL CL hg XL MD02" },
      { image: "/Images/Dietzel/HFCL_CL_sw_XL_MD02.jpg", caption: "HFCL CL sw XL MD02" },
      { image: "/Images/Dietzel/HFCL_CL_ws_XL_MD02.jpg", caption: "HFCL CL ws XL MD02" },
      { image: "/Images/Dietzel/HFIE_IE_sw_XL_MD02.jpg", caption: "HFIE IE sw XL MD02" },
      { image: "/Images/Dietzel/HFIR-Turbo_XL_MD02.jpg", caption: "HFIR-Turbo XL MD02" },
      { image: "/Images/Dietzel/HFIRM-HFPRMTurbo-hg_XL_MD02.jpg", caption: "HFIRM-HFPRMTurbo-hg XL MD02" },
      { image: "/Images/Dietzel/HFIT_IT_hg_MD01.jpg", caption: "HFIT IT hg MD01" },
      { image: "/Images/Dietzel/HFIT_IT_sw_XL_MD02.jpg", caption: "HFIT IT sw XL MD02" },
      { image: "/Images/Dietzel/HFPRM-Turbo_hg_XL_MD02.jpg", caption: "HFPRM-Turbo hg XL MD02" },
      { image: "/Images/Dietzel/HFPRM_Turbo_sw_XL_MD02.jpg", caption: "HFPRM Turbo sw XL MD02" },
      { image: "/Images/Dietzel/HFSB_HG_N_MD02.jpg", caption: "HFSB HG N MD02" },
      { image: "/Images/Dietzel/HFSB_SW_N_MD02.jpg", caption: "HFSB SW N MD02" },
      { image: "/Images/Dietzel/HFSB_WS_N_MD02.jpg", caption: "HFSB WS N MD02" },
      { image: "/Images/Dietzel/HFSM_SM_HM_hg_XL_MD02.jpg", caption: "HFSM SM HM hg XL MD02" },
      { image: "/Images/Dietzel/HFSM_SM_sw_XL_MD02.jpg", caption: "HFSM SM sw XL MD02" },
      { image: "/Images/Dietzel/HFSM_SM_ws_XL_MD02.jpg", caption: "HFSM SM ws XL MD02" },
      { image: "/Images/Dietzel/HFS_hg_XL_MD02.jpg", caption: "HFS hg XL MD02" },
      { image: "/Images/Dietzel/HFS_sw_XL_MD02.jpg", caption: "HFS sw XL MD02" },
      { image: "/Images/Dietzel/HFS_ws_XL_MD02.jpg", caption: "HFS ws XL MD02" },
      { image: "/Images/Dietzel/HFX-Turbo_hgrau_XL_MD02.jpg", caption: "HFX-Turbo hgrau XL MD02" },
      { image: "/Images/Dietzel/HFXP X_104830_MD02.jpg", caption: "HFXP X 104830 MD02" },
      { image: "/Images/Dietzel/HFXP-HT_sw_XL_MD02.jpg", caption: "HFXP-HT sw XL MD02" },
      { image: "/Images/Dietzel/HFXP_Turbo_PRO_schwarz_XL_MD02.jpg", caption: "HFXP Turbo PRO schwarz XL MD02" },
      { image: "/Images/Dietzel/HFXS_gr_XL_MD02.jpg", caption: "HFXS gr XL MD02" },
      { image: "/Images/Dietzel/HFXS_sw_XL_MD02.jpg", caption: "HFXS sw XL MD02" },
      { image: "/Images/Dietzel/HFXX_HFXPXpro_MD02.jpg", caption: "HFXX HFXPXpro MD02" },
      { image: "/Images/Dietzel/HFXX_XL_MD02.jpg", caption: "HFXX XL MD02" },
      { image: "/Images/Dietzel/HFX_ws_XL_MD02.jpg", caption: "HFX ws XL MD02" },
      { image: "/Images/Dietzel/HLN_LN_SLN_sw_XL_MD02.jpg", caption: "HLN LN SLN sw XL MD02" },
      { image: "/Images/Dietzel/J100B_MD01.jpg", caption: "J100B MD01" },
      { image: "/Images/Dietzel/J160B_MD01.jpg", caption: "J160B MD01" },
      { image: "/Images/Dietzel/J200B_MD01.jpg", caption: "J200B MD01" },
      { image: "/Images/Dietzel/J80B_MD01.jpg", caption: "J80B MD01" },
      { image: "/Images/Dietzel/KH-2_HG_MD01.jpg", caption: "KH-2 HG MD01" },
      { image: "/Images/Dietzel/KH_HG_XL_MD01.jpg", caption: "KH HG XL MD01" },
      { image: "/Images/Dietzel/KM-Turbo-GR_MD02.jpg", caption: "KM-Turbo-GR MD02" },
      { image: "/Images/Dietzel/KM-Turbo-HG_MD02.jpg", caption: "KM-Turbo-HG MD02" },
      { image: "/Images/Dietzel/KM-Turbo-OR_MD02.jpg", caption: "KM-Turbo-OR MD02" },
      { image: "/Images/Dietzel/KM-Turbo-SW_MD02.jpg", caption: "KM-Turbo-SW MD02" },
      { image: "/Images/Dietzel/KSH-15GR_MD01.jpg", caption: "KSH-15GR MD01" },
      { image: "/Images/Dietzel/KSH_30_GR_MD01.jpg", caption: "KSH 30 GR MD01" },
      { image: "/Images/Dietzel/PKGH100OP_ws_XL_MD01.jpg", caption: "PKGH100OP ws XL MD01" },
      { image: "/Images/Dietzel/PKGH200OP_ws_XL_MD01.jpg", caption: "PKGH200OP ws XL MD01" },
      { image: "/Images/Dietzel/PKGH_PKG100OP_hg_XL_MD01.jpg", caption: "PKGH PKG100OP hg XL MD01" },
      { image: "/Images/Dietzel/PKGH_PKG100OP_sw_XL_MD01.jpg", caption: "PKGH PKG100OP sw XL MD01" },
      { image: "/Images/Dietzel/PKGH_PKG200-300OP_hg_XL_MD01.jpg", caption: "PKGH PKG200-300OP hg XL MD01" },
      { image: "/Images/Dietzel/PKGH_PKG200OP_sw_XL_MD01.jpg", caption: "PKGH PKG200OP sw XL MD01" },
      { image: "/Images/Dietzel/PKGH_PKG300OP_sw_XL_MD01.jpg", caption: "PKGH PKG300OP sw XL MD01" },
      { image: "/Images/Dietzel/SBS_sw_XL_MD02.jpg", caption: "SBS sw XL MD02" },
      { image: "/Images/Dietzel/SBS_ws_XL_MD02.jpg", caption: "SBS ws XL MD02" },
      { image: "/Images/Dietzel/SGL_gr_XL_MD02.jpg", caption: "SGL gr XL MD02" },
      { image: "/Images/Dietzel/SGL_sw_XL_MD02.jpg", caption: "SGL sw XL MD02" },
      { image: "/Images/Dietzel/SLN_gr_XL_MD02.jpg", caption: "SLN gr XL MD02" }
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
    productRange: [
      // ATEX
      { image: "/Images/PalazolliLewden/ATEX/292202EX.png", caption: "292202EX ATEX" },
      { image: "/Images/PalazolliLewden/ATEX/463126EX.png", caption: "463126EX ATEX" },
      { image: "/Images/PalazolliLewden/ATEX/532202EX.png", caption: "532202EX ATEX" },
      { image: "/Images/PalazolliLewden/ATEX/ATEX Plug.png", caption: "ATEX Plug" },
      { image: "/Images/PalazolliLewden/ATEX/MM_511913EX - Copy.png", caption: "MM 511913EX" },
      { image: "/Images/PalazolliLewden/ATEX/Rino - 8320232.png", caption: "Rino 8320232" },
      // Customized Application
      { image: "/Images/PalazolliLewden/Customized application/Combination - 610606.png", caption: "Combination 610606" },
      { image: "/Images/PalazolliLewden/Customized application/Combination - 670061.png", caption: "Combination 670061" },
      { image: "/Images/PalazolliLewden/Customized application/Combination(interlocket socket-box) FY4C4371.png", caption: "Combination Socket Box FY4C4371" },
      { image: "/Images/PalazolliLewden/Customized application/Janus - 634101.png", caption: "Janus 634101" },
      { image: "/Images/PalazolliLewden/Customized application/Janus - 638040.png", caption: "Janus 638040" },
      // Lighting
      { image: "/Images/PalazolliLewden/Lighting/IMG_3326.png", caption: "Industrial LED Lighting" },
      { image: "/Images/PalazolliLewden/Lighting/META Lighting.png", caption: "META Lighting" },
      { image: "/Images/PalazolliLewden/Lighting/Rino lighting.png", caption: "Rino Lighting" },
      { image: "/Images/PalazolliLewden/Lighting/Tigua.png", caption: "Tigua" },
      { image: "/Images/PalazolliLewden/Lighting/Tigua_led.png", caption: "Tigua LED" },
      { image: "/Images/PalazolliLewden/Lighting/X-Tigua.png", caption: "X-Tigua" },
      { image: "/Images/PalazolliLewden/Lighting/X-Tigua_Floodlight_suspension.jpg", caption: "X-Tigua Floodlight Suspension" },
      { image: "/Images/PalazolliLewden/Lighting/X-Tigua_Floodlight_tunnel.jpg", caption: "X-Tigua Floodlight Tunnel" },
      { image: "/Images/PalazolliLewden/Lighting/X-Tigua_Floodlight_wall_mounted.jpg", caption: "X-Tigua Floodlight Wall Mounted" },
      // XCEE
      { image: "/Images/PalazolliLewden/XCEE/Presa - FlangiaDritta.png", caption: "Presa Flangia Dritta" },
      { image: "/Images/PalazolliLewden/XCEE/Presa - Impugnatura.png", caption: "Presa Impugnatura" },
      { image: "/Images/PalazolliLewden/XCEE/Presa - Scatola65.png", caption: "Presa Scatola 65" },
      { image: "/Images/PalazolliLewden/XCEE/PresaSEZ - ScatolaFlangiaDritta.png", caption: "PresaSEZ Scatola Flangia Dritta" },
      { image: "/Images/PalazolliLewden/XCEE/PresaSez - Scatola65.png", caption: "PresaSez Scatola 65" },
      { image: "/Images/PalazolliLewden/XCEE/Rotor Switch.png", caption: "Rotor Switch" },
      { image: "/Images/PalazolliLewden/XCEE/Spina - Scatola.png", caption: "Spina Scatola" },
      { image: "/Images/PalazolliLewden/XCEE/XCEE Plug & Socket.png", caption: "XCEE Plug & Socket" },
      { image: "/Images/PalazolliLewden/XCEE/XCEE Plug.png", caption: "XCEE Plug" },
      // Isolators & Boxes
      { image: "/Images/PalazolliLewden/isolators and Boxes/208162.png", caption: "208162 Box" },
      { image: "/Images/PalazolliLewden/isolators and Boxes/Isolator - 292503.png", caption: "Isolator 292503" },
      { image: "/Images/PalazolliLewden/isolators and Boxes/Junction Box - 532006.png", caption: "Junction Box 532006" },
      { image: "/Images/PalazolliLewden/isolators and Boxes/Junction Box - 532201.png", caption: "Junction Box 532201" },
      { image: "/Images/PalazolliLewden/isolators and Boxes/Junction Box - 532557.png", caption: "Junction Box 532557" },
      { image: "/Images/PalazolliLewden/isolators and Boxes/Tais Cube.png", caption: "Tais Cube" },
      { image: "/Images/PalazolliLewden/isolators and Boxes/Unibox - 520011.png", caption: "Unibox 520011" },
      // Plugs & Sockets
      { image: "/Images/PalazolliLewden/plugs and socket /472130 - Tais.png", caption: "Tais 472130" },
      { image: "/Images/PalazolliLewden/plugs and socket /473112.png", caption: "473112" },
      { image: "/Images/PalazolliLewden/plugs and socket /473951.png", caption: "473951" },
      { image: "/Images/PalazolliLewden/plugs and socket /473971.png", caption: "473971" },
      { image: "/Images/PalazolliLewden/plugs and socket /474843 - tais.png", caption: "Tais 474843" },
      { image: "/Images/PalazolliLewden/plugs and socket /476102.png", caption: "476102" },
      { image: "/Images/PalazolliLewden/plugs and socket /476207.png", caption: "476207" },
      { image: "/Images/PalazolliLewden/plugs and socket /476413.png", caption: "476413" },
      { image: "/Images/PalazolliLewden/plugs and socket /477002.png", caption: "477002" },
      { image: "/Images/PalazolliLewden/plugs and socket /477003.png", caption: "477003" },
      { image: "/Images/PalazolliLewden/plugs and socket /50A9186-1_b.png", caption: "50A9186-1 b" },
      { image: "/Images/PalazolliLewden/plugs and socket /705126.png", caption: "705126" },
      { image: "/Images/PalazolliLewden/plugs and socket /710126_png_800_600_contain_70.png", caption: "710126" },
      { image: "/Images/PalazolliLewden/plugs and socket /710166.png", caption: "710166" },
      { image: "/Images/PalazolliLewden/plugs and socket /720124 multi 1.png", caption: "720124 Multi 1" },
      { image: "/Images/PalazolliLewden/plugs and socket /720124_ghiera (1).png", caption: "720124 Ghiera (1)" },
      { image: "/Images/PalazolliLewden/plugs and socket /720124_ghiera.png", caption: "720124 Ghiera" },
      { image: "/Images/PalazolliLewden/plugs and socket /720130.png", caption: "720130" },
      { image: "/Images/PalazolliLewden/plugs and socket /725126.png", caption: "725126" },
      { image: "/Images/PalazolliLewden/plugs and socket /725126_close.png", caption: "725126 Close" },
      { image: "/Images/PalazolliLewden/plugs and socket /753126.png", caption: "753126" },
      { image: "/Images/PalazolliLewden/plugs and socket /761530.png", caption: "761530" },
      { image: "/Images/PalazolliLewden/plugs and socket /Alumax Straight plug.png", caption: "Alumax Straight Plug" },
      { image: "/Images/PalazolliLewden/plugs and socket /Alumax Straight socket.png", caption: "Alumax Straight Socket" },
      { image: "/Images/PalazolliLewden/plugs and socket /Back Box_1.png", caption: "Back Box 1" },
      { image: "/Images/PalazolliLewden/plugs and socket /Back Box_2.png", caption: "Back Box 2" },
      { image: "/Images/PalazolliLewden/plugs and socket /Back Box_3.png", caption: "Back Box 3" },
      { image: "/Images/PalazolliLewden/plugs and socket /Back Box_4.png", caption: "Back Box 4" },
      { image: "/Images/PalazolliLewden/plugs and socket /CEE plug - 477207.png", caption: "CEE Plug 477207" },
      { image: "/Images/PalazolliLewden/plugs and socket /Multimax plug (red).png", caption: "Multimax Plug (Red)" },
      { image: "/Images/PalazolliLewden/plugs and socket /Multimax socket (red).png", caption: "Multimax Socket (Red)" },
      { image: "/Images/PalazolliLewden/plugs and socket /Prima socket - 493126.png", caption: "Prima Socket 493126" },
      { image: "/Images/PalazolliLewden/plugs and socket /Thermoplastic Switch socket IP55 - 481336.png", caption: "Thermoplastic Switch Socket IP55 481336" },
      { image: "/Images/PalazolliLewden/plugs and socket /Thermoplastic Switched socket (blue) - 491124.png", caption: "Thermoplastic Switched Socket (Blue) 491124" },
      { image: "/Images/PalazolliLewden/plugs and socket /Thermoplastic switch socket - 492126.png", caption: "Thermoplastic Switch Socket 492126" },
      { image: "/Images/PalazolliLewden/plugs and socket /backbox - 579421.png", caption: "Backbox 579421" },
      { image: "/Images/PalazolliLewden/plugs and socket /topTER interlocket socket (blue) - 490126.png", caption: "topTER Interlocked Socket (Blue) 490126" },
      { image: "/Images/PalazolliLewden/plugs and socket /topTER interlocket socket - 490126.png", caption: "topTER Interlocked Socket 490126" },
      { image: "/Images/PalazolliLewden/plugs and socket /topTER socket (15deg-blue) - 489126.png", caption: "topTER Socket (15deg-Blue) 489126" },
      { image: "/Images/PalazolliLewden/plugs and socket /topTER socket (90deg-blue).png", caption: "topTER Socket (90deg-Blue)" },
      { image: "/Images/PalazolliLewden/plugs and socket /topTER socket (red) with backbox.png", caption: "topTER Socket (Red) with Backbox" },
      { image: "/Images/PalazolliLewden/plugs and socket /topTER socket with backbox.png", caption: "topTER Socket with Backbox" }
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
    subtitle: "High Voltage Testing Instruments",
    description: "State-of-the-art diagnostic, testing, and measurement systems for electrical power systems and high-voltage equipment.",
    website: "https://www.hvti.com/",
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
    productRange: [
      { image: "/Images/TIGO/Product 1.png", caption: "Product 1" },
      { image: "/Images/TIGO/Product 2.png", caption: "Product 2" }
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
    productRange: [
      { image: "/Images/Craig and Derricott/Product.png", caption: "Product" }
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
    subtitle: "Cable & Pipe Transit Systems",
    description: "Innovative modular sealing systems for cables and pipes ensuring maximum safety and fire protection in demanding environments.",
    website: "https://www.wallmax.com/",
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
      { image: "/Images/Tubifor/Product.png", caption: "Product" }
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
    productRange: [
      { image: "/Images/Siechem/cable1.webp", caption: "cable1" },
      { image: "/Images/Siechem/cables2.webp", caption: "cables2" },
      { image: "/Images/Siechem/cables3.webp", caption: "cables3" },
      { image: "/Images/Siechem/cables4.webp", caption: "cables4" }
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
    website: "http://www.tekabcables.com/",
    productRange: [
      { image: "/Images/Siechem/cable1.webp", caption: "cable1" },
      { image: "/Images/Siechem/cables2.webp", caption: "cables2" },
      { image: "/Images/Siechem/cables3.webp", caption: "cables3" },
      { image: "/Images/Siechem/cables4.webp", caption: "cables4" }
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
    productRange: [
      { image: "/Images/Siechem/cable1.webp", caption: "cable1" },
      { image: "/Images/Siechem/cables2.webp", caption: "cables2" },
      { image: "/Images/Siechem/cables3.webp", caption: "cables3" },
      { image: "/Images/Siechem/cables4.webp", caption: "cables4" }
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
    subtitle: "Industrial Enclosures & Switchgear Cabinets",
    description: "Premium electrical enclosures, distribution boards, and sheet metal fabrication engineered for civil and industrial power systems.",
    website: "https://www.emi.ae/",
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
    website: "https://cosmoplast.com/",
    productRange: [
      { image: "/Images/Cosmoplast/Product.png", caption: "Product" }
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
      { image: "/Images/nventerico/nvent/GEM Ground Enhancement Material.png.webp", caption: "GEM Ground Enhancement Material" },
      { image: "/Images/nventerico/nvent/Grounding Busbar.png.webp", caption: "Grounding Busbar" },
      { image: "/Images/nventerico/nvent/High Amperage Plugs & Sockets Project.webp", caption: "High Amperage Plugs & Sockets Project" },
      { image: "/Images/nventerico/nvent/erico_system3000.png.webp", caption: "ERICO System 3000" },
      { image: "/Images/nventerico/nvent/nVent ERICO Cadweld Plus Impulse Exothermic Welding Control Unit.png.webp", caption: "Cadweld Exothermic Welding Unit" },
      { image: "/Images/nventerico/nvent/nVent ERICO Hammerlock Ground Clamp.png.webp", caption: "Hammerlock Ground Clamp" }
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
      { image: "/Images/product/AVAIDS.png", caption: "Aviation Warning Light" }
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
    website: "https://www.psi-me.com/",
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

  return (
    <>
      <section className="hero kumwell-hero">
        <Image
          src="/Images/kumwell/H1.png"
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
            <button className="btn-primary">Request a Quote</button>
            <a href={brandData.website} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Visit Website 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="product-range" style={{ padding: "60px 0", background: "#ffffff", overflow: "hidden" }}>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "80px", fontSize: "48px", fontWeight: "600", fontFamily: "var(--font-degular), sans-serif" }}>Product Range</h2>
        <div 
          className="kumwell-product-grid" 
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
            maxWidth: "1690px",
            margin: "0 auto",
            padding: "0 20px"
          }}
        >
          {brandData.productRange.map((product, index) => (
            <div 
              key={index} 
              className="kumwell-product-item" 
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center"
              }}
            >
              <div className="kumwell-product-card" style={{ width: "280px", height: "285px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: "20px" }}>
                <div className="kumwell-product-card-image" style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image src={product.image} alt={product.caption || `${brandData.name} Product`} fill style={{ objectFit: "contain" }} />
                </div>
              </div>
              {product.caption && (
                <p className="kumwell-product-caption" style={{ marginTop: "24px", fontSize: "16px", fontWeight: "600", color: "#111111", textAlign: "center", fontFamily: "var(--font-neutiva), sans-serif", maxWidth: "260px", lineHeight: "1.4" }}>
                  {product.caption}
                </p>
              )}
            </div>
          ))}
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
    </>
  );
}
