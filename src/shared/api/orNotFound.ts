import { notFound } from 'next/navigation';

import { ApiError } from './ApiError';

/**
 * 404 от API превращает в страницу «не найдено», остальные ошибки пробрасывает
 * дальше — их поймает ближайший error.tsx.
 */
export const orNotFound = async <T>(request: Promise<T>): Promise<T> => {
  try {
    return await request;
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      notFound();
    }

    throw error;
  }
};
