import { projectsApi } from "@/entities/main/project";
import { ProjectForm } from "@/features/admin/project-manager";
import { orNotFound } from "@/shared/api";
import { ButtonLink, PageHeader } from "@/shared/ui/admin";

import type { IAdminProjectEditProps } from './types';

export default async function AdminProjectEdit({ params }: IAdminProjectEditProps) {
  const { id } = await params

  const project = await orNotFound(projectsApi.getProjectById(id));

  return (
    <>
      <PageHeader
        eyebrow="Проекты"
        title={project.title}
        description="Изменения попадут на сайт сразу после сохранения."
        actions={<ButtonLink href="/admin/projects/">К списку</ButtonLink>}
      />

      <ProjectForm project={project}/>
    </>
  );
}
