import type { MetadataRoute } from 'next';

import { projectsContent } from '@/entities/main/project';
import { SITE_URL } from '@/shared/config';

export const dynamic = 'force-static';

const url = (path: string) => `${SITE_URL}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: url('/'), lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: url('/projects/'), lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: url('/contacts/'), lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ];

  const projectPages: MetadataRoute.Sitemap = projectsContent.getProjects().map((project) => ({
    url: url(`/project/${project.id}/`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
