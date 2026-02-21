'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyBar } from '@/components/layout/StickyBar';
import {
  HeroSection,
  ProcessSection,
  ProofSection,
  ContactSection,
} from '@/components/sections';
export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  // Scrollspy effect
  useEffect(() => {
    const sections = ['hero', 'process', 'proof', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-base selection:bg-amber selection:text-white">
      <Header
        activeSection={activeSection}
      />

      <HeroSection />

      <ProofSection />

      <ProcessSection />

      {/* PricingSection removed as it was B2B content */}

      <ContactSection />

      <Footer />

      <StickyBar />
    </main>
  );
}
