import { ProjectCard } from '@/entities/main/project';

import type { IProjectsViewProps } from '../model/types';
import { FilterControls } from './FilterControls';

export const ProjectsView = ({ activeFilter, filters, projects, onFilterClick }: IProjectsViewProps) => {

  return (
    <>
      <FilterControls
        filters={filters}
        activeFilter={activeFilter}
        onFilterClick={onFilterClick}
      />

      <ul className="projects" aria-label="Список проектов">
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
