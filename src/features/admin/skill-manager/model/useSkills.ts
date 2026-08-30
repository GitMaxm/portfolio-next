import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { type ISkill, skillsApi, type TSkillId } from '@/entities/main/skill'
import { swalConfirm, swalError, swalSuccess } from '@/shared/lib'

export const useSkills = (initialSkills: ISkill[]) => {
  const [skills, setSkills] = useState<ISkill[]>(initialSkills);

  const router = useRouter();

  const handleDeleteClick = async (id: TSkillId) => {
    const result = await swalConfirm('Удалить навык?', 'Это действие нельзя отменить');

    if (!result.isConfirmed) {
      return;
    }

    try {
      await skillsApi.deleteSkill(id);
      setSkills(prev => prev.filter(s => s.id !== id));
      await swalSuccess('Удалено!', 'Навык был удалён');
    } catch {
      await swalError('Ошибка', 'Не удалось удалить навык');
    }
  };

  const handleEditClick = (id: TSkillId) => {
    router.push(`/admin/skills/edit/${id}`);
  };

  const handleAddClick = () => {
    router.push(`/admin/skills/new`);
  };

  return {
    skills,
    handleDeleteClick,
    handleEditClick,
    handleAddClick,
  };
};
