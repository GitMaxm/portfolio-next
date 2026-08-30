import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { projectsServiceApi } from "@/app/services/projectsService"
import { swalConfirm, swalError, swalSaveConfirm, swalSuccess } from '@/shared/lib'

export const useProjectForm = (project, mode = 'edit') => {
  const router = useRouter()
  const isCreate = mode === 'create'

  const [selectedTools, setSelectedTools] = useState(new Set(project?.tools ?? []))

  const toggleTool = (tool) => {
    setSelectedTools((prev) => {
      const updatedTools = new Set(prev)
      updatedTools.has(tool) ? updatedTools.delete(tool) : updatedTools.add(tool)
      return updatedTools
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await swalSaveConfirm("Сохранить?");
    if (result.isDismissed) {
      return;
    }

    if (result.isConfirmed) {
      try {
        const data = new FormData(e.target);
        const projectData = {
          title: data.get('title'),
          stack: data.get('stack'),
          tools: [...selectedTools],
          description: data.get('description'),
          links: {
            gitHub: data.get('github'),
            preview: data.get('previewLink'),
          },
          image: project?.image ?? {},
        };

        if (isCreate) {
          const projects = await projectsServiceApi.getProjects();
          const nextId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 0;
          await projectsServiceApi.addProject({ ...projectData, id: nextId });
          await swalSuccess('Создано!', 'Проект успешно создан');
        } else {
          await projectsServiceApi.updateProject({ ...projectData, id: project.id });
          await swalSuccess('Сохранено!', 'Изменения сохранены');
        }

        router.push('/admin/projects/');
      } catch (error) {
        await swalError('Ошибка', 'Не удалось сохранить проект');
      }
    }
  }

  const handleCancel = async () => {
    const result = await swalConfirm("Отменить редактирование?", "Отменить редактирование?", "Да");
    if (result.isConfirmed) {
      router.push('/admin/projects/');
    }
  }

  return {
    isCreate,
    selectedTools,
    toggleTool,
    handleSubmit,
    handleCancel,
  }
}