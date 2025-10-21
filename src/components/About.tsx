const About = () => {
  return (
    <section id="about" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate developer with a love for creating beautiful, functional, and user-friendly applications. 
              With expertise in modern web technologies, I turn ideas into reality through clean code and thoughtful design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
