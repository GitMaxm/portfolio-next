import './style.css';

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';

import { type IProject, ProjectCard, projectsContent } from '@/entities/main/project';
import { PROJECT_IMAGE_SIZES, PROJECT_IMAGES_URL } from '@/shared/config';
import { BtnGitHub } from '@/shared/ui/main';

import type { IProjectPageProps } from './types';

export const dynamicParams = false;

export function generateStaticParams() {
  return projectsContent.getProjects().map((project) => ({ id: String(project.id) }));
}

const buildDescription = (project: IProject): string => {
  const tools = project.tools.length ? ` Инструменты: ${project.tools.join(', ')}.` : '';

  return `${project.description} Стек: ${project.stack}.${tools}`.trim();
};

export async function generateMetadata({ params }: IProjectPageProps): Promise<Metadata> {
  const { id } = await params;

  const project = projectsContent.getProjectById(id);

  if (!project) {
    return { title: 'Проект не найден' };
  }

  const path = `/project/${id}/`;
  const description = buildDescription(project);

  const cover = project.image?.main ?? project.image?.preview;

  return {
    title: project.title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      title: project.title,
      description,
      url: path,
      images: cover
        ? [{
          url: PROJECT_IMAGES_URL + cover,
          width: PROJECT_IMAGE_SIZES.main.width * 2,
          height: PROJECT_IMAGE_SIZES.main.height * 2,
          alt: project.title,
        }]
        : undefined,
    },
  };
}

const getDisplayUrl = (url: string): string => {
  try {
    const { host, pathname } = new URL(url);

    return host + pathname.replace(/\/$/, '');
  } catch {
    return url;
  }
};

const OTHER_PROJECTS_COUNT = 3;

const getOtherProjects = (project: IProject): IProject[] => {
  const projects = projectsContent.getProjects();
  const index = projects.findIndex((item) => String(item.id) === String(project.id));

  return projects
    .slice(index + 1)
    .concat(projects.slice(0, index))
    .slice(0, OTHER_PROJECTS_COUNT);
};

export default async function ProjectPage({ params }: IProjectPageProps) {
  const { id } = await params;

  const project = projectsContent.getProjectById(id);

  if (!project) {
    notFound();
  }

  const cover = project.image?.main ?? project.image?.preview;
  const tools = project.tools.filter((tool) => tool !== project.stack);
  const otherProjects = getOtherProjects(project);

  return (
    <main className="section">
      <div className="container">
        <Link href="/projects/" className="project-page__back">
          <FiArrowLeft aria-hidden/>
          Все проекты
        </Link>

        <article className="project-page">
          <header className="project-page__info">
            <h1 className="project-page__title">{project.title}</h1>

            {project.description && (
              <p className="project-page__lead">{project.description}</p>
            )}

            <dl className="project-page__facts">
              {project.stack && (
                <div>
                  <dt>Стек</dt>
                  <dd>{project.stack}</dd>
                </div>
              )}
              {tools.length > 0 && (
                <div>
                  <dt>Инструменты</dt>
                  <dd>{tools.join(', ')}</dd>
                </div>
              )}
            </dl>

            {(project.links.preview || project.links.gitHub) && (
              <div className="project-page__actions">
                {project.links.preview && (
                  <a
                    className="btn"
                    href={project.links.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Открыть сайт
                    <FiArrowUpRight aria-hidden/>
                  </a>
                )}
                {project.links.gitHub && <BtnGitHub gitHubLink={project.links.gitHub}/>}
              </div>
            )}
          </header>

          {cover && (
            <figure className={project.links.preview ? 'browser' : 'browser browser--plain'}>
              {project.links.preview && (
                <div className="browser__bar" aria-hidden>
                  <span className="browser__dots">
                    <i/><i/><i/>
                  </span>
                  <span className="browser__url">{getDisplayUrl(project.links.preview)}</span>
                </div>
              )}
              <Image
                src={PROJECT_IMAGES_URL + cover}
                alt={`Скриншот проекта «${project.title}»`}
                width={PROJECT_IMAGE_SIZES.main.width}
                height={PROJECT_IMAGE_SIZES.main.height}
                className="browser__img"
                priority
              />
            </figure>
          )}
        </article>

        {otherProjects.length > 0 && (
          <section className="project-more" aria-labelledby="project-more-title">
            <div className="project-more__head">
              <h2 id="project-more-title" className="project-more__title">Другие проекты</h2>
              <Link href="/projects/" className="project-more__all">Все проекты</Link>
            </div>

            <ul className="projects">
              {otherProjects.map((item) => <ProjectCard key={item.id} project={item}/>)}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}
