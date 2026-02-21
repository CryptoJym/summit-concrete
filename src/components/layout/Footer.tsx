'use client';

import { brand } from '@/lib/content';

export function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-8">
      <div className="container-main">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-amber text-white flex items-center justify-center font-bold text-sm font-display">
                SC
              </div>
              <span className="text-lg font-bold text-white font-display">Summit Concrete</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Professional concrete tear-out and replacement across Utah.
              Licensed, insured, and built to last.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href={`tel:${brand.phone}`} className="block text-white/50 hover:text-amber transition-colors">
                {brand.phone}
              </a>
              <a href={`mailto:${brand.email}`} className="block text-white/50 hover:text-amber transition-colors">
                {brand.email}
              </a>
              <p className="text-white/50">Mon-Sat: 7am-7pm</p>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Service Area</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-white/50">
              {['Salt Lake City', 'Park City', 'Sandy / Draper', 'Orem / Provo', 'Lehi', 'Heber City'].map(city => (
                <span key={city}>{city}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Summit Concrete. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
