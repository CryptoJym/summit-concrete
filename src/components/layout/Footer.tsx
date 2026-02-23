import Link from "next/link";
import { MaterialIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-asphalt text-cured py-2 px-4 border-t-4 border-primary">
      <div className="flex flex-col md:flex-row justify-between items-center text-xs font-mono opacity-60">
        <div className="flex items-center gap-4">
          <MaterialIcon name="architecture" className="text-primary" />
          <p>
            &copy; {new Date().getFullYear()} SUMMIT CONCRETE INC. // ALL RIGHTS
            RESERVED
          </p>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/privacy" className="hover:text-primary">
            PRIVACY_PROTOCOL
          </Link>
          <Link href="/terms" className="hover:text-primary">
            TERMS_OF_SERVICE
          </Link>
        </div>
      </div>
    </footer>
  );
}
