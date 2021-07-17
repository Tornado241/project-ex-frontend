export const projectActionTypes = {
  GET_ALL_PROJECT_START: 'GET_ALL_PROJECT_START',
  GET_ALL_PROJECT_SUCCESS: 'GET_ALL_PROJECT_SUCCESS',
  GET_ALL_PROJECT_ERROR: 'GET_ALL_PROJECT_ERROR',
};

export const projectActions = {
  getAllProject: params => ({
    type: projectActionTypes.GET_ALL_PROJECT_START,
    params,
  }),
  getAllProjectSuccess: payload => ({
    type: projectActionTypes.GET_ALL_PROJECT_SUCCESS,
    payload,
  }),
  getAllProjectError: error => ({
    type: projectActionTypes.GET_ALL_PROJECT_ERROR,
    error,
  }),
};
