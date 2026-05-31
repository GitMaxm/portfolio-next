import { ProjectForm } from "@/features/admin/project-manager";
import { TitleAdminPage } from "@/shared/ui/admin";

export default async function AdminProjectAdd() {

  return (
    <div>
      <TitleAdminPage>Создать новый проект</TitleAdminPage>
      <ProjectForm mode="create"/>
    </div>
  );
}