'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Table from "@components/admin/Table"

export default function ProjectContainer({ projects }) {
  const router = useRouter()

  const [localProjects, setLocalProjects] = useState(projects)

  const handleDelete = (id) => {
    setLocalProjects(prev => prev.filter(p => p.id !== id))
  }

  const handleEdit = (id) => {
    router.push(`/admin/project/${id}`)
  }

  return (
    <div>
      <h1>Проекты</h1>

      <Table
        projects={localProjects}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  )
}