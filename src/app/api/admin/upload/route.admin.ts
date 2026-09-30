import type { NextRequest } from 'next/server';

import { MAX_IMAGE_SIZE } from '@/shared/config';

import { baseNameFromFile, isSupportedImage, saveProjectImage } from '../_lib/projectImage';

const badRequest = (message: string) =>
  Response.json({ error: message }, { status: 400 });

export async function POST(request: NextRequest) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return badRequest('Ожидается форма с файлом');
  }

  const file = formData.get('file');

  if (!(file instanceof File)) {
    return badRequest('Файл не передан');
  }

  if (file.size === 0) {
    return badRequest('Файл пустой');
  }

  if (file.size > MAX_IMAGE_SIZE) {
    return badRequest(`Файл больше ${Math.round(MAX_IMAGE_SIZE / 1024 / 1024)} МБ`);
  }

  const bytes = new Uint8Array(await file.arrayBuffer());

  if (!isSupportedImage(bytes)) {
    return badRequest('Это не картинка. Подойдут JPEG, PNG, WebP, AVIF или GIF');
  }

  try {
    return Response.json(await saveProjectImage(bytes, baseNameFromFile(file.name)));
  } catch {
    return Response.json({ error: 'Не удалось обработать картинку' }, { status: 500 });
  }
}
