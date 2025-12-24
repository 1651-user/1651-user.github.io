import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial visibility
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 1 });
    }
    if (contentRef.current) {
      gsap.set(contentRef.current.children, { opacity: 1 });
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

      // Animate content with stagger
      const children = contentRef.current?.children;
      if (children) {
        gsap.from(children, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            scrub: false,
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Let's Connect
        </h2>
        <div ref={contentRef} className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:sravyaisukapatla@gmail.com">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/1651-user"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card shadow-card hover:shadow-elegant flex items-center justify-center transition-smooth hover:scale-110"
            >
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/sravya-isukapatla-07776329b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card shadow-card hover:shadow-elegant flex items-center justify-center transition-smooth hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;