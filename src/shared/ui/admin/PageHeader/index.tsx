import styles from './index.module.scss'
import type { IPageHeaderProps } from './types'

export const PageHeader = ({ title, eyebrow, description, actions }: IPageHeaderProps) => {

  return (
    <header className={styles.header}>
      <div className={styles.text}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}

        <h1 className={styles.title}>{title}</h1>

        {description && <p className={styles.description}>{description}</p>}
      </div>

      {actions && <div className={styles.actions}>{actions}</div>}
    </header>
  )
}
