import styles from './index.module.scss'

export function FormField({ label, htmlFor, children }) {
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