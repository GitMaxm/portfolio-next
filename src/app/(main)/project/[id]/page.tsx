import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

import { type IProject, projectsContent } from '@/entities/main/project';
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

const getSiblings = (project: IProject) => {
  const projects = projectsContent.getProjects();
  const index = projects.findIndex((item) => String(item.id) === String(project.id));

  if (projects.length < 2 || index === -1) {
    return null;
  }

  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
};

export default async function ProjectPage({ params }: IProjectPageProps) {
  const { id } = await params;

  const project = projectsContent.getProjectById(id);

  if (!project) {
    notFound();
  }

  const cover = project.image?.main ?? project.image?.preview;
  const siblings = getSiblings(project);

  return (
    <main className="section">
      <div className="container">
        <article className="project-page">
          <Link href="/projects/" className="project-page__back">
            <FiArrowLeft aria-hidden/>
            Все проекты
          </Link>

          <header className="project-page__head">
            <h1 className="title-1 project-page__title">{project.title}</h1>

            {project.description && (
              <p className="project-page__lead">{project.description}</p>
            )}

            <ul className="project__tools project-page__tags" aria-label="Стек и инструменты">
              {project.stack && <li className="project__stack">{project.stack}</li>}
              {project.tools
                .filter((tool) => tool !== project.stack)
                .map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
            </ul>

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
            <figure className="browser">
              <div className="browser__bar" aria-hidden>
                <span className="browser__dots">
                  <i/><i/><i/>
                </span>
                {project.links.preview && (
                  <span className="browser__url">{getDisplayUrl(project.links.preview)}</span>
                )}
              </div>
              <Image
                src={PROJECT_IMAGES_URL + cover}
                alt={`Скриншот сайта «${project.title}»`}
                width={PROJECT_IMAGE_SIZES.main.width}
                height={PROJECT_IMAGE_SIZES.main.height}
                className="browser__img"
                priority
              />
            </figure>
          )}

          {siblings && (
            <nav className="project-pager" aria-label="Другие проекты">
              <Link href={`/project/${siblings.prev.id}`} className="project-pager__link">
                <span className="project-pager__label">
                  <FiArrowLeft aria-hidden/>
                  Предыдущий
                </span>
                <span className="project-pager__title">{siblings.prev.title}</span>
              </Link>
              <Link
                href={`/project/${siblings.next.id}`}
                className="project-pager__link project-pager__link--next"
              >
                <span className="project-pager__label">
                  Следующий
                  <FiArrowRight aria-hidden/>
                </span>
                <span className="project-pager__title">{siblings.next.title}</span>
              </Link>
            </nav>
          )}
        </article>
      </div>
    </main>
  );
}
