import './style.css';

import { SkillCard, skillsContent } from '@/entities/main/skill';
import { SectionHead } from '@/shared/ui/main';

export const Skills = () => {
  const skills = skillsContent.getSkills();

  return (
    <div className="skills">
      <SectionHead title="Мои навыки" path="~/skills">
        Вот основные технологии, с которыми я работаю. Использую их в своих проектах — от вёрстки до создания
        интерфейсов на React и Next.js.
      </SectionHead>
      <ul className="skills-list">
        {skills.map(skill => (
          <SkillCard key={skill.id} skill={skill}/>
        ))}
      </ul>
    </div>
  );
};
