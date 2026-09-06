import type { ISkill, TSkillId } from '@/entities/main/skill';

export type TSkillFormMode = 'create' | 'edit';

export interface ISkillListProps {
  initialSkills: ISkill[];
}

export interface ISkillTableProps {
  skills: ISkill[];
  onDeleteClick: (id: TSkillId) => void;
  /** Строка, по которой сейчас идёт удаление: её кнопки блокируются. */
  deletingId: TSkillId | null;
}

export interface ISkillFormProps {
  skill?: ISkill;
  mode?: TSkillFormMode;
}
