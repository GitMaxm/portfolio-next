import type { Metadata } from 'next';

import { projectsContent } from '@/entities/main/project';
import { FilteredProjectList } from '@/features/main/project-filter';
import { SectionHead } from '@/shared/ui/main';

export const metadata: Metadata = {
  title: 'Проекты',
  description:
    'Работы фронтенд-разработчика Максима Иваненко: вёрстка лендингов, веб-приложения ' +
    'на React и Next.js и нативные приложения. Демо и исходный код на GitHub.',
  alternates: { canonical: '/projects/' },
};

const ProjectsPage = () => {
  const projects = projectsContent.getProjects();

  return (
    <main className="section">
      <div className="container">
        <SectionHead as="h1" title="Проекты" path="~/projects">
          Здесь собраны мои работы: вёрстка лендингов, веб-приложения на React и Next.js
          и нативные приложения. Ссылки на демо и код — на странице проекта.
        </SectionHead>
        <FilteredProjectList projects={projects}/>
      </div>
    </main>
  );
};

export default ProjectsPage;
