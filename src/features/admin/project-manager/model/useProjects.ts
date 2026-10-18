import { useState } from 'react'

import { type IProject, projectsApi, type TProjectId } from '@/entities/main/project'
import { cleanupProjectImages } from '@/shared/api'
import { swalConfirm, swalError, swalSuccess } from '@/shared/lib'

export const useProjects = (initialProjects: IProject[]) => {
  const [projects, setProjects] = useState<IProject[]>(initialProjects);
  const [deletingId, setDeletingId] = useState<TProjectId | null>(null);

  const handleDeleteClick = async (id: TProjectId) => {
    if (deletingId !== null) {
      return;
    }

    const result = await swalConfirm('Удалить проект?', 'Это действие нельзя отменить');

    if (!result.isConfirmed) {
      return;
    }

    setDeletingId(id);

    try {
      const deleted = projects.find((project) => project.id === id);

      await projectsApi.deleteProject(id);
      setProjects(prev => prev.filter(p => p.id !== id));
      await cleanupProjectImages([deleted?.image?.main, deleted?.image?.preview]);
      await swalSuccess('Удалено', 'Проект удалён');
    } catch {
      await swalError('Ошибка', 'Не удалось удалить проект');
    } finally {
      setDeletingId(null);
    }
  };

  return {
    projects,
    deletingId,
    handleDeleteClick,
  };
};
