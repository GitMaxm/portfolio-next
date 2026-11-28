import { LIBRARIES_LIST } from '@/entities/main/project'
import { FormField } from '@/shared/ui/admin'

import type { IProjectLibrariesFieldProps } from '../model/types'
import styles from './ProjectToolsField.module.scss'

export const ProjectLibrariesField = ({
  selectedLibraries,
  onLibraryClick,
}: IProjectLibrariesFieldProps) => {

  return (
    <FormField label="Библиотеки">
      <div className={styles.toolsGrid}>
        {LIBRARIES_LIST.map((library) => {
          const isSelected = selectedLibraries.has(library)

          return (
            <button
              key={library}
              type="button"
              className={`${styles.chip} ${isSelected ? styles.active : ''}`}
              aria-pressed={isSelected}
              onClick={() => onLibraryClick(library)}
            >
              <span className={styles.chipCheck}>{isSelected ? '✓' : ''}</span>
              {library}
            </button>
          )
        })}
      </div>
    </FormField>
  )
}
