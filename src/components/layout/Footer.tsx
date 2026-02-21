'use client';

import { brand } from '@/lib/content';

export function Footer() {
  return (
    <footer className="bg-ink py-10">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-amber text-white rounded-md flex items-center justify-center font-bold text-xs font-display">
              SC
            </div>
            <span className="text-white/60 font-medium">Summit Concrete</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <a href={`tel:${brand.phone}`} className="hover:text-white/70 transition-all duration-300">{brand.phone}</a>
            <a href={`mailto:${brand.email}`} className="hover:text-white/70 transition-all duration-300">{brand.email}</a>
          </div>
          <p className="text-xs text-white/25">&copy; {new Date().getFullYear()} Summit Concrete</p>
        </div>
      </div>
    </footer>
  );
}
