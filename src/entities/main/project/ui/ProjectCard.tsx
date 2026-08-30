import Image from 'next/image';
import Link from 'next/link';

import type { IProjectCardProps } from './types';

export const ProjectCard = ({ project }: IProjectCardProps) => {

  return (
    <li className="project">
      <Link
        href={`/project/${project.id}`}
        aria-label={`Перейти к проекту: ${project.title}`}
      >
        <div className="project-img-container">
          <Image
            src={`/img/projects/${project.image.preview}`}
            alt={`Обложка проекта: ${project.title}`}
            width={370}
            height={297}
            priority={true}
          />
        </div>
        <h3>{project.title}</h3>
      </Link>
    </li>
  );
}
