import { THEAD_TABLE } from "@/shared/config";
import { Button, ButtonLink } from "@/shared/ui/admin";

import type { IProjectTableProps } from '../model/types';
import styles from './ProjectTable.module.scss';

const renderTools = (tools: string[]) => (
  Array.isArray(tools) && tools.length > 0 ? tools.join(' · ') : '—'
);

export const ProjectTable = ({ projects, deletingId, onDeleteClick }: IProjectTableProps) => {

  if (projects.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyTitle}>Проектов пока нет</p>
        <p className={styles.emptyText}>Добавьте первый — он сразу появится на сайте.</p>
        <ButtonLink href="/admin/projects/new/" variant="primary">Добавить проект</ButtonLink>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              {THEAD_TABLE.map((item) => (
                <th key={item.id}>{item.title}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {projects.map(({ id, title, stack, tools, description, image, links }) => (
              <tr key={id} className={deletingId === id ? styles.rowBusy : ''}>
                <td className={styles.mono}>{id}</td>

                <td className={styles.strong}>{title}</td>

                <td><span className={styles.tag}>{stack}</span></td>

                <td className={styles.cellWide}>
                  <span className={styles.clamp}>{renderTools(tools)}</span>
                </td>

                <td className={styles.cellWide}>
                  <span className={styles.clamp}>{description}</span>
                </td>

                <td className={styles.mono}>
                  <span className={styles.stackList}>
                    <span>{image.main || '—'}</span>
                    <span>{image.preview || '—'}</span>
                  </span>
                </td>

                <td>
                  <span className={styles.stackList}>
                    <a href={links.gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={links.preview} target="_blank" rel="noopener noreferrer">Превью</a>
                  </span>
                </td>

                <td>
                  <span className={styles.rowActions}>
                    <ButtonLink
                      href={`/admin/projects/edit/${id}/`}
                      size="sm"
                      title={`Изменить «${title}»`}
                    >
                      Изменить
                    </ButtonLink>

                    <Button
                      size="sm"
                      variant="danger"
                      disabled={deletingId === id}
                      onClick={() => onDeleteClick(id)}
                      title={`Удалить «${title}»`}
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
