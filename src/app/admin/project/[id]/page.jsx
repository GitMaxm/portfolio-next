import EditProjectForm from "@components/admin/EditProjectForm";
import TitleAdminPage from "@components/admin/ui/TitleAdminPage";

import { getProjectById } from "@/app/services/projectsService";

export default async function AdminProjectEdit({ params }) {
  const { id } = await params
  const project = await getProjectById(id);

  return (
    <div>
      <TitleAdminPage>Редактировать: {project.title}</TitleAdminPage>
      <EditProjectForm project={project}/>
    </div>
  );
}