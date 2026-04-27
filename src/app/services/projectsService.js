import { apiClient } from "@/utils/helpers/apiClient";

const JSON_SERVER_URL = 'http://localhost:3001/projects/'

export const projectsServiceApi = {
  getProjects() {
    return apiClient.get(JSON_SERVER_URL);
  },

  getProjectById(id) {
    return apiClient.get(JSON_SERVER_URL + id);
  },

  addProject(project) {
    return apiClient.post(JSON_SERVER_URL, project);
  },

  updateProject(project) {
    return apiClient.put(JSON_SERVER_URL + project.id, project);
  },

  deleteProject(id) {
    return apiClient.delete(JSON_SERVER_URL + id);
  }
}