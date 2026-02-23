import { MaterialIcon } from "./Icons";

interface CrewCardProps {
  name: string;
  role: string;
  location: string;
  image: string;
  imageAlt: string;
  quote?: string;
  experience?: string;
  experienceDetail?: string;
  contentType: "quote" | "experience";
}

export function CrewCard({
  name,
  role,
  location,
  image,
  imageAlt,
  quote,
  experience,
  experienceDetail,
  contentType,
}: CrewCardProps) {
  return (
    <article className="group relative flex flex-col bg-dark-surface overflow-hidden border-2 border-dark-border hover:border-primary transition-colors duration-300">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
          role="img"
          aria-label={imageAlt}
          style={{ backgroundImage: `url("${image}")` }}
        />
        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none noise-overlay" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
      </div>
      <div className="p-6 flex flex-col gap-4 relative">
        <div className="absolute -top-5 left-6 bg-primary text-dark-bg font-black text-xs uppercase tracking-wider py-2 px-4 border-2 border-asphalt shadow-hard-sm transform group-hover:-translate-y-1 transition-transform">
          {role}
        </div>
        <div className="mt-2 flex flex-col">
          <h3 className="text-white text-2xl font-bold uppercase tracking-tight">
            {name}
          </h3>
          <div className="flex items-center gap-2 mt-1 text-dark-muted">
            <MaterialIcon name="location_on" className="text-sm" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Home Base: {location}
            </span>
          </div>
        </div>
        <div className="h-px w-full bg-dark-border" />
        {contentType === "quote" && quote && (
          <div className="flex items-start gap-3">
            <MaterialIcon
              name="format_quote"
              className="text-primary text-3xl opacity-50"
            />
            <p className="text-cured text-base font-medium italic leading-relaxed">
              {quote}
            </p>
          </div>
        )}
        {contentType === "experience" && experience && (
          <div className="flex flex-col gap-1">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-1">
              {name === "Trevon James" ? "Status" : "Experience"}
            </p>
            <p className="text-white text-2xl font-black uppercase leading-none">
              {experience}{" "}
              <br />
              <span className="text-dark-muted text-lg font-bold">
                {experienceDetail}
              </span>
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
