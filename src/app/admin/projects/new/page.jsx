import EditProjectForm from "@components/admin/EditProjectForm";
import TitleAdminPage from "@components/admin/ui/TitleAdminPage";

export default async function AdminProjectAdd() {

  return (
    <div>
      <TitleAdminPage>Создать новый проект</TitleAdminPage>
      <EditProjectForm mode="create"/>
    </div>
  );
}