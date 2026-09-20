import type { IProject, TProjectId } from '@/entities/main/project';

export type TProjectFormMode = 'create' | 'edit';

export interface IProjectListProps {
  initialProjects: IProject[];
}

export interface IProjectTableProps {
  projects: IProject[];
  onDeleteClick: (id: TProjectId) => void;
  /** Строка, по которой сейчас идёт удаление: её кнопки блокируются. */
  deletingId: TProjectId | null;
}

export interface IProjectFormProps {
  project?: IProject;
  mode?: TProjectFormMode;
}

/** Откуда берётся картинка: файл с диска или скриншот сайта по ссылке. */
export type TImageTask = 'upload' | 'capture';

export interface IImageUploadProps {
  fileName?: string;
  /** Подпись занятости. Пока она есть, зона показывает её вместо превью. */
  busyLabel?: string;
  onSelect: (file: File) => void;
  onRemove: () => void;
}
