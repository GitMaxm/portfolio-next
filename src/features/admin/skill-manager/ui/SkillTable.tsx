import { SkillIcon, type TSkillLevel } from "@/entities/main/skill";
import { THEAD_SKILLS } from "@/shared/config";
import { Button, ButtonLink } from "@/shared/ui/admin";

import type { ISkillTableProps } from '../model/types';
import styles from './SkillTable.module.scss';

const LEVEL_TONE: Record<TSkillLevel, string> = {
  'уверенный': styles.toneHigh,
  'практический': styles.toneMid,
  'базовый': styles.toneLow,
};

export const SkillTable = ({ skills, deletingId, onDeleteClick }: ISkillTableProps) => {

  if (skills.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyTitle}>Навыков пока нет</p>
        <p className={styles.emptyText}>Добавьте первый — он появится в блоке «Навыки» на сайте.</p>
        <ButtonLink href="/admin/skills/new/" variant="primary">Добавить навык</ButtonLink>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              {THEAD_SKILLS.map((item) => (
                <th key={item.id}>{item.title}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {skills.map(({ id, name, level, description, iconPath, iconColor, iconViewBox }) => (
              <tr key={id} className={deletingId === id ? styles.rowBusy : ''}>
                <td className={styles.mono}>{id}</td>

                <td>
                  <SkillIcon
                    path={iconPath}
                    color={iconColor}
                    viewBox={iconViewBox}
                    size={24}
                    title={name}
                  />
                </td>

                <td className={styles.strong}>{name}</td>

                <td>
                  <span className={`${styles.level} ${LEVEL_TONE[level] ?? ''}`}>{level}</span>
                </td>

                <td className={styles.cellWide}>
                  <span className={styles.clamp}>{description}</span>
                </td>

                <td>
                  <span className={styles.rowActions}>
                    <ButtonLink
                      href={`/admin/skills/edit/${id}/`}
                      size="sm"
                      title={`Изменить «${name}»`}
                    >
                      Изменить
                    </ButtonLink>

                    <Button
                      size="sm"
                      variant="danger"
                      disabled={deletingId === id}
                      onClick={() => onDeleteClick(id)}
                      title={`Удалить «${name}»`}
                    >
                      {deletingId === id ? 'Удаление…' : 'Удалить'}
                    </Button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
