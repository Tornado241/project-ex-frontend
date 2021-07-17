import { api } from './api';

export const getAllProjectAPI = params => {
  return api.get('/projects', params);
};

export const createProjectAPI = body => {
  return api.post('/projects', body);
};
