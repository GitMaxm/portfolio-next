import { Suspense } from "react";

import { skillsApi } from "@/entities/main/skill";
import { SkillList } from "@/features/admin/skill-manager";
import { TableSkeleton, TitleAdminPage } from "@/shared/ui/admin";

/** См. комментарий в admin/projects/page.tsx — тот же приём со стримингом. */
async function SkillsData() {
  const skills = await skillsApi.getSkills();

  return <SkillList initialSkills={skills}/>;
}

export default function AdminSkillsPage() {

  return (

    <>
      <TitleAdminPage>Навыки</TitleAdminPage>

      <Suspense fallback={<TableSkeleton/>}>
        <SkillsData/>
      </Suspense>
    </>

  );
}
