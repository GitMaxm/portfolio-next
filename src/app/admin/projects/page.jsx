import { getProjects } from "@/app/services/projectsService";
import ProjectContainer from "@components/admin/ProjectContainer";
import TitleAdminPage from "@components/admin/ui/TitleAdminPage";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (

    <>
      <TitleAdminPage>Проекты</TitleAdminPage>
      <ProjectContainer projects={projects}/>
    </>

  );
}