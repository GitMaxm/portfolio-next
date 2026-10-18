import { useRouter } from 'next/navigation'
import { type ChangeEvent, type FormEvent, useState } from 'react'

import {
  type ISkill,
  parseIconInput,
  SKILL_ICON_VIEW_BOX,
  skillsApi,
  type TSkillDraft,
  type TSkillLevel,
} from '@/entities/main/skill'
import { getFormString, swalConfirm, swalError, swalSuccess } from '@/shared/lib'
import { UNSAVED_CHANGES_MESSAGE, useUnsavedChangesGuard } from '@/shared/lib/hooks'

import type { TSkillFormMode } from './types'

const DEFAULT_ICON_COLOR = '#5c62ec'

export const useSkillForm = (skill?: ISkill, mode: TSkillFormMode = 'edit') => {
  const [iconPath, setIconPath] = useState(skill?.iconPath ?? '')
  const [iconViewBox, setIconViewBox] = useState(skill?.iconViewBox ?? SKILL_ICON_VIEW_BOX)
  const [iconColor, setIconColor] = useState(skill?.iconColor ?? DEFAULT_ICON_COLOR)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDirty, setIsDirty] = useState(false)

  const router = useRouter()

  const isCreate = mode === 'create'

  useUnsavedChangesGuard(isDirty && !isSubmitting)

  const markDirty = () => setIsDirty(true)

  const handleIconPathChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { path, viewBox } = parseIconInput(e.target.value)

    setIconPath(path)
    setIconViewBox(viewBox)
  }

  const handleIconColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIconColor(e.target.value)
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = e.currentTarget;

    // Флаг снимаем только в catch: после успеха уходим со страницы, и до
    // перехода форма должна оставаться заблокированной.
    setIsSubmitting(true);

    try {
      const data = new FormData(form);

      const skillData: TSkillDraft = {
        name: getFormString(data, 'name').trim(),
        description: getFormString(data, 'description').trim(),
        level: getFormString(data, 'level') as TSkillLevel,
        iconPath,
        iconColor,
        iconViewBox,
      };

      if (isCreate) {
        await skillsApi.addSkill(skillData);
        await swalSuccess('Создано!', 'Навык успешно создан');
      } else if (skill) {
        await skillsApi.updateSkill({ ...skillData, id: skill.id });
        await swalSuccess('Сохранено!', 'Изменения сохранены');
      }

      router.push('/admin/skills/');
    } catch {
      setIsSubmitting(false);
      await swalError('Ошибка', 'Не удалось сохранить навык');
    }
  }

  const handleCancelClick = async () => {
    if (isDirty) {
      const result = await swalConfirm(UNSAVED_CHANGES_MESSAGE, '', 'Уйти');

      if (!result.isConfirmed) {
        return
      }
    }

    router.push('/admin/skills/');
  }

  return {
    isCreate,
    isSubmitting,
    iconPath,
    iconViewBox,
    iconColor,
    handleIconPathChange,
    handleIconColorChange,
    markDirty,
    handleFormSubmit,
    handleCancelClick,
  }
}
