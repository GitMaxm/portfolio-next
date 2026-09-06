import Link from 'next/link'

import styles from './index.module.scss'
import type { IButtonLinkProps, IButtonProps, TButtonSize, TButtonVariant } from './types'

const classes = (variant: TButtonVariant, size: TButtonSize, extra?: string) =>
  [styles.button, styles[variant], styles[size], extra].filter(Boolean).join(' ')

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...rest
}: IButtonProps) => {

  return <button type={type} className={classes(variant, size, className)} {...rest}/>
}

/** Переход — это ссылка: работает средний клик, префетч и открытие в новой вкладке. */
export const ButtonLink = ({
  variant = 'secondary',
  size = 'md',
  href,
  children,
  title,
}: IButtonLinkProps) => {

  return (
    <Link href={href} title={title} className={classes(variant, size)}>
      {children}
    </Link>
  )
}
