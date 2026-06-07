'use client';

import { usePathname, useRouter } from 'next/navigation';

import { FilterControls } from "./FilterControls";
import { ProjectCard } from '@/entities/main/project';

export const FilteredProjectList = ({ projects, activeFilter }) => {
  const router = useRouter();
  const pathname = usePathname();

  let filteredProjects;
  if (activeFilter === 'all') {
    filteredProjects = projects;
  } else {
    filteredProjects = projects.filter(project => project.stack === activeFilter);
  }

  const handleFilter = (filter) => {
    let params;
    if (filter === 'all') {
      params = '';
    } else {
      params = `?stack=${filter}`;
    }
    router.push(pathname + params);
  };

  return (
    <>
      <FilterControls
        activeFilter={activeFilter}
        setActiveFilter={handleFilter}
      />
      <ul className="projects" aria-label="Список проектов">
        {filteredProjects.length
          ? filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))
          : <div>Проектов нет</div>
        }
      </ul>
    </>
  );
};