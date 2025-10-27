import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import MatrixBackground from "@/components/MatrixBackground";

const Index = () => {
  return (
    <main className="min-h-screen relative dark">
      <MatrixBackground />
      <div className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      
        {/* Footer */}
        <footer className="py-8 bg-card border-t border-border">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Sravya Isukapatla. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;