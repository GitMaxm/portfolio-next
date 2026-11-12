import './style.css';

import { ProjectCard } from '@/entities/main/project';

import type { IProjectsViewProps } from '../model/types';
import { FilterControls } from './FilterControls';

const pluralizeProjects = (count: number): string => {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return 'проект';
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return 'проекта';
  }

  return 'проектов';
};

export const ProjectsView = ({ activeFilter, filters, projects, onFilterClick }: IProjectsViewProps) => {

  return (
    <>
      <FilterControls
        filters={filters}
        activeFilter={activeFilter}
        onFilterClick={onFilterClick}
      />

      <h2 className="projects-count" aria-live="polite">
        {projects.length} {pluralizeProjects(projects.length)}
      </h2>

      <ul className="projects">
        {projects.length
          ? projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
          : <li className="projects-empty">В этой категории пока нет проектов</li>
        }
      </ul>
    </>
  );
};
