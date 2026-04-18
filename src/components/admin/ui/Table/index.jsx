import { THEAD_TABLE } from "@/constants/projectPropertiesName";

import styles from './index.module.scss';

const Table = ({ projects, handleDelete, handleEdit }) => {

  const renderTools = (tools) => {
    if (Array.isArray(tools) && tools.length > 0) {
      return tools.join(', ');
    }
    return '—';
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {THEAD_TABLE.map((item) => (
            <th className={styles[item.id]} key={item.id}>{item.title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {projects.map(({ id, title, stack, tools, description, image, links }) => (
          <tr key={id}>
            <td className={styles.id}>{id}</td>
            <td>{title}</td>
            <td>{stack}</td>
            <td>{renderTools(tools)}</td>
            <td>{description}</td>
            <td>
              <ul>
                <li><span>{image.main}</span></li>
                <li><span>{image.preview}</span></li>
              </ul>
            </td>
            <td>
              <ul>
                <li><a href={links.gitHub} target="_blank">GitHub</a></li>
                <li><a href={links.preview} target="_blank">Превью</a></li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <button onClick={() => handleEdit(id)}>Редактировать</button>
                </li>
                <li>
                  <button onClick={() => handleDelete(id)}>Удалить</button>
                </li>
              </ul>
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default Table;