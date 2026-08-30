import type { IProject, TProjectId } from '@/entities/main/project';

export type TProjectFormMode = 'create' | 'edit';

export interface IProjectListProps {
  initialProjects: IProject[];
}

export interface IProjectTableProps {
  projects: IProject[];
  onEditClick: (id: TProjectId) => void;
  onDeleteClick: (id: TProjectId) => void;
}

export interface IProjectFormProps {
  project?: IProject;
  mode?: TProjectFormMode;
}
