import { projectsApi } from "@/entities/main/project";
import { ProjectForm } from "@/features/admin/project-manager";
import { orNotFound } from "@/shared/api";
import { TitleAdminPage } from "@/shared/ui/admin";

import type { IAdminProjectEditProps } from './types';

export default async function AdminProjectEdit({ params }: IAdminProjectEditProps) {
  const { id } = await params

  const project = await orNotFound(projectsApi.getProjectById(id));

  return (
    <div>
      <TitleAdminPage>Редактировать: {project.title}</TitleAdminPage>
      <ProjectForm project={project}/>
    </div>
  );
}
