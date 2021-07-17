export const projectActionTypes = {
  GET_ALL_PROJECT_START: 'GET_ALL_PROJECT_START',
  GET_ALL_PROJECT_SUCCESS: 'GET_ALL_PROJECT_SUCCESS',
  GET_ALL_PROJECT_ERROR: 'GET_ALL_PROJECT_ERROR',

  CREATE_PROJECT_START: 'CREATE_PROJECT_START',
  CREATE_PROJECT_SUCCESS: 'CREATE_PROJECT_SUCCESS',
  CREATE_PROJECT_ERROR: 'CREATE_PROJECT_ERROR',

  UPDATE_PROJECT_START: 'UPDATE_PROJECT_START',
  UPDATE_PROJECT_SUCCESS: 'UPDATE_PROJECT_SUCCESS',
  UPDATE_PROJECT_ERROR: 'UPDATE_PROJECT_ERROR',

  DELETE_PROJECT_START: 'DELETE_PROJECT_START',
  DELETE_PROJECT_SUCCESS: 'DELETE_PROJECT_SUCCESS',
  DELETE_PROJECT_ERROR: 'DELETE_PROJECT_ERROR',
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
  createProject: body => ({
    type: projectActionTypes.CREATE_PROJECT_START,
    body,
  }),
  createProjectSuccess: payload => ({
    type: projectActionTypes.CREATE_PROJECT_SUCCESS,
    payload,
  }),
  createProjectError: error => ({
    type: projectActionTypes.CREATE_PROJECT_ERROR,
    error,
  }),
  updateProject: (body, id) => ({
    type: projectActionTypes.UPDATE_PROJECT_START,
    body,
    id,
  }),
  updateProjectSuccess: payload => ({
    type: projectActionTypes.UPDATE_PROJECT_SUCCESS,
    payload,
  }),
  updateProjectError: error => ({
    type: projectActionTypes.UPDATE_PROJECT_ERROR,
    error,
  }),
  deleteProject: id => ({
    type: projectActionTypes.DELETE_PROJECT_START,
    id,
  }),
  deleteProjectSuccess: payload => ({
    type: projectActionTypes.DELETE_PROJECT_SUCCESS,
    payload,
  }),
  deleteProjectError: error => ({
    type: projectActionTypes.DELETE_PROJECT_ERROR,
    error,
  }),
};
