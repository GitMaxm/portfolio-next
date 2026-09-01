import styles from './index.module.scss'
import type { IStatusPanelProps } from './types'

export const StatusPanel = ({ title, description, hint, children }: IStatusPanelProps) => {

  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>{title}</h2>

      {description && <p className={styles.description}>{description}</p>}

      {hint && <p className={styles.hint}><code>{hint}</code></p>}

      {children && <div className={styles.actions}>{children}</div>}
    </div>
  )
}
