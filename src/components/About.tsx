const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <span className="text-primary"></span> 
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Frontend Developer and Designer with a strong foundation in Computer Science. 
              My journey spans across web development, cybersecurity, AI/ML, and data visualization, with hands-on experience 
              in building user-centric applications that blend functionality with beautiful design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From developing full-stack web applications to securing drone systems and building machine learning models, 
              I thrive on creating solutions that make a real-world impact. I believe great design isn't just about aesthetics—it's 
              about creating intuitive experiences that users love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;