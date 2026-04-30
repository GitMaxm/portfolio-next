'use client'

import { useRouter } from "next/navigation";
import { useState } from 'react'
import { FormField } from "@components/admin/ui/adminForm/FormField"

import { projectsServiceApi } from "@/app/services/projectsService";
import { STACK_OPTIONS, TOOLS_LIST } from "@/constants/projectFormAdmin"
import { swalConfirm, swalError, swalSaveConfirm, swalSuccess } from '@/lib/swal'

import styles from './index.module.scss'

export default function EditProjectForm({ project, mode = 'edit' }) {
  const router = useRouter()
  const isCreate = mode === 'create'

  const [selectedTools, setSelectedTools] = useState(
    new Set(project?.tools ?? [])
  )

  const toggleTool = (tool) => {
    setSelectedTools((prev) => {
      const updatedTools = new Set(prev)
      updatedTools.has(tool) ? updatedTools.delete(tool) : updatedTools.add(tool)
      return updatedTools
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await swalSaveConfirm("Сохранить?");

    // Отмена
    if (result.isDismissed) {
      return;
    }

    // Сохранено
    if (result.isConfirmed) {
      try {
        const data = new FormData(e.target);
        const projectData = {
          title: data.get('title'),
          stack: data.get('stack'),
          tools: [...selectedTools],
          description: data.get('description'),
          links: {
            gitHub: data.get('github'),
            preview: data.get('previewLink'),
          },
          image: project?.image ?? {},
        };

        if (isCreate) {
          const projects = await projectsServiceApi.getProjects();
          const nextId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 0;
          await projectsServiceApi.addProject({ ...projectData, id: nextId });
          await swalSuccess('Создано!', 'Проект успешно создан');
        } else {
          await projectsServiceApi.updateProject({ ...projectData, id: project.id });
          await swalSuccess('Сохранено!', 'Изменения сохранены');
        }

        router.push('/admin/projects/');
      } catch (error) {
        console.log(error);
        await swalError('Ошибка', 'Не удалось сохранить проект');
      }
    }
  }

  const handleCancel = async () => {
    const result = await swalConfirm("Отменить редактирование?", "Отменить редактирование?", "Да");
    if (result.isConfirmed) {
      router.push('/admin/projects/');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* ID — только при редактировании */}
      {!isCreate && (
        <FormField label="ID">
          <span className={styles.idDisplay}>{project?.id}</span>
        </FormField>
      )}

      {/* Название */}
      <FormField htmlFor="f-title" label="Название">
        <input
          id="f-title"
          name="title"
          type="text"
          placeholder="Название проекта"
          defaultValue={project?.title ?? ''}
        />
      </FormField>

      {/* Стек */}
      <FormField htmlFor="f-stack" label="Стек">
        <select
          id="f-stack"
          name="stack"
          defaultValue={project?.stack ?? 'HTML'}
        >
          {STACK_OPTIONS.map((stack) => (
            <option key={stack} value={stack}>{stack}</option>
          ))}
        </select>
      </FormField>

      {/* Инструменты */}
      <FormField label="Инструменты">
        <div className={styles.toolsGrid}>
          {TOOLS_LIST.map((tool) => (
            <button
              key={tool}
              type="button"
              className={`${styles.chip} ${selectedTools.has(tool) ? styles.active : ''}`}
              onClick={() => toggleTool(tool)}
            >
              <span className={styles.chipCheck}>
                {selectedTools.has(tool) ? '✓' : ''}
              </span>
              {tool}
            </button>
          ))}
        </div>
      </FormField>

      {/* Описание */}
      <FormField htmlFor="f-desc" label="Описание">
        <textarea
          id="f-desc"
          name="description"
          placeholder="Описание проекта"
          defaultValue={project?.description ?? ''}
        />
      </FormField>

      {/* Ссылки */}
      <FormField label="Ссылки">
        <div className={styles.linksRow}>
          <div>
            <div className={styles.sectionLabel}>Код проекта</div>
            <input
              name="github"
              type="text"
              placeholder="Код проекта"
              defaultValue={project?.links?.gitHub ?? ''}
            />
          </div>
          <div>
            <div className={styles.sectionLabel}>Ссылка на проект</div>
            <input
              name="previewLink"
              type="text"
              placeholder="Ссылка на проект"
              defaultValue={project?.links?.preview ?? ''}
            />
          </div>
        </div>
      </FormField>

      {/* Кнопки */}
      <div className={styles.actions}>
        <button type="submit" className={styles.btnSave}>
          {isCreate ? 'Создать' : 'Сохранить'}
        </button>
        <button
          type="button"
          className={styles.btnCancel}
          onClick={handleCancel}
        >
          Отмена
        </button>
      </div>
    </form>
  )
}