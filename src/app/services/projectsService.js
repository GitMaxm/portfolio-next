import { apiClient } from "@/utils/helpers/apiClient";

const JSON_SERVER_URL = 'http://localhost:3001'

export const projectsServiceApi = {
  getProjects() {
    return apiClient.get(`${JSON_SERVER_URL}/projects`);
  },

  getProjectById(id) {
    return apiClient.get(`${JSON_SERVER_URL}/projects/${id}`);
  },

  addProject (project) {
    return apiClient.post(`${JSON_SERVER_URL}/projects`, project);
  },

  updateProject (project) {
    return apiClient.put(`${JSON_SERVER_URL}/projects/${project.id}`, project);
  },

  deleteProject (id) {
    return apiClient.delete(`${JSON_SERVER_URL}/projects/${id}`);
  }
}