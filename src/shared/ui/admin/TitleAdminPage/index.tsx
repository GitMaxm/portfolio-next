import styles from './index.module.scss'
import type { ITitleAdminPageProps } from './types'

export const TitleAdminPage = ({ children }: ITitleAdminPageProps) => {

  return (
    <h1 className={styles.title}>{children}</h1>
  )
}
