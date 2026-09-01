import { useRouter } from 'next/navigation'
import { type FormEvent, useState } from 'react'

import { type IProject, projectsApi, type TProjectDraft } from '@/entities/main/project'
import { getFormString, swalConfirm, swalError, swalSaveConfirm, swalSuccess } from '@/shared/lib'

import type { TProjectFormMode } from './types'

export const useProjectForm = (project?: IProject, mode: TProjectFormMode = 'edit') => {
  const [selectedTools, setSelectedTools] = useState<Set<string>>(new Set(project?.tools ?? []))
  const [isSubmitting, setIsSubmitting] = useState(false)

  const router = useRouter()

  const isCreate = mode === 'create'

  const handleToolClick = (tool: string) => {
    setSelectedTools((prev) => {
      const updatedTools = new Set(prev)

      updatedTools.has(tool) ? updatedTools.delete(tool) : updatedTools.add(tool)

      return updatedTools
    })
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) {
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
        image: project?.image ?? {},
        links: {
          gitHub: getFormString(data, 'github'),
          preview: getFormString(data, 'previewLink'),
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
    selectedTools,
    handleToolClick,
    handleFormSubmit,
    handleCancelClick,
  }
}
