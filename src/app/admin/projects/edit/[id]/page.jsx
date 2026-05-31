import { ProjectForm } from "@/features/admin/project-manager";
import { TitleAdminPage } from "@/shared/ui/admin";

import { projectsServiceApi } from "@/app/services/projectsService";

export default async function AdminProjectEdit({ params }) {
  const { id } = await params
  const project = await projectsServiceApi.getProjectById(id);

  return (
    <div>
      <TitleAdminPage>Редактировать: {project.title}</TitleAdminPage>
      <ProjectForm project={project}/>
    </div>
  );
}