import styles from './Table.module.scss'
import projects from '@/data/projectsTestTable.json'

const Table = () => {
  return (
    <table className={styles.table}>
      <thead>
      <tr>
        <th>ID</th>
        <th>Название</th>
        <th>Стек</th>
        <th>Инструменты</th>
        <th>Описание</th>
        <th>Картинка</th>
        <th>Ссылки</th>
      </tr>
      </thead>

      <tbody>
      {projects.map((project) => (
        <tr key={project.id}>
          <td>{project.id}</td>
          <td>{project.title}</td>
          <td>{project.stack}</td>
          <td>{project.tools}</td>
          <td>{project.description}</td>
          <td>
            <span>{project.image.main}</span>
            <span>{project.image.preview}</span>
          </td>
          <td>
            <a href={project.links.gitHub}>Код</a>/
            <a href={project.links.preview}>Превью</a>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default Table;