import { ApiError } from './ApiError';
import type { TRequestOptions } from './types';

// Слеш на конце обязателен: next.config включает trailingSlash, без него 308.
const UPLOAD_URL = '/api/admin/upload/';
const SCREENSHOT_URL = '/api/admin/screenshot/';

/** Имена обоих файлов: сервер режет один исходник под карточку и под страницу. */
export interface IProjectImageNames {
  main: string;
  preview: string;
}

interface IErrorResponse {
  error?: string;
}

/**
 * Роуты админки объясняют отказ текстом в поле error — его и показываем,
 * иначе пользователь увидит безликое «HTTP error 400».
 */
const requestImage = async (
  url: string,
  options: TRequestOptions,
): Promise<IProjectImageNames> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    const payload: IErrorResponse = await response.json().catch(() => ({}));

    throw new ApiError(response.status, url, payload.error);
  }

  return response.json() as Promise<IProjectImageNames>;
};

/** Принимает картинку любого размера и формата — обрежет и пережмёт сервер. */
export const uploadProjectImage = (file: File): Promise<IProjectImageNames> => {
  const body = new FormData();

  body.append('file', file);

  return requestImage(UPLOAD_URL, { method: 'POST', body });
};

/** Снимает первый экран сайта по ссылке и сохраняет как картинки проекта. */
export const captureProjectImage = (url: string): Promise<IProjectImageNames> =>
  requestImage(SCREENSHOT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  });
