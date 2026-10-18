import { TOOLS_LIST } from '@/entities/main/project'
import { FormField } from '@/shared/ui/admin'

import type { IProjectToolsFieldProps } from '../model/types'
import styles from './ProjectToolsField.module.scss'

export const ProjectToolsField = ({ selectedTools, onToolClick }: IProjectToolsFieldProps) => {

  return (
    <FormField label="Инструменты">
      <div className={styles.toolsGrid}>
        {TOOLS_LIST.map((tool) => {
          const isSelected = selectedTools.has(tool)

          return (
            <button
              key={tool}
              type="button"
              className={`${styles.chip} ${isSelected ? styles.active : ''}`}
              aria-pressed={isSelected}
              onClick={() => onToolClick(tool)}
            >
              <span className={styles.chipCheck}>{isSelected ? '✓' : ''}</span>
              {tool}
            </button>
          )
        })}
      </div>
    </FormField>
  )
}
