import type { IProject } from '@/entities/main/project';
import type { ISkill } from '@/entities/main/skill';

export interface IDashboardProps {
  projects: IProject[];
  skills: ISkill[];
}
