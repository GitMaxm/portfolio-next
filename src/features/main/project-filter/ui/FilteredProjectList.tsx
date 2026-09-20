'use client';

import { ProjectCard } from '@/entities/main/project';

import { buildFilters } from "../lib/buildFilters";
import type { IFilteredProjectListProps } from "../model/types";
import { useProjectFilter } from "../model/useProjectFilter";
import { FilterControls } from "./FilterControls";

export const FilteredProjectList = ({ activeFilter, projects }: IFilteredProjectListProps) => {
  const { filteredProjects, handleFilterClick } = useProjectFilter(projects, activeFilter);

  const filters = buildFilters(projects);

  return (
    <>
      <FilterControls
        filters={filters}
        activeFilter={activeFilter}
        onFilterClick={handleFilterClick}
      />

      <ul className="projects" aria-label="Список проектов">
        {filteredProjects.length
          ? filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
          : <li className="projects-empty">В этой категории пока нет проектов</li>
        }
      </ul>
    </>
  );
};
