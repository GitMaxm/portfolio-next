import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';

export const useProjectFilter = (projects, activeFilter) => {
  const router = useRouter();
  const pathname = usePathname();

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter(project => project.stack === activeFilter);
  }, [projects, activeFilter]);

  const handleFilter = (filter) => {
    const params = filter === 'all' ? '' : `?stack=${filter}`;
    router.push(pathname + params);
  };

  return {
    filteredProjects,
    handleFilter,
  };
};