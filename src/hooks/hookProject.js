import { useState } from 'react';

export const useParamsProject = () => {
  const [paramsProject, setPramsProject] = useState({
    totalPages: 10,
    currentPage: 0,
  });

  const callbackChangePage = (currentPage, totalPages) => {
    setPramsProject({ ...paramsProject, totalPages, currentPage: currentPage - 1 });
  };
  return { paramsProject, callbackChangePage };
};
