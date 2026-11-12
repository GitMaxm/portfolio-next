import type { ReactNode } from 'react';

export interface ISectionHeadProps {

  title: string;

  as?: 'h1' | 'h2';

  children?: ReactNode;
}
