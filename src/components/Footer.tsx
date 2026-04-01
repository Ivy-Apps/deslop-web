import { DeslopLogo } from '@/components/DeslopLogo';

export default function Footer() {
  return (
    <footer className="py-14 border-t border-white/10 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <DeslopLogo />
        <div className="flex flex-wrap justify-center gap-8 text-base text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition-colors">
            GitHub
          </a>
        </div>
        <p className="text-base text-zinc-500">
          © 2026 Deslop Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
