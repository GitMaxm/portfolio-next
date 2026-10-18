import { FormField } from '@/shared/ui/admin'

import type { IProjectLinksFieldProps } from '../model/types'
import styles from './ProjectLinksField.module.scss'

const URL_PATTERN = 'https?://.+'
const URL_TITLE = 'Адрес, начинающийся с http:// или https://'

export const ProjectLinksField = ({ gitHubLink, previewLink, onPreviewLinkChange }: IProjectLinksFieldProps) => {

  return (
    <FormField label="Ссылки">
      <div className={styles.linksRow}>
        <label>
          <span className={styles.sectionLabel}>Код проекта</span>
          <input
            name="github"
            type="url"
            pattern={URL_PATTERN}
            title={URL_TITLE}
            placeholder="https://github.com/…"
            defaultValue={gitHubLink}
          />
        </label>

        <label>
          <span className={styles.sectionLabel}>Ссылка на проект</span>
          <input
            name="previewLink"
            type="url"
            pattern={URL_PATTERN}
            title={URL_TITLE}
            placeholder="https://…"
            value={previewLink}
            onChange={(e) => onPreviewLinkChange(e.target.value)}
          />
        </label>
      </div>
    </FormField>
  )
}
