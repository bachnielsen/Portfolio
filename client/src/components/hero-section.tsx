import { personalInfo } from "@/lib/data";

export default function HeroSection() {
  return (
    <section id="home" className="pt-8 pb-16 px-6">
      <div className="flex flex-col items-center text-center space-y-8 fade-in">
          <img
            src="/images/profile.JPG"
            alt="Niclas Bach Nielsen"
            className="w-32 h-32 rounded-full object-cover"
          />
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-primary">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>
      </div>
    </section>
  );
}
