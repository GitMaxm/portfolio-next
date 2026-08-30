import { skillsApi } from "@/entities/main/skill";
import { SkillForm } from "@/features/admin/skill-manager";
import { TitleAdminPage } from "@/shared/ui/admin";

import type { IAdminSkillEditProps } from './types';

export default async function AdminSkillEdit({ params }: IAdminSkillEditProps) {
  const { id } = await params

  const skill = await skillsApi.getSkillById(id);

  return (
    <div>
      <TitleAdminPage>Редактировать: {skill.name}</TitleAdminPage>
      <SkillForm skill={skill}/>
    </div>
  );
}
