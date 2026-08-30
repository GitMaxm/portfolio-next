import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { projectsServiceApi } from "@/app/services/projectsService"
import { swalConfirm, swalError, swalSuccess } from '@/shared/lib'

export const useProjects = (initialProjects) => {
  const [projects, setProjects] = useState(initialProjects);
  const router = useRouter();

  const handleDelete = async (id) => {
    const result = await swalConfirm('Удалить проект?', 'Это действие нельзя отменить');
    if (!result.isConfirmed) {
      return;
    }

    try {
      await projectsServiceApi.deleteProject(id);
      setProjects(prev => prev.filter(p => p.id !== id));
      await swalSuccess('Удалено!', 'Проект был удалён');
    } catch (error) {
      await swalError('Ошибка', 'Не удалось удалить проект');
    }
  };

  const handleEdit = (id) => {
    router.push(`/admin/projects/edit/${id}`);
  };

  const handleAdd = () => {
    router.push(`/admin/projects/new`);
  };

  return {
    projects,
    handleDelete,
    handleEdit,
    handleAdd,
  };
};