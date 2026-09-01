import styles from './index.module.scss'
import type { ITableSkeletonProps } from './types'

const DEFAULT_ROWS = 6;

export const TableSkeleton = ({ rows = DEFAULT_ROWS }: ITableSkeletonProps) => {

  return (
    <div className={styles.skeleton} role="status" aria-label="Загрузка">
      <div className={styles.button}/>

      <div className={styles.rows}>
        {Array.from({ length: rows }, (_, index) => (
          <div key={index} className={styles.row}/>
        ))}
      </div>
    </div>
  )
}
