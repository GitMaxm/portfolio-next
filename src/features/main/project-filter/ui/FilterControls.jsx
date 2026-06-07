import './style.css';

import { FILTERS } from "@/shared/constants";

export const FilterControls = ({ activeFilter, setActiveFilter }) => {

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
