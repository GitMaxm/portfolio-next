'use client'

import { useRouter } from "next/navigation"
import { useState } from 'react'
import { Table } from "@/widgets/admin/Table"

import { projectsServiceApi } from "@/app/services/projectsService";
import { swalConfirm, swalError, swalSuccess } from '@/shared/lib'

import styles from "./index.module.scss"

export const ProjectContainer = ({ initialProjects }) => {
  const [projects, setProjects] = useState(initialProjects);
  const router = useRouter()

  const handleDelete = async (id) => {
    const result = await swalConfirm('Удалить проект?', 'Это действие нельзя отменить');

    if (!result.isConfirmed) {
      return;
    }

    try {
      await projectsServiceApi.deleteProject(id);
      setProjects(prev => prev.filter(p => p.id !== id));
      await swalSuccess('Удалено!', 'Проект был удалён');
    } catch (error) {
      console.error(error);
      await swalError('Ошибка', 'Ошибка',);
    }
  };

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