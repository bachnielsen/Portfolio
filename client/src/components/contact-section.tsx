import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12 slide-up">
          <h2 className="section-title text-4xl font-bold">/contact</h2>
          
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <p className="text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
                Working on something interesting? I'm always open to discussing new opportunities, 
                collaborating on projects, or just having a chat about technology and software development.
              </p>
              <p className="text-lg text-muted-foreground">
                Feel free to reach out through any of these channels:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href={`mailto:${personalInfo.contact.email}`} className="group">
                <div className="bg-card rounded-lg p-6 border border-border hover:border-primary timeline-card">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Mail className="text-primary text-xl" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground text-sm mt-1">{personalInfo.contact.email}</p>
                    </div>
                  </div>
                </div>
              </a>
              
              <a href={personalInfo.contact.linkedin} className="group" target="_blank" rel="noopener noreferrer">
                <div className="bg-card rounded-lg p-6 border border-border hover:border-primary timeline-card">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Linkedin className="text-primary text-xl" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-foreground">LinkedIn</h3>
                      <p className="text-muted-foreground text-sm mt-1">Connect with me</p>
                    </div>
                  </div>
                </div>
              </a>
              
              <a href={personalInfo.contact.github} className="group" target="_blank" rel="noopener noreferrer">
                <div className="bg-card rounded-lg p-6 border border-border hover:border-primary timeline-card">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Github className="text-primary text-xl" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-foreground">GitHub</h3>
                      <p className="text-muted-foreground text-sm mt-1">View my code</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground italic">
                — Let's build something amazing together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
