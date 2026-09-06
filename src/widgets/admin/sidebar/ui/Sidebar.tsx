'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ADMIN_NAV_LINKS } from '@/shared/config';

import styles from "./index.module.scss";

export const Sidebar = () => {
  const pathname = usePathname();

  // Обзор лежит в корне админки, поэтому по префиксу его пришлось бы
  // подсвечивать на каждой вложенной странице — сверяем точно.
  const isActive = (href: string) => (
    href === '/admin/' ? pathname === href : pathname.startsWith(href)
  );

  return (
    <aside className={styles.sidebar}>
      <Link href="/admin/" className={styles.brand}>
        <span className={styles.brandName}>Portfolio</span>
        <span className={styles.brandRole}>админка</span>
      </Link>

      <nav className={styles.nav}>
        <span className={styles.navLabel}>Разделы</span>

        <ul>
          {ADMIN_NAV_LINKS.map(({ href, label }) => {
            const active = isActive(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.navLink} ${active ? styles.active : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <Link href="/" className={styles.exit}>
        Открыть сайт
      </Link>
    </aside>
  )
}
