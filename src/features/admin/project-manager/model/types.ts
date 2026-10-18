import type { IProject, IProjectImage, TProjectId } from '@/entities/main/project';

export type TProjectFormMode = 'create' | 'edit';

export interface IProjectListProps {
  initialProjects: IProject[];
}

export interface IProjectTableProps {
  projects: IProject[];
  onDeleteClick: (id: TProjectId) => void;

  deletingId: TProjectId | null;
}

export interface IProjectFormProps {
  project?: IProject;
  mode?: TProjectFormMode;
}

export type TImageTask = 'upload' | 'capture';

export interface IImageUploadProps {
  fileName?: string;

  busyLabel?: string;
  onSelect: (file: File) => void;
  onRemove: () => void;
}

export interface IProjectToolsFieldProps {
  selectedTools: Set<string>;
  onToolClick: (tool: string) => void;
}

export interface IProjectImageFieldProps {
  image: IProjectImage;
  canCapture: boolean;
  busyLabel?: string;
  onSelect: (file: File) => void;
  onCapture: () => void;
  onRemove: () => void;
}

export interface IProjectLinksFieldProps {
  gitHubLink: string;
  previewLink: string;
  onPreviewLinkChange: (value: string) => void;
}
