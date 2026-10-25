import './style.css'

import type { ISectionHeadProps } from './types'

export const SectionHead = ({ title, path, as: Title = 'h2', children }: ISectionHeadProps) => {
  return (
    <header className="section-head">
      <div className="section-head__main">
        <span className="section-head__path" aria-hidden="true">{path}</span>
        <Title className="section-head__title">{title}</Title>
      </div>

      {children && <p className="section-head__text">{children}</p>}
    </header>
  )
}
