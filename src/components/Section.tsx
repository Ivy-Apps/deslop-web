import type { ReactNode } from 'react';

import { tw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';

export type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  /** Contextual link closing the section — usually deeper into the README. */
  footer?: ReactNode;
};

/**
 * One column, one width, one rhythm. Sections are separated by a rule rather
 * than by alternating background colours, which is what made the previous page
 * read as a stack of marketing panels.
 */
export default function Section({
  id,
  title,
  children,
  footer,
}: SectionProps): ReactNode {
  return (
    <section id={id} className={`border-t ${tw.border.default}`}>
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <h2 className={`${typeScale.sectionTitle} ${tw.text.primary}`}>
          {title}
        </h2>
        <div className="mt-6">{children}</div>
        {footer && <div className="mt-8">{footer}</div>}
      </div>
    </section>
  );
}
