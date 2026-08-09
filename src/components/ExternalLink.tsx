import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { tw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';

export type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  /**
   * `button` for the two primary calls to action; `inline` for the contextual
   * "this continues in the README" links that close each section; `text` for a
   * link on a word inside a sentence.
   */
  variant?: 'inline' | 'button' | 'text';
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
  switch (variant) {
    case 'button':
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-11 items-center gap-1.5 rounded-md border sm:min-h-0 ${tw.border.default} ${tw.bg.surface} px-4 py-2 ${typeScale.bodySm} ${tw.text.primary} no-underline transition-colors ${tw.bg.hover}`}
        >
          {children}
          <ArrowUpRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
        </a>
      );
    /*
     * No arrow and no size of its own: mid-sentence, the icon breaks the line's
     * rhythm and a fixed size fights whatever type scale the paragraph is set
     * in. The accent colour is enough to mark it as outbound.
     */
    case 'text':
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={tw.link.accent}
        >
          {children}
        </a>
      );
    /*
     * A touch-sized box below `sm`. This variant closes a section rather than
     * sitting inside a sentence, so growing it costs no line rhythm - unlike
     * `text`, which is left alone deliberately (WCAG 2.2 SC 2.5.8 exempts links
     * inline in prose, and there is no way to enlarge one without wrecking the
     * paragraph around it).
     */
    case 'inline':
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-11 items-center gap-1 sm:min-h-0 ${typeScale.bodySm} ${tw.link.accent}`}
        >
          {children}
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
        </a>
      );
  }
}
