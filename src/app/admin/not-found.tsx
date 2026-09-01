import Link from 'next/link'

import { StatusPanel } from '@/shared/ui/admin'

export default function AdminNotFound() {

  return (
    <StatusPanel
      title="Запись не найдена"
      description="Возможно, её уже удалили или в ссылке опечатка."
    >
      <Link href="/admin/projects">К проектам</Link>
      <Link href="/admin/skills">К навыкам</Link>
    </StatusPanel>
  )
}
