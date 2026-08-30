import styles from './index.module.scss'
import type { IFormFieldProps } from './types'

export function FormField({ label, children, htmlFor }: IFormFieldProps) {

  return (
    <div className={styles.field}>
      {htmlFor
        ? <label className={styles.label} htmlFor={htmlFor}>{label}</label>
        : <span className={styles.label}>{label}</span>
      }
      {children}
    </div>
  )
}
