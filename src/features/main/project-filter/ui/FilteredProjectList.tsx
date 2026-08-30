'use client';

import { ProjectCard } from '@/entities/main/project';

import { useProjectFilter } from "../hooks/useProjectFilter";
import type { IFilteredProjectListProps } from "../model/types";
import { FilterControls } from "./FilterControls";

export const FilteredProjectList = ({ activeFilter, projects }: IFilteredProjectListProps) => {
  const { filteredProjects, handleFilterClick } = useProjectFilter(projects, activeFilter);

  return (
    <>
      <FilterControls
        activeFilter={activeFilter}
        onFilterClick={handleFilterClick}
      />

      <ul className="projects" aria-label="Список проектов">
        {filteredProjects.length
          ? filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
          : <div>Проектов в данной категории нет</div>
        }
      </ul>
    </>
  );
};
