import Link from 'next/link';

import { SkillIcon } from '@/entities/main/skill';
import { ButtonLink } from '@/shared/ui/admin';

import type { IDashboardProps } from '../model/types';
import styles from './index.module.scss';

export const Dashboard = ({ projects, skills }: IDashboardProps) => {

  return (
    <div className={styles.dashboard}>

      <section className={styles.section}>
        <header className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Навыки</h2>
          <span className={styles.count}>{skills.length}</span>
          <ButtonLink href="/admin/skills/" size="sm">Все навыки</ButtonLink>
        </header>

        {skills.length === 0
          ? <p className={styles.blank}>Пока ни одного навыка.</p>
          : (
            <ul className={styles.stack}>
              {skills.map(({ id, name, level, iconPath, iconColor, iconViewBox }) => (
                <li key={id} className={styles.chip}>
                  <SkillIcon
                    path={iconPath}
                    color={iconColor}
                    viewBox={iconViewBox}
                    size={28}
                    title={name}
                  />
                  <span className={styles.chipName}>{name}</span>
                  <span className={styles.chipLevel}>{level}</span>
                </li>
              ))}
            </ul>
          )
        }
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Проекты</h2>
          <span className={styles.count}>{projects.length}</span>
          <ButtonLink href="/admin/projects/" size="sm">Все проекты</ButtonLink>
        </header>

        {projects.length === 0
          ? <p className={styles.blank}>Пока ни одного проекта.</p>
          : (
            <ul className={styles.rows}>
              {projects.map(({ id, title, stack }) => (
                <li key={id}>
                  <Link href={`/admin/projects/edit/${id}/`} className={styles.row}>
                    <span className={styles.rowId}>{id}</span>
                    <span className={styles.rowTitle}>{title}</span>
                    <span className={styles.rowStack}>{stack}</span>
                    <span className={styles.rowGo}>Изменить</span>
                  </Link>
                </li>
              ))}
            </ul>
          )
        }
      </section>

    </div>
  )
}
