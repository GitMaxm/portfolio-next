import { apiClient } from '@/shared/api';

import type { ISkill, TSkillDraft, TSkillId } from '../model/types';

const JSON_SERVER_URL = 'http://localhost:3001/skills/'

export const skillsApi = {
  getSkills() {
    return apiClient.get<ISkill[]>(JSON_SERVER_URL);
  },

  getSkillById(id: TSkillId) {
    return apiClient.get<ISkill>(JSON_SERVER_URL + id);
  },

  addSkill(skill: TSkillDraft) {
    return apiClient.post<ISkill>(JSON_SERVER_URL, skill);
  },

  updateSkill(skill: ISkill) {
    return apiClient.put<ISkill>(JSON_SERVER_URL + skill.id, skill);
  },

  deleteSkill(id: TSkillId) {
    return apiClient.delete<unknown>(JSON_SERVER_URL + id);
  }
}
