import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, Check } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="space-y-12 slide-up">
          <h2 className="section-title text-4xl font-bold">/contact</h2>

          <div className="space-y-8">
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                Feel free to reach out through any of these channels:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 [&>*]:flex-1 [&>*]:max-w-xs">
              <button onClick={handleEmailClick} className="group text-left relative">
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
                {copied && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-foreground text-background text-xs font-medium px-3 py-1 rounded-full shadow">
                    <Check className="w-3 h-3" />
                    Email copied
                  </div>
                )}
              </button>

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

            </div>

          </div>
      </div>
    </section>
  );
}
