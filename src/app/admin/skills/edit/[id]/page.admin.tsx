import { skillsApi } from "@/entities/main/skill";
import { SkillForm } from "@/features/admin/skill-manager";
import { orNotFound } from "@/shared/api";
import { ButtonLink, PageHeader } from "@/shared/ui/admin";

import type { IAdminSkillEditProps } from './types';

export default async function AdminSkillEdit({ params }: IAdminSkillEditProps) {
  const { id } = await params

  const skill = await orNotFound(skillsApi.getSkillById(id));

  return (
    <>
      <PageHeader
        eyebrow="Навыки"
        title={skill.name}
        description="Изменения попадут на сайт сразу после сохранения."
        actions={<ButtonLink href="/admin/skills/">К списку</ButtonLink>}
      />

      <SkillForm skill={skill}/>
    </>
  );
}
