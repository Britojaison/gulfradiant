import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      category: "Infrastructure",
      title: "Dubai Uptown Tower",
      location: "Dubai, UAE",
      description: "Electrical supply solutions for a high-rise commercial development, delivering reliable power distribution, safety systems, and efficient performance across all operational requirements.",
      img: "img1.svg"
    },
    {
      category: "Transportation Infrastructure",
      title: "Etihad Rail",
      location: "Dubai, UAE",
      description: "Delivering electrical supply solutions for a large-scale rail infrastructure project, ensuring reliable power systems, enhanced safety measures, and seamless operations across transport networks with a focus on long-term efficiency.",
      img: "img2.svg"
    },
    {
      category: "Energy & Utilities",
      title: "Dubai Waste to Energy",
      location: "Dubai, UAE",
      description: "Electrical supply solutions for a large-scale waste-to-energy facility, supporting reliable power distribution, advanced safety systems, and efficient energy conversion operations with a focus on sustainability and performance.",
      img: "img3.svg"
    },
    {
      category: "Energy & Utilities",
      title: "Aldhafra PV2 Solar Power Plant",
      location: "Dubai, UAE",
      description: "Electrical supply solutions for one of the world’s largest solar power projects, supporting reliable power distribution, advanced safety systems, and efficient renewable energy generation with long-term operational performance.",
      img: "img4.svg"
    },
    {
      category: "Commercial Infrastructure",
      title: "SeaWorld Abu Dhabi",
      location: "Dubai, UAE",
      description: "Electrical supply solutions for a large-scale entertainment destination, supporting reliable power distribution, advanced safety systems, and efficient operations across complex commercial infrastructure.",
      img: "img5.svg"
    },
    {
      category: "Residential Infrastructure",
      title: "Aykon Tower",
      location: "Dubai, UAE",
      description: "Electrical supply solutions for a high-rise mixed-use development, supporting reliable power distribution, advanced safety systems, and efficient operations across residential and commercial spaces.",
      img: "img6.svg"
    }
  ];

  return (
    <>
      <main className="projects-page-wrapper">
        <div className="projects-hero">
          <Image 
            src="/Images/our_projects/img7.svg" 
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

        <div className="projects-trusted-bar" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", textAlign: "center", padding: "60px 0" }}>
          <div className="hp-dist-subtitle">
            <div className="hp-dist-subtitle-track">
              <span style={{ color: "#000000" }}>{"PERFORMANCE\u00A0TRUST\u00A0"}</span>
              <span style={{ color: "#000000" }}>{"PERFORMANCE\u00A0TRUST\u00A0"}</span>
              <span style={{ color: "#000000" }}>{"PERFORMANCE\u00A0TRUST\u00A0"}</span>
              <span style={{ color: "#000000" }}>{"PERFORMANCE\u00A0TRUST\u00A0"}</span>
              <span style={{ color: "#000000" }}>{"PERFORMANCE\u00A0TRUST\u00A0"}</span>
              <span style={{ color: "#000000" }}>{"PERFORMANCE\u00A0TRUST\u00A0"}</span>
            </div>
          </div>
          <h2>Trusted by Clients Across Industries</h2>
        </div>

        <div className="projects-grid-container">
          {projects.map((project, index) => (
            <div className="project-detail-card" key={index}>
              <div className="project-card-image">
                <img 
                  src={`/Images/our_projects/${project.img}`} 
                  alt={project.title} 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
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

    </>
  );
}
