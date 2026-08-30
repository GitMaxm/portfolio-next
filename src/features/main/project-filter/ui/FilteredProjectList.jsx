'use client';

import { ProjectCard } from '@/entities/main/project';

import { useProjectFilter } from "../hooks/useProjectFilter";
import { FilterControls } from "./FilterControls";

export const FilteredProjectList = ({ projects, activeFilter }) => {
  const { filteredProjects, handleFilter } = useProjectFilter(projects, activeFilter);

  return (
    <>
      <FilterControls
        activeFilter={activeFilter}
        setActiveFilter={handleFilter}
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