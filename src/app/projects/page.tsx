import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      category: "Infrastructure",
      title: "Dubai Uptown Tower",
      location: "Dubai, UAE",
      description: "Supplied comprehensive electrical switchgear and low voltage components, ensuring reliable power distribution setup.",
      img: "Rectangle 23.jpg"
    },
    {
      category: "Transportation Infrastructure",
      title: "Etihad Rail",
      location: "Abu Dhabi, UAE",
      description: "Delivered highly durable cable management systems and earthing components designed to withstand harsh outdoor conditions.",
      img: "Rectangle 24.jpg"
    },
    {
      category: "Energy & Utilities",
      title: "Dubai Waste to Energy",
      location: "Dubai, UAE",
      description: "Supplied specialized cables, conduits, and heavy-duty fittings for a waste-to-energy plant, maintaining high safety standards.",
      img: "Rectangle 72.jpg"
    },
    {
      category: "Energy & Utilities",
      title: "Mohammed Bin Rashid Al Maktoum Solar Park",
      location: "Dubai, UAE",
      description: "Provided ruggedized, UV-resistant wiring and protective systems, ensuring uninterrupted operation of critical infrastructure.",
      img: "Rectangle 73.jpg"
    },
    {
      category: "Commercial Infrastructure",
      title: "South Market, Abu Dhabi",
      location: "Abu Dhabi, UAE",
      description: "Supplied energy-efficient electrical components, LED lighting, and switchgear to support daily commercial operations and public safety.",
      img: "Rectangle 74.jpg"
    },
    {
      category: "Residential Infrastructure",
      title: "Al Habtoor City",
      location: "Dubai, UAE",
      description: "Provided extensive electrical supplies, switchgear, and lighting solutions tailored for high-end residential living spaces.",
      img: "Rectangle 23 (1).png"
    }
  ];

  return (
    <>
      <header className="navbar" id="navbar">
        <div className="navbar-logo">
          <Image
            src="/Images/logo.png"
            alt="Gulf Radiant Logo"
            width={180}
            height={64}
            style={{ height: "auto", width: "180px", filter: "brightness(0) invert(1)" }}
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
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
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
            <p>Delivering excellence across industries. Gulf Radiant is proud to have contributed to some of the most dynamic infrastructure developments in the region.</p>
          </div>
        </div>

        <div className="projects-trusted-bar">
          <div className="projects-trusted-subtitle"><span className="projects-dot"></span> CERTIFIED QUALITY</div>
          <h2>Trusted by Clients Across Industries</h2>
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
              <Image src="/Images/logo.png" alt="Gulf Radiant Logo" width={150} height={54} style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <div className="hp-footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><Link href="/homepage">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/productpage">Products</Link></li>
                <li><Link href="/contact">Contact</Link></li>
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
                <li><a href="tel:+97143579062">+971 4 357 9062</a></li>
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
