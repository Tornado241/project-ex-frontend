import { api } from './api';

export const getAllProjectAPI = params => {
  return api.get('/projects', params);
};

export const createProjectAPI = body => {
  return api.post('/projects', body);
};

export const updateProjectAPI = (body, id) => {
  return api.put(`/projects/${id}`, body);
};

export const deleteProjectAPI = id => {
  return api.delete(`/projects/${id}`);
};
