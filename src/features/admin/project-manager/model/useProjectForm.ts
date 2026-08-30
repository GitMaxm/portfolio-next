import { useRouter } from 'next/navigation'
import { type FormEvent, useState } from 'react'

import { type IProject, projectsApi, type TProjectDraft } from '@/entities/main/project'
import { swalConfirm, swalError, swalSaveConfirm, swalSuccess } from '@/shared/lib'

import type { TProjectFormMode } from './types'

/** FormData.get отдаёт string | File | null — в форме все поля текстовые. */
const getString = (data: FormData, name: string): string => {
  const value = data.get(name)

  return typeof value === 'string' ? value : ''
}

export const useProjectForm = (project?: IProject, mode: TProjectFormMode = 'edit') => {
  const [selectedTools, setSelectedTools] = useState<Set<string>>(new Set(project?.tools ?? []))

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

    const result = await swalSaveConfirm("Сохранить?");

    if (result.isDismissed) {
      return;
    }

    if (result.isConfirmed) {
      try {
        const data = new FormData(e.currentTarget);

        const projectData: TProjectDraft = {
          title: getString(data, 'title'),
          stack: getString(data, 'stack'),
          description: getString(data, 'description'),
          tools: [...selectedTools],
          image: project?.image ?? {},
          links: {
            gitHub: getString(data, 'github'),
            preview: getString(data, 'previewLink'),
          },
        };

        if (isCreate) {
          const projects = await projectsApi.getProjects();

          const nextId = projects.length > 0
            ? Math.max(...projects.map(p => Number(p.id))) + 1
            : 0;

          await projectsApi.addProject({ ...projectData, id: nextId });
          await swalSuccess('Создано!', 'Проект успешно создан');
        } else if (project) {
          await projectsApi.updateProject({ ...projectData, id: project.id });
          await swalSuccess('Сохранено!', 'Изменения сохранены');
        }

        router.push('/admin/projects/');
      } catch {
        await swalError('Ошибка', 'Не удалось сохранить проект');
      }
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
    selectedTools,
    handleToolClick,
    handleFormSubmit,
    handleCancelClick,
  }
}
