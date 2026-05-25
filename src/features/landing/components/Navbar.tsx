'use client';

import { Menu, X } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';

import { DeslopWordmark } from '@/components/DeslopLogo';
import { tw as baseTw } from '@/components/design-system/colors';
import { GITHUB_DOCS_URL } from '@/lib/deslop';

const NAV_LINKS = [
  { label: 'The Problem', href: '#problem' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: GITHUB_DOCS_URL, external: true },
] as const;

export default function Navbar(): ReactNode {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolidNav = isScrolled || isMobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,backdrop-filter,padding,border-color] duration-300 ${isSolidNav ? 'border-zinc-800/60 bg-zinc-950/85 backdrop-blur-xl py-3' : 'border-transparent bg-transparent py-5 md:py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <DeslopWordmark
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...('external' in link && link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="text-base text-zinc-400 hover:text-zinc-100 transition-colors px-3 py-2 rounded-md hover:bg-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
          <a href="/get-started" className="ml-3">
            <button
              type="button"
              className={`inline-flex items-center justify-center bg-white text-zinc-950 px-5 py-2.5 rounded-full text-base font-medium ring-1 ring-white/20 transition-all hover:bg-zinc-100 ${baseTw.effects.brandShadowHover}`}
            >
              Get Started
            </button>
          </a>
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

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...('external' in link && link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="text-xl text-zinc-400 hover:text-zinc-100 transition-colors text-left py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/get-started"
            className="mt-2 inline-flex items-center justify-center bg-white text-zinc-950 px-5 py-2.5 rounded-full text-base font-medium w-fit ring-1 ring-white/20 transition-all hover:bg-zinc-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
