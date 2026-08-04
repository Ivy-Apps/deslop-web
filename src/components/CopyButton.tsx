'use client';

import { Check, Copy } from 'lucide-react';
import { type ReactNode, useEffect, useRef, useState } from 'react';

import { tw } from '@/components/design-system/colors';

type CopyButtonProps = {
  text: string;
  className?: string;
};

export default function CopyButton({
  text,
  className = '',
}: CopyButtonProps): ReactNode {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Without this, navigating away mid-timeout sets state on an unmounted tree.
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Denied clipboard permission or a non-secure origin. The command is
      // visible and selectable either way, so fail quietly.
      return;
    }
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-md ${tw.link.quiet} hover:bg-zinc-100 dark:hover:bg-white/[0.06] ${className}`}
    >
      {copied ? (
        <Check className={`h-4 w-4 ${tw.result.pass}`} aria-hidden />
      ) : (
        <Copy className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
