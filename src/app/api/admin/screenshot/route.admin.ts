import type { NextRequest } from 'next/server';

import { saveProjectImage } from '../_lib/projectImage';
import { captureScreenshot } from '../_lib/screenshot';

interface IScreenshotBody {
  url?: unknown;
}

const badRequest = (message: string) =>
  Response.json({ error: message }, { status: 400 });

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
