import './style.css';

import Image from 'next/image';
import Link from 'next/link';

import { PROJECT_IMAGE_SIZES, PROJECT_IMAGES_URL } from '@/shared/config';

import type { IProjectLinks } from '../model/types';
import type { IProjectCardProps } from './types';

const VISIBLE_TOOLS = 4;

const getLinksLabel = ({ preview, gitHub }: IProjectLinks): string | null => {
  if (preview && gitHub) {
    return 'Демо и код';
  }

  if (preview) {
    return 'Демо';
  }

  return gitHub ? 'Код на GitHub' : null;
};

export const ProjectCard = ({ project }: IProjectCardProps) => {
  const cover = project.image?.preview ?? project.image?.main;
  const linksLabel = getLinksLabel(project.links);
  const tools = (project.tools ?? []).filter((tool) => tool !== project.stack);

  return (
    <li className="project">
      <Link href={`/project/${project.id}`}>
        {cover && (
          <div className="project-img-container">
            <Image
              src={PROJECT_IMAGES_URL + cover}
              alt=""
              width={PROJECT_IMAGE_SIZES.preview.width}
              height={PROJECT_IMAGE_SIZES.preview.height}
            />
          </div>
        )}

        <div className="project__body">
          <h3 className="project__title">{project.title}</h3>

          {project.description && <p className="project__description">{project.description}</p>}

          <div className="project__meta">
            {project.stack && <span className="project__stack">{project.stack}</span>}
            {linksLabel && <span className="project__links">{linksLabel}</span>}
          </div>

          {tools.length > 0 && (
            <ul className="project__tools">
              {tools.slice(0, VISIBLE_TOOLS).map((tool) => (
                <li key={tool}>{tool}</li>
              ))}

              {tools.length > VISIBLE_TOOLS && (
                <li>+{tools.length - VISIBLE_TOOLS}</li>
              )}
            </ul>
          )}
        </div>
      </Link>
    </li>
  );
}
