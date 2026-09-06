import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type TButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type TButtonSize = 'md' | 'sm';

interface IButtonBase {
  variant?: TButtonVariant;
  size?: TButtonSize;
}

export interface IButtonProps extends IButtonBase, ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IButtonLinkProps extends IButtonBase {
  href: string;
  children: ReactNode;
  title?: string;
}
