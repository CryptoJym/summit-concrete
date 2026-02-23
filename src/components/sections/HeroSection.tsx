import Image from "next/image";
import { heroContent } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[calc(100vh-140px)] min-h-[600px] border-b-2 border-asphalt">
      {/* Left: Typography Zone - 60% */}
      <div className="w-full lg:w-[60%] bg-cured flex flex-col justify-center p-6 md:p-12 lg:p-16 relative border-b-2 lg:border-b-0 lg:border-r-2 border-asphalt">
        <div className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-2">
          <span className="w-2 h-2 bg-asphalt rounded-full animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-widest text-asphalt/70">
            {heroContent.badge}
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-10 lg:mt-0 z-10">
          <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.85] font-black tracking-[-0.03em] uppercase transition-all duration-0 cursor-default select-none">
            {heroContent.headlines.map((line) => (
              <span key={line} className="block hero-text-stroke">
                {line}
              </span>
            ))}
          </h1>
        </div>
        <div className="mt-12 max-w-md">
          <p className="font-mono text-sm md:text-base leading-relaxed border-l-2 border-primary pl-4">
            {heroContent.description}
          </p>
          <div className="mt-8 flex gap-4">
            <Button href="/capabilities">{heroContent.cta}</Button>
          </div>
        </div>
      </div>
      {/* Right: Image Zone - 40% */}
      <div className="w-full lg:w-[40%] bg-asphalt relative overflow-hidden group min-h-[400px] lg:min-h-0">
        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none z-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt/80 via-transparent to-asphalt/30 z-10 pointer-events-none" />
        {/* Live Feed Badge */}
        <div className="absolute top-6 right-6 z-30 bg-alert text-white text-xs font-mono font-bold px-2 py-1 border border-white/20 flex items-center gap-2">
          <MaterialIcon name="videocam" className="text-[14px] animate-pulse" />
          {heroContent.liveFeed.label}
        </div>
        {/* Camera Metadata */}
        <div className="absolute bottom-6 left-6 z-30 font-mono text-xs text-primary/80 flex flex-col gap-1 pointer-events-none">
          {Object.entries(heroContent.liveFeed.camera).map(([key, val]) => (
            <div key={key} className="flex justify-between w-48 border-b border-primary/30 pb-1">
              <span>{key.toUpperCase()}:</span>
              <span>{val}</span>
            </div>
          ))}
        </div>
        {/* Image */}
        <Image
          src={heroContent.heroImage}
          alt={heroContent.heroImageAlt}
          fill
          className="object-cover filter grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
