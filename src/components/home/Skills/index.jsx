import './style.css';
import skills from '@/data/skills';

const SkillsFlex = () => {


    const getLevelClass = (level) => {
        switch (level) {
            case 'уверенный': return 'skill-level--confident';
            case 'базовый': return 'skill-level--basic';
            case 'практический': return 'skill-level--practical';
            default: return '';
        }
    };

    return (
        <div className="skills">
            <h2 className="title-1">Мои навыки</h2>
            <p className="portfolio-description">
                Вот основные технологии, с которыми я работаю. Использую их в своих проектах — от вёрстки до создания интерфейсов на React и Next.js.
            </p>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-card">
                        <div className="skill-header">
                            <div className="skill-icon">{skill.icon}</div>
                            <h3 className="skill-name">{skill.name}</h3>
                            <span className={`skill-level ${getLevelClass(skill.level)}`}>
                                {skill.level}
                            </span>
                        </div>
                        <p className="skill-description">{skill.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsFlex;