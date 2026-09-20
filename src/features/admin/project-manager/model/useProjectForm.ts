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
import { getFormString, swalConfirm, swalError, swalSaveConfirm, swalSuccess } from '@/shared/lib'

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

  // Ссылка на проект — единственное управляемое поле формы: с неё снимается
  // скриншот, и кнопка должна знать, введено там что-нибудь или ещё нет.
  const [previewLink, setPreviewLink] = useState(project?.links?.preview ?? '')

  const router = useRouter()

  const isCreate = mode === 'create'
  const isImageBusy = imageTask !== null

  const handleToolClick = (tool: string) => {
    setSelectedTools((prev) => {
      const updatedTools = new Set(prev)

      updatedTools.has(tool) ? updatedTools.delete(tool) : updatedTools.add(tool)

      return updatedTools
    })
  }

  /** Оба способа получить картинку кончаются одинаково: именами файлов или swal. */
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
    } catch (error) {
      const reason = error instanceof Error ? error.message : 'Попробуйте ещё раз'

      await swalError(failureTitle, reason)
    } finally {
      setImageTask(null)
    }
  }

  const handleImageSelect = async (file: File) => {
    // Те же правила проверит сервер по байтам — здесь это только быстрый отказ,
    // чтобы не гонять заведомо негодный файл по сети.
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

  // Старые файлы в public не трогаем: на них может ссылаться другая запись.
  const handleImageRemove = () => {
    setImage({})
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting || isImageBusy) {
      return;
    }

    // Ссылку на форму забираем синхронно: React обнуляет currentTarget,
    // как только обработчик уходит в await.
    const form = e.currentTarget;

    const result = await swalSaveConfirm("Сохранить?");

    if (!result.isConfirmed) {
      return;
    }

    // Флаг снимаем только в catch: после успеха уходим со страницы, и до
    // перехода форма должна оставаться заблокированной.
    setIsSubmitting(true);

    try {
      const data = new FormData(form);

      const projectData: TProjectDraft = {
        title: getFormString(data, 'title'),
        stack: getFormString(data, 'stack'),
        description: getFormString(data, 'description'),
        tools: [...selectedTools],
        image,
        links: {
          gitHub: getFormString(data, 'github'),
          preview: previewLink,
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
    const result = await swalConfirm("Отменить редактирование?", "Отменить редактирование?", "Да");

    if (result.isConfirmed) {
      router.push('/admin/projects/');
    }
  }

  return {
    isCreate,
    isSubmitting,
    image,
    isImageBusy,
    imageBusyLabel: imageTask ? IMAGE_BUSY_LABELS[imageTask] : undefined,
    previewLink,
    setPreviewLink,
    handleImageSelect,
    handleImageCapture,
    handleImageRemove,
    selectedTools,
    handleToolClick,
    handleFormSubmit,
    handleCancelClick,
  }
}
