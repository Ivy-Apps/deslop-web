import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { tw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';

export type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  /**
   * `button` for the two primary calls to action; `inline` for the contextual
   * "this continues in the README" links that close each section.
   */
  variant?: 'inline' | 'button';
};

/**
 * Every outbound link is contextual — it names where it goes and what is there.
 * There is no repeated generic CTA, because the reader is being handed to the
 * repo, not funnelled through a conversion step.
 */
export default function ExternalLink({
  href,
  children,
  variant = 'inline',
}: ExternalLinkProps): ReactNode {
  if (variant === 'button') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 rounded-md border ${tw.border.default} ${tw.bg.surface} px-4 py-2 ${typeScale.bodySm} ${tw.text.primary} no-underline transition-colors ${tw.bg.hover}`}
      >
        {children}
        <ArrowUpRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 ${typeScale.bodySm} ${tw.link.accent}`}
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
    </a>
  );
}
