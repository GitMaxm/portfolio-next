import { apiClient } from "@/shared/api";

import type { IProject, TProjectId } from "../model/types";

const JSON_SERVER_URL = 'http://localhost:3001/projects/'

export const projectsApi = {
  getProjects() {
    return apiClient.get<IProject[]>(JSON_SERVER_URL);
  },

  getProjectById(id: TProjectId) {
    return apiClient.get<IProject>(JSON_SERVER_URL + id);
  },

  addProject(project: IProject) {
    return apiClient.post<IProject>(JSON_SERVER_URL, project);
  },

  updateProject(project: IProject) {
    return apiClient.put<IProject>(JSON_SERVER_URL + project.id, project);
  },

  deleteProject(id: TProjectId) {
    return apiClient.delete<unknown>(JSON_SERVER_URL + id);
  }
}
