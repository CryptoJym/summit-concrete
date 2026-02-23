import { crewPage } from "@/lib/content";

export function CrewHero() {
  return (
    <section className="relative px-4 lg:px-40 py-12 lg:py-20 border-b border-dark-border">
      <div className="relative z-10 max-w-[960px] mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
            <span className="h-[2px] w-8 bg-primary block" />
            {crewPage.badge}
          </div>
          <h1 className="text-white text-5xl lg:text-7xl font-black leading-[0.9] tracking-[-0.04em] uppercase">
            {crewPage.heading}{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rebar to-dark-muted">
              {crewPage.headingGradient}
            </span>
          </h1>
          <p className="text-dark-muted text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mt-4">
            {crewPage.description}
          </p>
        </div>
      </div>
    </section>
  );
}
