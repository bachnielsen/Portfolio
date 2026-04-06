import { education } from "@/lib/data";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 px-6">
      <div className="space-y-12 slide-up">
          <h2 className="section-title text-4xl font-bold">/education</h2>

          <div className="space-y-10">
            {education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <span className="text-muted-foreground text-sm">
                    {edu.period}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-muted-foreground font-medium">
                    {edu.institution}
                  </span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">
                    {edu.location}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {edu.description}
                </p>
                {edu.subjects.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {edu.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
