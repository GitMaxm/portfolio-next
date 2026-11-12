import "@/app/styles/global.scss";

import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import type { ReactNode } from 'react';

import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '@/shared/config';

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-onest',
  display: 'swap',
});

export const metadata: Metadata = {

  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,

    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: '/img/og/cover.png', width: 1200, height: 630, alt: SITE_TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/img/og/cover.png'],
  },
  other: {
    'msapplication-TileColor': '#26292d',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={onest.variable}>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
