import styles from './style.module.scss'

export default function TitleAdminPage({ children }) {
  return (
    <h1 className={styles.title}>{children}</h1>
  )
}