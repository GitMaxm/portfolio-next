import { SKILL_ICON_SIZE, SKILL_ICON_VIEW_BOX } from '../config/skillOptions';
import type { ISkillIconProps } from './types';

/** В DOM уходит только атрибут d, чужая разметка не вставляется — отсюда защита от XSS. */
export const SkillIcon = ({
  path,
  color,
  viewBox = SKILL_ICON_VIEW_BOX,
  size = SKILL_ICON_SIZE,
  title,
}: ISkillIconProps) => {

  return (
    <svg
      viewBox={viewBox}
      width={size}
      height={size}
      fill={color}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <path d={path}/>
    </svg>
  );
};
