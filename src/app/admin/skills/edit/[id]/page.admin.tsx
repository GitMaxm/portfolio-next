import type { Metadata } from "next";

import { skillsApi } from "@/entities/main/skill";
import { SkillForm } from "@/features/admin/skill-manager";
import { orNotFound } from "@/shared/api";
import { ButtonLink, PageHeader } from "@/shared/ui/admin";

import type { IAdminSkillEditProps } from './types';

export async function generateMetadata({ params }: IAdminSkillEditProps): Promise<Metadata> {
  const { id } = await params

  const skill = await skillsApi.getSkillById(id).catch(() => null);

  return { title: skill ? `Навык: ${skill.name}` : 'Навык не найден' };
}

export default async function AdminSkillEdit({ params }: IAdminSkillEditProps) {
  const { id } = await params

  const skill = await orNotFound(skillsApi.getSkillById(id));

  return (
    <>
      <PageHeader
        eyebrow="Навыки"
        title={skill.name}
        description="Сохранение пишет в content/portfolio.json. На сайт изменения попадут после коммита и пуша."
        actions={<ButtonLink href="/admin/skills/">К списку</ButtonLink>}
      />

      <SkillForm skill={skill}/>
    </>
  );
}
