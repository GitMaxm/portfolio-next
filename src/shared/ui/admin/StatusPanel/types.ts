import type { ReactNode } from 'react'

export interface IStatusPanelProps {
  title: string;
  description?: string;
  /** Подсказка для разработчика — выводится моноширинным блоком под описанием. */
  hint?: string;
  /** Кнопки и ссылки: раскладку и оформление берёт на себя панель. */
  children?: ReactNode;
}
