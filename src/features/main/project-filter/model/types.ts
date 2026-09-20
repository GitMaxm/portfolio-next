import type { IProject } from '@/entities/main/project';
import type { IProjectFilter } from '@/shared/model';

export interface IFilterControlsProps {
  filters: IProjectFilter[];
  activeFilter: string;
  onFilterClick: (filter: string) => void;
}

export interface IFilteredProjectListProps {
  activeFilter: string;
  projects: IProject[];
}
