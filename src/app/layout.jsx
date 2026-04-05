import { Roboto } from 'next/font/google';

import "@/styles/globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={roboto.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}