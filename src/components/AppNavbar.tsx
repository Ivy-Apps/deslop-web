'use client';

import { Menu, X } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';

import { DeslopWordmark } from '@/components/DeslopLogo';
import DeslopWordmarkLink from '@/components/DeslopWordmarkLink';
import { tw as baseTw } from '@/components/design-system/colors';

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavCta = {
  label: string;
  href: string;
};

export type AppNavbarProps = {
  links: NavLink[];
  cta?: NavCta;
  /** When true, clicking the logo smooth-scrolls to the top instead of navigating to /. */
  logoScrollToTop?: boolean;
};

function NavLinkItem({
  link,
  variant,
  onClick,
}: {
  link: NavLink;
  variant: 'desktop' | 'mobile';
  onClick?: () => void;
}): ReactNode {
  const externalProps = link.external
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  if (variant === 'desktop') {
    return (
      <a
        href={link.href}
        {...externalProps}
        className="text-base text-zinc-400 hover:text-zinc-100 transition-colors px-3 py-2 rounded-md hover:bg-white/[0.04]"
      >
        {link.label}
      </a>
    );
  }

  return (
    <a
      href={link.href}
      {...externalProps}
      className="text-xl text-zinc-400 hover:text-zinc-100 transition-colors text-left py-1"
      onClick={onClick}
    >
      {link.label}
    </a>
  );
}

export default function AppNavbar({
  links,
  cta,
  logoScrollToTop = false,
}: AppNavbarProps): ReactNode {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolidNav = isScrolled || isMobileMenuOpen;
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const logo = logoScrollToTop ? (
    <DeslopWordmark
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeMobileMenu();
      }}
    />
  ) : (
    <DeslopWordmarkLink />
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,padding,border-color] duration-300 ${isSolidNav ? 'border-zinc-800/60 bg-zinc-950/95 py-3' : 'border-transparent bg-transparent py-5 md:py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {logo}

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <NavLinkItem key={link.label} link={link} variant="desktop" />
          ))}
          {cta && (
            <a href={cta.href} className="ml-3">
              <button
                type="button"
                className={`inline-flex items-center justify-center bg-white text-zinc-950 px-5 py-2.5 rounded-full text-base font-medium ring-1 ring-white/20 transition-all hover:bg-zinc-100 ${baseTw.effects.brandShadowHover}`}
              >
                {cta.label}
              </button>
            </a>
          )}
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
          {links.map((link) => (
            <NavLinkItem
              key={link.label}
              link={link}
              variant="mobile"
              onClick={closeMobileMenu}
            />
          ))}
          {cta && (
            <a
              href={cta.href}
              className="mt-2 inline-flex items-center justify-center bg-white text-zinc-950 px-5 py-2.5 rounded-full text-base font-medium w-fit ring-1 ring-white/20 transition-all hover:bg-zinc-100"
              onClick={closeMobileMenu}
            >
              {cta.label}
            </a>
          )}
        </div>
      )}
    </nav>
  );
}
