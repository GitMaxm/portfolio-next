'use client'

import type { ISkillListProps } from "../model/types"
import { useSkills } from "../model/useSkills"
import { SkillTable } from "./SkillTable"

export const SkillList = ({ initialSkills }: ISkillListProps) => {
  const { skills, deletingId, handleDeleteClick } = useSkills(initialSkills);

  return (
    <SkillTable
      skills={skills}
      deletingId={deletingId}
      onDeleteClick={handleDeleteClick}
    />
  )
}
