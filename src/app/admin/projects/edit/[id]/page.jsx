import EditProjectForm from "@components/admin/EditProjectForm";
import { TitleAdminPage } from "@/shared/admin/ui";

import { projectsServiceApi } from "@/app/services/projectsService";

export default async function AdminProjectEdit({ params }) {
  const { id } = await params
  const project = await projectsServiceApi.getProjectById(id);

  return (
    <div>
      <TitleAdminPage>Редактировать: {project.title}</TitleAdminPage>
      <EditProjectForm project={project}/>
    </div>
  );
}