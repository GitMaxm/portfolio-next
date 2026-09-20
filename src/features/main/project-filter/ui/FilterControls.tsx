
import type { IFilterControlsProps } from "../model/types";

export const FilterControls = ({ filters, activeFilter, onFilterClick }: IFilterControlsProps) => {

  return (
    <div className='project-filter'>
      {filters.map(item => (
        <button
          className={activeFilter === item.category ? 'active' : ''}
          key={item.category}
          onClick={() => onFilterClick(item.category)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};
