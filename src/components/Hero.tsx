import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          <span className="text-primary">$</span> Hi, I'm <span className="text-primary">Sravya Isukapatla</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto">
          <span className="text-primary">&gt;</span> Frontend Developer 💻
        </p>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          <span className="text-primary">&gt;</span> Computer Science Enthusiast 🚀
        </p>
        <p className="text-lg text-primary-foreground/80 mb-12 max-w-xl mx-auto">
          Crafting beautiful, user-centric interfaces with modern web technologies
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary-foreground" />
      </div>
    </section>
  );
};

export default Hero;
