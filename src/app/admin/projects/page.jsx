import { getProjects } from "@/app/services/projectsService";
import ProjectContainer from "@components/admin/ProjectContainer";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (
    <ProjectContainer projects={projects}/>
  );
}