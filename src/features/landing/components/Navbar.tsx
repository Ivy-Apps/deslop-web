'use client';

import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { type ReactNode, useEffect, useState } from 'react';

import { DeslopWordmark } from '@/components/DeslopLogo';

export default function Navbar(): ReactNode {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const isSolidNav = isScrolled || isMobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSolidNav ? 'bg-zinc-950/85 backdrop-blur-xl border-b border-white/[0.06] py-3' : 'bg-transparent py-5 md:py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <DeslopWordmark
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        <div className="hidden md:flex items-center gap-1">
          <a
            href="#features"
            className="text-base text-zinc-400 hover:text-zinc-100 transition-colors px-3 py-2 rounded-md hover:bg-white/[0.04]"
          >
            Features
          </a>
          <a
            href="#integrations"
            className="text-base text-zinc-400 hover:text-zinc-100 transition-colors px-3 py-2 rounded-md hover:bg-white/[0.04]"
          >
            Integrations
          </a>
          <a
            href="#pricing"
            className="text-base text-zinc-400 hover:text-zinc-100 transition-colors px-3 py-2 rounded-md hover:bg-white/[0.04]"
          >
            Pricing
          </a>
          <button
            type="button"
            className="ml-3 bg-white text-zinc-950 px-5 py-2.5 rounded-full text-base font-medium hover:bg-zinc-100 transition-colors ring-1 ring-white/10"
          >
            Get Deslop
          </button>
        </div>

        <button
          type="button"
          className="md:hidden text-white p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <button
              type="button"
              className="text-xl text-zinc-400 hover:text-zinc-100 transition-colors text-left py-1"
              onClick={() => navigateToSection('features')}
            >
              Features
            </button>
            <button
              type="button"
              className="text-xl text-zinc-400 hover:text-zinc-100 transition-colors text-left py-1"
              onClick={() => navigateToSection('integrations')}
            >
              Integrations
            </button>
            <button
              type="button"
              className="text-xl text-zinc-400 hover:text-zinc-100 transition-colors text-left py-1"
              onClick={() => navigateToSection('pricing')}
            >
              Pricing
            </button>
            <button
              type="button"
              className="mt-2 bg-white text-zinc-950 px-5 py-2.5 rounded-full text-base font-medium hover:bg-zinc-100 transition-colors ring-1 ring-white/10 text-left w-fit"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Deslop
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
