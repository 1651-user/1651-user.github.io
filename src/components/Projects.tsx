import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Mobile App Development Intern (May-July 2024)",
    description: "Developed a cross-platform mobile application using Flutter and Dart, with Firebase as the backend. Designed to help users stay informed about upcoming events by providing real-time access to schedules, timings, and event details.",
    tags: ["Flutter", "Dart", "Firebase", "Mobile Dev", "ONGC"],
    github: "#",
    demo: "#",
    certificate: undefined,
  },
  {
    title: "NPTEL Ethical Hacking Certification",
    description: "Completed advanced coursework demonstrating proficiency in systematic vulnerability assessment and network defense strategies.",
    tags: ["Ethical Hacking", "Cybersecurity", "Network Security", "NPTEL"],
    github: "#",
    demo: "#",
    certificate: undefined,
  },
  {
    title: "AI/ML for Geodata Analysis (ISRO)",
    description: "Completed a 5-day online workshop on 'AI/ML for Geodata Analysis' conducted by IIRS, ISRO, gaining practical experience in geo-data processing, analysis, and applying machine learning techniques for satellite imagery.",
    tags: ["AI/ML", "ISRO", "IIRS", "Geospatial", "Satellite Imagery"],
    github: "#",
    demo: "#",
    certificate: undefined,
  },
  {
    title: "Drone Security Workshop",
    description: "Gained hands-on experience in penetration testing of UAS (Unmanned Aerial Systems) and securing RF/MAVLink communication protocols using Kali Linux.",
    tags: ["Drone Security", "Kali Linux", "Penetration Testing", "RF/MAVLink"],
    github: "#",
    demo: "#",
    certificate: undefined,
  },
  {
    title: "Game Development Portfolio",
    description: "Built and deployed functional games (3D puzzle and 2D platformer), showcasing core game logic and physics implementation in Unity C#.",
    tags: ["Unity", "C#", "Game Development", "3D/2D Games"],
    github: "#",
    demo: "#",
    certificate: undefined,
  },
  {
    title: "Model United Nations (MUN) Certification",
    description: "Completed a rigorous 2-day conference at VIT Chennai, sharpening skills in diplomacy, public speaking, negotiation, and drafting policy resolutions.",
    tags: ["MUN", "Diplomacy", "Public Speaking", "VIT Chennai"],
    github: "#",
    demo: "#",
    certificate: undefined,
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial visibility to 1 to ensure content is always visible
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.set(cards, { opacity: 1 });
    }
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 1 });
    }

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: false,
          once: true,
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate project cards with stagger
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: false,
            once: true,
          },
          y: 60,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Featured Projects
        </h2>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth border border-border hover:-translate-y-2"
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