import type { ReactNode } from 'react';

export function InlineCode({ children }: { children: ReactNode }): ReactNode {
  return (
    <code className="text-[0.9em] text-zinc-200 bg-white/10 px-1 py-0.5 rounded font-mono">
      {children}
    </code>
  );
}
