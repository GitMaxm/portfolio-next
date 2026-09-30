import { Suspense } from "react";

import { projectsApi } from "@/entities/main/project";
import { skillsApi } from "@/entities/main/skill";
import { ButtonLink, PageHeader, TableSkeleton } from "@/shared/ui/admin";
import { Dashboard } from "@/widgets/admin/dashboard";

async function DashboardData() {
  const [projects, skills] = await Promise.all([
    projectsApi.getProjects(),
    skillsApi.getSkills(),
  ]);

  return <Dashboard projects={projects} skills={skills}/>;
}

export default function AdminPage() {

  return (
    <>
      <PageHeader
        eyebrow="Обзор"
        title="Контент сайта"
        description="Всё, что сейчас опубликовано в портфолио. Отсюда можно перейти к любой записи."
        actions={<ButtonLink href="/">Открыть сайт</ButtonLink>}
      />

      <Suspense fallback={<TableSkeleton rows={3}/>}>
        <DashboardData/>
      </Suspense>
    </>
  );
}
