import { useState } from 'react';

export const useParamsProject = () => {
  const [paramsProject, setPramsProject] = useState({
    totalPages: 10,
    currentPage: 0,
  });
  return { paramsProject };
};
