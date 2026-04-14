import { getProjects } from "@/app/services/projectsService";
import EditProjectForm from "@components/admin/EditProjectForm";
import TitleAdminPage from "@components/admin/ui/TitleAdminPage";

export default async function AdminProjectEdit({ params }) {
  const { id } = await params
  const projects = await getProjects();
  const project = projects.find((item) => item.id === Number(id));

  return (
    <div>
      <TitleAdminPage>Редактировать: {project.title}</TitleAdminPage>
      <EditProjectForm project={project} />
    </div>
  );
}