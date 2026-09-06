import { useState } from 'react'

import { type ISkill, skillsApi, type TSkillId } from '@/entities/main/skill'
import { swalConfirm, swalError, swalSuccess } from '@/shared/lib'

export const useSkills = (initialSkills: ISkill[]) => {
  const [skills, setSkills] = useState<ISkill[]>(initialSkills);
  const [deletingId, setDeletingId] = useState<TSkillId | null>(null);

  const handleDeleteClick = async (id: TSkillId) => {
    if (deletingId !== null) {
      return;
    }

    const result = await swalConfirm('Удалить навык?', 'Это действие нельзя отменить');

    if (!result.isConfirmed) {
      return;
    }

    setDeletingId(id);

    try {
      await skillsApi.deleteSkill(id);
      setSkills(prev => prev.filter(s => s.id !== id));
      await swalSuccess('Удалено', 'Навык удалён');
    } catch {
      await swalError('Ошибка', 'Не удалось удалить навык');
    } finally {
      setDeletingId(null);
    }
  };

  return {
    skills,
    deletingId,
    handleDeleteClick,
  };
};
