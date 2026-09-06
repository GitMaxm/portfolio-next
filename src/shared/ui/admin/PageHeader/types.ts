import type { ReactNode } from 'react'

export interface IPageHeaderProps {
  title: string;
  /** Надзаголовок: где мы находимся. */
  eyebrow?: string;
  description?: string;
  /** Кнопки страницы — прижимаются к правому краю. */
  actions?: ReactNode;
}
