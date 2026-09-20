import { projectsApi } from '@/entities/main/project';
import { FilteredProjectList } from '@/features/main/project-filter';

import type { IProjectsPageProps } from './types';

const ProjectsPage = async ({ searchParams }: IProjectsPageProps) => {
  const { stack } = await searchParams;
  const projects = await projectsApi.getProjects();

  const activeFilter = stack || 'all';

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Проекты</h1>
        <p className="portfolio-description">
          Здесь собраны мои работы. Есть и вёрстка, и приложения на React.
          Каждая работа включает ссылки на демо-версию и исходный код на GitHub.
        </p>
        <FilteredProjectList
          projects={projects}
          activeFilter={activeFilter}
        />
      </div>
    </main>
  );
};

export default ProjectsPage;
