import Link from 'next/link';
import styles from "./Sidebar.module.css";

export default function Sidebar() {

  const links = [
    { title: "Главная", href: "" },
    { title: "Проекты", href: "projects" },
  ]

  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.nav}>
          {links.map((item) => {
            return (
              <li key={item.title}>
                <Link
                  href={`/admin/${item.href}`}
                  className={styles.navLink}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}