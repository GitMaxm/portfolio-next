'use client';

import { Suspense } from 'react';

import { buildFilters } from '../lib/buildFilters';
import type { IFilteredProjectListProps } from '../model/types';
import { useFilterNavigation, useProjectFilter } from '../model/useProjectFilter';
import { ProjectsView } from './ProjectsView';

const AllProjects = ({ projects }: IFilteredProjectListProps) => {
  const handleFilterClick = useFilterNavigation();

  return (
    <ProjectsView
      activeFilter="all"
      filters={buildFilters(projects)}
      projects={projects}
      onFilterClick={handleFilterClick}
    />
  );
};

const ProjectsFilteredByUrl = ({ projects }: IFilteredProjectListProps) => {
  const { activeFilter, filteredProjects, handleFilterClick } = useProjectFilter(projects);

  return (
    <ProjectsView
      activeFilter={activeFilter}
      filters={buildFilters(projects)}
      projects={filteredProjects}
      onFilterClick={handleFilterClick}
    />
  );
};

export const FilteredProjectList = ({ projects }: IFilteredProjectListProps) => {

  return (
    <Suspense fallback={<AllProjects projects={projects}/>}>
      <ProjectsFilteredByUrl projects={projects}/>
    </Suspense>
  );
};
