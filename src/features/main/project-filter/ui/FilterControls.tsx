import './style.css';

import { FILTERS } from "@/shared/constants";

import type { IFilterControlsProps } from "../model/types";

export const FilterControls = ({ activeFilter, onFilterClick }: IFilterControlsProps) => {

  return (
    <div className='project-filter'>
      {FILTERS.map(item => (
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
