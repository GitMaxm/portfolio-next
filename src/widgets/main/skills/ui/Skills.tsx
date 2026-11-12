import './style.css';

import { type ISkill, SkillCard, skillsContent } from '@/entities/main/skill';
import { SectionHead } from '@/shared/ui/main';

interface ISkillGroup {
  id: string;
  title: string;
  names: string[];
  compact: boolean;
}

const SKILL_GROUPS: ISkillGroup[] = [
  { id: 'core', title: 'Основа', names: ['React', 'Next.js', 'TypeScript', 'JavaScript'], compact: false },
  { id: 'markup', title: 'Вёрстка', names: ['HTML5', 'CSS3', 'SCSS', 'Tailwind'], compact: true },
  { id: 'tools', title: 'Библиотеки и инструменты', names: [], compact: true },
];

const groupSkills = (skills: ISkill[]) => {
  const grouped = new Set(SKILL_GROUPS.flatMap((group) => group.names));

  return SKILL_GROUPS.map((group) => ({
    ...group,
    skills: group.names.length
      ? group.names.flatMap((name) => skills.filter((skill) => skill.name === name))
      : skills.filter((skill) => !grouped.has(skill.name)),
  })).filter((group) => group.skills.length > 0);
};

export const Skills = () => {
  const groups = groupSkills(skillsContent.getSkills());

  return (
    <div className="skills">
      <SectionHead title="Мои навыки">
        Основной стек: React и Next.js на TypeScript, вокруг него вёрстка и инструменты.
      </SectionHead>

      <div className="skills-groups">
        {groups.map((group) => (
          <section key={group.id} className="skills-group" aria-labelledby={`skills-${group.id}`}>
            <h3 id={`skills-${group.id}`} className="skills-group__title">{group.title}</h3>

            <ul className={group.compact ? 'skills-list skills-list--compact' : 'skills-list'}>
              {group.skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} compact={group.compact} headingAs="h4"/>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};
