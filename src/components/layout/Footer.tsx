import Link from "next/link";
import { brand } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-asphalt text-cured py-6 sm:py-8 px-6 sm:px-8 lg:px-12 border-t-4 border-primary">
      <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_auto] md:items-start">
        <div className="min-w-0 space-y-2 text-[11px] sm:text-xs md:text-sm font-mono opacity-70">
          <div className="flex items-start gap-3">
            <MaterialIcon name="architecture" className="text-primary mt-0.5 shrink-0" />
            <p className="leading-relaxed break-words">
              &copy; {new Date().getFullYear()} SUMMIT CONCRETE INC. {"//"} ALL RIGHTS
              RESERVED
            </p>
          </div>
          <p className="pl-8 leading-relaxed break-words">
            {brand.address} {"//"} SERVICE AREA: {brand.region}
          </p>
        </div>

        <div className="min-w-0 space-y-1 text-[11px] sm:text-xs md:text-sm font-mono">
          <p className="uppercase tracking-wide text-rebar">Contact</p>
          <a href={`mailto:${brand.email}`} className="block break-all hover:text-primary transition-colors">
            {brand.email}
          </a>
          <a href={`tel:${brand.phone.replace(/[^0-9+]/g, "")}`} className="block break-words hover:text-primary transition-colors">
            {brand.phone}
          </a>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end text-[11px] sm:text-xs md:text-sm font-mono">
          <Link href="/privacy" className="hover:text-primary break-words">
            PRIVACY_PROTOCOL
          </Link>
          <Link href="/terms" className="hover:text-primary break-words">
            TERMS_OF_SERVICE
          </Link>
        </div>
      </div>
    </footer>
  );
}
