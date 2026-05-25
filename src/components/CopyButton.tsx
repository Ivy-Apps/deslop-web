'use client';

import { Check, Copy } from 'lucide-react';
import { type ReactNode, useState } from 'react';

type CopyButtonProps = {
  text: string;
  className?: string;
};

export default function CopyButton({
  text,
  className = '',
}: CopyButtonProps): ReactNode {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
        copied
          ? 'bg-green-500/20 text-green-400'
          : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200'
      } ${className}`}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}
