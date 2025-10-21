import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Let's Connect
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card shadow-card hover:shadow-elegant flex items-center justify-center transition-smooth hover:scale-110"
            >
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card shadow-card hover:shadow-elegant flex items-center justify-center transition-smooth hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card shadow-card hover:shadow-elegant flex items-center justify-center transition-smooth hover:scale-110"
            >
              <Twitter className="w-6 h-6 text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
