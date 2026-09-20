'use client'

import './style.css'

import { useEffect, useState } from 'react'
import { FiCheck, FiCopy } from 'react-icons/fi'

import type { ICopyButtonProps } from './types'

const FEEDBACK_MS = 1600

export const CopyButton = ({ value, label }: ICopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (!isCopied) {
      return
    }

    const timer = setTimeout(() => setIsCopied(false), FEEDBACK_MS)

    return () => clearTimeout(timer)
  }, [isCopied])

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setIsCopied(true)
    } catch {

    }
  }

  return (
    <button
      type="button"
      className="copy-btn"
      onClick={handleCopyClick}
      aria-label={isCopied ? 'Скопировано' : label}
    >
      {isCopied ? <FiCheck aria-hidden="true"/> : <FiCopy aria-hidden="true"/>}
    </button>
  )
}
