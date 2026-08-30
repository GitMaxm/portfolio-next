'use client'

import type { ISkillListProps } from "../model/types"
import { useSkills } from "../model/useSkills"
import styles from "./SkillList.module.scss"
import { SkillTable } from "./SkillTable"

export const SkillList = ({ initialSkills }: ISkillListProps) => {
  const { skills, handleDeleteClick, handleEditClick, handleAddClick } = useSkills(initialSkills);

  return (
    <>
      <button
        className={styles.button}
        onClick={handleAddClick}
      >
        Добавить навык
      </button>

      <SkillTable
        skills={skills}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
    </>
  )
}
