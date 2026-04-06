import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="space-y-12 slide-up">
          <h2 className="section-title text-4xl font-bold">/experience</h2>

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {experience.title}
                  </h3>
                  <span className="text-muted-foreground text-sm">
                    {experience.period}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-muted-foreground font-medium">
                    {experience.company}
                  </span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">
                    {experience.location}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {experience.description}
                </p>
                <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx}>— {achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
