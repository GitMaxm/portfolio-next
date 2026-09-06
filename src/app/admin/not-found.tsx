import { ButtonLink, StatusPanel } from '@/shared/ui/admin'

export default function AdminNotFound() {

  return (
    <StatusPanel
      title="Запись не найдена"
      description="Возможно, её уже удалили или в ссылке опечатка."
    >
      <ButtonLink href="/admin/projects/" variant="primary">К проектам</ButtonLink>
      <ButtonLink href="/admin/skills/">К навыкам</ButtonLink>
    </StatusPanel>
  )
}
