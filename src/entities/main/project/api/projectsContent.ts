import content from '@content/portfolio.json';

import type { IProject, TProjectId } from '../model/types';

const projects = content.projects as IProject[];

export const projectsContent = {
  getProjects() {
    return projects;
  },

  getProjectById(id: TProjectId) {
    return projects.find((project) => String(project.id) === String(id));
  },
};
