import type { Metadata } from 'next';

import { projectsContent } from '@/entities/main/project';
import { FilteredProjectList } from '@/features/main/project-filter';

export const metadata: Metadata = {
  title: 'Проекты',
  description:
    'Работы фронтенд-разработчика Максима Иваненко: вёрстка лендингов и приложения ' +
    'на React и Next.js. У каждого проекта есть демо и исходный код на GitHub.',
  alternates: { canonical: '/projects/' },
};

const ProjectsPage = () => {
  const projects = projectsContent.getProjects();

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Проекты</h1>
        <p className="portfolio-description">
          Здесь собраны мои работы. Есть и вёрстка, и приложения на React.
          Каждая работа включает ссылки на демо-версию и исходный код на GitHub.
        </p>
        <FilteredProjectList projects={projects}/>
      </div>
    </main>
  );
};

export default ProjectsPage;
