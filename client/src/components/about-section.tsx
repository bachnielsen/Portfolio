import { personalInfo, skills } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="space-y-8 slide-up">
          <h2 className="section-title text-4xl font-bold">/about</h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground">
              {personalInfo.about.intro}
            </p>
            
            <p className="text-muted-foreground">
              {personalInfo.about.background}
            </p>
            
            <p className="text-muted-foreground">
              {personalInfo.about.interests}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-8">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30"
              >
                {skill.name}
              </span>
            ))}
          </div>
      </div>
    </section>
  );
}
