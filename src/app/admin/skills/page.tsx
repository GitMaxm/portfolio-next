import { skillsApi } from "@/entities/main/skill";
import { SkillList } from "@/features/admin/skill-manager";
import { TitleAdminPage } from "@/shared/ui/admin";

export default async function AdminSkillsPage() {
  const skills = await skillsApi.getSkills();

  return (

    <>
      <TitleAdminPage>Навыки</TitleAdminPage>
      <SkillList initialSkills={skills}/>
    </>

  );
}
