import { SkillForm } from "@/features/admin/skill-manager";
import { TitleAdminPage } from "@/shared/ui/admin";

export default function AdminSkillAdd() {

  return (
    <div>
      <TitleAdminPage>Добавить навык</TitleAdminPage>
      <SkillForm mode="create"/>
    </div>
  );
}
