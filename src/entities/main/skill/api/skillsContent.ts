import content from '@content/portfolio.json';

import type { ISkill } from '../model/types';

const skills = content.skills as ISkill[];

export const skillsContent = {
  getSkills() {
    return skills;
  },
};
