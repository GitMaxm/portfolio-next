import type { ITableColumn } from '@/shared/types';

export const PROJECT_PROPERTIES_NAME: ITableColumn[] = [
  { id: 'id', title: "ID", type: "text" },
  { id: 'title', title: "Название", type: "text" },
  { id: 'stack', title: "Стек", type: "text" },
  { id: 'tools', title: "Инструменты", type: "text" },
  { id: 'description', title: "Описание", type: "text" },
  { id: 'images', title: "Картинки", type: "text" },
  { id: 'links', title: "Ссылки", type: "text" },
]

export const THEAD_TABLE: ITableColumn[] = [
  ...PROJECT_PROPERTIES_NAME,
  { id: 'actions', title: "Действия" },
]
