'use client'

import Link from 'next/link'
import { useEffect } from 'react'

import { StatusPanel } from '@/shared/ui/admin'

import type { IAdminErrorProps } from './types'

export default function AdminError({ error, retry }: IAdminErrorProps) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <StatusPanel
      title="Не удалось загрузить данные"
      description="Похоже, API недоступен. Попробуйте ещё раз — если не помогло, проверьте сервер."
      hint={process.env.NODE_ENV === 'development' ? 'npm run json-server' : undefined}
    >
      <button type="button" onClick={() => retry()}>Попробовать снова</button>
      <Link href="/admin">В админку</Link>
    </StatusPanel>
  )
}
