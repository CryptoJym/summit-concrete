import { MaterialIcon } from "./Icons";

interface JobCardProps {
  id: string;
  title: string;
  status: string;
  location: string;
  quantity: string;
  aspect: "4/3" | "3/4" | "square" | "16/9" | "4/5";
  image: string;
  imageAlt: string;
  imageFilename: string;
}

const aspectClasses: Record<string, string> = {
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  square: "aspect-square",
  "16/9": "aspect-[16/9]",
  "4/5": "aspect-[4/5]",
};

export function JobCard({
  id,
  title,
  status,
  location,
  quantity,
  aspect,
  image,
  imageAlt,
  imageFilename,
}: JobCardProps) {
  return (
    <div className="job-card border-2 border-asphalt bg-white shadow-hard break-inside-avoid relative group cursor-pointer">
      <div
        className={`relative overflow-hidden border-b-2 border-asphalt ${aspectClasses[aspect]}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={imageAlt}
          className="card-img w-full h-full object-cover grayscale transition-all duration-0"
          src={image}
        />
        <div className="absolute top-2 right-2 bg-asphalt text-white px-2 py-0.5 text-xs font-mono border border-white">
          {imageFilename}
        </div>
      </div>
      <div className="p-4 bg-surface">
        <div className="font-mono text-xs text-rebar mb-1 border-b border-rebar/30 pb-1 flex justify-between">
          <span>JOB_ID: #{id}</span>
          <span>STATUS: {status}</span>
        </div>
        <h3 className="font-display text-2xl font-bold leading-none mb-3 mt-2 uppercase">
          {title}
        </h3>
        <div className="grid grid-cols-2 gap-px bg-rebar border border-rebar mb-4">
          <div className="bg-surface p-2">
            <div className="text-[10px] text-rebar font-mono">LOC</div>
            <div className="text-sm font-bold font-mono">{location}</div>
          </div>
          <div className="bg-surface p-2">
            <div className="text-[10px] text-rebar font-mono">QTY</div>
            <div className="text-sm font-bold font-mono">{quantity}</div>
          </div>
        </div>
        <button className="w-full bg-primary border-2 border-asphalt py-3 px-4 flex items-center justify-between hover:bg-asphalt hover:text-primary transition-colors group/btn">
          <span className="font-display text-sm font-bold tracking-wider">
            VIEW SPECS
          </span>
          <MaterialIcon
            name="arrow_forward"
            className="text-lg group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}
