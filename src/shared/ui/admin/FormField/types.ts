import type { ReactNode } from 'react';

export interface IFormFieldProps {
  label: ReactNode;
  children: ReactNode;
  htmlFor?: string;
}
