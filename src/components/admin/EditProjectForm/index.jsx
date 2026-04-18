'use client'

import { useState } from 'react'
import { FormField } from "@components/admin/ui/adminForm/FormField"

import { STACK_OPTIONS, TOOLS_LIST } from "@/constants/projectFormAdmin"

import styles from './index.module.scss'

export default function EditProjectForm({ project, mode = 'edit' }) {
  const isCreate = mode === 'create'

  const [selectedTools, setSelectedTools] = useState(
    new Set(project?.tools ?? [])
  )

  const toggleTool = (tool) => {
    setSelectedTools((prev) => {
      const updatedTools = new Set(prev)
      updatedTools.has(tool) ? updatedTools.delete(tool) : updatedTools.add(tool)
      return updatedTools
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(handleSubmit)
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
          {STACK_OPTIONS.map((stack) => (
            <option key={stack} value={stack}>{stack}</option>
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

      {/* Ссылки */}
      <FormField label="Ссылки">
        <div className={styles.linksRow}>
          <div>
            <div className={styles.sectionLabel}>Код проекта</div>
            <input
              name="github"
              type="text"
              placeholder="Код проекта"
              defaultValue={project?.links?.gitHub ?? ''}
            />
          </div>
          <div>
            <div className={styles.sectionLabel}>Ссылка на проект</div>
            <input
              name="previewLink"
              type="text"
              placeholder="Ссылка на проект"
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