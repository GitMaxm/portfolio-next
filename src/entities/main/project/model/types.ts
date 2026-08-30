/** В мок-данных id встречается и строкой, и числом — отражаем это честно. */
export type TProjectId = string | number;

export type TProjectStack = 'HTML' | 'React/Vite' | 'Next.js';

export interface IProjectImage {
  main?: string;
  preview?: string;
}

export interface IProjectLinks {
  gitHub?: string;
  preview?: string;
}

export interface IProject {
  id: TProjectId;
  title: string;
  stack: TProjectStack | string;
  description: string;
  tools: string[];
  image: IProjectImage;
  links: IProjectLinks;
}

export type TProjectDraft = Omit<IProject, 'id'>;
