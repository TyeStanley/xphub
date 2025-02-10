import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import { seoKeywords } from '@/lib/seokeywords';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'XPHUB',
    template: '%s | XPHUB',
  },
  description: 'TRANSPARENCY ON EVERY LOAD, TRUST IN EVERY TURN',
  keywords: seoKeywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'XPHUB',
    description: 'TRANSPARENCY ON EVERY LOAD, TRUST IN EVERY TURN',
    url: 'https://xphub.com',
    siteName: 'XPHUB',
    images: [
      {
        url: 'https://xphub.com/truck-hero.png',
        width: 1200,
        height: 630,
        alt: 'XPHUB Preview Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} mt-[65px] overflow-x-hidden antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
