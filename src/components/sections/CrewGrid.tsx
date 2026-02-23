import { crewMembers, crewPage } from "@/lib/content";
import { CrewCard } from "@/components/ui/CrewCard";
import { Button } from "@/components/ui/Button";
import { MaterialIcon } from "@/components/ui/Icons";

export function CrewGrid() {
  return (
    <>
      <section className="relative px-4 lg:px-40 py-12 lg:py-16 bg-asphalt">
        <div className="max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {crewMembers.map((member) => (
            <CrewCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-dark-bg border-t border-dark-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 bg-dark-surface p-10 border-2 border-dark-border relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <MaterialIcon name="construction" className="text-9xl text-white" />
          </div>
          <div className="flex flex-col gap-2 z-10">
            <h2 className="text-white text-3xl font-black uppercase tracking-tight">
              {crewPage.ctaHeading}
            </h2>
            <p className="text-dark-muted text-lg">{crewPage.ctaDescription}</p>
          </div>
          <div className="flex-shrink-0 z-10">
            <Button href="/quote" variant="primary" size="lg">
              {crewPage.ctaButton}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
