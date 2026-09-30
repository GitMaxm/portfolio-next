import type { IProject } from '@/entities/main/project';
import type { IProjectFilter } from '@/shared/model';

export interface IFilterControlsProps {
  filters: IProjectFilter[];
  activeFilter: string;
  onFilterClick: (filter: string) => void;
}

export interface IFilteredProjectListProps {
  projects: IProject[];
}

export interface IProjectsViewProps {
  activeFilter: string;
  filters: IProjectFilter[];
  projects: IProject[];
  onFilterClick: (filter: string) => void;
}
