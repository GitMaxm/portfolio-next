

import './style.css';

const FilterProject = ({ activeFilter, setActiveFilter }) => {

    const filters = [
        { title: 'Все', category: 'all' },
        { title: 'HTML', category: 'HTML' },
        { title: 'React', category: 'React' }
    ];

    return (
        <div className='project-filter'>
            {filters.map(item => (
                <button
                    className={activeFilter === item.category ? 'active' : ''}
                    key={item.category}
                    onClick={() => setActiveFilter(item.category)}
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
};

export default FilterProject;
