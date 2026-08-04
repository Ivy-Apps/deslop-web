'use client';

import { Moon, Sun } from 'lucide-react';
import type { ReactNode } from 'react';

import { tw } from '@/components/design-system/colors';

/**
 * The `.dark` class on <html> is the source of truth — ThemeScript sets it
 * before first paint, long before React hydrates.
 *
 * Both icons are rendered and CSS picks one, rather than tracking the theme in
 * React state: state would be unknown during SSR and for the whole gap before
 * hydration, so a dark-mode visitor would see the wrong icon until the bundle
 * loaded.
 */
export default function ThemeToggle(): ReactNode {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // Private browsing can refuse writes. The toggle still works for this
      // page view; it just is not remembered.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      // Static label: the button's action is the same in both states, and a
      // state-dependent label cannot be rendered correctly before hydration.
      aria-label="Switch between light and dark theme"
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${tw.link.quiet} ${tw.bg.hover}`}
    >
      <Moon className="h-4 w-4 dark:hidden" aria-hidden />
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden />
    </button>
  );
}
