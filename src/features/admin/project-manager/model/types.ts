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
