import "@/app/styles/global.scss";

import { Roboto } from 'next/font/google';
import type { ReactNode } from 'react';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={roboto.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}