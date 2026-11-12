import { getLevelClass } from '../lib/getLevelClass';
import { SkillIcon } from './SkillIcon';
import type { ISkillCardProps } from './types';

export const SkillCard = ({
  skill,
  compact = false,
  showLevel = true,
  headingAs: Heading = 'h3',
}: ISkillCardProps) => {

  return (
    <li className={compact ? 'skill-card skill-card--compact' : 'skill-card'}>
      <div className="skill-header">
        <div className="skill-icon">
          <SkillIcon
            path={skill.iconPath}
            color={skill.iconColor}
            viewBox={skill.iconViewBox}
            size={compact ? 24 : undefined}
          />
        </div>
        <Heading className="skill-name">{skill.name}</Heading>
        {showLevel && (
          <span className={`skill-level ${getLevelClass(skill.level)}`}>
            {skill.level}
          </span>
        )}
      </div>
      {!compact && <p className="skill-description">{skill.description}</p>}
    </li>
  );
};
