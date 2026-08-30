import { SkillIcon } from "@/entities/main/skill";
import { THEAD_SKILLS } from "@/shared/config";

import type { ISkillTableProps } from '../model/types';
import styles from './SkillTable.module.scss';

export const SkillTable = ({ skills, onEditClick, onDeleteClick }: ISkillTableProps) => {

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {THEAD_SKILLS.map((item) => (
            <th className={styles[item.id]} key={item.id}>{item.title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {skills.map(({ id, name, level, description, iconPath, iconColor, iconViewBox }) => (
          <tr key={id}>
            <td className={styles.id}>{id}</td>
            <td>
              <SkillIcon path={iconPath} color={iconColor} viewBox={iconViewBox} size={28} title={name}/>
            </td>
            <td>{name}</td>
            <td>{level}</td>
            <td>{description}</td>
            <td>
              <ul>
                <li>
                  <button onClick={() => onEditClick(id)}>Редактировать</button>
                </li>
                <li>
                  <button onClick={() => onDeleteClick(id)}>Удалить</button>
                </li>
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
