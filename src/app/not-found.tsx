import './(main)/styles/main.scss';

import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import { assetPath } from '@/shared/config';
import { THEME_INIT_SCRIPT } from '@/shared/ui/main';
import { Footer } from '@/widgets/main/footer';
import { NavBar } from '@/widgets/main/navbar';

import styles from './styles/not-found.module.css';

export const metadata: Metadata = {
  title: 'Страница не найдена',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}/>

      <NavBar/>

      <main className={styles.page}>
        <div className={`container ${styles.wrapper}`}>
          <p className={styles.code} aria-hidden="true">
            <span>4</span>
            <span className={styles.gifWrap}>
              <img src={assetPath('/img/404/404.gif')} alt="" className={styles.gif}/>
            </span>
            <span>4</span>
          </p>

          <h1 className={styles.title}>Страница не найдена</h1>
          <p className={styles.text}>
            Такой страницы нет или она переехала. Начните с главной или загляните в проекты.
          </p>

          <div className={styles.actions}>
            <Link href="/" className="btn">На главную</Link>
            <Link href="/projects/" className="link link--arrow">
              Все проекты
              <FiArrowRight aria-hidden="true"/>
            </Link>
          </div>
        </div>
      </main>

      <Footer/>
    </>
  );
}
