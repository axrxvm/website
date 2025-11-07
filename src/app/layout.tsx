import '@/styles/globals.css';

import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aarav M. | Portfolio',
  description: 'A full stack developer based in India.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest'
};

export const viewport: Viewport = {
  themeColor: '#f5a658'
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
