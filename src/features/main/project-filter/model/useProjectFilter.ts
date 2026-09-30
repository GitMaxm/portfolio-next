import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import type { IProject } from '@/entities/main/project';

export const useFilterNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (filter: string) => {
    const params = filter === 'all' ? '' : `?stack=${filter}`;

    router.push(pathname + params);
  };
};

export const useProjectFilter = (projects: IProject[]) => {
  const activeFilter = useSearchParams().get('stack') || 'all';

  const handleFilterClick = useFilterNavigation();

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }

    return projects.filter(project => project.stack === activeFilter);
  }, [projects, activeFilter]);

  return {
    activeFilter,
    filteredProjects,
    handleFilterClick,
  };
};
