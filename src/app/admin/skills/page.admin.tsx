import { Suspense } from "react";

import { skillsApi } from "@/entities/main/skill";
import { SkillList } from "@/features/admin/skill-manager";
import { ButtonLink, PageHeader, TableSkeleton } from "@/shared/ui/admin";

/** См. комментарий в admin/projects/page.tsx — тот же приём со стримингом. */
async function SkillsData() {
  const skills = await skillsApi.getSkills();

  return <SkillList initialSkills={skills}/>;
}

export default function AdminSkillsPage() {

  return (
    <>
      <PageHeader
        eyebrow="Контент"
        title="Навыки"
        description="Технологии с иконкой, уровнем и описанием — блок «Навыки» на главной."
        actions={
          <ButtonLink href="/admin/skills/new/" variant="primary">Добавить навык</ButtonLink>
        }
      />

      <Suspense fallback={<TableSkeleton/>}>
        <SkillsData/>
      </Suspense>
    </>
  );
}
