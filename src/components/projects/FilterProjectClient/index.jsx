'use client';

import { useState } from 'react';
import FilterProject from '../FilterProject';
import ProjectCard from '../ProjectСard';

const FilterProjectClient = ({ projects }) => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter(project => project.category === activeFilter);

    return (
        <>
            <FilterProject activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

            <ul className="projects" aria-label="Список проектов">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </ul>
        </>
    );
};

export default FilterProjectClient;
