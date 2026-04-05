import Link from 'next/link';
import styles from '../styles/not-found.module.css';

export const metadata = {
  title: '404 — Страница не найдена',
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>

        <div className={styles.code}>
          <span className={styles.digit}>4</span>

          <div className={styles.gifWrap}>
            <img
              src="/img/404/404.gif"
              alt="404"
              className={styles.gif}
            />
          </div>

          <span className={styles.digit}>4</span>
        </div>

        <p className={styles.title}>СТРАНИЦА НЕ НАЙДЕНА</p>
        <p className={styles.sub}>
          Такой страницы не существует или она была перемещена
        </p>

        <Link href="/" className={styles.btn}>
          НА ГЛАВНУЮ
        </Link>

      </div>
    </main>
  );
}