'use client'

import type { IProjectListProps } from "../model/types"
import { useProjects } from "../model/useProjects"
import { ProjectTable } from "./ProjectTable"

export const ProjectList = ({ initialProjects }: IProjectListProps) => {
  const { projects, deletingId, handleDeleteClick } = useProjects(initialProjects);

  return (
    <ProjectTable
      projects={projects}
      deletingId={deletingId}
      onDeleteClick={handleDeleteClick}
    />
  )
}
