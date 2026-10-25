export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivanenkomax.ru';

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const assetPath = (path: string): string => BASE_PATH + path;

export const SITE_REPO_URL = 'https://github.com/GitMaxm/portfolio-next';

export const SITE_NAME = 'Максим Иваненко';

export const SITE_TITLE = 'Максим Иваненко — фронтенд-разработчик';

export const SITE_DESCRIPTION =
  'Портфолио фронтенд-разработчика Максима Иваненко: интерфейсы на React и Next.js, ' +
  'опыт работы с TypeScript и веб-компонентами. Проекты, демо и исходный код.';

export const SITE_JOB_TITLE = 'Фронтенд-разработчик';
