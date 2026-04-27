'use client'

import { useRouter } from "next/navigation"
import { useState } from 'react'
import Table from "@components/admin/ui/Table"

import { projectsServiceApi } from "@/app/services/projectsService";

import styles from "./index.module.scss"

export default function ProjectContainer({ initialProjects }) {
  const [projects, setProjects] = useState(initialProjects);
  const router = useRouter()

  const handleDelete = async (id) => {
    try {
      await projectsServiceApi.deleteProject(id);
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== id)
      );
      console.log("deleted project id", id);
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = (id) => {
    router.push(`/admin/projects/edit/${id}`)
  }

  const handleAdd = () => {
    router.push(`/admin/projects/new`)
  }

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