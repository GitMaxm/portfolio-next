import { ProjectForm } from "@/features/admin/project-manager";
import { ButtonLink, PageHeader } from "@/shared/ui/admin";

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
