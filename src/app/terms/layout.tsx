import type { ReactNode } from 'react';

export default function TermsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">{children}</div>
    </div>
  );
}
