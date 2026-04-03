import Image from 'next/image';
import Link from 'next/link';

const ProjectСard = ({ project }) => {
    return (
        <li className="project" >
            <Link
                href={`/src/app/(main)/project/${project.id}`}
                aria-label={`Перейти к проекту: ${project.title}`}
            >
                <div className="project-img-container">
                    <Image
                        src={`/img/projects/${project.img}`}
                        alt={`Обложка проекта: ${project.title}`}
                        width={370}
                        height={297} priority={true}
                    />
                </div>
                <h3>{project.title}</h3>
            </Link>
        </li>
    );
}

export default ProjectСard;