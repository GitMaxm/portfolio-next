import { useRouter } from 'next/navigation'
import { type FormEvent, useState } from 'react'

import {
  type IProject,
  type IProjectImage,
  projectsApi,
  type TProjectDraft,
} from '@/entities/main/project'
import { captureProjectImage, type IProjectImageNames, uploadProjectImage } from '@/shared/api'
import { ACCEPTED_IMAGE_TYPES, MAX_IMAGE_SIZE } from '@/shared/config'
import { getFormString, swalConfirm, swalError, swalSuccess } from '@/shared/lib'
import { UNSAVED_CHANGES_MESSAGE, useUnsavedChangesGuard } from '@/shared/lib/hooks'

import type { TImageTask, TProjectFormMode } from './types'

const IMAGE_BUSY_LABELS: Record<TImageTask, string> = {
  upload: 'Загрузка…',
  capture: 'Снимаю скриншот…',
}

export const useProjectForm = (project?: IProject, mode: TProjectFormMode = 'edit') => {
  const [selectedTools, setSelectedTools] = useState<Set<string>>(new Set(project?.tools ?? []))
  const [image, setImage] = useState<IProjectImage>(project?.image ?? {})
  const [imageTask, setImageTask] = useState<TImageTask | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDirty, setIsDirty] = useState(false)

  const [previewLink, setPreviewLink] = useState(project?.links?.preview ?? '')

  const router = useRouter()

  const isCreate = mode === 'create'
  const isImageBusy = imageTask !== null

  useUnsavedChangesGuard(isDirty && !isSubmitting)

  const markDirty = () => setIsDirty(true)

  const handleToolClick = (tool: string) => {
    markDirty()
    setSelectedTools((prev) => {
      const updatedTools = new Set(prev)

      updatedTools.has(tool) ? updatedTools.delete(tool) : updatedTools.add(tool)

      return updatedTools
    })
  }

  const runImageTask = async (
    task: TImageTask,
    load: () => Promise<IProjectImageNames>,
    failureTitle: string,
  ) => {
    if (isImageBusy) {
      return
    }

    setImageTask(task)

    try {
      setImage(await load())
      markDirty()
    } catch (error) {
      const reason = error instanceof Error ? error.message : 'Попробуйте ещё раз'

      await swalError(failureTitle, reason)
    } finally {
      setImageTask(null)
    }
  }

  const handleImageSelect = async (file: File) => {

    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      await swalError('Не тот формат', 'Подойдут JPEG, PNG, WebP, AVIF или GIF')

      return
    }

    if (file.size > MAX_IMAGE_SIZE) {
      await swalError('Файл слишком большой', `Максимум ${MAX_IMAGE_SIZE / 1024 / 1024} МБ`)

      return
    }

    await runImageTask('upload', () => uploadProjectImage(file), 'Не удалось загрузить')
  }

  const handleImageCapture = async () => {
    const url = previewLink.trim()

    if (!url) {
      await swalError('Нет ссылки', 'Скриншот снимается со «Ссылки на проект» — заполните её')

      return
    }

    await runImageTask('capture', () => captureProjectImage(url), 'Не удалось снять скриншот')
  }

  const handleImageRemove = () => {
    setImage({})
    markDirty()
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting || isImageBusy) {
      return;
    }

    const form = e.currentTarget;

    if (!image.main && !image.preview) {
      await swalError('Нет обложки', 'Перетащите картинку или снимите скриншот сайта');

      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData(form);

      const projectData: TProjectDraft = {
        title: getFormString(data, 'title').trim(),
        stack: getFormString(data, 'stack'),
        description: getFormString(data, 'description').trim(),
        tools: [...selectedTools],
        image,
        links: {
          gitHub: getFormString(data, 'github').trim(),
          preview: previewLink.trim(),
        },
      };

      if (isCreate) {
        await projectsApi.addProject(projectData);
        await swalSuccess('Создано!', 'Проект успешно создан');
      } else if (project) {
        await projectsApi.updateProject({ ...projectData, id: project.id });
        await swalSuccess('Сохранено!', 'Изменения сохранены');
      }

      router.push('/admin/projects/');
    } catch {
      setIsSubmitting(false);
      await swalError('Ошибка', 'Не удалось сохранить проект');
    }
  }

  const handleCancelClick = async () => {
    if (isDirty) {
      const result = await swalConfirm(UNSAVED_CHANGES_MESSAGE, '', 'Уйти');

      if (!result.isConfirmed) {
        return
      }
    }

    router.push('/admin/projects/');
  }

  return {
    isCreate,
    isSubmitting,
    image,
    isImageBusy,
    imageBusyLabel: imageTask ? IMAGE_BUSY_LABELS[imageTask] : undefined,
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
  }
}
