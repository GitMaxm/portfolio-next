/** json-server отдаёт id как строку, но в моках встречаются и числа. */
export type TSkillId = string | number;

export type TSkillLevel = 'уверенный' | 'практический' | 'базовый';

export interface ISkill {
  id: TSkillId;
  name: string;
  description: string;
  level: TSkillLevel;
  /** Строка d одиночного <path> в сетке 24×24 (формат Simple Icons). */
  iconPath: string;
  iconColor: string;
  iconViewBox?: string;
}

export type TSkillDraft = Omit<ISkill, 'id'>;
