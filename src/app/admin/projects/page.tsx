import { projectsApi } from "@/entities/main/project";
import { ProjectList } from "@/features/admin/project-manager";
import { TitleAdminPage } from "@/shared/ui/admin";

export default async function AdminProjectsPage() {
  const projects = await projectsApi.getProjects();

  return (

    <>
      <TitleAdminPage>Проекты</TitleAdminPage>
      <ProjectList initialProjects={projects}/>
    </>

  );
}
