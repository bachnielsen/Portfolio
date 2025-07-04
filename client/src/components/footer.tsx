import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © 2025 - Built with modern web technologies
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="social-icon text-muted-foreground hover:text-primary">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="social-icon text-muted-foreground hover:text-primary">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="social-icon text-muted-foreground hover:text-primary">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
