import type { ISkill } from '../model/types';

export interface ISkillIconProps {
  path: string;
  color: string;
  viewBox?: string;
  size?: number;
  title?: string;
}

export interface ISkillCardProps {
  skill: ISkill;
  compact?: boolean;
  headingAs?: 'h3' | 'h4';
}
