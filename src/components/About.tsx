import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial visibility
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 1 });
    }
    if (cardRef.current) {
      gsap.set(cardRef.current, { opacity: 1 });
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

      // Animate card
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          scrub: false,
          once: true,
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div ref={cardRef} className="bg-card rounded-2xl p-8 shadow-card border border-border">
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