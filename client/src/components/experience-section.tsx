import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12 slide-up">
          <h2 className="section-title text-4xl font-bold">/experience</h2>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 flex flex-col items-center">
                    <div className="changelog-version bg-card text-primary border-primary">
                      {experience.version}
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="timeline-line w-px h-32 mt-4"></div>
                    )}
                  </div>
                  <div className="timeline-card flex-1 bg-card/50 rounded-lg p-6 border border-border">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 className="text-xl font-semibold text-foreground">
                          {experience.title}
                        </h3>
                        <span className="text-muted-foreground font-mono text-sm">
                          {experience.period}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-accent font-medium">
                          {experience.company}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">
                          {experience.location}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">
                          {experience.description}
                        </p>
                        <ul className="text-muted-foreground space-y-1 ml-4">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx}>• {achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
