import './style.css';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import { ProjectCard, projectsContent } from '@/entities/main/project';
import { SectionHead } from '@/shared/ui/main';

const SELF_PROJECT_ID = 'portfolio';
const FEATURED_COUNT = 3;

export const PreviewProjects = () => {
  const featuredProjects = projectsContent
    .getProjects()
    .filter((project) => project.id !== SELF_PROJECT_ID)
    .slice(0, FEATURED_COUNT);

  return (
    <div className="portfolio-preview">
      <SectionHead title="Последние проекты">
        Три последние работы. Остальные, от вёрстки лендингов
        до приложений на React, собраны на странице со всеми проектами.
      </SectionHead>

      <ul className="projects projects--trio">
        {featuredProjects.map(project => <ProjectCard key={project.id} project={project}/>)}
      </ul>

      <div className="portfolio-preview__more">
        <Link href="/projects/" className="btn btn--more">
          Все проекты
          <FiArrowRight aria-hidden="true"/>
        </Link>
      </div>
    </div>
  );
};
