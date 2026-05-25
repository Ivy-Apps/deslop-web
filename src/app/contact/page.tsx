import { Bug, Mail, MessageSquare, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

import { tw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';

export const dynamic = 'force-static';

const CONTACT_EMAIL = 'deslop@ivy-apps.com';
const GITHUB_NEW_ISSUE_URL = 'https://github.com/Ivy-Apps/deslop/issues/new/choose';

export default function ContactPage(): ReactNode {
  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <p className={`text-sm font-medium uppercase tracking-widest ${tw.text.brandPrimary} mb-4`}>
          Contact
        </p>
        <h1 className={`${typeScale.displayLg} mb-4 ${tw.gradient.lightText}`}>
          Get in touch
        </h1>
        <p className={`${typeScale.bodyLg} ${tw.text.muted} mb-10`}>
          Interested in an Enterprise plan or have a question? We&apos;d love to
          hear from you.
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl border ${tw.border.default} bg-white/[0.02] hover:bg-white/[0.04] transition-colors group mb-12`}
        >
          <Mail className={`h-5 w-5 ${tw.text.brandPrimary} shrink-0`} />
          <span
            className={`${typeScale.bodyLg} font-semibold ${tw.text.primary} group-hover:underline`}
          >
            {CONTACT_EMAIL}
          </span>
        </a>

        <div className="border-t border-white/10 pt-10">
          <p className={`text-sm font-medium uppercase tracking-widest ${tw.text.muted} mb-6`}>
            Community
          </p>
          <div className="flex flex-col gap-4">
            <a
              href={GITHUB_NEW_ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl border ${tw.border.default} bg-white/[0.02] hover:bg-white/[0.04] transition-colors group`}
            >
              <Bug className={`h-5 w-5 text-red-400 shrink-0`} />
              <div>
                <p className={`font-semibold ${tw.text.primary} group-hover:underline`}>Report a Bug</p>
                <p className={`text-sm ${tw.text.muted}`}>Found something broken? Let us know.</p>
              </div>
            </a>
            <a
              href={GITHUB_NEW_ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl border ${tw.border.default} bg-white/[0.02] hover:bg-white/[0.04] transition-colors group`}
            >
              <Sparkles className={`h-5 w-5 text-yellow-400 shrink-0`} />
              <div>
                <p className={`font-semibold ${tw.text.primary} group-hover:underline`}>Request a Feature</p>
                <p className={`text-sm ${tw.text.muted}`}>Have an idea? We&apos;d love to hear it.</p>
              </div>
            </a>
            <a
              href={GITHUB_NEW_ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl border ${tw.border.default} bg-white/[0.02] hover:bg-white/[0.04] transition-colors group`}
            >
              <MessageSquare className={`h-5 w-5 ${tw.text.brandPrimary} shrink-0`} />
              <div>
                <p className={`font-semibold ${tw.text.primary} group-hover:underline`}>Share Feedback</p>
                <p className={`text-sm ${tw.text.muted}`}>Tell us what&apos;s working and what isn&apos;t.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
