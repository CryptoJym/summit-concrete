"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/Icons";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-cured border-b-2 border-asphalt h-20 flex items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-asphalt text-primary flex items-center justify-center">
            <MaterialIcon name="architecture" size={20} />
          </div>
          <Link
            href="/"
            className="text-xl md:text-2xl font-black tracking-tighter uppercase leading-none hover:text-primary hover:bg-asphalt px-1 transition-colors duration-0"
          >
            SUMMIT CONCRETE
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navigation
            .filter((n) => n.href !== "/quote")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wide py-1 border-b-2 transition-colors duration-0 ${
                  pathname === link.href
                    ? "border-asphalt"
                    : "border-transparent hover:border-asphalt"
                }`}
              >
                {link.label}
              </Link>
            ))}
          <Link
            href="/quote"
            className="bg-transparent border-2 border-asphalt text-asphalt px-6 h-10 text-sm font-bold uppercase tracking-wide inline-flex items-center hover:bg-asphalt hover:text-primary hover:shadow-hard transition-all duration-0 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Request Bid
          </Link>
        </nav>

        <button
          className="md:hidden p-2 border-2 border-asphalt hover:bg-asphalt hover:text-primary transition-colors duration-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <MaterialIcon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-asphalt"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
          />
          <nav aria-label="Mobile navigation" className="absolute top-20 inset-x-0 px-4 sm:px-6">
            <div className="bg-cured border-2 border-asphalt shadow-hard overflow-hidden">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-5 py-4 text-sm font-bold uppercase tracking-wide border-b border-asphalt/20 ${
                    pathname === link.href ? "bg-primary text-asphalt" : "hover:bg-primary/35"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
