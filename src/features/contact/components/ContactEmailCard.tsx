'use client';

import { Check, Copy, Mail } from 'lucide-react';
import { type ReactNode, useState } from 'react';

import { tw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';

type Props = {
  email: string;
};

export default function ContactEmailCard({ email }: Props): ReactNode {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl border ${tw.border.default} bg-white/[0.02] hover:bg-white/[0.04] transition-colors group mb-12 cursor-pointer`}
    >
      <Mail className={`h-5 w-5 ${tw.text.brandPrimary} shrink-0`} />
      <span className={`${typeScale.bodyLg} font-semibold ${tw.text.primary}`}>
        {email}
      </span>
      <span
        className={`ml-1 inline-flex items-center gap-1 text-sm font-medium transition-colors ${
          copied ? 'text-green-400' : `${tw.text.muted} group-hover:text-zinc-200`
        }`}
      >
        {copied ? (
          <Check className="h-4 w-4" strokeWidth={2.5} />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        {copied ? 'Copied!' : 'Copy'}
      </span>
    </button>
  );
}
