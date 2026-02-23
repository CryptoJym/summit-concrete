import { brand, quoteFormFields } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { MaterialIcon } from "@/components/ui/Icons";

export function QuoteInfo() {
  return (
    <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-asphalt bg-surface flex flex-col justify-between relative">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <span className="font-display text-9xl font-black leading-none">04</span>
      </div>
      <div className="space-y-8 relative z-10">
        <div>
          <Badge variant="yellow" className="mb-4">
            {quoteFormFields.sectionLabel}
          </Badge>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
            ESTIMATE<br />PROTOCOL
          </h1>
          <p className="font-mono text-sm md:text-base max-w-md leading-relaxed border-l-4 border-primary pl-4 text-asphalt/80">
            {quoteFormFields.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t-2 border-rebar/30">
          <div className="space-y-2">
            <h3 className="font-mono text-xs text-rebar uppercase font-bold">HQ LOCATION</h3>
            <p className="font-bold text-lg">{brand.city}</p>
            <p className="font-mono text-sm">{brand.address}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-mono text-xs text-rebar uppercase font-bold">DIRECT LINE</h3>
            <p className="font-bold text-lg">{brand.phone}</p>
            <p className="font-mono text-sm text-green-700 flex items-center gap-1">
              <MaterialIcon name="fiber_manual_record" className="text-sm" />
              OPERATIONAL
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-mono text-xs text-rebar uppercase font-bold">DIGITAL COMMS</h3>
            <p className="font-bold text-lg underline decoration-2 decoration-primary underline-offset-4">
              {brand.email.toUpperCase()}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-mono text-xs text-rebar uppercase font-bold">HOURS</h3>
            <p className="font-mono text-sm">{brand.hours.weekday}</p>
            <p className="font-mono text-sm">{brand.hours.saturday}</p>
          </div>
        </div>
      </div>
      <div className="mt-12 lg:mt-0 pt-8">
        <div className="flex items-center gap-2 font-mono text-xs text-rebar">
          <MaterialIcon name="verified_user" className="text-base" />
          <span>{quoteFormFields.encryptedBadge}</span>
        </div>
      </div>
    </div>
  );
}
