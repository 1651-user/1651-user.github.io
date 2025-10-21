import { Code2, Palette, Rocket, Database, Globe, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, PostgreSQL, APIs",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Responsive Design, Accessibility",
  },
  {
    icon: Rocket,
    title: "DevOps",
    description: "CI/CD, Docker, Cloud Platforms",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "SEO, Performance, Progressive Web Apps",
  },
  {
    icon: Zap,
    title: "Problem Solving",
    description: "Algorithms, Clean Code, Best Practices",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                <skill.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
