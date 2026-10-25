import type { ReactNode } from 'react';

export interface ISectionHeadProps {

  title: string;

  path: string;

  as?: 'h1' | 'h2';

  children?: ReactNode;
}
