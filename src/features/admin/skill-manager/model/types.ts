import type { ISkill, TSkillId } from '@/entities/main/skill';

export type TSkillFormMode = 'create' | 'edit';

export interface ISkillListProps {
  initialSkills: ISkill[];
}

export interface ISkillTableProps {
  skills: ISkill[];
  onEditClick: (id: TSkillId) => void;
  onDeleteClick: (id: TSkillId) => void;
}

export interface ISkillFormProps {
  skill?: ISkill;
  mode?: TSkillFormMode;
}
