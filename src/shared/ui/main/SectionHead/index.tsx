import './style.css'

import type { ISectionHeadProps } from './types'

export const SectionHead = ({ title, as: Title = 'h2', children }: ISectionHeadProps) => {
  return (
    <header className="section-head">
      <Title className="section-head__title">{title}</Title>

      {children && <p className="section-head__text">{children}</p>}
    </header>
  )
}
