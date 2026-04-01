import { Roboto } from 'next/font/google';
import "../styles/globals.css";
import "../styles/projects.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata = {
  title: "Изготовление Сайтов на Заказ по России | Максим Иваненко | Портфолио Веб-разработчика",
  description: "Изготовление сайтов на заказ по всей России. Разработка адаптивных, современных и функциональных веб-сайтов для бизнеса и личных проектов: лендинги.",
  keywords: "создание сайтов на заказ, изготовление сайтов, веб-разработка, адаптивный сайт, дизайн, лендинг, HTML, CSS, JavaScript, сайты для бизнеса, заказ сайта, Россия",
  authors: [{ name: "Максим Иваненко" }],
  robots: "index, follow",
  openGraph: {
    title: "Изготовление Сайтов на Заказ | Максим Иваненко | Веб-разработка по всей России",
    description: "Профессиональное создание сайтов на заказ по всей России: лендинги, адаптивные сайты, корпоративные решения. Полный цикл разработки и примеры выполненных работ.",
    url: "https://ivanmax.ru/",
    images: [
      {
        url: "https://ivanmax.ru/static/media/me.fc403856d32d9ab52f7e.jpg",
      },
    ],
    type: "website",
  },
  themeColor: "#5c62ec",
  other: {
    "msapplication-TileColor": "#26292d",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={roboto.variable}>
      <head>
        <link rel="icon" href="/favicon.png" />
        {/* Yandex.Metrika counter */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(97388392, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/97388392"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}