import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Deslop: fix AI slop',
  description: 'You AI writes code. Deslop makes it good.',
};

/** Paints Android Chrome’s bottom nav / gesture bar to match the page (avoids a white strip). */
export const viewport: Viewport = {
  themeColor: '#09090b',
  colorScheme: 'dark',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
