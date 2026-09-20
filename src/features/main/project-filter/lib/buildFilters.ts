import { type IProject, STACK_OPTIONS, type TProjectStack } from '@/entities/main/project';
import type { IProjectFilter } from '@/shared/model';

const ALL: IProjectFilter = { title: 'Все', category: 'all' };

const isKnownStack = (stack: string): stack is TProjectStack =>
  (STACK_OPTIONS as string[]).includes(stack);

export const buildFilters = (projects: IProject[]): IProjectFilter[] => {
  const present = new Set(projects.map((project) => project.stack).filter(Boolean));

  const known = STACK_OPTIONS.filter((stack) => present.has(stack));
  const unknown = [...present].filter((stack) => !isKnownStack(stack)).sort();

  return [ALL, ...[...known, ...unknown].map((stack) => ({ title: stack, category: stack }))];
};
