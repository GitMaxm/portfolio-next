'use client'

import { useProjects } from "../model/useProjects"
import { Table } from "@/widgets/admin/Table"

import styles from "./ProjectList.module.scss"

export const ProjectList = ({ initialProjects }) => {
  const { projects, handleDelete, handleEdit, handleAdd } = useProjects(initialProjects);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => handleAdd()}
      >
        Добавить проект
      </button>

      <Table
        projects={projects}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  )
}