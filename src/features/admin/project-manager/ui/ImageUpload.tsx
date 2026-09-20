'use client'

import { type ChangeEvent, type DragEvent, useId, useState } from 'react'

import { IMAGE_ACCEPT, PROJECT_IMAGES_URL } from '@/shared/config'
import { Button } from '@/shared/ui/admin'

import type { IImageUploadProps } from '../model/types'
import styles from './ImageUpload.module.scss'

export const ImageUpload = ({
  fileName,
  busyLabel,
  onSelect,
  onRemove,
}: IImageUploadProps) => {
  const [isOver, setIsOver] = useState(false)

  const inputId = useId()

  const isBusy = Boolean(busyLabel)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      onSelect(file)
    }

    e.target.value = ''
  }

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setIsOver(false)

    const file = e.dataTransfer.files?.[0]

    if (file) {
      onSelect(file)
    }
  }

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setIsOver(true)
  }

  return (
    <div className={styles.slot}>
      <label
        htmlFor={inputId}
        className={`${styles.zone} ${isOver ? styles.over : ''} ${isBusy ? styles.busy : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={() => setIsOver(false)}
        onDrop={handleDrop}
      >
        {fileName && !isBusy
          ? <img className={styles.preview} src={PROJECT_IMAGES_URL + fileName} alt=""/>
          : (
            <span className={styles.placeholder}>
              {busyLabel ?? 'Перетащите файл или нажмите'}
            </span>
          )
        }

        <input
          id={inputId}
          className={styles.input}
          type="file"
          accept={IMAGE_ACCEPT}
          disabled={isBusy}
          onChange={handleChange}
        />
      </label>

      <div className={styles.footer}>
        <span className={styles.fileName}>{fileName || 'файл не выбран'}</span>

        {fileName && !isBusy && (
          <Button size="sm" variant="danger" onClick={onRemove}>Убрать</Button>
        )}
      </div>
    </div>
  )
}
