import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitle1Ref = useRef<HTMLParagraphElement>(null);
  const subtitle2Ref = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for sequential animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate title with split effect
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        scale: 0.8,
      })
        // Animate subtitles with stagger
        .from([subtitle1Ref.current, subtitle2Ref.current], {
          x: -50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        }, "-=0.5")
        // Animate description
        .from(descRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, "-=0.4")
        // Animate buttons
        .from(buttonsRef.current?.children || [], {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
        }, "-=0.3")
        // Animate arrow
        .from(arrowRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.6,
        }, "-=0.3");

      // Continuous arrow animation
      gsap.to(arrowRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* The background is now fully handled by MatrixBackground.tsx */}
      <div
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          <span className="text-primary"></span> Hi, I'm <span className="text-primary">Sravya Isukapatla</span>
        </h1>
        <p ref={subtitle1Ref} className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto">
          <span className="text-primary">&gt;</span> Frontend Developer
        </p>
        <p ref={subtitle2Ref} className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          <span className="text-primary">&gt;</span> Computer Science Enthusiast
        </p>
        <p ref={descRef} className="text-lg text-primary-foreground/80 mb-12 max-w-xl mx-auto">
          Crafting beautiful, user-centric interfaces with modern web technologies
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToProjects}
          >
            View My Work
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={arrowRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ArrowDown className="w-6 h-6 text-primary-foreground" />
      </div>
    </section>
  );
};

export default Hero;