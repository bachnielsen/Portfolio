import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import WhenNotWorkingSection from "@/components/when-not-working-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  const [aboutTop, setAboutTop] = useState<number | null>(null);

  useEffect(() => {
    const about = document.getElementById("about");
    if (about) {
      const heading = about.querySelector("h2");
      if (heading) {
        setAboutTop(heading.getBoundingClientRect().top + window.scrollY - 32);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex justify-center">

        {/* Left nav column — spacer pushes nav down to /about level, then sticky */}
        <div className="w-44 shrink-0 hidden md:block">
          {aboutTop !== null && (
            <>
              <div style={{ height: aboutTop }} />
              <div className="sticky top-16">
                <Navigation />
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="w-full max-w-3xl min-w-0">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <WhenNotWorkingSection />
          <ContactSection />
        </div>

        {/* Right mirror — keeps content centered */}
        <div className="w-44 shrink-0 hidden md:block" />

      </div>
    </div>
  );
}
