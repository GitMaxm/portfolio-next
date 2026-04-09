import { getProjects } from "@/app/services/projectsService";
import EditProjectForm from "@components/admin/EditProjectForm";

export default async function AdminProjectEdit({ params }) {
  const { id } = await params
  const projects = await getProjects();
  const project = projects.find((item) => item.id === Number(id));

  return (
    <div>
      <h1>Редактировать: {project.title}</h1>
      <EditProjectForm project={project} />
    </div>
  );
}