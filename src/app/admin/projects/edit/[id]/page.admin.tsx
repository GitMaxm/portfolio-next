import type { Metadata } from "next";

import { projectsApi } from "@/entities/main/project";
import { ProjectForm } from "@/features/admin/project-manager";
import { orNotFound } from "@/shared/api";
import { ButtonLink, PageHeader } from "@/shared/ui/admin";

import type { IAdminProjectEditProps } from './types';

export async function generateMetadata({ params }: IAdminProjectEditProps): Promise<Metadata> {
  const { id } = await params

  const project = await projectsApi.getProjectById(id).catch(() => null);

  return { title: project ? `Проект: ${project.title}` : 'Проект не найден' };
}

export default async function AdminProjectEdit({ params }: IAdminProjectEditProps) {
  const { id } = await params

  const project = await orNotFound(projectsApi.getProjectById(id));

  return (
    <>
      <PageHeader
        eyebrow="Проекты"
        title={project.title}
        description="Сохранение пишет в content/portfolio.json. На сайт изменения попадут после коммита и пуша."
        actions={<ButtonLink href="/admin/projects/">К списку</ButtonLink>}
      />

      <ProjectForm project={project}/>
    </>
  );
}
