import EditProjectForm from "@components/admin/EditProjectForm";
import { TitleAdminPage } from "@/shared/admin/ui";

export default async function AdminProjectAdd() {

  return (
    <div>
      <TitleAdminPage>Создать новый проект</TitleAdminPage>
      <EditProjectForm mode="create"/>
    </div>
  );
}