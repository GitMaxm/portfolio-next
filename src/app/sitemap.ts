import type { MetadataRoute } from 'next';

import { projectsApi } from '@/entities/main/project';
import { SITE_URL } from '@/shared/config';

const url = (path: string) => `${SITE_URL}${path}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: url('/'), lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: url('/projects/'), lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: url('/contacts/'), lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ];

  try {
    const projects = await projectsApi.getProjects();

    return [
      ...staticPages,
      ...projects.map((project) => ({
        url: url(`/project/${project.id}/`),
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })),
    ];
  } catch {
    return staticPages;
  }
}
