import { Roboto } from 'next/font/google';

import "@/styles/globals.css";
import "@/styles/projects.css";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata = {
  title: "Максим Иваненко | Веб-разработчик | Портфолио и Проекты",
  description: "Портфолио веб-разработчика Максима Иваненко. Проекты, опыт и навыки: от адаптивной вёрстки до работы с React и Next.js. Современные сайты и интерфейсы.",
  keywords: "Максим Иваненко, веб-разработчик, портфолио, проекты, фронтенд, HTML, CSS, JavaScript, React, Next.js, верстальщик, интерфейсы, адаптивная вёрстка",
  authors: [{ name: "Максим Иваненко" }],
  robots: "index, follow",
  openGraph: {
    title: "Максим Иваненко | Веб-разработчик | Портфолио",
    description: "Проекты и опыт Максима Иваненко — верстка, React, Next.js. Портфолио с примерами работы и технологическим стеком.",
    url: "https://ivanmax.ru/",
    images: [
      {
        url: "https://ivanmax.ru/img/og/me.png",
      },
    ],
    type: "website",
  },
  other: {
    "msapplication-TileColor": "#26292d",
  },
};

export const viewport = {
  themeColor: "#5c62ec",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={roboto.variable}>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}