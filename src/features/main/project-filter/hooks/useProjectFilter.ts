import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';

import type { IProject } from '@/entities/main/project';

export const useProjectFilter = (projects: IProject[], activeFilter: string) => {
  const router = useRouter();
  const pathname = usePathname();

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }

    return projects.filter(project => project.stack === activeFilter);
  }, [projects, activeFilter]);

  const handleFilterClick = (filter: string) => {
    const params = filter === 'all' ? '' : `?stack=${filter}`;

    router.push(pathname + params);
  };

  return {
    filteredProjects,
    handleFilterClick,
  };
};
