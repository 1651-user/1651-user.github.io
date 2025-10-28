import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";

const projects = [
  {
    title: "Borderly Visa Website",
    description: "Designed and implemented a full-stack web application for streamlined visa application, focusing on user authentication and security.",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI/ML for Geodata Analysis (ISRO)",
    description: "Attended a 5-day online course on 'AI/ML for Geodata Analysis' conducted by IIRS, ISRO, gaining practical experience in geo-data processing, analysis, and application of machine learning techniques for satellite imagery.",
    tags: ["AI/ML", "Geospatial", "ISRO", "IIRS", "5-Day Workshop"],
    github: "#",
    demo: "#",
    certificate: "isro_aiml.pdf",
  },
  {
    title: "ONGC Internship",
    description: "Developed a Flutter-Firebase Event Scheduler App  for real-time event updates and scheduling functionality.",
    tags: ["Flutter", "Firebase", "Mobile Dev"],
    github: "#",
    demo: "#",
  },
  {
    title: "NPTEL Ethical Hacking",
    description: "Completed advanced NPTEL course, demonstrating proficiency in systematic vulnerability assessment and network defense strategies.",
    tags: ["Pentesting", "Network Security", "Web Security"],
    github: "#",
    demo: "#",
  },
  {
    title: "Drone Security Workshop",
    description: "Hands-on experience in penetration testing of UAS, securing RF/MAVLink communication protocols.",
    tags: ["Kali Linux", "UAV Protocols", "IoT Security"],
    github: "#",
    demo: "#",
  },
  
  
  {
    title: "Munin Visualization",
    description: "Used visualization libraries to analyze and visualize complex datasets (server performance, network traffic).",
    tags: ["Matplotlib", "Plotly", "Data Analysis", "Monitoring"],
    github: "#",
    demo: "#",
  },
  {
    title: "Game Development",
    description: "Built and deployed functional games (3D puzzle and 2D platformer), showcasing game logic and physics implementation.",
    tags: ["Unity", "C#", "OOP", "Game Physics"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth border border-border"
            >
              <div className="h-48 bg-gradient-to-br from-background to-muted flex items-center justify-center border-b border-border">
                <span className="text-6xl text-primary font-mono">&gt;_</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground font-mono">
                  <span className="text-primary">$</span> {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-muted rounded border border-border text-foreground font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {/* NEW: Certificate Button */}
                  {project.certificate && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.certificate} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4" />
                        Certificate
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;