import type { TSkillLevel } from '@/shared/model';

export const getLevelClass = (level: TSkillLevel): string => {
  switch (level) {
    case 'уверенный':
      return 'skill-level--confident';
    case 'базовый':
      return 'skill-level--basic';
    case 'практический':
      return 'skill-level--practical';
    default:
      return '';
  }
};
