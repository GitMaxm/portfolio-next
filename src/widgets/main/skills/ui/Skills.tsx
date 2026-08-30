import './style.css';

import { SkillCard, skillsApi } from '@/entities/main/skill';

export const Skills = async () => {
  const skills = await skillsApi.getSkills();

  return (
    <div className="skills">
      <h2 className="title-1">Мои навыки</h2>
      <p className="portfolio-description">
        Вот основные технологии, с которыми я работаю. Использую их в своих проектах — от вёрстки до создания
        интерфейсов на React и Next.js.
      </p>
      <ul className="skills-list">
        {skills.map(skill => (
          <SkillCard key={skill.id} skill={skill}/>
        ))}
      </ul>
    </div>
  );
};
