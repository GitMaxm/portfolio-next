'use client'

import styles from './index.module.scss'

import { useState, useRef } from 'react'
import { FormField } from "@components/admin/ui/adminForm/FormField";
import { STACK_OPTIONS, TOOLS_LIST } from "@/constants/projectFormAdmin";

export default function EditProjectForm({ project, mode = 'edit' }) {
  const isCreate = mode === 'create'

  const [selectedTools, setSelectedTools] = useState(
    new Set(project?.tools ?? [])
  )
  const [imageMain, setImageMain] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const mainInputRef = useRef(null)
  const previewInputRef = useRef(null)

  const toggleTool = (tool) => {
    setSelectedTools((prev) => {
      const next = new Set(prev)
      next.has(tool) ? next.delete(tool) : next.add(tool)
      return next
    })
  }

  const handleImageChange = (e, setter) => {
    const file = e.target.files[0]
    if (!file) return
    const src = URL.createObjectURL(file)
    setter({ name: file.name, src })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    const result = {
      id: isCreate ? Date.now() : project?.id,
      title: data.get('title'),
      stack: data.get('stack'),
      tools: Array.from(selectedTools),
      description: data.get('description'),
      image: {
        main: imageMain?.name ?? project?.image?.main ?? '',
        preview: imagePreview?.name ?? project?.image?.preview ?? '',
      },
      links: {
        gitHub: data.get('github'),
        preview: data.get('previewLink'),
      },
    }

    console.log(result)
    // TODO: вызвать API или серверный action
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      {/* ID — только при редактировании */}
      {!isCreate && (
        <FormField label="ID">
          <span className={styles.idDisplay}>{project?.id}</span>
        </FormField>
      )}

      {/* Название */}
      <FormField htmlFor="f-title" label="Название">
        <input
          id="f-title"
          name="title"
          type="text"
          placeholder="Название проекта"
          defaultValue={project?.title ?? ''}
        />
      </FormField>

      {/* Стек */}
      <FormField htmlFor="f-stack" label="Стек">
        <select
          id="f-stack"
          name="stack"
          defaultValue={project?.stack ?? 'HTML'}
        >
          {STACK_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </FormField>

      {/* Инструменты */}
      <FormField label="Инструменты">
        <div className={styles.toolsGrid}>
          {TOOLS_LIST.map((tool) => (
            <button
              key={tool}
              type="button"
              className={`${styles.chip} ${selectedTools.has(tool) ? styles.active : ''}`}
              onClick={() => toggleTool(tool)}
            >
              <span className={styles.chipCheck}>
                {selectedTools.has(tool) ? '✓' : ''}
              </span>
              {tool}
            </button>
          ))}
        </div>
      </FormField>

      {/* Описание */}
      <FormField htmlFor="f-desc" label="Описание">
        <textarea
          id="f-desc"
          name="description"
          placeholder="Описание проекта"
          defaultValue={project?.description ?? ''}
        />
      </FormField>

      {/* Изображения */}
      <FormField label="Изображения">
        {/* Главное */}
        <div
          className={styles.uploadArea}
          onClick={() => mainInputRef.current?.click()}
        >
          <input
            ref={mainInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImageMain)}
          />
          <div className={styles.uploadTitle}>Главное изображение</div>
          <div className={styles.uploadHint}>Нажмите для выбора файла</div>
        </div>
        {imageMain && (
          <div className={styles.previews}>
            <div className={styles.previewItem}>
              <img className={styles.previewImg} src={imageMain.src} alt="main"/>
              <div className={styles.previewLabel}>{imageMain.name}</div>
              <button
                type="button"
                className={styles.removeBtn}
                onClick={() => {
                  setImageMain(null);
                  mainInputRef.current.value = ''
                }}
              >×
              </button>
            </div>
          </div>
        )}

        {/* Превью */}
        <div
          className={styles.uploadArea}
          onClick={() => previewInputRef.current?.click()}
        >
          <input
            ref={previewInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImagePreview)}
          />
          <div className={styles.uploadTitle}>Превью (большое)</div>
          <div className={styles.uploadHint}>Нажмите для выбора файла</div>
        </div>
        {imagePreview && (
          <div className={styles.previews}>
            <div className={styles.previewItem}>
              <img className={styles.previewImg} src={imagePreview.src} alt="preview"/>
              <div className={styles.previewLabel}>{imagePreview.name}</div>
              <button
                type="button"
                className={styles.removeBtn}
                onClick={() => {
                  setImagePreview(null);
                  previewInputRef.current.value = ''
                }}
              >×
              </button>
            </div>
          </div>
        )}
      </FormField>

      {/* Ссылки */}
      <FormField label="Ссылки">
        <div className={styles.linksRow}>
          <div>
            <div className={styles.sectionLabel}>GitHub</div>
            <input
              name="github"
              type="text"
              placeholder="https://github.com/..."
              defaultValue={project?.links?.gitHub ?? ''}
            />
          </div>
          <div>
            <div className={styles.sectionLabel}>Превью сайта</div>
            <input
              name="previewLink"
              type="text"
              placeholder="https://..."
              defaultValue={project?.links?.preview ?? ''}
            />
          </div>
        </div>
      </FormField>

      {/* Кнопки */}
      <div className={styles.actions}>
        <button type="submit" className={styles.btnSave}>
          {isCreate ? 'Создать' : 'Сохранить'}
        </button>
        <button type="button" className={styles.btnCancel}>
          Отмена
        </button>
      </div>
    </form>
  )
}