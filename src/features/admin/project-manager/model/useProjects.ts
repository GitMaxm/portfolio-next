import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { type IProject, projectsApi, type TProjectId } from '@/entities/main/project'
import { swalConfirm, swalError, swalSuccess } from '@/shared/lib'

export const useProjects = (initialProjects: IProject[]) => {
  const [projects, setProjects] = useState<IProject[]>(initialProjects);

  const router = useRouter();

  const handleDeleteClick = async (id: TProjectId) => {
    const result = await swalConfirm('Удалить проект?', 'Это действие нельзя отменить');

    if (!result.isConfirmed) {
      return;
    }

    try {
      await projectsApi.deleteProject(id);
      setProjects(prev => prev.filter(p => p.id !== id));
      await swalSuccess('Удалено!', 'Проект был удалён');
    } catch {
      await swalError('Ошибка', 'Не удалось удалить проект');
    }
  };

  const handleEditClick = (id: TProjectId) => {
    router.push(`/admin/projects/edit/${id}`);
  };

  const handleAddClick = () => {
    router.push(`/admin/projects/new`);
  };

  return {
    projects,
    handleDeleteClick,
    handleEditClick,
    handleAddClick,
  };
};
