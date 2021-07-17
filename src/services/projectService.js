import { api } from './api';

export const getAllProjectAPI = params => {
  return api.get('/projects', params);
};
