import "@/styles/globals.css";
import Link from 'next/link';
import styles from '@/styles/admin/AdminLayout.module.css';
import NavBar from "@components/layout/NavBar";

export default function AdminLayout({children}) {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Навигация по админке</h2>

          <nav>
            <ul className={styles.nav}>
              <li>
                <Link
                  href="/admin"
                  className={styles.navLink}
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/projects"
                  className={styles.navLink}
                >
                  Проекты
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </>
  );
}