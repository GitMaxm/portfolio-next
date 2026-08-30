import type { IProject } from '@/entities/main/project';

export interface IFilterControlsProps {
  activeFilter: string;
  onFilterClick: (filter: string) => void;
}

export interface IFilteredProjectListProps {
  activeFilter: string;
  projects: IProject[];
}
