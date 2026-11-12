'use client'

import './style.css'

import { useEffect, useState } from 'react'
import { FiCheck, FiCopy, FiX } from 'react-icons/fi'

import type { ICopyButtonProps } from './types'

const FEEDBACK_MS = 1600

const LABELS: Partial<Record<'idle' | 'copied' | 'failed', string>> = {
  copied: 'Скопировано',
  failed: 'Не удалось скопировать, выделите адрес вручную',
}

export const CopyButton = ({ value, label }: ICopyButtonProps) => {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')

  useEffect(() => {
    if (status === 'idle') {
      return
    }

    const timer = setTimeout(() => setStatus('idle'), FEEDBACK_MS)

    return () => clearTimeout(timer)
  }, [status])

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setStatus('copied')
    } catch {
      setStatus('failed')
    }
  }

  return (
    <button
      type="button"
      className="copy-btn"
      onClick={handleCopyClick}
      aria-label={LABELS[status] ?? label}
      title={LABELS[status] ?? label}
    >
      {status === 'copied' && <FiCheck aria-hidden="true"/>}
      {status === 'failed' && <FiX aria-hidden="true"/>}
      {status === 'idle' && <FiCopy aria-hidden="true"/>}
    </button>
  )
}
