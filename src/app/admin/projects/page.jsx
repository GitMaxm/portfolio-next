import ProjectContainer from "@components/admin/ProjectContainer";
import TitleAdminPage from "@components/admin/ui/TitleAdminPage";

import { getProjects } from "@/app/services/projectsService";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (

    <>
      <TitleAdminPage>Проекты</TitleAdminPage>
      <ProjectContainer initialProjects={projects}/>
    </>

  );
}