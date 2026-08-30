import type { ReactNode } from 'react';

/** Уровень владения навыком — влияет на CSS-модификатор карточки. */
export type TSkillLevel = 'уверенный' | 'практический' | 'базовый';

export interface ISkill {
  name: string;
  description: string;
  level: TSkillLevel;
  icon: ReactNode;
}
