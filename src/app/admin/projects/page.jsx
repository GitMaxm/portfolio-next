import { ProjectList } from "@/features/admin/project-manager";
import { TitleAdminPage } from "@/shared/ui/admin";

import { projectsServiceApi } from "@/app/services/projectsService";

export default async function AdminProjectsPage() {
  const projects = await projectsServiceApi.getProjects();

  return (

    <>
      <TitleAdminPage>Проекты</TitleAdminPage>
      <ProjectList initialProjects={projects}/>
    </>

  );
}