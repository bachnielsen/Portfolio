import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import WhenNotWorkingSection from "@/components/when-not-working-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex justify-center">
        <Navigation />
        <main className="w-full max-w-2xl min-w-0">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <WhenNotWorkingSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
