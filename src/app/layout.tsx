import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { tw } from '@/components/design-system/colors';
import { appText } from '@/components/design-system/typography';
import Footer from '@/components/Footer';
import ThemeScript from '@/components/ThemeScript';
import '@/app/globals.css';

const DESCRIPTION =
  'Define architecture rules in YAML. Deslop checks them on every run, across every import. Free, open source, MIT licensed.';

/**
 * The two halves of an unfurl say different things on purpose.
 *
 * The card image carries the definition, so `openGraph.title` carries the
 * use-case instead - it is rendered directly beside the image, and repeating
 * the definition there would spend the whole unfurl on one sentence. The
 * browser `title` stays the definition, because that is what a search result
 * needs.
 *
 * Naming the AI era in the title is only safe because of that split. Read on
 * its own it invites "so this is an AI tool", which is the one thing Deslop is
 * not; read beside a card that says "static import-graph analyzer" and shows
 * deterministic CLI output, the era is clearly the problem being solved rather
 * than the technique. The title cannot be lifted away from the image without
 * reintroducing that ambiguity.
 *
 * `metadataBase` is what turns the relative image path Next generates from
 * opengraph-image.tsx into the absolute URL every crawler requires.
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://deslop.dev'),
  title: 'Deslop - static import-graph analyzer for TypeScript',
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Deslop',
    title: 'Architecture guardrails for the AI era',
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architecture guardrails for the AI era',
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  // Paints the browser UI (Android Chrome's nav bar, Safari's chrome) to match
  // whichever theme the visitor is actually in.
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#18181b' },
  ],
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${appText.shell} ${tw.bg.page}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
