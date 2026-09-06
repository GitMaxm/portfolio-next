import { Suspense } from "react";

import { projectsApi } from "@/entities/main/project";
import { ProjectList } from "@/features/admin/project-manager";
import { ButtonLink, PageHeader, TableSkeleton } from "@/shared/ui/admin";

/**
 * Загрузку держим в отдельном компоненте: заголовок отдаётся сразу, таблица
 * доезжает следом. Стримить весь сегмент через loading.tsx нельзя — тогда
 * notFound() на соседних страницах вернёт 200 вместо 404.
 */
async function ProjectsData() {
  const projects = await projectsApi.getProjects();

  return <ProjectList initialProjects={projects}/>;
}

export default function AdminProjectsPage() {

  return (
    <>
      <PageHeader
        eyebrow="Контент"
        title="Проекты"
        description="Работы, которые видны на главной и в разделе «Проекты»."
        actions={
          <ButtonLink href="/admin/projects/new/" variant="primary">Добавить проект</ButtonLink>
        }
      />

      <Suspense fallback={<TableSkeleton/>}>
        <ProjectsData/>
      </Suspense>
    </>
  );
}
