import type { ReactNode } from 'react';

import { tw } from '@/components/design-system/colors';

export function InlineCode({ children }: { children: ReactNode }): ReactNode {
  return (
    <code
      className={`rounded px-1.5 py-0.5 font-mono text-[0.9em] ${tw.bg.surfaceStrong} ${tw.text.primary}`}
    >
      {children}
    </code>
  );
}
