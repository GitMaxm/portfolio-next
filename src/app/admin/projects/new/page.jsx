import EditProjectForm from "@/features/admin/project-manager/EditProjectForm";
import { TitleAdminPage } from "@/shared/ui/admin";

export default async function AdminProjectAdd() {

  return (
    <div>
      <TitleAdminPage>Создать новый проект</TitleAdminPage>
      <EditProjectForm mode="create"/>
    </div>
  );
}