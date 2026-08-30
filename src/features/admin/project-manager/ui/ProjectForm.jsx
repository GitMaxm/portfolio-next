'use client'

import { STACK_OPTIONS, TOOLS_LIST } from "@/shared/constants"
import { FormField } from "@/shared/ui/admin"

import { useProjectForm } from "../model/useProjectForm"
import styles from './ProjectForm.module.scss'

export const ProjectForm = ({ project, mode = 'edit' }) => {
  const {
    isCreate,
    selectedTools,
    toggleTool,
    handleSubmit,
    handleCancel,
  } = useProjectForm(project, mode)

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
        <button
          type="button"
          className={styles.btnCancel}
          onClick={handleCancel}
        >
          Отмена
        </button>
      </div>
    </form>
  )
}