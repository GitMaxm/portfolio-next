import type { INavigationLink } from '@/shared/types';

export const NAVIGATION_LINKS: INavigationLink[] = [
  { href: '/', label: 'Главная', title: 'Обо мне и моих навыках' },
  { href: '/projects/', label: 'Проекты', title: 'Мои работы и проекты' },
  { href: '/contacts/', label: 'Контакты', title: 'Как со мной связаться' },
  { href: '/admin/', label: 'Админка', title: 'Админка' },
];
