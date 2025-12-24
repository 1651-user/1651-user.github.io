import { Code2, Palette, Shield, Database, Brain, Gamepad2 } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, HTML5, CSS3, JavaScript, Flutter",
  },
  {
    icon: Database,
    title: "Backend & Databases",
    description: "Node.js, MongoDB, Firebase, REST APIs",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Responsive Design, User-Centric Interfaces",
  },
  {
    icon: Brain,
    title: "AI/ML & Data",
    description: "Python, TensorFlow, PyTorch, Plotly, Data Visualization",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Kali Linux, Pentesting, Network Security, UAV Protocols",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Unity, C#, C++, Game Physics, OOP",
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial visibility
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.set(cards, { opacity: 1 });
    }
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 1 });
    }

    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          scrub: false,
          once: true,
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate skill cards
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            scrub: false,
            once: true,
          },
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Skills & Expertise
        </h2>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2 border border-border"
            >
              <div className="w-12 h-12 rounded bg-transparent border-2 border-primary flex items-center justify-center mb-4 group-hover:bg-primary transition-smooth">
                <skill.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground font-mono">
                <span className="text-primary">&gt;</span> {skill.title}
              </h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;