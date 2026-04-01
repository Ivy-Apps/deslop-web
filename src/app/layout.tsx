import type {Metadata} from 'next';
import type {ReactNode} from 'react';

import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Deslop',
  description: 'Remove the slop from your codebase.',
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
