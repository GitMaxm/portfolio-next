import type { IFilterControlsProps } from "../model/types";

export const FilterControls = ({ filters, activeFilter, onFilterClick }: IFilterControlsProps) => {

  return (
    <div className="project-filter" role="group" aria-label="Фильтр по стеку">
      {filters.map(item => (
        <button
          type="button"
          className={activeFilter === item.category ? 'active' : ''}
          key={item.category}
          aria-pressed={activeFilter === item.category}
          onClick={() => onFilterClick(item.category)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};
