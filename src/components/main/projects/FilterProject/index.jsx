import './style.css';

import { FILTERS } from "@/constants/filters";

const FilterProject = ({ activeFilter, setActiveFilter }) => {

  return (
    <div className='project-filter'>
      {FILTERS.map(item => (
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
