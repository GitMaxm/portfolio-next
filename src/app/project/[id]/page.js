import projectsData from '@/data/projects.json';
import Image from 'next/image';
import BtnGitHub from '@/components/BtnGitHub';
import Link from 'next/link';

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        id: project.id.toString(),
    }));
}

const getProject = (id) => {
    return projectsData.find((project) => project.id.toString() === id);
};

export default function ProjectPage({ params }) {
    const { id } = params;
    const project = getProject(id);

    if (!project) return <div>Проект не найден</div>;

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    <Image
                        src={`/img/projects/${project.imgBig}`}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="project-details__img"
                    />

                    <div className="project-details__desc">
                        <p><span>Тема</span>: {project.topic}</p>
                    </div>

                    <div className="project-details__desc">
                        <p><span>Описание</span>: {project.description}</p>
                    </div>

                    <div className="project-details__links">
                        {project.gitHub && <BtnGitHub gitHubLink={project.gitHub} />}
                        {project.gitHubLink && (
                            <Link href={project.gitHubLink} target="_blank" className="btn-outline">
                                Ссылка на сайт
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
