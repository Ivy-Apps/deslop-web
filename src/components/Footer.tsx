import DeslopWordmarkLink from '@/components/DeslopWordmarkLink';
import { GITHUB_DOCS_URL, POLAR_MANAGE_URL } from '@/lib/deslop';

export default function Footer() {
  return (
    <footer className="py-14 border-t border-white/10 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <DeslopWordmarkLink />
        <div className="flex flex-wrap justify-center gap-8 text-base text-zinc-400">
          <a href="/terms/v1" className="hover:text-white transition-colors">
            Terms & EULA
          </a>
          <a href="/privacy/v1" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="/contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a
            href={GITHUB_DOCS_URL}
            className="hover:text-white transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            Docs
          </a>
          <a
            href={POLAR_MANAGE_URL}
            className="hover:text-white transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            Manage Subscription
          </a>
        </div>
        <p className="text-base text-zinc-500">
          © 2026 Ivy Apps Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
