import FilterProjectClient from '@/features/main/FilterProjectClient';

import { projectsServiceApi } from "@/app/services/projectsService";

const ProjectsPage = async ({ searchParams }) => {
  const { stack } = await searchParams;
  const projects = await projectsServiceApi.getProjects();
  const activeFilter = stack || 'all';

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Проекты</h2>
        <p className="portfolio-description">
          Здесь собраны мои работы. Есть и вёрстка, и приложения на React.
          Каждая работа включает ссылки на демо-версию и исходный код на GitHub.
        </p>
        <FilterProjectClient
          projects={projects}
          activeFilter={activeFilter}
        />
      </div>
    </main>
  );
};

export default ProjectsPage;