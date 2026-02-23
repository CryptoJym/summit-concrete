import { brand } from "@/lib/content";

const mapsQuery = encodeURIComponent(`Summit Concrete ${brand.city} Utah`);
const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
const mapsExternalHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export function ContactMap() {
  return (
    <section
      aria-labelledby="service-area-map-heading"
      className="w-full bg-surface border-2 border-asphalt shadow-hard p-4 md:p-6 lg:p-8"
    >
      <div className="flex flex-col gap-2 mb-4">
        <h2
          id="service-area-map-heading"
          className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight"
        >
          Service Area Map
        </h2>
        <p className="font-mono text-xs md:text-sm text-asphalt/80 leading-relaxed break-words">
          Based in {brand.city}. Serving {brand.region}.
        </p>
      </div>

      <div className="relative w-full overflow-hidden border-2 border-asphalt aspect-[16/10] md:aspect-[16/8]">
        <iframe
          title="Google Maps service area for Summit Concrete in Orem, Utah"
          src={mapsEmbedSrc}
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="mt-4 font-mono text-xs md:text-sm">
        <a
          href={mapsExternalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-primary transition-colors"
        >
          Open this map in Google Maps
        </a>
      </p>
    </section>
  );
}
