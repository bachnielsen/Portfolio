import { personalInfo } from "@/lib/data";

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 fade-in">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
            alt="Professional headshot"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
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
      </div>
    </section>
  );
}
