import Link from 'next/link';
import projectsData from '@/data/projects.json';

const ProjectsPage = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Проекты</h2>
                <ul className="projects">
                    {projectsData.map(project => (
                        <li className="project" key={project.id}>
                            <Link href={`/project/${project.id}`}>
                                <div className="project-img-container">
                                    <img src={`/img/projects/${project.img}`} alt={project.title} />
                                </div>
                                <h3>{project.title}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default ProjectsPage;
