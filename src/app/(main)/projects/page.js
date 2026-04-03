import projectsData from '@/data/projects.json';
import FilterProjectClient from '@components/projects/FilterProjectClient';

const ProjectsPage = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Проекты</h2>

                <p className="portfolio-description">
                    Здесь собраны мои работы. Есть и верстка, и приложения на React.
                    Каждая работа включает ссылки на демо-версию и исходный код на GitHub.
                </p>

                <FilterProjectClient projects={projectsData} />
            </div>
        </main>
    );
};

export default ProjectsPage;