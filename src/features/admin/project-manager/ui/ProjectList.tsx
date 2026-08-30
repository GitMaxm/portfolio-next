'use client'

import type { IProjectListProps } from "../model/types"
import { useProjects } from "../model/useProjects"
import styles from "./ProjectList.module.scss"
import { ProjectTable } from "./ProjectTable"

export const ProjectList = ({ initialProjects }: IProjectListProps) => {
  const { projects, handleDeleteClick, handleEditClick, handleAddClick } = useProjects(initialProjects);

  return (
    <>
      <button
        className={styles.button}
        onClick={handleAddClick}
      >
        Добавить проект
      </button>

      <ProjectTable
        projects={projects}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
    </>
  )
}
