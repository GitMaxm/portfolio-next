import './style.css';
import Link from 'next/link';
import projectsData from '@/data/projects.json';
import ProjectСard from '@/components/projects/ProjectСard';

const PortfolioPreview = () => {

    const featuredProjects = projectsData.slice(0, 3);

    return (
        <div className="portfolio-preview">
            <h2 className="title-1">Последние проекты проекты</h2>
            <p className="portfolio-description">В этом разделе собраны наши ключевые проекты и комплексные решения.
                Каждый кейс — это пример системного подхода к созданию идеального микроклимата для жилых, коммерческих и общественных пространств.</p>

            <ul className="projects" aria-label="Превью проектов">
                {featuredProjects.map(project => <ProjectСard key={project.id} project={project} />)}
            </ul>

            <div className="portfolio-preview__more">
                <Link href="/projects" className="btn btn--more">
                    Все проекты
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default PortfolioPreview;