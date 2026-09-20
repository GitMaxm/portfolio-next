import type { INavigationLink } from '@/shared/model';

export const NAVIGATION_LINKS: INavigationLink[] = [
  { href: '/', label: 'Главная', title: 'Обо мне и моих навыках' },
  { href: '/projects/', label: 'Проекты', title: 'Мои работы и проекты' },
  { href: '/contacts/', label: 'Контакты', title: 'Как со мной связаться' },
  { href: '/admin/', label: 'Админка', title: 'Админка', devOnly: true },
];

export const ADMIN_NAV_LINKS: INavigationLink[] = [
  { href: '/admin/', label: 'Обзор', title: 'Сводка по контенту' },
  { href: '/admin/projects/', label: 'Проекты', title: 'Управление проектами' },
  { href: '/admin/skills/', label: 'Навыки', title: 'Управление навыками' },
];

export const PUBLIC_NAV_LINKS = NAVIGATION_LINKS.filter(
  (link) => !link.devOnly || process.env.NODE_ENV === 'development',
);
