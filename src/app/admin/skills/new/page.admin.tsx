import type { Metadata } from "next";

import { SkillForm } from "@/features/admin/skill-manager";
import { ButtonLink, PageHeader } from "@/shared/ui/admin";

export const metadata: Metadata = { title: 'Новый навык' };

export default function AdminSkillAdd() {

  return (
    <>
      <PageHeader
        eyebrow="Навыки"
        title="Новый навык"
        actions={<ButtonLink href="/admin/skills/">К списку</ButtonLink>}
      />

      <SkillForm mode="create"/>
    </>
  );
}
