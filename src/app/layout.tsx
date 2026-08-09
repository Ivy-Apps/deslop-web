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
 * The card image carries the definition, so `openGraph.title` carries the claim
 * instead - it is rendered directly beside the image, and repeating the
 * definition there would spend the whole unfurl on one sentence. The browser
 * `title` stays the definition, because that is what a search result needs.
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
    title: 'Catches what a linter structurally cannot',
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catches what a linter structurally cannot',
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
