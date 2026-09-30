import { SkillForm } from "@/features/admin/skill-manager";
import { ButtonLink, PageHeader } from "@/shared/ui/admin";

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
