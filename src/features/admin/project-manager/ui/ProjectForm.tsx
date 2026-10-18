'use client'

import { STACK_OPTIONS } from "@/entities/main/project"
import { Button, FormField } from "@/shared/ui/admin"

import type { IProjectFormProps } from "../model/types"
import { useProjectForm } from "../model/useProjectForm"
import styles from './ProjectForm.module.scss'
import { ProjectImageField } from "./ProjectImageField"
import { ProjectLinksField } from "./ProjectLinksField"
import { ProjectToolsField } from "./ProjectToolsField"

export const ProjectForm = ({ project, mode = 'edit' }: IProjectFormProps) => {
  const {
    isCreate,
    isSubmitting,
    image,
    isImageBusy,
    imageBusyLabel,
    previewLink,
    setPreviewLink,
    markDirty,
    handleImageSelect,
    handleImageCapture,
    handleImageRemove,
    selectedTools,
    handleToolClick,
    handleFormSubmit,
    handleCancelClick,
  } = useProjectForm(project, mode)

  const submitLabel = isCreate ? 'Создать' : 'Сохранить'
  const pendingLabel = isCreate ? 'Создание…' : 'Сохранение…'

  return (
    <form
      className={styles.form}
      onSubmit={handleFormSubmit}
      onInput={markDirty}
      aria-busy={isSubmitting}
    >
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
          required
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

      <ProjectToolsField selectedTools={selectedTools} onToolClick={handleToolClick}/>

      <FormField htmlFor="f-desc" label="Описание">
        <textarea
          id="f-desc"
          name="description"
          required
          placeholder="Что это за проект и что в нём интересного"
          defaultValue={project?.description ?? ''}
        />
      </FormField>

      <ProjectImageField
        image={image}
        busyLabel={imageBusyLabel}
        canCapture={Boolean(previewLink.trim())}
        onSelect={handleImageSelect}
        onCapture={handleImageCapture}
        onRemove={handleImageRemove}
      />

      <ProjectLinksField
        gitHubLink={project?.links?.gitHub ?? ''}
        previewLink={previewLink}
        onPreviewLinkChange={setPreviewLink}
      />

      <label className={styles.draft}>
        <input type="checkbox" name="draft" defaultChecked={project?.draft ?? false}/>
        <span>
          Черновик
          <span className={styles.draftHint}>Проект виден только в админке и не попадает на сайт</span>
        </span>
      </label>

      <div className={styles.actions}>
        <Button type="submit" variant="primary" disabled={isSubmitting || isImageBusy}>
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
