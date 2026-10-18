import type { NextRequest } from 'next/server';

import { projectsApi } from '@/entities/main/project';

import { isGeneratedImageName, removeProjectImages } from '../../_lib/projectImage';

interface ICleanupBody {
  names?: unknown;
}

export async function POST(request: NextRequest) {
  let body: ICleanupBody;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Ожидается JSON с полем names' }, { status: 400 });
  }

  const requested = Array.isArray(body.names) ? body.names.filter(isGeneratedImageName) : [];

  if (requested.length === 0) {
    return Response.json({ removed: [] });
  }

  let used: Set<string>;

  try {
    const projects = await projectsApi.getProjects();

    used = new Set(projects.flatMap(({ image }) => [image?.main, image?.preview]).filter(Boolean) as string[]);
  } catch {
    return Response.json({ error: 'Не удалось получить список проектов' }, { status: 502 });
  }

  const removed = await removeProjectImages(requested.filter((name) => !used.has(name)));

  return Response.json({ removed });
}
