import { PROJECT_IMAGE_SIZES } from '@/shared/config'
import { Button, FormField } from '@/shared/ui/admin'

import type { IProjectImageFieldProps } from '../model/types'
import { ImageUpload } from './ImageUpload'
import styles from './ProjectImageField.module.scss'

const { main, preview } = PROJECT_IMAGE_SIZES

export const ProjectImageField = ({
  image,
  busyLabel,
  canCapture,
  onSelect,
  onCapture,
  onRemove,
}: IProjectImageFieldProps) => {

  return (
    <FormField label="Обложка">
      <div className={styles.imageRow}>
        <ImageUpload
          fileName={image.preview ?? image.main}
          busyLabel={busyLabel}
          onSelect={onSelect}
          onRemove={onRemove}
        />

        <div className={styles.imageAside}>
          <p className={styles.imageNote}>
            Хватит одной картинки любого размера: сервер обрежет её до 4 : 3
            и сохранит для списка ({preview.width} × {preview.height}) и для страницы
            проекта ({main.width} × {main.height}).
          </p>

          <Button
            size="sm"
            variant="secondary"
            onClick={onCapture}
            disabled={Boolean(busyLabel) || !canCapture}
          >
            Снять скриншот сайта
          </Button>

          <span className={styles.imageHint}>
            Скриншот снимается со «Ссылки на проект»
          </span>
        </div>
      </div>
    </FormField>
  )
}
