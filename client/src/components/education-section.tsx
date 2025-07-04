import { education } from "@/lib/data";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12 slide-up">
          <h2 className="section-title text-4xl font-bold">/education</h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 flex flex-col items-center">
                    <div className="changelog-version bg-background text-accent border-accent">
                      {edu.version}
                    </div>
                    {index < education.length - 1 && (
                      <div className="timeline-line-yellow w-px h-24 mt-4"></div>
                    )}
                  </div>
                  <div className="timeline-card flex-1 bg-background/50 rounded-lg p-6 border border-border">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 className="text-xl font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <span className="text-muted-foreground font-mono text-sm">
                          {edu.period}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-accent font-medium">
                          {edu.institution}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">
                          {edu.location}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">
                          {edu.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {edu.subjects.map((subject, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
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
