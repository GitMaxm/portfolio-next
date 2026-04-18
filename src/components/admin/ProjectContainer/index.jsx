'use client'

import { useRouter } from "next/navigation"
import { useState } from 'react'
import Table from "@components/admin/ui/Table"

import { deleteProject } from "@/app/services/projectsService";

export default function ProjectContainer({ initialProjects }) {
  const [projects, setProjects] = useState(initialProjects);
  const router = useRouter()

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== id)
      );
      console.log("deleted project id", id);
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = (id) => {
    router.push(`/admin/project/${id}`)
  }

  return (
    <Table
      projects={projects}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  )
}