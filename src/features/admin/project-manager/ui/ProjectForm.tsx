'use client'

import { STACK_OPTIONS, TOOLS_LIST } from "@/entities/main/project"
import { Button, FormField } from "@/shared/ui/admin"

import type { IProjectFormProps } from "../model/types"
import { useProjectForm } from "../model/useProjectForm"
import styles from './ProjectForm.module.scss'

export const ProjectForm = ({ project, mode = 'edit' }: IProjectFormProps) => {
  const {
    isCreate,
    isSubmitting,
    selectedTools,
    handleToolClick,
    handleFormSubmit,
    handleCancelClick,
  } = useProjectForm(project, mode)

  const submitLabel = isCreate ? 'Создать' : 'Сохранить'
  const pendingLabel = isCreate ? 'Создание…' : 'Сохранение…'

  return (
    <form className={styles.form} onSubmit={handleFormSubmit} aria-busy={isSubmitting}>
      {!isCreate && (
        <FormField label="ID">
          <span className={styles.idDisplay}>{project?.id}</span>
        </FormField>
      )}

      <FormField htmlFor="f-title" label="Название">
        <input
          id="f-title"
          name="title"
          type="text"
          placeholder="Название проекта"
          defaultValue={project?.title ?? ''}
        />
      </FormField>

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

      <FormField label="Инструменты">
        <div className={styles.toolsGrid}>
          {TOOLS_LIST.map((tool) => (
            <button
              key={tool}
              type="button"
              className={`${styles.chip} ${selectedTools.has(tool) ? styles.active : ''}`}
              onClick={() => handleToolClick(tool)}
            >
              <span className={styles.chipCheck}>
                {selectedTools.has(tool) ? '✓' : ''}
              </span>
              {tool}
            </button>
          ))}
        </div>
      </FormField>

      <FormField htmlFor="f-desc" label="Описание">
        <textarea
          id="f-desc"
          name="description"
          placeholder="Описание проекта"
          defaultValue={project?.description ?? ''}
        />
      </FormField>

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

      <div className={styles.actions}>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? pendingLabel : submitLabel}
        </Button>

        <Button
          variant="secondary"
          onClick={handleCancelClick}
          disabled={isSubmitting}
        >
          Отмена
        </Button>
      </div>
    </form>
  )
}
