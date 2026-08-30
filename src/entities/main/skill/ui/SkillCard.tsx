import { getLevelClass } from '../lib/getLevelClass';
import { SkillIcon } from './SkillIcon';
import type { ISkillCardProps } from './types';

export const SkillCard = ({ skill }: ISkillCardProps) => {

  return (
    <li className="skill-card">
      <div className="skill-header">
        <div className="skill-icon">
          <SkillIcon
            path={skill.iconPath}
            color={skill.iconColor}
            viewBox={skill.iconViewBox}
            title={skill.name}
          />
        </div>
        <h3 className="skill-name">{skill.name}</h3>
        <span className={`skill-level ${getLevelClass(skill.level)}`}>
          {skill.level}
        </span>
      </div>
      <p className="skill-description">{skill.description}</p>
    </li>
  );
};
