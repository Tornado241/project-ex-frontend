import { API_URL } from '../common/constant';

export const getUrlAPI = endPoint => {
  return `${API_URL}${endPoint}`;
};
