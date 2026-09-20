import type { NextRequest } from 'next/server';

import { saveProjectImage } from '../_lib/projectImage';
import { captureScreenshot } from '../_lib/screenshot';

interface IScreenshotBody {
  url?: unknown;
}

const badRequest = (message: string) =>
  Response.json({ error: message }, { status: 400 });

/**
 * Разрешаем только http(s): по file:// браузер прочитал бы локальные файлы и
 * вернул их картинкой, а это уже не скриншот сайта.
 */
const parseTarget = (value: unknown): URL | null => {
  if (typeof value !== 'string' || !value.trim()) {
    return null;
  }

  try {
    const url = new URL(value.trim());

    return url.protocol === 'http:' || url.protocol === 'https:' ? url : null;
  } catch {
    return null;
  }
};

/**
 * Имя файла берём из адреса: у gitmaxm.github.io/game-gulp/ это game-gulp,
 * у голого домена — сам домен.
 */
const nameFromUrl = (url: URL): string => {
  const lastSegment = url.pathname.split('/').filter(Boolean).at(-1);

  return lastSegment ?? url.hostname;
};

export async function POST(request: NextRequest) {
  let body: IScreenshotBody;

  try {
    body = await request.json();
  } catch {
    return badRequest('Ожидается JSON с полем url');
  }

  const target = parseTarget(body.url);

  if (!target) {
    return badRequest('Нужна ссылка на сайт, начинающаяся с http:// или https://');
  }

  let screenshot: Uint8Array;

  // Сообщение отсюда видит пользователь: оно объясняет, что именно не вышло.
  try {
    screenshot = await captureScreenshot(target);
  } catch (error) {
    const reason = error instanceof Error ? error.message : 'Не удалось снять скриншот';

    return Response.json({ error: reason }, { status: 502 });
  }

  try {
    return Response.json(await saveProjectImage(screenshot, nameFromUrl(target)));
  } catch {
    return Response.json({ error: 'Не удалось сохранить скриншот' }, { status: 500 });
  }
}
