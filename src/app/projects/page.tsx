import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function ProjectsPage() {
  const projects = [
    {
      category: "Infrastructure",
      title: "Dubai Uptown Tower",
      location: "Dubai, UAE",
      description: "Electrical supply solutions for a high-rise commercial development, delivering reliable power distribution, safety systems, and efficient performance across all operational requirements.",
      img: "Rectangle 23.jpg"
    },
    {
      category: "Transportation Infrastructure",
      title: "Etihad Rail",
      location: "Dubai, UAE",
      description: "Delivering electrical supply solutions for a large-scale rail infrastructure project, ensuring reliable power systems, enhanced safety measures, and seamless operations across transport networks with a focus on long-term efficiency.",
      img: "Rectangle 24.jpg"
    },
    {
      category: "Energy & Utilities",
      title: "Dubai Waste to Energy",
      location: "Dubai, UAE",
      description: "Electrical supply solutions for a large-scale waste-to-energy facility, supporting reliable power distribution, advanced safety systems, and efficient energy conversion operations with a focus on sustainability and performance.",
      img: "Rectangle 72.jpg"
    },
    {
      category: "Energy & Utilities",
      title: "Aldhafra PV2 Solar Power Plant",
      location: "Dubai, UAE",
      description: "Electrical supply solutions for one of the world’s largest solar power projects, supporting reliable power distribution, advanced safety systems, and efficient renewable energy generation with long-term operational performance.",
      img: "Rectangle 73.jpg"
    },
    {
      category: "Commercial Infrastructure",
      title: "SeaWorld Abu Dhabi",
      location: "Dubai, UAE",
      description: "Electrical supply solutions for a large-scale entertainment destination, supporting reliable power distribution, advanced safety systems, and efficient operations across complex commercial infrastructure.",
      img: "Rectangle 74.jpg"
    },
    {
      category: "Residential Infrastructure",
      title: "Aykon Tower",
      location: "Dubai, UAE",
      description: "Electrical supply solutions for a high-rise mixed-use development, supporting reliable power distribution, advanced safety systems, and efficient operations across residential and commercial spaces.",
      img: "Rectangle 23 (1).png"
    }
  ];

  return (
    <>
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
            <li><Link href="/homepage">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/productpage">Products</Link></li>
            <li><span className="nav-dropdown">Useful Information</span></li>
            <li><Link href="/projects" className="active">Projects</Link></li>
            <li><Link href="/clients">Clients</Link></li>
            <li><Link href="/certifications">Our Certifications</Link></li>
            <li><Link href="/homepage#contact">Contact</Link></li>
          </ul>
        </nav>
        <MobileNav activePage="Projects" />
      </header>

      <main className="projects-page-wrapper">
        <div className="projects-hero">
          <Image 
            src="/Images/Our Projects/image 40.jpg" 
            alt="Our Projects Banner" 
            fill 
            style={{ objectFit: "cover" }} 
            priority
          />
          <div className="projects-hero-overlay"></div>
          <div className="projects-hero-content">
            <h1>Our Projects</h1>
            <p className="projects-hero-desc">Delivering Reliable Electrical Solutions Across Industries With a strong presence across infrastructure, industrial, and utility sectors, our projects reflect our commitment to quality, performance, and long-term reliability.</p>
          </div>
        </div>

        <div className="projects-trusted-bar">
          <div className="projects-trusted-subtitle"><span className="projects-dot"></span> CERTIFIED QUALITY</div>
          <h2><span style={{color: "var(--orange)"}}>Trusted</span> by Clients Across Industries</h2>
        </div>

        <div className="projects-grid-container">
          {projects.map((project, index) => (
            <div className="project-detail-card" key={index}>
              <div className="project-card-image">
                <span className="project-category-tag">{project.category}</span>
                <Image 
                  src={`/Images/Our Projects/${project.img}`} 
                  alt={project.title} 
                  fill 
                  style={{ objectFit: "cover" }} 
                />
              </div>
              <div className="project-card-info">
                <h3>{project.title}</h3>
                <p className="project-location">{project.location}</p>
                <p className="project-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="hp-footer">
        <div className="hp-footer-content">
          <div className="hp-footer-grid">
            <div className="hp-footer-brand">
              <Image src="/Images/Brand_partners/Frame 76.png" alt="Gulf Radiant" width={240} height={67} style={{ objectFit: "contain", objectPosition: "left" }} />
              <div style={{ marginTop: "25px", display: "flex", gap: "15px", paddingLeft: "90px" }}>
                <a href="https://www.linkedin.com/company/gulf-radiant-llc-dubai/" target="_blank" rel="noopener noreferrer" className="hp-footer-linkedin">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
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
    </>
  );
}
