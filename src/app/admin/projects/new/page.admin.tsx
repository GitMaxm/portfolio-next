import type { Metadata } from "next";

import { ProjectForm } from "@/features/admin/project-manager";
import { ButtonLink, PageHeader } from "@/shared/ui/admin";

export const metadata: Metadata = { title: 'Новый проект' };

export default function AdminProjectAdd() {

  return (
    <>
      <PageHeader
        eyebrow="Проекты"
        title="Новый проект"
        actions={<ButtonLink href="/admin/projects/">К списку</ButtonLink>}
      />

      <ProjectForm mode="create"/>
    </>
  );
}
