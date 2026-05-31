import styles from './index.module.scss'

export const TitleAdminPage = ({ children }) => {
  return (
    <h1 className={styles.title}>{children}</h1>
  )
}