import { hobbies } from "@/lib/data";

export default function WhenNotWorkingSection() {
  return (
    <section id="when-not-working" className="py-16 px-6">
      <div className="space-y-12 slide-up">
        <h2 className="section-title text-4xl font-bold">/out of office</h2>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {hobbies.map((hobby) => (
            <div key={hobby.name} className="space-y-3">
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                <img
                  src={hobby.image}
                  alt={hobby.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">{hobby.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
