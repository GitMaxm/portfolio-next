import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { type IProject, projectsApi } from '@/entities/main/project';
import { PROJECT_IMAGE_SIZES, PROJECT_IMAGES_URL } from '@/shared/config';
import { BtnGitHub } from '@/shared/ui/main';

import type { IProjectPageProps } from './types';

export default async function ProjectPage({ params }: IProjectPageProps) {
  const { id } = await params;

  let project: IProject;

  try {
    project = await projectsApi.getProjectById(id);
  } catch {
    notFound();
  }

  if (!project) {
    notFound();
  }

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <Image
            src={PROJECT_IMAGES_URL + project.image.main}
            alt={project.title}
            width={PROJECT_IMAGE_SIZES.main.width}
            height={PROJECT_IMAGE_SIZES.main.height}
            className="project-details__img"
          />

          <p className="project-details__desc">
            <span>Стек</span>: {project.stack}
          </p>

          {project.tools.length > 0 && (
            <div className="project-details__desc">
              <span>Инструменты</span>:
              <ul className="project__tools project__tools--center">
                {project.tools.map(tool => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          )}

          <p className="project-details__desc">
            <span>Описание</span>: {project.description}
          </p>

          <div className="project-details__links">
            {project.links.gitHub && <BtnGitHub gitHubLink={project.links.gitHub}/>}
            {project.links.preview && (
              <Link
                className="btn-outline"
                href={project.links.preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ссылка на сайт
              </Link>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
