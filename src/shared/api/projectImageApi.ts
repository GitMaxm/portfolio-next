import { ApiError } from './ApiError';
import type { TRequestOptions } from './types';

const UPLOAD_URL = '/api/admin/upload/';
const SCREENSHOT_URL = '/api/admin/screenshot/';

export interface IProjectImageNames {
  main: string;
  preview: string;
}

interface IErrorResponse {
  error?: string;
}

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

export const uploadProjectImage = (file: File): Promise<IProjectImageNames> => {
  const body = new FormData();

  body.append('file', file);

  return requestImage(UPLOAD_URL, { method: 'POST', body });
};

export const captureProjectImage = (url: string): Promise<IProjectImageNames> =>
  requestImage(SCREENSHOT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  });
