/** В мок-данных id встречается и строкой, и числом — отражаем это честно. */
export type TProjectId = string | number;

export type TProjectStack = 'HTML' | 'React/Vite' | 'Next.js';

export interface IProjectImage {
  /** Большая картинка на странице проекта */
  main?: string;
  /** Превью на карточке в списке */
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

/** Проект без id — то, что уходит на сервер при создании. */
export type TProjectDraft = Omit<IProject, 'id'>;
