import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { tw } from '@/components/design-system/colors';
import { appText } from '@/components/design-system/typography';
import Footer from '@/components/Footer';
import ThemeScript from '@/components/ThemeScript';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Deslop — static import-graph analyzer for TypeScript',
  description:
    'Define architecture rules in YAML. Deslop checks them on every run, across every import. Free, open source, MIT licensed.',
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
