import DeslopWordmarkLink from '@/components/DeslopWordmarkLink';

export default function Footer() {
  return (
    <footer className="py-14 border-t border-white/10 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <DeslopWordmarkLink />
        <div className="flex flex-wrap justify-center gap-8 text-base text-zinc-400">
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="/terms" className="hover:text-white transition-colors">
            Terms
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-white transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            className="hover:text-white transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
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
